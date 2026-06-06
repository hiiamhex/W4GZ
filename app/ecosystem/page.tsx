import { ecosystem } from "@/content/ecosystem";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/config";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import GhostWord from "@/components/ui/GhostWord";
import CTAButton from "@/components/ui/CTAButton";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata = buildMetadata({
  title: "Ecosystem",
  description:
    "The -4GZ Ecosystem — viết là gốc, mọi thứ khác mọc lên từ đó. Một protocol, nhiều địa hạt: storytelling, poetry, podcast, logic, và hơn thế.",
  path: "/ecosystem",
});

export default function EcosystemPage() {
  const c = pick(ecosystem);
  const contactHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "/join";

  return (
    <>
      {/* V.1 · Hero */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="flex min-h-[52vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[62vh] lg:py-24">
            <HeroStagger className="flex flex-col gap-6">
              <SectionLabel muted={false} className="text-ink">
                {c.hero.label}
              </SectionLabel>
              <h1 className="max-w-4xl font-display text-[2.4rem] italic leading-[1.05] text-ink sm:text-5xl lg:text-7xl">
                {c.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
                {c.hero.subhead}
              </p>
            </HeroStagger>
          </div>
        </Container>
      </section>

      {/* V.2 · -4GZ nghĩa là gì — ghost word breaks the grid */}
      <Section topRule className="relative overflow-hidden">
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <h2 className="mb-6 font-display text-3xl italic leading-tight text-ink md:text-5xl">
                {c.meaning.heading}
              </h2>
            </Reveal>
            <p className="text-lg leading-relaxed text-ink/80">
              {c.meaning.body}
            </p>
          </div>
        </Container>
        <GhostWord className="absolute top-1/2 right-[-6%] hidden -translate-y-1/2 text-[26vw] leading-none lg:block">
          -4GZ
        </GhostWord>
      </Section>

      {/* V.3 · Các nhánh */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.branchesLabel}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {c.branches.map((b) => (
              <div
                key={b.index}
                className="hr-r hr-b flex flex-col gap-3 p-6 md:p-8"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  {b.index}
                </span>
                <h3 className="font-mono text-base font-medium tracking-tight text-ink">
                  {b.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink/80">
                  {b.description}
                </p>
                {b.status ? (
                  <span className="hr-all mt-1 w-fit px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                    {b.status}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {c.branchesNote}
          </p>
        </Container>
      </Section>

      {/* V.4 · Dự án lớn & fanpage (placeholder building layer) */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.building.heading}</SectionLabel>
          <div className="hr-all bg-paper-dark/40 p-8 md:p-12">
            <p className="font-mono text-sm uppercase tracking-[0.14em] text-muted">
              {c.building.placeholder}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex aspect-[4/3] items-center justify-center bg-paper-dark"
                >
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    [ đang cập nhật ]
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {c.buildingNote}
          </p>
        </Container>
      </Section>

      {/* V.5 · Hợp tác */}
      <Section topRule>
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="mb-5 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {c.collaborate.heading}
              </h2>
            </Reveal>
            <p className="mb-8 text-lg leading-relaxed text-ink/80">
              {c.collaborate.body}
            </p>
            <CTAButton
              href={contactHref}
              external={Boolean(CONTACT_EMAIL)}
              variant="outline"
            >
              {c.collaborate.ctaLabel}
            </CTAButton>
          </div>
        </Container>
      </Section>

      {/* V.5 · Chuyển sang People */}
      <ChapterTransition href={c.transition.href}>
        {c.transition.text}
      </ChapterTransition>
    </>
  );
}
