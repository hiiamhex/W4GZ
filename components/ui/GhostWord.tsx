import type { ReactNode } from "react";

/**
 * Giant transparent stroked serif "ghost" word that breaks the grid (brief 2.3).
 * Purely decorative: aria-hidden, non-interactive. Size/position via className.
 */
export default function GhostWord({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`ghost-text block font-display font-semibold italic ${className}`}
    >
      {children}
    </span>
  );
}
