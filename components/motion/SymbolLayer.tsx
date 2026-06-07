"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * The weave (brief v2 §2.6 / 3.4): one line threading many nodes — a single
 * narrative binding a community. Hoisted once at root; on each route change it
 * re-weaves (strokes redraw, nodes bleed in). Faint + decorative; static (fully
 * drawn) under reduced-motion / toggle-off. A full per-module detach/morph
 * re-weave is logged as a motion Gap.
 */
export default function SymbolLayer() {
  const { enabled } = useMotion();
  const pathname = usePathname();
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!enabled || !ref.current) return;
      const paths = ref.current.querySelectorAll<SVGPathElement>("path");
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.fromTo(
          p,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" },
        );
      });
      gsap.fromTo(
        ref.current.querySelectorAll("circle"),
        { scale: 0, transformOrigin: "center" },
        { scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(2)", delay: 0.3 },
      );
    },
    { dependencies: [enabled, pathname] },
  );

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-10 w-full text-ink/10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M0,55 L120,30 L240,55 L360,30 L480,55 L600,30 L720,55 L840,30 L960,55 L1000,38" />
      <g fill="currentColor" stroke="none">
        <circle cx="120" cy="30" r="4" />
        <circle cx="240" cy="55" r="4" />
        <circle cx="360" cy="30" r="4" />
        <circle cx="480" cy="55" r="4" />
        <circle cx="600" cy="30" r="4" />
        <circle cx="720" cy="55" r="4" />
        <circle cx="840" cy="30" r="4" />
      </g>
    </svg>
  );
}
