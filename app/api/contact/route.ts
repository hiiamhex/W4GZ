import { clientIp, hashIp, rateLimit, verifyTurnstile } from "@/lib/forms/security";
import { saveSubmission } from "@/lib/forms/store";
import { sendSubmissionEmails } from "@/lib/forms/email";

/**
 * Contact form submissions (Patch E) — same secure pipeline as the other on-site
 * forms (UPDATE 8): rate-limit → honeypot → Turnstile → validation → persist
 * (own DB) → email. Captures the chosen audience + name/email/org/message.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`contact:${ip}`)) {
    return json({ ok: false, error: "Bạn gửi hơi nhanh — thử lại sau một lát nhé." }, 429);
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Dữ liệu không hợp lệ." }, 400);
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const challenge = await verifyTurnstile(body.turnstileToken, ip);
  if (!challenge.ok) {
    return json({ ok: false, error: "Xác minh chống spam chưa qua — tải lại trang giúp nhé." }, 400);
  }

  const data =
    body.data && typeof body.data === "object" ? (body.data as Record<string, unknown>) : {};
  const str = (k: string) => (typeof data[k] === "string" ? (data[k] as string).trim() : "");
  const name = str("name");
  const email = str("email");
  const org = str("org");
  const message = str("message");

  if (name.length > 300 || email.length > 320 || org.length > 500 || message.length > 10000) {
    return json({ ok: false, error: "Nội dung hơi dài — rút gọn lại giúp nhé." }, 422);
  }

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Cho chúng tôi biết tên bạn nhé.";
  if (!email || !EMAIL_RE.test(email)) errors.email = "Một email hợp lệ để chúng tôi hồi âm.";
  if (!message) errors.message = "Viết cho chúng tôi vài dòng nhé.";
  if (Object.keys(errors).length) return json({ ok: false, errors }, 422);

  try {
    await saveSubmission({ kind: "contact", data, ip_hash: hashIp(ip) });
  } catch (err) {
    console.error("[forms] contact persist failed:", err);
    return json({ ok: false, error: "Có trục trặc khi gửi — thử lại sau một lát nhé." }, 500);
  }

  void sendSubmissionEmails("contact", data).catch(() => {});
  return json({ ok: true });
}
