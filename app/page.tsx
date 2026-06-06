import type { Metadata } from "next";
import { home } from "@/content/home";
import { pick } from "@/lib/i18n";
import { SITE } from "@/lib/config";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import EpigraphQuote from "@/components/ui/EpigraphQuote";
import PullQuote from "@/components/ui/PullQuote";
import CTAButton from "@/components/ui/CTAButton";
import StatBlock from "@/components/ui/StatBlock";
import EntryCard from "@/components/ui/EntryCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Ticker from "@/components/motion/Ticker";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata: Metadata = {
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const c = pick(home);

  return (
    <>
      {/* I.1 · Hero — two columns split by a vertical hairline, content at the
          bottom; whitespace is "the unwritten page". */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="grid grid-cols-1 lg:min-h-[calc(100svh-var(--nav-h))] lg:grid-cols-2">
            <HeroStagger className="flex h-full flex-col gap-6 py-12 lg:justify-end lg:py-20 lg:pr-12">
              <SectionLabel muted={false} className="text-ink">
                {c.hero.label}
              </SectionLabel>
              <h1 className="font-display text-[2.6rem] italic leading-[1.04] tracking-[-0.01em] text-ink sm:text-6xl lg:text-7xl">
                {c.hero.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
                {c.hero.subhead}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href={c.hero.ctas.primary.href} variant="filled">
                  {c.hero.ctas.primary.label}
                </CTAButton>
                <CTAButton href={c.hero.ctas.secondary.href} variant="outline">
                  {c.hero.ctas.secondary.label}
                </CTAButton>
              </div>
            </HeroStagger>

            <HeroStagger
              base={0.24}
              className="flex h-full flex-col gap-12 py-12 lg:justify-end lg:py-20 lg:pl-12 lg:hr-l"
            >
              <Ticker
                items={c.hero.tickerItems}
                label="Băng chữ thương hiệu W4GZ"
              />
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {c.hero.stats.map((s, i) => (
                  <StatBlock key={i} stat={s} />
                ))}
              </div>
            </HeroStagger>
          </div>
        </Container>
      </section>

      {/* I.2 · Bối cảnh thời đại */}
      <Section topRule>
        <Container>
          <Reveal>
            <EpigraphQuote quote={c.era.quote} />
          </Reveal>
          <div className="mt-14 max-w-3xl space-y-8">
            <Reveal>
              <PullQuote>{c.era.headline}</PullQuote>
            </Reveal>
            <div className="space-y-6">
              {c.era.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-lg leading-relaxed text-ink/80">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* I.3 · Lời đáp W4GZ — inverse block, the eye-stop */}
      <Section dark>
        <Container>
          <div className="max-w-4xl">
            <Reveal>
              <p className="font-display text-3xl italic leading-[1.1] text-paper md:text-5xl lg:text-6xl">
                {c.answer.statement}
              </p>
            </Reveal>
            <div className="mt-10 max-w-2xl space-y-5">
              {c.answer.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-base leading-relaxed text-paper/75 md:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* I.4 · Bốn cửa vào — hairline grid, hover fills paper-dark */}
      <Section>
        <Container>
          <SectionLabel className="mb-10">{c.doorsLabel}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {c.doors.map((door, i) => (
              <EntryCard key={i} entry={door} />
            ))}
          </div>
        </Container>
      </Section>

      {/* I.5 · Chuyển chương */}
      <ChapterTransition href={c.transition.href}>
        {c.transition.text}
      </ChapterTransition>
    </>
  );
}
