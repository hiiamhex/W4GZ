import { Children, type ReactNode } from "react";

/**
 * Staggered hero reveal (brief 2.4): each direct child fades up in sequence
 * (delays ~0.05–0.3s). Pure CSS animation; reduced-motion neutralizes it.
 * Spacing between items comes from `className` (e.g. "flex flex-col gap-6").
 */
export default function HeroStagger({
  children,
  base = 0.05,
  step = 0.06,
  className = "",
}: {
  children: ReactNode;
  base?: number;
  step?: number;
  className?: string;
}) {
  const items = Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className="hero-rise"
          style={{ "--rise-delay": `${base + i * step}s` } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
