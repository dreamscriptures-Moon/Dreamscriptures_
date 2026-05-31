export const authorityDreamSlugs = [
  "snakes",
  "being-chased",
  "falling",
  "death",
  "drowning",
  "darkness",
  "being-pregnant",
  "ex-partner",
  "fire",
  "teeth-falling-out",
];

export const emotionalAuthorityClusters = {
  "loss-of-control": {
    title: "When Control Starts to Slip",
    searchIntents: [
      "fear of losing control",
      "dreams that feel emotionally unstable",
      "dreams where control starts slipping away",
    ],
    dreamSlugs: [
      "falling",
      "drowning",
      "driving-out-of-control",
      "trapped",
      "teeth-falling-out",
    ],
    emotionSlugs: [
      "fear-of-losing-control",
      "lack-of-control",
      "emotional-overwhelm",
    ],
  },
  anxiety: {
    title: "Pressure That Keeps Following You",
    searchIntents: [
      "dreams where fear feels unavoidable",
      "dreams where emotional pressure keeps building",
      "dreams where you cannot fully catch up",
    ],
    dreamSlugs: [
      "being-chased",
      "being-late",
      "failing-a-test",
      "missing-a-flight",
      "running-slowly",
    ],
    emotionSlugs: ["anxiety", "survival-pressure", "hidden-stress"],
  },
  transformation: {
    title: "Painful Change and Emotional Rebirth",
    searchIntents: [
      "painful transformation",
      "emotional rebirth",
      "identity transition",
    ],
    dreamSlugs: ["death", "snakes", "fire", "being-pregnant", "water"],
    emotionSlugs: ["personal-growth", "letting-go", "life-transition"],
  },
  "emotional-overwhelm": {
    title: "Too Much Emotion to Hold",
    searchIntents: [
      "emotional overwhelm",
      "dreams where everything feels like too much",
      "dreams where stress has nowhere to go",
    ],
    dreamSlugs: ["drowning", "tsunami", "flood", "unable-to-scream", "trapped"],
    emotionSlugs: [
      "emotional-overwhelm",
      "panic-and-confusion",
      "hidden-stress",
    ],
  },
  "unresolved-tension": {
    title: "Feelings That Have Not Settled",
    searchIntents: [
      "unresolved emotional tension",
      "dreams that keep returning emotionally",
      "feelings that never fully closed",
    ],
    dreamSlugs: ["ex-partner", "being-chased", "darkness", "death", "snakes"],
    emotionSlugs: ["unspoken-feelings", "wanting-closure", "inner-conflict"],
  },
  "hidden-or-unclear": {
    title: "What Feels Hidden or Hard to Name",
    searchIntents: [
      "feelings that stay hidden",
      "dreams where something feels unclear",
      "emotions you cannot fully name yet",
    ],
    dreamSlugs: ["darkness", "snakes", "mirrors", "getting-lost", "unknown-person"],
    emotionSlugs: ["uncertainty", "hidden-stress", "emotional-suppression"],
  },
};

export const dreamAuthorityProfiles = {
  snakes: {
    canonicalSlug: "snakes",
    title: "Snake Dream Emotional Pathways",
    clusterKeys: ["transformation", "hidden-or-unclear", "unresolved-tension"],
    longTailAnchors: [
      ["why-snake-dreams-feel-threatening", "Why snake dreams feel threatening"],
      ["snake-dreams-after-betrayal", "Snake dreams after betrayal"],
      ["fear-vs-transformation", "Fear and transformation"],
      ["why-snake-dreams-repeat", "Why snake dreams repeat"],
    ],
    longTailSections: [
      {
        id: "why-snake-dreams-feel-threatening",
        title: "Why snake dreams feel emotionally threatening",
      },
      {
        id: "snake-dreams-after-betrayal",
        title: "Snake dreams after betrayal or mistrust",
      },
      {
        id: "fear-vs-transformation",
        title: "Fear vs transformation in snake dreams",
      },
      {
        id: "why-snake-dreams-repeat",
        title: "Why snake dreams repeat",
      },
    ],
  },
  "being-chased": {
    canonicalSlug: "being-chased",
    title: "Being Chased Dream Emotional Pathways",
    clusterKeys: ["anxiety", "unresolved-tension", "emotional-overwhelm"],
    longTailAnchors: [
      ["why-being-chased-feels-exhausting", "Why being chased feels exhausting"],
      ["avoiding-confrontation", "Avoiding confrontation"],
      ["why-you-cannot-run-properly", "Why you cannot run properly"],
    ],
    longTailSections: [
      {
        id: "why-being-chased-feels-exhausting",
        title: "Why being chased dreams feel emotionally exhausting",
      },
      {
        id: "avoiding-confrontation",
        title: "Dreams about avoiding confrontation",
      },
      {
        id: "why-you-cannot-run-properly",
        title: "Why you cannot run properly in dreams",
      },
    ],
  },
  falling: {
    canonicalSlug: "falling",
    title: "Falling Dream Emotional Pathways",
    clusterKeys: ["loss-of-control", "anxiety", "emotional-overwhelm"],
    longTailAnchors: [
      ["fear-of-losing-control", "Fear of losing control"],
      ["falling-during-uncertainty", "Falling during uncertainty"],
      ["why-falling-feels-physically-real", "Why falling feels physically real"],
    ],
    longTailSections: [
      {
        id: "fear-of-losing-control",
        title: "Fear of losing control in dreams",
      },
      {
        id: "falling-during-uncertainty",
        title: "Falling dreams during uncertainty",
      },
      {
        id: "why-falling-feels-physically-real",
        title: "Why falling dreams feel physically real",
      },
    ],
  },
  death: {
    canonicalSlug: "death",
    title: "Death Dream Emotional Pathways",
    clusterKeys: ["transformation", "unresolved-tension"],
    longTailAnchors: [
      ["death-dreams-and-change", "Death dreams during change"],
      ["endings-and-letting-go", "Endings and letting go"],
      ["grief-and-transition", "Grief and transition"],
    ],
    longTailSections: [
      {
        id: "death-dreams-and-change",
        title: "Death dreams during emotional change",
      },
      {
        id: "endings-and-letting-go",
        title: "Endings, release, and letting go",
      },
      {
        id: "grief-and-transition",
        title: "Grief and emotional transition",
      },
    ],
  },
  drowning: {
    canonicalSlug: "drowning",
    title: "Drowning Dream Emotional Pathways",
    clusterKeys: ["emotional-overwhelm", "loss-of-control", "anxiety"],
    longTailAnchors: [
      ["emotional-overwhelm", "Emotional overwhelm"],
      ["too-much-to-hold", "Too much to hold"],
      ["survival-pressure", "Survival pressure"],
    ],
    longTailSections: [
      {
        id: "emotional-overwhelm",
        title: "Drowning dreams and emotional overwhelm",
      },
      {
        id: "too-much-to-hold",
        title: "When there is too much to hold",
      },
      {
        id: "survival-pressure",
        title: "Drowning dreams and survival pressure",
      },
    ],
  },
  darkness: {
    canonicalSlug: "darkness",
    title: "Darkness Dream Emotional Pathways",
    clusterKeys: ["hidden-or-unclear", "anxiety", "unresolved-tension"],
    longTailAnchors: [
      ["fear-of-the-unknown", "Fear of the unknown"],
      ["unclear-emotions", "Unclear emotions"],
      ["hidden-parts-of-the-self", "Hidden parts of the self"],
    ],
  },
  "being-pregnant": {
    canonicalSlug: "being-pregnant",
    alternateSlugs: ["pregnancy"],
    title: "Pregnancy Dream Emotional Pathways",
    clusterKeys: ["transformation", "emotional-overwhelm"],
    longTailAnchors: [
      ["growth-and-potential", "Growth and potential"],
      ["new-beginnings", "New beginnings"],
      ["responsibility-and-change", "Responsibility and change"],
    ],
  },
  "ex-partner": {
    canonicalSlug: "ex-partner",
    title: "Ex-Partner Dream Emotional Pathways",
    clusterKeys: ["unresolved-tension", "hidden-or-unclear"],
    longTailAnchors: [
      ["unresolved-feelings", "Unresolved feelings"],
      ["wanting-closure", "Wanting closure"],
      ["past-relationship-patterns", "Past relationship patterns"],
    ],
  },
  fire: {
    canonicalSlug: "fire",
    title: "Fire Dream Emotional Pathways",
    clusterKeys: ["transformation", "emotional-overwhelm", "loss-of-control"],
    longTailAnchors: [
      ["emotional-intensity", "Emotional intensity"],
      ["release-and-transformation", "Release and transformation"],
      ["pressure-reaching-the-surface", "Pressure reaching the surface"],
    ],
  },
  "teeth-falling-out": {
    canonicalSlug: "teeth-falling-out",
    title: "Teeth Falling Out Dream Emotional Pathways",
    clusterKeys: ["loss-of-control", "anxiety", "hidden-or-unclear"],
    longTailAnchors: [
      ["vulnerability-and-control", "Vulnerability and control"],
      ["appearance-and-self-worth", "Appearance and self-worth"],
      ["stress-and-instability", "Stress and instability"],
    ],
  },
};

export const authoritySearchAliases = [
  ["snake", "snakes"],
  ["snakes", "snakes"],
  ["pregnancy", "pregnancy"],
  ["pregnant", "pregnancy"],
  ["twins", "twins"],
  ["black snake", "snakes#black-snake"],
  ["snake bite", "snakes#snake-bite"],
  ["getting bitten by a snake", "snakes#snake-bite"],
  ["being chased by a snake", "snakes#being-chased-by-a-snake"],
  ["giant snake", "snakes#giant-snake"],
  ["falling", "falling"],
  ["being chased", "being-chased"],
  ["drowning", "drowning"],
  ["death", "death"],
  ["school", "school"],
  ["ex partner", "ex-partner"],
  ["fire", "fire"],
  ["teeth falling out", "teeth-falling-out"],
  ["baby crying", "baby-crying"],
];
