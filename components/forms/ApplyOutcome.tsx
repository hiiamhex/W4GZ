"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { applyOutcome as O } from "@/content/apply";

/**
 * Post-submit flow on the Join page (Patch 3): choose a route, then a
 * route-specific outcome. Introduction → a disabled "đang cập nhật" course-host
 * link (also emailed); Advanced → a placeholder transfer QR + a 50% deposit + a
 * follow-up note. Monochrome; real buttons with focus states; reduced-motion
 * respected (the rise is gated to `[data-motion="on"]` via `.pon-rise`).
 */
type View = "choice" | "intro" | "advanced";

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
        ) : (
          <>
            <div className="mb-4 font-display text-4xl italic leading-none text-ink">{O.advanced.mark}</div>
            <h2 className="mb-3 font-display text-3xl font-semibold text-ink">{O.advanced.heading}</h2>
            <p className="mx-auto mb-2 max-w-md text-muted">
              {O.advanced.notePre}
              <b className="font-medium text-ink">{O.advanced.noteStrong}</b>
              {O.advanced.notePost}
            </p>
            <div
              className="hatch hr-all mx-auto mt-6 flex h-[200px] w-[200px] flex-col items-center justify-center gap-1 rounded-md"
              role="img"
              aria-label={`${O.advanced.qrLabel} — ${O.advanced.qrSub}`}
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                {O.advanced.qrLabel}
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-muted/75">
                {O.advanced.qrSub}
              </span>
            </div>
            <div className="mx-auto mt-5 inline-block rounded-full border border-hairline px-4 py-2 text-sm text-ink/85">
              {O.advanced.depositPre}
              <b className="font-medium text-ink">{O.advanced.depositStrong}</b>
            </div>
            <p className="mx-auto mt-5 max-w-md text-sm text-muted">{O.advanced.confirmNote}</p>
            <button
              type="button"
              onClick={() => setView("choice")}
              className="mx-auto mt-8 block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              {O.advanced.back}
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
