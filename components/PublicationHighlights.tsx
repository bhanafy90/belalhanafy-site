import { Picture } from "./Picture";
import { Badge } from "./ui";
import { covers } from "@/content/covers";
import { doiUrl, publications, type Publication } from "@/content/publications";

type Highlight = {
  publication: Publication;
  label: string;
  image: {
    base: string;
    widths: number[];
    intrinsic: { w: number; h: number };
    alt: string;
    fallback?: "jpg" | "png";
    position?: "center" | "top";
  };
};

const adhmCover = covers.find((c) => c.id === "adhm")!;
const jcrCover = covers.find((c) => c.id === "jcr")!;

const highlights: Highlight[] = [
  {
    publication: publications.find((p) => p.id === "adhm-tropism")!,
    label: "Front cover",
    image: {
      base: `covers/${adhmCover.image}`,
      widths: adhmCover.widths,
      intrinsic: adhmCover.intrinsic,
      alt: adhmCover.alt,
      position: "top",
    },
  },
  {
    publication: publications.find((p) => p.id === "prelive")!,
    label: "Interactive model",
    image: {
      base: "img/prelive-preview",
      widths: [800, 1200],
      intrinsic: { w: 1250, h: 345 },
      alt: "Screenshot of the PRELIVE profiler.",
      fallback: "png",
    },
  },
  {
    publication: publications.find((p) => p.id === "jcr-mabs")!,
    label: "Inside front cover",
    image: {
      base: `covers/${jcrCover.image}`,
      widths: jcrCover.widths,
      intrinsic: jcrCover.intrinsic,
      alt: jcrCover.alt,
      position: "top",
    },
  },
];

export function PublicationHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {highlights.map(({ publication: p, label, image }) => (
        <a
          key={p.id}
          href={doiUrl(p.doi)}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group block overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent-2/60"
        >
          <div className="h-56 overflow-hidden bg-surface-2">
            <Picture
              base={image.base}
              widths={image.widths}
              intrinsic={image.intrinsic}
              alt={image.alt}
              fallback={image.fallback}
              sizes="(min-width: 640px) 30vw, 90vw"
              className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
                image.position === "top" ? "object-top" : "object-center"
              }`}
            />
          </div>
          <div className="p-5">
            <Badge tone="violet">{label}</Badge>
            <h3 className="mt-3 text-base leading-snug transition-colors group-hover:text-accent">
              {p.title}
            </h3>
            <p className="mt-2 text-xs text-muted italic">{p.journal}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
