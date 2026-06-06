import { Link } from "next-view-transitions";
import type { ReactNode } from "react";
import Container from "./Container";

/**
 * The single line that closes a chapter and opens the next one (brief 4 /
 * per-page transitions). Generous whitespace; arrow widens on hover.
 */
export default function ChapterTransition({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <div className={`hr-t ${className}`}>
      <Container>
        <Link href={href} className="group block max-w-4xl py-16 md:py-24">
          <span className="font-display text-2xl italic leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
            {children}{" "}
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </span>
        </Link>
      </Container>
    </div>
  );
}
