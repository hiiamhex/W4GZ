import type { ReactNode } from "react";

/** Mono section label — the tech layer (brief 2.2). Small, uppercase, tracked.
 *  `viewTransitionName` opts the element into a cross-route shared-element morph. */
export default function SectionLabel({
  children,
  index,
  className = "",
  muted = true,
  viewTransitionName,
}: {
  children: ReactNode;
  /** Optional leading index, e.g. "01". */
  index?: string;
  className?: string;
  muted?: boolean;
  viewTransitionName?: string;
}) {
  return (
    <p
      style={
        viewTransitionName
          ? ({ viewTransitionName } as React.CSSProperties)
          : undefined
      }
      className={`flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.25em] ${
        muted ? "text-muted" : ""
      } ${className}`}
    >
      {index ? <span className="tabular-nums">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
