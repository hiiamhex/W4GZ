"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { dictionary, library } from "@/content/ecosystem";

/**
 * Ecosystem strategic projects (Patch 6 B) — exactly two enlarged feature cards,
 * each with a themed monochrome effect (styles in globals.css, `.eco-feat*`):
 *
 *  • Dictionary4GenZ — a CSS 3D page-flip: a paper leaf turns about the spine while
 *    the entry beneath cycles (word + gloss). The flip loops only when motion is on;
 *    the entry-cycling here is gated to `useMotion().enabled`.
 *  • Library4GenZ — a row of book spines (a shelf); idle they sit loose/uneven and
 *    on hover they slide into a tidy shelf (pure CSS).
 *
 * Reduced-motion / toggle-off: one static dictionary page + an already-assembled
 * shelf (no flip, no cycling, no idle offset) — handled in CSS + the guard below.
 */
export default function FeatureProjects() {
  const { enabled } = useMotion();
  const entryRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const ipaRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const entryEl = entryRef.current;
    const wordEl = wordRef.current;
    const ipaEl = ipaRef.current;
    const glossEl = glossRef.current;
    if (!entryEl) return;
    const entries = dictionary.entries;
    let n = 0;
    let swap = 0;
    const tick = window.setInterval(() => {
      entryEl.style.opacity = "0"; // fade out, swap text at the page-turn midpoint
      swap = window.setTimeout(() => {
        n = (n + 1) % entries.length;
        const e = entries[n];
        if (wordEl) wordEl.textContent = e.word;
        if (ipaEl) ipaEl.textContent = e.ipa;
        if (glossEl) glossEl.textContent = e.gloss;
        entryEl.style.opacity = "1";
      }, 700);
    }, 3400); // synced to the .eco-leaf flip duration
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(swap);
      const e = entries[0];
      entryEl.style.opacity = "1";
      if (wordEl) wordEl.textContent = e.word;
      if (ipaEl) ipaEl.textContent = e.ipa;
      if (glossEl) glossEl.textContent = e.gloss;
    };
  }, [enabled]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Dictionary4GenZ — page-flip */}
      <article className="eco-feat">
        <div className="eco-feat-head">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
            {dictionary.kind}
          </div>
          <h3 className="mt-1 mb-2 font-display text-[2rem] font-semibold leading-[1.02] text-ink">
            {dictionary.name}
          </h3>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/80">{dictionary.desc}</p>
        </div>
        <div className="eco-dict-stage">
          <div ref={entryRef} className="eco-entry">
            <div ref={wordRef} className="font-display text-[2.6rem] font-semibold italic leading-none text-ink">
              {dictionary.entries[0].word}
            </div>
            <div ref={ipaRef} className="my-2 font-mono text-[0.72rem] tracking-[0.08em] text-muted">
              {dictionary.entries[0].ipa}
            </div>
            <div ref={glossRef} className="max-w-[18rem] text-[0.95rem] leading-relaxed text-ink/80">
              {dictionary.entries[0].gloss}
            </div>
          </div>
          <div className="eco-leaf" aria-hidden />
        </div>
      </article>

      {/* Library4GenZ — book-block shelf */}
      <article className="eco-feat">
        <div className="eco-feat-head">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
            {library.kind}
          </div>
          <h3 className="mt-1 mb-2 font-display text-[2rem] font-semibold leading-[1.02] text-ink">
            {library.name}
          </h3>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/80">{library.desc}</p>
        </div>
        <div className="eco-shelf-stage">
          <div className="eco-shelf" aria-hidden>
            {library.spines.map((s, i) => (
              <div
                key={i}
                className="eco-spine"
                style={{ height: `${s.h}%`, width: `${s.w}px`, background: s.bg }}
              >
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="eco-shelf-base" aria-hidden />
        </div>
      </article>
    </div>
  );
}
