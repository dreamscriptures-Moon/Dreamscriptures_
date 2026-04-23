export const revalidate = 86400;

import Link from "next/link";
import Script from "next/script";
import SearchBar from "@/app/components/SearchBar";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";

export async function generateMetadata({ params } = {}) {
  const resolvedParams = await params;
  const metadataSlug = resolvedParams?.slug || "dream";
  const dream = getDreamBySlug(metadataSlug);
  const title = dream?.title || String(metadataSlug).replace(/-/g, " ");
  const description =
    dream?.description?.replace(/\s+/g, " ").trim() ||
    `Explore what dreaming about ${title} might mean.`;

  return {
    title: `${title} dream meaning | DreamScriptures`,
    description,
  };
}

function normalizeForMatch(value = "") {
  return String(value || "").toLowerCase().trim();
}

function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function getDreamBySlug(slug = "") {
  const normalizedSlug = normalizeForMatch(slug);

  return dreams.find((item) => getDreamKeys(item).includes(normalizedSlug));
}

function getDreamKeys(item) {
  return [
    normalizeForMatch(item.slug),
    normalizeForMatch(item.title),
    normalizeSlug(item.title),
  ];
}

function getCategoryKeys(categories = []) {
  return categories.flatMap((category) =>
    String(category || "")
      .split(",")
      .map((item) => normalizeCategory(item))
      .filter(Boolean)
  );
}

function getParagraphs(text = "") {
  return String(text)
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function TextBlocks({
  text,
  className = "",
  textClassName = "text-[#6B6B6B] text-base md:text-lg leading-relaxed",
}) {
  const paragraphs = getParagraphs(text);

  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 24)}`}
          className={textClassName}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default async function DreamPage({ params }) {
  const resolvedParams = await params;
  const slug = String(resolvedParams?.slug || "").toLowerCase().trim();
  const dream = getDreamBySlug(slug);

  if (!dream) {
    return (
      <main className="bg-[#FAF8F5] min-h-screen">
        <SiteHeader sticky />
        <p className="max-w-3xl mx-auto px-6 py-20">Dream not found</p>
      </main>
    );
  }

  const exploreThemes = [
    ...new Set(
      dreams.flatMap((item) => (item.categories || []).map(normalizeCategory))
    ),
  ].slice(0, 5);

  const dreamCategoryKeys = getCategoryKeys(dream.categories);
  const rankedRelatedDreams = dreams
    .filter((item) => normalizeForMatch(item.slug) !== normalizeForMatch(dream.slug))
    .map((item) => ({
      ...item,
      score: getCategoryKeys(item.categories).filter((category) =>
        dreamCategoryKeys.includes(category)
      ).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const relatedDreams =
    rankedRelatedDreams.length > 0
      ? rankedRelatedDreams.slice(0, 4)
      : dreams
          .filter(
            (item) => normalizeForMatch(item.slug) !== normalizeForMatch(dream.slug)
          )
          .slice(0, 4);

  const insightSections = [
    ["How this dream might feel emotionally", dream.emotional],
    ["What this dream could be reflecting", dream.symbolic],
    ["A deeper or Spiritual perspective", dream.spiritual],
    ["What this dream may reflect", dream.wakingLife],
  ].filter(([, body]) => body);
  const dreamTitle = dream.title || dream.slug.replace(/-/g, " ");
  const relatedDreamSections = relatedDreams.map((item) => {
    const sharedCategories = getCategoryKeys(item.categories).filter((category) =>
      dreamCategoryKeys.includes(category)
    );

    return {
      ...item,
      sharedCategories,
    };
  });

  const faqItems = [
    {
      question: `What does dreaming about ${dreamTitle} usually mean?`,
      answer:
        dream.description ||
        `Dreams about ${dreamTitle} are usually shaped by your emotions, symbols, and current life context.`,
    },
    {
      question: `Which categories are connected to ${dreamTitle}?`,
      answer:
        dream.categories?.length > 0
          ? `This dream is often linked to ${dream.categories.join(", ")}. Those categories can help narrow the interpretation, especially when they overlap with what you are feeling in waking life.`
          : `This dream does not have category labels attached, so the best interpretation comes from the emotions and symbols in the dream itself.`,
    },
    {
      question: `Is ${dreamTitle} more about emotions or real life?`,
      answer:
        dream.wakingLife ||
        dream.emotional ||
        `It can reflect both. Dreams often blend emotional states with waking-life experiences, so the clearest meaning usually comes from both together.`,
    },
    {
      question: `How should I read repeated dreams about ${dreamTitle}?`,
      answer:
        `Recurring ${dreamTitle} dreams may point to a pattern, feeling, or situation that has not been fully resolved yet.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader sticky />
      <SearchBar />

      <article className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl leading-tight font-serif">
          What does dreaming about {dreamTitle} mean?
        </h1>

        <p className="text-sm text-[#6B6B6B] mt-2">
          Emotional, symbolic, spiritual, and waking life interpretation
        </p>

        <p className="text-[#7A7A7A] text-base md:text-lg mt-5 leading-relaxed font-serif italic">
          This dream often carries something deeper beneath the surface,
          something emotional, symbolic, or quietly unfolding in your waking
          life.
        </p>

        <div className="w-14 h-[1px] bg-[#C6A96B] mt-5 mb-8 opacity-60" />

        {dream.categories?.length > 0 && (
          <nav className="mb-8 flex flex-wrap gap-2">
            {dream.categories.map((cat) => (
              <Link
                key={cat}
                href={`/categories/${normalizeSlug(cat)}`}
                className="inline-block text-xs tracking-wide px-4 py-1.5 border border-[#EAE6E1] rounded-full text-[#6B6B6B] hover:border-[#C6A96B] transition capitalize"
              >
                {cat}
              </Link>
            ))}
          </nav>
        )}

        <TextBlocks text={dream.description} className="mb-16" />

        <section className="space-y-16">
          {insightSections.map(([title, body]) => (
            <section key={title} className="border-t border-[#EAE6E1] pt-6">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">
                {title}
              </h2>
              <TextBlocks text={body} />
            </section>
          ))}
        </section>

        {dream.summary && (
          <section className="mt-20 md:mt-32 py-10 border-y border-[#EAE6E1] text-center">
            <p className="text-[11px] tracking-[0.2em] text-[#8A8175] uppercase mb-4">
              Summary
            </p>
            <TextBlocks
              text={dream.summary}
              className="max-w-2xl mx-auto font-serif"
              textClassName="text-[#2A2A2A] text-base md:text-lg leading-relaxed"
            />
          </section>
        )}

        <section className="mt-16 border-t border-[#EAE6E1] pt-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-8">
            Common questions
          </h2>

          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-medium text-base md:text-lg">
                  {item.question}
                </h3>
                <TextBlocks text={item.answer} className="mt-2" />
              </div>
            ))}
          </div>
        </section>

        <p className="text-sm text-[#8A8A8A] mt-12 italic">
          Each dream is personal. Its meaning can shift depending on what you
          felt and what you are currently moving through.
        </p>

        <section className="mt-16 border-t border-[#EAE6E1] pt-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Related dreams
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {relatedDreamSections.map((item) => (
              <Link
                key={item.slug}
                href={`/dreams/${normalizeSlug(item.slug || item.title)}`}
                className="block border border-[#EAE6E1] p-5 rounded-xl hover:border-[#C6A96B] hover:shadow-sm transition"
              >
                <span className="block font-medium">{item.title}</span>
                <span className="block text-sm text-[#6B6B6B] mt-1">
                  {item.description}
                </span>
                {item.sharedCategories.length > 0 && (
                  <span className="block text-xs text-[#8A8A8A] mt-3 capitalize">
                    Shared categories: {item.sharedCategories.join(", ")}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 md:mt-32 bg-white border-y border-[#EAE6E1] py-10 px-6 text-center">
          <p className="font-serif text-base md:text-lg leading-relaxed text-[#3A3A3A]">
            Dreams do not follow one fixed meaning. The way this dream connects
            to your life, emotions, and experiences matters just as much as the
            symbols themselves.
          </p>
        </section>

        {exploreThemes.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              You might also explore
            </h2>

            <div className="flex flex-wrap gap-3">
              {exploreThemes.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${normalizeSlug(cat)}`}
                  className="text-sm px-4 py-2 border border-[#EAE6E1] rounded-full text-[#6B6B6B] hover:border-[#C6A96B] transition capitalize"
                >
                  {formatCategory(cat)}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20 md:mt-32 pt-10 border-t border-[#EAE6E1]">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Related reading
          </h2>
          <Link
            href="/guides/why-we-dream"
            className="text-[#6B6B6B] hover:text-[#1A1A1A] underline underline-offset-4"
          >
            Why do we dream?
          </Link>
        </section>
      </article>

      <Script
        id="dream-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteFooter />
    </main>
  );
}
