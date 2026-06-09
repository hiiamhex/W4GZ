"use client";

import { Link } from "next-view-transitions";
import { useCallback, useRef, useState } from "react";
import { fields as allFields, type Field, type FormSpec } from "@/lib/forms/schema";
import Container from "@/components/ui/Container";
import FormField from "./FormField";
import Turnstile from "./Turnstile";

/**
 * Drives both on-site forms (brief Update 8) from a shared FormSpec: the stepper
 * (apply — one step at a time + progress + review) and the single page
 * (graduation). State lives in React only (no browser storage); the server
 * re-validates every field. Honeypot + Turnstile + gentle errors; monochrome.
 */
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const BTN =
  "inline-flex items-center rounded-[2px] px-5 py-2.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] transition-colors disabled:opacity-40";
const BTN_FWD = `${BTN} bg-ink text-paper hover:opacity-85`;
const BTN_GHOST = `${BTN} hr-all text-muted hover:border-ink hover:text-ink`;

type Values = Record<string, string | string[]>;

function initialValues(spec: FormSpec): Values {
  const v: Values = {};
  for (const f of allFields(spec)) v[f.id] = f.type === "chips" ? [] : "";
  return v;
}

function fieldErrors(list: Field[], values: Values): Record<string, string> {
  const e: Record<string, string> = {};
  for (const f of list) {
    const val = values[f.id];
    if (f.type === "chips") {
      if (f.required && (!Array.isArray(val) || val.length === 0))
        e[f.id] = f.errorMsg ?? "Hãy chọn ít nhất một.";
      continue;
    }
    const s = typeof val === "string" ? val.trim() : "";
    if (f.required && !s) {
      e[f.id] = f.errorMsg ?? "Phần này cần bạn điền nhé.";
      continue;
    }
    if (s && f.type === "email" && !EMAIL_RE.test(s)) e[f.id] = f.errorMsg ?? "Email chưa hợp lệ.";
  }
  return e;
}

export default function FormRunner({ spec, endpoint }: { spec: FormSpec; endpoint: string }) {
  const stepper = spec.layout === "stepper";
  const N = spec.steps.length;

  const [values, setValues] = useState<Values>(() => initialValues(spec));
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consentError, setConsentError] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const tokenRef = useRef<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const onToken = useCallback((t: string | null) => {
    tokenRef.current = t;
  }, []);

  const set = (id: string, v: string | string[]) => {
    setValues((p) => ({ ...p, [id]: v }));
    setErrors((p) => {
      if (!p[id]) return p;
      const n = { ...p };
      delete n[id];
      return n;
    });
  };

  async function submit() {
    const e = fieldErrors(allFields(spec), values);
    const missingConsent = !consent;
    setErrors(e);
    setConsentError(missingConsent ? spec.consent.errorMsg : null);
    if (Object.keys(e).length || missingConsent) {
      if (stepper) {
        const idx = spec.steps.findIndex((st) => st.fields.some((f) => e[f.id]));
        if (idx >= 0) setStep(idx);
      }
      return;
    }
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: { ...values, consent: true },
          website: honeypotRef.current?.value ?? "",
          turnstileToken: tokenRef.current,
        }),
      });
      const json: { ok?: boolean; error?: string; errors?: Record<string, string> } = await res
        .json()
        .catch(() => ({}));
      if (res.ok && json.ok) {
        setDone(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        if (json.errors.consent) setConsentError(json.errors.consent);
      } else {
        setServerError(json.error ?? "Có trục trặc — thử lại sau một lát nhé.");
      }
    } catch {
      setServerError("Không gửi được — kiểm tra kết nối rồi thử lại nhé.");
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    const e = fieldErrors(spec.steps[step].fields, values);
    if (Object.keys(e).length) {
      setErrors((p) => ({ ...p, ...e }));
      return;
    }
    if (step < N - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      submit();
    }
  }

  const renderFields = (list: Field[]) =>
    list.map((f) => (
      <FormField key={f.id} field={f} value={values[f.id]} error={errors[f.id]} onChange={(v) => set(f.id, v)} />
    ));

  const consentBlock = (
    <div className="mt-2">
      <label className="flex items-start gap-3 text-sm text-ink/85">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            setConsentError(null);
          }}
          className="mt-1 accent-ink"
        />
        <span>
          {spec.consent.label}{" "}
          <Link href="/privacy" className="underline decoration-hairline underline-offset-2 hover:decoration-ink">
            Tìm hiểu thêm
          </Link>
          .
        </span>
      </label>
      {consentError ? (
        <p role="alert" className="mt-1.5 text-xs italic text-ink/70">
          {consentError}
        </p>
      ) : null}
      <Turnstile onToken={onToken} />
    </div>
  );

  if (done) {
    return (
      <Container>
        <div className="pon-rise mx-auto max-w-xl py-24 text-center">
          <div className="mb-5 font-display text-5xl italic leading-none text-ink">{spec.confirm.mark}</div>
          <h2 className="mb-4 font-display text-3xl font-semibold text-ink">{spec.confirm.heading}</h2>
          {spec.confirm.lines.map((l, i) => (
            <p key={i} className="mx-auto max-w-md text-muted">
              {l}
            </p>
          ))}
          {spec.kind === "apply" ? (
            <p className="mt-7">
              <Link
                href="/power-of-narrative"
                className="font-display text-xl italic text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink"
              >
                The Power of Narrative →
              </Link>
            </p>
          ) : null}
        </div>
      </Container>
    );
  }

  const cur = spec.steps[step];

  return (
    <>
      {stepper ? (
        <div className="sticky top-[var(--nav-h)] z-30 hr-b bg-paper/85 backdrop-blur-md">
          <Container className="flex items-center justify-between py-2.5">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">{spec.intro.kicker}</span>
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              Bước {step + 1} / {N}
            </span>
          </Container>
          <div
            className="h-[1.5px] bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.6,0,0.2,1)]"
            style={{ width: `${((step + 1) / N) * 100}%` }}
          />
        </div>
      ) : null}

      <Container>
        <div className="mx-auto max-w-xl py-12 lg:py-16">
          {/* Honeypot — off-screen; a real person never fills it. */}
          <input
            ref={honeypotRef}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
          />

          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-px w-7 bg-ink" />
            {spec.intro.kicker}
          </p>
          <h1 className="mb-3 font-display text-[2.1rem] font-semibold leading-[1.05] text-ink sm:text-5xl">
            {spec.intro.heading}
          </h1>
          <p className="mb-10 max-w-xl font-display text-xl leading-relaxed text-ink/85">{spec.intro.lead}</p>

          {stepper ? (
            <div key={step} className="pon-rise">
              <h2 className="mb-1 font-display text-2xl font-semibold text-ink">{cur.heading}</h2>
              {cur.note ? <p className="mb-7 max-w-lg text-base text-muted">{cur.note}</p> : null}

              {cur.review ? (
                <>
                  <dl>
                    {allFields(spec).map((f) => {
                      const v = values[f.id];
                      const text = Array.isArray(v) ? v.join(", ") : v;
                      if (!text) return null;
                      return (
                        <div key={f.id} className="mt-4">
                          <dt className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted">
                            {f.label}
                          </dt>
                          <dd className="mt-1 whitespace-pre-wrap text-ink/85">{text}</dd>
                        </div>
                      );
                    })}
                  </dl>
                  <div className="mt-8">{consentBlock}</div>
                </>
              ) : (
                renderFields(cur.fields)
              )}

              {serverError ? (
                <p role="alert" className="mt-4 text-sm italic text-ink/70">
                  {serverError}
                </p>
              ) : null}

              <div className="mt-9 flex items-center justify-between gap-3 hr-t pt-6">
                <button
                  type="button"
                  className={BTN_GHOST}
                  disabled={step === 0}
                  onClick={() => {
                    setStep(step - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  ← Quay lại
                </button>
                <button type="button" className={BTN_FWD} disabled={submitting} onClick={next}>
                  {step === N - 1 ? (submitting ? "Đang gửi…" : "Gửi đơn") : "Tiếp →"}
                </button>
              </div>
            </div>
          ) : (
            <>
              {spec.steps.map((g, i) => (
                <section key={i} className={i > 0 ? "mt-10" : ""}>
                  <h2 className="mb-1 font-display text-[1.45rem] font-semibold text-ink">{g.heading}</h2>
                  {g.note ? <p className="mb-6 max-w-lg text-base text-muted">{g.note}</p> : null}
                  {renderFields(g.fields)}
                </section>
              ))}
              <div className="mt-6">{consentBlock}</div>
              {serverError ? (
                <p role="alert" className="mt-4 text-sm italic text-ink/70">
                  {serverError}
                </p>
              ) : null}
              <div className="mt-8 flex justify-end hr-t pt-6">
                <button type="button" className={BTN_FWD} disabled={submitting} onClick={submit}>
                  {submitting ? "Đang gửi…" : "Nộp bài"}
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
}
