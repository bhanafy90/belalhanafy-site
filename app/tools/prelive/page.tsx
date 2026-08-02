import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { doiUrl, publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "PRELIVE profiler",
  description:
    "Run the PRELIVE model in your browser: change lipid nanoparticle composition and particle size, and see predicted mRNA delivery across eight tissues update live.",
  alternates: { canonical: "/tools/prelive/" },
};

const WILEY_SUPPLEMENT =
  "https://advanced.onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1002%2Fadfm.202525076&file=adfm73162-sup-0002-SuppMat.html";

export default function PrelivePage() {
  const paper = publications.find((p) => p.id === "prelive")!;

  return (
    <>
      <Section className="pt-12 pb-8 sm:pt-16">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent-2 uppercase">
          <Link href="/tools/" className="hover:text-accent">
            Tools
          </Link>{" "}
          <span className="text-muted">/</span> PRELIVE
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
          The PRELIVE profiler
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Drag any input to change a lipid nanoparticle&rsquo;s composition or
          size. The predicted functional mRNA delivery updates immediately, and
          the tabs switch between eight tissues. Nothing is sent anywhere: the
          model runs entirely in your browser.
        </p>
      </Section>

      {/* Wider than the usual container — the JMP layout is around 1300px and
          gets clipped at the standard measure. */}
      <div className="mx-auto max-w-[1480px] px-5 pb-6 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <iframe
            src="/embeds/prelive.html"
            title="PRELIVE interactive profiler: predicted in-vivo functional delivery of lipid nanoparticles across eight tissues"
            loading="lazy"
            className="block h-[620px] w-full sm:h-[660px]"
          />
        </div>

        <p className="mt-4 text-sm text-muted">
          Cramped on a small screen?{" "}
          <a
            href="/embeds/prelive.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-accent-2"
          >
            Open the profiler full screen
          </a>
          . It was built for a desktop-sized window, and scrolls sideways in the
          frame above.
        </p>
      </div>

      <Section className="pb-24">
        <div className="mt-10 rounded-xl border border-line bg-surface/50 p-7 sm:p-8">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Source and licence
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            This profiler is Supporting Information from:
          </p>
          <p className="mt-3 leading-snug">
            {paper.authors.join(", ").replace(/\.$/, "")}.{" "}
            <span className="text-text">{paper.title}</span>.{" "}
            <span className="text-sand italic">{paper.journal}</span>{" "}
            {paper.year}, {paper.volume}({paper.issue}), {paper.articleNumber}.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Published open access under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-accent-2"
            >
              Creative Commons Attribution 4.0 International licence
            </a>
            , which permits redistribution with attribution. The file is
            reproduced here unmodified. It was generated with JMP Statistical
            Discovery software.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a
                href={doiUrl(paper.doi)}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs text-accent-2"
              >
                doi:{paper.doi}
              </a>
            </li>
            <li>
              <a
                href={WILEY_SUPPLEMENT}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-xs text-muted"
              >
                Original file as hosted by the publisher
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
