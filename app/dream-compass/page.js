import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import EditorialAdUnit from "@/components/EditorialAdUnit";
import {
  dreamCompassContextRoutes,
  dreamCompassEmotionRoutes,
  dreamCompassSubjects,
} from "@/data/dreamCompass";
import { dreams } from "@/data/dreams";
import DreamCompass from "./DreamCompass";

export const metadata = {
  title: "Dream Compass | Find Meaning in Your Dream",
  description:
    "Use what you remember about the dream and how it felt to find a DreamScriptures reading that fits your experience.",
  alternates: { canonical: "/dream-compass" },
};

function firstText(...values) {
  return values.find((value) => typeof value === "string" && value.trim()) || "";
}

function authoredExcerpt(...values) {
  const text = firstText(...values).replace(/\r/g, "").trim();
  if (!text) return "";

  const paragraph = text
    .split(/\n\s*\n|\n+/)
    .map((item) => item.replace(/^#{1,6}\s*/, "").replace(/\s+/g, " ").trim())
    .find((item) => item.length >= 60) || text.replace(/\s+/g, " ");

  if (paragraph.length <= 440) return paragraph;

  const sentences = paragraph.match(/[^.!?]+[.!?]+/g) || [];
  let excerpt = "";

  for (const sentence of sentences) {
    if (`${excerpt} ${sentence}`.trim().length > 440) break;
    excerpt = `${excerpt} ${sentence}`.trim();
  }

  if (excerpt.length >= 120) return excerpt;

  const boundary = paragraph.lastIndexOf(" ", 437);
  return `${paragraph.slice(0, boundary > 120 ? boundary : 437).trim()}...`;
}

function createProfile(slug, subjectBySlug) {
  const dream = dreams.find((item) => item.slug === slug);
  if (!dream) return null;
  const subject = subjectBySlug.get(slug);
  const fallbackActions = [
    { label: "It was there, and I watched it", primarySlug: slug, alternativeSlugs: [] },
    { label: "I moved toward it or interacted with it", primarySlug: slug, alternativeSlugs: [] },
    { label: "I tried to get away from it", primarySlug: slug, alternativeSlugs: [] },
    { label: "I could not tell what was happening", primarySlug: slug, alternativeSlugs: [] },
  ];
  const unsureAction = {
    label: "I do not remember what happened next",
    primarySlug: slug,
    alternativeSlugs: [],
  };

  return {
    slug: dream.slug,
    title: dream.title,
    featured: Boolean(subject),
    actions: subject ? [...subject.actions, unsureAction] : fallbackActions,
    signals: {
      emotions: Object.entries(dreamCompassEmotionRoutes)
        .filter(([, slugs]) => slugs.includes(slug))
        .map(([emotion]) => emotion),
      contexts: Object.entries(dreamCompassContextRoutes)
        .filter(([, slugs]) => slugs.includes(slug))
        .map(([context]) => context),
    },
    excerpts: {
      balanced: authoredExcerpt(dream.compassExcerpt?.balanced, dream.microSummary, dream.shortSummary, dream.summary, dream.description),
      emotional: authoredExcerpt(dream.compassExcerpt?.emotional, dream.emotionalMeaning, dream.emotional, dream.description),
      symbolic: authoredExcerpt(dream.compassExcerpt?.symbolic, dream.symbolicMeaning, dream.symbolic, dream.description),
      biblical: authoredExcerpt(dream.compassExcerpt?.biblical, dream.biblicalMeaning, dream.spiritualMeaning, dream.spiritual),
      practical: authoredExcerpt(dream.compassExcerpt?.practical, dream.wakingLifeMeaning, dream.wakingLife, dream.description),
    },
    sections: {
      balanced: firstText(
        dream.symbolicMeaning, dream.symbolic,
        dream.emotionalMeaning, dream.emotional,
        dream.spiritualMeaning, dream.spiritual,
        dream.biblicalMeaning, dream.biblical
      ) ? "quick-takeaways" : "dream-meaning",
      emotional: firstText(dream.emotionalMeaning, dream.emotional) ? "emotional-meaning" : "dream-meaning",
      symbolic: firstText(dream.symbolicMeaning, dream.symbolic) ? "symbolic-meaning" : "dream-meaning",
      spiritual: firstText(dream.spiritualMeaning, dream.spiritual) ? "spiritual-meaning" : "dream-meaning",
      biblical: "biblical-perspective",
      psychological: Array.isArray(dream.subconsciousPatterns) && dream.subconsciousPatterns.length > 0
        ? "subconscious-patterns"
        : firstText(dream.emotionalMeaning, dream.emotional) ? "emotional-meaning" : "dream-meaning",
      practical: firstText(dream.wakingLifeMeaning, dream.wakingLife) ? "real-life-meaning" : "dream-meaning",
    },
    reflectionQuestions: (dream.reflectionQuestions || []).slice(0, 4),
  };
}

export default function DreamCompassPage() {
  const subjectBySlug = new Map(
    dreamCompassSubjects.map((subject) => [subject.slug, subject])
  );
  const candidateSlugs = new Set(dreamCompassSubjects.map(({ slug }) => slug));

  for (const subject of dreamCompassSubjects) {
    for (const action of subject.actions) {
      candidateSlugs.add(action.primarySlug);
      action.alternativeSlugs.forEach((slug) => candidateSlugs.add(slug));
    }
  }

  Object.values(dreamCompassEmotionRoutes).forEach((slugs) =>
    slugs.forEach((slug) => candidateSlugs.add(slug))
  );
  Object.values(dreamCompassContextRoutes).forEach((slugs) =>
    slugs.forEach((slug) => candidateSlugs.add(slug))
  );

  const profiles = [...candidateSlugs]
    .map((slug) => createProfile(slug, subjectBySlug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A]">
      <SiteHeader />
      <DreamCompass profiles={profiles} />
      <div className="mx-auto max-w-4xl px-6 pb-12 md:pb-20">
        <EditorialAdUnit />
      </div>
      <SiteFooter />
    </main>
  );
}
