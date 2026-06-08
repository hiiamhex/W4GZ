import { Link } from "next-view-transitions";
import type { ElementType } from "react";

/**
 * Auto-link rule (docs/power-of-narrative.md §6): site-wide, every heading whose
 * text contains "narrative" / "narratives" (case-insensitive) links to the deep
 * read. Implemented as a heading transform so future headings are covered
 * automatically — wire it into the shared heading renderers (PageHero, SectorView)
 * and the known anchors (Home's Narrative pillar, Courses' Narrative Structure).
 */
export const NARRATIVE_HREF = "/power-of-narrative";

const NARRATIVE_RE = /narratives?/i;
export function hasNarrative(text: string): boolean {
  return NARRATIVE_RE.test(text);
}

const LINK_CLASS =
  "underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink";

/** Heading element; if its text mentions narrative, the text becomes the link. */
export function NarrativeHeading({
  as: Tag = "h2",
  text,
  className = "",
}: {
  as?: ElementType;
  text: string;
  className?: string;
}) {
  if (!hasNarrative(text)) {
    return <Tag className={className}>{text}</Tag>;
  }
  return (
    <Tag className={className}>
      <Link href={NARRATIVE_HREF} className={LINK_CLASS}>
        {text}
      </Link>
    </Tag>
  );
}

/** Inline variant: linkify a heading label that is rendered inside its own tag. */
export function NarrativeText({ text }: { text: string }) {
  if (!hasNarrative(text)) return <>{text}</>;
  return (
    <Link href={NARRATIVE_HREF} className={LINK_CLASS}>
      {text}
    </Link>
  );
}
