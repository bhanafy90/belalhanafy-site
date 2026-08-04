export type WritingBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type WritingPost = {
  id: string;
  title: string;
  dek: string;
  date: string;
  tags: string[];
  video?: { src: string; poster?: string; alt: string };
  body: WritingBlock[];
  /** Publication ids that evidence this post, shown like Research's "Published evidence" box. */
  relatedPublications?: string[];
};

export const writingPosts: WritingPost[] = [
  {
    id: "predicting-lnp-delivery-before-you-make-it",
    title: "Predicting where a lipid nanoparticle goes, before you make it",
    dek: "Inside PRELIVE: how fourteen designed formulations became a model you can turn the dials on, and why that matters more than the fourteen formulations themselves.",
    date: "2026-08-04",
    tags: ["Design of Experiments", "Predictive modelling", "Lipid nanoparticles", "3Rs"],
    video: {
      src: "/writing/prelive-profiler-demo.mp4",
      alt: "Screen recording of the PRELIVE profiler: dragging composition sliders redraws predicted in-vivo delivery traces across eight tissues in real time.",
    },
    body: [
      {
        type: "p",
        text: "Lipid nanoparticle development has traditionally run on a make-dose-measure loop: formulate a composition, inject it, image where it ended up, then change one thing and repeat. Within a defined applicability domain, that loop can now be replaced with a model. Change the ionisable lipid content, the helper phospholipid, the cholesterol, the PEG-lipid, or the particle size, and watch the predicted in-vivo delivery move, across eight tissues, in real time, in a browser.",
      },
      {
        type: "p",
        text: "That model is PRELIVE, and it now runs as a live profiler on this site. This post is about the part that doesn't fit in a figure legend: why fourteen formulations were enough, what the profiler is actually showing you, and why an interactive model is a different kind of output to a paper, not just a nicer one.",
      },
      { type: "h2", text: "Why fourteen formulations, not one at a time" },
      {
        type: "p",
        text: "Fourteen lipid nanoparticle compositions were chosen by Design of Experiments, not by intuition or by testing one variable while holding the others fixed. A one-factor-at-a-time approach can't see interactions: cases where the effect of PEG-lipid content depends on which ionisable lipid it's paired with, for instance. A designed space covers the composition space efficiently enough that those interactions become visible, from a number of formulations small enough to actually dose.",
      },
      {
        type: "p",
        text: "Each of the fourteen formulations was imaged in vivo, in eight tissues: liver, spleen, kidney, bone marrow, lung, heart, brain and whole blood. That's the entire experimental dataset the model was built from. Everything the profiler shows you for a composition that wasn't one of the fourteen is a prediction, interpolated by a self-validated ensemble model trained on that designed set, not a new animal study.",
      },
      { type: "h2", text: "Reading the profiler" },
      {
        type: "p",
        text: "Each small panel is one input: ionisable lipid content, DSPC, cholesterol, DMG-PEG, particle size. The trace inside it is the model's prediction as that single input varies, holding everything else where you've set it. Drag the vertical line and every trace across every tissue redraws at once, because the inputs interact with each other, not just with the outcome.",
      },
      {
        type: "ul",
        items: [
          "A steep trace means the prediction is sensitive to that input in that tissue.",
          "A flat trace means it barely matters there, which is often the more useful finding.",
          "Switching the tissue tab keeps your composition fixed, so you can see the same formulation's predicted fate move from liver to spleen to lung.",
        ],
      },
      { type: "h2", text: "Why interactive, not just published" },
      {
        type: "p",
        text: "A model that lives only in a figure can't be interrogated. It shows the formulations the authors chose to plot, not the one a reader is actually trying to design. Making it interactive means someone with a real formulation question can test it directly, and it does the thing the underlying paper argues for: answering a question computationally, in seconds, that would otherwise have needed another in-vivo study.",
      },
      {
        type: "note",
        text: "The profiler is free to use at /tools/prelive/, built on the model published in PRELIVE (Advanced Functional Materials, 2025, open access under CC BY 4.0). Turning designed experiments into a model people can actually use, rather than just a figure, is the pattern I'd like to apply well beyond this one paper.",
      },
    ],
    relatedPublications: ["prelive"],
  },
];
