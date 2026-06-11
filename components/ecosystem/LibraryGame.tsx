"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { library } from "@/content/ecosystem";

/**
 * Library4GenZ stage (Patch 8 B, amended by Patch 9 C) — the archive box
 * (cut-corner double frame, corner brackets, labels, barcode ticks, grid, ink
 * washes) hosting a shelf-stacking mini-game. Ported from
 * prototypes/ecosystem-projects-v4.html (supersedes v3).
 *
 * Levels are procedural + deterministic: a mulberry32 PRNG keyed by level index
 * generates 120 puzzles (same index ⇒ same puzzle). Difficulty ramps — books per
 * level min(4 + ⌊idx/2⌋, 8), the horizontal-book ratio rises with level, and
 * size ranges tighten after ~level 30 (near-identical dims). Dimensions are
 * de-duplicated per level and rows are width-packed against the real field
 * width (shrink-widest, then drop-one). Layout sits centered-low: baselines at
 * 50% / 86% of field height (62% single-row), per-shelf book-height caps, slot
 * tops clamped ≥ 6px, and the initial scatter spawns only in the lower ~65% —
 * nothing can poke above the frame (the Patch-9 bug fix).
 *
 * Drag a book (pointer events + setPointerCapture; lift + velocity tilt) onto
 * the slot with exactly its dimensions: matching empty slots pulse while
 * dragging; equal-dims + center distance ≤ 42px snaps with a slight overshoot
 * and a slot flash; a near wrong-size slot shakes; anywhere else the book rests
 * (new drift anchor). Unplaced books drift anti-gravity; placed books lock.
 * Clearing stamps SECTOR … CLEARED, burns the books to ash, and blooms the next
 * set in; after level 120: ARCHIVE RESTORED + ↻ CHƠI LẠI.
 *
 * The rAF drift loop pauses off-screen / when hidden. Reduced-motion / toggle
 * off: dragging still works, but no drift, instant snaps, instant level swaps
 * (no burn/ash/bloom), stamp as a plain fade (CSS default).
 */
const POOL = library.labelPool;
const TOTAL = 120;
const TONES = [
  "#141414", "#1b1a17", "#211f1b", "#26241f", "#2b2924", "#34322c",
  "#3a382f", "#171717", "#232119", "#2e2c26", "#1e1c18", "#383630",
];
/* Deterministic tick heights — SSR-safe (no Math.random in render). */
const BAR_H = [5, 9, 4, 10, 6, 8, 3, 7, 10, 5, 8, 4, 9, 6];

/** mulberry32 — tiny seeded PRNG; deterministic level generation. */
function mulberry(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pad3 = (n: number) => String(n).padStart(3, "0");

type Spec = { w: number; h: number; row: 0 | 1; l: string };

/** Deterministic level generator — same index ⇒ same puzzle. */
function genLevel(idx: number, W: number, H: number): Spec[] {
  const r = mulberry(Math.imul(idx + 1, 2654435761) ^ 0x4c1b);
  const ri = (a: number, b: number) => Math.round(a + r() * (b - a));
  const tight = Math.min(idx / 30, 1); // sizes converge → harder discrimination
  const n = Math.min(4 + Math.floor(idx / 2), 8);
  const twoRows = n > 5;
  const nH = Math.min(Math.round(n * (0.12 + 0.33 * Math.min(idx / 18, 1))), twoRows ? 3 : 1);
  // Per-shelf height caps — keeps every slot top inside the frame.
  const maxH1 = Math.min(126, Math.floor(H * 0.5) - 12);
  const maxH2 = Math.min(92, Math.floor(H * 0.34) - 10);
  const maxHs = Math.min(130, Math.floor(H * 0.62) - 14);
  const used: Record<string, 1> = {};
  const specs: Spec[] = [];
  const uniq = (w: number, h: number): [number, number] => {
    let k = `${w}x${h}`;
    let tries = 0;
    while (used[k] && tries < 30) {
      w += 2;
      k = `${w}x${h}`;
      tries += 1;
    }
    used[k] = 1;
    return [w, h];
  };
  const vert = (hMin: number, hMax: number) => {
    const w = 2 * ri(12, 20 - Math.round(4 * tight));
    const h = 2 * ri(Math.ceil(hMin / 2), Math.floor(hMax / 2));
    return uniq(w, h);
  };
  const horiz = () => {
    const w = 2 * ri(35, 50 - Math.round(6 * tight));
    const h = 2 * ri(12, 15);
    return uniq(w, h);
  };
  const labels = POOL.slice();
  for (let i = labels.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [labels[i], labels[j]] = [labels[j], labels[i]];
  }
  if (!twoRows) {
    for (let a = 0; a < n; a++) {
      const d = a < nH ? horiz() : vert(78, maxHs);
      specs.push({ w: d[0], h: d[1], row: 0, l: "" });
    }
  } else {
    const n1 = Math.ceil(n / 2);
    const n2 = n - n1;
    let hUsed = 0;
    for (let b = 0; b < n1; b++) {
      const d1 = vert(96, maxH1);
      specs.push({ w: d1[0], h: d1[1], row: 0, l: "" });
    }
    for (let c = 0; c < n2; c++) {
      const d2 = hUsed < nH ? ((hUsed += 1), horiz()) : vert(56, maxH2);
      specs.push({ w: d2[0], h: d2[1], row: 1, l: "" });
    }
  }
  // Pack each row into the real field width: shrink the widest, then drop one.
  ([0, 1] as const).forEach((row) => {
    const list = specs.filter((s) => s.row === row);
    if (!list.length) return;
    const budget = W - 28 - 8 * (list.length - 1);
    let guard = 0;
    const sum = () => list.reduce((t, s) => t + s.w, 0);
    while (sum() > budget && guard++ < 80) {
      let widest = list[0];
      list.forEach((s) => {
        if (s.w > widest.w) widest = s;
      });
      const floor = widest.w > widest.h ? 58 : 22;
      if (widest.w - 2 >= floor) {
        widest.w -= 2;
      } else {
        const drop = list.pop();
        const di = drop ? specs.indexOf(drop) : -1;
        if (di > -1) specs.splice(di, 1);
      }
    }
  });
  specs.forEach((s, i) => {
    s.l = labels[i % labels.length];
  });
  return specs;
}

type Slot = { el: HTMLDivElement; x: number; y: number; w: number; h: number; filled: boolean };
type Book = {
  el: HTMLButtonElement;
  w: number;
  h: number;
  x: number;
  y: number;
  rx: number;
  ry: number;
  rot: number;
  ph: number;
  placed: boolean;
  drag: boolean;
  snapping: boolean;
  gx: number;
  gy: number;
  lastEx: number;
};

export default function LibraryGame() {
  const { enabled } = useMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const sectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const field = fieldRef.current;
    const hud = hudRef.current;
    const sectorTag = sectorRef.current;
    if (!stage || !field || !hud || !sectorTag) return;

    const RM = !enabled;
    let LV = 0;
    let BOOKS: Book[] = [];
    let SLOTS: Slot[] = [];
    let placedCount = 0;
    let visible = true;
    let transitioning = false;
    let disposed = false;
    let raf = 0;
    const timers = new Set<number>();

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        if (!disposed) fn();
      }, ms);
      timers.add(id);
    };
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const apply = (b: Book) => {
      b.el.style.transform = `translate(${b.x}px,${b.y}px) rotate(${b.rot}deg)`;
    };
    const fieldXY = (e: PointerEvent) => {
      const r = field.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const updateHud = () => {
      hud.textContent = `MÀN ${pad3(LV + 1)} / ${TOTAL} · ĐÃ XẾP ${placedCount}/${BOOKS.length}`;
      sectorTag.textContent = `SECTOR ${pad3(LV + 1)} · HUMANITIES`;
    };

    const clearLevel = () => {
      field
        .querySelectorAll(".eco-book,.eco-slot,.eco-shelfline,.eco-stamp,.eco-replay,.eco-ash")
        .forEach((n) => n.remove());
      BOOKS = [];
      SLOTS = [];
      placedCount = 0;
    };

    const bindDrag = (b: Book) => {
      b.el.addEventListener("pointerdown", (e) => {
        if (b.placed || b.snapping || transitioning) return;
        e.preventDefault();
        b.el.setPointerCapture(e.pointerId);
        const p = fieldXY(e);
        b.drag = true;
        b.gx = p.x - b.x;
        b.gy = p.y - b.y;
        b.lastEx = p.x;
        b.el.classList.add("lift");
        SLOTS.forEach((s) => {
          if (!s.filled && s.w === b.w && s.h === b.h) s.el.classList.add("hot");
        });
      });
      b.el.addEventListener("pointermove", (e) => {
        if (!b.drag) return;
        const p = fieldXY(e);
        const W = field.clientWidth;
        const H = field.clientHeight;
        b.x = Math.min(Math.max(p.x - b.gx, 0), W - b.w);
        b.y = Math.min(Math.max(p.y - b.gy, 0), H - b.h);
        b.rot = Math.min(Math.max((p.x - b.lastEx) * 1.2, -9), 9);
        b.lastEx = p.x;
        apply(b);
      });
      const release = () => {
        if (!b.drag) return;
        b.drag = false;
        b.el.classList.remove("lift");
        SLOTS.forEach((s) => s.el.classList.remove("hot"));
        const bcx = b.x + b.w / 2;
        const bcy = b.y + b.h / 2;
        let best: Slot | null = null;
        let bestD = 1e9;
        let wrong: Slot | null = null;
        let wrongD = 1e9;
        SLOTS.forEach((s) => {
          if (s.filled) return;
          const d = Math.hypot(s.x + s.w / 2 - bcx, s.y + s.h / 2 - bcy);
          if (s.w === b.w && s.h === b.h) {
            if (d < bestD) {
              bestD = d;
              best = s;
            }
          } else if (d < wrongD) {
            wrongD = d;
            wrong = s;
          }
        });
        if (best && bestD <= 42) {
          snap(b, best);
        } else {
          if (wrong && wrongD <= 36) {
            const el = (wrong as Slot).el;
            el.classList.remove("shake");
            void el.offsetWidth; // restart the reject animation
            el.classList.add("shake");
          }
          b.rx = b.x;
          b.ry = b.y;
          b.rot = 0;
          apply(b);
        }
      };
      b.el.addEventListener("pointerup", release);
      b.el.addEventListener("pointercancel", release);
    };

    const snap = (b: Book, s: Slot) => {
      s.filled = true;
      b.placed = true;
      b.snapping = true;
      const from = `translate(${b.x}px,${b.y}px) rotate(${b.rot}deg)`;
      b.x = s.x;
      b.y = s.y;
      b.rot = 0;
      if (RM) {
        apply(b);
        b.snapping = false;
      } else {
        b.el.animate(
          [
            { transform: from },
            { transform: `translate(${s.x}px,${s.y - 4}px) rotate(-2deg)`, offset: 0.65 },
            { transform: `translate(${s.x}px,${s.y}px) rotate(0deg)` },
          ],
          { duration: 340, easing: "cubic-bezier(.2,.8,.25,1)" },
        ).onfinish = () => {
          apply(b);
          b.snapping = false;
        };
      }
      s.el.classList.add("filled");
      s.el.classList.remove("flash");
      void s.el.offsetWidth;
      s.el.classList.add("flash");
      placedCount += 1;
      updateHud();
      if (placedCount === BOOKS.length) levelClear();
    };

    const spawnAshAt = (b: Book) => {
      for (let i = 0; i < 10; i++) {
        const p = document.createElement("i");
        p.className = "eco-ash";
        const sz = rand(1.6, 3);
        p.style.width = `${sz}px`;
        p.style.height = `${sz}px`;
        const sx = b.x + rand(2, b.w - 2);
        const sy = b.y + rand(b.h * 0.3, b.h);
        field.appendChild(p);
        p.animate(
          [
            { transform: `translate(${sx}px,${sy}px) scale(1)`, opacity: rand(0.5, 0.8) },
            { transform: `translate(${sx + rand(-14, 14)}px,${sy - rand(30, 64)}px) scale(.15)`, opacity: 0 },
          ],
          { duration: rand(650, 1100), easing: "cubic-bezier(.2,.6,.3,1)", delay: rand(0, 150) },
        ).onfinish = () => p.remove();
      }
    };

    const showStamp = (text: string) => {
      const st = document.createElement("div");
      st.className = "eco-stamp";
      st.textContent = text;
      field.appendChild(st);
      return st;
    };

    const levelClear = () => {
      transitioning = true;
      const last = LV === TOTAL - 1;
      const st = showStamp(last ? "ARCHIVE RESTORED" : `SECTOR ${pad3(LV + 1)} CLEARED`);
      if (last) {
        later(() => {
          const rp = document.createElement("button");
          rp.type = "button";
          rp.className = "eco-replay";
          rp.textContent = "↻ chơi lại";
          rp.addEventListener("click", () => {
            transitioning = false;
            buildLevel(0, true);
          });
          field.appendChild(rp);
        }, 600);
        return;
      }
      later(() => {
        if (!RM)
          BOOKS.forEach((b) => {
            b.el.classList.add("burn");
            spawnAshAt(b);
          });
      }, 1000);
      later(
        () => {
          st.remove();
          transitioning = false;
          buildLevel(LV + 1, true);
        },
        RM ? 1100 : 2000,
      );
    };

    const buildLevel = (idx: number, withBloom: boolean) => {
      clearLevel();
      LV = idx;
      const W = field.clientWidth;
      const H = field.clientHeight;
      const specs = genLevel(idx, W, H);
      // Centered-low baselines (the Patch-9 layout fix): 50% / 86% two-row,
      // 62% single-row; slot tops additionally clamped ≥ 6px.
      const twoRows = specs.some((s) => s.row === 1);
      const baseYs = twoRows ? [Math.round(H * 0.5), Math.round(H * 0.86)] : [Math.round(H * 0.62)];
      ([0, 1] as const).forEach((row) => {
        const list = specs.filter((s) => s.row === row);
        if (!list.length) return;
        const baseY = baseYs[row];
        let sumW = 0;
        list.forEach((sp) => {
          sumW += sp.w;
        });
        const gap = Math.max(8, Math.min(20, (W - 24 - sumW) / Math.max(list.length - 1, 1)));
        let x = Math.max(12, (W - (sumW + gap * (list.length - 1))) / 2);
        const startX = x;
        list.forEach((sp) => {
          const top = Math.max(6, baseY - sp.h);
          const sl = document.createElement("div");
          sl.className = "eco-slot";
          sl.style.width = `${sp.w}px`;
          sl.style.height = `${sp.h}px`;
          sl.style.left = `${Math.round(x)}px`;
          sl.style.top = `${top}px`;
          field.appendChild(sl);
          SLOTS.push({ el: sl, x: Math.round(x), y: top, w: sp.w, h: sp.h, filled: false });
          x += sp.w + gap;
        });
        const line = document.createElement("div");
        line.className = "eco-shelfline";
        line.style.left = `${startX - 8}px`;
        line.style.width = `${x - gap - startX + 16}px`;
        line.style.top = `${baseY + 1}px`;
        field.appendChild(line);
      });
      specs.forEach((sp, i) => {
        const el = document.createElement("button");
        el.type = "button";
        const horiz = sp.w > sp.h;
        el.className = `eco-book ${horiz ? "h" : "v"}`;
        el.setAttribute("aria-label", `Sách ${sp.l} — kéo vào đúng ô`);
        el.style.width = `${sp.w}px`;
        el.style.height = `${sp.h}px`;
        el.style.background = `linear-gradient(180deg, rgba(244,241,235,.06), rgba(0,0,0,.12)), ${TONES[i % TONES.length]}`;
        const s = document.createElement("span");
        s.textContent = sp.l;
        el.appendChild(s);
        field.appendChild(el);
        // Scatter only in the lower ~65% of the field — never above the frame.
        const ylo = Math.min(Math.max(6, H * 0.34), Math.max(7, H - sp.h - 6));
        const b: Book = {
          el,
          w: sp.w,
          h: sp.h,
          x: rand(6, Math.max(7, W - sp.w - 6)),
          y: rand(ylo, Math.max(ylo + 1, H - sp.h - 6)),
          rx: 0,
          ry: 0,
          rot: RM ? 0 : rand(-14, 14),
          ph: rand(0, Math.PI * 2),
          placed: false,
          drag: false,
          snapping: false,
          gx: 0,
          gy: 0,
          lastEx: 0,
        };
        b.rx = b.x;
        b.ry = b.y;
        BOOKS.push(b);
        apply(b);
        if (withBloom && !RM) el.classList.add("reborn");
        bindDrag(b);
      });
      updateHud();
    };

    /* Gentle anti-gravity drift for unplaced books (motion on only). */
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible || document.hidden || transitioning) return;
      const t = now / 1000;
      for (const b of BOOKS) {
        if (b.placed || b.drag || b.snapping) continue;
        b.x = b.rx + Math.sin(t * 0.55 + b.ph) * 3;
        b.y = b.ry + Math.cos(t * 0.45 + b.ph * 1.4) * 3;
        b.rot += (Math.sin(t * 0.7 + b.ph) * 2.5 - b.rot) * 0.04;
        apply(b);
      }
    };

    const onResize = () => buildLevel(LV, false);
    buildLevel(0, false);
    window.addEventListener("resize", onResize);
    if (!RM) raf = requestAnimationFrame(tick);

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0.1 },
    );
    io.observe(stage);

    return () => {
      disposed = true;
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      clearLevel();
    };
  }, [enabled]);

  return (
    <div
      ref={stageRef}
      className="eco-lib-stage"
      aria-label="Mini-game: kéo sách vào đúng ô trên kệ"
    >
      {/* Organic-edged ink washes need a turbulence filter; scoped id. */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <filter id="eco-bleed" x="-35%" y="-35%" width="170%" height="170%">
            <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="3" seed="11" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="26" />
          </filter>
        </defs>
      </svg>
      <div className="eco-wash eco-w1" aria-hidden />
      <div className="eco-wash eco-w2" aria-hidden />
      <div className="eco-lib-frame" aria-hidden />
      <div className="eco-corner eco-c1" aria-hidden />
      <div className="eco-corner eco-c2" aria-hidden />
      <div className="eco-corner eco-c3" aria-hidden />
      <div className="eco-corner eco-c4" aria-hidden />
      <div className="eco-lib-tag eco-lt1">LIB.4GZ — ARCHIVE</div>
      <div ref={sectorRef} className="eco-lib-tag eco-lt2">
        SECTOR 001 · HUMANITIES
      </div>
      <div ref={hudRef} className="eco-hud">
        MÀN 001 / 120 · ĐÃ XẾP 0/4
      </div>
      <div className="eco-lib-hint">kéo sách vào đúng ô</div>
      <div className="eco-bars" aria-hidden>
        {BAR_H.map((h, i) => (
          <i key={i} style={{ height: `${h}px` }} />
        ))}
      </div>
      <div ref={fieldRef} className="eco-field" />
    </div>
  );
}
