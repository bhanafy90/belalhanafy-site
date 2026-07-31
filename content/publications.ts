export type Theme = "lnp" | "biopharm" | "doe-ml" | "3rs" | "nanoceria";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  doi: string;
  /** Free to read at the publisher under an open licence. */
  openAccess: boolean;
  licence?: string;
  firstAuthor: boolean;
  /** Set when the paper was selected for a journal cover. */
  cover?: "front" | "inside-front";
  themes: Theme[];
  /** One line on why this paper matters, in plain language. */
  note?: string;
};

export const themeLabels: Record<Theme, string> = {
  lnp: "LNP tropism",
  biopharm: "Predictive biopharmaceutics",
  "doe-ml": "DoE & machine learning",
  "3rs": "Reducing animal testing",
  nanoceria: "Nanoceria & oxidative stress",
};

/** All metadata below was verified against the Crossref API. */
export const publications: Publication[] = [
  {
    id: "prelive",
    title:
      "PRELIVE: A Framework for Predicting Lipid Nanoparticles In Vivo Efficacy and Reducing Reliance on Animal Testing",
    authors: ["Hanafy, B.I.", "Lu, C.-E.", "Liu, K.", "Gallud, A."],
    journal: "Advanced Functional Materials",
    year: 2025,
    volume: "36",
    issue: "27",
    articleNumber: "e25076",
    doi: "10.1002/adfm.202525076",
    openAccess: true,
    licence: "CC BY 4.0",
    firstAuthor: true,
    themes: ["lnp", "doe-ml", "3rs"],
    note: "The model behind the interactive profiler on this site. Predicts functional mRNA delivery across eight tissues from lipid composition and particle size.",
  },
  {
    id: "adhm-tropism",
    title:
      "Advancing Cellular-Specific Delivery: Machine Learning Insights into Lipid Nanoparticles Design and Cellular Tropism",
    authors: [
      "Hanafy, B.I.",
      "Munson, M.J.",
      "Soundararajan, R.",
      "Pereira, S.",
      "Gallud, A.",
      "Sanaullah, S.M.",
      "Carlesso, G.",
      "Mazza, M.",
    ],
    journal: "Advanced Healthcare Materials",
    year: 2025,
    volume: "14",
    issue: "18",
    articleNumber: "2500383",
    doi: "10.1002/adhm.202500383",
    openAccess: false,
    firstAuthor: true,
    cover: "front",
    themes: ["lnp", "doe-ml"],
    note: "Machine learning applied to a 180-formulation design of experiments, linking lipid chemistry to which immune cell type an LNP actually reaches.",
  },
  {
    id: "jcr-mabs",
    title:
      "Predicting human subcutaneous bioavailability of monoclonal antibodies using an integrated in-vitro/in-silico approach",
    authors: [
      "Hanafy, B.I.",
      "Trayton, I.",
      "Sundqvist, M.",
      "Caldwell, J.",
      "Mody, N.",
      "Day, K.",
      "Mazza, M.",
    ],
    journal: "Journal of Controlled Release",
    year: 2025,
    volume: "380",
    pages: "715–724",
    doi: "10.1016/j.jconrel.2025.02.022",
    openAccess: false,
    firstAuthor: true,
    cover: "inside-front",
    themes: ["biopharm", "doe-ml"],
    note: "Predicts how much of a subcutaneously injected antibody reaches the bloodstream in humans, at above 85% accuracy — better than the prevailing industry standard.",
  },
  {
    id: "rsc-pharm-ecm",
    title:
      "Comparison of macromolecule permeation through extracellular matrix and hyaluronic acid to inform in vitro testing of subcutaneous therapies",
    authors: ["Javorovic, J.", "Hanafy, B.I.", "Franek, F.", "Vllasaliu, D."],
    journal: "RSC Pharmaceutics",
    year: 2025,
    volume: "2",
    issue: "3",
    pages: "624–629",
    doi: "10.1039/d4pm00271g",
    openAccess: true,
    licence: "CC BY 3.0",
    firstAuthor: false,
    themes: ["biopharm"],
  },
  {
    id: "ijp-microfluidic",
    title:
      "A microfluidic in vitro method predicting the fate of peptide drugs after subcutaneous administration",
    authors: [
      "Wanselius, M.",
      "Abrahmsén-Alami, S.",
      "Hanafy, B.I.",
      "Mazza, M.",
      "Hansson, P.",
    ],
    journal: "International Journal of Pharmaceutics",
    year: 2024,
    volume: "667",
    articleNumber: "124849",
    doi: "10.1016/j.ijpharm.2024.124849",
    openAccess: true,
    licence: "CC BY 4.0",
    firstAuthor: false,
    themes: ["biopharm", "3rs"],
  },
  {
    id: "nano-glycation",
    title: "Nanoceria Prevents Glucose-Induced Protein Glycation in Eye Lens Cells",
    authors: ["Hanafy, B.I.", "Cave, G.W.V.", "Barnett, Y.", "Pierscionek, B.K."],
    journal: "Nanomaterials",
    year: 2021,
    volume: "11",
    issue: "6",
    pages: "1473",
    doi: "10.3390/nano11061473",
    openAccess: true,
    licence: "CC BY 4.0",
    firstAuthor: true,
    themes: ["nanoceria"],
  },
  {
    id: "animals-zinc",
    title:
      "Bioavailability of Methionine-Coated Zinc Nanoparticles as a Dietary Supplement Leads to Improved Performance and Bone Strength in Broiler Chicken Production",
    authors: [
      "Alkhtib, A.",
      "Scholey, D.",
      "Carter, N.",
      "Cave, G.W.V.",
      "Hanafy, B.I.",
      "Kempster, S.R.J.",
      "Mekapothula, S.",
      "Roxborough, E.T.",
      "Burton, E.J.",
    ],
    journal: "Animals",
    year: 2020,
    volume: "10",
    issue: "9",
    pages: "1482",
    doi: "10.3390/ani10091482",
    openAccess: true,
    licence: "CC BY 4.0",
    firstAuthor: false,
    themes: ["nanoceria"],
  },
  {
    id: "molecules-apoptosis",
    title:
      "Treatment of Human Lens Epithelium with High Levels of Nanoceria Leads to Reactive Oxygen Species Mediated Apoptosis",
    authors: ["Hanafy, B.I.", "Cave, G.W.V.", "Barnett, Y.", "Pierscionek, B."],
    journal: "Molecules",
    year: 2020,
    volume: "25",
    issue: "3",
    pages: "441",
    doi: "10.3390/molecules25030441",
    openAccess: true,
    licence: "CC BY 4.0",
    firstAuthor: true,
    themes: ["nanoceria"],
  },
  {
    id: "rsc-adv-eg",
    title:
      "Ethylene glycol coated nanoceria protects against oxidative stress in human lens epithelium",
    authors: ["Hanafy, B.I.", "Cave, G.W.V.", "Barnett, Y.", "Pierscionek, B."],
    journal: "RSC Advances",
    year: 2019,
    volume: "9",
    issue: "29",
    pages: "16596–16605",
    doi: "10.1039/c9ra01252d",
    openAccess: true,
    licence: "CC BY-NC 3.0",
    firstAuthor: true,
    themes: ["nanoceria"],
  },
];

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;

export const formatCitation = (p: Publication) => {
  const bits = [p.journal];
  if (p.volume) bits.push(p.volume + (p.issue ? `(${p.issue})` : ""));
  if (p.pages) bits.push(p.pages);
  else if (p.articleNumber) bits.push(p.articleNumber);
  return `${bits.join(", ")} · ${p.year}`;
};
