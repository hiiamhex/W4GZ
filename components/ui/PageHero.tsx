import Container from "./Container";
import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";
import HeroStagger from "@/components/motion/HeroStagger";
import type { CtaSpec } from "@/content/model";

/** Shared chapter hero (brief v2 §5): mono label (the cross-route morph target),
 *  giant serif headline, subhead, optional CTAs. Content sits at the column foot. */
export default function PageHero({
  label,
  heading,
  sub,
  ctas,
}: {
  label: string;
  heading: string;
  sub?: string;
  ctas?: CtaSpec[];
}) {
  return (
    <section className="scroll-mt-[var(--nav-h)]">
      <Container>
        <div className="flex min-h-[50vh] max-w-5xl flex-col justify-end py-16 lg:min-h-[60vh] lg:py-24">
          <HeroStagger className="flex flex-col gap-6">
            <SectionLabel
              muted={false}
              className="text-ink"
              viewTransitionName="chapter-mark"
            >
              {label}
            </SectionLabel>
            <h1 className="max-w-4xl font-display text-[2.4rem] italic leading-[1.05] text-ink sm:text-5xl lg:text-7xl">
              {heading}
            </h1>
            {sub ? (
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80 md:text-xl">
                {sub}
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
