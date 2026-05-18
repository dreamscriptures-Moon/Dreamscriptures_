import Link from "next/link";
import { notFound } from "next/navigation";

import EmotionalJourney from "@/components/emotions/EmotionalJourney";
import EmotionPathways from "@/components/emotions/EmotionPathways";
import { emotionalHubs } from "@/data/emotionalHubs";
import { dreams } from "@/data/dreams";
import { getDreamBySlug, shorten } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

function getEmotion(slug) {
  return emotionalHubs[normalizeSlug(slug)];
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

export default async function EmotionPage({ params }) {
  const slug = normalizeSlug((await params)?.slug);
  const emotion = getEmotion(slug);

  if (!emotion) notFound();

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

        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          {emotion.intro}
        </p>

        {/* Search intent */}
        <section className="mt-8">
  <p className="text-[#6B6B6B]">
    People often search for:
  </p>

  <div className="flex flex-wrap gap-2 mt-3 text-sm">

    <span className="border px-3 py-1">
      {emotion.title.toLowerCase()} dream meaning
    </span>

    <span className="border px-3 py-1">
      why do I feel {emotion.title.toLowerCase()} in dreams
    </span>

    <span className="border px-3 py-1">
      {emotion.title.toLowerCase()} dreams interpretation
    </span>

  </div>
</section>

        {/* Core answer */}
        <section className="mt-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            What does {emotion.title.toLowerCase()} mean in dreams?
          </h2>

          <p className="text-[#5F574E] leading-relaxed">
            Dreams connected to {emotion.title.toLowerCase()} often reflect
            emotional patterns, internal tension, or experiences unfolding
            beneath the surface of waking life.
          </p>
        </section>

        {/* Deep content */}
        {emotion.deepInterpretation?.length > 0 && (
          <section className="mt-10 space-y-5 text-[#4E463D]">
            {emotion.deepInterpretation.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        )}

        {/* Emotional hub linking */}
        {emotion.relatedHubs?.length > 0 && (
          <section className="mt-10">
            <p className="text-[#6B6B6B]">
              This feeling often connects with{" "}
              {emotion.relatedHubs.slice(0, 3).map((slug) => {
                const e = emotionalHubs[slug];
                if (!e) return null;

                return (
                  <Link
                    key={slug}
                    href={`/emotions/${slug}`}
                    className="underline mx-1"
                  >
                    {e.title.toLowerCase()}
                  </Link>
                );
              })}
              .
            </p>
          </section>
        )}

        {/* Themes */}
        {emotion.emotionalThemes?.length > 0 && (
          <section className="mt-16 border-t pt-10">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Emotional patterns connected to this feeling
            </h2>

            <ul className="grid gap-3 md:grid-cols-2">
              {emotion.emotionalThemes.map((t) => (
                <li key={t} className="border px-4 py-2 bg-white/70">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Pattern block */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            How this feeling may appear in dreams
          </h2>

          <ul className="list-disc space-y-3 pl-5 text-[#5F574E]">
            <li>Recurring emotional tension</li>
            <li>Situations you cannot control</li>
            <li>Pressure or avoidance</li>
            <li>Unresolved emotional experiences</li>
          </ul>
        </section>

        {/* Dream connections */}
        <section className="mt-16 border-t pt-10">
          <h2 className="font-serif text-3xl mb-5">
            Dreams connected to this feeling
          </h2>

          <DreamLinkGrid
            slugs={emotion.connectedDreams}
            fallbackFromEmotion={slug}
          />
        </section>

        {/* Emotional pathways */}
        <EmotionPathways pathways={emotion.emotionalPathways} />

        {/* Journey */}
        <EmotionalJourney emotion={emotion} />

        {/* Category bridge */}
        <section className="mt-20 border-t pt-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Explore dreams by emotional category
          </h2>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/categories/fear" className="underline">
              Fear dreams
            </Link>
            <Link href="/categories/anxiety" className="underline">
              Anxiety dreams
            </Link>
            <Link href="/categories/transformation" className="underline">
              Transformation dreams
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 border-t pt-10">
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
