import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/config";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

/* Display — serif, used italic for emotion/headlines/quotes (brief 2.2). */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Body — geometric sans with full Vietnamese support (replaces Outfit, which
   lacks a Vietnamese subset). */
const beVietnam = Be_Vietnam_Pro({
  variable: "--font-bevietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* Mono — the tech layer: labels, numerals, nav. Full Vietnamese support
   (replaces DM Mono, which lacks a Vietnamese subset). */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plexmono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.motto}`,
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f1eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${beVietnam.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Nav />
        <main id="main" className="flex-1 pt-[var(--nav-h)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
