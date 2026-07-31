import type { Metadata } from "next";
import { PublicationList } from "@/components/PublicationList";
import { PageHeader, Section } from "@/components/ui";
import { links, orcidId } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Nine peer-reviewed publications on lipid nanoparticle delivery, predictive biopharmaceutics, machine learning for formulation, and nanoceria. Five as first author, two selected for journal covers.",
  alternates: { canonical: "/publications/" },
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Nine papers, five as first author."
        lede="Peer-reviewed work spanning lipid nanoparticle delivery, predictive biopharmaceutics and, earlier, nanoceria and oxidative stress. Every entry links to its DOI."
      />

      <Section className="pb-24">
        <div className="mb-10 rounded-lg border border-line bg-surface/50 p-5 text-sm leading-relaxed text-muted">
          This list is maintained by hand. The authoritative, always-current
          record is my{" "}
          <a
            href={links.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-accent-2"
          >
            ORCID profile ({orcidId})
          </a>
          .
        </div>

        <PublicationList />
      </Section>
    </>
  );
}
