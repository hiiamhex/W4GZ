"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { applyOutcome as O } from "@/content/apply";

/**
 * Post-submit flow on the Join page (Patch 3): choose a route, then a
 * route-specific outcome. Introduction → a disabled "đang cập nhật" course-host
 * link (also emailed). Advanced → nearest cohort (placeholders) + a payment area
 * (placeholder QR + 50% deposit) + "Tôi đã thanh toán" → a confirmation that the
 * transfer is verified and enrolment details are emailed within 48h. Monochrome;
 * real buttons with focus states; reduced-motion respected (rise via `.pon-rise`).
 */
type View = "choice" | "intro" | "advanced" | "confirm";

const A = O.advanced;
const C = O.confirm;

export default function ApplyOutcome() {
  const [view, setView] = useState<View>("choice");

  return (
    <Container>
      <div key={view} className="pon-rise mx-auto max-w-xl py-16 text-center">
        {view === "choice" ? (
          <>
            <div className="mb-4 font-display text-4xl italic leading-none text-ink">{O.choice.mark}</div>
            <h2 className="mb-3 font-display text-3xl font-semibold text-ink">{O.choice.heading}</h2>
            <p className="mx-auto mb-8 max-w-md text-muted">{O.choice.note}</p>
            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {O.choice.options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setView(opt.id)}
                  className="hr-all flex flex-col gap-2 rounded-md p-6 transition-colors hover:border-ink hover:bg-paper-dark/40 focus-visible:border-ink"
                >
                  <span className="font-display text-xl font-semibold text-ink">{opt.title}</span>
                  <span className="text-sm leading-relaxed text-muted">{opt.desc}</span>
                  <span className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink">
                    {opt.go}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : view === "intro" ? (
          <>
            <div className="mb-4 font-display text-4xl italic leading-none text-ink">{O.intro.mark}</div>
            <h2 className="mb-3 font-display text-3xl font-semibold text-ink">{O.intro.heading}</h2>
            <p className="mx-auto mb-6 max-w-md text-muted">{O.intro.note}</p>
            <span
              role="link"
              aria-disabled="true"
              className="inline-block cursor-not-allowed rounded-[3px] border border-dashed border-hairline px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted"
            >
              {O.intro.placeholder}
            </span>
            <p className="mx-auto mt-6 max-w-md text-sm text-muted">{O.intro.emailNote}</p>
            <button
              type="button"
              onClick={() => setView("choice")}
              className="mx-auto mt-8 block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              {O.intro.back}
            </button>
          </>
        ) : view === "advanced" ? (
          <>
            <div className="mb-4 font-display text-4xl italic leading-none text-ink">{A.mark}</div>
            <h2 className="mb-3 font-display text-3xl font-semibold text-ink">{A.heading}</h2>
            <p className="mx-auto mb-2 max-w-md text-muted">{A.note}</p>

            <dl className="mx-auto mt-6 max-w-md rounded-lg border border-hairline px-5 text-left">
              {A.cohort.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex items-center justify-between gap-4 py-3 text-sm ${
                    i < A.cohort.length - 1 ? "hr-b" : ""
                  }`}
                >
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">{row.k}</dt>
                  <dd className="text-ink/85">{row.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mx-auto mt-7 max-w-md">
              <p className="text-muted">
                {A.payPre}
                <b className="font-medium text-ink">{A.payStrong}</b>
                {A.payPost}
              </p>
              <div
                className="hatch hr-all mx-auto mt-5 flex h-[200px] w-[200px] flex-col items-center justify-center gap-1 rounded-md"
                role="img"
                aria-label={`${A.qrLabel} — ${A.qrSub}`}
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">{A.qrLabel}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-muted/75">{A.qrSub}</span>
              </div>
              <p className="mx-auto mt-4 max-w-md text-sm text-muted">{A.transferNote}</p>
              <button
                type="button"
                onClick={() => setView("confirm")}
                className="mt-5 inline-flex items-center rounded-[2px] bg-ink px-5 py-2.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-paper transition-colors hover:opacity-85"
              >
                {A.paid}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setView("choice")}
              className="mx-auto mt-8 block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              {A.back}
            </button>
          </>
        ) : (
          <>
            <div className="mb-4 font-display text-4xl italic leading-none text-ink">{C.mark}</div>
            <h2 className="mb-3 font-display text-3xl font-semibold text-ink">{C.heading}</h2>
            <p className="mx-auto mb-3 max-w-md text-muted">
              {C.notePre}
              <b className="font-medium text-ink">{C.noteStrong}</b>
              {C.notePost}
            </p>
            <p className="mx-auto max-w-md text-sm text-muted">{C.small}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href={C.homeHref}
                className="inline-flex items-center rounded-[2px] bg-ink px-5 py-2.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-paper transition-colors hover:opacity-85"
              >
                {C.homeLabel}
              </Link>
              <Link
                href={C.readHref}
                className="inline-flex items-center rounded-[2px] border border-hairline px-5 py-2.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-muted transition-colors hover:border-ink hover:text-ink"
              >
                {C.readLabel}
              </Link>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
