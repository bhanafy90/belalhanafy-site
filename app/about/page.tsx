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
    period: "Dec 2022 — present",
    role: "Senior Scientist",
    org: "AstraZeneca, Cambridge",
    detail: site.orgUnit,
  },
  {
    period: "May 2021 — Dec 2022",
    role: "Scientist",
    org: "AstraZeneca, Cambridge",
    detail: "Advanced Drug Delivery, Pharmaceutical Sciences",
  },
  {
    period: "2018 — 2021",
    role: "Instructor and demonstrator",
    org: "Nottingham Trent University",
    detail: "Chemistry, forensics and biosciences",
  },
  {
    period: "2012 — 2015",
    role: "Registered pharmacist",
    org: "Egypt and Saudi Arabia",
    detail: "Ministry of Health and Population; Al Qubani Pharmacy, Riyadh",
  },
];

const education = [
  {
    award: "PhD, Pharmaceutical Sciences",
    place: "Nottingham Trent University",
    years: "2017 — 2020",
  },
  {
    award: "MSc, Pharmaceutical Manufacture & Quality Control",
    place: "Liverpool John Moores University",
    years: "2015 — 2016",
  },
  {
    award: "BSc, Pharmaceutical Sciences",
    place: "Mansoura University",
    years: "2007 — 2012",
  },
];

const skills = [
  {
    group: "Predictive science",
    items: [
      "Design of Experiments",
      "Statistical modelling",
      "Machine learning (Lasso, SVEM, neural networks, gradient boosting, random forests)",
      "Cheminformatics (RDKit)",
      "QSAR",
      "PCA and multivariate statistics",
    ],
  },
  {
    group: "Pharmaceutical science",
    items: [
      "Formulation science",
      "Drug delivery",
      "Biopharmaceutics",
      "Analytical chemistry",
      "Process and manufacturing optimisation",
      "In-vivo study design",
    ],
  },
  {
    group: "Laboratory",
    items: [
      "Microfluidics",
      "Raman spectroscopy",
      "Protein corona analysis",
      "DLS, TEM, SEM, EDX",
      "HPLC, UV-Vis, FTIR, TGA, DSC, XRD",
      "Confocal microscopy",
      "SCISSOR N3 injection site simulator",
    ],
  },
  {
    group: "Software",
    items: [
      "JMP Pro",
      "KNIME",
      "Python and RDKit",
      "SimBiology / MATLAB",
      "Power BI",
      "GraphPad Prism",
      "Blender",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A formulation scientist who learned to model."
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
              I trained as a pharmacist in Egypt, and spent the first part of my
              career at a bench — formulating, characterising, and running the
              kind of iterative experiments that drug delivery has always
              depended on. What changed my work was realising how much of that
              iteration was avoidable.
            </p>
            <p>
              Most of what a formulation will do is already latent in its
              composition. The difficulty is that the relationship is not
              simple, so it resists intuition and first-principles reasoning
              alike. It does not, however, resist a well-designed experiment and
              a model fitted to it.
            </p>
            <p>
              So that is what I do now: build predictive models for lipid
              nanoparticles and biologics, and — more importantly — try to make
              designed experiments and predictive modelling the ordinary way
              formulation work is done, rather than a specialist service someone
              requests at the end.
            </p>
            <p>
              The part I care most about is the consequence for animal studies.
              A prediction that is good enough to act on is a study that does
              not need running.
            </p>
            <p className="text-base">
              I am based in Cambridge, UK, where I am a {site.role} in{" "}
              {site.orgUnit} at {site.org}.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Career</h2>
            <ol className="mt-7 space-y-7">
              {timeline.map((t) => (
                <li key={t.period} className="border-l border-line pl-5">
                  <p className="font-mono text-xs text-accent-2">{t.period}</p>
                  <p className="mt-1.5 text-lg">{t.role}</p>
                  <p className="text-sm text-muted">{t.org}</p>
                  <p className="mt-0.5 text-sm text-muted">{t.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl">Education</h2>
            <ol className="mt-7 space-y-7">
              {education.map((e) => (
                <li key={e.award} className="border-l border-line pl-5">
                  <p className="font-mono text-xs text-accent-2">{e.years}</p>
                  <p className="mt-1.5 text-lg">{e.award}</p>
                  <p className="text-sm text-muted">{e.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <h2 className="text-2xl">Skills</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="bg-bg p-7">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                {s.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line px-2.5 py-1 text-xs text-sand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-2xl border border-line bg-surface/50 p-8 sm:p-10">
          <h2 className="text-2xl">Contact and records</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            The most complete and current record of my publications is my ORCID
            profile. For anything else — a collaboration, a talk, or a question
            about the work here — email is best.
          </p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            <div>
              <dt className="text-xs tracking-[0.14em] text-muted uppercase">
                GitHub
              </dt>
              <dd className="mt-2 text-sm">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-accent"
                >
                  bhanafy90
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </>
  );
}
