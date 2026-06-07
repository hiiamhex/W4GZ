"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Scroll velocity → body variable-font weight (brief §3), settling on stop.
 * Kept to a tight, rounded range so glyph-width changes don't reflow body copy.
 * Only active when Lenis is mounted (motion enabled); resets to 400 otherwise.
 */
export default function ScrollVelocity() {
  const { enabled } = useMotion();

  useLenis((lenis) => {
    if (!enabled) return;
    const v = Math.abs(lenis.velocity);
    const weight = Math.min(520, 400 + Math.round((v * 4) / 20) * 20);
    document.documentElement.style.setProperty(
      "--w4gz-body-weight",
      String(weight),
    );
  });

  useEffect(() => {
    if (!enabled) {
      document.documentElement.style.setProperty("--w4gz-body-weight", "400");
    }
  }, [enabled]);

  return null;
}
