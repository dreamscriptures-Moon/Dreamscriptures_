export const step4eBeingChasedDependencies = {
  "running-away": {
    seoDescription: "Running away in a dream can reflect a need for distance, relief, protection, or time to respond. What you are leaving, what you are moving toward, and whether escape helps change the interpretation.",
    microSummary: "Running away is not automatically avoidance. The dream may be about self-protection, a necessary boundary, exhaustion, or the wish to create enough distance to think. The pursuer, destination, and feeling after you get away show which question is most relevant.",
    description: "A running-away dream is defined by the dreamer's movement, not only by the threat behind them. You may be fleeing a person, an animal, a place, a responsibility, or an undefined pressure. Sometimes the action resembles postponing a difficult conversation; at other times it is the clearest image of protecting yourself or leaving a situation that has become too demanding.\n\nNotice what you were trying to reach. A safe room, another person, open space, or simply more time each gives the escape a different purpose. If you kept looking back, the dream may hold both relief and unfinished concern. If you stopped running and felt calmer, distance may be the solution rather than a failure to confront something. Recent travel, exercise, frightening media, or a real need for safety can also supply the scene. The dream cannot establish that anyone is pursuing you in waking life.",
    emotionalMeaning: "Fear and urgency can point to pressure that feels immediate, while anger may make the run an act of resistance. Relief suggests that space or a boundary mattered; shame may arise when others watched you leave; determination can show that escape was purposeful. Curiosity or calmness may mean the movement was exploration rather than panic.",
    symbolicMeaning: "The useful symbol is the relationship between distance and agency. Running can postpone contact, create safety, preserve energy, or carry you toward a chosen place. The direction, obstacles, and ability to stop matter more than a fixed rule that escape always means avoidance.",
    spiritualMeaning: "Some traditions read flight from danger as discernment, protection, or a call to leave harmful patterns. These associations can support reflection but cannot prove a spiritual attacker, warning, or required action. Personal context, ordinary stress, and the actual emotional tone remain important.",
    wakingLifeMeaning: "This may resonate during conflict, overwork, caregiving, a crowded schedule, a relationship boundary, or a period when you need distance before deciding what to do. A recent frightening event or physical activation during sleep may be enough to create the dream.",
    context: "Who or what was behind you, where you were going, whether anyone helped, what blocked the route, whether you chose to stop, and how safety felt afterward change the interpretation.",
    scenarios: [
      { title: "You run toward a specific safe place", meaning: "The dream may emphasize a real need for support, privacy, or a workable boundary rather than generalized avoidance." },
      { title: "You keep looking back", meaning: "Distance may help, but part of the situation remains emotionally active or unresolved." },
      { title: "You stop and feel relief", meaning: "The body may be asking for rest or the dream may be showing that a boundary creates more agency than endless escape." },
      { title: "No one is chasing you when you turn around", meaning: "Anticipation, self-protection, or an assumed threat may be more central than an actual pursuer." },
    ],
    reflectionQuestions: [
      "What were you trying to leave, and what were you trying to reach?",
      "Did running protect you, postpone contact, or simply give you room to think?",
      "Who could help, and did you want them to find you?",
      "What changed when you stopped, looked back, or reached safety?",
      "Where in waking life would more distance or a clearer boundary change your options?",
    ],
    relatedDreams: [
      { slug: "chased", reason: "Use the broader Being Chased page when the pursuer and the pressure of pursuit—not your act of leaving—were central." },
      { slug: "hiding-from-someone", reason: "This narrows the response to concealment, privacy, and whether being unseen feels safer than moving away." },
      { slug: "escaping-danger", reason: "Choose this when reaching safety and what happened after escape mattered more than the distance traveled." },
      { slug: "being-trapped", reason: "This contrast helps when the key experience was not movement but the absence of a workable route out." },
    ],
  },
};

export function applyStep4eBeingChasedDependencies(dreams = []) {
  for (const dream of dreams) {
    if (step4eBeingChasedDependencies[dream.slug]) Object.assign(dream, step4eBeingChasedDependencies[dream.slug]);
  }
}
