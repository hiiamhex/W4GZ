export type EpigraphQuote = {
  original: string;
  translation?: string;
  author: string;
  lang?: string;
};

/**
 * Chapter epigraph (brief v2 §3.3 / 2.7): original in large serif-italic,
 * Vietnamese translation muted, author in mono. Opens every page except Home.
 */
export default function Epigraph({
  quote,
  className = "",
}: {
  quote: EpigraphQuote;
  className?: string;
}) {
  return (
    <figure className={`max-w-3xl ${className}`}>
      <blockquote>
        <p
          lang={quote.lang}
          className="font-display text-[1.75rem] italic leading-[1.18] text-ink md:text-4xl lg:text-[2.6rem]"
        >
          {quote.original}
        </p>
        {quote.translation ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {quote.translation}
          </p>
        ) : null}
      </blockquote>
      <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        — {quote.author}
      </figcaption>
    </figure>
  );
}
