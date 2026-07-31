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
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "reducing-animal-testing",
    theme: "3rs",
    title: "Reducing reliance on animal testing",
    lede: "If a model can tell you what an experiment would have shown, the experiment does not need to happen.",
    body: [
      "Nanoparticle development has historically been iterative and animal-intensive: make a batch, dose it, measure where it went, repeat. PRELIVE replaces part of that loop with a predictive framework that estimates in-vivo efficacy from composition and physical properties alone.",
      "The same logic drives how I design the studies that remain. Introducing Design of Experiments to in-vivo work means each animal study is planned to extract the maximum information from the minimum number of animals, rather than testing one variable at a time.",
      "This is the strand of my work with the widest reach beyond formulation science, and the one I most want to see adopted more broadly.",
    ],
    evidence: ["prelive", "ijp-microfluidic"],
    accent: "accent-2",
  },
  {
    id: "lnp-tropism",
    theme: "lnp",
    title: "Lipid nanoparticle organ and cell tropism",
    lede: "Which cell a nanoparticle reaches is decided by its chemistry. That relationship can be learned.",
    body: [
      "Lipid nanoparticles do not distribute evenly. Small changes in ionisable lipid chemistry, cholesterol content or PEG density shift delivery between liver, spleen, lung and specific immune cell populations — and the rules governing that are not obvious from first principles.",
      "I build models that learn those rules from designed experiments, then use them to identify the formulation design space that maximises activity in a chosen tissue. Alongside composition, I have used protein corona profiles and Raman fingerprints as predictive inputs, reaching over 80% accuracy across multiple organs.",
      "In practice this changes what gets made: prototypes are selected computationally before synthesis, rather than screened afterwards.",
    ],
    evidence: ["prelive", "adhm-tropism"],
    accent: "accent",
  },
  {
    id: "predictive-biopharmaceutics",
    theme: "biopharm",
    title: "Predictive biopharmaceutics",
    lede: "Predicting how much of a subcutaneous dose actually reaches the bloodstream — in humans, before dosing humans.",
    body: [
      "Subcutaneous bioavailability of monoclonal antibodies is notoriously hard to predict, and getting it wrong is expensive. Working across a cross-functional team, I developed an integrated in-vitro/in-silico model that predicts human subcutaneous bioavailability with over 85% accuracy, outperforming the prevailing industry standard.",
      "The model is deployed inside developability workflows and published openly, and the approach extends beyond antibodies — I have used it to evaluate the suitability of the subcutaneous route for oligonucleotides, peptides and PROTACs.",
    ],
    evidence: ["jcr-mabs", "rsc-pharm-ecm", "ijp-microfluidic"],
    accent: "accent-3",
  },
  {
    id: "doe-and-ml",
    theme: "doe-ml",
    title: "Design of Experiments and machine learning for formulation",
    lede: "Making predictive modelling the default way formulations get designed, not a specialist add-on.",
    body: [
      "Much of my work has been introducing methods rather than results: Design of Experiments, self-validated ensemble modelling, gradient boosting, and cheminformatics workflows in RDKit for fingerprinting, similarity and QSAR.",
      "The goal is that a formulation scientist reaches for a designed experiment and a model as a matter of course. That shift lets physical properties and cell activity be predicted before anything is formulated, which saves both time and material and makes the eventual selection defensible.",
    ],
    evidence: ["prelive", "adhm-tropism", "jcr-mabs"],
    accent: "accent-2",
  },
];
