"use client";

import { usePathname } from "next/navigation";

const NUMERALS: Record<string, string> = {
  "/": "I",
  "/why-writing": "II",
  "/courses": "III",
  "/community": "IV",
  "/ecosystem": "V",
  "/people": "VI",
  "/join": "VII",
};

/**
 * Running chapter counter in a corner (brief §3) — ticks on each route change.
 * `mix-blend-difference` keeps it legible over both paper and ink sections.
 * Decorative + non-interactive; the `key` remount re-fires the tick animation
 * (which the CSS kill-switch neutralizes under reduced-motion / toggle-off).
 */
export default function ChapterCounter() {
  const pathname = usePathname();
  const numeral = NUMERALS[pathname];
  if (!numeral) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-4 left-4 z-40 hidden mix-blend-difference md:block"
    >
      <span
        key={numeral}
        className="chapter-tick block font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper"
      >
        Ch. {numeral} / VII
      </span>
    </div>
  );
}
