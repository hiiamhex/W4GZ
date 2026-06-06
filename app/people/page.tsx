import { people } from "@/content/people";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import PersonCard from "@/components/ui/PersonCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata = buildMetadata({
  title: "People",
  description:
    "The People — những người đã cầm lấy cây bút. Một sự tôn vinh giữ ở tông trầm: chân dung kí họa, bí danh, và cột mốc (Law III: ẩn danh tuyệt đối).",
  path: "/people",
});

export default function PeoplePage() {
  const c = pick(people);

  return (
    <>
      {/* VI.1 · Hero */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="flex min-h-[50vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[60vh] lg:py-24">
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

      {/* VI.2 · Về sự ẩn danh — turn the constraint into an ethic */}
      <Section topRule>
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">{c.anonymity.label}</SectionLabel>
            <Reveal>
              <h2 className="mb-6 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {c.anonymity.heading}
              </h2>
            </Reveal>
            <p className="text-lg leading-relaxed text-ink/80">
              {c.anonymity.body}
            </p>
          </div>
        </Container>
      </Section>

      {/* VI.3 · Những chân dung — airy gallery, no ranking */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-12">{c.portraitsLabel}</SectionLabel>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:gap-x-12 lg:grid-cols-3 lg:gap-x-16">
            {c.people.map((person, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <PersonCard person={person} />
              </Reveal>
            ))}
          </div>
          <p className="mt-12 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {c.peopleNote}
          </p>
        </Container>
      </Section>

      {/* VI.4 · Chữ thành viên cạnh kinh điển — equal weight, by design */}
      <Section topRule>
        <Container>
          <p className="mb-12 max-w-2xl font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-muted">
            {c.parity.caption}
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            <figure className="md:hr-r md:pr-12">
              <blockquote>
                <p
                  lang={c.parity.classic.lang}
                  className="font-display text-2xl italic leading-[1.2] text-ink md:text-3xl"
                >
                  {c.parity.classic.original}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {c.parity.classic.translation}
                </p>
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                — {c.parity.classic.attribution}
              </figcaption>
            </figure>

            <figure>
              <blockquote>
                <p className="font-display text-2xl italic leading-[1.2] text-ink md:text-3xl">
                  {c.parity.member.original}
                </p>
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                — {c.parity.member.attribution}
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* VI.4 · Chuyển sang Join */}
      <ChapterTransition href={c.transition.href}>
        {c.transition.text}
      </ChapterTransition>
    </>
  );
}
