"use client";

import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Visible, required "reduce motion" control (brief §3 guardrail). Hard-disables
 * Lenis + all JS/CSS choreography via MotionProvider. When the OS already
 * requests reduced motion, it reflects that as a locked state.
 */
export default function MotionToggle({ className = "" }: { className?: string }) {
  const { enabled, reduced, ready, toggle } = useMotion();

  const label = !ready
    ? "Chuyển động"
    : reduced
      ? "Chuyển động · tắt (hệ thống)"
      : `Chuyển động · ${enabled ? "bật" : "tắt"}`;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={reduced}
      aria-pressed={enabled}
      aria-label="Bật/tắt hiệu ứng chuyển động"
      className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {label}
    </button>
  );
}
