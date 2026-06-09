import type { Localized } from "@/lib/i18n";

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  /** Funnel links shown as plain items (Home…People). English by brand decision. */
  nav: NavLink[];
  /** Join — the primary CTA, rendered as the dominant button. */
  cta: NavLink;
  /** The Power of Narrative — a set-apart deep read (different tier, not a funnel step). */
  essay: { label: string; tag: string; href: string };
  /** Footer legal / contact links. */
  legal: NavLink[];
  enrollLabel: string;
  footer: {
    wordmark: string;
    copyright: string;
  };
}

/**
 * Brief 3.1 / IA. Nav labels are intentionally English; the Vietnamese
 * alternatives (Trang chủ · Vì sao Viết · …) are recorded for the future `en`→`vi`
 * toggle. Funnel order: Home · Why Writing · The Fit · Courses · Community ·
 * Ecosystem · People · Join (Join styled as the primary CTA). The Power of
 * Narrative sits apart from the funnel — a deep essay, styled to its own tier.
 */
export const site: Localized<SiteContent> = {
  vi: {
    nav: [
      { label: "Home", href: "/" },
      { label: "Why Writing", href: "/why-writing" },
      { label: "The Fit", href: "/the-fit" },
      { label: "Courses", href: "/courses" },
      { label: "Community", href: "/community" },
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "W", href: "/people" },
    ],
    cta: { label: "Join", href: "/dang-ky" },
    essay: {
      label: "The Power of Narrative",
      tag: "đọc sâu",
      href: "/power-of-narrative",
    },
    legal: [
      { label: "Quyền riêng tư", href: "/privacy" },
      { label: "Điều khoản Sử dụng", href: "/terms" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
    enrollLabel: "Enroll",
    footer: {
      wordmark: "Writing4GenZ",
      copyright:
        "© 2026 W4GZ · The -4GZ Ecosystem · Ho Chi Minh City · Est. 2022",
    },
  },
};
