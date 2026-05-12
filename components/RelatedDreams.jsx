import Link from "next/link";
import { dreams } from "@/data/dreams";
import { getDreamsBySlugs, shorten } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";

export default function RelatedDreams({ slugs = [] }) {
  const relatedDreams = getDreamsBySlugs(slugs, dreams);

  if (relatedDreams.length === 0) {
    return null;
  }

  return (
    <section
      id="related-dreams"
      className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Keep exploring
      </p>
      <h2 className="mb-8 font-serif text-4xl md:text-5xl">
        Related dreams
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {relatedDreams.map((dream) => {
          const href = `/dreams/${normalizeSlug(dream.slug || dream.title)}`;
          const preview = shorten(dream.microSummary || dream.summary, 210);

          return (
            <Link
              key={dream.slug}
              href={href}
              className="group block rounded-2xl border border-[#E8E2D9] bg-white/70 p-5 shadow-sm shadow-[#EAE6E1]/40 transition duration-200 hover:-translate-y-0.5 hover:border-[#C6A96B] hover:bg-white hover:shadow-md"
            >
              <h3 className="font-serif text-xl leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#8F743C]">
                {dream.title}
              </h3>

              {preview && (
                <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
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
