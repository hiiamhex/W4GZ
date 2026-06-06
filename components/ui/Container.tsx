import type { ElementType, ReactNode } from "react";

/** Centered content shell with responsive gutters. */
export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14 ${className}`}
    >
      {children}
    </Tag>
  );
}
