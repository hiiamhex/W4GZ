import type { Metadata } from "next";
import {
  home,
  heroStats,
  tickerItems,
  pillars,
  pillarsClosing,
  doors,
  transition,
} from "@/content/home";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import StatBlock from "@/components/ui/StatBlock";
import EntryCard from "@/components/ui/EntryCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Ticker from "@/components/motion/Ticker";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";
import SymbolModule from "@/components/symbols/SymbolModule";
import { NarrativeText } from "@/lib/narrativeLink";

export const metadata: Metadata = {
  description: home.description,
  alternates: { canonical: "/" },
};

const hero = home.sectors[0];

export default function HomePage() {
  return (
    <>
      {/* I.1 · Hero — two columns split by a hairline; symbol mark faint in corner */}
      <section className="relative scroll-mt-[var(--nav-h)]">
        <SymbolModule
          name="home"
          size={160}
          className="pointer-events-none absolute top-6 right-5 hidden text-ink/10 lg:block"
        />
        <Container>
          <div className="grid grid-cols-1 lg:min-h-[calc(100svh-var(--nav-h))] lg:grid-cols-2">
            <HeroStagger className="flex h-full flex-col gap-6 py-12 lg:justify-end lg:py-20 lg:pr-12">
              <SectionLabel
                muted={false}
                className="text-ink"
                viewTransitionName="chapter-mark"
              >
                {hero.kicker}
              </SectionLabel>
              <h1 className="font-display text-[2.6rem] italic leading-[1.04] tracking-[-0.01em] text-ink sm:text-6xl lg:text-7xl">
                <span className="block">{hero.heading}</span>
                <span className="block">{hero.sub}</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
                {hero.body?.[0]}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                {hero.cta?.map((c, i) => (
                  <CTAButton key={i} href={c.href} variant={c.variant}>
                    {c.label}
                  </CTAButton>
                ))}
              </div>
            </HeroStagger>

            <HeroStagger
              base={0.24}
              className="flex h-full flex-col gap-12 py-12 lg:justify-end lg:py-20 lg:pl-12 lg:hr-l"
            >
              <Ticker items={tickerItems} label="Băng chữ thương hiệu W4GZ" />
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {heroStats.map((s, i) => (
                  <StatBlock key={i} stat={s} />
                ))}
              </div>
            </HeroStagger>
          </div>
        </Container>
      </section>

      {/* I.2 · Ba trụ — the weave at Home */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">Ba trụ</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.name}
                className="hr-r hr-b flex min-h-[14rem] flex-col gap-4 p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    <NarrativeText text={p.name} />
                  </span>
                  {p.module ? (
                    <SymbolModule
                      name={p.module}
                      size={40}
                      replayKey={p.name}
                      className="text-ink/40"
                    />
                  ) : null}
                </div>
                <p className="font-display text-2xl italic leading-snug text-ink">
                  {p.line}
                </p>
              </div>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 max-w-2xl font-display text-2xl italic leading-snug text-ink md:text-3xl">
              {pillarsClosing}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* I.3 · Bốn cửa vào */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">Bốn cửa vào</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {doors.map((d) => (
              <EntryCard key={d.index} entry={d} />
            ))}
          </div>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>
        {transition.text}
      </ChapterTransition>
    </>
  );
}
