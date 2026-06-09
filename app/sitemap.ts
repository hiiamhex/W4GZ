import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";

const ROUTES = [
  "",
  "/why-writing",
  "/the-fit",
  "/power-of-narrative",
  "/courses",
  "/community",
  "/ecosystem",
  "/people",
  "/join",
  "/dang-ky",
  "/privacy",
  "/terms",
  "/lien-he",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
