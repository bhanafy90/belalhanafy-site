import Link from "next/link";
import { Email } from "./Email";
import { links, nav, site } from "@/lib/site";

// Official brand marks, reproduced at icon size to identify the linked
// service. Colours are each platform's published brand colour.
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function OrcidIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path
        d="M2 4.2l6 4.8 6-4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const pillBase =
  "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors";

export function Footer() {
  return (
    <footer id="contact" className="mt-24 scroll-mt-24 border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl">Get in touch</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              I am always glad to hear from people working on predictive
              methods in drug delivery: collaborations, talks, a Design of
              Experiments or formulation problem you are stuck on, or a
              question about any of the work here.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillBase} border-[#0A66C2]/45 text-[#0A66C2] hover:bg-[#0A66C2]/10`}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <Email
                variant="button"
                label="Email"
                icon={<MailIcon />}
                className="border-accent/45 text-accent hover:bg-accent/10"
              />
              <a
                href={links.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillBase} border-[#A6CE39]/45 text-[#A6CE39] hover:bg-[#A6CE39]/10`}
              >
                <OrcidIcon />
                ORCID
              </a>
              {links.scholar && (
                <a
                  href={links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pillBase} border-line text-text hover:border-accent-2 hover:text-accent-2`}
                >
                  Google Scholar
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav
                .filter((item) => !item.href.startsWith("#"))
                .map((item) => (
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
