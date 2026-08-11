import { applyCategoryEditorialDepth } from "./categoryEditorialDepth.js";

export const categoriesData = {
  anxiety: {
    title: "Anxiety Dreams",
    emotionalThemes: ["Stress", "Overwhelm", "Uncertainty", "Pressure"],
    emotionalNature:
      "Anxiety dreams often reflect emotional pressure, anticipatory stress, insecurity, or situations where the mind keeps rehearsing what still feels unresolved or difficult to manage.",

    intro: `
Anxiety dreams often appear during periods of emotional pressure, uncertainty, stress, or situations where something in your life feels unresolved beneath the surface.

These dreams can reflect emotional overwhelm, fear of failure, vulnerability, insecurity, emotional exhaustion, or the feeling that something is becoming difficult to emotionally manage or avoid.

Even when the dream symbols change, the emotional pattern underneath is often connected to tension, instability, pressure, or situations your mind is still trying to process emotionally.
    `,

    framework: [
      {
        title: "Avoidance-based dreams",

        description:
          "These dreams often appear when something in your life feels emotionally difficult to face directly.",

        dreams: [
          "being-chased",
          "hiding",
          "running-away",
        ],
      },

      {
        title: "Loss of control dreams",

        description:
          "These dreams commonly reflect instability, uncertainty, emotional overwhelm, or fear that something important is slipping beyond your control.",

        dreams: [
          "falling",
          "drowning",
          "teeth-falling-out",
        ],
      },

      {
        title: "Pressure and performance dreams",

        description:
          "These dreams often connect to expectations, self-pressure, fear of failure, or anxiety about being judged or unprepared.",

        dreams: [
          "being-late",
          "failing-a-test",
          "missing-a-flight",
        ],
      },

      {
        title: "Threat and danger dreams",

        description:
          "These dreams can reflect emotional threat, vulnerability, fear, mistrust, or situations that feel psychologically unsafe or emotionally intense.",

        dreams: [
          "being-attacked",
          "snakes",
          "being-shot",
        ],
      },
    ],
  },

  fear: {
    title: "Fear Dreams",
    emotionalThemes: ["Threat", "Vulnerability", "Urgency", "Safety"],
    emotionalNature:
      "Fear dreams often carry urgency, emotional intensity, vulnerability, or situations where the mind feels emotionally threatened, exposed, unsafe, or unable to relax into stability.",
  },

  transformation: {
    title: "Transformation Dreams",
    emotionalThemes: ["Change", "Growth", "Identity shift", "Letting go"],
    emotionalNature:
      "Transformation dreams often reflect emotional movement, identity shifts, endings, growth, or periods where something internally no longer feels the same.",
  },

  spiritual: {
    title: "Spiritual Dreams",
    emotionalThemes: ["Awareness", "Inner guidance", "Meaning", "Connection"],
    emotionalNature:
      "Spiritual dreams often carry emotional depth, intuition, symbolic awareness, or moments where the inner life feels connected to meaning beyond ordinary explanation.",
  },

  relationship: {
    title: "Relationship Dreams",
    emotionalThemes: ["Attachment", "Closeness", "Conflict", "Longing"],
    emotionalNature:
      "Relationship dreams often reflect attachment, emotional distance, trust, longing, unresolved conversations, or the way closeness and vulnerability are being processed internally.",
  },

  relationships: {
    title: "Relationship Dreams",
    emotionalThemes: ["Attachment", "Closeness", "Conflict", "Longing"],
    emotionalNature:
      "Relationship dreams often reflect attachment, emotional distance, trust, longing, unresolved conversations, or the way closeness and vulnerability are being processed internally.",
  },

  love: {
    title: "Love Dreams",
    emotionalThemes: ["Desire", "Tenderness", "Longing", "Emotional openness"],
    emotionalNature:
      "Love dreams often reflect emotional openness, desire, affection, longing, repair, or the part of the inner life that wants connection to feel safe, mutual, and emotionally real.",
  },

  intimacy: {
    title: "Intimacy Dreams",
    emotionalThemes: ["Vulnerability", "Desire", "Trust", "Exposure"],
    emotionalNature:
      "Intimacy dreams often revolve around vulnerability, desire, trust, emotional exposure, or the tension between wanting closeness and needing safety.",
  },

  "hidden emotions": {
    title: "Hidden Emotions Dreams",
    emotionalThemes: ["Suppression", "Avoidance", "Inner pressure", "Disclosure"],
    emotionalNature:
      "Hidden emotion dreams often emerge when feelings have been contained, avoided, minimized, or left unnamed long enough for the subconscious to express them through symbols.",
  },

  hidden: {
    title: "Hidden Emotion Dreams",
    emotionalThemes: ["Suppression", "Avoidance", "Inner pressure", "Disclosure"],
    emotionalNature:
      "Hidden emotion dreams often emerge when feelings have been contained, avoided, minimized, or left unnamed long enough for the subconscious to express them through symbols.",
  },

  emotion: {
    title: "Emotion Dreams",
    emotionalThemes: ["Feeling", "Processing", "Sensitivity", "Release"],
    emotionalNature:
      "Emotion dreams often reflect feelings becoming visible, intensified, released, or reorganized as the mind tries to give shape to what has been felt more than fully understood.",
  },

  "inner conflict": {
    title: "Inner Conflict Dreams",
    emotionalThemes: ["Ambivalence", "Tension", "Choice", "Self-questioning"],
    emotionalNature:
      "Inner conflict dreams often reflect competing needs, difficult choices, self-questioning, or emotional tension between who you have been and what now feels true.",
  },

  transitions: {
    title: "Transition Dreams",
    emotionalThemes: ["In-between", "Adjustment", "Uncertainty", "Movement"],
    emotionalNature:
      "Transition dreams often appear when life feels in-between, emotionally unsettled, or quietly reorganizing around a change that has not fully become familiar yet.",
  },

  identity: {
    title: "Identity Dreams",
    emotionalThemes: ["Self-image", "Belonging", "Recognition", "Change"],
    emotionalNature:
      "Identity dreams often reflect self-image, belonging, confidence, shame, recognition, or the emotional work of understanding who you are becoming.",
  },

  work: {
    title: "Work Dreams",
    emotionalThemes: ["Responsibility", "Performance", "Pressure", "Competence"],
    emotionalNature:
      "Work dreams often reflect responsibility, performance pressure, competence, ambition, or the emotional weight of expectations placed on your time, role, or ability.",
  },

  money: {
    title: "Money Dreams",
    emotionalThemes: ["Security", "Worth", "Scarcity", "Control"],
    emotionalNature:
      "Money dreams often carry feelings around security, self-worth, scarcity, dependence, responsibility, or whether life feels stable enough to trust.",
  },

  death: {
    title: "Death Dreams",
    emotionalThemes: ["Ending", "Release", "Grief", "Transition"],
    emotionalNature:
      "Death dreams often reflect endings, grief, emotional release, fear of loss, or the sense that one stage of life is closing while another is not yet fully clear.",
  },

  water: {
    title: "Water Dreams",
    emotionalThemes: ["Emotion", "Depth", "Flow", "Overwhelm"],
    emotionalNature:
      "Water dreams often mirror emotional depth, movement, cleansing, overwhelm, or the changing state of feelings that may be calm, unclear, powerful, or difficult to contain.",
  },

  animals: {
    title: "Animal Dreams",
    emotionalThemes: ["Instinct", "Protection", "Wildness", "Sensitivity"],
    emotionalNature:
      "Animal dreams often reflect instinct, protection, fear, loyalty, aggression, sensitivity, or parts of the self that communicate through feeling before language.",
  },

  body: {
    title: "Body Dreams",
    emotionalThemes: ["Embodiment", "Exposure", "Health", "Control"],
    emotionalNature:
      "Body dreams often express vulnerability, self-perception, health anxiety, shame, strength, or emotions that feel physically held rather than clearly spoken.",
  },

  "lucid dreams": {
    title: "Lucid Dreams",
    emotionalThemes: ["Awareness", "Agency", "Curiosity", "Control"],
    emotionalNature:
      "Lucid dreams often involve awareness, agency, curiosity, control, or the emotional experience of realizing that the inner world can be observed and shaped while it is unfolding.",
  },

  "self awareness": {
    title: "Self-Awareness Dreams",
    emotionalThemes: ["Self-observation", "Identity", "Recognition", "Inner honesty"],
    emotionalNature:
      "Self-awareness dreams bring attention to how you see yourself, what you conceal or overlook, and where your inner experience differs from the identity you present to others.",
    intro:
      "These dreams turn attention toward the dreamer. Mirrors, doubles, exposed bodies, changed appearances, old rooms, and moments of being watched can all make an attitude, habit, need, or self-image easier to notice.",
    distinctions: [
      { title: "Self-awareness and identity", description: "Identity dreams often ask who you are becoming; self-awareness dreams may simply reveal what you are feeling, doing, or avoiding right now." },
      { title: "Observation and judgment", description: "Seeing yourself clearly is different from condemning yourself. Shame in the dream may indicate fear of evaluation, while curiosity can support honest recognition." },
    ],
    recurringScenarios: [
      "Seeing an unfamiliar or altered reflection",
      "Watching yourself from another point of view",
      "Realizing that something private is visible",
      "Returning to a place associated with an earlier version of yourself",
    ],
    interpretationQuestions: [
      "What did the dream make visible that I normally overlook?",
      "Did I respond to myself with curiosity, embarrassment, pride, or rejection?",
      "Where does my private experience differ from how I appear to others?",
    ],
    examples: [
      { title: "Illustrative example: an altered mirror", description: "A reflection that looks older, younger, or unfamiliar may focus the dream on changing self-perception rather than on the mirror as a fixed symbol." },
    ],
    reflectionPrompts: ["Name one detail you recognized immediately and one that felt unlike you."],
    relatedConcepts: ["Identity", "Hidden emotions", "Personal growth"],
  },

  "personal growth": {
    title: "Personal Growth Dreams",
    emotionalThemes: ["Learning", "Practice", "Change", "Capability"],
    emotionalNature:
      "Personal-growth dreams often explore the uneven process of developing a skill, changing a pattern, accepting responsibility, or becoming more capable through experience.",
    intro:
      "Growth in dreams is not always shown as success. Climbing, repairing, learning, tending a garden, repeating a task, or meeting an obstacle can portray progress that is still unfinished.",
    distinctions: [
      { title: "Growth and transformation", description: "Transformation emphasizes a major change of form or identity. Personal growth may be quieter: practice, correction, patience, and small gains." },
      { title: "Difficulty and failure", description: "An obstacle can reveal the part of a process that needs attention; it does not automatically mean that progress has stopped." },
    ],
    recurringScenarios: ["Climbing or moving upward", "Learning an unfamiliar task", "Repairing something damaged", "Caring for something that gradually develops"],
    interpretationQuestions: ["What ability was the dream asking me to use?", "Was progress steady, forced, interrupted, or supported?", "What did I do after making a mistake?"],
    examples: [{ title: "Illustrative example: a difficult climb", description: "A steep climb with secure footing may emphasize sustained effort, while crumbling steps may place more attention on preparation or support." }],
    reflectionPrompts: ["Compare the stage you reached in the dream with the stage you are actually in now."],
    relatedConcepts: ["Transformation", "Self awareness", "Life transitions"],
  },

  "life transitions": {
    title: "Life Transition Dreams",
    emotionalThemes: ["Departure", "Arrival", "Adjustment", "In-between states"],
    emotionalNature:
      "Life-transition dreams often give form to leaving one role, place, relationship, or routine before the next stage feels fully established.",
    intro:
      "Stations, airports, unfamiliar houses, moving vehicles, packed belongings, missed departures, and thresholds are common because they hold both an ending and a possible destination.",
    distinctions: [
      { title: "Transition and uncertainty", description: "Uncertainty centers on not knowing; transition includes an actual or anticipated movement from one state to another." },
      { title: "Chosen and imposed change", description: "Driving or packing voluntarily can feel different from being carried away, evicted, delayed, or left behind." },
    ],
    recurringScenarios: ["Packing, moving, or leaving a familiar place", "Waiting for transport", "Missing an exit or departure", "Entering an unfamiliar home, school, or workplace"],
    interpretationQuestions: ["What was I leaving, and had I finished with it?", "Did the destination feel chosen or imposed?", "What or whom was I trying to take with me?"],
    examples: [{ title: "Illustrative example: waiting at a station", description: "Waiting calmly may reflect readiness that respects timing; frantic platform changes may emphasize conflicting plans or fear of missing the next stage." }],
    reflectionPrompts: ["List what has already ended, what is still in-between, and what has genuinely begun."],
    relatedConcepts: ["Uncertainty", "New beginnings", "Personal growth"],
  },

  "emotional awareness": {
    title: "Emotional Awareness Dreams",
    emotionalThemes: ["Recognition", "Naming feelings", "Emotional contrast", "Expression"],
    emotionalNature:
      "Emotional-awareness dreams make a feeling noticeable through intensity, contrast, bodily sensation, atmosphere, or a response that surprises the dreamer.",
    intro:
      "The useful question in this category is not only what a symbol represents, but what happened emotionally around it. Calm water and threatening water, for example, may belong to very different inner experiences.",
    distinctions: [
      { title: "Awareness and overwhelm", description: "Awareness allows a feeling to be noticed and described. Overwhelm occurs when its intensity becomes difficult to contain or organize." },
      { title: "Dream emotion and waking opinion", description: "A dream response can differ from what you think you should feel, revealing ambivalence without proving a hidden truth." },
    ],
    recurringScenarios: ["Feeling unexpectedly calm during danger", "Crying or laughing without knowing why", "A setting changing with the mood", "Waking with one emotion stronger than the imagery"],
    interpretationQuestions: ["Which feeling arrived first, and what changed it?", "Did my emotional response fit the event in the dream?", "Where do I experience a similar feeling without naming it?"],
    examples: [{ title: "Illustrative example: calm during a storm", description: "Feeling peaceful in a violent storm may shift the focus from danger to confidence, acceptance, or emotional distance; the surrounding details help distinguish them." }],
    reflectionPrompts: ["Describe the dream once using only feelings and changes in intensity, without interpreting the symbols."],
    relatedConcepts: ["Hidden emotions", "Self awareness", "Anxiety"],
  },

  uncertainty: {
    title: "Uncertainty Dreams",
    emotionalThemes: ["Ambiguity", "Waiting", "Incomplete information", "Decision pressure"],
    emotionalNature:
      "Uncertainty dreams often hold the dreamer between possible directions, without enough information to feel settled about timing, safety, or the next decision.",
    intro:
      "Fog, darkness, unknown invitations, missing destinations, unreadable signs, and unfamiliar roads can all express the experience of acting before the full picture is available.",
    distinctions: [
      { title: "Uncertainty and fear", description: "Fear anticipates danger. Uncertainty means the outcome is unknown; it can include curiosity, hope, caution, or fear depending on the dream." },
      { title: "Uncertainty and being lost", description: "Being lost emphasizes orientation. Other uncertainty dreams may involve knowing where you are but not what a message, person, or future event means." },
    ],
    recurringScenarios: ["Moving through fog or darkness", "Receiving incomplete directions", "Waiting for an answer or arrival", "Choosing between routes with no clear sign"],
    interpretationQuestions: ["What information was missing?", "Did I need certainty before taking the next step?", "Which response—waiting, asking, testing, or choosing—was available in the dream?"],
    examples: [{ title: "Illustrative example: two unmarked roads", description: "Two roads may focus on a decision, but the emotional difference between curiosity and panic shows whether possibility or pressure is more central." }],
    reflectionPrompts: ["Separate what is known, what is assumed, and what can only be learned by taking a next step."],
    relatedConcepts: ["Life transitions", "Anxiety", "Decision making"],
  },
};

applyCategoryEditorialDepth(categoriesData);
