import Link from "next/link";

import { emotionalHubs } from "@/data/emotionalHubs";
import { shorten } from "@/lib/dreams";

const defaultTitles = [
  "Feelings Often Connected to This Experience",
  "Emotional Experiences People Explore Next",
  "Emotional Patterns Related to This Feeling",
];

export default function EmotionPathways({
  emotion,
  pathways,
  title = defaultTitles[0],
}) {
  const slugs = pathways || emotion?.emotionalPathways || [];
  const pathwayItems = slugs
    .map((slug) => ({ slug, emotion: emotionalHubs[slug] }))
    .filter((item) => item.emotion);

  if (pathwayItems.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-[#EAE6E1] pt-10">
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional pathways
      </p>

      <h2 className="mb-4 font-serif text-3xl md:text-4xl">{title}</h2>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
        Feelings often move in quiet patterns. One emotional thread can lead
        into another, helping the dream feel less random and more connected to
        what you may be carrying.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {pathwayItems.map(({ slug, emotion: pathway }) => (
          <Link
            key={slug}
            href={`/emotions/${slug}`}
            className="group block border-l border-[#D8C7A0] bg-white/75 px-5 py-4 transition hover:border-[#C6A96B] hover:bg-white"
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#8A8175]">
              Explore this feeling
            </span>

            <h3 className="mt-2 font-serif text-xl text-[#1A1A1A] transition group-hover:text-[#8F743C]">
              {pathway.title}
            </h3>

            {pathway.intro && (
              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                {shorten(pathway.intro, 170)}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
