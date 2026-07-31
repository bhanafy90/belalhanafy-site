type Props = {
  /** Path under /public without width or extension, e.g. "covers/adhm-cover". */
  base: string;
  widths: number[];
  alt: string;
  /** Intrinsic dimensions of the largest rendition, to reserve layout space. */
  intrinsic: { w: number; h: number };
  sizes: string;
  className?: string;
  priority?: boolean;
  fallback?: "jpg" | "png";
};

/**
 * Plain <picture> with AVIF/WebP/raster fallbacks. The site is a static export,
 * so next/image optimisation is unavailable — renditions are generated ahead of
 * time by scripts/prep-assets.mjs.
 */
export function Picture({
  base,
  widths,
  alt,
  intrinsic,
  sizes,
  className,
  priority = false,
  fallback = "jpg",
}: Props) {
  const srcset = (ext: string) =>
    widths.map((w) => `/${base}-${w}.${ext} ${w}w`).join(", ");
  const largest = widths[widths.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={`/${base}-${largest}.${fallback}`}
        srcSet={srcset(fallback)}
        sizes={sizes}
        alt={alt}
        width={intrinsic.w}
        height={intrinsic.h}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
      />
    </picture>
  );
}
