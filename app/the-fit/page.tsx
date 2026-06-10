import { buildMetadata } from "@/lib/seo";
import {
  title,
  description,
  hero,
  valuesLabel,
  tapHint,
  values,
  transition,
} from "@/content/the-fit";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import ChapterTransition from "@/components/ui/ChapterTransition";
import PageHero from "@/components/ui/PageHero";
import FitCard from "@/components/the-fit/FitCard";

export const metadata = buildMetadata({ title, description, path: "/the-fit" });

export default function TheFitPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} module="fit" />

      {/* Six value cards — click-to-reveal (Patch 2): a charcoal cover with a
          representative icon disintegrates into dust to reveal each value. */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-3">{valuesLabel}</SectionLabel>
          <p className="mb-10 max-w-xl text-base text-muted">{tapHint}</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <FitCard key={v.index} name={v.name} nameVi={v.nameVi} line={v.line} glyph={v.glyph} />
            ))}
          </div>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>{transition.text}</ChapterTransition>
    </>
  );
}
