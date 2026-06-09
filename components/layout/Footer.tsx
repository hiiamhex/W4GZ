import { Link } from "next-view-transitions";
import { site } from "@/content/site";
import { pick } from "@/lib/i18n";
import { SITE } from "@/lib/config";
import Container from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Wordmark";
import MotionToggle from "@/components/motion/MotionToggle";

/** Footer (brief 3.2): hairline top, monogram + wordmark + motto, nav, mono copyright. */
export default function Footer() {
  const { nav, cta, essay, legal, footer } = pick(site);

  return (
    <footer className="hr-t">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:pt-16 md:pb-10">
        <div className="space-y-2">
          <p className="flex items-center gap-2 font-mono text-sm font-semibold tracking-[0.12em] text-ink">
            <Monogram className="h-4 w-auto" />
            {footer.wordmark}
          </p>
          <p className="font-display text-lg italic text-muted">{SITE.motto}</p>
        </div>

        <nav aria-label="Điều hướng chân trang">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
            {[...nav, cta].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={essay.href}
                className="font-display text-sm italic text-muted transition-colors hover:text-ink"
              >
                {essay.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3 md:items-end">
          <MotionToggle />
        </div>
      </Container>

      <Container className="hr-t flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Trang pháp lý & liên hệ">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="max-w-md font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.12em] text-muted">
          {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
