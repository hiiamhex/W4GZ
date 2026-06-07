import type { ModuleName } from "@/components/symbols/SymbolModule";

/**
 * v2 data-driven content model (brief v2 §4 / Master Spec). Pages are
 * `Page.sectors[]`; the Sector renderer renders prose sectors uniformly, while
 * heroes / card grids read sectors by id for bespoke layout. All copy is pasted
 * verbatim from docs/master-spec.md — never paraphrased.
 */

export type Quote = {
  original: string;
  translation?: string;
  author: string;
  lang?: string;
};

/** Evidence stat — always verify before publish (drives a build-time warning). */
export interface Stat {
  value: string;
  source: string;
  verify: true;
}

/** Art slot: a sketch (kí họa) or a concept graphic; may carry a symbol motif. */
export interface ArtItem {
  id: string;
  kind: "sketch" | "concept";
  brief: string;
  ratio?: string;
  module?: ModuleName;
}

export interface CtaSpec {
  label: string;
  href: string;
  variant?: "filled" | "outline" | "inverse";
  external?: boolean;
}

export interface Sector {
  id: string;
  kicker?: string;
  heading?: string;
  sub?: string;
  body?: string[];
  quote?: Quote;
  stat?: Stat[];
  art?: ArtItem[];
  module?: ModuleName;
  cta?: CtaSpec[];
}

export interface Page {
  route: string;
  chapter: string;
  title: string;
  description: string;
  epigraph?: Quote;
  sectors: Sector[];
}

/** Find a sector by id (for bespoke hero/grid layouts). */
export function sector(page: Page, id: string): Sector | undefined {
  return page.sectors.find((s) => s.id === id);
}
