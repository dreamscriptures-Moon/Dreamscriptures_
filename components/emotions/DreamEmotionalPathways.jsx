import Link from "next/link";

import { dreams } from "@/data/dreams";
import { getEmotionalRoutingItems } from "@/lib/emotionalRouting";
import { shorten } from "@/lib/dreams";
import { getDreamHref } from "@/lib/routes";

export default function DreamEmotionalPathways({ dream }) {
  const pathways = getEmotionalRoutingItems(dream, dreams, 6);

  if (pathways.length === 0) {
    return null;
  }

  return (
    <section
      id="emotional-pathways"
      aria-labelledby="emotional-pathways-heading"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional routing
      </p>

      <h2 id="emotional-pathways-heading" className="mb-4 font-serif text-3xl md:text-4xl">
        Dreams Connected by Emotional Pattern
      </h2>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
        These dreams are connected by the feeling underneath them, not only by
        shared symbols. If this dream felt familiar emotionally, these pathways
        may help you follow the same subconscious pattern from another angle.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {pathways.map(({ dream: item, pathway, reason }) => {
          const href = getDreamHref(item);
          const preview = shorten(
            reason || item.microSummary || item.summary || item.description,
            185
          );

          return (
            <Link
              key={item.slug}
              href={href}
              className="group block border-l border-[#D8C7A0] bg-white/75 px-5 py-4 transition hover:border-[#C6A96B] hover:bg-white"
            >
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">
                {pathway}
              </span>

              <h3 className="mt-2 font-serif text-xl leading-snug text-[#1A1A1A] transition group-hover:text-[#8F743C]">
                {item.title}
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
