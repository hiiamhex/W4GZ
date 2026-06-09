"use client";

/**
 * Ghost-word parallax (brief §3) was a scroll-linked `translateY` (yPercent scrub)
 * on the oversized stroked "ghost" serif words. Patch D removes it: animating
 * large text on scroll re-rasterises it at fractional offsets each frame, which
 * reads as shimmer/jitter on thin serif type. The ghost words now stay static
 * (still revealed by the page-mount staggers); this component is intentionally a
 * no-op, kept so the layout import stays valid.
 */
export default function GhostParallax() {
  return null;
}
