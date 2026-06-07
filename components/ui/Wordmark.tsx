import { Link } from "next-view-transitions";

/** W4GZ wordmark (mono — the tech layer). `full` renders "Writing4GenZ". */
export default function Wordmark({
  full = false,
  className = "",
}: {
  full?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="W4GZ — Writing4GenZ, về trang chủ"
      className={`font-mono font-semibold tracking-[0.12em] text-ink ${className}`}
    >
      {full ? "Writing4GenZ" : "W4GZ"}
    </Link>
  );
}
