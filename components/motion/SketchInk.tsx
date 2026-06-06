"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Sketch "ink-in" (brief §3): kí họa wipe in left→right like they're being penned
 * — a mask wipe, never a fade. Targets [data-ink] frames; re-runs per route.
 * No-op under reduced-motion/off (frames render fully visible).
 */
export default function SketchInk() {
  const { enabled } = useMotion();
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!enabled) return;
      const els = gsap.utils.toArray<HTMLElement>("[data-ink]");
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.0,
            ease: "power2.inOut",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          },
        );
      });
      ScrollTrigger.refresh();
    },
    { dependencies: [enabled, pathname] },
  );

  return null;
}
