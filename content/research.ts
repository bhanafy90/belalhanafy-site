import type { Theme } from "./publications";

export type ResearchTheme = {
  id: string;
  /** Matches publication themes so the Publications filter can cross-link. */
  theme: Theme;
  title: string;
  lede: string;
  body: string[];
  /** Publication ids that evidence this theme. */
  evidence: string[];
  accent: "accent" | "accent-2" | "accent-3";
  /** Figure from the underlying paper, base path under /public/research. */
  figure?: {
    image: string;
    widths: number[];
    intrinsic: { w: number; h: number };
    alt: string;
    caption: string;
  };
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "reducing-animal-testing",
    theme: "3rs",
    title: "Reducing reliance on animal testing",
    lede: "A good enough prediction is a study that does not need running.",
    body: [
      "Nanoparticle development has traditionally meant making a batch, dosing it, and measuring where it went, then repeating. PRELIVE replaces part of that loop with a model that estimates in-vivo efficacy from composition and physical properties alone.",
      "The same idea shapes how I design the animal studies that remain: using Design of Experiments so each study is planned to get the most information from the fewest animals, rather than testing one variable at a time.",
      "This is part of a wider shift toward New Approach Methodologies (NAMs), non-animal approaches that regulators including the FDA and EMA have recently moved to encourage.",
    ],
    evidence: ["prelive"],
    accent: "accent-2",
    figure: {
      image: "research/prelive-figure",
      widths: [480, 768, 1200],
      intrinsic: { w: 1367, h: 1044 },
      alt: "Figure from the PRELIVE paper: a ternary diagram of fourteen lipid nanoparticle compositions chosen by Design of Experiments, in-vivo bioluminescence images across eight organs for each formulation, and two predictive pathways, one from composition and one from the in-vitro protein corona, each feeding a model that predicts organ-specific in-vivo activity.",
      caption:
        "Fourteen LNP compositions, chosen by Design of Experiments, generate in-vivo data across eight organs. Two models, one from composition and one from the in-vitro protein corona, predict where each formulation is active.",
    },
  },
  {
    id: "lnp-tropism",
    theme: "lnp",
    title: "Lipid nanoparticle organ and cell tropism",
    lede: "Which cell a nanoparticle reaches is decided by its chemistry.",
    body: [
      "Lipid nanoparticles do not distribute evenly. Small changes in ionisable lipid chemistry, cholesterol content or PEG density shift delivery between liver, spleen, lung and specific immune cell populations, in ways that are not obvious from first principles.",
      "I build models that learn those rules from designed experiments, using composition, protein corona profiles and Raman fingerprints as predictive inputs, reaching over 80% accuracy across multiple organs. That lets a formulation be chosen computationally, before it is made.",
    ],
    evidence: ["prelive", "adhm-tropism"],
    accent: "accent",
    figure: {
      image: "research/tropism-figure",
      widths: [480, 768, 1200],
      intrinsic: { w: 1748, h: 1370 },
      alt: "Five-way Venn diagram showing how many lipid nanoparticle formulations were active in each of five cell types, Jurkat, ImmDC, HuH7, THP1 and macrophage, how many were active across several cell types at once, and how many were inactive in all of them.",
      caption:
        "How LNP activity overlaps across five cell types. Most active formulations work in more than one; a minority are specific to just one, which is the group cell-targeted design depends on.",
    },
  },
  {
    id: "predictive-biopharmaceutics",
    theme: "biopharm",
    title: "Predictive biopharmaceutics",
    lede: "Predicting how much of a subcutaneous dose reaches the bloodstream, before dosing humans.",
    body: [
      "Subcutaneous bioavailability of monoclonal antibodies is hard to predict, and getting it wrong is expensive. I developed an integrated in-vitro/in-silico model that predicts human subcutaneous bioavailability with over 85% accuracy, ahead of the prevailing industry standard.",
      "The model is used inside developability workflows and published openly. I have also applied the approach to oligonucleotides, peptides and PROTACs.",
    ],
    evidence: ["jcr-mabs", "rsc-pharm-ecm", "ijp-microfluidic"],
    accent: "accent-3",
    figure: {
      image: "research/biopharm-figure",
      widths: [480, 768, 1200],
      intrinsic: { w: 1854, h: 574 },
      alt: "Workflow figure from the subcutaneous bioavailability paper: an antibody injected into the SCISSOR device generates release and transmission profiles, functional principal component analysis extracts features from each, and self-validated ensemble models combine them into a bioavailability prediction.",
      caption:
        "From a single SCISSOR measurement to a bioavailability prediction: release and transmission profiles are reduced to a handful of features, then combined by an ensemble of models.",
    },
  },
  {
    id: "doe-and-ml",
    theme: "doe-ml",
    title:
      "Cheminformatics, high-throughput screening and machine learning for formulation",
    lede: "Cheminformatics, QSAR and high-throughput screening decide which lipid is worth making.",
    body: [
      "I use cheminformatics workflows, RDKit for example, to turn lipid structures into molecular fingerprints and descriptors, then build QSAR models that rank candidate lipids by predicted activity before synthesis. Design of Experiments, self-validated ensemble modelling and gradient boosting are used alongside this to plan and analyse formulation studies.",
      "Generating enough data for these models depends on high-throughput screening and lab automation: running many formulations in parallel rather than one at a time. The aim is that a designed experiment, an automated screen and a model become the ordinary starting point for choosing a formulation.",
    ],
    evidence: ["prelive", "adhm-tropism", "jcr-mabs"],
    accent: "accent-2",
  },
];
