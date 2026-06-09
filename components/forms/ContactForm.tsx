"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { contact as C } from "@/content/contact";
import type { Field } from "@/lib/forms/schema";
import Container from "@/components/ui/Container";
import FormField from "./FormField";
import Turnstile from "./Turnstile";

/**
 * Contact us (Patch E): two audience cards → a short 4-field form → a warm
 * confirmation → home. POSTs to /api/contact (secure backend, UPDATE 8).
 * Monochrome; real buttons + focus states; reduced-motion via `.pon-rise`.
 */
const FIELDS: Field[] = [
  { id: "name", label: C.fields.name.label, type: "text", required: true, placeholder: C.fields.name.placeholder, errorMsg: C.fields.name.err },
  { id: "email", label: C.fields.email.label, type: "email", required: true, placeholder: C.fields.email.placeholder, errorMsg: C.fields.email.err },
  { id: "org", label: C.fields.org.label, type: "text", optional: true, placeholder: C.fields.org.placeholder },
  { id: "message", label: C.fields.message.label, type: "textarea", required: true, rows: 5, placeholder: C.fields.message.placeholder, errorMsg: C.fields.message.err },
];
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type View = "choose" | "form" | "done";

export default function ContactForm() {
  const [view, setView] = useState<View>("choose");
  const [audience, setAudience] = useState("");
  const [values, setValues] = useState<Record<string, string>>({ name: "", email: "", org: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const tokenRef = useRef<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const onToken = useCallback((t: string | null) => {
    tokenRef.current = t;
  }, []);

  const set = (id: string, v: string | string[]) => {
    setValues((p) => ({ ...p, [id]: String(v) }));
    setErrors((p) => {
      if (!p[id]) return p;
      const n = { ...p };
      delete n[id];
      return n;
    });
  };

  function validate() {
    const e: Record<string, string> = {};
    for (const f of FIELDS) {
      const s = (values[f.id] ?? "").trim();
      if (f.required && !s) e[f.id] = f.errorMsg ?? "Phần này cần bạn điền nhé.";
      else if (s && f.type === "email" && !EMAIL_RE.test(s)) e[f.id] = f.errorMsg ?? "Email chưa hợp lệ.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function send() {
    if (!validate()) return;
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: { ...values, audience },
          website: honeypotRef.current?.value ?? "",
          turnstileToken: tokenRef.current,
        }),
      });
      const j: { ok?: boolean; error?: string; errors?: Record<string, string> } = await res
        .json()
        .catch(() => ({}));
      if (res.ok && j.ok) {
        setView("done");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (res.status === 422 && j.errors) {
        setErrors(j.errors);
      } else {
        setServerError(j.error ?? "Có trục trặc — thử lại sau một lát nhé.");
      }
    } catch {
      setServerError("Không gửi được — kiểm tra kết nối rồi thử lại nhé.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Container>
      <div className="mx-auto max-w-2xl py-14 lg:py-20">
        {view === "choose" ? (
          <div className="pon-rise text-center">
            <p className="mb-4 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-muted">{C.kicker}</p>
            <p className="mx-auto mb-2 max-w-lg font-display text-[clamp(1.5rem,4vw,2.1rem)] italic leading-tight text-ink">
              {C.motto}
            </p>
            <p className="mx-auto mb-9 max-w-md text-muted">{C.lead}</p>
            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {C.audiences.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setAudience(a.id);
                    setView("form");
                  }}
                  className="hr-all flex flex-col gap-2 rounded-[10px] p-6 transition-colors hover:border-ink hover:bg-paper-dark/40 focus-visible:border-ink"
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">{a.label}</span>
                  <span className="font-display text-2xl font-semibold text-ink">{a.title}</span>
                  <span className="text-sm leading-relaxed text-ink/80">{a.desc}</span>
                  <span className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink">{a.go}</span>
                </button>
              ))}
            </div>
          </div>
        ) : view === "form" ? (
          <div className="pon-rise">
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
            />
            <p className="mb-1 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-muted">Bạn là: {audience}</p>
            <h1 className="mb-8 font-display text-[clamp(1.9rem,5vw,2.6rem)] font-semibold leading-tight text-ink">
              {C.formHeading}
            </h1>
            {FIELDS.map((f) => (
              <FormField key={f.id} field={f} value={values[f.id]} error={errors[f.id]} onChange={(v) => set(f.id, v)} />
            ))}
            <Turnstile onToken={onToken} />
            {serverError ? (
              <p role="alert" className="mt-4 text-sm italic text-ink/70">
                {serverError}
              </p>
            ) : null}
            <div className="mt-8 flex items-center justify-between gap-3 hr-t pt-6">
              <button
                type="button"
                onClick={() => setView("choose")}
                className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
              >
                {C.back}
              </button>
              <button
                type="button"
                onClick={send}
                disabled={submitting}
                className="inline-flex items-center rounded-[2px] bg-ink px-5 py-2.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-paper transition-colors hover:opacity-85 disabled:opacity-40"
              >
                {submitting ? "Đang gửi…" : C.send}
              </button>
            </div>
          </div>
        ) : (
          <div className="pon-rise py-12 text-center">
            <div className="mb-4 font-display text-4xl italic leading-none text-ink">{C.confirm.mark}</div>
            <h2 className="mb-4 font-display text-3xl font-semibold text-ink">{C.confirm.heading}</h2>
            <p className="mx-auto mb-7 max-w-md text-muted">{C.confirm.body}</p>
            <Link
              href={C.confirm.homeHref}
              className="inline-flex items-center rounded-[2px] bg-ink px-5 py-2.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-paper transition-colors hover:opacity-85"
            >
              {C.confirm.home}
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}
