import Link from "next/link";

import HomeSearchWrapper from "@/app/components/HomeSearchWrapper";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import QuoteBreakpoint from "@/app/components/QuoteBreakpoint";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { DreamFeatureCard } from "@/components/DreamCards";
import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { getDreamOfTheDay } from "@/lib/dreamEngagement";
import {
  getCategoryEntries,
  getEmotionEntries,
  getDreamSummary,
} from "@/lib/editorialDiscovery";
import { getAllGuideEntries } from "@/lib/guideCatalog";
import { getDreamBySlug } from "@/lib/dreams";
import { getDreamHref } from "@/lib/routes";

export const metadata = {
  title: "Dream Meanings & Thoughtful Dream Interpretation",
  description:
    "Explore dream meanings through symbolism, emotions, spiritual reflection, and personal context with thoughtful, non-predictive dream interpretation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dream Meanings & Thoughtful Dream Interpretation | DreamScriptures",
    description:
      "Explore dream symbolism, emotional patterns, spiritual reflection, and personal context without fixed or fearful conclusions.",
    url: "https://www.dreamscriptures.com",
    siteName: "DreamScriptures",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Meanings & Thoughtful Dream Interpretation | DreamScriptures",
    description:
      "Explore dream symbolism, emotional patterns, spiritual reflection, and personal context without fixed or fearful conclusions.",
  },
};

// Refresh the statically generated homepage often enough for the UTC-based
// Dream of the Day to advance without requiring a deployment.
export const revalidate = 3600;

const POPULAR_DREAM_SLUGS = [
  "snake",
  "falling",
  "being-chased",
  "being-chased-by-a-lion",
  "teeth-falling-out",
  "water",
  "death",
];

const PREFERRED_CATEGORY_SLUGS = [
  "anxiety",
  "transformation",
  "relationships",
  "relationship",
  "spiritual",
  "water",
  "animals",
];

const PREFERRED_EMOTION_SLUGS = [
  "fear-of-losing-control",
  "emotional-overwhelm",
  "fear-of-abandonment",
  "feeling-trapped",
  "difficulty-letting-go",
  "uncertainty",
];

const FEATURED_GUIDE_SLUGS = [
  "nightmares-meaning",
  "lucid-dreaming",
  "why-do-some-dreams-come-true",
  "most-common-dreams",
  "dreams-and-emotions",
];

const interpretationPrinciples = [
  {
    title: "Emotional patterns",
    text: "The strongest feeling in a dream can change how its people, places, and symbols may be understood.",
  },
  {
    title: "Symbolism and the subconscious",
    text: "Recurring images can be considered alongside memory, association, inner tension, and themes beneath the surface.",
  },
  {
    title: "Spiritual reflection",
    text: "Spiritual and biblical perspectives are included where the dream’s context and relevant source material make them appropriate.",
  },
  {
    title: "Waking-life context",
    text: "Your relationships, circumstances, beliefs, and personal associations remain essential to thoughtful interpretation.",
  },
];

function selectPreferred(items, slugs, limit) {
  const itemMap = new Map(items.map((item) => [item.slug, item]));
  const preferred = slugs.map((slug) => itemMap.get(slug)).filter(Boolean);
  const selectedSlugs = new Set(preferred.map((item) => item.slug));
  const fallbacks = items.filter((item) => !selectedSlugs.has(item.slug));

  return [...preferred, ...fallbacks].slice(0, limit);
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dreamscriptures.com/#organization",
      name: "DreamScriptures",
      url: "https://www.dreamscriptures.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dreamscriptures.com/#website",
      url: "https://www.dreamscriptures.com",
      name: "DreamScriptures",
      publisher: {
        "@id": "https://www.dreamscriptures.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dreamscriptures.com/#webpage",
      url: "https://www.dreamscriptures.com",
      name: "Dream Meanings & Thoughtful Dream Interpretation",
      description:
        "Explore dream meanings through symbolism, emotions, spiritual reflection, and personal context.",
      isPartOf: {
        "@id": "https://www.dreamscriptures.com/#website",
      },
      about: {
        "@id": "https://www.dreamscriptures.com/#organization",
      },
    },
  ],
};

export default function Home() {
  const popularDreams = POPULAR_DREAM_SLUGS.map((slug) =>
    getDreamBySlug(slug, dreams)
  ).filter(Boolean);
  const categoryEntries = getCategoryEntries();
  const featuredCategories = selectPreferred(
    categoryEntries,
    PREFERRED_CATEGORY_SLUGS,
    6
  );
  const supportedEmotions = getEmotionEntries().filter(
    (emotion) => emotionalHubs[emotion.slug] && emotion.count > 0
  );
  const featuredEmotions = selectPreferred(
    supportedEmotions,
    PREFERRED_EMOTION_SLUGS,
    6
  );
  const guideCatalog = getAllGuideEntries();
  const featuredGuides = FEATURED_GUIDE_SLUGS.map((slug) =>
    guideCatalog.find((guide) => guide.slug === slug)
  ).filter(Boolean);
  const dreamOfTheDay = getDreamOfTheDay(dreams);

  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <SiteHeader sticky />
      <div className="mx-auto max-w-6xl px-6">
        <LazyMobileQuickNav />
      </div>

      <section className="border-b border-[#E2DDD6] bg-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center md:py-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#8F743C]">
            Thoughtful dream interpretation
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
            Understand the dream beneath the symbols
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#625C55] md:text-lg md:leading-8">
            Explore what your dream may mean through emotion, symbolism,
            spiritual reflection, and the personal context that makes every
            dream different.
          </p>

          <div className="mx-auto mt-8 max-w-2xl text-left md:mt-10">
            <HomeSearchWrapper />
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/dreams"
              className="inline-flex min-h-11 items-center border-b border-[#9A7B43] text-[#4F4942] transition hover:text-[#8F743C]"
            >
              Explore dream meanings
            </Link>
            <Link
              href="/submit-dream"
              className="inline-flex min-h-11 items-center text-[#756C61] transition hover:text-[#8F743C] hover:underline hover:underline-offset-4"
            >
              Submit your dream
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-label="Why trust DreamScriptures"
        className="mx-auto max-w-6xl px-6 py-10 md:py-12"
      >
        <div className="grid border-y border-[#DED7CD] md:grid-cols-3">
          <div className="py-5 md:pr-7">
            <p className="font-serif text-lg">Context-first</p>
            <p className="mt-2 text-sm leading-6 text-[#686159]">
              Meanings are considered through emotion, symbolism, faith, and
              real life.
            </p>
          </div>
          <div className="border-t border-[#DED7CD] py-5 md:border-l md:border-t-0 md:px-7">
            <p className="font-serif text-lg">Reflective, not predictive</p>
            <p className="mt-2 text-sm leading-6 text-[#686159]">
              We encourage discernment rather than fixed, fearful, or absolute
              conclusions.
            </p>
          </div>
          <div className="border-t border-[#DED7CD] py-5 md:border-l md:border-t-0 md:pl-7">
            <p className="font-serif text-lg">A transparent approach</p>
            <p className="mt-2 text-sm leading-6 text-[#686159]">
              Read our{" "}
              <Link href="/methodology" className="underline underline-offset-4">
                methodology
              </Link>{" "}
              and{" "}
              <Link
                href="/editorial-standards"
                className="underline underline-offset-4"
              >
                editorial standards
              </Link>
              .
            </p>
          </div>
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-center font-serif text-base italic leading-7 text-[#514B44] md:text-lg">
          DreamScriptures explores emotional patterns, symbolism, subconscious
          themes, spiritual reflection, and biblical perspectives where the
          dream’s context and relevant source material make them appropriate.
        </p>
        <p className="mt-4 text-center text-sm text-[#686159]">
          Founded, written, and edited by{" "}
          <Link href="/author" rel="author" className="font-medium underline underline-offset-4">
            Amber Balentine
          </Link>.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col justify-between gap-5 border-b border-[#DED7CD] pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
              A place to begin
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Popular Dream Meanings
            </h2>
          </div>
          <Link
            href="/dreams"
            className="text-sm font-medium text-[#806431] underline underline-offset-4"
          >
            Browse all dream meanings →
          </Link>
        </div>

        <div className="grid gap-x-10 md:grid-cols-2">
          {popularDreams.map((dream, index) => (
            <Link
              key={dream.slug || dream.title}
              href={getDreamHref(dream)}
              className="group grid min-h-24 grid-cols-[2rem_1fr] gap-4 border-b border-[#DED7CD] py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A7B43]"
            >
              <span className="pt-1 text-xs text-[#A48A58]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-xl transition group-hover:text-[#806431] md:text-2xl">
                  {dream.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[#70685F]">
                  {getDreamSummary(dream, 118)}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <QuoteBreakpoint
        heading="A thought for your journey"
        initialQuote={
          "Begin with the feeling that organized the dream, then ask what the symbol was doing inside that feeling."
        }
      />

      <section className="border-y border-[#DED7CD] bg-[#FBF9F5]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-16 md:py-20">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
              Follow the theme
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Explore by Category
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#686159]">
              Browse connected symbols, situations, and experiences without
              reducing every dream to one fixed definition.
            </p>
            <div className="mt-7 divide-y divide-[#DED7CD] border-y border-[#DED7CD]">
              {featuredCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group flex min-h-16 items-center justify-between gap-5 py-3.5 md:py-4"
                >
                  <span>
                    <span className="font-serif text-lg group-hover:text-[#806431]">
                      {category.title} Dreams
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.12em] text-[#8A8175]">
                      {category.count} dream{category.count === 1 ? "" : "s"}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-[#A48A58]">
                    →
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/categories"
              className="mt-7 inline-flex min-h-11 items-center font-medium text-[#806431] underline underline-offset-4"
            >
              View all dream categories →
            </Link>
          </div>

          <div className="lg:border-l lg:border-[#DED7CD] lg:pl-16">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
              Follow the feeling
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Explore by Emotion
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#686159]">
              When the feeling is clearer than the symbol, begin with the
              emotional pattern that stayed with you.
            </p>
            <div className="mt-7 divide-y divide-[#DED7CD] border-y border-[#DED7CD]">
              {featuredEmotions.map((emotion) => (
                <Link
                  key={emotion.slug}
                  href={`/emotions/${emotion.slug}`}
                  className="group block min-h-16 py-3.5 md:py-4"
                >
                  <span className="font-serif text-lg group-hover:text-[#806431]">
                    {emotion.title}
                  </span>
                  <span className="mt-1 line-clamp-3 text-sm leading-6 text-[#70685F] md:line-clamp-none">
                    {emotion.intro}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/emotions"
              className="mt-7 inline-flex min-h-11 items-center font-medium text-[#806431] underline underline-offset-4"
            >
              View all dream emotions →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <header>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
              Our approach
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              How DreamScriptures interprets dreams
            </h2>
            <div className="mt-7 h-px w-14 bg-[#C6A96B]" aria-hidden="true" />
            <p className="mt-7 leading-7 text-[#686159]">
              A symbol can mean something different depending on how the dream
              felt and what is happening in the dreamer’s life. Our
              interpretations offer perspectives to consider, not verdicts.
            </p>
          </header>

          <div className="space-y-7">
            {interpretationPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="border-l border-[#D8C7A0] pl-5"
              >
                <h3 className="font-serif text-xl">{principle.title}</h3>
                <p className="mt-2 leading-7 text-[#686159]">
                  {principle.text}
                </p>
              </div>
            ))}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
              <Link
                href="/methodology"
                className="font-medium text-[#806431] underline underline-offset-4"
              >
                Read our methodology →
              </Link>
              <Link
                href="/editorial-standards"
                className="font-medium text-[#806431] underline underline-offset-4"
              >
                Editorial standards →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {featuredGuides.length > 0 && (
        <section className="border-y border-[#DED7CD] bg-[#F2EDE5]">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
                Go deeper
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Explore the Dream Knowledge Hub
              </h2>
              <p className="mt-4 leading-7 text-[#686159]">
                Learn how dreams work and develop a more grounded way to
                reflect on emotion, symbolism, spirituality, and context.
              </p>
            </div>
            <div className="mt-9 grid gap-x-8 border-t border-[#D8D0C5] md:grid-cols-2">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group border-b border-[#D8D0C5] py-6"
                >
                  <h3 className="font-serif text-xl group-hover:text-[#806431]">
                    {guide.title}
                  </h3>
                  {guide.description && (
                    <p className="mt-2 text-sm leading-6 text-[#70685F]">
                      {guide.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/guides"
              className="mt-7 inline-flex min-h-11 items-center font-medium text-[#806431] underline underline-offset-4"
            >
              Browse the full knowledge hub →
            </Link>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="grid gap-9 border-l-2 border-[#C6A96B] bg-white/60 px-6 py-9 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-11">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
              When the library is not enough
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Share a dream that feels personal
            </h2>
            <p className="mt-5 leading-7 text-[#686159]">
              If your dream feels too specific for a general meaning, you can
              request a genuine interpretation. Share only what you feel
              comfortable sharing.
            </p>
          </div>
          <div>
            <div className="border-b border-[#DED7CD] pb-5">
              <h3 className="font-serif text-xl">
                Community Dream Interpretation
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#686159]">
                Your first Community dream is free. Additional Community
                submissions are $0.99. Every submission receives a complete,
                thoughtfully written interpretation.
              </p>
            </div>
            <div className="py-5">
              <h3 className="font-serif text-xl">
                Personal Dream Interpretation · $5.99
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#686159]">
                A deeper, more personalized interpretation with expanded
                emotional, symbolic, spiritual, and biblical analysis, plus
                faster delivery.
              </p>
            </div>
            <Link
              href="/submit-dream"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333]"
            >
              Submit Your Dream →
            </Link>
          </div>
        </div>
      </section>

      {dreamOfTheDay && (
        <section className="border-y border-[#DED7CD] bg-[#FBF9F5]">
          <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
            <header className="mb-8 max-w-2xl">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
                Daily reflection
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Dream of the Day
              </h2>
            </header>
            <DreamFeatureCard dream={dreamOfTheDay} />
          </div>
        </section>
      )}

      <QuoteBreakpoint
        heading="Before you go…"
        initialQuote={
          "A dream that lingers may be asking for attention, not certainty."
        }
      />

      <section className="mx-auto max-w-3xl px-6 py-14 text-center md:py-20">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
          Continue exploring
        </p>
        <h2 className="font-serif text-3xl md:text-4xl">
          Still thinking about a dream?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#686159]">
          Search the dream library for the symbol, person, place, or feeling
          that stayed with you.
        </p>
        <div className="mx-auto mt-8 max-w-xl text-left">
          <HomeSearchWrapper showSuggestions={false} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
