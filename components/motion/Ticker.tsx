/**
 * Infinite horizontal marquee (brief I.1 hero / general tech layer). The track
 * holds two copies of the sequence and translates -50% for a seamless loop;
 * the second copy is aria-hidden to avoid duplicate screen-reader output.
 * Pause-on-hover + reduced-motion handling live in globals.css.
 */
export default function Ticker({
  items,
  separator = "·",
  durationSec = 42,
  label,
  className = "",
}: {
  items: string[];
  separator?: string;
  durationSec?: number;
  label?: string;
  className?: string;
}) {
  const Sequence = () => (
    <span className="inline-flex items-center">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="px-1">{item}</span>
          <span aria-hidden className="px-5 text-hairline">
            {separator}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`marquee font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted ${className}`}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      <div
        className="marquee-track"
        style={
          { "--marquee-duration": `${durationSec}s` } as React.CSSProperties
        }
      >
        <Sequence />
        <span aria-hidden>
          <Sequence />
        </span>
      </div>
    </div>
  );
}
