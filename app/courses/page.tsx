import { courses } from "@/content/courses";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import PullQuote from "@/components/ui/PullQuote";
import CourseCard from "@/components/ui/CourseCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata = buildMetadata({
  title: "Courses",
  description:
    "The Practice — viết là một kỉ luật có thể học. Hai con đường: W4GZ Introduction (online) và W4GZ Advanced (offline tại HCMC).",
  path: "/courses",
});

export default function CoursesPage() {
  const c = pick(courses);

  return (
    <>
      {/* III.1 · Hero */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="flex min-h-[52vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[62vh] lg:py-24">
            <HeroStagger className="flex flex-col gap-6">
              <SectionLabel muted={false} className="text-ink">
                {c.hero.label}
              </SectionLabel>
              <h1 className="max-w-4xl font-display text-[2.4rem] italic leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                {c.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
                {c.hero.subhead}
              </p>
            </HeroStagger>
          </div>
        </Container>
      </section>

      {/* III.2 · Sáu trụ cột */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.pillarsLabel}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {c.pillars.map((p) => (
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

      {/* III.3 · Hai con đường */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.pathsLabel}</SectionLabel>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {c.tracks.map((track) => (
              <Reveal key={track.title}>
                <CourseCard
                  tone={track.tone}
                  status={track.status}
                  title={track.title}
                  positioning={track.positioning}
                  specHead={track.specHead}
                  spec={track.spec}
                  cta={track.cta}
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {c.pathsNote}
          </p>
        </Container>
      </Section>

      {/* III.4 · Từ người đã viết (testimonials, Law III aliases) */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{c.testimonialsLabel}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 md:grid-cols-3">
            {c.testimonials.map((t, i) => (
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
            {c.testimonialsNote}
          </p>
        </Container>
      </Section>

      {/* III.4 · Chuyển sang Community */}
      <ChapterTransition href={c.transition.href}>
        {c.transition.text}
      </ChapterTransition>
    </>
  );
}
