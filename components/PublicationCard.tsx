import { Badge } from "./ui";
import {
  doiUrl,
  formatCitation,
  type Publication,
} from "@/content/publications";

export function PublicationCard({
  p,
  showNote = true,
}: {
  p: Publication;
  showNote?: boolean;
}) {
  return (
    <article className="reveal group border-t border-line/70 py-7">
      <div className="flex flex-wrap items-center gap-2">
        {p.firstAuthor && <Badge tone="accent">First author</Badge>}
        {p.cover && (
          <Badge tone="violet">
            {p.cover === "front" ? "Journal cover" : "Inside front cover"}
          </Badge>
        )}
        {p.openAccess && <Badge tone="green">Open access</Badge>}
        {p.licence && <Badge>{p.licence}</Badge>}
      </div>

      <h3 className="mt-3 text-xl leading-snug">
        <a
          href={doiUrl(p.doi)}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors group-hover:text-accent"
        >
          {p.title}
        </a>
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-muted">
        {p.authors.map((a, i) => (
          <span key={a}>
            {a.startsWith("Hanafy") ? (
              <strong className="font-semibold text-text">{a}</strong>
            ) : (
              a
            )}
            {i < p.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      <p className="mt-2 text-sm">
        <span className="text-sand italic">{p.journal}</span>
        <span className="text-muted">
          {" "}
          · {formatCitation(p).replace(`${p.journal}, `, "").replace(p.journal, "")}
        </span>
      </p>

      {showNote && p.note && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {p.note}
        </p>
      )}

      <p className="mt-3">
        <a
          href={doiUrl(p.doi)}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-mono text-xs text-accent-2"
        >
          doi:{p.doi}
        </a>
      </p>
    </article>
  );
}
