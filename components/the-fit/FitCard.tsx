"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { NarrativeText } from "@/lib/narrativeLink";

/**
 * The Fit click-to-reveal card (Patch 2). Starts as a charcoal panel showing a
 * representative icon (no text); activating it disintegrates the charcoal into a
 * dense dust field (WAAPI) and reveals the content, which then floats. Soft
 * rounded double-hairline frame + corner flourishes. Monochrome; styles in
 * globals.css (`.fit-*`). Reduced-motion / toggle-off → charcoal just fades, no
 * dust / float / breathe (still click-to-reveal). Real <button>; content stays in
 * the DOM behind the charcoal (opacity, never display:none).
 */
const Curl = () => (
  <svg viewBox="0 0 20 20" aria-hidden>
    <path d="M1.5,18.5 C1.5,9 9,1.5 18.5,1.5" fill="none" stroke="#141414" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="1.5" cy="18.5" r="1.7" fill="#141414" />
  </svg>
);

/** Representative cover icons (brand stroke+node vocabulary; viewBox 0 0 64 52). */
const ICONS: Record<string, ReactNode> = {
  narrative: (
    <>
      <path data-s="" d="M5,32 C17,16 27,16 33,28 S51,40 60,20" />
      <circle data-n="" cx="33" cy="28" r="3.4" />
      <circle data-n="" cx="51" cy="33" r="3.4" />
    </>
  ),
  writing: (
    <>
      <path data-s="" d="M25,8 C31,22 34,33 39,45" />
      <path data-s="" className="faint" d="M19,47 L47,47" />
      <circle data-n="" cx="39" cy="45" r="3.4" />
    </>
  ),
  meaning: (
    <>
      <circle data-noise="" cx="13" cy="12" r="1.7" />
      <circle data-noise="" cx="51" cy="13" r="1.7" />
      <circle data-noise="" cx="15" cy="40" r="1.7" />
      <circle data-noise="" cx="50" cy="40" r="1.7" />
      <path data-s="" d="M14,26 L50,26" />
      <circle data-n="" cx="32" cy="26" r="4" />
    </>
  ),
  honesty: (
    <>
      <path data-s="" className="faint" d="M24,10 L40,10" />
      <path data-s="" d="M32,9 L32,38" />
      <circle data-n="" cx="32" cy="42" r="3.6" />
    </>
  ),
  craft: (
    <>
      <path data-s="" d="M16,40 L28,27" />
      <path data-s="" d="M24,43 L36,30" />
      <path data-s="" d="M32,46 L44,33" />
      <circle data-n="" cx="44" cy="33" r="3.4" />
    </>
  ),
  community: (
    <>
      <path data-s="" d="M11,11 L32,26" />
      <path data-s="" d="M53,11 L32,26" />
      <path data-s="" d="M11,41 L32,26" />
      <path data-s="" d="M53,41 L32,26" />
      <path data-s="" d="M32,6 L32,26" />
      <circle data-n="" cx="32" cy="26" r="4" />
    </>
  ),
};

export default function FitCard({
  name,
  nameVi,
  line,
  glyph,
}: {
  name: string;
  nameVi: string;
  line: string;
  glyph: string;
}) {
  const { enabled } = useMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  // Desynchronise the float + icon breathe per card.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--fdur", `${(4.9 + Math.random() * 1.8).toFixed(2)}s`);
    el.style.setProperty("--fdelay", `${(-Math.random() * 4).toFixed(2)}s`);
    el.style.setProperty("--ci-delay", `${(-Math.random() * 3).toFixed(2)}s`);
  }, []);

  function reveal() {
    if (open) return;
    setOpen(true);
    const el = ref.current;
    if (!el || !enabled) return; // reduced/off → charcoal just fades (CSS), no dust

    // Dense disintegration: a jittered grid of specks across the charcoal panel.
    const pad = 18;
    const w = el.clientWidth - pad * 2;
    const h = el.clientHeight - pad * 2;
    const cols = Math.max(8, Math.round(w / 22));
    const rows = Math.max(6, Math.round(h / 22));
    const cw = w / cols;
    const ch = h / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const d = document.createElement("span");
        d.className = "fit-dust";
        const sz = 2 + Math.random() * 4.5;
        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `${pad + c * cw + cw / 2 + (Math.random() - 0.5) * cw * 0.9}px`;
        d.style.top = `${pad + r * ch + ch / 2 + (Math.random() - 0.5) * ch * 0.9}px`;
        el.appendChild(d);
        const dx = (Math.random() * 2 - 1) * 40;
        const dy = -(14 + Math.random() * 78);
        const dur = 1200 + Math.random() * 1000;
        const delay = Math.random() * 420;
        d.animate(
          [
            { transform: "translate(0,0) scale(1)", opacity: 0, offset: 0 },
            { opacity: 0.85, offset: 0.12 },
            { transform: `translate(${dx}px,${dy}px) scale(0)`, opacity: 0, offset: 1 },
          ],
          { duration: dur, delay, easing: "cubic-bezier(.25,.55,.3,1)", fill: "forwards" },
        );
        window.setTimeout(() => d.remove(), dur + delay + 200);
      }
    }
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={open}
      onClick={reveal}
      className={`fit-card ${open ? "is-open" : ""}`}
    >
      <span className="fit-frame" aria-hidden>
        <span className="fit-curl tl">
          <Curl />
        </span>
        <span className="fit-curl tr">
          <Curl />
        </span>
        <span className="fit-curl br">
          <Curl />
        </span>
        <span className="fit-curl bl">
          <Curl />
        </span>
      </span>

      <span className="fit-content">
        <span className="fit-node" />
        <span className="font-display text-[1.45rem] font-semibold leading-tight text-ink">
          <NarrativeText text={name} />
        </span>
        <span className="mt-0.5 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-muted">
          {nameVi}
        </span>
        <span className="mt-2 text-[0.96rem] leading-relaxed text-ink/80">{line}</span>
      </span>

      <span className="fit-char" aria-hidden>
        <svg className="fit-ci" viewBox="0 0 64 52">
          {ICONS[glyph]}
        </svg>
      </span>
    </button>
  );
}
