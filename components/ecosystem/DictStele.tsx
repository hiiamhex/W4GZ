"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { dictionary } from "@/content/ecosystem";

/**
 * Dictionary4GenZ stage (Patch 8 A) — a thin ink-stone "tech stele" levitating
 * over the paper, engraving its own entries. Ported from
 * prototypes/ecosystem-projects-v3.html.
 *
 * Cycle (auto ~5.2s; hover/click trigger immediately; never mid-cycle):
 *   dissolve (per-char scatter + dust motes) → engrave (carving beam sweeps,
 *   chars settle with a glow spark + falling stone chips) → gloss types out with
 *   a blinking cursor → one ~90ms spectral ghost-jitter.
 *
 * Slab levitation / counter-phase shadow / sheen / breathe live in globals.css
 * under [data-motion="on"]; the beam + scanline sweeps here use transform-only
 * WAAPI (Patch-3 rule). Timers pause off-screen (IntersectionObserver) and when
 * document.hidden. Reduced-motion / toggle-off: static slab, first entry crisp,
 * no cycle (the SSR markup below is exactly that state).
 */
const ENTRIES = dictionary.entries;

export default function DictStele() {
  const { enabled } = useMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const eword = wordRef.current;
    const egloss = glossRef.current;
    const ebeam = beamRef.current;
    const scan = scanRef.current;
    if (!enabled || !stage || !eword || !egloss || !ebeam || !scan) return;

    let idx = 0;
    let busy = false;
    let visible = true;
    let disposed = false;
    const timers = new Set<number>();
    let glossTimer = 0;

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        if (!disposed) fn();
      }, ms);
      timers.add(id);
    };
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const stagePos = (el: Element) => {
      const r = el.getBoundingClientRect();
      const s = stage.getBoundingClientRect();
      return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2 };
    };

    const spawnDot = (
      cls: string,
      x: number,
      y: number,
      dx: number,
      dy: number,
      size: number,
      dur: number,
    ) => {
      const p = document.createElement("i");
      p.className = cls;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      stage.appendChild(p);
      p.animate(
        [
          { transform: `translate(${x}px,${y}px) scale(1)`, opacity: 0.85 },
          { transform: `translate(${x + dx}px,${y + dy}px) scale(.2)`, opacity: 0 },
        ],
        { duration: dur, easing: "cubic-bezier(.2,.6,.3,1)" },
      ).onfinish = () => p.remove();
    };

    const setWordChars = (word: string) => {
      eword.textContent = "";
      for (const ch of word) {
        const s = document.createElement("span");
        s.className = "eco-ch";
        s.textContent = ch;
        eword.appendChild(s);
      }
    };

    const typeGloss = (text: string) => {
      window.clearInterval(glossTimer);
      egloss.textContent = "";
      const cur = document.createElement("span");
      cur.className = "eco-cursor";
      const txt = document.createTextNode("");
      egloss.append(txt, cur);
      let i = 0;
      glossTimer = window.setInterval(() => {
        i += 1;
        txt.nodeValue = text.slice(0, i);
        if (i >= text.length) {
          window.clearInterval(glossTimer);
          later(() => cur.remove(), 900);
        }
      }, 24);
    };

    /* The word leaves the stone: chars scatter individually, shedding motes. */
    const dissolve = (cb: () => void) => {
      if (egloss.firstChild)
        egloss.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: "forwards" });
      const chars = Array.from(eword.children) as HTMLElement[];
      chars.forEach((c, i) => {
        const p = stagePos(c);
        c.animate(
          [
            { transform: "translate(0,0) rotate(0deg)", opacity: 1, filter: "blur(0px)" },
            {
              transform: `translate(${rand(-26, 26)}px,${rand(-44, -14)}px) rotate(${rand(-24, 24)}deg)`,
              opacity: 0,
              filter: "blur(5px)",
            },
          ],
          { duration: rand(520, 820), delay: i * 38, easing: "cubic-bezier(.3,.6,.3,1)", fill: "forwards" },
        );
        spawnDot("eco-mote", p.x, p.y, rand(-10, 10), -rand(20, 46), rand(1.5, 2.6), rand(600, 1000));
        if (Math.random() < 0.4)
          spawnDot("eco-mote", p.x, p.y, rand(-12, 12), -rand(24, 50), rand(1.5, 2.4), rand(650, 950));
      });
      later(cb, chars.length * 38 + 860);
    };

    /* Carving beam sweeps (transform-only); chars settle with spark + chips. */
    const engrave = (entry: { word: string; gloss: string }) => {
      setWordChars(entry.word);
      const chars = Array.from(eword.children) as HTMLElement[];
      chars.forEach((c) => {
        c.style.opacity = "0";
      });
      const per = 95;
      const total = chars.length * per + 500;
      const span = (ebeam.parentElement?.clientWidth ?? 200) * 0.78;
      ebeam.animate(
        [
          { transform: "translateX(0)", opacity: 0 },
          { transform: `translateX(${span * 0.025}px)`, opacity: 1, offset: 0.06 },
          { transform: `translateX(${span * 0.975}px)`, opacity: 1, offset: 0.94 },
          { transform: `translateX(${span}px)`, opacity: 0 },
        ],
        { duration: total, easing: "linear" },
      );
      chars.forEach((c, i) => {
        later(() => {
          c.animate(
            [
              { opacity: 0, filter: "blur(3px)", transform: "translateY(-2px)" },
              { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
            ],
            { duration: 420, easing: "ease-out", fill: "forwards" },
          );
          const p = stagePos(c);
          spawnDot("eco-spark", p.x, p.y, 0, 0, rand(8, 13), 360);
          spawnDot("eco-chip", p.x + rand(-4, 4), p.y + 8, rand(-7, 7), rand(16, 30), 2, rand(420, 640));
          if (Math.random() < 0.5)
            spawnDot("eco-chip", p.x + rand(-5, 5), p.y + 6, rand(-9, 9), rand(14, 26), 2, rand(380, 560));
        }, 180 + i * per);
      });
      later(() => typeGloss(entry.gloss), total - 120);
      // One spectral ghost-jitter per cycle — a ~90ms double-exposure flicker.
      later(() => {
        eword.animate(
          [
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(2.5px)", opacity: 0.55, offset: 0.4 },
            { transform: "translateX(-1.5px)", opacity: 0.85, offset: 0.7 },
            { transform: "translateX(0)", opacity: 1 },
          ],
          { duration: 95, easing: "steps(3,end)" },
        );
      }, total + 700);
    };

    const cycle = () => {
      if (busy) return;
      busy = true;
      dissolve(() => {
        idx = (idx + 1) % ENTRIES.length;
        engrave(ENTRIES[idx]);
        later(() => {
          busy = false;
        }, ENTRIES[idx].word.length * 95 + 1500);
      });
    };

    const scheduleCycle = () => {
      later(() => {
        if (visible && !document.hidden) cycle();
        scheduleCycle();
      }, 5200);
    };

    const sweepScan = () => {
      if (visible && !document.hidden) {
        const h = stage.clientHeight;
        scan.animate(
          [
            { transform: "translateY(-6px)", opacity: 0 },
            { opacity: 0.9, offset: 0.12 },
            { opacity: 0.9, offset: 0.85 },
            { transform: `translateY(${h + 6}px)`, opacity: 0 },
          ],
          { duration: 1600, easing: "linear" },
        );
      }
      later(sweepScan, 7000 + rand(0, 2200));
    };

    const ambientMote = () => {
      if (visible && !document.hidden && stage.querySelectorAll(".eco-mote").length < 12) {
        const w = stage.clientWidth;
        const h = stage.clientHeight;
        spawnDot(
          "eco-mote",
          rand(w * 0.2, w * 0.8),
          rand(h * 0.55, h * 0.9),
          rand(-8, 8),
          -rand(40, 90),
          rand(1.5, 3),
          rand(1800, 3000),
        );
      }
      later(ambientMote, 700);
    };

    const onTrigger = () => cycle();
    stage.addEventListener("mouseenter", onTrigger);
    stage.addEventListener("click", onTrigger);

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => (visible = e.isIntersecting)),
      { threshold: 0.1 },
    );
    io.observe(stage);

    typeGloss(ENTRIES[0].gloss);
    scheduleCycle();
    sweepScan();
    ambientMote();

    return () => {
      disposed = true;
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
      window.clearInterval(glossTimer);
      io.disconnect();
      stage.removeEventListener("mouseenter", onTrigger);
      stage.removeEventListener("click", onTrigger);
      // Restore the static SSR state (entry 0, crisp) for the disabled path.
      setWordChars(ENTRIES[0].word);
      egloss.textContent = ENTRIES[0].gloss;
    };
  }, [enabled]);

  return (
    <div
      ref={stageRef}
      className="eco-dict-stage"
      role="img"
      aria-label="Phiến đá công nghệ — chữ tan biến rồi được khắc lại"
    >
      <div className="eco-slab-shadow" aria-hidden />
      <div className="eco-slab-tilt" aria-hidden>
        <div className="eco-slab">
          <div className="eco-slab-edge" />
          <div className="eco-slab-sheen" />
          <div ref={scanRef} className="eco-scan" />
          <div className="eco-etch">
            <div ref={wordRef} className="eco-eword">
              {ENTRIES[0].word.split("").map((ch, i) => (
                <span key={i} className="eco-ch">
                  {ch}
                </span>
              ))}
            </div>
            <div ref={beamRef} className="eco-ebeam" />
            <div ref={glossRef} className="eco-egloss">
              {ENTRIES[0].gloss}
            </div>
          </div>
        </div>
      </div>
      <div className="eco-dict-hint">hover · chữ tự thay</div>
    </div>
  );
}
