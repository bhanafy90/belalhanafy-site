import type { Metadata } from "next";
import { Picture } from "@/components/Picture";
import { Badge, PageHeader, Section } from "@/components/ui";
import { covers } from "@/content/covers";
import { doiUrl, publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Cover art",
  description:
    "Journal cover art for two papers: the front cover of Advanced Healthcare Materials 14(18), and the inside front cover of Journal of Controlled Release volume 380.",
  alternates: { canonical: "/cover-art/" },
};

export default function CoverArtPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cover art"
        title="Science on the outside of the journal."
        lede="Editors choose a small number of papers each issue to carry the cover. Two of mine have been selected. In each case the image was designed to explain the finding, not to decorate it."
      />

      <Section className="pb-24">
        <div className="space-y-24">
          {covers.map((cover) => {
            const paper = publications.find((p) => p.id === cover.publication);

            return (
              <article
                key={cover.id}
                className="reveal grid items-start gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div className="lg:col-span-5">
                  <Picture
                    base={`covers/${cover.image}`}
                    widths={cover.widths}
                    intrinsic={cover.intrinsic}
                    alt={cover.alt}
                    sizes="(min-width: 1024px) 38vw, 92vw"
                    className="w-full rounded-lg shadow-2xl ring-1 shadow-black/50 ring-white/10"
                  />
                </div>

                <div className="lg:col-span-7">
                  <Badge tone="violet">{cover.kind}</Badge>
                  <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                    {cover.journal}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{cover.issue}</p>

                  <p className="mt-7 leading-relaxed text-muted">
                    {cover.caption}
                  </p>

                  {paper && (
                    <div className="mt-8 border-t border-line pt-6">
                      <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                        The paper
                      </h3>
                      <p className="mt-3 leading-snug">
                        <a
                          href={doiUrl(paper.doi)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-accent"
                        >
                          {paper.title}
                        </a>
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {paper.authors.join(", ")}
                      </p>
                      <p className="mt-3">
                        <a
                          href={doiUrl(paper.doi)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline font-mono text-xs text-accent-2"
                        >
                          doi:{paper.doi}
                        </a>
                      </p>
                      {cover.coverDoi && (
                        <p className="mt-1.5">
                          <a
                            href={doiUrl(cover.coverDoi)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline font-mono text-xs text-muted"
                          >
                            cover feature: doi:{cover.coverDoi}
                          </a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-20 border-t border-line pt-6 text-xs leading-relaxed text-muted">
          Cover images are reproduced here as a record of my own published work.
          Copyright in the published covers rests with the respective
          publishers — Wiley-VCH for {covers[0].journal}, Elsevier for{" "}
          {covers[1].journal}.
        </p>
      </Section>
    </>
  );
}
