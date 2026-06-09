import "server-only";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

/**
 * Submission persistence (brief Update 8) — the data is W4GZ's own and secure.
 * Writes server-side ONLY (never from the client; no DB keys client-side) to your
 * own Postgres via the Supabase/PostgREST endpoint (`SUPABASE_URL` +
 * `SUPABASE_SERVICE_ROLE_KEY`, with row-level security on the table). Free-text is
 * optionally app-layer encrypted (AES-256-GCM) when `FORMS_ENCRYPTION_KEY` is set.
 * Without a DB configured (e.g. dev) it logs only — never a third-party vendor.
 *
 * Table (see docs/forms-schema.sql):
 *   form_submissions(id uuid pk, kind text, data jsonb, ip_hash text, created_at timestamptz)
 */
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TABLE = process.env.SUBMISSIONS_TABLE ?? "form_submissions";

export interface SubmissionRecord {
  kind: "apply" | "graduation";
  data: Record<string, unknown>;
  ip_hash: string;
}

function encKey(): Buffer | null {
  const raw = process.env.FORMS_ENCRYPTION_KEY;
  if (!raw) return null;
  const key = Buffer.from(raw, "base64");
  return key.length === 32 ? key : null;
}

function seal(data: Record<string, unknown>): Record<string, unknown> {
  const key = encKey();
  if (!key) return data;
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const enc = Buffer.concat([cipher.update(JSON.stringify(data), "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return { enc: Buffer.concat([iv, tag, enc]).toString("base64") };
}

function open(stored: Record<string, unknown>): Record<string, unknown> {
  const key = encKey();
  if (!key || typeof stored.enc !== "string") return stored;
  const buf = Buffer.from(stored.enc, "base64");
  const iv = buf.subarray(0, 12);
  const tag = buf.subarray(12, 28);
  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  const dec = Buffer.concat([decipher.update(buf.subarray(28)), decipher.final()]);
  return JSON.parse(dec.toString("utf8"));
}

export const dbConfigured = Boolean(SUPABASE_URL && SERVICE_KEY);

export async function saveSubmission(rec: SubmissionRecord): Promise<{ stored: boolean }> {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Dev / unconfigured: never drop silently — log that it wasn't persisted.
    console.info(`[forms] ${rec.kind} submission received but NOT persisted (DB not configured).`);
    return { stored: false };
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      apikey: SERVICE_KEY,
      authorization: `Bearer ${SERVICE_KEY}`,
      prefer: "return=minimal",
    },
    body: JSON.stringify({ kind: rec.kind, data: seal(rec.data), ip_hash: rec.ip_hash }),
  });
  if (!res.ok) throw new Error(`store failed: ${res.status} ${await res.text()}`);
  return { stored: true };
}

/** Team read access for the quarterly review (used by the protected export route). */
export async function listSubmissions(kind?: "apply" | "graduation") {
  if (!SUPABASE_URL || !SERVICE_KEY) return [];
  const filter = kind ? `kind=eq.${kind}&` : "";
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${TABLE}?${filter}order=created_at.desc`,
    { headers: { apikey: SERVICE_KEY, authorization: `Bearer ${SERVICE_KEY}` } },
  );
  if (!res.ok) throw new Error(`list failed: ${res.status}`);
  const rows = (await res.json()) as { data: Record<string, unknown> }[];
  return rows.map((r) => ({ ...r, data: open(r.data) }));
}
