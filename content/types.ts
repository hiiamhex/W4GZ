/**
 * Shared content atoms used across pages. Page-specific shapes live alongside
 * their data in each content/<page>.ts file. All copy is authored verbatim from
 * docs/brief.md — do not paraphrase here.
 */

/** Epigraph / pull quote. `original` may be non-Vietnamese; `translation` is VI. */
export interface Quote {
  original: string;
  /** BCP-47 lang of `original` (e.g. "de", "en") for correct rendering/a11y. */
  lang?: string;
  translation: string;
  attribution: string;
}

/** Hero stat: large serif value + small mono label (e.g. "10+" / "Số khóa đã dạy"). */
export interface Stat {
  value: string;
  label: string;
}

/** A linked or numbered entry (doors, channels, branches). */
export interface Entry {
  index?: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  /** Status chip, e.g. "Đang ấp" — when set without href, renders non-clickable. */
  status?: string;
}

/** Sketch (kí họa) slot spec — frame + caption until a real asset is dropped in. */
export interface Sketch {
  /** Mono caption quoting the IMAGE description from the brief. */
  caption: string;
  /** Real, descriptive alt text (also from the IMAGE description). */
  alt: string;
  /** CSS aspect-ratio, e.g. "4 / 5", "16 / 10", "1 / 1". */
  aspect?: string;
  /** Real asset path under /public/sketches once produced. */
  src?: string;
}

/** A two-column spec row (Courses). */
export interface SpecRow {
  label: string;
  value: string;
}

/** A simple labelled link (CTA target). */
export interface Cta {
  label: string;
  href: string;
  external?: boolean;
}
