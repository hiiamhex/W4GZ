"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Custom cursor as a blinking caret "|" (brief §3) — the machinery of writing.
 * Pointer-fine only; gated by motion. Native cursor is hidden via the
 * `has-caret-cursor` class (restored over text fields in globals.css).
 */
export default function CaretCursor() {
  const { enabled } = useMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    const root = document.documentElement;
    root.classList.add("has-caret-cursor");

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      tx += (x - tx) * 0.25;
      ty += (y - ty) * 0.25;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      root.classList.remove("has-caret-cursor");
    };
  }, [enabled]);

  return <div ref={ref} aria-hidden className="caret-cursor" />;
}
