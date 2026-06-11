"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { dictionary } from "@/content/ecosystem";

/**
 * Dictionary4GenZ stage (Patch 8 A, reskinned + retimed by Patch 9) — an ancient
 * book cover levitating over the paper, engraving its own entries. Ported from
 * prototypes/ecosystem-projects-v4.html (supersedes v3).
 *
 * Cycle (auto ~13s, paused while hovered; click = deliberate next; never
 *   mid-cycle): dissolve (per-char scatter + dust motes) → engrave (carving beam
 *   sweeps, chars settle with a glow spark + falling chips) → gloss types out
 *   with a blinking cursor → one ~95ms spectral ghost-jitter. A reading lock
 *   keeps the cycle busy until engrave + glossLength×34ms + 2400ms, so a click
 *   can't cut a just-typed definition short.
 *
 * Interaction (the intelligent part): hovering the card PAUSES the auto-advance
 * and HOLDS the current definition — read it as long as you like; it resumes a
 * beat after the cursor leaves. A click advances to the next word on purpose
 * (ignored while a definition is still being written). Hover never dissolves.
 *
 * Cover levitation / counter-phase shadow / sheen / breathe + the leather skin
 * (spine bands, fore-edge, tooled frame, fleurons, rulings) live in globals.css
 * under [data-motion="on"]; the beam + scanline sweeps here use transform-only
 * WAAPI (Patch-3 rule). Timers pause off-screen (IntersectionObserver) and when
 * document.hidden. Reduced-motion / toggle-off: static cover, first entry crisp,
 * no cycle (the SSR markup below is exactly that state).
 */
const ENTRIES = dictionary.entries;
const AUTO = 13000;
const DIS_STAG = 55;
const ENG_PER = 130;
const GLOSS_PER = 34;
const HINT_IDLE = "rê chuột để đọc · bấm để đổi từ";
const HINT_HOLD = "đang giữ · bấm để đổi từ";

export default function DictStele() {
  const { enabled } = useMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const eword = wordRef.current;
    const egloss = glossRef.current;
    const ebeam = beamRef.current;
    const scan = scanRef.current;
    if (!enabled || !stage || !eword || !egloss || !ebeam || !scan) return;

    const hint = hintRef.current;
    let idx = 0;
    let busy = false;
    let visible = true;
    let hovering = false;
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
          later(() => cur.remove(), 1400);
        }
      }, GLOSS_PER);
    };

    /* The word leaves the cover: chars scatter individually, shedding motes. */
    const dissolve = (cb: () => void) => {
      if (egloss.firstChild)
        egloss.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 420, fill: "forwards" });
      const chars = Array.from(eword.children) as HTMLElement[];
      chars.forEach((c, i) => {
        const p = stagePos(c);
        c.animate(
          [
            { transform: "translate(0,0) rotate(0deg)", opacity: 1, filter: "blur(0px)" },
            {
              transform: `translate(${rand(-26, 26)}px,${rand(-46, -16)}px) rotate(${rand(-24, 24)}deg)`,
              opacity: 0,
              filter: "blur(5px)",
            },
          ],
          { duration: rand(700, 1100), delay: i * DIS_STAG, easing: "cubic-bezier(.3,.6,.3,1)", fill: "forwards" },
        );
        spawnDot("eco-mote", p.x, p.y, rand(-10, 10), -rand(22, 48), rand(1.5, 2.6), rand(800, 1300));
        if (Math.random() < 0.4)
          spawnDot("eco-mote", p.x, p.y, rand(-12, 12), -rand(24, 50), rand(1.5, 2.4), rand(850, 1250));
      });
      later(cb, chars.length * DIS_STAG + 1150);
    };

    /* Carving beam sweeps (transform-only); chars settle with spark + chips. */
    const engrave = (entry: { word: string; gloss: string }) => {
      setWordChars(entry.word);
      const chars = Array.from(eword.children) as HTMLElement[];
      chars.forEach((c) => {
        c.style.opacity = "0";
      });
      const total = chars.length * ENG_PER + 650;
      const span = (ebeam.parentElement?.clientWidth ?? 200) * 0.76;
      ebeam.animate(
        [
          { transform: "translateX(0)", opacity: 0 },
          { transform: `translateX(${span * 0.026}px)`, opacity: 1, offset: 0.06 },
          { transform: `translateX(${span * 0.974}px)`, opacity: 1, offset: 0.94 },
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
            { duration: 520, easing: "ease-out", fill: "forwards" },
          );
          const p = stagePos(c);
          spawnDot("eco-spark", p.x, p.y, 0, 0, rand(8, 13), 420);
          spawnDot("eco-chip", p.x + rand(-4, 4), p.y + 8, rand(-7, 7), rand(16, 30), 2, rand(480, 720));
          if (Math.random() < 0.5)
            spawnDot("eco-chip", p.x + rand(-5, 5), p.y + 6, rand(-9, 9), rand(14, 26), 2, rand(420, 620));
        }, 200 + i * ENG_PER);
      });
      later(() => typeGloss(entry.gloss), total + 150);
      // One spectral ghost-jitter per cycle — a ~95ms double-exposure flicker.
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
      }, total + 1700);
      return total;
    };

    const cycle = () => {
      if (busy) return;
      busy = true;
      dissolve(() => {
        idx = (idx + 1) % ENTRIES.length;
        const entry = ENTRIES[idx];
        const eTotal = engrave(entry);
        // Reading lock: engrave + typing + grace, so the definition stays readable.
        later(() => {
          busy = false;
        }, eTotal + entry.gloss.length * GLOSS_PER + 2400);
      });
    };

    // Auto-advance, but HOLD the current definition while the card is hovered
    // (and while off-screen / tab hidden). Reschedules every period regardless.
    const scheduleCycle = () => {
      later(() => {
        if (visible && !document.hidden && !hovering) cycle();
        scheduleCycle();
      }, AUTO);
    };

    const sweepScan = () => {
      if (visible && !document.hidden) {
        const h = stage.clientHeight;
        scan.animate(
          [
            { transform: "translateY(-6px)", opacity: 0 },
            { opacity: 0.85, offset: 0.12 },
            { opacity: 0.85, offset: 0.85 },
            { transform: `translateY(${h + 6}px)`, opacity: 0 },
          ],
          { duration: 1900, easing: "linear" },
        );
      }
      later(sweepScan, 9000 + rand(0, 3000));
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
          rand(2000, 3400),
        );
      }
      later(ambientMote, 800);
    };

    // Hover holds the current definition (pause); click is a deliberate "next
    // word" (ignored while one is still being written). Hover never dissolves.
    const onEnter = () => {
      hovering = true;
      stage.classList.add("is-reading");
      if (hint) hint.textContent = HINT_HOLD;
    };
    const onLeave = () => {
      hovering = false;
      stage.classList.remove("is-reading");
      if (hint) hint.textContent = HINT_IDLE;
    };
    const onClick = () => {
      if (!busy) cycle();
    };
    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);
    stage.addEventListener("click", onClick);

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
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
      stage.removeEventListener("click", onClick);
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
      aria-label="Bìa sách cổ — chữ tan biến rồi được khắc lại"
    >
      <div className="eco-slab-shadow" aria-hidden />
      <div className="eco-slab-tilt" aria-hidden>
        <div className="eco-slab">
          <div className="eco-spine-band" />
          <div className="eco-fore-edge" />
          <div className="eco-tool-frame">
            <i className="eco-fl eco-f1" />
            <i className="eco-fl eco-f2" />
            <i className="eco-fl eco-f3" />
            <i className="eco-fl eco-f4" />
          </div>
          <div className="eco-slab-sheen" />
          <div ref={scanRef} className="eco-scan" />
          <div className="eco-etch">
            <div className="eco-rule">
              <i />
            </div>
            <div ref={wordRef} className="eco-eword">
              {ENTRIES[0].word.split("").map((ch, i) => (
                <span key={i} className="eco-ch">
                  {ch}
                </span>
              ))}
            </div>
            <div className="eco-rule">
              <i />
            </div>
            <div ref={beamRef} className="eco-ebeam" />
            <div ref={glossRef} className="eco-egloss">
              {ENTRIES[0].gloss}
            </div>
          </div>
        </div>
      </div>
      <div ref={hintRef} className="eco-dict-hint">
        rê chuột để đọc · bấm để đổi từ
      </div>
    </div>
  );
}
