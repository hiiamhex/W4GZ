"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Magnetic micro-interaction (brief §3): `.magnetic` elements (CTAs) ease toward
 * the cursor on hover and spring back on leave. Pointer-fine only; gated by motion.
 */
export default function MagneticButtons() {
  const { enabled } = useMotion();
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!enabled) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const els = gsap.utils.toArray<HTMLElement>(".magnetic");
      const cleanups: Array<() => void> = [];

      els.forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
          yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
        };
        const onLeave = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => cleanups.forEach((c) => c());
    },
    { dependencies: [enabled, pathname] },
  );

  return null;
}
