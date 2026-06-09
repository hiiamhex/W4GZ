# W4GZ — Writing4GenZ

The production marketing site for **W4GZ**, a Vietnamese writing community. The site
is itself a story: a visitor walks in from the noise, understands why narrative is
survival, sees a self-authored life built _with others_, and picks up the pen. Motto —
_"Creates narratives worth living."_ — is the operating principle, not a tagline.

**Source of truth:** `docs/W4GZ_Landing_Master_Spec.docx` (Master Spec **v2**, extracted
to [`docs/master-spec.md`](docs/master-spec.md)). It supersedes Script v1. All `COPY`
blocks are pasted verbatim into the content layer — never paraphrased, translated, or
invented; `STAT`s are rendered but flagged for verification.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4** (CSS-first `@theme`)
- Fonts via `next/font/google`: **Cormorant Garamond** (display, italic) ·
  **Plus Jakarta Sans** (variable body — scroll-velocity weight) · **IBM Plex Mono** (mono)
- **Native cursor only.** **One gate** (see below). No backend.

> **Font note:** the brief specified Outfit (body), but Outfit has no Vietnamese subset on
> Google Fonts — diacritics (ọ, ệ, ữ, …) would fall back to a system font. Body uses
> **Plus Jakarta Sans** instead (variable weight + full Vietnamese); IBM Plex Mono replaces
> DM Mono for the same reason. Cormorant Garamond is unchanged.

## Getting started

Requires **Node.js ≥ 20.9**.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static production build (also prints STAT-verify warnings)
npm run start
npm run typecheck
npm run lint
```

`NEXT_PUBLIC_HIDE_GAPS=1` hides all `<Gap>` dev markers (see below).

## Routes (one per chapter)

Eight funnel pages: `/` Home · `/why-writing` · `/the-fit` ("ARE YOU W4GZ?" — registrant fit,
6 value cards) · `/courses` (the gate) · `/community` · `/ecosystem` · `/people` (**W** — the
W-identity bloom hero + the anonymised portraits below it) · `/join` (the primary CTA).
Per-route metadata + OG; lang `vi`.

The **W** page (renamed from People; route stays `/people`) opens with the W-identity bloom
(`components/people/WHero.tsx`): the W monogram ringed by orbiting "W-words" — three rings turn
slowly in alternating directions, words flee the cursor and spring back (vanilla rAF + lerp),
all monochrome, frozen under reduced-motion and paused off-screen.

Plus the **deep read** — `/power-of-narrative` (three chapters, one visible at a time). It
**is** in the nav but **set apart** from the funnel (after a hairline divider, in Cormorant
italic with an "đọc sâu" tag — a different tier). Also reached via the auto-link rule and a
fixed "deep read" link at the end of Why Writing. See `docs/power-of-narrative.md` + Master
Spec Addenda v2.1 / v2.2 / v2.3.

## Structure

```
app/            # one folder per chapter + layout, sitemap, robots, OG/icon
components/
  symbols/      # SymbolModule (6 page modules ported from the specimen)
  motion/       # MotionProvider, Lenis+GSAP, InkCanvas, SymbolLayer (weave),
                # Preloader, ChapterCounter, Reveal, Scramble, Ticker, …
  ui/           # SectorView, PageHero, Section, Epigraph, Gap, ArtSlot, SketchSlot,
                # CTAButton, EntryCard, CourseCard, SpecTable, PersonCard, Symbol* …
content/        # model.ts (Page/Sector) + one file per page, verbatim from Master Spec
lib/            # config (placeholders), seo, verifyStats, i18n
public/symbols/ # W4GZ_Symbol_System.svg (specimen)
public/sketches # drop real kí họa here → SketchSlot swaps to next/image
docs/           # Master Spec docx + master-spec.md
```

## Content model

Pages are data: `content/<page>.ts` exports a typed `Page` of `Sector[]` (`model.ts`).
`SectorView` renders prose sectors uniformly (kicker → heading → sub → body → quote →
stat → art → cta, with the page's symbol module as motif); heroes and card grids read
sectors for bespoke layout. Edit copy in one place; never in components.

## Design system & symbols

Monochrome only — ink on warm paper; boldness via structure + typography, never colour.
Tokens in `app/globals.css` (`--ink/--paper/--paper-dark/--muted/--hairline/--amber`),
0.5px `hr-*` hairlines, giant ghost serif words. The **symbol system** (line = narrative,
node = community) is the visual engine: per-page `SymbolModule`s draw on, and the **weave**
re-draws on every route change.

**Symbol System v2** (`components/symbols/SymbolModule.tsx` ← `assets/W4GZ_Symbol_System_v2.svg`):
the full glyph vocabulary — Narrative, Home, The Fit, Courses, Join added to Writing, Community,
Ecosystem, People, Hub, Media — so the spine (Narrative × Writing × Community) and every
page/section header (+ The Fit's 6 value cards) carry their glyph and **no icon list is asymmetric**.
Motion is CSS-first (keyed off `[data-motion]` + `data-drawn` / `data-inview`): the draw-on +
node-bleed **reveal plays once** on enter and **re-fires on a route/section transition**; then
**every glyph stays alive** with a desynchronised, low-amplitude node-halo "breathe" (the weave
adds a travelling node — `components/symbols/Weave.tsx`); all idle loops **pause off-screen** and all
motion is disabled under `prefers-reduced-motion` / the toggle. Auto-link rule: every heading
containing "narrative" links to `/power-of-narrative` (`lib/narrativeLink.tsx`, wired into `PageHero`
+ `SectorView` + the Home/Fit/Courses anchors).

**Brand logo & favicons** (`components/ui/Wordmark.tsx`): the W monogram (symbol-vocabulary) + the
wordmark, rendered inline and monochrome (ink-on-paper / paper-on-ink, never recoloured). Drop-in
SVG exports in `public/logo/`; the favicon/app-icon set (`app/icon.svg`, `app/apple-icon.png`,
`app/favicon.ico`, `public/icons/icon-{192,512}.png`, `app/manifest.ts`) is generated from the
monogram by `scripts/gen-brand-assets.mjs` (sharp) — `<head>` links via Next file conventions.

## Motion (progressive enhancement)

GSAP + Lenis + View Transitions, all gated: a visible **"Chuyển động"** toggle (footer)
and `prefers-reduced-motion` hard-disable everything (native scroll, instant cuts); a
**lite path** (mobile / low-power / Save-Data) drops WebGL + ink-blot + Lenis. Includes
route morphs (shared chapter-mark + ink wipe), session preloader, scroll-velocity body
weight, ghost-word parallax, scramble decode, sketch ink-in, magnetic CTAs, and the
**click ink-blot** on background clicks. All copy is server-rendered, selectable, and
readable with JS off; Enroll stays reachable.

## The single gate (permanent)

Membership requires a course — **Introduction + graduation essay** (→ quarterly
onboarding, 4 intakes/year) **or Advanced**. No CTA/copy/flow implies joining the
community without a course; "join"-style CTAs route to `/courses` or `/join`
(`ENROLL_URL`/`APPLY_URL` in `lib/config.ts`, fallback `/courses`).

## On-site forms & data (Update 8)

Two **self-owned** forms, no third-party form vendor: the **application** (`/dang-ky`, the
primary CTA — multi-step, gentle) and the **graduation-essay submission**
(`/nop-bai-tot-nghiep`, noindex). One `FormSpec` (`lib/forms/schema.ts`) drives both the UI
(`components/forms/`) and the server re-validation. Submissions POST to **Route Handlers**
(`app/api/apply`, `app/api/graduation`) which run honeypot → Turnstile → validation → persist
→ email. Persistence is your **own Postgres** via Supabase/PostgREST (`docs/forms-schema.sql`,
RLS, optional AES-256-GCM on free-text); email via **Resend**; spam via **Cloudflare Turnstile**
— all `fetch`-based and **env-gated** (see `.env.example`): with nothing set, dev accepts +
logs (no persist/email) and skips the challenge. A `/privacy` page, required consent, no
third-party trackers on form pages, hashed IPs, and a token-locked `/api/admin/export`. Errors
are monochrome (ink, not red); no browser storage; accessible + reduced-motion honored.

## Law III (privacy, non-negotiable)

On `/people` (the **W** page) and anywhere members appear: sketch portraits + single-initial
aliases + cohort only. Never names, never photos — enforced structurally (`PersonCard` has no
such fields).

## Gaps & before launch

Anything not fully executable renders as a visible `<Gap>` (amber `DEV STEP-IN`) and is
logged in [`GAPS.md`](GAPS.md) — WebGL shaders, production symbol set, sketches, concept
art, and the real data in **Master Spec Appendix D** (STAT verification, course details,
onboarding cadence, Hub address, links, member entries). Build prints the STAT-verify
warning. Set the launch placeholders in `lib/config.ts`.
