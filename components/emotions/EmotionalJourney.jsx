import Link from "next/link";

import { emotionalHubs } from "@/data/emotionalHubs";
import { shorten } from "@/lib/dreams";

const journeySections = [
  {
    key: "before",
    title: "What Often Leads To This Feeling",
    copy:
      "These are emotional states that can quietly build before this feeling becomes clear in a dream.",
  },
  {
    key: "deeper",
    title: "Emotional Patterns Often Experienced Alongside This",
    copy:
      "Dreams may place these feelings close together because they often overlap inside real emotional experience.",
  },
  {
    key: "healing",
    title: "Healing & Growth Related To This Experience",
    copy:
      "These pathways point toward release, integration, steadiness, and the parts of the dream that may be asking for care.",
  },
];

export default function EmotionalJourney({ emotion }) {
  const journey = emotion?.emotionalJourney;

  if (!journey) {
    return null;
  }

  const sections = journeySections
    .map((section) => ({
      ...section,
      items: (journey[section.key] || [])
        .map((slug) => ({ slug, emotion: emotionalHubs[slug] }))
        .filter((item) => item.emotion),
    }))
    .filter((section) => section.items.length > 0);

  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-[#EAE6E1] pt-10">
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional journey
      </p>

      <h2 className="mb-4 font-serif text-3xl md:text-4xl">
        How This Feeling Can Move Through a Dream
      </h2>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
        A dream rarely holds one emotion in isolation. It may show what came
        before the feeling, what deepens it, and where healing or change begins
        to appear.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.key}>
            <h3 className="font-serif text-2xl text-[#1A1A1A]">
              {section.title}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B6B6B]">
              {section.copy}
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {section.items.map(({ slug, emotion: item }) => (
                <Link
                  key={slug}
                  href={`/emotions/${slug}`}
                  className="block border border-[#EAE6E1] bg-white/75 p-4 transition hover:border-[#C6A96B] hover:bg-white"
                >
                  <span className="font-serif text-lg text-[#1A1A1A]">
                    {item.title}
                  </span>

                  {item.intro && (
                    <span className="mt-2 block text-sm leading-relaxed text-[#6B6B6B]">
                      {shorten(item.intro, 120)}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
