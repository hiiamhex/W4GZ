"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Parallax for the oversized stroked "ghost" serif words (brief §3). Re-runs per
 * route (pathname dep) so each chapter's ghosts get fresh triggers; useGSAP
 * reverts the previous page's triggers automatically. Skipped when motion is off.
 */
export default function GhostParallax() {
  const { enabled } = useMotion();
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!enabled) return;
      const els = gsap.utils.toArray<HTMLElement>(".ghost-text");
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 14 },
          {
            yPercent: -14,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
      ScrollTrigger.refresh();
    },
    { dependencies: [enabled, pathname] },
  );

  return null;
}
