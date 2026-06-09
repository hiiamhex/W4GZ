/**
 * Shared form schema + validation for the on-site forms (brief Update 8). The
 * SAME spec drives the client UI and the server-side re-validation in the Route
 * Handlers, so the two never drift. No third-party form vendor.
 */
export type FieldType = "text" | "email" | "textarea" | "select" | "chips";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  /** Renders a gentle "(tuỳ bạn)" tag (or `optionalLabel`). */
  optional?: boolean;
  optionalLabel?: string;
  placeholder?: string;
  hint?: string;
  options?: string[];
  rows?: number;
  wordCount?: boolean;
  errorMsg?: string;
  maxLength?: number;
}

export interface FormStep {
  heading: string;
  note?: string;
  fields: Field[];
  /** The final step: render a review of the answers + the consent checkbox. */
  review?: boolean;
}

export interface FormSpec {
  kind: "apply" | "graduation";
  /** Multi-step (stepper) vs. single page (all groups visible). */
  layout: "stepper" | "single";
  intro: { kicker: string; heading: string; lead: string };
  steps: FormStep[];
  consent: { label: string; errorMsg: string };
  confirm: { mark: string; heading: string; lines: string[] };
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MAX: Record<FieldType, number> = {
  text: 500,
  email: 320,
  select: 200,
  textarea: 25000,
  chips: 60,
};

export function fields(spec: FormSpec): Field[] {
  return spec.steps.flatMap((s) => s.fields);
}

/** Server + client validation. Returns field-id → gentle error message. */
export function validate(
  spec: FormSpec,
  data: Record<string, unknown>,
): { ok: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  for (const f of fields(spec)) {
    const v = data[f.id];
    if (f.type === "chips") {
      const arr = Array.isArray(v) ? v : [];
      if (f.required && arr.length === 0) errors[f.id] = f.errorMsg ?? "Hãy chọn ít nhất một.";
      if (arr.some((x) => typeof x !== "string" || x.length > MAX.chips))
        errors[f.id] = "Lựa chọn không hợp lệ.";
      continue;
    }
    const s = typeof v === "string" ? v.trim() : "";
    if (f.required && !s) {
      errors[f.id] = f.errorMsg ?? "Phần này cần bạn điền nhé.";
      continue;
    }
    if (!s) continue;
    if (s.length > (f.maxLength ?? MAX[f.type])) errors[f.id] = "Nội dung hơi dài — rút gọn lại giúp nhé.";
    if (f.type === "email" && !EMAIL_RE.test(s)) errors[f.id] = f.errorMsg ?? "Email chưa hợp lệ.";
  }
  if (data.consent !== true) errors.consent = spec.consent.errorMsg;
  return { ok: Object.keys(errors).length === 0, errors };
}
