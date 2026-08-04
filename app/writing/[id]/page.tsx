import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge, Eyebrow, Section } from "@/components/ui";
import { WritingBody } from "@/components/WritingBody";
import { writingPosts } from "@/content/writing";
import { doiUrl, publications } from "@/content/publications";

export function generateStaticParams() {
  return writingPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = writingPosts.find((p) => p.id === id);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: `/writing/${post.id}/` },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = writingPosts.find((p) => p.id === id);
  if (!post) notFound();

  const evidence = (post.relatedPublications ?? [])
    .map((id) => publications.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Section className="pt-16 pb-12 sm:pt-24">
        <Eyebrow>Writing</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {post.dek}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs text-muted">
            {dateFormat.format(new Date(post.date))}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} tone="green">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="max-w-2xl">
          {post.video && (
            <video
              controls
              preload="metadata"
              aria-label={post.video.alt}
              className="w-full rounded-lg ring-1 ring-white/10"
            >
              <source src={post.video.src} type="video/mp4" />
            </video>
          )}

          <WritingBody blocks={post.body} />

          {evidence.length > 0 && (
            <div className="mt-10 rounded-lg border border-line bg-surface/50 p-5">
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
                      · <span className="italic">{p.journal}</span>, {p.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
