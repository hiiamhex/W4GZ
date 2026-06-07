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

`/` Home · `/why-writing` (8 movements) · `/courses` (the gate) · `/community`
("Community is the answer") · `/ecosystem` (The -4GZ Ecosystem) · `/people` · `/join`
(The Covenant). Per-route metadata + OG; lang `vi`.

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

## Law III (privacy, non-negotiable)

On `/people` and anywhere members appear: sketch portraits + single-initial aliases +
cohort only. Never names, never photos — enforced structurally (`PersonCard` has no such
fields).

## Gaps & before launch

Anything not fully executable renders as a visible `<Gap>` (amber `DEV STEP-IN`) and is
logged in [`GAPS.md`](GAPS.md) — WebGL shaders, production symbol set, sketches, concept
art, and the real data in **Master Spec Appendix D** (STAT verification, course details,
onboarding cadence, Hub address, links, member entries). Build prints the STAT-verify
warning. Set the launch placeholders in `lib/config.ts`.
