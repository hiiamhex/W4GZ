import { Link } from "next-view-transitions";

/** W monogram in the symbol vocabulary (stroke + nodes) — font-free, currentColor. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 34"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3,5 L11,29 L20,13 L29,29 L37,5" />
      <g fill="currentColor" stroke="none">
        <circle cx="3" cy="5" r="2.4" />
        <circle cx="11" cy="29" r="2.4" />
        <circle cx="20" cy="13" r="2.4" />
        <circle cx="29" cy="29" r="2.4" />
        <circle cx="37" cy="5" r="2.4" />
      </g>
    </svg>
  );
}

/**
 * W4GZ logo (brief Update 6): the W monogram + the wordmark, rendered inline so it
 * stays crisp in the brand font. Monochrome via `currentColor`/`text-*` — pass
 * `tone="paper"` on ink/dark panels (never ink-on-ink or paper-on-paper).
 * Standalone SVG/raster exports live in `public/logo/` + the favicon set.
 */
export default function Wordmark({
  full = false,
  markOnly = false,
  tone = "ink",
  className = "",
}: {
  full?: boolean;
  /** Show only the compact monogram (collapsed nav / avatar). */
  markOnly?: boolean;
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="W4GZ — Writing4GenZ, về trang chủ"
      className={`inline-flex items-center gap-2 font-mono font-semibold tracking-[0.12em] ${
        tone === "paper" ? "text-paper" : "text-ink"
      } ${className}`}
    >
      <Monogram className="h-[1.05em] w-auto" />
      {markOnly ? null : <span>{full ? "Writing4GenZ" : "W4GZ"}</span>}
    </Link>
  );
}
