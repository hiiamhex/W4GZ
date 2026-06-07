import { buildMetadata } from "@/lib/seo";
import { ENROLL_URL, APPLY_URL } from "@/lib/config";
import {
  join,
  hero,
  covenant,
  gateLabel,
  paths,
  gateClosing,
  closing,
} from "@/content/join";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";

export const metadata = buildMetadata({
  title: "Join",
  description: join.description,
  path: "/join",
});

// Single gate: both routes go to the course path (Enroll/Apply), never a
// standalone community signup. Fall back to the Courses gate page until the real
// enroll/apply destinations exist, so Enroll stays reachable.
const HREFS: Record<string, string> = {
  enroll: ENROLL_URL || "/courses",
  apply: APPLY_URL || "/courses",
};

export default function JoinPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} />

      {/* VII.2 · Lời tuyên */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{covenant.label}</SectionLabel>
          <div className="max-w-3xl space-y-7">
            {covenant.lines.map((line, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-display text-2xl italic leading-snug text-ink md:text-[1.75rem]">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* VII.3 · Một cổng, hai lối qua */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{gateLabel}</SectionLabel>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {paths.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="hr-all flex scroll-mt-[var(--nav-h)] flex-col gap-6 p-8 md:p-10"
              >
                <h2 className="font-display text-2xl italic leading-tight text-ink md:text-3xl">
                  {p.label}
                </h2>
                <p className="text-lg leading-relaxed text-ink/80">{p.body}</p>
                <div className="mt-auto pt-2">
                  <CTAButton href={HREFS[p.id]} variant="filled">
                    {p.ctaLabel}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl font-mono text-[0.78rem] uppercase leading-relaxed tracking-[0.14em] text-muted">
            {gateClosing}
          </p>
        </Container>
      </Section>

      {/* VII.4 · Dòng đóng */}
      <Section dark className="text-center">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-4xl font-display text-3xl italic leading-[1.12] text-paper md:text-5xl lg:text-6xl">
              {closing.motto}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-snug text-paper/70 md:text-2xl">
              “{closing.intent}”
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
