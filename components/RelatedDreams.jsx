import Link from "next/link";
import { dreams } from "@/data/dreams";
import { getDreamsBySlugs, shorten } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";

export default function RelatedDreams({ slugs = [] }) {
  const relationships = slugs
    .map((item) => ({
      slug: typeof item === "string" ? item : item?.slug,
      reason: typeof item === "string" ? "" : item?.reason,
    }))
    .filter((item) => item.slug);

  const reasonBySlug = new Map(
    relationships.map((item) => [normalizeSlug(item.slug), item.reason])
  );

  const relatedDreams = getDreamsBySlugs(relationships, dreams);

  if (relatedDreams.length === 0) {
    return null;
  }

  return (
    <section
      id="related-dreams"
      className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional pathways
      </p>
      <h2 className="mb-8 font-serif text-3xl md:text-4xl">
        Dreams with similar emotional patterns
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {relatedDreams.map((dream) => {
          const href = `/dreams/${normalizeSlug(dream.slug || dream.title)}`;
          const reason = reasonBySlug.get(normalizeSlug(dream.slug));
          const preview = shorten(reason || dream.microSummary || dream.summary, 190);

          return (
            <Link
              key={dream.slug}
              href={href}
              className="group block border-l border-[#D8C7A0] bg-white/70 px-5 py-4 shadow-sm shadow-[#EAE6E1]/30 transition duration-200 hover:border-[#C6A96B] hover:bg-white hover:shadow-md"
            >
              <h3 className="font-serif text-lg leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#8F743C]">
                {dream.title}
              </h3>

              {preview && (
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  {preview}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
