import "server-only";
import type { FormSpec } from "./schema";
import { validate } from "./schema";
import { clientIp, hashIp, rateLimit, verifyTurnstile } from "./security";
import { saveSubmission } from "./store";
import { sendSubmissionEmails } from "./email";

/**
 * Shared POST pipeline for the on-site forms (brief Update 8): rate-limit →
 * honeypot → Turnstile → server-side re-validation → persist (own DB) → email
 * (best-effort). Never trusts the client; the same `FormSpec` validates here and
 * in the UI. Returns gentle, Vietnamese error messages.
 */
function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

export async function handleSubmission(req: Request, spec: FormSpec) {
  const ip = clientIp(req);
  if (!rateLimit(`${spec.kind}:${ip}`)) {
    return json({ ok: false, error: "Bạn gửi hơi nhanh — thử lại sau một lát nhé." }, 429);
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Dữ liệu không hợp lệ." }, 400);
  }

  // Honeypot: a real person never fills this; bots do. Accept-and-drop silently.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const challenge = await verifyTurnstile(body.turnstileToken, ip);
  if (!challenge.ok) {
    return json({ ok: false, error: "Xác minh chống spam chưa qua — tải lại trang giúp nhé." }, 400);
  }

  const data =
    body.data && typeof body.data === "object"
      ? (body.data as Record<string, unknown>)
      : {};
  const { ok, errors } = validate(spec, data);
  if (!ok) return json({ ok: false, errors }, 422);

  try {
    await saveSubmission({ kind: spec.kind, data, ip_hash: hashIp(ip) });
  } catch (err) {
    console.error("[forms] persist failed:", err);
    return json({ ok: false, error: "Có trục trặc khi lưu — thử lại sau một lát nhé." }, 500);
  }

  // Notifications are best-effort and must not block the submission.
  void sendSubmissionEmails(spec.kind, data).catch(() => {});

  return json({ ok: true });
}
