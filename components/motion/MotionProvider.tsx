"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Motion system root (brief §3). Hosts ONE Lenis instance (driven by the GSAP
 * ticker, synced to ScrollTrigger) and exposes motion state to the tree.
 *
 * `enabled` is the single switch the rest of the site reads: it is false under
 * prefers-reduced-motion OR the visible user toggle → native scroll + CSS
 * kill-switch + skipped JS choreography. `lite` (mobile/low-power/Save-Data)
 * keeps CSS reveals but will gate the heavy WebGL layer. Browser state is read
 * via useSyncExternalStore so SSR/hydration stay consistent without effects.
 */
interface MotionState {
  enabled: boolean;
  reduced: boolean;
  lite: boolean;
  ready: boolean;
  toggle: () => void;
}

const MotionContext = createContext<MotionState>({
  enabled: false,
  reduced: false,
  lite: false,
  ready: false,
  toggle: () => {},
});

export const useMotion = () => useContext(MotionContext);

const STORAGE_KEY = "w4gz-motion";
const PREF_EVENT = "w4gz-motion-change";

/* ── external stores (no effects, SSR-safe snapshots) ───────────────────── */

const reducedMqls = () => window.matchMedia("(prefers-reduced-motion: reduce)");
function subReduced(cb: () => void) {
  const mq = reducedMqls();
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getReduced = () => reducedMqls().matches;

function subPref(cb: () => void) {
  window.addEventListener(PREF_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(PREF_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}
const getPref = () => (localStorage.getItem(STORAGE_KEY) === "off" ? "off" : "on");

const noopSub = () => () => {};

function detectLite(): boolean {
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  const saveData = nav.connection?.saveData === true;
  const lowMem = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
  const lowCpu =
    typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  return saveData || ((lowMem || lowCpu) && coarse);
}

/** Bridges Lenis to the GSAP ticker + ScrollTrigger (only mounted when enabled). */
function LenisGsapBridge() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(onTick);
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [lenis]);
  return null;
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(subReduced, getReduced, () => false);
  const pref = useSyncExternalStore(subPref, getPref, () => "on");
  const lite = useSyncExternalStore(noopSub, detectLite, () => false);
  // Flips true only after hydration, so motion never affects the SSR snapshot.
  const ready = useSyncExternalStore(
    noopSub,
    () => true,
    () => false,
  );

  const enabled = ready && !reduced && pref === "on";

  // CSS kill-switch hook for non-JS motion (transitions/animations).
  useEffect(() => {
    document.documentElement.setAttribute("data-motion", enabled ? "on" : "off");
  }, [enabled]);

  const toggle = useCallback(() => {
    const next = getPref() === "on" ? "off" : "on";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(PREF_EVENT));
  }, []);

  return (
    <MotionContext.Provider value={{ enabled, reduced, lite, ready, toggle }}>
      {enabled ? (
        <ReactLenis
          root
          options={{ autoRaf: false, lerp: 0.1, smoothWheel: true }}
        >
          <LenisGsapBridge />
          {children}
        </ReactLenis>
      ) : (
        children
      )}
    </MotionContext.Provider>
  );
}
