import { buildMetadata } from "@/lib/seo";
import { meta } from "@/content/power-of-narrative";
import PowerOfNarrative from "@/components/power-of-narrative/PowerOfNarrative";

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: "/power-of-narrative",
});

export default function PowerOfNarrativePage() {
  return <PowerOfNarrative />;
}
