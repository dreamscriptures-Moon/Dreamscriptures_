export const revalidate = 86400;

import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import Script from "next/script";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SearchBar from "@/app/components/SearchBar";
import DreamInsightSection from "@/components/DreamInsightSection";
import BiblicalPerspective from "@/components/BiblicalPerspective";
import SubmitYourDreamCTA from "@/components/SubmitYourDreamCTA";
import ArticleFeedback from "@/components/ArticleFeedback";
import EditorialAdUnit from "@/components/EditorialAdUnit";
import ContinueExploring from "@/components/ContinueExploring";
import DreamEmotionalConnections from "@/components/emotions/DreamEmotionalConnections";
import DreamEmotionalPathways from "@/components/emotions/DreamEmotionalPathways";
import DreamSemanticAuthority from "@/components/emotions/DreamSemanticAuthority";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import RelatedDreams from "@/components/RelatedDreams";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import ContentSources from "@/app/components/ContentSources";
import EditorialAttribution from "@/app/components/EditorialAttribution";
import DreamPageClientNav from "./DreamPageClientNavDynamic";
import DreamSubmissionPopup from "./DreamSubmissionPopup";
import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
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
import ClusterPathway from "@/app/components/ClusterPathway";
import { getClusterGuides } from "@/lib/clusterGuides";
import {
  getIntelligentRelatedDreams,
  getReadingTime,
} from "@/lib/dreamEngagement";
import { getCanonicalDreamSlug, getDreamRobots } from "@/lib/seo";
import JumpToNavigation from "@/app/components/JumpToNavigation";
import DreamCompassPageCTA from "@/components/DreamCompassPageCTA";
import DreamReaderTools from "@/components/DreamReaderTools";

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
    dream?.seoDescription ||
      dream?.microSummary ||
      dream?.shortDescription ||
      dream?.description ||
      dream?.uniqueDescription ||
      `Explore possible meanings and context for dreams about ${title}.`,
    160
  );
  const canonicalSlug = normalizeSlug(getCanonicalDreamSlug(dream, metadataSlug));

  const dynamicTitle = getDynamicDreamTitle(title, dream);

  return {
    title: dynamicTitle,
    description,
    robots: getDreamRobots(dream),
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

function toTextItems(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item;
        return item?.text || item?.title || item?.label || item?.meaning || "";
      })
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return getParagraphs(value);
  }

  return Object.values(value).filter((item) => typeof item === "string");
}

function getContradictionItems(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((item, index) => {
        if (typeof item === "string") {
          return { title: `Interpretation ${index + 1}`, body: item };
        }

        return {
          title:
            item?.title ||
            item?.context ||
            item?.emotionalContext ||
            `Interpretation ${index + 1}`,
          body:
            item?.body ||
            item?.meaning ||
            item?.description ||
            item?.text ||
            item?.interpretation ||
            "",
        };
      })
      .filter((item) => item.body);
  }

  if (typeof value === "string") {
    return getParagraphs(value).map((paragraph, index) => ({
      title: `Interpretation ${index + 1}`,
      body: paragraph,
    }));
  }

  return Object.entries(value)
    .map(([key, body]) => ({
      title: formatCategory(key),
      body: typeof body === "string" ? body : body?.meaning || body?.text || "",
    }))
    .filter((item) => item.body);
}

function DreamListSection({ id, eyebrow, title, items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      id={id}
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        {eyebrow}
      </p>

      <h2 className="mb-5 font-serif text-3xl md:text-4xl">{title}</h2>

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

function BehavioralInsightsSection({ dream }) {
  const { paragraphs, items } = getBehaviorInsights(dream);

  if (paragraphs.length === 0 && items.length === 0) {
    return null;
  }

  return (
    <section
      id="behavioral-insights"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Behavioral insights
      </p>

      <h2 className="mb-5 font-serif text-3xl md:text-4xl">
        Why This Dream Can Feel So Specific
      </h2>

      {paragraphs.length > 0 && <TextBlocks text={paragraphs.join("\n\n")} />}
      {items.length > 0 && <div className="space-y-6">
        {items.map((insight) => <div key={insight.key}>
          {insight.title && <h3 className="font-serif text-xl text-[#1A1A1A]">{insight.title}</h3>}
          <p className={`${insight.title ? "mt-2 " : ""}text-base leading-relaxed text-[#6B6B6B]`}>{insight.content}</p>
        </div>)}
      </div>}
    </section>
  );
}

function DreamEmotionalThemesSection({ dream }) {
  const themes = [
    ...new Set([
      ...toTextItems(dream.emotionalState || dream.emotionalStates),
      ...toTextItems(dream.emotionalTriggers),
      ...(dream.emotionalConnections || []),
    ]),
  ].filter(Boolean);

  if (themes.length === 0) {
    return null;
  }

  return (
    <section
      id="emotional-themes"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional themes
      </p>

      <h2 className="mb-5 font-serif text-3xl md:text-4xl">
        Emotional Themes Connected to This Dream
      </h2>

      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => {
          const slug = normalizeSlug(theme);
          const hub = emotionalHubs[slug];

          if (hub) {
            return (
              <Link
                key={theme}
                href={`/emotions/${slug}`}
                className="border border-[#EAE6E1] bg-white/70 px-4 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]"
              >
                {hub.title}
              </Link>
            );
          }

          return (
            <span
              key={theme}
              className="border border-[#EAE6E1] bg-white/70 px-4 py-2 text-sm text-[#5F574E]"
            >
              {formatCategory(theme)}
            </span>
          );
        })}
      </div>
    </section>
  );
}

function getTypeText(item = {}, primaryKey, fallbackKey) {
  return item[primaryKey] || item[fallbackKey] || "";
}

function getTypeTitle(type = "") {
  return String(type || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getTypePreviewSlug(item = {}) {
  const explicitSlug = normalizeSlug(item?.slug || "");
  const typeSlug = normalizeSlug(item?.type || item?.title || "");
  const aliases = {
    "snake-biting-you": "snake-bite",
    "being-bitten-by-a-snake": "snake-bite",
  };

  return explicitSlug || aliases[typeSlug] || typeSlug;
}

function buildTypePreview(item = {}, standaloneDream) {
  const type = String(item?.type || item?.title || standaloneDream?.title || "").trim();
  const title = `${getTypeTitle(standaloneDream?.title || type)} Dream Meaning`;
  const excerpt = shorten(
    standaloneDream?.shortDescription ||
      standaloneDream?.microSummary ||
      item?.emotionalMeaning ||
      item?.emotional ||
      standaloneDream?.emotionalMeaning ||
      standaloneDream?.description,
    230
  );
  const summary = shorten(
    standaloneDream?.summary ||
      standaloneDream?.emotionalMeaning ||
      item?.symbolicMeaning ||
      item?.symbolic,
    260
  );

  return {
    ...item,
    type,
    title,
    excerpt,
    summary,
    standaloneDream,
    href: standaloneDream
      ? `/dreams/${normalizeSlug(standaloneDream.slug || standaloneDream.title)}`
      : "",
  };
}

function DreamTypesSection({ dream }) {
  const normalizedTypes = (dream.types || [])
    .map((item) => {
      const type = String(item?.type || item?.title || "").trim();
      const previewSlug = getTypePreviewSlug(item);
      const standaloneDream = getDreamBySlug(previewSlug, dreams);
      const id = normalizeSlug(item?.slug || type);
      const preview = buildTypePreview(item, standaloneDream);

      return {
        ...item,
        id,
        type,
        preview,
        summary: item?.summary || item?.shortDescription || "",
        emotionalMeaning: getTypeText(item, "emotionalMeaning", "emotional"),
        symbolicMeaning: getTypeText(item, "symbolicMeaning", "symbolic"),
      };
    })
    .filter(
      (item) =>
        item.id &&
        item.type &&
        (item.preview?.standaloneDream ||
          item.summary ||
          item.emotionalMeaning ||
          item.symbolicMeaning)
    );
  const types = [
    ...new Map(normalizedTypes.map((item) => [item.id, item])).values(),
  ];

  if (types.length === 0) {
    return null;
  }

  const linkedTypes = types.filter((item) => item.preview?.standaloneDream);
  const inlineTypes = types.filter((item) => !item.preview?.standaloneDream);
  const linkedSectionTitle =
    normalizeSlug(dream.slug || dream.title) === "snakes"
      ? "Related Snake Dream Meanings"
      : `Related ${dream.title.toLowerCase()} Dream Meanings`;

  return (
    <section
      id="dream-types"
      aria-labelledby="dream-types-heading"
      className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
  Related interpretations
</p>

<h2 id="dream-types-heading">
  Common {dream.title.toLowerCase()} Dream Variations
</h2>

      {linkedTypes.length > 0 && (
        <div className="mb-12">
          <h3 className="mb-3 font-serif text-2xl md:text-3xl">
            {linkedSectionTitle}
          </h3>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
            These related interpretations stay separate because each one carries
            its own emotional atmosphere and search intent. This hub offers a
            preview, then points to the complete interpretation.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {linkedTypes.map((item) => (
              <Link
                key={item.id}
                href={item.preview.href}
                className="group block border-l border-[#D8C7A0] bg-white/75 px-5 py-4 transition hover:border-[#C6A96B] hover:bg-white"
              >
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">
                  Full interpretation
                </span>

                <h4 className="mt-2 font-serif text-xl leading-snug text-[#1A1A1A] transition group-hover:text-[#8F743C]">
                  {item.preview.title}
                </h4>

                {item.preview.excerpt && (
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                    {item.preview.excerpt}
                  </p>
                )}

                {item.preview.summary && (
                  <p className="mt-3 border-t border-[#EAE6E1] pt-3 text-sm leading-relaxed text-[#4F4A43]">
                    {item.preview.summary}
                  </p>
                )}

                <span className="mt-4 inline-block text-sm text-[#8F743C] underline underline-offset-4">
                  Read full interpretation
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {inlineTypes.length > 0 && (
        <nav aria-label={`${dream.title} dream variations`} className="mb-10 flex flex-wrap gap-2">
          {inlineTypes.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="border border-[#EAE6E1] bg-white/70 px-3 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]"
          >
            {getTypeTitle(item.type)}
          </a>
          ))}
        </nav>
      )}

      {inlineTypes.length > 0 && (
        <div className="space-y-16">
          {inlineTypes.map((item) => {
          const heading = `${getTypeTitle(item.type)} Dream Meaning`;

          return (
            <section
              key={item.id}
              id={item.id}
              aria-labelledby={`${item.id}-heading`}
              className="scroll-mt-28 mt-16"
            >
              <h3
                id={`${item.id}-heading`}
                className="mb-4 font-serif text-2xl md:text-3xl"
              >
                {heading}
              </h3>

              {item.summary && (
                <TextBlocks
                  text={item.summary}
                  className="mb-6"
                  textClassName="text-[#3A3A3A] text-base md:text-lg leading-relaxed font-serif"
                />
              )}

              {item.emotionalMeaning && (
                <section
                  aria-labelledby={`${item.id}-emotional-heading`}
                  className="mb-6"
                >
                  <h4
                    id={`${item.id}-emotional-heading`}
                    className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-[#8A8175]"
                  >
                    Emotional meaning
                  </h4>
                  <TextBlocks text={item.emotionalMeaning} />
                </section>
              )}

              {item.symbolicMeaning && (
                <section aria-labelledby={`${item.id}-symbolic-heading`}>
                  <h4
                    id={`${item.id}-symbolic-heading`}
                    className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-[#8A8175]"
                  >
                    Symbolic meaning
                  </h4>
                  <TextBlocks text={item.symbolicMeaning} />
                </section>
              )}
            </section>
          );
          })}
        </div>
      )}
    </section>
  );
}

function MultipleMeaningsSection({ dream, dreamTitle }) {
  const contradictionItems = getContradictionItems(dream.contradictions);
  const relationshipTypes = (dream.relatedDreams || [])
    .map((item) => (typeof item === "string" ? "" : item?.relationshipType))
    .filter(Boolean)
    .slice(0, 4);
  const categories = (dream.categories || []).slice(0, 4);
  const interpretiveThreads = [...new Set([...relationshipTypes, ...categories])]
    .map((thread) => formatCategory(thread))
    .slice(0, 6);

  if (contradictionItems.length === 0) {
    return null;
  }

  return (
    <section
      id="multiple-meanings"
      className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Multiple interpretations
      </p>

      <h2 className="mb-4 font-serif text-3xl md:text-4xl">
        Why {dreamTitle.toLowerCase()} dreams can mean more than one thing
      </h2>

      <div className="space-y-5">
        {contradictionItems.map((item) => (
          <div key={`${item.title}-${item.body.slice(0, 24)}`}>
            <h3 className="font-serif text-xl text-[#1A1A1A]">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#6B6B6B]">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {interpretiveThreads.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {interpretiveThreads.map((thread) => (
            <span
              key={thread}
              className="border border-[#EAE6E1] bg-white/70 px-3 py-1 text-sm text-[#5F574E]"
            >
              {thread}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

function DreamSymbolsSection({ symbols }) {
  const items = [...new Set(toTextItems(symbols).map((item) => String(item).trim()).filter(Boolean))];
  if (items.length === 0) return null;

  return <section id="dream-symbols" className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">Details in this dream</p>
    <h2 className="mb-4 font-serif text-3xl md:text-4xl">Dream Symbols</h2>
    <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">These are the specific images and details developed in this interpretation. Their importance depends on what happened and how you felt in the dream.</p>
    <div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="border border-[#EAE6E1] bg-white/70 px-4 py-2 text-sm text-[#5F574E]">{formatCategory(item)}</span>)}</div>
  </section>;
}

function DreamScenariosSection({ scenarios, context }) {
  const items = getStructuredItems(scenarios);
  const contextText = typeof context === "string" ? context.trim() : "";
  if (items.length === 0 && !contextText) return null;

  return <section id="dream-scenarios" className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">Scenario and context</p>
    <h2 className="mb-5 font-serif text-3xl md:text-4xl">How the Details Can Change the Meaning</h2>
    {contextText && <TextBlocks text={contextText} className="mb-8" />}
    {items.length > 0 && <div className="space-y-7">{items.map((item) => <div key={item.key} className="border-l border-[#D8C7A0] pl-5">
      {item.title && <h3 className="font-serif text-xl text-[#1A1A1A]">{item.title}</h3>}
      {item.body && <p className={`${item.title ? "mt-2 " : ""}text-base leading-relaxed text-[#6B6B6B]`}>{item.body}</p>}
    </div>)}</div>}
  </section>;
}

function ReflectionQuestionsSection({ questions }) {
  const items = toTextItems(questions);
  if (items.length === 0) return null;

  return <section id="reflection-questions" className="mt-16 scroll-mt-28 border-y border-[#EAE6E1] bg-white/60 px-5 py-9 md:px-8">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">Personal reflection</p>
    <h2 className="mb-4 font-serif text-3xl md:text-4xl">Questions for Reflecting on This Dream</h2>
    <p className="mb-6 text-base leading-relaxed text-[#6B6B6B]">Use these editorial prompts to explore your own context. They are invitations to reflection, not a diagnostic test.</p>
    <ul className="space-y-3">{items.map((question) => <li key={question} className="flex gap-3 text-base leading-relaxed text-[#5F574E]"><span aria-hidden="true" className="text-[#C6A96B]">—</span><span>{question}</span></li>)}</ul>
  </section>;
}

function IllustrativeExamplesSection({ examples }) {
  const items = getStructuredItems(examples, ["example", "description", "text", "meaning"]);
  if (items.length === 0) return null;

  return <section id="illustrative-examples" className="mt-16 scroll-mt-28 border-t border-[#EAE6E1] pt-10">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">Illustrative examples · not user submissions</p>
    <h2 className="mb-5 font-serif text-3xl md:text-4xl">How Context Can Shape the Interpretation</h2>
    <div className="space-y-7">{items.map((item) => <div key={item.key} className="border border-[#EAE6E1] bg-white/70 p-5">
      {item.title && <h3 className="font-serif text-xl text-[#1A1A1A]">{item.title}</h3>}
      {item.body && <p className={`${item.title ? "mt-2 " : ""}text-base leading-relaxed text-[#6B6B6B]`}>{item.body}</p>}
    </div>)}</div>
  </section>;
}

function DreamTagsSection({ tags }) {
  const items = [...new Set(toTextItems(tags).map((item) => String(item).trim()).filter(Boolean))];
  if (items.length === 0) return null;

  return <section aria-labelledby="dream-tags-heading" className="mt-16 border-t border-[#EAE6E1] pt-10">
    <h2 id="dream-tags-heading" className="mb-5 font-serif text-2xl md:text-3xl">Topics in This Interpretation</h2>
    <div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-[#EAE6E1] bg-white/70 px-4 py-2 text-sm text-[#5F574E]">{item}</span>)}</div>
  </section>;
}

function getDreamDescription(dream = {}) {
  return dream.description || dream.uniqueDescription || "";
}

function getDreamOpening(dream = {}) {
  const directOpening = dream.microSummary || dream.shortSummary;
  if (directOpening) return directOpening;

  return dream.shortDescription || getParagraphs(getDreamDescription(dream))[0] || "";
}

function getSupportingDescription(dream = {}) {
  const description = getDreamDescription(dream);
  if (dream.microSummary || dream.shortSummary || dream.shortDescription) return description;

  return getParagraphs(description).slice(1).join("\n\n");
}

function getDreamCategories(dream = {}) {
  const values = [
    ...toTextItems(dream.category),
    ...toTextItems(dream.categories),
  ];

  return [...new Set(values.map((value) => String(value).trim()).filter(Boolean))];
}

function getBehaviorInsights(dream = {}) {
  const value = dream.behaviorInsights || dream.behavioralInsights;

  if (!value) return { paragraphs: [], items: [] };
  if (typeof value === "string") {
    return { paragraphs: getParagraphs(value), items: [] };
  }

  const items = Array.isArray(value)
    ? value.map((item, index) => {
        if (typeof item === "string") {
          return { title: "", content: item, key: `${index}-${item.slice(0, 30)}` };
        }

        const title = item?.title || item?.behavior || item?.label || "";
        const content = item?.content || item?.meaning || item?.description || item?.text || "";
        return { title, content, key: `${index}-${title || content.slice(0, 30)}` };
      }).filter((item) => item.content)
    : [];

  return { paragraphs: [], items };
}

function getStructuredItems(value, bodyKeys = ["meaning", "description", "text", "example"]) {
  if (!Array.isArray(value)) return [];

  return value.map((item, index) => {
    if (typeof item === "string") {
      return { title: "", body: item, key: `${index}-${item.slice(0, 30)}` };
    }

    const title = item?.title || item?.label || "";
    const body = bodyKeys.map((key) => item?.[key]).find(Boolean) || "";
    return { title, body, key: `${index}-${title || body.slice(0, 30)}` };
  }).filter((item) => item.title || item.body);
}


export default async function DreamPage({ params }) {
  const resolvedParams = await params;
  const slug = String(resolvedParams?.slug || "").toLowerCase().trim();
  const dream = getDreamBySlug(slug);
 
if (!dream) {
  notFound();
}

const compactEnding = Boolean(dream.editorialControls?.compactEnding);

const clusterGuide = getClusterGuides().find(
  (cluster) =>
    cluster.dreams?.some(
      (d) => d.slug === dream.slug
    )
);

const canonicalDreamSlug = normalizeSlug(getCanonicalDreamSlug(dream, slug));

if (slug !== canonicalDreamSlug) {
  permanentRedirect(`/dreams/${canonicalDreamSlug}`);
}

function firstUsefulText(...values) {
  for (const value of values) {
    const items = toTextItems(value);
    if (items[0]) return shorten(items[0], 210);
  }
  return "";
}

function renderQuickTakeaways(dream) {
  const takeaways = [
    { label: "Symbolic", text: firstUsefulText(dream.symbolicMeaning, dream.symbolic) },
    { label: "Emotional", text: firstUsefulText(dream.emotionalMeaning, dream.emotional) },
    { label: "Spiritual", text: firstUsefulText(dream.spiritualMeaning, dream.spiritual) },
    { label: "Biblical", text: firstUsefulText(dream.biblicalMeaning, dream.biblical) },
  ].filter((item) => item.text);

  if (takeaways.length === 0) return null;

  return (
    <section id="quick-takeaways" aria-labelledby="quick-takeaways-heading" className="mb-12 scroll-mt-28 border-y border-[#EAE6E1] bg-white/60 px-5 py-7 md:px-7">
      <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">At a glance</p>
      <h2 id="quick-takeaways-heading" className="mb-5 font-serif text-2xl md:text-3xl">Quick Takeaways</h2>
      <dl className="grid gap-5 md:grid-cols-2">
        {takeaways.map((item) => (
          <div key={item.label} className="border-l border-[#D8C7A0] pl-4">
            <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#8A8175]">{item.label} takeaway</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[#5F574E]">{item.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const explicitRelatedDreams = getDreamsBySlugs(dream.relatedDreams, dreams);
const relatedDreamItems = explicitRelatedDreams;
const primaryRelatedDream = relatedDreamItems[0];
const dreamCategories = getDreamCategories(dream);
const primaryEmotionSlug = [
  ...(dream.emotionalConnections || []),
  ...dreamCategories,
]
  .map((value) => normalizeSlug(value))
  .find((emotionSlug) => emotionalHubs[emotionSlug]);
const primaryEmotion = primaryEmotionSlug
  ? emotionalHubs[primaryEmotionSlug]
  : null;

  const exploreThemes = getExploreThemes(dreams);
  const dreamTitle = dream.title || dream.slug.replace(/-/g, " ");
  const insightSections = getDreamInsightSections(dream);
  const summaryText = generateSummary(dream);
  const dynamicTitle = getDynamicDreamTitle(dreamTitle, dream);
  const breadcrumbSchema = getBreadcrumbSchema({
    dreamTitle,
    canonicalDreamSlug,
    emotion: primaryEmotion?.title,
    emotionSlug: primaryEmotionSlug,
  });
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dynamicTitle,
    description: summaryText,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dreamscriptures.com/dreams/${canonicalDreamSlug}`,
    },
    author: {
      "@type": "Person",
      name: "Amber Balentine",
      url: "https://www.dreamscriptures.com/author",
    },
    publisher: {
      "@type": "Organization",
      name: "DreamScriptures",
      url: "https://www.dreamscriptures.com",
    },
  };
  const faqItems = getDreamFAQItems(dream);
  const faqSchema = getFAQSchema(faqItems);
  const readingTime = getReadingTime(dream);
  const continueExploringDreams = getIntelligentRelatedDreams(dream, dreams, 6);

function getDreamContext(dream) {
  return dream.interpretationContext || dream.whenThisDreamAppears || "";
}

  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <ReadingProgressBar />
      <DreamSubmissionPopup />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SiteHeader />
     <div className="max-w-3xl mx-auto px-6 pt-6">
     <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#5F574E]">
  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
    <li>
      <Link href="/" className="hover:text-[#C6A96B] transition-colors">
        Home
      </Link>
    </li>

    <li>/</li>

    <li>
      <Link href="/dreams" className="hover:text-[#C6A96B] transition-colors">
        Dream Dictionary
      </Link>
    </li>

    <li>/</li>

    {primaryEmotion && (
      <>
        <li>
          <Link
            href={`/emotions/${primaryEmotionSlug}`}
            className="capitalize hover:text-[#C6A96B] transition-colors"
          >
            {primaryEmotion.title}
          </Link>
        </li>

        <li>/</li>
      </>
    )}

    <li className="text-[#6B6B6B]" aria-current="page">
      {dreamTitle}
    </li>
  </ol>
</nav>
</div>    

      <article id="dream-meaning" className="max-w-3xl scroll-mt-28 lg:max-w-3xl mx-auto px-6 pt-1 pb-10 md:pt-14 md:pb-24">
<h1 className="text-4xl md:text-5xl leading-[1.15] font-serif mb-4">
  {dynamicTitle}
</h1>
<DreamReaderTools slug={dream.slug} title={dreamTitle} />
<p className="mb-8 text-sm text-[#8A8177]" aria-label={`Estimated reading time ${readingTime} minutes`}>
  <span aria-hidden="true">⏱</span> {readingTime} min read
</p>
<EditorialAttribution className="mb-10" />
{getDreamOpening(dream) && (
  <section id="dream-overview" className="mb-12 scroll-mt-28">

    <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] mb-5">
      What does it mean to dream about {dream.title.toLowerCase()}?
    </h2>

    <TextBlocks text={getDreamOpening(dream)} />

  </section>
  
)}
{renderQuickTakeaways(dream)}
<div className="mb-12 space-y-3 border-y border-[#EAE6E1] py-6">
  <SearchBar />
  <LazyMobileQuickNav />
</div>
{getDreamContext(dream) && (
  <section id="when-this-dream-happens" className="mb-14 scroll-mt-28 border-t border-[#EAE6E1] pt-8">
    <h2 className="font-serif text-2xl md:text-3xl mb-4">
      When this dream tends to appear
    </h2>
    <TextBlocks text={getDreamContext(dream)} />
  </section>
)}

<div id="navigation" aria-hidden="true" />

 {dreamCategories.length > 0 && (
          <nav className="mb-8 flex flex-wrap gap-2">
            {dreamCategories.map((cat) => (
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



<DreamPageClientNav />

 <p className="text-xs tracking-widest text-[#A89F91] uppercase mb-8">
          Guide - {readingTime} min read
        </p>

        
{getSupportingDescription(dream) && <section aria-labelledby="quick-description-heading">
  <p id="quick-description-heading" className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">A closer look</p>
  <DescriptionBlocks text={getSupportingDescription(dream)} className="mb-10" relatedDream={primaryRelatedDream} />
</section>}

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
<BiblicalPerspective dream={dream} />
<EditorialAdUnit />
<MultipleMeaningsSection dream={dream} dreamTitle={dreamTitle} />
<DreamTypesSection dream={dream} />
<DreamScenariosSection scenarios={dream.scenarios} context={dream.context} />
<DreamSymbolsSection symbols={dream.dreamSymbols} />
<DreamListSection
  id="subconscious-patterns"
  eyebrow="Subconscious patterns"
  title="Subconscious Patterns Connected to This Dream"
  items={toTextItems(dream.subconsciousPatterns)}
/>
<DreamListSection
  id="life-situations"
  eyebrow="Waking life"
  title="Life Situations Connected to This Dream"
  items={toTextItems(dream.lifeSituations)}
/>
<BehavioralInsightsSection dream={dream} />
{!compactEnding && <DreamEmotionalPathways dream={dream} />}
{!compactEnding && <DreamEmotionalThemesSection dream={dream} />}
{!compactEnding && <DreamEmotionalConnections dream={dream} />}
{!compactEnding && <DreamSemanticAuthority dream={dream} />}
<IllustrativeExamplesSection examples={dream.illustrativeExamples} />
<ReflectionQuestionsSection questions={dream.reflectionQuestions} />
{!compactEnding && <DreamTagsSection tags={dream.tags} />}
        {summaryText && (
          <section className="mt-20 scroll-mt-28 border-y border-[#EAE6E1] py-10 text-center md:mt-32">
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
<ClusterPathway cluster={clusterGuide} currentSlug={dream.slug} />

       
       {faqItems.length > 0 && <section id="faqs" className="mt-16 border-t border-[#EAE6E1] pt-10 scroll-mt-28">
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
        </section>}
 <RelatedDreams slugs={dream.relatedDreams} relatedDreams={relatedDreamItems} />
 <DreamCompassPageCTA dreamTitle={dreamTitle} />
 {!compactEnding && <ContinueExploring dreams={continueExploringDreams} />}

        <aside className="mt-10 border-l border-[#D8C7A0] pl-5 text-sm leading-relaxed text-[#6B6B6B]" aria-label="Interpretation disclaimer">
          <p className="font-medium text-[#3A3A3A]">Dream interpretation is deeply personal.</p>
          <p className="mt-2">These interpretations are intended to encourage prayer, reflection, and discernment rather than provide absolute certainty, prediction, or professional advice.</p>
        </aside>

        <section className="mt-20 scroll-mt-28 border-y border-[#EAE6E1] bg-white px-6 py-10 text-center md:mt-32">
          <p className="font-serif text-base md:text-lg leading-relaxed text-[#3A3A3A]">
            Dreams do not follow one fixed meaning. The way this dream connects
            to your life, emotions, and experiences matters just as much as the
            symbols themselves.
          </p>
        </section>

        {!compactEnding && exploreThemes.length > 0 && (
          <section className="mt-16 scroll-mt-28">
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

      {!compactEnding && <section className="mt-20 scroll-mt-28 border-t border-[#EAE6E1] pt-10 md:mt-32">
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
      </section>}
      <ContentSources sources={dream.sources} />
      <ArticleFeedback dreamSlug={canonicalDreamSlug} />
      </article>

      {faqItems.length > 0 && <Script
        id="dream-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />}

      <JumpToNavigation
  target="#navigation"
  label="Jump to navigation"
/>

      <SubmitYourDreamCTA />
      <SiteFooter />
    </main>
  );
}
