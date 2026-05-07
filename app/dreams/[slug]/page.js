export const revalidate = 86400;

import Link from "next/link";
import Script from "next/script";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SearchBar from "@/app/components/SearchBar";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { getRelatedDreams } from "../../../lib/getRelatedDreams";

export function generateStaticParams() {
  return dreams.map((dream) => ({
    slug: normalizeSlug(dream.slug || dream.title),
  }));
}
const categoryLinks = {
  anxiety: "/categories/anxiety",
  fear: "/categories/fear",
  transformation: "/categories/transformation",
  identity: "/categories/identity",
  relationships: "/categories/relationships",
  "hidden emotions": "/categories/hidden-emotions",
  "inner conflict": "/categories/inner-conflict",
  death: "/categories/death",
  body: "/categories/body",
};
function linkCategories(text = "") {
  let updatedText = text;

  Object.entries(categoryLinks).forEach(([term, href]) => {
    const regex = new RegExp(`\\b${term}\\b`, "i");

    updatedText = updatedText.replace(
      regex,
      `<a href="${href}" class="underline underline-offset-4 hover:text-[#C6A96B] transition-colors">${term}</a>`
    );
  });

  return updatedText;
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
export async function generateMetadata({ params } = {}) {
  const resolvedParams = await params;
  const metadataSlug = resolvedParams?.slug || "dream";
  const dream = getDreamBySlug(metadataSlug);
  const title = dream?.title || String(metadataSlug).replace(/-/g, " ");
  const description = shorten(
    `Learn what dreaming about ${title} means, including emotional, spiritual, and real-life interpretations. Discover what your dream may be trying to tell you.`
  );
  const canonicalSlug = normalizeSlug(dream?.slug || dream?.title || metadataSlug);

  const dynamicTitle = getDynamicDreamTitle(title);

  return {
    title: dynamicTitle,
    description,
    alternates: {
      canonical: `https://www.dreamscriptures.com/dreams/${canonicalSlug}`,
    },

     openGraph: {
      url: `https://www.dreamscriptures.com/dreams/${canonicalSlug}`,
    },
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
    normalizeSlug(item.slug),
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

function dreamMatchesReference(dream, reference = "") {
  const normalizedReference = normalizeForMatch(reference);
  const slugReference = normalizeSlug(reference);

  return getDreamKeys(dream).some(
    (key) =>
      key === normalizedReference ||
      key === slugReference ||
      (slugReference.length > 4 && key.includes(slugReference))
  );
}

function uniqueDreams(items = []) {
  const seen = new Set();

  return items.filter((item) => {
    const key = normalizeSlug(item.slug || item.title);

    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function getDynamicDreamTitle(title = "") {
  const patterns = [
    `${title} Dream Meaning (What It Really Means)`,

    `${title} Dream Meaning (Hidden Meaning Explained)`,

    `${title} Dream Meaning (Spiritual & Emotional Meaning)`,

    `${title} Dream Meaning (Why This Dream Feels So Intense)`,

    `${title} Dream Meaning (What Your Subconscious May Be Telling You)`,

    `${title} Dream Meaning (Fear, Stress, or Transformation?)`,

    `${title} Dream Meaning (Why This Dream Stays With You)`,

    `${title} Dream Meaning (What This Dream May Be Revealing)`,

    `${title} Dream Meaning (What Does This Dream Say About You?)`,

    `${title} Dream Meaning (A Sign of Anxiety or Change?)`,
  ];

  const index = title.length % patterns.length;

  return patterns[index];
}




function shorten(text, maxLength = 220) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();

  if (!clean) return "";

  if (clean.length <= maxLength) return clean;

  return `${clean.slice(0, maxLength - 3).trim()}...`;
}

function pickFirstText(...values) {
  return (
    values.find((value) => String(value || "").replace(/\s+/g, " ").trim()) || ""
  );
}

function uniqueParts(parts = []) {
  const seen = new Set();

  return parts.filter((part) => {
    const clean = String(part || "").replace(/\s+/g, " ").trim();

    if (!clean) return false;

    const key = clean.toLowerCase();

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

function cleanFAQ(text = "", maxLength = 320) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();

  if (!clean) return "";

  if (clean.length <= maxLength) {
    return clean.endsWith(".") ? clean : `${clean}.`;
  }

  const trimmed = clean.substring(0, maxLength);
  const lastSentence = trimmed.lastIndexOf(".");
  const result =
    lastSentence !== -1 ? trimmed.substring(0, lastSentence + 1).trim() : clean;

  return result.endsWith(".") ? result : `${result.trim()}.`;
}

function buildFAQAnswer(parts, fallback) {
  const text = uniqueParts(parts).join(" ");

  return cleanFAQ(text || fallback);
}

function hashString(value = "") {
  return Array.from(String(value || "")).reduce(
    (total, char) => total + char.charCodeAt(0),
    0
  );
}

function getSeededItems(items = [], seed = "", count = 5) {
  const list = [...items];
  const seedValue = hashString(seed);

  list.sort((a, b) => {
    const aScore = (a.id * 31 + seedValue) % 997;
    const bScore = (b.id * 31 + seedValue) % 997;

    return aScore - bScore;
  });

  return list.slice(0, count);
}

function generateSummary(dream, dreamTitle) {
  if (dream.summary) {
    return dream.summary;
  }

  return shorten(
    `${dreamTitle} often points to ${pickFirstText(
      dream.symbolic,
      dream.description,
      "a meaningful inner theme"
    )}. In waking life, it may connect to ${pickFirstText(
      dream.wakingLife,
      dream.emotional,
      "current emotions or changes you are processing"
    )}`,
    220
  );
}

function getParagraphs(text = "") {
  return String(text)
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function DescriptionBlocks({
  text,
  relatedDream,
  className = "",
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
          className="text-[#6B6B6B] text-base md:text-lg leading-relaxed"
        >
         <span
  dangerouslySetInnerHTML={{
    __html: linkCategories(paragraph),
  }}
/>

          {index === 0 && relatedDream && (
            <>
              {" "}
              Similar themes can appear in{" "}
              <Link
                href={`/dreams/${normalizeSlug(
                  relatedDream.slug || relatedDream.title
                )}`}
                className="underline underline-offset-4 hover:text-[#C6A96B] transition-colors"
              >
                {relatedDream.title.toLowerCase()}
              </Link>
              .
            </>
          )}
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
     <main className="bg-[#FAF8F5] min-h-screen pt-16 md:pt-20">
       <SiteHeader />
        <p className="max-w-3xl mx-auto px-6 py-20">Dream not found</p>
      </main>
    );
  }

const canonicalDreamSlug = normalizeSlug(dream.slug || dream.title);

const currentDream = dream;
const relatedDreams = getRelatedDreams(currentDream, dreams);

  const exploreThemes = [
    ...new Set(
      dreams.flatMap((item) => (item.categories || []).map(normalizeCategory))
    ),
  ].slice(0, 5);

  const dreamTitle = dream.title || dream.slug.replace(/-/g, " ");
  const dreamCategoryKeys = getCategoryKeys(dream.categories);
  const insightSections = [
    {
      id: "emotional-meaning",
      title: "What does this dream mean emotionally?",
      body: pickFirstText(
        dream.emotional,
        dream.description,
        dream.wakingLife,
        dream.symbolic
      ),
    },
    {
      id: "symbolic-meaning",
      title: "What does this dream symbolize?",
      body: pickFirstText(
        dream.symbolic,
        dream.description,
        dream.spiritual,
        dream.emotional
      ),
    },
    {
      id: "spiritual-meaning",
      title: "What is the spiritual meaning of this dream?",
      body: pickFirstText(
        dream.spiritual,
        dream.symbolic,
        dream.description,
        dream.emotional
      ),
    },
    {
      id: "real-life-meaning",
      title: "What does this dream mean in real life?",
      body: pickFirstText(
        dream.wakingLife,
        dream.emotional,
        dream.description,
        dream.symbolic
      ),
    },
  ].filter((section) => section.body);
  const summaryText = generateSummary(dream, dreamTitle);
  const dynamicTitle = getDynamicDreamTitle(dreamTitle);
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dreamscriptures.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Dream Meanings",
      item: "https://www.dreamscriptures.com/dreams",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: dreamTitle,
      item: `https://www.dreamscriptures.com/dreams/${canonicalDreamSlug}`,
    },
  ],
};
 const relatedDreamSections = relatedDreams
  .slice(0, 4)
  .map((item) => ({
    ...item,
    sharedCategories: getCategoryKeys(item.categories).filter((category) =>
      dreamCategoryKeys.includes(category)
    ),
  }));

 
  const faqTemplates = [
    {
      id: 1,
      question: (title) => `What does dreaming about ${title} usually mean?`,
      answer: () =>
        buildFAQAnswer(
          [dream.symbolic, dream.spiritual, dream.wakingLife, dream.description],
          `${dreamTitle} usually reflects a mix of personal symbolism, emotional undercurrents, and experiences your mind is still processing.`
        ),
    },
    {
      id: 2,
      question: (title) => `What emotions are connected to dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.emotional,
            dream.symbolic,
            dream.spiritual,
            dream.wakingLife,
            dream.description,
          ],
          `Dreams about ${dreamTitle} often connect to feelings you have not fully processed yet, especially around stress, desire, uncertainty, or change.`
        ),
    },
    {
      id: 3,
      question: (title) => `What might ${title} symbolize in a dream?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.symbolic,
            dream.spiritual,
            dream.wakingLife,
            dream.description,
          ],
          `${dreamTitle} often acts as a symbol for something unfolding beneath the surface, pointing to patterns, fears, hopes, or transitions in your life.`
        ),
    },
    {
      id: 4,
      question: (title) => `Does dreaming about ${title} relate to waking life?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.wakingLife,
            dream.symbolic,
            dream.spiritual,
            dream.emotional,
            dream.description,
          ],
          `Yes. Dreams about ${dreamTitle} often mirror current situations, relationships, or decisions that are shaping your emotions and attention right now.`
        ),
    },
    {
      id: 5,
      question: (title) => `Why do I keep dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.emotional,
            dream.wakingLife,
            dream.symbolic,
            dream.spiritual,
          ],
          `Repeated dreams about ${dreamTitle} usually suggest an issue, emotion, or life pattern is still unresolved and returning for deeper attention.`
        ),
    },
    {
      id: 6,
      question: (title) => `Is dreaming about ${title} a warning sign?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.spiritual,
            dream.symbolic,
            dream.wakingLife,
            dream.emotional,
            dream.description,
          ],
          `Not always. A dream about ${dreamTitle} is more often a signal to notice your emotional state, inner conflicts, or the direction your life is taking.`
        ),
    },
    {
      id: 7,
      question: (title) => `What is the spiritual meaning of dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.spiritual,
            dream.symbolic,
            dream.wakingLife,
            dream.description,
          ],
          `Spiritually, ${dreamTitle} may point to inner guidance, transformation, or a deeper lesson that your subconscious is trying to bring forward.`
        ),
    },
    {
      id: 8,
      question: (title) => `What should I reflect on after dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.wakingLife,
            dream.emotional,
            dream.symbolic,
            dream.spiritual,
          ],
          `Reflect on what ${dreamTitle} reminds you of emotionally and practically, because the dream may be highlighting something active in your daily life.`
        ),
    },
  ];

  const faqItems = getSeededItems(faqTemplates, dream.slug || dreamTitle, 5).map(
    (item) => ({
      question: item.question(dreamTitle),
      answer: item.answer(),
    })
  );

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems
    .filter((item) => item.question && item.answer)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: String(item.answer).replace(/\s+/g, " ").trim(),
      },
    })),
};

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>
      <SiteHeader />
     <div className="max-w-3xl mx-auto px-6 pt-6">
     <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#5F574E]">
  <ol className="flex flex-wrap items-center gap-2">
    <li>
      <Link href="/" className="hover:text-[#C6A96B] transition-colors">
        Home
      </Link>
    </li>

    <li>/</li>

    <li>
      <Link href="/dreams" className="hover:text-[#C6A96B] transition-colors">
        Dreams
      </Link>
    </li>

    <li>/</li>

    <li className="text-[#6B6B6B]" aria-current="page">
      {dreamTitle}
    </li>
  </ol>
</nav>
</div>    

     <div className="max-w-3xl mx-auto px-6 mt-4 mb-6 space-y-3">
  <SearchBar />
  <LazyMobileQuickNav />
</div>
      <article className="max-w-3xl lg:max-w-3xl mx-auto pt-1 pb-10 md:pt-14 md:pb-24">
     <h1 className="text-4xl md:text-5xl leading-[1.15] font-serif mb-4">
  {dynamicTitle}
</h1>

<h2 className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-4">
  What does it mean to dream about {dream.title.toLowerCase()}?
</h2>

 <div className="w-14 h-[1px] bg-[#C6A96B] mt-2 mb-8 opacity-60" />

<nav className="mb-8 text-sm">
  <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">
    On this page
  </p>

  <ul className="space-y-2 pl-4 relative">
  <li aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]" />
    <li>
      <a href="#emotional-meaning" className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        Emotional meaning
      </a>
    </li>

    <li>
      <a href="#symbolic-meaning" className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        Symbolic meaning
      </a>
    </li>

    <li>
      <a href="#spiritual-meaning"className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        Spiritual meaning
      </a>
    </li>

    <li>
      <a href="#real-life-meaning" className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        Waking life meaning
      </a>
    </li>

    <li>
      <a href="#faqs"className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        FAQs
      </a>
    </li>

    <li>
      <a href="#related-dreams" className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        Related dreams
      </a>
    </li>
  </ul>
</nav>

 <p className="text-xs tracking-widest text-[#A89F91] uppercase mb-8">
          Guide - 7 min read
        </p>

        
<p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">
  Quick description
</p>

<DescriptionBlocks
  text={dream.description}
  className="mb-10"
  relatedDream={relatedDreamSections[0]}
/>

<p className="text-[#7A7A7A] text-base md:text-lg mt-5 leading-relaxed font-serif italic">
          This dream often carries something deeper beneath the surface,
          something emotional, symbolic, or quietly unfolding in your waking
          life.
        </p>

        <div className="w-56 h-[1px] bg-[#C6A96B] mt-8 mb-10 opacity-60" />
    
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

      <section className="space-y-16">
  {insightSections.map((section) => (
    <section
      key={section.id}
      id={section.id}
      className="border-t border-[#EAE6E1] pt-6 scroll-mt-28"
    >
      <h2 className="font-serif text-4xl md:text-5xl mb-4">
        {section.title}
      </h2>

 <TextBlocks text={section.body} />
 
    </section>
  ))}
</section>

        {summaryText && (
          <section className="mt-20 md:mt-32 py-10 border-y border-[#EAE6E1] text-center">
            <p className="text-[11px] tracking-[0.2em] text-[#8A8175] uppercase mb-4">
              Summary
            </p>
            <TextBlocks
              text={summaryText}
              className="max-w-2xl mx-auto font-serif"
              textClassName="text-[#2A2A2A] text-base md:text-lg leading-relaxed"
            />
          </section>
        )}

       <section id="faqs" className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28">
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

       <section id="related-dreams" className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Related dreams
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {relatedDreamSections.map((item) => (
              <Link
                key={item.slug}
                href={`/dreams/${normalizeSlug(item.slug || item.title)}`}
                className="block p-5 rounded-2xl border border-[#E8E2D9] bg-white hover:border-[#C6A96B] hover:shadow-md transition"
              >
                {item.sharedCategories?.[0] && (
                  <span className="text-xs uppercase tracking-wide text-[#C6A96B]">
                    {item.sharedCategories[0]}
                  </span>
                )}

                <h3 className="text-lg font-semibold mt-2 mb-2 hover:text-[#C6A96B] transition">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B6B6B]">
                  What does dreaming about {item.title.toLowerCase()} mean?
                </p>
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
  <h2 className="font-serif text-4xl md:text-5xl mb-6">
    Related reading
  </h2>

  <div className="flex flex-col gap-3 text-[#6B6B6B]">
    
    <Link
      href="/guides/why-we-dream"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      Why do we dream?
    </Link>

    <Link
      href="/guides/what-are-dreams"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      What are dreams?
    </Link>

    <Link
      href="/guides/spiritual-dreams-meaning"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      Spiritual dreams meaning
    </Link>

    <Link
      href="/guides/recurring-dreams"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      Why do dreams repeat?
    </Link>

    <Link
      href="/guides/lucid-dreaming"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      What is lucid dreaming?
    </Link>

  </div>
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

