import type { Localized } from "@/lib/i18n";

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  /** Center nav links — English labels by brand decision (brief 3.1). */
  nav: NavLink[];
  enrollLabel: string;
  footer: {
    wordmark: string;
    /** Footer nav reuses the same routes. */
    copyright: string;
  };
}

/**
 * Brief 3.1 / 3.2. Nav labels are intentionally English; the Vietnamese
 * alternatives (Trang chủ · Vì sao Viết · …) are recorded for the future `en`→`vi`
 * toggle but the brand ships English nav now.
 */
export const site: Localized<SiteContent> = {
  vi: {
    nav: [
      { label: "Home", href: "/" },
      { label: "Why Writing", href: "/why-writing" },
      { label: "Courses", href: "/courses" },
      { label: "Community", href: "/community" },
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "People", href: "/people" },
      { label: "Join", href: "/join" },
    ],
    enrollLabel: "Enroll",
    footer: {
      wordmark: "Writing4GenZ",
      copyright:
        "© 2026 W4GZ · The -4GZ Ecosystem · Ho Chi Minh City · Est. 2022",
    },
  },
};
