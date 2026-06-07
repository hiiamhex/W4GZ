"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

/**
 * Click ink-blot (brief v2 §2.3): a background click drops an organic ink blob +
 * satellites at the pointer — shared "ink node" vocabulary with the symbols.
 * Randomized, monochrome, low-opacity, self-cleaning; pooled (max 6). Ignores
 * clicks on interactive elements; off under reduced-motion / lite-mode.
 */
type Blob = {
  x: number;
  y: number;
  r: number;
  rot: number;
  op: number;
  born: number;
  life: number;
  pts: number[];
  sats: { a: number; d: number; r: number }[];
};

export default function InkCanvas() {
  const { enabled, lite } = useMotion();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled || lite) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs: Blob[] = [];
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const now = performance.now();
      for (let i = blobs.length - 1; i >= 0; i--) {
        const b = blobs[i];
        const t = (now - b.born) / b.life;
        if (t >= 1) {
          blobs.splice(i, 1);
          continue;
        }
        const grow = t < 0.2 ? t / 0.2 : 1;
        const fade = 1 - Math.max(0, (t - 0.4) / 0.6);
        const op = b.op * grow * fade;
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.fillStyle = `rgba(20,20,20,${op})`;
        const n = b.pts.length;
        ctx.beginPath();
        for (let k = 0; k <= n; k++) {
          const a = ((k % n) / n) * Math.PI * 2;
          const rr = b.r * grow * b.pts[k % n];
          const px = Math.cos(a) * rr;
          const py = Math.sin(a) * rr;
          if (k === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        for (const s of b.sats) {
          ctx.beginPath();
          ctx.arc(Math.cos(s.a) * s.d * grow, Math.sin(s.a) * s.d * grow, s.r * grow, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      raf = blobs.length ? requestAnimationFrame(draw) : 0;
    };

    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("a,button,input,textarea,select,label,[role=button]")) return;
      if (blobs.length >= 6) blobs.shift();
      const r = 24 + Math.random() * 56;
      const dropCount = 3 + ((Math.random() * 5) | 0);
      blobs.push({
        x: e.clientX,
        y: e.clientY,
        r,
        rot: Math.random() * Math.PI * 2,
        op: 0.12 + Math.random() * 0.1,
        born: performance.now(),
        life: 600 + Math.random() * 300,
        pts: Array.from({ length: 9 }, () => 0.7 + Math.random() * 0.5),
        sats: Array.from({ length: dropCount }, () => ({
          a: Math.random() * Math.PI * 2,
          d: r * (0.8 + Math.random() * 0.8),
          r: 2 + Math.random() * 4,
        })),
      });
      if (!raf) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, lite]);

  return (
    <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-30" />
  );
}
