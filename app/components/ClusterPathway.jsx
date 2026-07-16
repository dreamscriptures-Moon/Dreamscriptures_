import Link from "next/link";
import { getDreamHref } from "@/lib/routes";

export default function ClusterPathway({
  cluster,
}) {
  if (!cluster) return null;

  return (
    <section
      id="dream-cluster"
      className="mt-20 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
    >
      <h2 className="font-serif text-2xl md:text-3xl mb-5">
        Explore this emotional pathway
      </h2>

      <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-8">
        {cluster.intro}
      </p>

      <div className="grid gap-4 mb-8">
        {cluster.dreams
          ?.slice(0, 4)
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
        Explore {cluster.title.toLowerCase()}
      </Link>
    </section>
  );
}
