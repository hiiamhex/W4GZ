import { buildMetadata } from "@/lib/seo";
import {
  ecosystem,
  hero,
  richness,
  verticals,
  projectsLabel,
  ecoCards,
  projects,
  collaborate,
  transition,
} from "@/content/ecosystem";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import GhostWord from "@/components/ui/GhostWord";
import CTAButton from "@/components/ui/CTAButton";
import ChapterTransition from "@/components/ui/ChapterTransition";
import PageHero from "@/components/ui/PageHero";
import SectorView from "@/components/ui/SectorView";
import EcoGrid from "@/components/ecosystem/EcoGrid";
import MediaGlitch from "@/components/ecosystem/MediaGlitch";
import Reveal from "@/components/motion/Reveal";

export const metadata = buildMetadata({
  title: "Ecosystem",
  description: ecosystem.description,
  path: "/ecosystem",
});

export default function EcosystemPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} module="ecosystem" />

      {/* V.2 · Sự giàu có chính là bằng chứng + verticals (hover/tap banner cards) */}
      <Section topRule className="relative overflow-hidden">
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <h2 className="mb-6 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {richness.label}
              </h2>
            </Reveal>
            <p className="text-lg leading-relaxed text-ink/80">{richness.body}</p>
          </div>
          <div className="relative z-10 mt-12">
            <EcoGrid items={verticals} />
          </div>
        </Container>
        <GhostWord className="absolute top-1/3 right-[-6%] hidden text-[22vw] leading-none lg:block">
          -4GZ
        </GhostWord>
      </Section>

      {/* V.3 · chuẩn hóa để lan tỏa */}
      <SectorView sector={ecosystem.sectors[0]} />

      {/* V.4 · Dự án chiến lược + những W (banner cards) */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{projectsLabel}</SectionLabel>
          <EcoGrid items={ecoCards} />
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <p className="hr-l max-w-2xl pl-4 text-base leading-relaxed text-ink/80 lg:col-span-7">
              {projects.stat.value}
              <span className="mt-1 block font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                {projects.stat.source} · cần xác minh
              </span>
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-ink/80 lg:col-span-5">
              {projects.closing}
            </p>
          </div>
        </Container>
      </Section>

      {/* V.5 · W4GZ Media — inverted glitch panel (highlighted) */}
      <Section topRule>
        <Container>
          <MediaGlitch />
        </Container>
      </Section>

      {/* V.6 · Hợp tác → Contact us (not the Join page) */}
      <Section topRule>
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="mb-5 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {collaborate.heading}
              </h2>
            </Reveal>
            <p className="mb-8 text-lg leading-relaxed text-ink/80">{collaborate.body}</p>
            <CTAButton href="/lien-he" variant="outline">
              {collaborate.ctaLabel}
            </CTAButton>
          </div>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>{transition.text}</ChapterTransition>
    </>
  );
}
