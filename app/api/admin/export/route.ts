import { listSubmissions } from "@/lib/forms/store";

/**
 * Minimal team-only export for the quarterly review (brief Update 8). Locked by
 * default: requires `Authorization: Bearer ${ADMIN_EXPORT_TOKEN}` — if the token
 * env is unset, every request is rejected. Returns submissions as JSON (the
 * Postgres DB remains the source of truth). A richer admin UI is a follow-up.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const token = process.env.ADMIN_EXPORT_TOKEN;
  if (!token || req.headers.get("authorization") !== `Bearer ${token}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  const kind = new URL(req.url).searchParams.get("kind");
  const rows = await listSubmissions(
    kind === "apply" || kind === "graduation" ? kind : undefined,
  );
  return Response.json({ count: rows.length, rows });
}
