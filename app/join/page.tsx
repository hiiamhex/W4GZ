import { join } from "@/content/join";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import StubForm from "@/components/forms/StubForm";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata = buildMetadata({
  title: "Join",
  description:
    "The Covenant — trang đầu tiên của bạn. Bắt đầu với Introduction, nộp đơn Advanced, hoặc bước vào cộng đồng W4GZ.",
  path: "/join",
});

export default function JoinPage() {
  const c = pick(join);

  return (
    <>
      {/* VII.1 · Hero */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="flex min-h-[50vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[58vh] lg:py-24">
            <HeroStagger className="flex flex-col gap-6">
              <SectionLabel muted={false} className="text-ink">
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

      {/* VII.2 · Lời tuyên — the Covenant */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.covenant.label}</SectionLabel>
          <div className="max-w-3xl space-y-7">
            {c.covenant.lines.map((line, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-display text-2xl italic leading-snug text-ink md:text-[1.75rem]">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {c.covenant.note}
          </p>
        </Container>
      </Section>

      {/* VII.3 · Hai cánh cửa — two balanced doors with stubbed forms */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.doorsLabel}</SectionLabel>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {c.doors.map((door) => (
              <div
                key={door.id}
                id={door.id}
                className="hr-all flex scroll-mt-[var(--nav-h)] flex-col gap-6 p-8 md:p-10"
              >
                <h2 className="font-display text-3xl italic leading-tight text-ink md:text-4xl">
                  {door.heading}
                </h2>
                <p className="text-lg leading-relaxed text-ink/80">
                  {door.body}
                </p>
                <div className="mt-auto pt-2">
                  <StubForm
                    kind={door.kind}
                    submitLabel={door.ctaLabel}
                    placeholder={door.placeholder}
                    successMessage={door.success}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* VII.4 · Dòng đóng — motto + Commander's Intent */}
      <Section dark className="text-center">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-4xl font-display text-3xl italic leading-[1.12] text-paper md:text-5xl lg:text-6xl">
              {c.closing.motto}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-snug text-paper/70 md:text-2xl">
              “{c.closing.intent}”
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
