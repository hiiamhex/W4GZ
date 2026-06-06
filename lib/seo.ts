import type { Metadata } from "next";
import { SITE } from "./config";

/** Build per-route metadata (title, description, canonical, Open Graph, Twitter). */
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${SITE.shortName}`,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE.shortName}`,
      description,
    },
  };
}
