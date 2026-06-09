import { buildMetadata } from "@/lib/seo";
import {
  people,
  anonymity,
  portraits,
  portraitsLabel,
  portraitsNote,
  builders,
  transition,
} from "@/content/people";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import PersonCard from "@/components/ui/PersonCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import WHero from "@/components/people/WHero";
import Reveal from "@/components/motion/Reveal";

export const metadata = buildMetadata({
  title: "W",
  description: people.description,
  path: "/people",
});

export default function PeoplePage() {
  return (
    <>
      <WHero />

      {/* VI.2 · Về sự ẩn danh */}
      <Section topRule>
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">{anonymity.label}</SectionLabel>
            <Reveal>
              <h2 className="mb-6 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {anonymity.heading}
              </h2>
            </Reveal>
            <p className="text-lg leading-relaxed text-ink/80">{anonymity.body}</p>
          </div>
        </Container>
      </Section>

      {/* VI.3 · Những chân dung */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-12">{portraitsLabel}</SectionLabel>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:gap-x-12 lg:grid-cols-3 lg:gap-x-16">
            {portraits.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
          <p className="mt-12 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {portraitsNote}
          </p>
        </Container>
      </Section>

      {/* VI.4 · Những người dựng hệ */}
      <Section topRule>
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">{builders.label}</SectionLabel>
            <p className="text-lg leading-relaxed text-ink/80">{builders.body}</p>
          </div>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>
        {transition.text}
      </ChapterTransition>
    </>
  );
}
