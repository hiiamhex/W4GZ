"use client";

import { useEffect } from "react";

/**
 * Scroll-velocity body weight (brief §3) was driving the variable body font's
 * weight from scroll velocity. Patch D removes it: changing font-weight on a
 * variable font alters glyph advance widths, so the body copy REFLOWS and lines
 * re-wrap mid-scroll (the reported "text jumps to a new line"). Layout-affecting
 * properties must never be animated on scroll — only `transform`/`opacity`. The
 * body weight now stays constant at 400; this component is intentionally inert,
 * kept so the layout import stays valid.
 */
export default function ScrollVelocity() {
  useEffect(() => {
    document.documentElement.style.setProperty("--w4gz-body-weight", "400");
  }, []);
  return null;
}
