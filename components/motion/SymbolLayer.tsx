"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * The site-wide weave (Master Spec §2.6 / §3.4): one line threading many nodes —
 * a single narrative binding a community — hoisted once at root, faint and fixed
 * along the foot. On each route change it RE-WEAVES (the line redraws + nodes
 * bleed in: the "re-trigger on transition" tier). Its travelling node is the one
 * ambient loop on the site (brief Update 2 — "the line never ends"); everything
 * is CSS-driven and disabled under reduced-motion / the motion toggle.
 */
const PATH =
  "M0,55 L120,30 L240,55 L360,30 L480,55 L600,30 L720,55 L840,30 L960,55 L1000,38";
const POINTS =
  "0,55 120,30 240,55 360,30 480,55 600,30 720,55 840,30 960,55 1000,38";
const NODES = [
  [120, 30],
  [240, 55],
  [360, 30],
  [480, 55],
  [600, 30],
  [720, 55],
  [840, 30],
];

export default function SymbolLayer() {
  const { enabled } = useMotion();
  const pathname = usePathname();
  const ref = useRef<SVGSVGElement>(null);

  // Re-weave on each route change (CSS-driven; JS only flips `data-drawn`). With
  // JS off there is no `[data-motion="on"]`, so the weave renders fully drawn.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!enabled) {
      el.setAttribute("data-drawn", "true");
      return;
    }
    el.setAttribute("data-drawn", "false");
    const raf = requestAnimationFrame(() => el.setAttribute("data-drawn", "true"));
    return () => cancelAnimationFrame(raf);
  }, [enabled, pathname]);

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      className="weave pointer-events-none fixed inset-x-0 bottom-0 z-20 h-10 w-full text-ink/10"
      style={{ "--travel-dur": "7s" } as React.CSSProperties}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      <polyline className="wv" pathLength={100} points={POINTS} strokeWidth={2} />
      <g fill="currentColor" stroke="none">
        {NODES.map(([cx, cy], i) => (
          <circle
            key={i}
            className="wn"
            cx={cx}
            cy={cy}
            r={4}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
        <circle className="wtrav" r={4.5} style={{ offsetPath: `path('${PATH}')` } as React.CSSProperties} />
      </g>
    </svg>
  );
}
