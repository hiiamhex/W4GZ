import { Link } from "next-view-transitions";
import { buildMetadata } from "@/lib/seo";
import { whyWriting, hero } from "@/content/why-writing";
import PageHero from "@/components/ui/PageHero";
import SectorView from "@/components/ui/SectorView";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SymbolModule from "@/components/symbols/SymbolModule";
import Weave from "@/components/symbols/Weave";

export const metadata = buildMetadata({
  title: "Why Writing",
  description: whyWriting.description,
  path: "/why-writing",
});

export default function WhyWritingPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} module="writing" />
      {whyWriting.sectors.map((s) => (
        <SectorView key={s.id} sector={s} />
      ))}

      {/* Fixed "deep read" entry to The Power of Narrative (docs §1). */}
      <Section topRule>
        <Container>
          <Link
            href="/power-of-narrative"
            className="group block max-w-3xl"
            aria-label="Bài đọc sâu — The Power of Narrative"
          >
            <div className="flex items-center gap-3">
              <SymbolModule name="narrative" size={30} className="shrink-0 text-ink/40" />
              <SectionLabel>Bài đọc sâu</SectionLabel>
            </div>
            <Weave segments={8} className="mt-5 h-6 w-full max-w-md text-ink/15" />
            <p className="mt-5 font-display text-2xl italic leading-snug text-ink md:text-3xl">
              The Power of Narrative — ba chương về cách tự sự dệt nên một cái
              tôi, một nền văn minh, và vì sao đó là la bàn của thế hệ này{" "}
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </p>
          </Link>
        </Container>
      </Section>
    </>
  );
}
