import { buildMetadata } from "@/lib/seo";
import { HUB_MAP_URL } from "@/lib/config";
import { community, hero, hub, online, transition } from "@/content/community";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import SketchSlot from "@/components/ui/SketchSlot";
import CTAButton from "@/components/ui/CTAButton";
import EntryCard from "@/components/ui/EntryCard";
import ChapterTransition from "@/components/ui/ChapterTransition";
import PageHero from "@/components/ui/PageHero";
import SectorView from "@/components/ui/SectorView";
import SymbolModule from "@/components/symbols/SymbolModule";
import Reveal from "@/components/motion/Reveal";

export const metadata = buildMetadata({
  title: "Community",
  description: community.description,
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} module="community" />

      {community.sectors.map((s) => (
        <SectorView key={s.id} sector={s} />
      ))}

      {/* IV.6 · W4GZ Hub */}
      <Section id="hub" topRule>
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <SketchSlot
                className="w-full"
                tilt={-1.5}
                sketch={{
                  caption: hub.sketch.brief,
                  alt: hub.sketch.brief,
                  aspect: hub.sketch.ratio,
                }}
              />
            </Reveal>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <SectionLabel>{hub.label}</SectionLabel>
                <SymbolModule name="hub" size={30} className="shrink-0 text-ink/35" />
              </div>
              <h2 className="font-display text-3xl italic leading-tight text-ink md:text-4xl">
                {hub.heading}
              </h2>
              {hub.body.map((p, i) => (
                <p key={i} className="max-w-xl text-lg leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              <div className="space-y-1 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                <p>{hub.address}</p>
                <p>{hub.hours}</p>
              </div>
              <div className="pt-2">
                <CTAButton
                  href={HUB_MAP_URL || undefined}
                  external={Boolean(HUB_MAP_URL)}
                  variant="outline"
                  disabled={!HUB_MAP_URL}
                >
                  {hub.ctaLabel}
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* IV.7 · Cộng đồng online */}
      <Section topRule>
        <Container>
          <SectionLabel className="mb-10">{online.label}</SectionLabel>
          <div className="hr-t hr-l grid grid-cols-1">
            {online.channels.map((ch, i) => (
              <EntryCard key={i} entry={ch} />
            ))}
          </div>
          <p className="mt-6 max-w-2xl font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-muted">
            {online.note}
          </p>
        </Container>
      </Section>

      <ChapterTransition href={transition.href}>
        {transition.text}
      </ChapterTransition>
    </>
  );
}
