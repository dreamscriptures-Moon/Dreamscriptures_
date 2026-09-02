export const step4fSensitiveDependencies = {
  "pregnant-with-twins": {
    seoDescription: "Dreams about being pregnant with twins can reflect doubled responsibility, competing possibilities, or a wish or fear connected with pregnancy. They cannot prove twins or predict conception.",
    microSummary: "Twins add a question of multiplicity: two hopes, responsibilities, identities, or outcomes developing at once. Whether the dream felt joyful, crowded, frightening, or practical matters more than treating twins as a prediction.",
    description: "A twin-pregnancy dream is not simply a stronger version of a pregnancy dream. The doubling may fit competing plans, two relationships, a divided identity, or the feeling that one commitment has become more demanding than expected. It can also come directly from fertility concerns, pregnancy planning, conversations, or images recently seen.\n\nNotice whether the twins were welcome, unexpected, healthy, difficult to carry, or still unseen. Relief may point toward a sense of abundance or support; panic may reflect responsibility multiplying faster than your resources; curiosity may belong to uncertainty rather than a literal wish. The dream cannot establish pregnancy, twins, fertility, or a baby's future.",
    emotionalMeaning: "Joy can reflect excitement about more than one possibility, while fear may concern capacity, divided attention, or losing room for yourself. Grief, ambivalence, or numbness deserve room too, especially if pregnancy has been difficult or emotionally charged. The feeling toward the two babies—and toward the role of carrying them—helps locate the dream.",
    symbolicMeaning: "The meaningful symbol is the doubling and how it changes responsibility, attachment, and choice. Two babies can represent parallel projects or roles, but only when that reading fits the dreamer's details; the number itself is not a universal code.",
    spiritualMeaning: "Some traditions associate twins with blessing, duality, abundance, or paired purposes. Those associations may be meaningful within a faith tradition, but the dream is not medical evidence, a prophecy, or proof of divine promise. Personal context and discernment remain central.",
    wakingLifeMeaning: "This may resonate with family planning, fertility treatment, a new role carrying two sets of expectations, sibling relationships, or a decision with two possible outcomes. Bodily sensations and recent pregnancy-related information can also shape the imagery.",
    context: "Whether you were pregnant, who else knew, how the twins appeared, your physical comfort, the stage of pregnancy, and what happened afterward change the interpretation.",
    scenarios: [
      { title: "The twins feel joyful and manageable", meaning: "The dream may give form to abundance, support, or confidence in holding two meaningful commitments at once." },
      { title: "The twins feel unexpected or overwhelming", meaning: "The doubling may reflect responsibilities or possibilities arriving faster than you can prepare for." },
      { title: "One twin is visible and the other is hidden", meaning: "A known plan and an uncertain second possibility may be competing for attention." },
      { title: "The dream follows fertility or pregnancy concerns", meaning: "Recent hopes, fears, conversations, or bodily awareness may be the most direct source of the image." },
    ],
    reflectionQuestions: [
      "Did the twins feel welcome, frightening, exhausting, or simply surprising?",
      "What in your life currently feels doubled—responsibility, possibility, attention, or expectation?",
      "Were you supported, watched, alone, or unsure who the other parent or family members were?",
      "Did the dream focus on carrying, telling someone, giving birth, or what happened afterward?",
      "Could fertility concerns, planning, conversations, or bodily sensations have supplied the pregnancy imagery?",
    ],
    relatedDreams: [
      { slug: "pregnant", reason: "Use the broad Being Pregnant page when the pregnancy itself—not the doubling—was the central experience." },
      { slug: "giving-birth", reason: "This is the closer path when delivery, arrival, and what becomes real matter more than carrying twins." },
      { slug: "having-a-miscarriage", reason: "Choose this only when fear of loss or the ending of a pregnancy shaped the dream, not simply because both involve pregnancy." },
      { slug: "finding-a-baby", reason: "This shifts the question from carrying two possibilities to encountering responsibility or care unexpectedly." },
    ],
  },
  "demonic-attack": {
    seoDescription: "A dream of demonic attack can feel terrifying, but it does not prove a supernatural attack. The dream may reflect fear, helplessness, spiritual beliefs, stress, or a frightening sleep experience.",
    microSummary: "Demonic-attack dreams deserve careful, non-alarming interpretation. The threat may connect with fear, guilt, spiritual conflict, loss of control, or sleep-boundary sensations; the dream itself cannot establish a demon, curse, or coming danger.",
    description: "The phrase “demonic attack” describes how the dream felt, not something the dream can verify. Some people understand the imagery through spiritual warfare or religious tradition; others recognize fear, nightmares, stress, trauma memories, media, or sleep paralysis-like sensations. Both the emotional experience and the limits of what can be known matter here.\n\nLook at what the presence did and what you tried to do. Were you unable to move, praying, fighting, hiding, protecting someone, or waking with a physical sensation? A recurring nightmare or an experience at the edge of sleep can feel intensely real without proving an external force. If you feel unsafe while awake, address that real-world safety concern directly rather than relying on the dream as evidence.",
    emotionalMeaning: "Terror may reflect helplessness or a threatened belief system; anger can show resistance; shame or guilt may attach to religious fears; calmness during confrontation can reflect a sense of agency. The emotion does not tell you that the threat exists—it shows how the experience was processed.",
    symbolicMeaning: "A demon can function as an image of an overwhelming fear, forbidden feeling, conflict, or perceived power. That symbolic reading is optional and should not erase the dreamer's spiritual framework or ordinary explanations.",
    spiritualMeaning: "Some religious traditions describe demons and spiritual warfare as meaningful beliefs. A tradition may guide prayer or discernment for someone who already practices it, but a dream cannot prove demonic activity, possession, a curse, or a command to take dangerous action. Seek trusted, grounded support if the experience is distressing.",
    wakingLifeMeaning: "This may resonate after frightening media, religious conflict, guilt, interpersonal threat, prolonged stress, sleep disruption, or a period of feeling unable to protect yourself. Repeated episodes at sleep-wake boundaries may also warrant discussing with a qualified health professional.",
    context: "Whether you were asleep, waking, or fully awake; the presence's behavior; your ability to move; your beliefs; recent media; and the aftermath all change the interpretation.",
    scenarios: [
      { title: "You pray or call on a trusted belief", meaning: "The dream may show how you seek protection and meaning under pressure without proving that the threat is supernatural." },
      { title: "You cannot move or speak", meaning: "A sleep-boundary experience can intensify the sense of attack; consider that possibility alongside personal and spiritual meaning." },
      { title: "You confront or escape the presence", meaning: "The ending may reflect restored agency, boundary-setting, or relief rather than victory over a literal entity." },
      { title: "The fear continues while fully awake", meaning: "Address the waking distress and safety directly; do not let the dream serve as a diagnosis or instruction." },
    ],
    reflectionQuestions: [
      "What did the presence do, and what were you trying to protect or resist?",
      "Could the episode have occurred while falling asleep, waking, or unable to move?",
      "Which part felt spiritual, and which part felt like fear, memory, or bodily sensation?",
      "What changed when you prayed, confronted, escaped, or received help?",
      "Is the distress limited to dreams, or is support needed for something happening while awake?",
    ],
    relatedDreams: [
      { slug: "fighting-a-demon", reason: "Use this when your active resistance and the effort to regain agency were the central experience." },
      { slug: "spiritual-attack", reason: "This broader spiritual framework may help compare tradition with uncertainty without treating the dream as proof." },
      { slug: "sleep-paralysis", reason: "This is relevant when inability to move, pressure, or a sleep-wake boundary was prominent." },
      { slug: "being-attacked", reason: "Choose this when the dream centers vulnerability and threat without a specifically spiritual framework." },
    ],
  },
};

export function applyStep4fSensitiveDependencies(dreams = []) {
  for (const dream of dreams) {
    if (step4fSensitiveDependencies[dream.slug]) Object.assign(dream, step4fSensitiveDependencies[dream.slug]);
  }
}
