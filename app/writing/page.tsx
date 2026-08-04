import type { Metadata } from "next";
import Link from "next/link";
import { Badge, PageHeader, Section } from "@/components/ui";
import { writingPosts } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on Design of Experiments, predictive modelling and formulation design in drug delivery.",
  alternates: { canonical: "/writing/" },
};

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function WritingPage() {
  const posts = [...writingPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes on DoE, predictive modelling and formulation."
        lede="Longer-form pieces on the methods behind the Research and Tools pages, and how they apply beyond the papers they came from."
      />

      <Section className="pb-24">
        <ol className="space-y-10">
          {posts.map((post) => (
            <li key={post.id} className="reveal">
              <Link
                href={`/writing/${post.id}/`}
                className="block rounded-xl border border-line p-7 transition-colors hover:border-accent-2/60 sm:p-8"
              >
                <p className="font-mono text-xs text-muted">
                  {dateFormat.format(new Date(post.date))}
                </p>
                <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {post.dek}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} tone="green">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
