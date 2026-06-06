import Link from "next/link";
import type { Entry } from "@/content/types";

/**
 * Numbered "door"/entry card (brief I.4, IV.4, V.3). Hairline borders make it a
 * grid cell when placed inside a `hr-t hr-l` container; hover fills paper-dark.
 * Non-linked entries (status without href, e.g. "Đang ấp") render inert.
 */
export default function EntryCard({
  entry,
  className = "",
}: {
  entry: Entry;
  className?: string;
}) {
  const { index, title, description, href, external, status } = entry;
  const interactive = Boolean(href);
  const arrow = external ? "↗" : "→";

  const inner = (
    <div className="flex h-full flex-col gap-5 p-6 transition-colors duration-300 group-hover:bg-paper-dark md:p-8">
      <div className="flex items-start justify-between gap-4">
        {index ? (
          <span className="font-mono text-xs tracking-[0.2em] text-muted">
            {index}
          </span>
        ) : (
          <span aria-hidden />
        )}
        {status ? (
          <span className="hr-all px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            {status}
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-2xl italic leading-tight text-ink md:text-[1.75rem]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted md:text-base">
        {description}
      </p>
      {interactive ? (
        <span
          aria-hidden
          className="mt-auto inline-block font-mono text-lg text-ink transition-transform duration-300 group-hover:translate-x-1"
        >
          {arrow}
        </span>
      ) : null}
    </div>
  );

  const cls = `hr-r hr-b group block h-full ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return <div className={cls}>{inner}</div>;
}
