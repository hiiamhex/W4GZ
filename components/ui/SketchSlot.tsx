import Image from "next/image";
import type { Sketch } from "@/content/types";

/**
 * Member hand-sketch (kí họa) slot (brief 2.5). Until a real asset exists, it
 * renders an intentional empty frame — paper-dark fill, hairline border, correct
 * aspect ratio — captioned with the IMAGE description. Drop a file into
 * /public/sketches and set `src` to swap to an optimized next/image.
 * `tilt` gives the "hand-pasted, slightly off-axis" feel (brief 2.5 MOTION).
 */
export default function SketchSlot({
  sketch,
  className = "",
  tilt = 0,
}: {
  sketch: Sketch;
  className?: string;
  tilt?: number;
}) {
  const { caption, alt, aspect = "4 / 5", src } = sketch;

  return (
    <figure
      className={className}
      style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
    >
      <div
        data-ink
        className="relative w-full overflow-hidden bg-paper-dark hr-all"
        style={{ aspectRatio: aspect }}
        role={src ? undefined : "img"}
        aria-label={src ? undefined : alt}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Kí họa
            </span>
            <span className="max-w-[42ch] font-mono text-[0.72rem] leading-relaxed text-muted">
              {caption}
            </span>
          </div>
        )}
      </div>
      {src ? (
        <figcaption className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
