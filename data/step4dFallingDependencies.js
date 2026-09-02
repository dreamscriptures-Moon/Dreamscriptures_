export const step4dFallingDependencies = {
  "flying-then-falling": {
    seoDescription: "Dreams about flying then falling often turn on a change from freedom or confidence to vulnerability. What changed, what caused the fall, and whether you recovered matter more than a fixed omen.",
    microSummary: "Flying then falling creates a contrast: confidence or possibility gives way to exposure, uncertainty, or a fear of losing progress. The dream's turning point—what changed in the air, how you responded, and what happened afterward—carries the interpretation.",
    description: "The distinctive experience here is not falling alone but the sudden change from control to vulnerability. You may have been enjoying freedom, reaching a height, or trusting your ability to stay airborne before something shifted. The useful question is what the change felt like: a failure of support, a choice to descend, an outside interruption, or fear arriving after success.\n\nIf the fall began when you noticed other people watching, the dream may be more about performance and exposure than gravity. If the sky simply stopped holding you, it may echo uncertainty about whether a recent opportunity or improvement can last. A deliberate descent or a calm landing creates a different picture from panic and helplessness.\n\nThe ending matters. Waking before impact leaves the feared consequence unresolved; landing safely can show that disruption is frightening without being unmanageable; continuing to fly after a brief drop may emphasize recovery rather than failure. Recent heights, travel, physical sensations, or media can supply the imagery directly. This dream cannot predict a literal fall or future setback.",
    emotionalMeaning: "The emotional shift is often the clearest clue. Excitement followed by fear may reflect the vulnerability that arrives after something begins going well. Shame can point toward being seen failing; anger may focus on an interruption or person who seemed to cause the change; calmness can suggest that the descent was chosen or accepted rather than experienced as defeat. Relief after landing may matter more than the fall itself.",
    symbolicMeaning: "Flight and falling should not be treated as two dictionary symbols pasted together. Their sequence describes a relationship to progress: rising, trusting, losing a condition that made movement possible, and discovering what remains when confidence is tested. The cause of the change and the dreamer's ability to respond make the contrast specific.",
    spiritualMeaning: "Some traditions read flight as elevation, freedom, or spiritual aspiration and descent as humility, grounding, or a return to ordinary limits. Those associations may be meaningful to a reader's faith, but the dream is not proof of divine approval, punishment, or a coming failure. Personal context and the emotional transition remain more reliable guides.",
    wakingLifeMeaning: "This may resonate when a promotion, relationship, creative project, recovery, or new responsibility has brought both confidence and pressure. It can also appear after praise, a near-success, a mistake, or a moment when maintaining progress feels harder than beginning it. Physical sleep-onset sensations and recent flying imagery are ordinary alternatives.",
    context: "What enabled flight, what interrupted it, whether you chose or resisted the descent, who saw it, the height, the landing, and the feeling afterward all change the interpretation.",
    scenarios: [
      { title: "You lose the ability to fly without warning", meaning: "The dream may mirror fear that a source of confidence or support is less dependable than it seemed, especially after a period of momentum." },
      { title: "You are pushed or watched while falling", meaning: "Outside pressure, judgment, or a trust question may matter more than ambition or gravity." },
      { title: "You choose to descend and remain calm", meaning: "A deliberate return to limits, rest, or ordinary responsibilities may be closer to acceptance than failure." },
      { title: "You land safely or rise again", meaning: "The dream gives recovery its own evidence: the disruption may be real, but it does not define the final outcome." },
    ],
    reflectionQuestions: [
      "What did flying make possible before the fall began?",
      "Did the change feel like a mistake, an outside force, a loss of support, or a choice?",
      "Who could see the fall, and did their presence change your reaction?",
      "What happened after landing or waking—injury, relief, embarrassment, recovery, or another flight?",
      "Where has recent confidence brought new pressure to keep performing or stay in control?",
    ],
    relatedDreams: [
      { slug: "falling", reason: "Use this broader page when the descent itself, rather than the contrast with flight, was the central experience." },
      { slug: "flying", reason: "This is the closer comparison when freedom, agency, and staying airborne mattered more than the fall." },
      { slug: "reaching-the-end-after-an-endless-fall", reason: "Choose this when the important question is what the fall eventually reached and how you responded afterward." },
      { slug: "jumping-off-a-bridge", reason: "This narrows the experience to an intentional leap and the decision to leave an expected path." },
    ],
  },
};

export function applyStep4dFallingDependencies(dreams = []) {
  for (const dream of dreams) {
    if (step4dFallingDependencies[dream.slug]) Object.assign(dream, step4dFallingDependencies[dream.slug]);
  }
}
