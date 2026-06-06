"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/motion/MotionProvider";

const SESSION_KEY = "w4gz-preloaded";
const LETTERS = ["W", "4", "G", "Z"];

/**
 * Preloader (brief §3) — once per session, skippable, never blocks first paint.
 * A DM-Mono-style counter ticks 0→100 while the "W4GZ" wordmark assembles from
 * scattered glyphs and locks like a type forme, then the paper sheet wipes up.
 * Only renders after hydration (ready) and when motion is enabled → under
 * reduced-motion / toggle-off it never appears (instant).
 */
export default function Preloader() {
  const { enabled, ready } = useMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const shouldShow =
    ready &&
    enabled &&
    typeof window !== "undefined" &&
    sessionStorage.getItem(SESSION_KEY) !== "1";

  useGSAP(
    () => {
      if (!shouldShow || !rootRef.current) return;
      const counter = { v: 0 };
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            /* ignore */
          }
          if (rootRef.current) rootRef.current.style.display = "none";
        },
      });
      tlRef.current = tl;

      tl.from(
        ".pl-letter",
        {
          yPercent: () => gsap.utils.random(-120, 120),
          xPercent: () => gsap.utils.random(-60, 60),
          rotation: () => gsap.utils.random(-35, 35),
          opacity: 0,
          duration: 0.8,
          stagger: 0.07,
        },
        0,
      )
        .to(
          counter,
          {
            v: 100,
            duration: 1.0,
            ease: "power2.out",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = String(
                  Math.round(counter.v),
                ).padStart(3, "0");
              }
            },
          },
          0,
        )
        .to(".pl-letter", { letterSpacing: "0.04em", duration: 0.3 }, ">-0.1")
        .to(
          rootRef.current,
          { yPercent: -100, duration: 0.7, ease: "power3.inOut" },
          ">+0.12",
        );
    },
    { scope: rootRef, dependencies: [shouldShow] },
  );

  if (!shouldShow) return null;

  const skip = () => tlRef.current?.totalProgress(1);

  return (
    <div
      ref={rootRef}
      onClick={skip}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
    >
      <div className="flex items-end gap-1">
        {LETTERS.map((letter) => (
          <span
            key={letter}
            className="pl-letter inline-block font-display text-6xl italic text-ink md:text-8xl"
          >
            {letter}
          </span>
        ))}
      </div>
      <span
        ref={counterRef}
        className="mt-8 font-mono text-xs tracking-[0.3em] text-muted"
      >
        000
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="absolute right-6 bottom-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
      >
        Bỏ qua
      </button>
    </div>
  );
}
