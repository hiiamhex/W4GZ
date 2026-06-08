"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * W4GZ symbol modules (Master Spec §2.6 / Symbol System v2) — generated from
 * assets/W4GZ_Symbol_System_v2.svg. Two atoms: the stroke (line = narrative) and
 * the node (ink dot = community); the line exits the frame (the story continues).
 *
 * Motion lifecycle (brief Update 2 — the "appropriate approach"):
 *  1. Reveal — ONE-SHOT: strokes draw on (stroke-dashoffset) + nodes bleed in
 *     (scale), fired once when the glyph enters the viewport, then it HOLDS.
 *  2. Re-trigger: pass a changing `replayKey` to replay the reveal on a section/
 *     route transition.
 *  3. Idle — EVERY glyph stays alive: after the reveal, each node's halo
 *     "breathes" (a slow, low-amplitude scale + opacity pulse — the ink heartbeat).
 *     Phase + duration are desynchronised per instance so it reads organic, and
 *     the loop PAUSES off-screen.
 *  4. Hover: `interactive` adds a single node pulse on hover.
 * Reduced-motion / motion-off → final drawn state only, no reveal/idle/hover.
 * All animation lives in globals.css (CSS/SVG first; JS only flips data-* attrs
 * and seeds the per-instance idle timing). Colour follows currentColor.
 */
export type ModuleName =
  | "narrative"
  | "writing"
  | "community"
  | "home"
  | "fit"
  | "meaning"
  | "honesty"
  | "craft"
  | "courses"
  | "ecosystem"
  | "people"
  | "join"
  | "hub"
  | "media";

type Stroke = { d: string; w?: number; o?: number };
type Node = { cx: number; cy: number; r: number };

const MODULES: Record<ModuleName, { strokes: Stroke[]; nodes: Node[]; label: string }> = {
  // SPINE — Narrative × Writing × Community (all three now carry a glyph).
  narrative: {
    label: "Narrative — một đường luồn qua các node, the weave thu nhỏ",
    strokes: [{ d: "M-4,74 C26,40 44,40 60,62 S96,86 124,48", w: 6 }],
    nodes: [
      { cx: 60, cy: 62, r: 6 },
      { cx: 96, cy: 63, r: 6 },
    ],
  },
  writing: {
    label: "Writing — nét ngòi bút buông xuống một node mực",
    strokes: [
      { d: "M40,22 C50,48 56,72 66,94", w: 6 },
      { d: "M34,104 L92,104", w: 3, o: 0.55 },
    ],
    nodes: [{ cx: 66, cy: 94, r: 6 }],
  },
  community: {
    label: "Community — nhiều nét hội tụ về một node chung",
    strokes: [
      { d: "M22,28 L60,60", w: 6 },
      { d: "M98,30 L60,60", w: 6 },
      { d: "M24,96 L60,60", w: 6 },
      { d: "M96,94 L60,60", w: 6 },
      { d: "M60,18 L60,60", w: 6 },
    ],
    nodes: [{ cx: 60, cy: 60, r: 7 }],
  },
  // PAGE MODULES.
  home: {
    label: "Home — mái nhà, một node tụ ở đỉnh",
    strokes: [{ d: "M28,104 L28,52 Q60,20 92,52 L92,104", w: 5 }],
    nodes: [{ cx: 60, cy: 34, r: 6 }],
  },
  fit: {
    label: "The Fit — vòng cung gần khép, một node ở tâm",
    strokes: [{ d: "M84,33 A37,37 0 1 1 84,87", w: 5 }],
    nodes: [{ cx: 60, cy: 60, r: 7 }],
  },
  // THE FIT value-card glyphs (same vocabulary).
  meaning: {
    label: "Meaning over noise — một nét sáng rõ xuyên qua những nét nhiễu mờ",
    strokes: [
      { d: "M22,98 L98,28", w: 6 },
      { d: "M24,54 L58,54", w: 3, o: 0.4 },
      { d: "M46,82 L84,82", w: 3, o: 0.4 },
    ],
    nodes: [{ cx: 98, cy: 28, r: 6 }],
  },
  honesty: {
    label: "Honesty — dây dọi thẳng đứng buông xuống một node",
    strokes: [
      { d: "M60,16 L60,92", w: 6 },
      { d: "M40,40 L80,40", w: 3, o: 0.4 },
    ],
    nodes: [{ cx: 60, cy: 98, r: 7 }],
  },
  craft: {
    label: "Craft — nét đục gọt gặp một node, một mặt cắt sắc",
    strokes: [
      { d: "M28,38 L66,88", w: 6 },
      { d: "M66,88 L96,66", w: 5, o: 0.85 },
    ],
    nodes: [{ cx: 66, cy: 88, r: 6 }],
  },
  courses: {
    label: "Courses — các bậc đi lên, mỗi bậc một node",
    strokes: [{ d: "M22,98 L46,98 L46,74 L70,74 L70,50 L94,50", w: 5 }],
    nodes: [
      { cx: 46, cy: 74, r: 5 },
      { cx: 70, cy: 50, r: 5 },
      { cx: 94, cy: 50, r: 5 },
    ],
  },
  ecosystem: {
    label: "Ecosystem — một thân nhánh ra nhiều đầu mở",
    strokes: [
      { d: "M60,104 L60,58", w: 6 },
      { d: "M60,58 L34,26", w: 6 },
      { d: "M60,58 L60,22", w: 6 },
      { d: "M60,58 L86,28", w: 6 },
    ],
    nodes: [{ cx: 60, cy: 58, r: 6 }],
  },
  people: {
    label: "People — hàng nét cao thấp nối nhau ở chân",
    strokes: [
      { d: "M22,94 L98,94", w: 5 },
      { d: "M34,94 L34,56", w: 5 },
      { d: "M48,94 L48,42", w: 5 },
      { d: "M62,94 L62,62", w: 5 },
      { d: "M76,94 L76,46", w: 5 },
      { d: "M88,94 L88,58", w: 5 },
    ],
    nodes: [
      { cx: 34, cy: 56, r: 5 },
      { cx: 48, cy: 42, r: 5 },
      { cx: 62, cy: 62, r: 5 },
      { cx: 76, cy: 46, r: 5 },
      { cx: 88, cy: 58, r: 5 },
    ],
  },
  join: {
    label: "Join — hai nét chụm vào một node rồi mở ra ngoài khung",
    strokes: [
      { d: "M20,38 L58,62", w: 5 },
      { d: "M20,86 L58,62", w: 5 },
      { d: "M58,62 L116,62", w: 5 },
    ],
    nodes: [{ cx: 58, cy: 62, r: 7 }],
  },
  hub: {
    label: "Hub — khung không gian có cửa mở, nét hướng vào tâm",
    strokes: [
      { d: "M30,30 L90,30", w: 5 },
      { d: "M30,30 L30,90", w: 5 },
      { d: "M30,90 L62,90", w: 5 },
      { d: "M90,30 L90,62", w: 5 },
      { d: "M62,60 L44,44", w: 5 },
      { d: "M62,60 L80,44", w: 5 },
      { d: "M62,60 L52,78", w: 5 },
    ],
    nodes: [{ cx: 62, cy: 60, r: 6 }],
  },
  media: {
    label: "Media Team — node phát các cung sóng",
    strokes: [
      { d: "M40,42 A18,18 0 0 1 40,78", w: 5 },
      { d: "M40,30 A30,30 0 0 1 40,90", w: 5 },
      { d: "M40,18 A42,42 0 0 1 40,102", w: 5 },
      { d: "M40,60 L22,60", w: 5 },
    ],
    nodes: [{ cx: 40, cy: 60, r: 6 }],
  },
};

export default function SymbolModule({
  name,
  size = 120,
  decorative = true,
  interactive = false,
  replayKey,
  className = "",
}: {
  name: ModuleName;
  size?: number;
  decorative?: boolean;
  /** Adds a one-off node pulse on hover (for nav items / cards). */
  interactive?: boolean;
  /** Change this (e.g. active chapter / pathname) to replay the reveal once. */
  replayKey?: string | number;
  className?: string;
}) {
  const def = MODULES[name];
  const ref = useRef<SVGSVGElement>(null);
  const { enabled } = useMotion();

  // CSS-driven (globals.css, keyed off data-drawn / data-inview): JS only flips
  // the trigger attrs + seeds a desynchronised idle timing per instance. No data
  // attrs are server-rendered, so with JS off the glyph shows its final state.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Desynchronise the idle "breathe" so a page of glyphs reads organic.
    el.style.setProperty("--idle-dur", `${(3.2 + Math.random() * 1.8).toFixed(2)}s`);
    el.style.setProperty("--idle-delay", `${(-Math.random() * 4).toFixed(2)}s`);
    if (!enabled) {
      el.setAttribute("data-drawn", "true"); // final state, no reveal/idle
      el.setAttribute("data-inview", "false");
      return;
    }
    el.setAttribute("data-drawn", "false"); // re-arm (also on replayKey change)
    el.setAttribute("data-inview", "false"); // idle paused until in view
    let drawnOnce = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          el.setAttribute("data-inview", entry.isIntersecting ? "true" : "false");
          if (entry.isIntersecting && !drawnOnce) {
            drawnOnce = true;
            requestAnimationFrame(() => el.setAttribute("data-drawn", "true"));
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, replayKey]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={`glyph ${interactive ? "glyph-interactive" : ""} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : def.label}
      aria-hidden={decorative ? true : undefined}
    >
      {/* Breathing halos (the idle heartbeat) sit behind the nodes. */}
      <g fill="currentColor" stroke="none">
        {def.nodes.map((n, i) => (
          <circle key={i} className="gh" cx={n.cx} cy={n.cy} r={n.r * 2.6} />
        ))}
      </g>
      {def.strokes.map((s, i) => (
        <path
          key={i}
          className="gs"
          d={s.d}
          pathLength={100}
          strokeWidth={s.w ?? 5}
          strokeOpacity={s.o ?? 1}
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
      {def.nodes.map((n, i) => (
        <circle
          key={i}
          className="gn"
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="currentColor"
          stroke="none"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
