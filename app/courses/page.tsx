import { buildMetadata } from "@/lib/seo";
import {
  courses,
  hero,
  pillars,
  cohort,
  gate,
  tracksLabel,
  tracks,
  tracksNote,
  testimonialsLabel,
  testimonials,
  testimonialsNote,
  transition,
} from "@/content/courses";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import CourseCard from "@/components/ui/CourseCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";

export const metadata = buildMetadata({
  title: "Courses",
  description: courses.description,
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} />

      {/* III.2 · Sáu trụ cột */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">Sáu trụ cột</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.index} className="hr-r hr-b flex flex-col gap-4 p-6 md:p-8">
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  {p.index}
                </span>
                <div>
                  <h2 className="font-display text-2xl italic leading-tight text-ink">
                    {p.nameEn}
                  </h2>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    {p.nameVi}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{p.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* III.3 · Vì sao dạy theo cohort */}
      <Section topRule>
        <Container>
          <div className="max-w-3xl">
            <SectionLabel className="mb-6">{cohort.label}</SectionLabel>
            <Reveal>
              <p className="mb-6 font-display text-2xl italic leading-snug text-ink md:text-3xl">
                {cohort.lead}
              </p>
            </Reveal>
            <p className="text-lg leading-relaxed text-ink/80">{cohort.body}</p>
          </div>
        </Container>
      </Section>

      {/* III.4 · Cổng duy nhất — the single gate (inverse, the core rule) */}
      <Section dark topRule>
        <Container>
          <SectionLabel muted={false} className="mb-6 text-paper/60">
            {gate.label}
          </SectionLabel>
          <Reveal>
            <p className="font-display text-3xl italic leading-[1.1] text-paper md:text-5xl">
              {gate.lead}
            </p>
          </Reveal>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
            {gate.body}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-px bg-[rgba(244,241,235,0.16)] md:grid-cols-2">
            {gate.paths.map((p) => (
              <div key={p.label} className="bg-ink p-6 md:p-8">
                <h3 className="font-display text-xl italic text-paper md:text-2xl">
                  {p.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl font-mono text-[0.78rem] uppercase leading-relaxed tracking-[0.14em] text-paper/60">
            {gate.closing}
          </p>
          <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper/40">
            {gate.note}
          </p>
        </Container>
      </Section>

      {/* III.5 · Hai lối qua cổng */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{tracksLabel}</SectionLabel>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {tracks.map((t) => (
              <Reveal key={t.title}>
                <CourseCard
                  tone={t.tone}
                  status={t.status}
                  title={t.title}
                  positioning={t.positioning}
                  specHead={t.specHead}
                  spec={t.spec}
                  cta={t.cta}
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {tracksNote}
          </p>
        </Container>
      </Section>

      {/* III.6 · Từ người đã viết */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{testimonialsLabel}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="hr-r hr-b flex flex-col gap-6 p-6 md:p-8">
                <blockquote className="font-display text-2xl italic leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  — {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {testimonialsNote}
          </p>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>
        {transition.text}
      </ChapterTransition>
    </>
  );
}
