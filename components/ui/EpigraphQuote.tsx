import type { Quote } from "@/content/types";

/**
 * Epigraph quote (brief 2.6): original in large serif-italic, Vietnamese
 * translation small/muted below, attribution in mono. Opens each chapter and
 * each Why-Writing movement.
 */
export default function EpigraphQuote({
  quote,
  size = "lg",
  className = "",
}: {
  quote: Quote;
  size?: "lg" | "md";
  className?: string;
}) {
  return (
    <figure className={`max-w-3xl ${className}`}>
      <blockquote>
        <p
          lang={quote.lang}
          className={`font-display italic leading-[1.18] text-ink ${
            size === "lg"
              ? "text-[1.75rem] md:text-4xl lg:text-[2.6rem]"
              : "text-2xl md:text-3xl"
          }`}
        >
          {quote.original}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {quote.translation}
        </p>
      </blockquote>
      <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        — {quote.attribution}
      </figcaption>
    </figure>
  );
}
