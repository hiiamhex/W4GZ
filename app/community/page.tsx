import { community } from "@/content/community";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { HUB_MAP_URL } from "@/lib/config";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import EpigraphQuote from "@/components/ui/EpigraphQuote";
import CTAButton from "@/components/ui/CTAButton";
import SketchSlot from "@/components/ui/SketchSlot";
import EntryCard from "@/components/ui/EntryCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata = buildMetadata({
  title: "Community",
  description:
    "The Living Community — viết là cột sống, đây là cơ thể. W4GZ Hub tại HCMC, phát triển toàn diện, và cộng đồng online.",
  path: "/community",
});

export default function CommunityPage() {
  const c = pick(community);

  return (
    <>
      {/* IV.1 · Hero */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="flex min-h-[52vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[62vh] lg:py-24">
            <HeroStagger className="flex flex-col gap-6">
              <SectionLabel
                muted={false}
                className="text-ink"
                viewTransitionName="chapter-mark"
              >
                {c.hero.label}
              </SectionLabel>
              <h1 className="max-w-4xl font-display text-[2.6rem] italic leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
                {c.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
                {c.hero.subhead}
              </p>
            </HeroStagger>
          </div>
        </Container>
      </section>

      {/* IV.2 · W4GZ Hub */}
      <Section id="hub" topRule>
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <SketchSlot sketch={c.hub.sketch} className="w-full" tilt={-1.5} />
            </Reveal>
            <div className="flex flex-col gap-5">
              <SectionLabel>{c.hub.label}</SectionLabel>
              <h2 className="font-display text-4xl italic leading-tight text-ink md:text-5xl">
                {c.hub.title}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-ink/80">
                {c.hub.body}
              </p>
              <div className="space-y-1 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                <p>{c.hub.address}</p>
                <p>{c.hub.hours}</p>
              </div>
              <div className="pt-2">
                <CTAButton
                  href={HUB_MAP_URL || undefined}
                  external={Boolean(HUB_MAP_URL)}
                  variant="outline"
                  disabled={!HUB_MAP_URL}
                >
                  {c.hub.ctaLabel}
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* IV.3 · Phát triển toàn diện */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.holistic.label}</SectionLabel>
          <Reveal className="mb-16 md:mb-24">
            <EpigraphQuote quote={c.holistic.epigraph} />
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {c.holistic.facets.map((f, i) => (
              <div
                key={f.title}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={i % 2 ? "lg:order-2" : ""}>
                  <SketchSlot
                    sketch={f.sketch}
                    className="w-full"
                    tilt={i % 2 ? 1.5 : -1.5}
                  />
                </Reveal>
                <Reveal className={i % 2 ? "lg:order-1" : ""}>
                  <h3 className="mb-4 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                    {f.title}
                  </h3>
                  <p className="max-w-xl text-lg leading-relaxed text-ink/80">
                    {f.body}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* IV.4 · Cộng đồng online */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.online.label}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1">
            {c.online.channels.map((ch, i) => (
              <EntryCard key={i} entry={ch} />
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {c.online.note}
          </p>
        </Container>
      </Section>

      {/* IV.4 · Chuyển sang Ecosystem */}
      <ChapterTransition href={c.transition.href}>
        {c.transition.text}
      </ChapterTransition>
    </>
  );
}
