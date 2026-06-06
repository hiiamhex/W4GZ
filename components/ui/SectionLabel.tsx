import type { ReactNode } from "react";

/** Mono section label — the tech layer (brief 2.2). Small, uppercase, tracked. */
export default function SectionLabel({
  children,
  index,
  className = "",
  muted = true,
}: {
  children: ReactNode;
  /** Optional leading index, e.g. "01". */
  index?: string;
  className?: string;
  muted?: boolean;
}) {
  return (
    <p
      className={`flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.25em] ${
        muted ? "text-muted" : ""
      } ${className}`}
    >
      {index ? <span className="tabular-nums">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
