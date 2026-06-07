import SymbolModule, { type ModuleName } from "@/components/symbols/SymbolModule";

/**
 * Concept-graphic placeholder (brief v2 §5). Holds the spot for a per-sector
 * concept graphic with its exact brief; when `module` is set, the matching
 * SymbolModule renders enlarged + faint as the motif. Real art replaces it later
 * (logged under art/concepts in GAPS.md).
 */
export default function ArtSlot({
  id,
  brief,
  ratio = "16 / 10",
  module,
  className = "",
}: {
  id: string;
  brief: string;
  ratio?: string;
  module?: ModuleName;
  className?: string;
}) {
  return (
    <figure
      data-art={id}
      role="img"
      aria-label={brief}
      style={{ aspectRatio: ratio }}
      className={`hr-all relative grid w-full place-content-center overflow-hidden bg-paper-dark p-6 ${className}`}
    >
      {module ? (
        <SymbolModule
          name={module}
          size={220}
          className="pointer-events-none absolute inset-0 m-auto text-ink/10"
        />
      ) : null}
      <figcaption className="relative max-w-prose text-center">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
          Art · {id}
        </span>
        <span className="mt-2 block font-mono text-[0.72rem] leading-relaxed text-muted">
          {brief}
        </span>
      </figcaption>
    </figure>
  );
}
