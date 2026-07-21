import { guides } from "@/app/data/guides";
import { getClusterGuides } from "@/lib/clusterGuides";
import { dedicatedGuides } from "@/app/data/dedicatedGuides";

const libraryGuides = [
  ["basics", "Dream Basics", "Learn what dreams are, why we dream, and how thoughtful interpretation works."],
  ["interpretation", "Dream Interpretation Guide", "Interpret dreams through emotion, context, symbols, actions, and recurring patterns."],
  ["history-culture", "Dream History & Culture", "Explore how civilizations and traditions have understood dreams across history."],
  ["psychology", "Dream Psychology", "Explore Freud, Jung, memory, emotion, and modern psychological dream theories."],
  ["science", "Dream Science", "Understand REM sleep, brain activity, memory, and the neuroscience of dreaming."],
  ["research", "Dream Research Library", "Review scientific studies, statistics, and evidence-based discoveries about dreams."],
  ["spirituality", "Dream Spirituality", "Explore biblical, Islamic, cultural, and spiritual perspectives on dreams."],
  ["wellness", "Dream Wellness", "Build healthy sleep, reflection, and dream-recall habits."],
  ["types-of-dreams", "12 Types of Dreams", "Compare recurring, lucid, prophetic, emotional, symbolic, anxiety, and other dream types."],
].map(([slug, title, description]) => ({ slug, title, description, category: "Dream Library" }));

export function getAllGuideEntries() {
  const entries = [...dedicatedGuides, ...libraryGuides, ...guides, ...getClusterGuides()];
  return entries.filter((guide, index) => entries.findIndex((item) => item.slug === guide.slug) === index);
}
