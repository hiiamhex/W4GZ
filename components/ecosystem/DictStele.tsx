"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "@/components/motion/MotionProvider";
import { dictionary } from "@/content/ecosystem";

/**
 * Dictionary4GenZ stage (Patch 8 A, reskinned by Patch 9) — an ancient book cover
 * levitating over the paper. Ported from prototypes/ecosystem-projects-v4.html.
 *
 * Interaction: CLICK-ONLY. Nothing changes on its own and hover does nothing — a
 * click swaps to the next entry, changing the word AND its meaning together:
 *   dissolve (current word scatters + dust, its definition fading out with it) →
 *   engrave (carving beam sweeps as the new word's letters settle) with the new
 *   definition fading in at the same moment → one ~95ms spectral ghost-jitter.
 *   The effect is quick; a brief lock ignores clicks mid-transition. Word and
 *   gloss are always the same entry, advancing in order.
 *
 * The cover's ambient life (levitation / counter-phase shadow / sheen / breathe)
 * + the leather skin (spine bands, fore-edge, tooled frame, fleurons, rulings)
 * live in globals.css under [data-motion="on"]; the beam sweep here is
 * transform-only (Patch-3 rule). Reduced-motion / toggle-off: static cover, first
 * entry crisp, no interaction (the SSR markup below is exactly that state).
 */
const ENTRIES = dictionary.entries;
const DIS_STAG = 24; // per-char dissolve stagger (ms)
const ENG_PER = 55; // per-char engrave stagger (ms)

export default function DictStele() {
  const { enabled } = useMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const glossRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const eword = wordRef.current;
    const egloss = glossRef.current;
    const ebeam = beamRef.current;
    if (!enabled || !stage || !eword || !egloss || !ebeam) return;

    let idx = 0;
    let busy = false;
    let disposed = false;
    const timers = new Set<number>();

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

    // The definition shows/hides as one block, paired with its word (opacity via
    // the CSS transition on .eco-egloss).
    const showGloss = (text: string) => {
      egloss.textContent = text;
      egloss.style.opacity = "1";
    };
    const hideGloss = () => {
      egloss.style.opacity = "0";
    };

    /* The current word scatters out, its definition fading out with it. */
    const dissolve = (cb: () => void) => {
      hideGloss();
      const chars = Array.from(eword.children) as HTMLElement[];
      chars.forEach((c, i) => {
        const p = stagePos(c);
        c.animate(
          [
            { transform: "translate(0,0) rotate(0deg)", opacity: 1, filter: "blur(0px)" },
            {
              transform: `translate(${rand(-22, 22)}px,${rand(-40, -14)}px) rotate(${rand(-22, 22)}deg)`,
              opacity: 0,
              filter: "blur(4px)",
            },
          ],
          { duration: rand(320, 480), delay: i * DIS_STAG, easing: "cubic-bezier(.3,.6,.3,1)", fill: "forwards" },
        );
        spawnDot("eco-mote", p.x, p.y, rand(-9, 9), -rand(18, 40), rand(1.5, 2.4), rand(500, 800));
      });
      later(cb, chars.length * DIS_STAG + 360);
    };

    /* The new word engraves while its definition fades in — together. */
    const engrave = (entry: { word: string; gloss: string }) => {
      setWordChars(entry.word);
      const chars = Array.from(eword.children) as HTMLElement[];
      chars.forEach((c) => {
        c.style.opacity = "0";
      });
      const total = chars.length * ENG_PER + 280;
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
      // Meaning changes at the same time as the word: fade it in as the letters
      // start carving (not after).
      showGloss(entry.gloss);
      chars.forEach((c, i) => {
        later(() => {
          c.animate(
            [
              { opacity: 0, filter: "blur(3px)", transform: "translateY(-2px)" },
              { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
            ],
            { duration: 300, easing: "ease-out", fill: "forwards" },
          );
          const p = stagePos(c);
          spawnDot("eco-spark", p.x, p.y, 0, 0, rand(8, 13), 360);
          spawnDot("eco-chip", p.x + rand(-4, 4), p.y + 8, rand(-7, 7), rand(14, 26), 2, rand(380, 560));
        }, 110 + i * ENG_PER);
      });
      // One spectral ghost-jitter, just after the word settles.
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
      }, total + 250);
      return total;
    };

    // A click advances one entry (ignored while a swap is mid-flight). No timers,
    // no hover, no auto-advance — the card is still until clicked.
    const cycle = () => {
      if (busy) return;
      busy = true;
      dissolve(() => {
        idx = (idx + 1) % ENTRIES.length;
        const eTotal = engrave(ENTRIES[idx]);
        later(() => {
          busy = false;
        }, eTotal + 200);
      });
    };

    const onClick = () => cycle();
    stage.addEventListener("click", onClick);

    showGloss(ENTRIES[0].gloss);

    return () => {
      disposed = true;
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
      stage.removeEventListener("click", onClick);
      // Restore the static SSR state (entry 0, crisp) for the disabled path.
      setWordChars(ENTRIES[0].word);
      egloss.textContent = ENTRIES[0].gloss;
      egloss.style.opacity = "1";
    };
  }, [enabled]);

  return (
    <div
      ref={stageRef}
      className="eco-dict-stage"
      role="img"
      aria-label="Bìa sách cổ — bấm để đổi từ và nghĩa"
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
          <div className="eco-scan" />
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
      <div className="eco-dict-hint">bấm để đổi từ</div>
    </div>
  );
}
