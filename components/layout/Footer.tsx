import Link from "next/link";
import { site } from "@/content/site";
import { pick } from "@/lib/i18n";
import { SITE } from "@/lib/config";
import Container from "@/components/ui/Container";
import MotionToggle from "@/components/motion/MotionToggle";

/** Footer (brief 3.2): hairline top, full wordmark + motto, nav, mono copyright. */
export default function Footer() {
  const { nav, footer } = pick(site);

  return (
    <footer className="hr-t">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
        <div className="space-y-2">
          <p className="font-mono text-sm font-semibold tracking-[0.12em] text-ink">
            {footer.wordmark}
          </p>
          <p className="font-display text-lg italic text-muted">{SITE.motto}</p>
        </div>

        <nav aria-label="Điều hướng chân trang">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 md:items-end">
          <p className="max-w-xs font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.12em] text-muted md:text-right">
            {footer.copyright}
          </p>
          <MotionToggle />
        </div>
      </Container>
    </footer>
  );
}
