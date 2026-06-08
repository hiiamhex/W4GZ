/**
 * HÌNH figure slot (docs/power-of-narrative.md §7): a hairline frame filled with
 * a faint diagonal hatch + a mono caption. A real, honest placeholder — never a
 * fake image — held until rights-cleared assets are sourced (see the doc's §8
 * source & copyright notes). Decorative frame; the caption carries the meaning.
 */
export default function FigureSlot({
  caption,
  tall = false,
}: {
  caption: string;
  tall?: boolean;
}) {
  return (
    <figure className="my-7 max-w-[40rem]">
      <div
        aria-hidden
        className="hatch hr-all flex items-center justify-center rounded-[2px]"
        style={{ aspectRatio: tall ? "16 / 8.4" : "16 / 6.4" }}
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
          hình ảnh
        </span>
      </div>
      <figcaption className="mt-2.5 font-mono text-[0.72rem] leading-relaxed text-muted">
        <span className="mr-2 font-medium tracking-[0.14em] text-ink">HÌNH</span>
        {caption}
      </figcaption>
    </figure>
  );
}
