import { SUBMIT_ENDPOINT } from "./config";

/**
 * Stubbed, configurable form handler. No backend is required: by default this
 * logs the payload to the console. When `SUBMIT_ENDPOINT` is set, it POSTs JSON.
 * TODO(placeholder): wire `SUBMIT_ENDPOINT` to the real email/enrollment backend.
 */

export type SubmitKind = "enroll" | "apply" | "subscribe" | "contact";

export interface SubmitResult {
  ok: boolean;
  message?: string;
}

export async function submitForm(
  kind: SubmitKind,
  payload: Record<string, unknown>,
): Promise<SubmitResult> {
  // Always log so the flow is observable during development / before launch.
  console.info("[W4GZ submit]", kind, payload);

  if (!SUBMIT_ENDPOINT) {
    // Simulate latency so UI feedback (loading -> done) is exercised.
    await new Promise((r) => setTimeout(r, 450));
    return { ok: true, message: "stub" };
  }

  try {
    const res = await fetch(SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, ...payload }),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false, message: "network" };
  }
}
