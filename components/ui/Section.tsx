import type { ReactNode } from "react";

/**
 * A chapter "page" block. Vertical padding runs ~1.5× typical so each section
 * breathes like a book page (brief 2.3). Optional top hairline separates blocks.
 */
export default function Section({
  id,
  children,
  className = "",
  topRule = false,
  padded = true,
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  topRule?: boolean;
  padded?: boolean;
  /** Ink background, paper text — for inverse "stop the eye" sections. */
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-[var(--nav-h)]",
        topRule ? (dark ? "hr-t-inv" : "hr-t") : "",
        padded ? "py-20 md:py-28 lg:py-36" : "",
        dark ? "bg-ink text-paper" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
