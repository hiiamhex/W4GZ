import type { ReactNode } from "react";

/** Oversized serif-italic pull quote — the line that carries weight (brief 2.6). */
export default function PullQuote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-display italic leading-[1.08] tracking-[-0.01em] text-ink text-[1.9rem] md:text-5xl lg:text-[3.5rem] ${className}`}
    >
      {children}
    </p>
  );
}
