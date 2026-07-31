import Link from "next/link";
import { Email } from "./Email";
import { links, nav, orcidId, site } from "@/lib/site";

const external = [
  { href: links.orcid, label: "ORCID", detail: orcidId },
  { href: links.linkedin, label: "LinkedIn", detail: "belalhanafy" },
  { href: links.github, label: "GitHub", detail: "bhanafy90" },
  ...(links.scholar
    ? [{ href: links.scholar, label: "Google Scholar", detail: "Profile" }]
    : []),
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl">Get in touch</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              I am always glad to hear from people working on predictive methods
              in drug delivery — collaborations, talks, or a question about any
              of the work here.
            </p>
            <p className="mt-4 text-sm">
              <Email className="text-accent" />
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {external.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text transition-colors hover:text-accent"
                  >
                    {item.label}
                    <span className="ml-2 text-xs text-muted">{item.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/60 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <p className="max-w-lg sm:text-right">
            Views expressed here are my own and do not represent {site.org}.
          </p>
        </div>
      </div>
    </footer>
  );
}
