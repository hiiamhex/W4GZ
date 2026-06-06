"use client";

import { useState } from "react";
import { submitForm, type SubmitKind } from "@/lib/submit";
import CTAButton from "@/components/ui/CTAButton";

/**
 * Email-capture / enroll / apply form. Posts to the stubbed, configurable
 * handler in lib/submit.ts (console by default; SUBMIT_ENDPOINT when set).
 */
export default function StubForm({
  kind,
  submitLabel,
  placeholder = "email của bạn",
  successMessage = "Đã ghi nhận — chúng tôi sẽ liên hệ với bạn.",
  variant = "filled",
  dark = false,
  className = "",
}: {
  kind: SubmitKind;
  submitLabel: string;
  placeholder?: string;
  successMessage?: string;
  variant?: "filled" | "outline" | "inverse";
  dark?: boolean;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    const res = await submitForm(kind, { email });
    setState(res.ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <p
        className={`font-mono text-xs uppercase tracking-[0.18em] ${
          dark ? "text-paper/80" : "text-muted"
        } ${className}`}
        role="status"
      >
        {successMessage}
      </p>
    );
  }

  const inputRule = dark ? "hr-b-inv" : "hr-b";
  const inputText = dark
    ? "text-paper placeholder:text-paper/40"
    : "text-ink placeholder:text-muted";

  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-3 sm:flex-row sm:items-end ${className}`}
      noValidate
    >
      <div className="flex-1">
        <label htmlFor={`email-${kind}`} className="sr-only">
          Email
        </label>
        <input
          id={`email-${kind}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-transparent px-1 py-3 font-mono text-sm focus:outline-none ${inputRule} ${inputText}`}
        />
        {state === "error" ? (
          <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
            Có lỗi xảy ra — thử lại nhé.
          </p>
        ) : null}
      </div>
      <CTAButton
        type="submit"
        variant={variant}
        disabled={state === "loading"}
        className="shrink-0"
      >
        {state === "loading" ? "Đang gửi…" : submitLabel}
      </CTAButton>
    </form>
  );
}
