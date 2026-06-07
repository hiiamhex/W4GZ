import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/config";
import {
  ecosystem,
  hero,
  richness,
  verticals,
  projects,
  collaborate,
  transition,
} from "@/content/ecosystem";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import GhostWord from "@/components/ui/GhostWord";
import ArtSlot from "@/components/ui/ArtSlot";
import CTAButton from "@/components/ui/CTAButton";
import ChapterTransition from "@/components/ui/ChapterTransition";
import PageHero from "@/components/ui/PageHero";
import SectorView from "@/components/ui/SectorView";
import Reveal from "@/components/motion/Reveal";

export const metadata = buildMetadata({
  title: "Ecosystem",
  description: ecosystem.description,
  path: "/ecosystem",
});

export default function EcosystemPage() {
  const contactHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "/join";

  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} />

      {/* V.2 · Sự giàu có chính là bằng chứng + verticals */}
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
          <div className="hr-t hr-l mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <div key={v.name} className="hr-r hr-b flex flex-col gap-3 p-6 md:p-8">
                <h3 className="font-mono text-base font-medium tracking-tight text-ink">
                  {v.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink/80">{v.line}</p>
              </div>
            ))}
          </div>
        </Container>
        <GhostWord className="absolute top-1/3 right-[-6%] hidden text-[22vw] leading-none lg:block">
          -4GZ
        </GhostWord>
      </Section>

      {/* V.3 · chuẩn hóa để lan tỏa */}
      <SectorView sector={ecosystem.sectors[0]} />

      {/* V.4 · Những dự án chiến lược */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{projects.label}</SectionLabel>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {projects.items.map((p) => (
              <Reveal key={p.name}>
                <div className="hr-all h-full bg-paper-dark/40 p-8 md:p-10">
                  <h3 className="font-display text-2xl italic leading-tight text-ink md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/80">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="hr-l max-w-2xl pl-4 text-base leading-relaxed text-ink/80">
                {projects.stat.value}
                <span className="mt-1 block font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                  {projects.stat.source} · cần xác minh
                </span>
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80">
                {projects.closing}
              </p>
            </div>
            <div className="lg:col-span-5">
              <ArtSlot
                id={projects.art.id}
                brief={projects.art.brief}
                module="ecosystem"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* V.5 · W4GZ Media Team */}
      <SectorView sector={ecosystem.sectors[1]} />

      {/* V.6 · Hợp tác */}
      <Section topRule>
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="mb-5 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {collaborate.heading}
              </h2>
            </Reveal>
            <p className="mb-8 text-lg leading-relaxed text-ink/80">
              {collaborate.body}
            </p>
            <CTAButton
              href={contactHref}
              external={Boolean(CONTACT_EMAIL)}
              variant="outline"
            >
              {collaborate.ctaLabel}
            </CTAButton>
          </div>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>
        {transition.text}
      </ChapterTransition>
    </>
  );
}
