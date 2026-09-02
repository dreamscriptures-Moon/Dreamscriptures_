import Link from "next/link";
import { getDreamHref } from "@/lib/routes";

export default function ClusterPathway({
  cluster,
  currentSlug,
}) {
  if (!cluster) return null;

  const currentGroup = cluster.groups?.find((group) =>
    group.dreams?.some((dream) => dream.slug === currentSlug)
  );
  const nearbyDreams = (currentGroup?.dreams || cluster.dreams || [])
    .filter((dream) => dream.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section
      id="dream-cluster"
      className="mt-20 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
    >
      <h2 className="font-serif text-2xl md:text-3xl mb-5">
        Place this dream in its broader context
      </h2>

      <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-8">
        {currentGroup?.description || cluster.editorialAnchor || cluster.intro}
      </p>

      <div className="grid gap-4 mb-8">
        {nearbyDreams
          .map((dream) => (
            <Link
              key={dream.slug}
              href={getDreamHref(dream)}
              className="border border-[#EAE6E1] rounded-md p-5 bg-[#FCFBF9] hover:border-[#C6A96B] transition-colors"
            >
              <h3 className="font-serif text-xl mb-2">
                {dream.title}
              </h3>

              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {dream.microSummary ||
                  dream.summary}
              </p>
            </Link>
          ))}
      </div>

      <Link
        href={`/guides/${cluster.slug}`}
        className="inline-flex items-center gap-2 text-sm border border-[#EAE6E1] rounded-full px-5 py-3 hover:border-[#C6A96B] transition-colors"
      >
        Compare experiences in {cluster.title.toLowerCase()}
      </Link>
    </section>
  );
}
