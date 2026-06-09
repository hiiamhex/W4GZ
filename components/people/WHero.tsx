"use client";

import { useEffect, useMemo, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import SymbolModule from "@/components/symbols/SymbolModule";
import Container from "@/components/ui/Container";
import { wHero, wWords } from "@/content/people";

/**
 * The "W" page hero (brief Update 7): the W monogram ringed by a cloud of
 * W-words — the roles a member can take. Three concentric rings rotate slowly +
 * continuously at different speeds and alternating directions (a gentle flower
 * turning), with a tiny per-word radial sway; words stay upright. On pointer
 * move, nearby words are pushed outward and spring back (vanilla rAF + lerp, no
 * library). Monochrome. Under reduced-motion / the toggle the cloud is frozen
 * static and repel is off; the loop pauses off-screen. (Reference prototype:
 * prototypes/w-identity.html.)
 */
const RINGS = [
  { count: 7, rf: 0.44, speed: 0.085, size: 17, op: 0.95 },
  { count: 9, rf: 0.66, speed: -0.06, size: 14.5, op: 0.78 },
  { count: 9, rf: 0.86, speed: 0.045, size: 13, op: 0.58 },
];

type Item = { word: string; ri: number; a0: number; sway: number; size: number; op: number };

export default function WHero() {
  const { enabled } = useMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Distribute the words across rings; deterministic jitter keeps SSR stable.
  const items = useMemo<Item[]>(() => {
    const out: Item[] = [];
    let wi = 0;
    RINGS.forEach((r, ri) => {
      for (let k = 0; k < r.count && wi < wWords.length; k++, wi++) {
        const jitter = (((wi * 37) % 19) / 19 - 0.5) * 0.18;
        out.push({
          word: wWords[wi],
          ri,
          a0: (k / r.count) * Math.PI * 2 + ri * 0.5 + jitter,
          sway: (wi * 0.7) % (Math.PI * 2),
          size: r.size,
          op: r.op,
        });
      }
    });
    return out;
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const els = wordRefs.current;
    const cur = items.map(() => ({ x: 0, y: 0 }));
    const ringAng = [0, 0, 0];
    const mouse = { x: 0, y: 0, active: false };
    const THf = 0.22;
    const PUSHf = 0.13;

    // Seed each word at its base position so there is no flash from 0,0.
    const seed = () => {
      const half = wrap.clientWidth / 2;
      items.forEach((it, i) => {
        const radius = RINGS[it.ri].rf * half;
        cur[i].x = Math.cos(it.a0) * radius;
        cur[i].y = Math.sin(it.a0) * radius;
        const el = els[i];
        if (el) {
          el.style.transform = `translate(${half + cur[i].x}px,${half + cur[i].y}px) translate(-50%,-50%)`;
          el.style.opacity = String(it.op);
        }
      });
    };

    seed();

    // Motion off / reduced: static cloud, no orbit, no repel.
    if (!enabled) {
      window.addEventListener("resize", seed);
      return () => window.removeEventListener("resize", seed);
    }

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const s = wrap.clientWidth;
      const cx = s / 2;
      const half = s / 2;
      if (visible) RINGS.forEach((r, i) => (ringAng[i] += r.speed * dt));
      const TH = THf * s;
      const PUSH = PUSHf * s;
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        const radius = RINGS[it.ri].rf * half;
        const ang = it.a0 + ringAng[it.ri];
        const sway = Math.sin(now / 1100 + it.sway) * 5;
        let bx = Math.cos(ang) * (radius + sway);
        let by = Math.sin(ang) * (radius + sway);
        if (mouse.active) {
          const dx = cx + bx - mouse.x;
          const dy = cx + by - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          if (d < TH) {
            const p = (1 - d / TH) * PUSH;
            bx += (dx / d) * p;
            by += (dy / d) * p;
          }
        }
        cur[i].x += (bx - cur[i].x) * 0.15;
        cur[i].y += (by - cur[i].y) * 0.15;
        const el = els[i];
        if (el) el.style.transform = `translate(${cx + cur[i].x}px,${cx + cur[i].y}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          visible = en.isIntersecting;
          if (visible && !raf) {
            last = performance.now();
            raf = requestAnimationFrame(frame);
          } else if (!visible && raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        });
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", seed);
    last = performance.now();
    raf = requestAnimationFrame(frame);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", seed);
    };
  }, [enabled, items]);

  return (
    <section className="scroll-mt-[var(--nav-h)]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-[1fr_1.1fr] lg:py-20">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span aria-hidden className="h-px w-7 bg-ink" />
              {wHero.kicker}
            </p>
            <h1 className="mb-5 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl lg:text-7xl">
              {wHero.headParts[0]}
              <span className="italic">{wHero.headParts[1]}</span>
              {wHero.headParts[2]}
            </h1>
            <p className="max-w-md font-display text-xl leading-relaxed text-ink/85 md:text-2xl">
              {wHero.leads[0]}
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              {wHero.leads[1]}
            </p>
          </div>

          <div
            ref={wrapRef}
            role="img"
            aria-label="Các vai trò của một W xoay quanh chữ W: Weaver, Writer, Witness, Wayfinder…"
            className="relative mx-auto aspect-square w-[min(540px,88vw)] overflow-visible"
          >
            {items.map((it, i) => (
              <span
                key={i}
                ref={(el) => {
                  wordRefs.current[i] = el;
                }}
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 select-none whitespace-nowrap font-body text-ink transition-opacity duration-700 [will-change:transform]"
                style={{ fontSize: `${it.size}px`, opacity: 0 }}
              >
                {it.word}
              </span>
            ))}
            <div className="absolute left-1/2 top-1/2 z-[3] w-[clamp(110px,26%,160px)] -translate-x-1/2 -translate-y-1/2">
              <SymbolModule name="master" size={160} className="h-auto w-full text-ink" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
