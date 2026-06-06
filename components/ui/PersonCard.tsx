import SketchSlot from "./SketchSlot";

/**
 * Law III (community privacy law), enforced structurally: a person is shown ONLY
 * as a sketch portrait + a single-initial alias + a cohort number. There is no
 * field here for a real name or a photograph — and there must never be one.
 */
export interface PersonCardData {
  /** Single-initial alias, e.g. "M." */
  initial: string;
  /** Cohort label, e.g. "Khóa 12". */
  cohort: string;
  /** A milestone, or the member's own sentence. */
  line: string;
  /** Render `line` as the member's quote (serif) rather than a milestone. */
  isQuote?: boolean;
  /** Kí họa portrait description (brief VI.3). */
  sketchCaption: string;
  /** Real portrait sketch path under /public/sketches, once produced. */
  sketchSrc?: string;
}

export default function PersonCard({
  person,
  className = "",
}: {
  person: PersonCardData;
  className?: string;
}) {
  const { initial, cohort, line, isQuote, sketchCaption, sketchSrc } = person;

  return (
    <figure className={`flex flex-col gap-4 ${className}`}>
      <SketchSlot
        sketch={{
          caption: sketchCaption,
          // Alt text reveals nothing beyond the alias + cohort.
          alt: `Kí họa chân dung ẩn danh — ${initial} ${cohort}`,
          aspect: "4 / 5",
          src: sketchSrc,
        }}
      />
      <figcaption>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {initial} — {cohort}
        </p>
        {isQuote ? (
          <p className="mt-2 font-display text-xl italic leading-snug text-ink">
            {line}
          </p>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            {line}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
