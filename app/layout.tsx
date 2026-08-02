import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { links, site } from "@/lib/site";
import { publications, doiUrl } from "@/content/publications";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, ${site.credential} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  keywords: [
    "Belal Hanafy",
    "lipid nanoparticles",
    "LNP",
    "predictive modelling",
    "machine learning",
    "Design of Experiments",
    "drug delivery",
    "subcutaneous bioavailability",
    "monoclonal antibodies",
    "mRNA delivery",
    "reducing animal testing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name}, ${site.credential} · ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.tagline }],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, ${site.credential} · ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  identifier: links.orcid,
  jobTitle: site.role,
  description: site.description,
  image: `${site.url}/img/belal-hanafy-610.jpg`,
  worksFor: {
    "@type": "Organization",
    name: site.org,
    department: { "@type": "Organization", name: site.orgUnit },
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Nottingham Trent University" },
    { "@type": "CollegeOrUniversity", name: "Liverpool John Moores University" },
    { "@type": "CollegeOrUniversity", name: "Mansoura University" },
  ],
  knowsAbout: [
    "Lipid nanoparticles",
    "mRNA delivery",
    "Predictive modelling",
    "Machine learning",
    "Design of Experiments",
    "Cheminformatics",
    "Biopharmaceutics",
    "Subcutaneous drug delivery",
    "Reduction of animal testing",
  ],
  sameAs: [links.orcid, links.linkedin, links.scholar].filter(Boolean),
};

const publicationsJsonLd = publications.map((p) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: p.title,
  name: p.title,
  author: p.authors.map((a) => ({ "@type": "Person", name: a })),
  datePublished: String(p.year),
  isPartOf: { "@type": "Periodical", name: p.journal },
  identifier: doiUrl(p.doi),
  sameAs: doiUrl(p.doi),
  isAccessibleForFree: p.openAccess,
}));

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(publicationsJsonLd),
          }}
        />
      </body>
    </html>
  );
}
