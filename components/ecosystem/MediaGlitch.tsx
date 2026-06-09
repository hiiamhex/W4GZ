"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { media } from "@/content/ecosystem";

/**
 * W4GZ Media (Patch H) — an inverted (ink) panel that "breaks the paper-ink
 * order": a glitching wordmark (slice/offset + flicker), scanlines, an occasional
 * invert/"disrupt" flash, and a periodically-scrambling tagline. Monochrome
 * (ink/paper offsets + brief inversion). Under reduced-motion / the toggle the
 * panel is shown static — no glitch / flicker / scramble. Styles in globals.css.
 */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&/<>*";

export default function MediaGlitch() {
  const { enabled } = useMotion();
  const tagRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = tagRef.current;
    if (!el || !enabled) return;
    const finalText = media.tagline;
    let interval = 0;
    const scramble = () => {
      let frame = 0;
      const total = 14;
      interval = window.setInterval(() => {
        let out = "";
        for (let i = 0; i < finalText.length; i++) {
          const ch = finalText[i];
          if (ch === " " || ch === "," || ch === ".") {
            out += ch;
          } else {
            out += i < (frame / total) * finalText.length ? ch : CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        el.textContent = out;
        frame++;
        if (frame > total) {
          window.clearInterval(interval);
          el.textContent = finalText;
        }
      }, 45);
    };
    const loop = window.setInterval(scramble, 5200);
    return () => {
      window.clearInterval(loop);
      window.clearInterval(interval);
      el.textContent = finalText;
    };
  }, [enabled]);

  return (
    <section className="media-panel relative overflow-hidden rounded-md bg-ink px-6 py-14 text-paper sm:px-10 sm:py-20">
      <p className="media-mk relative z-[2] mb-4 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-paper/55">
        {media.kicker}
      </p>
      <span className="media-gl relative z-[2] inline-block font-body text-[clamp(2.6rem,10vw,6rem)] font-semibold uppercase leading-[0.95] tracking-[0.01em] text-paper" data-text={media.wordmark}>
        {media.wordmark}
      </span>
      <p
        ref={tagRef}
        className="relative z-[2] my-6 font-mono text-[clamp(0.8rem,2vw,1rem)] uppercase tracking-[0.18em] text-paper"
      >
        {media.tagline}
      </p>
      <div className="relative z-[2] max-w-2xl space-y-3">
        {media.body.map((p, i) => (
          <p key={i} className="text-[1.05rem] leading-relaxed text-paper/80">
            {p}
          </p>
        ))}
      </div>
      <span className="relative z-[2] mt-7 inline-block rounded-[2px] bg-paper px-5 py-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink">
        {media.cta}
      </span>
    </section>
  );
}
