import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import { hasNarrative, NARRATIVE_HREF } from "@/lib/narrativeLink";

/**
 * Auto-links (Patch A): members are called "W" → link the standalone identity
 * token "W" to the W page (route `/people`), like the existing "narrative" →
 * `/power-of-narrative` rule. Scope is tight: only a WHOLE-WORD capital "W" (not
 * inside another word, never "W4GZ" / "Writing4GenZ" / course names), and only
 * the FIRST occurrence per text block, with a subtle inline style. Do not use on
 * the W page itself or in the W-identity word-bloom (those don't use these).
 */
export const W_HREF = "/people";

// A capital "W" not flanked by a letter/number → excludes W4GZ, Writing4GenZ, W-words.
const W_RE = /(?<![\p{L}\p{N}])W(?![\p{L}\p{N}])/u;
const LINK = "underline decoration-hairline decoration-1 underline-offset-2 transition-colors hover:decoration-ink";
const NARR_LINK =
  "underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink";

function linkifyFirstW(text: string): ReactNode {
  const m = W_RE.exec(text);
  if (!m) return text;
  const i = m.index;
  return (
    <>
      {text.slice(0, i)}
      <Link href={W_HREF} className={LINK}>
        W
      </Link>
      {text.slice(i + 1)}
    </>
  );
}

/** Inline body text: links the first standalone identity "W" → the W page. */
export function WText({ text }: { text: string }) {
  return <>{linkifyFirstW(text)}</>;
}

/**
 * Heading transform: if it mentions "narrative" → link the whole heading to the
 * deep read (existing rule); otherwise link the first standalone "W" → the W page.
 */
export function AutoHeading({
  as: Tag = "h2",
  text,
  className = "",
}: {
  as?: ElementType;
  text: string;
  className?: string;
}) {
  if (hasNarrative(text)) {
    return (
      <Tag className={className}>
        <Link href={NARRATIVE_HREF} className={NARR_LINK}>
          {text}
        </Link>
      </Tag>
    );
  }
  return <Tag className={className}>{linkifyFirstW(text)}</Tag>;
}
