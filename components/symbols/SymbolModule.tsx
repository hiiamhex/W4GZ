"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * W4GZ symbol modules (brief v2 §2.6) — ported from public/symbols/
 * W4GZ_Symbol_System.svg. Two atoms: the stroke (line = narrative) and the node
 * (ink dot = community). One module per page. `draw` animates the strokes on
 * (penned) via stroke-dashoffset; `bleed` blooms the nodes — both motion-gated.
 * Colour follows `currentColor`, so set text-ink / text-paper on the wrapper.
 * Production-grade redraw of the specimen is a Gap (symbols/production-set).
 */
export type ModuleName =
  | "writing"
  | "community"
  | "ecosystem"
  | "people"
  | "hub"
  | "media";

type Stroke = { d: string; w?: number; o?: number };
type Node = { cx: number; cy: number; r: number };

const MODULES: Record<ModuleName, { strokes: Stroke[]; nodes: Node[]; label: string }> = {
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
  draw = false,
  bleed = false,
  decorative = true,
  className = "",
}: {
  name: ModuleName;
  size?: number;
  draw?: boolean;
  bleed?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  const def = MODULES[name];
  const ref = useRef<SVGSVGElement>(null);
  const { enabled } = useMotion();

  useGSAP(
    () => {
      if (!enabled || !draw || !ref.current) return;
      const paths = ref.current.querySelectorAll<SVGPathElement>("path");
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.fromTo(
          p,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
          },
        );
      });
      if (bleed) {
        gsap.fromTo(
          ref.current.querySelectorAll("circle"),
          { scale: 0, transformOrigin: "center" },
          {
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(2)",
            scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
          },
        );
      }
    },
    { dependencies: [enabled, draw, bleed, name] },
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : def.label}
      aria-hidden={decorative ? true : undefined}
    >
      {def.strokes.map((s, i) => (
        <path key={i} d={s.d} strokeWidth={s.w ?? 5} strokeOpacity={s.o ?? 1} />
      ))}
      {def.nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}
