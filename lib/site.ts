export const site = {
  name: "Belal Hanafy",
  fullName: "Belal I. Hanafy",
  credential: "PhD",
  role: "Senior Scientist",
  org: "AstraZeneca",
  orgUnit: "Pharmaceutical Sciences",
  location: "Cambridge, UK",
  url: "https://belalhanafy.com",
  tagline: "Predictive science for drug delivery",
  description:
    "Belal Hanafy, PhD — Senior Scientist in Pharmaceutical Sciences at AstraZeneca. Machine learning, Design of Experiments and predictive modelling for lipid nanoparticles and biologics, with the aim of reducing reliance on animal testing.",
} as const;

/** Email is assembled at render time rather than written as a literal, so it is
 *  usable by people but not trivially harvested from the static HTML. */
export const emailParts = { user: "bhanafy90", domain: "gmail.com" } as const;

export const links = {
  orcid: "https://orcid.org/0000-0001-5356-8458",
  github: "https://github.com/bhanafy90",
  linkedin: "https://www.linkedin.com/in/belalhanafy/",
  // TODO: awaiting Google Scholar profile URL from Belal.
  scholar: null as string | null,
} as const;

export const orcidId = "0000-0001-5356-8458";

export const nav = [
  { href: "/research/", label: "Research" },
  { href: "/publications/", label: "Publications" },
  { href: "/tools/", label: "Tools" },
  { href: "/cover-art/", label: "Cover art" },
  { href: "/about/", label: "About" },
] as const;
