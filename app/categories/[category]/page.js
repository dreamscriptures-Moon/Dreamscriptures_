import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { categoriesData } from "@/data/categories";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { getCategoryDescription, getCategoryEntries, getCategoryEntry, getRelevantGuides, getRelatedCategories, getRepresentedEmotionsForDreams } from "@/lib/editorialDiscovery";
import { Breadcrumbs, DreamPreviewGrid, FAQSection, GuideLinks, LinkPills, SectionHeading } from "@/app/components/EditorialDiscovery";
import ContentSources from "@/app/components/ContentSources";

export function generateStaticParams() { return getCategoryEntries().map(({ slug }) => ({ category: slug })); }

export async function generateMetadata({ params }) {
  const category = getCategoryEntry((await params)?.category);
  if (!category) return {};
  return { title: `${category.title} Dream Meaning & Interpretation`, description: `Explore ${category.title.toLowerCase()} dream meanings, recurring themes, emotional patterns, and related interpretations from the DreamScriptures dream atlas.`, alternates: { canonical: `/categories/${category.slug}` } };
}

export default async function CategoryPage({ params }) {
  const category = getCategoryEntry((await params)?.category);
  if (!category) notFound();
  const data = categoriesData[category.key];
  const intro = getCategoryDescription(data);
  const emotions = getRepresentedEmotionsForDreams(category.dreams);
  const related = getRelatedCategories(category);
  const guides = getRelevantGuides([category.key, ...(data?.emotionalThemes || []), "interpret"], 3);
  const frameworks = (data?.framework || []).map((group) => ({ ...group, dreams: group.dreams.map((slug) => category.dreams.find((dream) => normalizeSlug(dream.slug) === normalizeSlug(slug))).filter(Boolean) })).filter((group) => group.dreams.length);
  const themes = data?.emotionalThemes || [];
  const distinctions = data?.distinctions || [];
  const interpretationQuestions = data?.interpretationQuestions || [];
  const recurringScenarios = data?.recurringScenarios || [];
  const examples = data?.examples || [];
  const reflectionPrompts = data?.reflectionPrompts || [];
  const relatedConcepts = data?.relatedConcepts || [];
  const faqs = data?.faqs || [];
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.dreamscriptures.com/" }, { "@type": "ListItem", position: 2, name: "Categories", item: "https://www.dreamscriptures.com/categories" }, { "@type": "ListItem", position: 3, name: category.title, item: `https://www.dreamscriptures.com/categories/${category.slug}` }] };

  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><SiteHeader />
    <article><header className="border-b border-[#ded7cd] bg-[#fbf9f5]"><div className="mx-auto max-w-5xl px-6 py-12 md:py-20"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.title }]} /><p className="text-xs uppercase tracking-[0.2em] text-[#8f743c]">Dream category · {category.count} interpretations</p><h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.08] md:text-7xl">{category.title} Dreams</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#686159]">{intro}</p></div></header>
      <div className="mx-auto max-w-5xl px-6">
        {data?.intro?.trim() && <section className="grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24"><SectionHeading eyebrow="Category context" title={`Understanding ${category.title} Dreams`} /><div className="space-y-5 text-base leading-7 text-[#686159]"><p>{data.intro.trim()}</p></div></section>}
        {themes.length > 0 && <section className="border-y border-[#ded7cd] py-16"><SectionHeading eyebrow="Recurring patterns" title={`What ${category.title} Dreams Can Represent`} /><div className="mt-8 grid gap-4 sm:grid-cols-2">{themes.map((theme) => <div key={theme} className="border-l border-[#b89b62] px-5 py-3"><h3 className="font-serif text-xl">{theme}</h3></div>)}</div></section>}
        {frameworks.map((group) => <section key={group.title} className="border-b border-[#ded7cd] py-14"><SectionHeading title={group.title} intro={group.description} /><DreamPreviewGrid dreams={group.dreams} limit={4} /></section>)}
        {distinctions.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title={`How ${category.title} Dreams Differ from Related Themes`} /><div className="mt-8 space-y-5">{distinctions.map((item) => <div key={item.title || item} className="border-l border-[#b89b62] pl-5"><h3 className="font-serif text-xl">{item.title || item}</h3>{item.description && <p className="mt-2 leading-7 text-[#686159]">{item.description}</p>}</div>)}</div></section>}
        {recurringScenarios.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title={`Recurring ${category.title} Dream Scenarios`} /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{recurringScenarios.map((item) => <li key={item} className="border-l border-[#b89b62] px-5 py-3 text-[#686159]">{item}</li>)}</ul></section>}
        {examples.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading eyebrow="Illustrative, not a user submission" title="How Context Can Change the Reading" /><div className="mt-8 space-y-5">{examples.map((item) => <div key={item.title || item} className="border-l border-[#b89b62] pl-5"><h3 className="font-serif text-xl">{item.title || item}</h3>{item.description && <p className="mt-2 leading-7 text-[#686159]">{item.description}</p>}</div>)}</div></section>}
        {interpretationQuestions.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title={`Questions for Reflecting on ${category.title} Dreams`} /><ul className="mt-8 space-y-3 border-l border-[#b89b62] pl-5">{interpretationQuestions.map((question) => <li key={question}>{question}</li>)}</ul></section>}
        {reflectionPrompts.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title="Optional Reflection Prompts" /><ul className="mt-8 space-y-3 border-l border-[#b89b62] pl-5">{reflectionPrompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul></section>}
        {relatedConcepts.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title="Related Concepts" /><div className="mt-7 flex flex-wrap gap-3">{relatedConcepts.map((concept) => <span key={concept} className="rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm">{concept}</span>)}</div></section>}
        <section className="py-16"><SectionHeading eyebrow="Dream dictionary" title={`Popular ${category.title} Dreams`} intro={`Read the individual interpretations that make up this ${category.title.toLowerCase()} collection.`} /><DreamPreviewGrid dreams={category.dreams} limit={8} /></section>
        {emotions.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`${category.title} Dreams by Emotion`} intro="These emotional pathways appear in the dreams in this category. Counts reflect existing dream relationships." /><LinkPills items={emotions} hrefFor={(item) => `/emotions/${item.slug}`} /></section>}
        {related.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Categories" intro="These categories overlap through dreams that are part of more than one collection." /><LinkPills items={related} hrefFor={(item) => `/categories/${item.slug}`} /></section>}
        {guides.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Dream Guides" /><GuideLinks guides={guides} /></section>}
        {faqs.length > 0 && <FAQSection items={faqs} />}
        <ContentSources sources={data?.sources} />
        {category.dreams.length > 8 && <section className="pb-20"><SectionHeading title="Explore More Dream Meanings" /><div className="mt-7 columns-1 gap-8 sm:columns-2 md:columns-3">{category.dreams.slice(8).map((dream) => <Link key={dream.slug} href={`/dreams/${normalizeSlug(dream.slug)}`} className="mb-3 block break-inside-avoid border-b border-[#ded7cd] py-3 hover:text-[#8f743c]">{dream.title}</Link>)}</div></section>}
      </div></article><SiteFooter /></main>;
}
