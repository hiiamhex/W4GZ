import "server-only";

/**
 * Transactional email for submissions (brief Update 8) — your own sending domain
 * via Resend's REST API (no SDK; gated by env). Sends a team notification + a
 * gentle confirmation to the applicant. Best-effort: failures never block a
 * submission. Without `RESEND_API_KEY` (e.g. dev) it logs only.
 */
const KEY = process.env.RESEND_API_KEY;
const FROM = process.env.FORMS_FROM_EMAIL;
const TEAM = process.env.FORMS_TEAM_EMAIL;

async function send(payload: { to: string; subject: string; text: string }) {
  if (!KEY || !FROM) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: FROM, ...payload }),
  });
}

const LABEL = {
  apply: "đơn đăng ký",
  graduation: "bài tốt nghiệp",
  contact: "tin nhắn liên hệ",
} as const;

export async function sendSubmissionEmails(
  kind: "apply" | "graduation" | "contact",
  data: Record<string, unknown>,
) {
  if (!KEY || !FROM) {
    console.info(`[forms] email skipped for ${kind} (Resend not configured).`);
    return;
  }
  const name = typeof data.name === "string" ? data.name : "—";
  const email = typeof data.email === "string" ? data.email : "";

  try {
    if (TEAM) {
      const summary = Object.entries(data)
        .filter(([k]) => k !== "consent")
        .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : String(v ?? "")}`)
        .join("\n");
      await send({
        to: TEAM,
        subject: `W4GZ · ${LABEL[kind]} mới — ${name}`,
        text: `Một ${LABEL[kind]} mới vừa tới:\n\n${summary}`,
      });
    }
    if (email) {
      const subject =
        kind === "apply"
          ? "Cảm ơn bạn đã kể — W4GZ đã nhận đơn của bạn"
          : kind === "graduation"
            ? "Bài tốt nghiệp của bạn đã tới tay W4GZ"
            : "Cảm ơn bạn đã ngỏ lời — W4GZ đã nhận tin nhắn";
      const lead =
        kind === "apply"
          ? "Chúng tôi đã nhận đơn của bạn và sẽ đọc bằng sự chú tâm. W4GZ xét theo đợt mỗi quý — hãy để mắt tới hộp thư của bạn."
          : kind === "graduation"
            ? "Chúng tôi đã nhận bài tốt nghiệp của bạn. Cảm ơn vì đã đi đến đây — chúng tôi sẽ đọc và hồi âm theo đợt xét mỗi quý."
            : "Mỗi tin nhắn gửi tới W4GZ đều được đọc, bằng sự chú tâm. Chúng tôi sẽ hồi âm bạn sớm.";
      await send({ to: email, subject, text: `Chào ${name},\n\n${lead}\n\n— W4GZ` });
    }
  } catch (err) {
    console.warn("[forms] email send failed (non-blocking):", err);
  }
}
