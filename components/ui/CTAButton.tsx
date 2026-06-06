import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "filled" | "outline" | "inverse";

const BASE =
  "group inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] leading-none transition-colors duration-300 select-none";

const SIZES = {
  sm: "px-4 py-2.5",
  md: "px-6 py-3.5",
} as const;

const VARIANTS: Record<Variant, string> = {
  // Primary: ink fill, paper text — inverts on hover.
  filled:
    "border-[0.5px] border-ink bg-ink text-paper hover:bg-paper hover:text-ink",
  // Secondary: thin border, transparent fill — inverts on hover.
  outline:
    "border-[0.5px] border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  // On ink backgrounds (dark cards): paper fill — inverts to outline on hover.
  inverse:
    "border-[0.5px] border-paper bg-paper text-ink hover:bg-transparent hover:text-paper",
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof SIZES;
  href?: string;
  external?: boolean;
  arrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

/** CTA button (brief 3.3). Renders a Link, an external anchor, or a button. */
export default function CTAButton({
  children,
  variant = "filled",
  size = "md",
  href,
  external = false,
  arrow = true,
  type = "button",
  disabled = false,
  onClick,
  className = "",
  ariaLabel,
}: Props) {
  const cls = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${
    disabled ? "pointer-events-none opacity-40" : ""
  } ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </>
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
