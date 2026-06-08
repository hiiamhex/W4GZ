"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * The WEAVE ("wave") motif (Master Spec §2.6 / Symbol System v2): one continuous
 * line threading many nodes — a single narrative binding a community. The line
 * exits both edges (it never ends, tiles infinitely). This is the production
 * weave reused under the Power-of-Narrative breadcrumb and above the motto.
 *
 * Motion (brief Update 3): the line draws on + nodes bleed in ONCE on enter
 * (then holds); only the travelling node loops continuously (ambient, subtle),
 * and that loop PAUSES off-screen. Under reduced-motion / motion-off, the drawn
 * line + nodes are shown with no draw-on and no travel. Colour = currentColor,
 * so set text-ink (ink-on-paper) or text-paper (paper-on-ink) on the wrapper.
 */
function zigzag(segments: number, top: number, bottom: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    pts.push([(i / segments) * 1000, i % 2 === 0 ? top : bottom]);
  }
  return pts;
}

export default function Weave({
  segments = 8,
  travel = false,
  travelDuration = 5,
  strokeWidth = 2.5,
  nodeRadius = 3.4,
  className = "",
}: {
  /** Number of zig-zag segments across the width. */
  segments?: number;
  /** Enable the looping travelling node (the one ambient loop). */
  travel?: boolean;
  /** Seconds for one travel pass. */
  travelDuration?: number;
  strokeWidth?: number;
  nodeRadius?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const { enabled } = useMotion();

  const top = 14;
  const bottom = 40;
  const pts = zigzag(segments, top, bottom);
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  const points = pts.map(([x, y]) => `${x},${y}`).join(" ");
  // Interior vertices carry the visible nodes (endpoints exit the frame).
  const innerNodes = pts.slice(1, -1);

  // CSS-driven (globals.css): the reveal plays once on enter; only the travelling
  // node loops, and it pauses when `data-inview="false"`. JS only flips attrs.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!enabled) {
      el.setAttribute("data-drawn", "true"); // drawn line + nodes, no travel
      el.setAttribute("data-inview", "false");
      return;
    }
    el.setAttribute("data-drawn", "false");
    el.setAttribute("data-inview", "true");
    let armed = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          el.setAttribute("data-inview", entry.isIntersecting ? "true" : "false");
          if (entry.isIntersecting && !armed) {
            armed = true;
            requestAnimationFrame(() => el.setAttribute("data-drawn", "true"));
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 1000 ${top + bottom + 14}`}
      preserveAspectRatio="none"
      aria-hidden
      className={`weave block ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ "--travel-dur": `${travelDuration}s` } as React.CSSProperties}
    >
      <polyline className="wv" pathLength={100} points={points} strokeWidth={strokeWidth} />
      <g fill="currentColor" stroke="none">
        {innerNodes.map(([x, y], i) => (
          <circle
            key={i}
            className="wn"
            cx={x}
            cy={y}
            r={nodeRadius}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
        {travel ? (
          <circle
            className="wtrav"
            r={nodeRadius + 0.8}
            style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
          />
        ) : null}
      </g>
    </svg>
  );
}
