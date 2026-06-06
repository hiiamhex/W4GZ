"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Monospace "decode" — the text self-typesets on scroll into view (brief §3).
 * The final text is server-rendered (crawlable, selectable, visible without JS);
 * when motion is on it scrambles → settles once. No-op under reduced-motion/off.
 */
export default function Scramble({
  text,
  className = "",
  chars = "upperCase",
}: {
  text: string;
  className?: string;
  chars?: string;
}) {
  const { enabled } = useMotion();
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!enabled || !ref.current) return;
      gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);
      const el = ref.current;
      gsap.to(el, {
        duration: 1.1,
        ease: "none",
        scrambleText: { text, chars, revealDelay: 0.25, speed: 0.5 },
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { dependencies: [enabled, text] },
  );

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
