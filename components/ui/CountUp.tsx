"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a leading integer up from zero when scrolled into view, preserving any
 * suffix (e.g. "10+" → 0…10 then "+"). Non-numeric values ("Gen Z", "HCMC",
 * "Est. 2022") render as-is. Honors prefers-reduced-motion.
 */
export default function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = /^(\d[\d.,]*)([\s\S]*)$/.exec(value);
  const target = match ? parseInt(match[1].replace(/[^\d]/g, ""), 10) : NaN;
  const suffix = match ? match[2] : "";
  const animatable = match !== null && Number.isFinite(target);

  const [shown, setShown] = useState(animatable ? `0${suffix}` : value);

  useEffect(() => {
    if (!animatable) return; // non-numeric values render as-is from initial state
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started) continue;
          started = true;
          io.disconnect();

          if (reduced) {
            setShown(value);
            return;
          }
          const t0 = performance.now();
          const dur = 1100;
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setShown(`${Math.round(target * eased)}${suffix}`);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [animatable, target, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
