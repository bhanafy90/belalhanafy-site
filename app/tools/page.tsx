import type { Metadata } from "next";
import Link from "next/link";
import { Picture } from "@/components/Picture";
import { Arrow, Badge, Button, PageHeader, Section } from "@/components/ui";
import { doiUrl, publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "PRELIVE: an interactive model predicting in-vivo mRNA delivery of lipid nanoparticles across eight tissues from composition and particle size. Runs in the browser, open access under CC BY 4.0.",
  alternates: { canonical: "/tools/" },
};

const predictors = [
  ["Ionisable lipid", "% mol, plus a choice of five ionisable lipid chemistries"],
  ["DSPC", "% mol, the helper phospholipid"],
  ["Cholesterol", "% mol"],
  ["DMG-PEG", "% mol, the PEGylated lipid controlling circulation"],
  ["Particle size", "nm, measured by dynamic light scattering"],
];

const tissues = [
  "Liver",
  "Spleen",
  "Kidney",
  "Bone marrow",
  "Lung",
  "Heart",
  "Brain",
  "Whole blood",
];

export default function ToolsPage() {
  const paper = publications.find((p) => p.id === "prelive")!;

  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="A published model you can turn the dials on."
        lede="Papers describe models. This one ships with its model attached, so you can change a formulation and watch the prediction move, without installing anything."
      />

      <Section className="pb-24">
        <article className="overflow-hidden rounded-2xl border border-line">
          <Link href="/tools/prelive/" className="block bg-surface-2 p-6 sm:p-8">
            <Picture
              base="img/prelive-preview"
              widths={[800, 1200]}
              intrinsic={{ w: 1250, h: 345 }}
              alt="The PRELIVE profiler: prediction traces for liver radiance against ionisable lipid, DSPC, cholesterol and DMG-PEG content, particle size and lipid choice, with tabs for eight tissues across the top."
              sizes="(min-width: 640px) 90vw, 100vw"
              fallback="png"
              priority
              className="w-full rounded-md ring-1 ring-white/10"
            />
          </Link>

          <div className="bg-surface p-8 sm:p-10">
            <div className="flex flex-wrap gap-2">
              <Badge tone="green">Open access · CC BY 4.0</Badge>
              <Badge tone="accent">Runs in your browser</Badge>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl">PRELIVE</h2>
            <p className="mt-2 text-sm text-muted">
              Predicting in-vivo functional delivery of lipid nanoparticles from
              composition
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  What you change
                </h3>
                <dl className="mt-4 space-y-3">
                  {predictors.map(([term, detail]) => (
                    <div key={term} className="text-sm">
                      <dt className="text-text">{term}</dt>
                      <dd className="text-muted">{detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  What it predicts
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Functional mRNA delivery, reported as log radiance from a
                  luciferase reporter, in each of eight compartments:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tissues.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-line px-2.5 py-1 text-xs text-sand"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/tools/prelive/">
                Open the profiler <Arrow />
              </Button>
              <Button href={doiUrl(paper.doi)} variant="ghost" external>
                Read the paper
              </Button>
            </div>
          </div>
        </article>

        <section className="mt-16 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-line p-7">
            <h2 className="text-xl">Never used a profiler?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Each small panel shows one input. The trace inside it is the
              model&rsquo;s prediction as that single input varies, holding the
              others where you have set them. Drag the vertical line to change a
              value; every trace redraws, because the inputs interact.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A steep trace means the prediction is sensitive to that input. A
              flat one means it barely matters, which is often the more useful
              finding.
            </p>
          </div>

          <div className="rounded-xl border border-line p-7">
            <h2 className="text-xl">Why it is here</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A model that lives only in a figure cannot be interrogated. Making
              it interactive lets a reader test the formulation they actually
              care about, rather than the ones we happened to plot.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              It also does the thing the paper argues for: answering a question
              computationally, in seconds, that would otherwise have taken an
              in-vivo study.
            </p>
          </div>
        </section>
      </Section>
    </>
  );
}
