import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/ui";
import { researchThemes } from "@/content/research";
import { doiUrl, publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Four themes: reducing reliance on animal testing, lipid nanoparticle organ and cell tropism, predictive biopharmaceutics, and Design of Experiments and machine learning for formulation.",
  alternates: { canonical: "/research/" },
};

const accentBar = {
  accent: "bg-accent",
  "accent-2": "bg-accent-2",
  "accent-3": "bg-accent-3",
} as const;

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Predicting what an experiment would have told you."
        lede="Four strands of work, all of them versions of the same question: how much can be known about a formulation before it is made?"
      />

      <Section className="pb-24">
        <ol className="space-y-20">
          {researchThemes.map((theme, i) => {
            const evidence = theme.evidence
              .map((id) => publications.find((p) => p.id === id))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));

            return (
              <li key={theme.id} id={theme.id} className="reveal scroll-mt-24">
                <article className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span
                      className={`block h-1 w-12 ${accentBar[theme.accent]}`}
                    />
                    <p className="mt-5 font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-2xl leading-tight sm:text-3xl">
                      {theme.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="font-display text-xl leading-relaxed text-sand">
                      {theme.lede}
                    </p>
                    <div className="mt-6 space-y-4">
                      {theme.body.map((para) => (
                        <p key={para} className="leading-relaxed text-muted">
                          {para}
                        </p>
                      ))}
                    </div>

                    {evidence.length > 0 && (
                      <div className="mt-8 rounded-lg border border-line bg-surface/50 p-5">
                        <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                          Published evidence
                        </h3>
                        <ul className="mt-3 space-y-2.5">
                          {evidence.map((p) => (
                            <li key={p.id} className="text-sm leading-snug">
                              <a
                                href={doiUrl(p.doi)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text transition-colors hover:text-accent"
                              >
                                {p.title}
                              </a>
                              <span className="text-muted">
                                {" "}
                                — <span className="italic">{p.journal}</span>,{" "}
                                {p.year}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-20 rounded-xl border border-line bg-surface/40 p-8 text-center sm:p-10">
          <h2 className="text-2xl">See a model in action</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">
            The PRELIVE framework is published open access, and its profiler
            runs in the browser on this site.
          </p>
          <p className="mt-6">
            <Link
              href="/tools/prelive/"
              className="link-underline text-accent-2"
            >
              Open the PRELIVE profiler
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
