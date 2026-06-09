import "server-only";
import { createHash } from "node:crypto";

/**
 * Server-only spam/abuse defences for the on-site forms (brief Update 8):
 * in-memory rate-limit, IP hashing (minimal logging), and Cloudflare Turnstile
 * verification. Turnstile is gated by env — without a secret (e.g. dev) it is
 * skipped so the forms still work locally; in production set TURNSTILE_SECRET_KEY.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length <= max;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : "")?.trim() || "0.0.0.0";
}

/** One-way hash so we can rate-limit / dedupe without storing raw IPs. */
export function hashIp(ip: string): string {
  const salt = process.env.FORMS_IP_SALT ?? "w4gz";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

export async function verifyTurnstile(
  token: unknown,
  ip: string,
): Promise<{ ok: boolean; skipped?: boolean }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true, skipped: true };
  if (typeof token !== "string" || !token) return { ok: false };
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "0.0.0.0") body.set("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body },
    );
    const data = (await res.json()) as { success?: boolean };
    return { ok: data.success === true };
  } catch {
    return { ok: false };
  }
}
