"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { pick } from "@/lib/i18n";
import Wordmark from "@/components/ui/Wordmark";
import CTAButton from "@/components/ui/CTAButton";

/**
 * Persistent nav (brief 3.1 / IA): fixed, blurred paper bg, hairline bottom. Logo
 * left; funnel links (Home…People) centred; **Join** as the dominant CTA button;
 * then a hairline divider and **The Power of Narrative** set apart as a deep essay
 * (Cormorant italic + small tag — a different tier, not a funnel step). Collapses
 * to a full-screen menu below xl.
 */
export default function Nav() {
  const { nav, cta, essay } = pick(site);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Điều hướng chính" className="hr-b bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex h-[var(--nav-h)] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <Wordmark className="text-base tracking-[0.18em]" />

          <div className="hidden items-center gap-6 xl:flex">
            <ul className="flex items-center gap-6">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-ink ${
                      isActive(link.href) ? "text-ink" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <CTAButton href={cta.href} variant="filled" size="sm">
              {cta.label}
            </CTAButton>

            <span aria-hidden className="h-5 w-px bg-hairline" />

            <Link
              href={essay.href}
              aria-current={isActive(essay.href) ? "page" : undefined}
              className="group inline-flex items-baseline gap-1.5"
            >
              <span
                className={`font-display text-[1.05rem] italic transition-colors ${
                  isActive(essay.href) ? "text-ink" : "text-ink/85 group-hover:text-ink"
                }`}
              >
                {essay.label}
              </span>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted">
                {essay.tag}
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <CTAButton
              href={cta.href}
              variant="filled"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {cta.label}
            </CTAButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Đóng menu" : "Mở menu"}
              className="inline-flex h-10 w-10 items-center justify-center text-ink"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden
              >
                {open ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" />
                    <line x1="18" y1="4" x2="4" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="8" x2="19" y2="8" />
                    <line x1="3" y1="14" x2="19" y2="14" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-40 overflow-y-auto bg-paper xl:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((link) => (
              <li key={link.href} className="hr-b">
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-5 font-mono text-sm uppercase tracking-[0.2em] sm:px-8"
                >
                  <span className={isActive(link.href) ? "text-ink" : "text-muted"}>
                    {link.label}
                  </span>
                  <span aria-hidden className="text-muted">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Set apart from the funnel: the deep essay, a different tier. */}
          <Link
            href={essay.href}
            onClick={() => setOpen(false)}
            className="hr-b flex items-center justify-between px-5 py-5 sm:px-8"
          >
            <span className="font-display text-xl italic text-ink">{essay.label}</span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
              {essay.tag}
            </span>
          </Link>

          <div className="px-5 py-8 sm:px-8">
            <CTAButton
              href={cta.href}
              variant="filled"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
