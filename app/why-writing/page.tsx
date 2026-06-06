import { whyWriting } from "@/content/why-writing";
import { pick } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import EpigraphQuote from "@/components/ui/EpigraphQuote";
import PullQuote from "@/components/ui/PullQuote";
import GhostWord from "@/components/ui/GhostWord";
import SketchSlot from "@/components/ui/SketchSlot";
import ChapterTransition from "@/components/ui/ChapterTransition";
import Reveal from "@/components/motion/Reveal";
import HeroStagger from "@/components/motion/HeroStagger";

export const metadata = buildMetadata({
  title: "Why Writing",
  description:
    "Hành vi người cuối cùng mà máy không làm thay được — một lập luận về viết, tự sự, và chủ quyền giữa thời đại thông tin.",
  path: "/why-writing",
});

export default function WhyWritingPage() {
  const c = pick(whyWriting);

  return (
    <>
      {/* II.1 · Hero */}
      <section className="scroll-mt-[var(--nav-h)]">
        <Container>
          <div className="flex min-h-[58vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[68vh] lg:py-24">
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

      {/* II.2–II.7 · Six movements */}
      {c.movements.map((m, i) => (
        <Section key={m.index} topRule>
          <Container>
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
              <div className="lg:col-span-7">
                <SectionLabel index={m.index} className="mb-8">
                  {m.theme}
                </SectionLabel>

                {m.epigraph ? (
                  <Reveal className="mb-10">
                    <EpigraphQuote quote={m.epigraph} size="md" />
                  </Reveal>
                ) : null}

                <Reveal>
                  <h2 className="mb-6 font-display text-3xl italic leading-tight text-ink md:text-4xl">
                    {m.heading}
                  </h2>
                </Reveal>

                <div className="max-w-2xl space-y-5">
                  {m.body.map((p, j) => (
                    <p key={j} className="text-lg leading-relaxed text-ink/80">
                      {p}
                    </p>
                  ))}
                </div>

                {m.pull ? (
                  <Reveal className="mt-10">
                    <PullQuote>{m.pull}</PullQuote>
                  </Reveal>
                ) : null}
              </div>

              {/* Right column: a sketch, or a giant ghost numeral (grid-break). */}
              <div
                className={`lg:col-span-4 lg:col-start-9 ${
                  m.sketch ? "flex" : "hidden lg:flex"
                } items-center justify-center`}
              >
                {m.sketch ? (
                  <SketchSlot
                    sketch={m.sketch}
                    className="w-full max-w-sm"
                    tilt={i % 2 ? -1.5 : 1.5}
                  />
                ) : (
                  <GhostWord className="text-[22vw] leading-none lg:text-[14rem]">
                    {m.index}
                  </GhostWord>
                )}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* II.7 · Chuyển sang Courses */}
      <ChapterTransition href={c.transition.href}>
        {c.transition.text}
      </ChapterTransition>
    </>
  );
}
