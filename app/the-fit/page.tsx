import { buildMetadata } from "@/lib/seo";
import {
  title,
  description,
  hero,
  valuesLabel,
  values,
  note,
  transition,
} from "@/content/the-fit";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ChapterTransition from "@/components/ui/ChapterTransition";
import PageHero from "@/components/ui/PageHero";
import SymbolModule from "@/components/symbols/SymbolModule";
import { NarrativeText } from "@/lib/narrativeLink";

export const metadata = buildMetadata({ title, description, path: "/the-fit" });

export default function TheFitPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} module="fit" />

      {/* Six value cards — each carries its glyph (no asymmetry). */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{valuesLabel}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.index} className="hr-r hr-b flex flex-col gap-4 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted">
                    {v.index}
                  </span>
                  <SymbolModule
                    name={v.glyph}
                    size={36}
                    interactive
                    className="text-ink/40"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl italic leading-tight text-ink">
                    <NarrativeText text={v.name} />
                  </h2>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    {v.nameVi}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{v.line}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
            {note}
          </p>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>{transition.text}</ChapterTransition>
    </>
  );
}
