import Link from "next/link";
import { notFound } from "next/navigation";

import EmotionalJourney from "@/components/emotions/EmotionalJourney";
import EmotionPathways from "@/components/emotions/EmotionPathways";
import DreamPageClientNav from "@/app/dreams/[slug]/DreamPageClientNav";
import { emotionalHubs } from "@/data/emotionalHubs";
import { dreams } from "@/data/dreams";
import { getDreamBySlug, shorten } from "@/lib/dreams";
import { getAuthorityProfilesForEmotion } from "@/lib/emotions/authority";
import { emotionalDomains } from "@/lib/emotions/domain";
import { normalizeSlug } from "@/lib/normalizeSlug";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

function getEmotion(slug) {
  return emotionalHubs[normalizeSlug(slug)];
}

export function generateStaticParams() {
  return Object.keys(emotionalHubs).map((slug) => ({
    slug: normalizeSlug(slug),
  }));
}

export async function generateMetadata({ params }) {
  const slug = normalizeSlug((await params)?.slug);
  const emotion = getEmotion(slug);

  if (!emotion) return {};

  return {
    title: `${emotion.title} Dream Meaning & Interpretation`,
    description: emotion.intro,
    alternates: {
      canonical: `/emotions/${slug}`,
    },
  };
}

function DreamLinkGrid({ slugs = [], fallbackFromEmotion }) {
  const matched = slugs
    .map((slug) => getDreamBySlug(slug, dreams))
    .filter(Boolean);

  const fallback =
    matched.length > 0
      ? []
      : dreams
          .filter((d) =>
            d.emotionalConnections?.includes(fallbackFromEmotion)
          )
          .slice(0, 6);

  const items = matched.length > 0 ? matched : fallback;

  if (!items.length) return null;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((dream) => (
        <Link
          key={dream.slug}
          href={`/dreams/${normalizeSlug(dream.slug)}`}
          className="block border border-[#EAE6E1] p-5 hover:border-[#C6A96B]"
        >
          <h3 className="font-serif text-xl">{dream.title}</h3>
          <p className="text-sm mt-2 text-[#6B6B6B]">
            {shorten(
              dream.microSummary ||
                dream.summary ||
                dream.description,
              140
            )}
          </p>
        </Link>
      ))}
    </div>
  );
}

function TextListSection({ id, eyebrow, title, items = [] }) {
  if (!items.length) return null;

  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      {eyebrow && (
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
          {eyebrow}
        </p>
      )}

      <h2 className="mb-5 font-serif text-2xl md:text-3xl">{title}</h2>

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="border border-[#EAE6E1] bg-white/70 px-4 py-3 text-sm leading-relaxed text-[#5F574E]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function ParagraphSection({ id, eyebrow, title, paragraphs = [] }) {
  if (!paragraphs.length) return null;

  return (
    <section id={id} className="mt-10 scroll-mt-28 space-y-5 text-[#4E463D]">
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="leading-relaxed">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

function RelatedEmotionLinks({ slugs = [] }) {
  const items = slugs
    .map((relatedSlug) => ({
      slug: relatedSlug,
      emotion: emotionalHubs[relatedSlug],
    }))
    .filter((item) => item.emotion);

  if (!items.length) return null;

  return (
    <section
      id="related-emotional-states"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Related emotional states
      </p>

      <h2 className="mb-5 font-serif text-2xl md:text-3xl">
        Feelings Often Connected to This State
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map(({ slug, emotion }) => (
          <Link
            key={slug}
            href={`/emotions/${slug}`}
            className="group block border-l border-[#D8C7A0] bg-white/75 px-5 py-4 transition hover:border-[#C6A96B] hover:bg-white"
          >
            <h3 className="font-serif text-xl transition group-hover:text-[#8F743C]">
              {emotion.title}
            </h3>

            {emotion.intro && (
              <>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  {shorten(emotion.intro, 150)}
                </p>
                <p className="mt-4 font-medium text-[#8F743C]">
                  Read interpretation →
                </p>
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

function EmotionalDiscovery({ emotion }) {
  const domain = emotionalDomains[emotion.domain];
  const domainHubs = (domain?.hubs || [])
    .filter((hubSlug) => hubSlug !== normalizeSlug(emotion.title))
    .map((hubSlug) => ({ slug: hubSlug, emotion: emotionalHubs[hubSlug] }))
    .filter((item) => item.emotion)
    .slice(0, 5);

  if (!domain && domainHubs.length === 0) return null;

  return (
    <section
      id="emotional-discovery"
      className="mt-20 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional discovery
      </p>

      <h2 className="mb-4 font-serif text-2xl md:text-3xl">
        Explore the Wider Emotional Cluster
      </h2>

      {domain?.description && (
        <p className="mb-6 leading-relaxed text-[#6B6B6B]">
          {domain.description}
        </p>
      )}

      <div className="flex flex-wrap gap-3 text-sm">
        {domainHubs.map(({ slug, emotion: relatedEmotion }) => (
          <Link
            key={slug}
            href={`/emotions/${slug}`}
            className="border border-[#EAE6E1] bg-white/70 px-4 py-2 capitalize text-[#5F574E] transition hover:border-[#C6A96B]"
          >
            {relatedEmotion.title}
          </Link>
        ))}

        {emotion.domain && (
          <Link
            href={`/categories/${normalizeSlug(emotion.domain)}`}
            className="border border-[#EAE6E1] bg-white/70 px-4 py-2 capitalize text-[#5F574E] transition hover:border-[#C6A96B]"
          >
            {emotion.domain} dreams
          </Link>
        )}
      </div>
    </section>
  );
}

function EmotionAuthorityRoutes({ emotionSlug }) {
  const profiles = getAuthorityProfilesForEmotion(emotionSlug).slice(0, 6);

  if (profiles.length === 0) {
    return null;
  }

  return (
    <section
      id="authority-routes"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Authority routes
      </p>

      <h2 className="mb-5 font-serif text-2xl md:text-3xl">
        Dream Hubs That Carry This Emotional Pattern
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {profiles.map((profile) => (
          <Link
            key={profile.canonicalSlug}
            href={`/dreams/${profile.canonicalSlug}#emotional-authority-map`}
            className="group block border-l border-[#D8C7A0] bg-white/75 px-5 py-4 transition hover:border-[#C6A96B] hover:bg-white"
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">
              Semantic hub
            </span>

            <h3 className="mt-2 font-serif text-xl transition group-hover:text-[#8F743C]">
              {profile.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {profile.clusters
                .flatMap((cluster) => cluster.searchIntents || [])
                .slice(0, 3)
                .map((intent) => (
                  <span
                    key={intent}
                    className="border border-[#EAE6E1] bg-white/70 px-2 py-1 text-xs text-[#6B6B6B]"
                  >
                    {intent}
                  </span>
                ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function EmotionPage({ params }) {
  const slug = normalizeSlug((await params)?.slug);
  const emotion = getEmotion(slug);

  if (!emotion) notFound();

  const emotionNavItems = [
    { id: "emotion-overview", label: "Overview" },
    { id: "subconscious-patterns", label: "Patterns" },
    { id: "life-situations", label: "Life situations" },
    { id: "emotional-themes", label: "Themes" },
    { id: "connected-dreams", label: "Connected dreams" },
    { id: "related-emotional-states", label: "Related feelings" },
    { id: "emotional-pathways", label: "Pathways" },
    { id: "emotional-discovery", label: "Discovery" },
    { id: "authority-routes", label: "Authority routes" },
    { id: "emotion-faq", label: "FAQs" },
  ];

  return (
    <main className="bg-[#FAF8F5] min-h-screen text-[#1A1A1A]">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-14 md:py-20">

        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-[#6B6B6B]">
          <Link href="/">Home</Link> /{" "}
          <Link href="/emotions">Emotions</Link> /{" "}
          {emotion.title}
        </nav>

        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          {emotion.title} Dream Meaning & Interpretation
        </h1>

        <section
          id="emotion-overview"
          className="scroll-mt-28"
        >
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            {emotion.intro}
          </p>
        </section>

        <DreamPageClientNav items={emotionNavItems} />

 {/* At a Glance */}
 <section className="max-w-5xl mx-auto px-6 mb-20">

<h2 className="font-serif text-3xl mb-8">
At a Glance
</h2>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">
<h3 className="font-serif text-xl mb-3">
What this emotion usually reflects
</h3>

<p className="leading-relaxed text-[#6B6B6B]">
  {emotion.deepInterpretation?.[0]}
</p>
</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">
<h3 className="font-serif text-xl mb-3">
Common life situations
</h3>

<div className="grid gap-3">

{emotion.lifeSituations.map((item) => (

<div
key={item}
className="rounded-xl border border-[#EAE6E1] bg-[#FAF8F5] px-4 py-3"
>

{item}

</div>

))}

</div>
</div>

</div>

</section>

        {/* Deep content */}
        <ParagraphSection
          id="deep-interpretation"
          title={`The deeper emotional meaning of ${emotion.title.toLowerCase()} dreams`}
          paragraphs={emotion.deepInterpretation}
        />

        <ParagraphSection
          id="how-it-connects"
          eyebrow="Contextual connections"
          title="Why different dreams can carry this same feeling"
          paragraphs={emotion.connectionExplanation}
        />

        <TextListSection
          id="subconscious-patterns"
          eyebrow="Subconscious patterns"
          title="Subconscious Patterns This Feeling Can Reveal"
          items={emotion.subconsciousPatterns}
        />

        <TextListSection
          id="life-situations"
          eyebrow="Waking life"
          title="Life Situations That May Intensify This Feeling"
          items={emotion.lifeSituations}
        />

{/* Comparison Table */}
<section className="mt-16">

<h2 className="font-serif text-3xl mb-6">

Understanding This Emotion

</h2>

<div className="overflow-x-auto">

<table className="w-full border border-[#EAE6E1] rounded-2xl overflow-hidden">

<thead>

<tr className="bg-[#F8F6F2]">

<th className="p-5 text-left">

Aspect

</th>

<th className="p-5 text-left">

How it may appear

</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-5">

Common feeling

</td>

<td className="p-5">

{emotion.title}

</td>

</tr>

<tr>

<td className="p-5">

Dream symbols

</td>

<td className="p-5">

{emotion.dreamSymbols?.slice(0,3).join(", ")}

</td>

</tr>

<tr>

<td className="p-5">

Life situations

</td>

<td className="p-5">

{emotion.lifeSituations?.slice(0,2).join(", ")}

</td>

</tr>

<tr>

<td className="p-5">

Often connected to

</td>

<td className="p-5">

{emotion.relatedHubs?.length || 0} related emotional states

</td>

</tr>

</tbody>

</table>

</div>

</section>

        {/* Themes */}
        {emotion.emotionalThemes?.length > 0 && (
          <section
            id="emotional-themes"
            className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Emotional patterns connected to this feeling
            </h2>

           <div className="flex flex-wrap gap-3">
            {emotion.emotionalThemes.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#EAE6E1] bg-white px-4 py-2 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Pattern block */}
        <TextListSection
          id="dream-manifestations"
          eyebrow="Dream forms"
          title="How This Feeling May Take Shape in Dreams"
          items={emotion.manifestations}
        />

        {/* Dream connections */}
        <section
          id="connected-dreams"
          className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
        >
          <h2 className="font-serif text-3xl mb-5">
            Dreams connected to this feeling
          </h2>

          <DreamLinkGrid
            slugs={emotion.connectedDreams}
            fallbackFromEmotion={slug}
          />
        </section>

        <RelatedEmotionLinks slugs={emotion.relatedHubs} />

        {/* Emotional pathways */}
        <EmotionPathways pathways={emotion.emotionalPathways} />

        {/* Journey */}
        <EmotionalJourney emotion={emotion} />

        <EmotionalDiscovery emotion={emotion} />
        <EmotionAuthorityRoutes emotionSlug={slug} />

        {/* Category bridge */}
        <section className="mt-20 border-t border-[#EAE6E1] pt-12 text-center">

<h2 className="font-serif text-3xl mb-4">

Explore Related Dream Meanings

</h2>

<p className="text-[#6B6B6B] max-w-2xl mx-auto mb-8">

Browse dream meanings connected to this emotional pattern or explore the complete Dream Dictionary.

</p>

<div className="flex flex-wrap justify-center gap-4">

<Link
href="/dreams"
className="px-6 py-3 rounded-full bg-[#1A1A1A] text-white"
>

Dream Dictionary →

</Link>

<Link
href="/categories"
className="px-6 py-3 rounded-full border border-[#EAE6E1]"
>

Browse Categories

</Link>

</div>

</section>

        {/* FAQ */}
        <section
          id="emotion-faq"
          className="mt-20 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
        >
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Common questions about {emotion.title.toLowerCase()} dreams
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium">
                Why do I feel {emotion.title.toLowerCase()} in dreams?
              </h3>
              <p className="text-[#6B6B6B] mt-2">
                This often reflects emotional patterns or experiences your mind
                is still processing beneath the surface.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Are {emotion.title.toLowerCase()} dreams normal?
              </h3>
              <p className="text-[#6B6B6B] mt-2">
                Yes. These dreams are common and often linked to emotional
                processing, stress, or internal change.
              </p>
            </div>
          </div>
        </section>

      </article>

      <SiteFooter />
    </main>
  );
}
