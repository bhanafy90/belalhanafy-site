import type { Metadata } from "next";
import { Email } from "@/components/Email";
import { Picture } from "@/components/Picture";
import { PageHeader, Section } from "@/components/ui";
import { links, orcidId, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Belal Hanafy is a Senior Scientist in Pharmaceutical Sciences at AstraZeneca in Cambridge, working on predictive modelling for lipid nanoparticles and biologics. PhD from Nottingham Trent University.",
  alternates: { canonical: "/about/" },
};

const timeline = [
  {
    period: "Dec 2022 – present",
    role: "Senior Scientist",
    org: "AstraZeneca, Cambridge",
    detail: site.orgUnit,
  },
  {
    period: "May 2021 – Dec 2022",
    role: "Scientist",
    org: "AstraZeneca, Cambridge",
    detail: "Advanced Drug Delivery, Pharmaceutical Sciences",
  },
  {
    period: "2018 – 2021",
    role: "Instructor and demonstrator",
    org: "Nottingham Trent University",
    detail: "Chemistry, forensics and biosciences",
  },
  {
    period: "2012 – 2015",
    role: "Registered pharmacist",
    org: "Egypt and Saudi Arabia",
    detail: "Ministry of Health and Population; Al Qubani Pharmacy, Riyadh",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`${site.role}, ${site.orgUnit} at ${site.org}.`}
      />

      <Section className="pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Picture
              base="img/belal-hanafy"
              widths={[400, 610]}
              intrinsic={{ w: 610, h: 781 }}
              alt={`Portrait of ${site.fullName}`}
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="w-full max-w-[320px] rounded-lg ring-1 ring-white/10"
            />
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-8">
            <p>
              I trained as a pharmacist in Egypt and spent the first part of
              my career at a bench, running the kind of iterative formulation
              experiments that drug delivery has traditionally depended on.
            </p>
            <p>
              I now build predictive models for lipid nanoparticles and
              biologics, and help make designed experiments and modelling the
              ordinary way formulation work gets done, so that fewer animal
              studies are needed.
            </p>
            <p className="text-base">
              I am based in Cambridge, UK, where I am a {site.role} in{" "}
              {site.orgUnit} at {site.org}.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <h2 className="text-2xl">Career</h2>
        <ol className="mt-7 grid gap-7 sm:grid-cols-2">
          {timeline.map((t) => (
            <li key={t.period} className="border-l border-line pl-5">
              <p className="font-mono text-xs text-accent-2">{t.period}</p>
              <p className="mt-1.5 text-lg">{t.role}</p>
              <p className="text-sm text-muted">{t.org}</p>
              <p className="mt-0.5 text-sm text-muted">{t.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="pb-24">
        <div className="rounded-2xl border border-line bg-surface/50 p-8 sm:p-10">
          <h2 className="text-2xl">Contact and records</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            The most complete and current record of my publications is my
            ORCID profile. For a collaboration, a talk, a Design of
            Experiments or formulation design problem you would like a second
            opinion on, or a question about the work here, email is best.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-[0.14em] text-muted uppercase">
                ORCID
              </dt>
              <dd className="mt-2 text-sm">
                <a
                  href={links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-accent"
                >
                  {orcidId}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.14em] text-muted uppercase">
                Email
              </dt>
              <dd className="mt-2 text-sm">
                <Email className="text-accent" />
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.14em] text-muted uppercase">
                LinkedIn
              </dt>
              <dd className="mt-2 text-sm">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-accent"
                >
                  belalhanafy
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </>
  );
}
