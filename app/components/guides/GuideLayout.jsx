import { Children } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SubmitYourDreamCTA from "@/components/SubmitYourDreamCTA";
import { GuideCardGrid, GuideHero, GuideSchemas } from "@/app/components/guides/GuideChrome";
import { dreams } from "@/data/dream";
import { getAllGuideEntries } from "@/lib/guideCatalog";
import { createGuideSchemas, getReadingTime, getRelatedDreamsForGuide, getRelatedGuides } from "@/lib/guideExperience";
import { normalizeSlug } from "@/lib/normalizeSlug";

export function normalizeGuide(input = {}) {
  const sections = Array.isArray(input.sections) ? input.sections : [];
  return {
    slug: normalizeSlug(input.slug),
    title: input.title || "Dream Guide",
    category: input.category || "Dream Education Guide",
    description: input.description || input.intro || "Explore this DreamScriptures guide.",
    intro: input.intro || "",
    content: Array.isArray(input.content) ? input.content : [],
    sections,
    quickInsight: input.quickInsight || "",
    reflection: input.reflection || "",
    actions: input.actions || input.actionSteps || [],
    relatedGuides: input.relatedGuides || input.related || [],
    relatedDreams: input.relatedDreams || [],
    faqs: input.faqs || input.FAQs || [],
    metadata: input.metadata || {},
    updated: input.updated || input.lastUpdated,
  };
}

function RichText({ text = "" }) {
  return <div className="space-y-6">{String(text).split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean).map((paragraph, index) => <p key={`${paragraph.slice(0, 40)}-${index}`} className="text-base leading-8 text-[#4F4A44] md:text-lg md:leading-9">{paragraph}</p>)}</div>;
}

export default function GuideLayout({ guide: rawGuide, children, contentStart = 0, toc: customToc, readingTime: customReadingTime, relatedDreams: customDreams, relatedGuides: customGuides, continueReading = true }) {
  const guide = normalizeGuide(rawGuide);
  if (!guide.slug) notFound();
  const toc = customToc || guide.sections.map((section, index) => ({ id: section.id || `section-${normalizeSlug(section.title) || index}`, title: section.title }));
  const allGuides = getAllGuideEntries();
  const relatedGuides = customGuides || getRelatedGuides({ ...guide, related: guide.relatedGuides }, allGuides);
  const relatedDreams = customDreams || getRelatedDreamsForGuide(guide, dreams);
  const schemas = createGuideSchemas({ slug: guide.slug, title: guide.title, description: guide.description, faqs: guide.faqs });
  const readingTime = customReadingTime || getReadingTime(guide);
  const registeredContent = children ? Children.toArray(children).slice(contentStart) : null;

  return <main className="min-h-screen bg-[#F7F5F2]">
    <GuideSchemas schemas={schemas} /><SiteHeader />
    <GuideHero category={guide.category} title={guide.title} description={guide.description} readingTime={readingTime} updated={guide.updated} toc={toc} />
    <article className="mx-auto max-w-3xl space-y-16 px-6 py-14 text-[#3A3A3A] md:py-20">
      {registeredContent || <>
        {guide.intro && <section aria-label="Introduction"><RichText text={guide.intro} /></section>}
        {guide.content.length > 0 && <section className="space-y-7">{guide.content.map((paragraph, index) => <RichText key={index} text={paragraph} />)}</section>}
        {guide.sections.map((section, index) => <section key={section.title} id={toc[index]?.id} className="scroll-mt-24 border-t border-[#E2DCD3] pt-12"><h2 className="mb-6 font-serif text-3xl leading-tight text-[#1A1A1A] md:text-4xl">{section.title}</h2><RichText text={section.body} /></section>)}
      </>}
      {guide.quickInsight && <aside className="rounded-2xl border-l-4 border-[#B79B5E] bg-[#F3ECDD] p-7 md:p-9"><p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#725B2E]">Quick Insight</p><p className="font-serif text-xl leading-8 text-[#3A3A3A] md:text-2xl">{guide.quickInsight}</p></aside>}
      {guide.reflection && <section className="rounded-2xl border border-[#E2DCD3] bg-white p-7 md:p-9"><h2 className="mb-4 font-serif text-2xl text-[#1A1A1A]">Reflection</h2><p className="text-lg italic leading-8 text-[#5F574E]">{guide.reflection}</p></section>}
      {guide.actions.length > 0 && <section><h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">Action Steps</h2><ul className="space-y-4">{guide.actions.map((item) => <li key={item} className="flex gap-4 rounded-xl bg-white p-4 leading-7"><span aria-hidden="true" className="text-[#9A7B3F]">✓</span><span>{item}</span></li>)}</ul></section>}
      <GuideCardGrid title="Related Dream Meanings" items={relatedDreams} type="dream" />
      <GuideCardGrid title="Related Guides" items={relatedGuides} />
      {continueReading && <section className="border-t border-[#E2DCD3] pt-12"><h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">Continue Reading</h2><div className="flex flex-wrap gap-3"><Link className="rounded-full border border-[#D9D1C6] bg-white px-5 py-3 hover:border-[#B79B5E]" href="/guides/types-of-dreams">Types of dreams</Link><Link className="rounded-full border border-[#D9D1C6] bg-white px-5 py-3 hover:border-[#B79B5E]" href="/emotions">Dream emotions</Link><Link className="rounded-full border border-[#D9D1C6] bg-white px-5 py-3 hover:border-[#B79B5E]" href="/categories">Dream categories</Link></div></section>}
    </article><SubmitYourDreamCTA /><SiteFooter />
  </main>;
}
