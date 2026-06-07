/**
 * Visible dev step-in marker (brief v2 §8). Anything that can't be fully executed
 * renders here — an honest labelled placeholder — and is logged in GAPS.md.
 * Set NEXT_PUBLIC_HIDE_GAPS=1 to hide all markers in production.
 */
export default function Gap({
  id,
  title,
  need,
  ratio = "16 / 9",
}: {
  id: string;
  title: string;
  need: string;
  ratio?: string;
}) {
  if (process.env.NEXT_PUBLIC_HIDE_GAPS === "1") return null;
  return (
    <div
      data-gap={id}
      role="note"
      aria-label={`Gap: ${title}`}
      style={{ aspectRatio: ratio }}
      className="hr-all my-6 grid place-content-center bg-paper-dark p-6 text-center"
    >
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-amber">
        Dev step-in · {id}
      </span>
      <span className="mt-2 font-display text-xl italic text-ink">{title}</span>
      <span className="mx-auto mt-1 max-w-prose text-sm text-muted">{need}</span>
    </div>
  );
}
