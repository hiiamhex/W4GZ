"use client";

import { Link } from "next-view-transitions";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  chapters,
  dotLabels,
  meta,
  motto,
  sourceLabels,
  defaultSource,
  type Chapter,
} from "@/content/power-of-narrative";
import { subscribePath, getPreviousPath } from "@/lib/routeMemory";
import SymbolModule from "@/components/symbols/SymbolModule";
import Weave from "@/components/symbols/Weave";
import GhostWord from "@/components/ui/GhostWord";
import FigureSlot from "./FigureSlot";

const COUNT = chapters.length;
const noopSubscribe = () => () => {};

const BTN =
  "inline-flex items-center rounded-[2px] px-4 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors";
const BTN_GHOST = `${BTN} hr-all text-muted hover:border-ink hover:text-ink`;
const BTN_FWD = `${BTN} bg-ink text-paper hover:opacity-85`;
const BTN_ON_INK = `${BTN} border border-[rgba(244,241,235,0.4)] text-paper hover:bg-paper hover:text-ink`;

/** One chapter: ghost numeral, klabel + re-weaving glyph, headline, lead, prose,
 *  the forward bridge, and (on the last chapter) the inverted-ink motto climax. */
function ChapterView({
  ch,
  index,
  interactive,
  onGo,
}: {
  ch: Chapter;
  index: number;
  /** Single-chapter (hydrated) mode shows the chapter nav; stacked mode omits it. */
  interactive: boolean;
  onGo: (n: number) => void;
}) {
  const isLast = index === COUNT - 1;
  const [subBefore, subAfter] = motto.sub.split(motto.subEmphasis);

  return (
    <article className={`relative ${interactive ? "pon-rise" : ""}`}>
      <GhostWord className="pointer-events-none absolute -top-8 right-0 z-0 text-[8rem] leading-none sm:-top-12 sm:text-[13rem]">
        {ch.numeral}
      </GhostWord>

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <SymbolModule
            name="narrative"
            size={26}
            replayKey={interactive ? index : undefined}
            className="shrink-0 text-ink/45"
          />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            {ch.klabel}
          </span>
        </div>

        <h1 className="mb-5 font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl">
          {ch.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mb-6 max-w-[40rem] font-display text-[1.35rem] leading-snug text-ink/85 sm:text-2xl">
          {ch.lead}
        </p>

        {ch.blocks.map((b, i) => {
          if (b.kind === "figure")
            return <FigureSlot key={i} caption={b.caption} tall={b.tall} />;
          if (b.kind === "subhead")
            return (
              <h2
                key={i}
                className="mb-3 mt-10 max-w-[40rem] font-display text-[1.5rem] font-semibold leading-tight text-ink sm:text-[1.7rem]"
              >
                {b.text}
              </h2>
            );
          return (
            <p
              key={i}
              className={`mb-4 max-w-[40rem] text-[1.02rem] leading-[1.75] text-ink/85 ${
                b.first ? "mt-1" : ""
              }`}
            >
              {b.text}
            </p>
          );
        })}

        <div className="mt-12 hr-t pt-8">
          {ch.foot.para ? (
            <p className="mb-5 max-w-[40rem] text-[1.02rem] leading-[1.75] text-ink/85">
              {ch.foot.para}
            </p>
          ) : null}
          <p className="max-w-[38rem] font-display text-[1.2rem] italic leading-snug text-ink/85 sm:text-[1.4rem]">
            {ch.foot.bridge}
          </p>

          {interactive && !isLast ? (
            <div className="mt-9 flex items-center justify-between gap-3">
              {ch.prevLabel ? (
                <button type="button" onClick={() => onGo(index - 1)} className={BTN_GHOST}>
                  {ch.prevLabel}
                </button>
              ) : (
                <span aria-hidden />
              )}
              {ch.nextLabel ? (
                <button type="button" onClick={() => onGo(index + 1)} className={BTN_FWD}>
                  {ch.nextLabel}
                </button>
              ) : (
                <span aria-hidden />
              )}
            </div>
          ) : null}
        </div>

        {isLast ? (
          <div className="mt-12 -mx-5 rounded-[3px] bg-ink px-6 py-14 text-center sm:-mx-6 sm:px-10 sm:py-20">
            <p className="mb-6 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-paper/55">
              {motto.kicker}
            </p>
            <Weave
              segments={8}
              travel
              travelDuration={4.6}
              className="mx-auto mb-6 h-9 w-[min(360px,72%)] text-paper"
            />
            <p className="mx-auto max-w-[24rem] font-display text-[2rem] italic leading-[1.12] text-paper sm:text-5xl">
              {motto.line}
            </p>
            <p className="mx-auto mt-7 max-w-[30rem] text-[0.95rem] leading-relaxed text-paper/65">
              {subBefore}
              <b className="font-medium text-paper">{motto.subEmphasis}</b>
              {subAfter}
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              {interactive ? (
                <button type="button" onClick={() => onGo(index - 1)} className={BTN_ON_INK}>
                  {motto.prevLabel}
                </button>
              ) : null}
              <Link href={motto.startHref} className={BTN_ON_INK}>
                {motto.startLabel}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function PowerOfNarrative() {
  const [idx, setIdx] = useState(0);
  const mounted = useRef(false);

  // Progressive enhancement: SSR renders every chapter (copy is server-rendered,
  // selectable, readable with JS off); after hydration we show one at a time.
  const enhanced = useSyncExternalStore(noopSubscribe, () => true, () => false);

  // Dynamic breadcrumb (no storage) — the in-app route the visitor came from.
  const prevPath = useSyncExternalStore(subscribePath, getPreviousPath, () => null);
  const source =
    prevPath && sourceLabels[prevPath]
      ? { label: sourceLabels[prevPath], href: prevPath }
      : defaultSource;

  const go = useCallback(
    (n: number) => setIdx(Math.min(Math.max(n, 0), COUNT - 1)),
    [],
  );

  // Scroll to top on a chapter switch (treated as a section transition).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [idx]);

  // ← / → switch chapters (once hydrated).
  useEffect(() => {
    if (!enhanced) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(idx + 1);
      else if (e.key === "ArrowLeft") go(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enhanced, idx, go]);

  const active = enhanced ? idx : 0;

  return (
    <>
      {/* Top bar: brand · chapter dots · progress (under the global nav). */}
      <div className="sticky top-[var(--nav-h)] z-30 hr-b bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[46rem] items-center gap-4 px-5 py-3 sm:px-6">
          <span className="font-display text-[1.05rem] font-semibold tracking-[0.01em] text-ink">
            {meta.brand}
            <span className="ml-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
              W4GZ
            </span>
          </span>
          <nav aria-label="Chương" className="ml-auto flex items-center gap-1">
            {dotLabels.map((d, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-current={active === i ? "step" : undefined}
                aria-label={`Chương ${d}`}
                className={`rounded-[1px] border-b-[1.5px] px-2 py-1 font-mono text-[0.72rem] tracking-[0.12em] transition-colors ${
                  active === i
                    ? "border-ink text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {d}
              </button>
            ))}
          </nav>
        </div>
        <div
          className="h-[1.5px] bg-ink transition-[width] duration-500 ease-[cubic-bezier(0.6,0,0.2,1)]"
          style={{ width: `${((active + 1) / COUNT) * 100}%` }}
        />
      </div>

      {/* Breadcrumb + the page's signature weave (faint ink-on-paper). */}
      <div className="mx-auto max-w-[46rem] px-5 pt-7 sm:px-6">
        <Link
          href={source.href}
          className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
        >
          ↩ {source.label}
        </Link>
        <Weave segments={8} className="mt-3 h-6 w-full text-ink/15" />
      </div>

      {/* One chapter visible at a time once hydrated; all chapters in SSR. */}
      <div className="mx-auto max-w-[46rem] px-5 pb-24 pt-4 sm:px-6">
        {enhanced ? (
          <ChapterView key={idx} ch={chapters[idx]} index={idx} interactive onGo={go} />
        ) : (
          chapters.map((c, i) => (
            <div key={i} className={i > 0 ? "mt-16 hr-t pt-12" : ""}>
              <ChapterView ch={c} index={i} interactive={false} onGo={go} />
            </div>
          ))
        )}
      </div>
    </>
  );
}
