export type Cover = {
  id: string;
  /** Base filename in /public/covers — expects `${image}-${width}.{avif,webp,jpg}`. */
  image: string;
  widths: number[];
  intrinsic: { w: number; h: number };
  journal: string;
  issue: string;
  kind: "Front cover" | "Inside front cover";
  /** Publication id in content/publications.ts. */
  publication: string;
  /** DOI of the cover feature itself, where the publisher issued one. */
  coverDoi?: string;
  alt: string;
  caption: string;
};

export const covers: Cover[] = [
  {
    id: "adhm",
    image: "adhm-cover",
    widths: [240, 480, 720, 960, 1600],
    intrinsic: { w: 1653, h: 2173 },
    journal: "Advanced Healthcare Materials",
    issue: "Volume 14, Issue 18 · 15 July 2025",
    kind: "Front cover",
    publication: "adhm-tropism",
    coverDoi: "10.1002/adhm.202570107",
    alt: "Advanced Healthcare Materials front cover: a three-dimensional rendering of lipid nanoparticles of different lipid compositions, shown in pink, blue, green and lilac, approaching and fusing with undulating cell membranes. One nanoparticle is cut away to reveal strands of messenger RNA held inside.",
    caption:
      "Lipid nanoparticles meeting cell membranes, with one cut away to show the mRNA cargo inside. The differing colours stand for differing lipid compositions — the variable that decides which cell type a particle ends up in, and the subject of the paper.",
  },
  {
    id: "jcr",
    image: "jcr-cover",
    widths: [240, 480, 939],
    intrinsic: { w: 939, h: 1251 },
    journal: "Journal of Controlled Release",
    issue: "Volume 380 · 10 April 2025",
    kind: "Inside front cover",
    publication: "jcr-mabs",
    alt: "Journal of Controlled Release inside front cover: a circular diagram in coral and pale green showing a monoclonal antibody injected subcutaneously, with a release profile curve above and a transmission profile curve below, converging on a human figure receiving an injection.",
    caption:
      "The two measurements the model combines — how the antibody is released from the injection site, and how it transmits into the circulation — resolved into a single prediction of human subcutaneous bioavailability.",
  },
];
