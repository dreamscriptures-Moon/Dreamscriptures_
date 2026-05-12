export const revalidate = 86400;

import Link from "next/link";
import Script from "next/script";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SearchBar from "@/app/components/SearchBar";
import DreamInsightSection from "@/components/DreamInsightSection";
import RelatedDreams from "@/components/RelatedDreams";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import {
  formatCategory,
  generateSummary,
  getBreadcrumbSchema,
  getDreamBySlug,
  getDreamFAQItems,
  getDreamInsightSections,
  getDreamsBySlugs,
  getExploreThemes,
  getFAQSchema,
  getParagraphs,
  getDynamicDreamTitle,
  linkCategories,
  shorten,
} from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";

export function generateStaticParams() {
  return dreams.map((dream) => ({
    slug: normalizeSlug(dream.slug || dream.title),
  }));
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
const primaryRelatedDream = getDreamsBySlugs(dream.relatedDreams, dreams)[0];

  const exploreThemes = getExploreThemes(dreams);
  const dreamTitle = dream.title || dream.slug.replace(/-/g, " ");
  const insightSections = getDreamInsightSections(dream);
  const summaryText = generateSummary(dream, dreamTitle);
  const dynamicTitle = getDynamicDreamTitle(dreamTitle);
  const breadcrumbSchema = getBreadcrumbSchema({
    dreamTitle,
    canonicalDreamSlug,
  });
  const faqItems = getDreamFAQItems(dream, dreamTitle);
  const faqSchema = getFAQSchema(faqItems);

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

{dream.microSummary && <div className="microSummary">{dream.microSummary}</div>}
 <div className="w-22 h-[1px] bg-[#C6A96B] mt-6 mb-8 opacity-60" />

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
      <a href="#related-dreams" className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        Related dreams
      </a>
    </li>

    <li>
      <a href="#faqs"className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200">
        FAQs
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
  relatedDream={primaryRelatedDream}
/>

<p className="text-[#7A7A7A] text-base md:text-lg mt-5 leading-relaxed font-serif italic">
          This dream often carries something deeper beneath the surface,
          something emotional, symbolic, or quietly unfolding in your waking
          life.
        </p>

        <div className="w-56 h-[1px] bg-[#C6A96B] mt-8 mb-10 opacity-60" />
    
   
      <section className="space-y-16">
  {insightSections.map((section) => (
    <DreamInsightSection
      key={section.id}
      id={section.id}
      title={section.title}
      body={section.body}
    />
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

        <RelatedDreams slugs={dream.relatedDreams} />

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

