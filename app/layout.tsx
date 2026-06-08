import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { SITE } from "@/lib/config";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import Preloader from "@/components/motion/Preloader";
import ChapterCounter from "@/components/motion/ChapterCounter";
import ScrollVelocity from "@/components/motion/ScrollVelocity";
import GhostParallax from "@/components/motion/GhostParallax";
import SketchInk from "@/components/motion/SketchInk";
import MagneticButtons from "@/components/motion/MagneticButtons";
import InkCanvas from "@/components/motion/InkCanvas";
import SymbolLayer from "@/components/motion/SymbolLayer";
import RouteMemory from "@/components/motion/RouteMemory";
import { warnUnverifiedStats } from "@/lib/verifyStats";

// Build/SSR guardrail: warn about any STAT still needing verification.
warnUnverifiedStats();

/* Display — serif, used italic for emotion/headlines/quotes (brief 2.2). */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Body — variable geometric sans with full Vietnamese support. The variable
   weight axis lets scroll velocity drive font-weight (brief §3); replaces Outfit,
   which has no Vietnamese subset. */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
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
    <ViewTransitions>
      <html
        lang="vi"
        data-scroll-behavior="smooth"
        className={`${cormorant.variable} ${jakarta.variable} ${plexMono.variable} h-full`}
      >
        <body className="flex min-h-full flex-col bg-paper text-ink">
          {/* Set data-motion before paint so reveal/transition states never flash. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `try{var m=localStorage.getItem('w4gz-motion');var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;document.documentElement.setAttribute('data-motion',(m!=='off'&&!r)?'on':'off');}catch(e){document.documentElement.setAttribute('data-motion','off');}`,
            }}
          />
          <MotionProvider>
            <RouteMemory />
            <Preloader />
            <ScrollVelocity />
            <GhostParallax />
            <SketchInk />
            <MagneticButtons />
            <InkCanvas />
            <SymbolLayer />
            <Nav />
            <main id="main" className="flex-1 pt-[var(--nav-h)]">
              {children}
            </main>
            <Footer />
            <ChapterCounter />
          </MotionProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
