import Link from "next/link";
import { Picture } from "@/components/Picture";
import { PublicationCard } from "@/components/PublicationCard";
import { Arrow, Badge, Button, Eyebrow, Section } from "@/components/ui";
import { covers } from "@/content/covers";
import { publications } from "@/content/publications";
import { researchThemes } from "@/content/research";
import { site } from "@/lib/site";

/** Every figure here is evidenced by a published paper, linked alongside it. */
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
    href: "/cover-art/",
  },
  {
    value: "9",
    label: "peer-reviewed publications",
    href: "/publications/",
  },
];

const featured = ["prelive", "adhm-tropism", "jcr-mabs"].map(
  (id) => publications.find((p) => p.id === id)!,
);

export default function Home() {
  const adhm = covers[0];

  return (
    <>
      {/* Hero */}
      <Section className="pt-14 pb-20 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow>{site.tagline}</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
              I build models that decide which nanoparticles get made.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              I am a pharmaceutical scientist working where machine learning
              meets drug delivery. My work predicts how lipid nanoparticles and
              biologics will behave in the body — before they are made, and
              increasingly without dosing an animal to find out.
            </p>
            <p className="mt-5 text-sm text-muted">
              <span className="text-text">{site.role}</span>, {site.orgUnit} ·{" "}
              {site.org}, {site.location}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/tools/prelive/">
                Try the PRELIVE model <Arrow />
              </Button>
              <Button href="/publications/" variant="ghost">
                Read the papers <Arrow />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative lg:-mr-8 xl:-mr-20">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-3xl sm:-inset-6"
              />
              <Picture
                base={`covers/${adhm.image}`}
                widths={adhm.widths}
                intrinsic={adhm.intrinsic}
                alt={adhm.alt}
                priority
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="relative w-full rounded-lg shadow-2xl ring-1 shadow-black/50 ring-white/10"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted lg:-mr-8 xl:-mr-20">
              {adhm.journal} · {adhm.issue} — front cover for{" "}
              <Link href="/cover-art/" className="link-underline text-accent-3">
                our work on cellular tropism
              </Link>
            </p>
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
                This is not an illustration of the model. It is the model,
                published alongside the paper and reproduced here under CC BY
                4.0.
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

            <div className="order-1 border-b border-line bg-surface-2 p-6 sm:p-8 lg:order-2 lg:border-b-0 lg:border-l">
              <Link href="/tools/prelive/" aria-label="Open the PRELIVE profiler">
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

      {/* Selected publications */}
      <Section className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Recent first-author papers
            </h2>
          </div>
          <Link
            href="/publications/"
            className="link-underline text-sm text-accent-2"
          >
            All 9 publications
          </Link>
        </div>

        <div className="mt-8">
          {featured.map((p) => (
            <PublicationCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      {/* Cover art */}
      <Section className="pb-24">
        <div className="rounded-2xl border border-line bg-surface/50 p-8 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Cover art</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Two covers, two journals
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Editors select a small number of papers each issue for the
                cover. Two of mine have been chosen — one front cover, one
                inside front cover — and the artwork for each was built to carry
                the science rather than decorate it.
              </p>
              <div className="mt-7">
                <Button href="/cover-art/" variant="ghost">
                  See the covers <Arrow />
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-5">
              {covers.map((c) => (
                <Link
                  key={c.id}
                  href="/cover-art/"
                  className="reveal w-1/2 max-w-[220px] transition-transform hover:-translate-y-1"
                >
                  <Picture
                    base={`covers/${c.image}`}
                    widths={c.widths}
                    intrinsic={c.intrinsic}
                    alt={c.alt}
                    sizes="220px"
                    className="w-full rounded shadow-xl ring-1 shadow-black/40 ring-white/10"
                  />
                  <p className="mt-3 text-[11px] leading-snug text-muted">
                    {c.journal}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
