import { buildMetadata } from "@/lib/seo";
import { whyWriting, hero } from "@/content/why-writing";
import PageHero from "@/components/ui/PageHero";
import SectorView from "@/components/ui/SectorView";

export const metadata = buildMetadata({
  title: "Why Writing",
  description: whyWriting.description,
  path: "/why-writing",
});

export default function WhyWritingPage() {
  return (
    <>
      <PageHero label={hero.label} heading={hero.heading} sub={hero.sub} />
      {whyWriting.sectors.map((s) => (
        <SectorView key={s.id} sector={s} />
      ))}
    </>
  );
}
