import Link from "next/link";
import { shorten } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { getDreamHref } from "@/lib/routes";
import { getDreamImage } from "@/lib/dreamEngagement";

const relationshipGroups = [
  {
    key: "fear",
    title: "Dreams Where Fear Feels Close",
    matches: ["fear", "threat", "panic", "survival", "danger", "attack"],
  },
  {
    key: "vulnerability",
    title: "Dreams That Carry Vulnerability",
    matches: [
      "vulnerability",
      "exposure",
      "helplessness",
      "insecurity",
      "visibility",
      "judgment",
      "powerlessness",
    ],
  },
  {
    key: "transformation",
    title: "Dreams Where Something Is Changing",
    matches: [
      "transformation",
      "transition",
      "change",
      "growth",
      "healing",
      "identity",
      "rebirth",
    ],
  },
  {
    key: "overwhelm",
    title: "Dreams Where Everything Feels Like Too Much",
    matches: [
      "overwhelm",
      "pressure",
      "burnout",
      "instability",
      "loss-of-control",
      "restriction",
      "emotional-overflow",
    ],
  },
];

function formatRelationshipType(type = "") {
  return String(type).replace(/-/g, " ");
}

function getRelationshipGroup(type = "") {
  const normalizedType = normalizeSlug(type);

  return (
    relationshipGroups.find((group) =>
      group.matches.some((match) => normalizedType.includes(match))
    ) || {
      key: "other",
      title: "Dreams With a Similar Emotional Shape",
    }
  );
}

export default function RelatedDreams({ slugs = [], relatedDreams = [] }) {
  const relationships = slugs
    .map((item) => ({
      slug: typeof item === "string" ? item : item?.slug,
      reason: typeof item === "string" ? "" : item?.reason,
      relationshipType: typeof item === "string" ? "" : item?.relationshipType,
    }))
    .filter((item) => item.slug);

  const relationshipBySlug = new Map(
    relationships.map((item) => [normalizeSlug(item.slug), item])
  );

  if (relatedDreams.length === 0) {
    return null;
  }

  const groupedDreams = relatedDreams.reduce((groups, dream) => {
    const relationship = relationshipBySlug.get(normalizeSlug(dream.slug)) || {};
    const group = getRelationshipGroup(relationship.relationshipType);

    if (!groups.has(group.key)) {
      groups.set(group.key, { ...group, dreams: [] });
    }

    groups.get(group.key).dreams.push({ dream, relationship });
    return groups;
  }, new Map());

  return (
    <section
      id="related-dreams"
      className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Similar emotional experiences
      </p>
      <h2 className="mb-4 font-serif text-3xl md:text-4xl">
        Emotionally Related Dreams
      </h2>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
        These dreams stay near each other because they share emotional shape,
        inner pressure, or a similar movement beneath the symbol.
      </p>

      <div className="space-y-10">
        {Array.from(groupedDreams.values()).map((group) => (
          <div key={group.key}>
            <h3 className="mb-4 font-serif text-2xl text-[#1A1A1A]">
              {group.title}
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {group.dreams.map(({ dream, relationship }) => {
                const href = getDreamHref(dream);
                const image = getDreamImage(dream);
                const connection = relationship.reason || "";
                const preview = shorten(
                  connection || dream.microSummary || dream.summary,
                  190
                );

                return (
                  <Link
                    key={dream.slug}
                    href={href}
                    prefetch={false}
                    className="group grid grid-cols-[5rem_1fr] overflow-hidden border border-[#EAE6E1] bg-white/70 shadow-sm shadow-[#EAE6E1]/30 transition duration-200 hover:border-[#C6A96B] hover:bg-white hover:shadow-md"
                  >
                    <div className="min-h-28 bg-[#F3EDE2]">
                      {image ? <img /* eslint-disable-line @next/next/no-img-element */ src={image} alt={`${dream.title} dream interpretation illustration`} loading="lazy" decoding="async" width="160" height="180" className="h-full w-full object-cover" /> : <div aria-hidden="true" className="flex h-full items-center justify-center text-2xl text-[#8F743C]">◐</div>}
                    </div>
                    <div className="px-4 py-4">
                    {relationship.relationshipType && (
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">
                        {formatRelationshipType(relationship.relationshipType)}
                      </span>
                    )}

                    <h4 className="mt-1 font-serif text-lg leading-snug text-[#1A1A1A] transition-colors group-hover:text-[#8F743C]">
                      {dream.title}
                    </h4>

                    {preview && (
                      <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                        {connection && <span className="font-medium text-[#514A43]">Why it connects: </span>}
                        {preview}
                      </p>
                    )}
                    <span className="mt-3 inline-block text-xs text-[#8F743C] underline underline-offset-4">Explore this meaning</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
