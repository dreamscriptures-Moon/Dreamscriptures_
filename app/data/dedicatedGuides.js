const registrations = [
  {
    slug: "basics", title: "Dream Basics: What Dreams Are, Why We Dream & How Dream Interpretation Works", category: "Dream Library", description: "Learn the fundamentals of dreaming, dream symbols, dream interpretation, emotions, memory, and the science behind why we dream.", readingTime: 18,
    toc: [["what-are-dreams", "What Are Dreams?"], ["why-we-dream", "Why Do We Dream?"], ["dream-symbols", "How Dream Symbols Work"], ["what-happens-when-we-sleep", "What Happens When We Sleep?"], ["why-dreams-feel-real", "Why Dreams Feel Real"], ["why-we-forget-dreams", "Why We Forget Dreams"], ["why-dreams-are-weird", "Why Dreams Are Weird"], ["can-you-control-dreams", "Can You Control Dreams?"], ["who-dreams", "Who Dreams?"]],
  },
  {
    slug: "history-culture", title: "History & Culture: How Civilizations Have Understood Dreams", category: "Dream History Library", description: "Explore more than 5,000 years of dream history, from ancient civilizations and philosophy to psychology and modern dream research.", readingTime: 30,
    toc: [["history-of-dreams", "Why Humans Have Always Interpreted Dreams"], ["timeline", "Historical Timeline"], ["why-every-civilization-dreamed", "Why Every Civilization Dreamed"], ["mesopotamia", "Ancient Mesopotamia"], ["egypt", "Ancient Egypt"], ["greece", "Ancient Greece"], ["rome", "Ancient Rome"], ["china", "Ancient China"], ["africa", "African Dream Traditions"], ["comparison", "How Civilizations Compared"], ["faq", "Frequently Asked Questions"]],
  },
  {
    slug: "interpretation", title: "Dream Interpretation Guide: How To Interpret Dreams Correctly", category: "Dream Interpretation Library", description: "Learn how to interpret dreams using emotions, context, symbols, colors, actions and recurring patterns instead of fixed meanings.", readingTime: 20,
    toc: [["what-is-dream-interpretation", "What Is Dream Interpretation?"], ["dreamscriptures-method", "The DreamScriptures Method"], ["how-to-interpret", "How To Interpret Dreams"], ["literal-vs-symbolic", "Literal vs Symbolic Dreams"], ["personal-symbols", "Personal vs Universal Symbols"], ["context-matters", "Why Context Matters"], ["looking-beyond-symbols", "Looking at the Whole Dream"], ["common-mistakes", "Common Mistakes"], ["practice", "Practice Together"], ["faq", "Frequently Asked Questions"]],
  },
  {
    slug: "psychology", title: "Dream Psychology: Freud, Jung & Modern Dream Theories Explained", category: "Dream Psychology Library", description: "Explore dream psychology through Freud, Jung, archetypes, memory, emotion, neuroscience and the major theories that explain why humans dream.", readingTime: 25,
    toc: [["what-is-dream-psychology", "What Is Dream Psychology?"], ["history", "History of Dream Psychology"], ["timeline", "Dream Psychology Timeline"], ["freud", "Freud’s Dream Theory"], ["jung", "Jung’s Dream Theory"], ["comparison", "Freud vs Jung"], ["faq", "Frequently Asked Questions"]],
  },
  {
    slug: "research", title: "Dream Research Library | Scientific Studies, Statistics & Modern Dream Science", category: "Dream Research Library", description: "Explore dream research, scientific studies, REM sleep, dream statistics, neuroscience, psychology and evidence-based discoveries about dreaming.", readingTime: 35,
    toc: [["research-overview", "What Dream Research Tells Us"], ["how-scientists-study-dreams", "How Scientists Study Dreams"], ["most-common-dreams", "Most Common Dreams"], ["dream-statistics", "Most Searched Dream Meanings"], ["research-timeline", "Research Timeline"], ["consensus", "Scientific Consensus"], ["future", "Where Dream Science Is Heading"], ["faq", "Frequently Asked Questions"]],
  },
  {
    slug: "science", title: "Dream Science: REM Sleep, Brain Activity & The Neuroscience of Dreams", category: "Dream Science Library", description: "Learn how dreams work through sleep cycles, REM sleep, brain activity, memory, emotion and modern neuroscience.", readingTime: 22,
    toc: [["what-is-dream-science", "What Is Dream Science?"], ["sleep-cycles", "How Sleep Cycles Work"], ["rem-sleep", "REM Sleep Explained"], ["brain-during-dreams", "The Brain During Dreams"], ["brain-research", "How Scientists Observe the Dreaming Brain"], ["brain-activity", "Current Scientific Understanding"], ["memory-emotion", "Memory & Emotion"], ["lucid-dreaming", "States of Dream Consciousness"], ["myth-vs-science", "Myth vs Science"], ["faq", "Frequently Asked Questions"]],
  },
  {
    slug: "spirituality", title: "Dream Spirituality: Biblical, Islamic & Spiritual Perspectives on Dreams", category: "Dream Spirituality Library", description: "Explore spiritual dreams through biblical references, Quranic narratives, prophetic traditions, symbolism and personal reflection across different traditions.", readingTime: 30,
    toc: [["what-are-spiritual-dreams", "What Are Spiritual Dreams?"], ["christian-perspectives", "Christian Perspectives"], ["islamic-perspectives", "Islamic Perspectives"], ["hindu-perspectives", "Hindu Perspectives"], ["african-perspectives", "African Perspectives"], ["comparison", "Compare Traditions"], ["bible-references", "Bible References"], ["quran-references", "Quranic References"], ["prophetic-figures", "Key Figures"], ["reflection", "Reflection Corner"], ["faq", "Frequently Asked Questions"]],
  },
  {
    slug: "wellness", title: "Dream Wellness: Sleep, Stress, Dream Recall & Healthy Dream Habits", category: "Dream Wellness Library", description: "Explore the connection between sleep, stress, emotional well-being, dream recall and healthy dreaming habits through practical science-based guidance.", readingTime: 18,
    toc: [["sleep-dreams", "Sleep, Dreams & Well-being"], ["healthy-sleep", "Healthy Dream Habits"], ["dream-recall", "Better Dream Recall"], ["nightmares-stress", "Stress & Nightmares"], ["emotional-wellbeing", "A Healthy Relationship With Dreams"], ["morning-reflection", "Morning Reflection"], ["faq", "Frequently Asked Questions"]],
  },
].map((guide) => ({ ...guide, toc: guide.toc.map(([id, title]) => ({ id, title })) }));

export const dedicatedGuides = registrations;
export function getDedicatedGuide(slug) { return registrations.find((guide) => guide.slug === slug); }
