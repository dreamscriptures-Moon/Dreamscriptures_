import Link from "next/link";

import { emotionalHubs } from "@/data/emotionalHubs";
import { dreams } from "@/data/dreams";
import { getDreamBySlug } from "@/lib/dreams";
import {
  getAuthorityClustersForProfile,
  getAuthorityTypeRegistrations,
  getDreamAuthorityProfile,
  getLongTailSectionsForProfile,
} from "@/lib/emotions/authority";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { getDreamHref } from "@/lib/routes";

function getLinkedDreams(slugs = []) {
  return slugs
    .map((slug) => getDreamBySlug(slug, dreams))
    .filter(Boolean)
    .slice(0, 5);
}

function getLinkedEmotions(slugs = []) {
  return slugs
    .map((slug) => ({ slug, emotion: emotionalHubs[slug] }))
    .filter((item) => item.emotion)
    .slice(0, 4);
}

export default function DreamSemanticAuthority({ dream }) {
  const profile = getDreamAuthorityProfile(dream?.slug || dream?.title);
  const clusters = getAuthorityClustersForProfile(profile);
  const authorityTypes = getAuthorityTypeRegistrations(profile, dreams);
  const longTailSections = getLongTailSectionsForProfile(profile);

  if (!profile || (clusters.length === 0 && authorityTypes.length === 0)) {
    return null;
  }

  return (
    <section
      id="emotional-authority-map"
      aria-labelledby="emotional-authority-map-heading"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional map
      </p>

      <h2
        id="emotional-authority-map-heading"
        className="mb-5 font-serif text-3xl md:text-4xl"
      >
        {profile.title}
      </h2>

      <nav
        aria-label={`${dream.title} emotional pathways`}
        className="mb-8 flex flex-wrap gap-2"
      >
        {clusters.map((cluster) => (
          <a
            key={cluster.key}
            href={`#${cluster.key}`}
            className="border border-[#EAE6E1] bg-white/70 px-3 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]"
          >
            {cluster.title}
          </a>
        ))}

        {authorityTypes.map((type) => (
          <a
            key={type.anchorId}
            href={`#${type.anchorId}`}
            className="border border-[#EAE6E1] bg-white/70 px-3 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]"
          >
            {type.label}
          </a>
        ))}

        {longTailSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="border border-[#EAE6E1] bg-white/70 px-3 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]"
          >
            {section.title}
          </a>
        ))}
      </nav>

      <div className="space-y-10">
        {clusters.map((cluster) => {
          const linkedDreams = getLinkedDreams(cluster.dreamSlugs);
          const linkedEmotions = getLinkedEmotions(cluster.emotionSlugs);

          return (
            <section
              key={cluster.key}
              id={cluster.key}
              aria-labelledby={`${cluster.key}-heading`}
              className="scroll-mt-28"
            >
              <h3
                id={`${cluster.key}-heading`}
                className="font-serif text-2xl md:text-3xl"
              >
                {cluster.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {(cluster.searchIntents || []).map((intent) => (
                  <span
                    key={intent}
                    className="border border-[#EAE6E1] bg-white/70 px-3 py-1 text-xs text-[#6B6B6B]"
                  >
                    {intent}
                  </span>
                ))}
              </div>

              {linkedDreams.length > 0 && (
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {linkedDreams.map((item) => (
                    <Link
                      key={item.slug}
                      href={getDreamHref(item)}
                      className="group border-l border-[#D8C7A0] bg-white/75 px-4 py-3 transition hover:border-[#C6A96B] hover:bg-white"
                    >
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">
                        Emotionally similar dream
                      </span>
                      <span className="mt-1 block font-serif text-lg text-[#1A1A1A] group-hover:text-[#8F743C]">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {linkedEmotions.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {linkedEmotions.map(({ slug, emotion }) => (
                    <Link
                      key={slug}
                      href={`/emotions/${slug}`}
                      className="border border-[#EAE6E1] bg-white/70 px-3 py-1 text-sm text-[#5F574E] transition hover:border-[#C6A96B]"
                    >
                      {emotion.title}
                    </Link>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        {authorityTypes.length > 0 && (
          <section
            id="authority-types"
            aria-labelledby="authority-types-heading"
            className="scroll-mt-28"
          >
            <h3
              id="authority-types-heading"
              className="font-serif text-2xl md:text-3xl"
            >
            Common Dream Variations</h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {authorityTypes.map((type) => (
                <section
                  key={type.anchorId}
                  id={type.anchorId}
                  aria-labelledby={`${type.anchorId}-heading`}
                  className="scroll-mt-28 border-l border-[#D8C7A0] bg-white/75 px-4 py-3"
                >
                  <h4
                    id={`${type.anchorId}-heading`}
                    className="font-serif text-lg text-[#1A1A1A]"
                  >
                    {type.label}
                  </h4>
                  <Link
                    href={type.href}
                    className="mt-2 inline-block text-sm text-[#8F743C] underline underline-offset-4"
                  >
                    Read full interpretation →
                  </Link>
                </section>
              ))}
            </div>
          </section>
        )}

        {longTailSections.length > 0 && (
          <section
            id="long-tail-pathways"
            aria-labelledby="long-tail-pathways-heading"
            className="scroll-mt-28"
          >
            <h3
              id="long-tail-pathways-heading"
              className="font-serif text-2xl md:text-3xl"
            >
              Questions this dream can hold space for
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {longTailSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-28 border border-[#EAE6E1] bg-white/70 px-4 py-3"
                >
                  <h4
                    id={`${section.id}-heading`}
                    className="font-serif text-lg text-[#1A1A1A]"
                  >
                    {section.title}
                  </h4>
                </section>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
