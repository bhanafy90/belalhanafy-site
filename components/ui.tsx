import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}

const eyebrowSizes = {
  sm: "text-xs",
  md: "text-sm sm:text-base",
} as const;

export function Eyebrow({
  children,
  size = "sm",
}: {
  children: ReactNode;
  size?: keyof typeof eyebrowSizes;
}) {
  return (
    <p
      className={`${eyebrowSizes[size]} font-semibold tracking-[0.16em] text-accent-2 uppercase`}
    >
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Section className="pt-16 pb-12 sm:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      )}
    </Section>
  );
}

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "green" | "violet";
}) {
  const tones = {
    neutral: "border-line text-muted",
    accent: "border-accent/45 text-accent",
    green: "border-accent-2/45 text-accent-2",
    violet: "border-accent-3/45 text-accent-3",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  // Dark text on the magenta reaches 5.4:1; white on it is only 3.4:1.
  const styles =
    variant === "primary"
      ? "bg-accent text-bg font-semibold hover:bg-[#f06fac]"
      : "border border-line text-text hover:border-accent-2 hover:text-accent-2";

  const className = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${styles}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
