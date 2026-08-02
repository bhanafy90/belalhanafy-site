import Link from "next/link";
import { Picture } from "@/components/Picture";
import { PublicationHighlights } from "@/components/PublicationHighlights";
import { Arrow, Badge, Button, Eyebrow, Section } from "@/components/ui";
import { researchThemes } from "@/content/research";
import { site } from "@/lib/site";

const stats = [
  {
    value: ">85%",
    label: "accuracy predicting human subcutaneous bioavailability of antibodies",
    href: "/publications/",
  },
  {
    value: "8",
    label: "tissues predicted from lipid composition by the PRELIVE model",
    href: "/tools/prelive/",
  },
  {
    value: "2",
    label: "journal covers awarded to this work",
    href: "/publications/",
  },
  {
    value: "9",
    label: "peer-reviewed publications",
    href: "/publications/",
  },
];

export default function Home() {
  return (
    <>
      {/* About */}
      <Section className="pt-14 pb-20 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Picture
              base="img/belal-hanafy"
              widths={[400, 610]}
              intrinsic={{ w: 610, h: 781 }}
              alt={`Portrait of ${site.fullName}`}
              priority
              sizes="(min-width: 1024px) 26vw, 60vw"
              className="w-full max-w-[320px] rounded-lg ring-1 ring-white/10"
            />
          </div>

          <div className="lg:col-span-8">
            <Eyebrow size="md">{site.tagline}</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {site.role}, {site.orgUnit} at {site.org}.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I build predictive models for lipid nanoparticles and
              biologics, so fewer animal studies are needed to develop them.
              I am based in {site.location}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/publications/">
                Read the publications <Arrow />
              </Button>
              <Button href="/tools/prelive/" variant="ghost">
                Try the PRELIVE model
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Stat band */}
      <div className="border-y border-line/60 bg-surface/40">
        <Section className="py-10">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="reveal">
                <Link href={s.href} className="group block">
                  <span className="block font-display text-4xl text-accent-2 transition-colors group-hover:text-accent">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-muted">
                    {s.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Signature tool */}
      <Section className="py-20 sm:py-24">
        <div className="reveal overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="grid lg:grid-cols-2">
            <div className="order-2 p-8 sm:p-10 lg:order-1 lg:p-12">
              <Badge tone="green">Interactive · open access</Badge>
              <h2 className="mt-5 text-3xl sm:text-4xl">
                PRELIVE, running in your browser
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Move the sliders for cholesterol, PEG, DSPC and particle size,
                and watch predicted mRNA delivery change across liver, spleen,
                kidney, bone marrow, lung, heart, brain and whole blood.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                This is the model published alongside the paper, reproduced
                here under CC BY 4.0.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/tools/prelive/">
                  Open the profiler <Arrow />
                </Button>
                <Button href="/tools/" variant="ghost">
                  About the tool
                </Button>
              </div>
            </div>

            <div className="order-1 flex items-center border-b border-line bg-surface-2 p-6 sm:p-8 lg:order-2 lg:border-b-0 lg:border-l">
              <Link
                href="/tools/prelive/"
                aria-label="Open the PRELIVE profiler"
                className="block w-full"
              >
                <Picture
                  base="img/prelive-preview"
                  widths={[800, 1200]}
                  intrinsic={{ w: 1250, h: 345 }}
                  alt="Screenshot of the PRELIVE profiler: prediction traces for liver radiance against ionisable lipid, DSPC, cholesterol and DMG-PEG content, particle size and lipid choice, with tabs for eight tissues across the top."
                  sizes="(min-width: 1024px) 46vw, 90vw"
                  fallback="png"
                  className="w-full rounded-md ring-1 ring-white/10"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Research themes */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Research</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl">What I work on</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Formulation optimisation for drug delivery, worked from four
              angles.
            </p>
          </div>
          <Link href="/research/" className="link-underline text-sm text-accent-2">
            All four themes
          </Link>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {researchThemes.map((t) => (
            <Link
              key={t.id}
              href={`/research/#${t.id}`}
              className="reveal group bg-bg p-7 transition-colors hover:bg-surface sm:p-8"
            >
              <span
                className={`block h-px w-10 ${
                  t.accent === "accent"
                    ? "bg-accent"
                    : t.accent === "accent-2"
                      ? "bg-accent-2"
                      : "bg-accent-3"
                }`}
              />
              <h3 className="mt-5 text-xl transition-colors group-hover:text-accent">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.lede}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Publication highlights */}
      <Section className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl">Publications</h2>
          </div>
          <Link
            href="/publications/"
            className="link-underline text-sm text-accent-2"
          >
            All 9 publications
          </Link>
        </div>

        <div className="mt-8">
          <PublicationHighlights />
        </div>
      </Section>
    </>
  );
}
