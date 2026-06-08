# GAPS — dev step-in list

Anything that can't be fully executed here renders as a visible `<Gap>` on the page
(amber `DEV STEP-IN` marker) and is logged below, so the right specialist drops in
exactly there. Set `NEXT_PUBLIC_HIDE_GAPS=1` to hide all markers in production.

> Rule: **prefer a `<Gap>` over a fake.** A labelled empty frame is honest.

| id | location | what's needed | who / tool |
| --- | --- | --- | --- |
| `webgl/ink-field` | Home hero background | OGL ink-diffusion + paper-grain shader (monochrome). Static paper shown until then. | graphics dev (GLSL) |
| `webgl/halftone-transition` | between sketches | grayscale displacement + halftone dither transition | graphics dev |
| `symbols/production-set` | all pages (`SymbolModule`) | Symbol System v2 wired (full vocabulary incl. Narrative/Home/The Fit/Courses/Join, one-shot reveal + weave ambient loop, from `assets/W4GZ_Symbol_System_v2.svg`). Remaining: a designer pass to refine grid/stroke weights to final production grade. | designer |
| `art/sketches` | Hub, member portraits, hand-writing, etc. (`SketchSlot`) | real ink illustrations in one consistent hand | illustrator |
| `art/concepts` | Why-Writing (machine-text flood), Community (rings reconnect), Ecosystem (-4GZ branch map) (`ArtSlot`) | concept graphics matching each sector | designer / motion |
| `motion/why-writing-scrub` | `/why-writing` | refined pinned + scrubbed self-typesetting movement sequence | motion dev (first pass shipped: scramble-on-view) |
| `content/data` | site-wide (Master Spec Appendix D) | STAT verification + sources, course details (duration/fee/schedule), onboarding cadence + graduation-essay criteria + Advanced review, Hub address, Discord/Blog/Fanpage links, 6–9 anonymized member entries | Hex |
| `art/power-of-narrative-figures` | `/power-of-narrative` (≈11 `HÌNH` slots) | Source rights-cleared / public-domain images or own kí-họa: Lloyd's, Ise, Heider–Simmel, print/news, bank run, TRC, the epics-&-myths cluster, Lippmann, phone feeds, torn map, context-collapse diagram. Captioned hatch placeholders shipped now (never fakes). See `docs/power-of-narrative.md` §8 source & copyright notes. | illustrator / photo research |
| `content/the-fit` | The Fit page (Copy v5) | The Fit is an 8th funnel page in `W4GZ_Landing_Content_v5.docx` (not present in repo). Page + its value-cards await v5 copy; the `fit` glyph is already in the symbol vocabulary so it can drop straight in. | Hex (supply v5 docx) |

_Add a row whenever you place a new `<Gap id=… />`._
