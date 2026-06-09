import Container from "./Container";
import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import HeroStagger from "@/components/motion/HeroStagger";
import SymbolModule, { type ModuleName } from "@/components/symbols/SymbolModule";
import { AutoHeading, WText } from "@/lib/autolink";
import type { CtaSpec } from "@/content/model";

/** Shared chapter hero (brief v2 §5): mono label (the cross-route morph target),
 *  the page's module glyph, giant serif headline, subhead, optional CTAs.
 *  Content sits at the column foot. */
export default function PageHero({
  label,
  heading,
  sub,
  ctas,
  module: glyph,
}: {
  label: string;
  heading: string;
  sub?: string;
  ctas?: CtaSpec[];
  /** The page's symbol module — every page header carries its glyph. */
  module?: ModuleName;
}) {
  return (
    <section className="scroll-mt-[var(--nav-h)]">
      <Container>
        <div className="flex min-h-[50vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[60vh] lg:py-24">
          <HeroStagger className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <SectionLabel
                muted={false}
                className="text-ink"
                viewTransitionName="chapter-mark"
              >
                {label}
              </SectionLabel>
              {glyph ? (
                <SymbolModule
                  name={glyph}
                  size={34}
                  className="shrink-0 text-ink/35"
                />
              ) : null}
            </div>
            <AutoHeading
              as="h1"
              text={heading}
              className="max-w-4xl font-display text-[2.4rem] italic leading-[1.05] text-ink sm:text-5xl lg:text-7xl"
            />
            {sub ? (
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
                <WText text={sub} />
              </p>
            ) : null}
            {ctas?.length ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {ctas.map((c, i) => (
                  <CTAButton
                    key={i}
                    href={c.href}
                    external={c.external}
                    variant={c.variant ?? (i === 0 ? "filled" : "outline")}
                  >
                    {c.label}
                  </CTAButton>
                ))}
              </div>
            ) : null}
          </HeroStagger>
        </div>
      </Container>
    </section>
  );
}
