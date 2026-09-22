import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { emotionalHubs } from "@/data/emotionalHubs";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { shorten } from "@/lib/dreams";
import { createPageMetadata } from "@/lib/seo";
import { coreEmotionBySlug, getPrimaryEmotionSlug } from "@/data/coreEmotions";
import { getEmotionDreams } from "@/lib/emotions/discovery";
import { getDreamHref } from "@/lib/routes";
import { getCategoriesForDreams, getRelevantGuides } from "@/lib/editorialDiscovery";
import { Breadcrumbs, DreamPreviewGrid, FAQSection, GuideLinks, LinkPills, SectionHeading } from "@/app/components/EditorialDiscovery";
import ContentSources from "@/app/components/ContentSources";

function getEmotion(slug) { return emotionalHubs[normalizeSlug(slug)]; }
export function generateStaticParams() { return Object.keys(emotionalHubs).map((slug) => ({ slug })); }
export async function generateMetadata({ params }) { const slug = normalizeSlug((await params)?.slug); const emotion = getEmotion(slug); if (!emotion) return {}; return createPageMetadata({ title: `Dreams About ${emotion.title}`, description: shorten(emotion.intro, 160), path: `/emotions/${slug}` }); }

function toParagraphs(items = []) { return items.filter(Boolean).slice(0, 4); }

export default async function EmotionPage({ params }) {
  const slug = normalizeSlug((await params)?.slug);
  const emotion = getEmotion(slug);
  if (!emotion) notFound();
  const core = coreEmotionBySlug[slug];
  const primarySlug = !core && getPrimaryEmotionSlug(slug);
  const connectedDreams = getEmotionDreams(slug);
  const categories = getCategoriesForDreams(connectedDreams);
  const relatedSlugs = [...new Set([...(core?.related || []), ...(emotion.relatedHubs || []), ...(emotion.relatedEmotionalStates || []), ...(core?.concepts || [])])];
  const relatedEmotions = [...new Set(relatedSlugs.map(getPrimaryEmotionSlug).filter((key) => key && key !== slug))].map((key) => ({ slug: key, ...emotionalHubs[key] }));
  const relatedThemes = relatedSlugs.filter((key) => !coreEmotionBySlug[key] && key !== slug && emotionalHubs[key]).map((key) => ({ slug: key, ...emotionalHubs[key] }));
  const guides = getRelevantGuides([emotion.title, emotion.domain, ...(emotion.emotionalThemes || []), "interpret"], 3);
  const biblicalDreams = connectedDreams.filter((dream) => dream.biblical || dream.biblicalMeaning || dream.biblicalPerspective);
  const spiritualDreams = connectedDreams.filter((dream) => dream.spiritual || dream.spiritualMeaning);
  const meaningParagraphs = core ? [core.detail] : toParagraphs(emotion.deepInterpretation || []);
  const manifestationItems = core?.patterns || emotion.manifestations || [];
  const wakingParagraphs = emotion.wakingLifeInterpretation || [];
  const faqs = emotion.faqs || [];
  const commonDreamPatterns = emotion.commonDreamPatterns || [];
  const contextualDifferences = emotion.contextualDifferences || [];
  const examples = emotion.examples || [];
  const reflectionQuestions = core?.questions || emotion.questionsToReflectOn || [];
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.dreamscriptures.com/" }, { "@type": "ListItem", position: 2, name: "Emotions", item: "https://www.dreamscriptures.com/emotions" }, { "@type": "ListItem", position: 3, name: emotion.title, item: `https://www.dreamscriptures.com/emotions/${slug}` }] };

  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><article>
    <header className="border-b border-[#ded7cd] bg-[#fbf9f5]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emotions", href: "/emotions" }, { label: emotion.title }]} />
        <p className="text-xs uppercase tracking-[0.2em] text-[#8f743c]">{core ? "Explore a dream feeling" : "Dream theme and experience"}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] sm:text-5xl md:text-7xl">Dreams About {emotion.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#686159]">{emotion.intro}</p>
        <div className="mt-7 max-w-3xl border-l border-[#b89b62] pl-5">
          <p className="text-base leading-7 text-[#686159]">{core ? "You may recognize all of this feeling, or just a little of it. Start with what you remember and let the questions help you explore. A feeling alone cannot tell you what a dream means." : "This guide explores a specific concern, experience, or theme. Consider it alongside how the dream made you feel, rather than as an emotion you need to choose."}</p>
          {primarySlug && <p className="mt-3 text-sm text-[#806431]">For the broader feeling, explore <Link href={`/emotions/${primarySlug}`} className="underline underline-offset-4">{emotionalHubs[primarySlug].title}</Link>.</p>}
          {connectedDreams.length > 0 && <a href="#emotion-dreams" className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-[#806431] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f743c]">Explore {connectedDreams.length} related {connectedDreams.length === 1 ? "dream" : "dreams"}</a>}
        </div>
      </div>
    </header>
    <div className="mx-auto max-w-5xl px-6">
      {meaningParagraphs.length > 0 && <section className="grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24"><SectionHeading eyebrow="Emotional meaning" title={`What Can ${emotion.title} Mean in Dreams?`} /><div className="space-y-5 leading-7 text-[#686159]">{meaningParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>}
      {manifestationItems.length > 0 && <section className="border-y border-[#ded7cd] py-16"><SectionHeading eyebrow="Dream forms" title={`How ${emotion.title} Can Appear in Dreams`} /><div className="mt-8 grid gap-4 md:grid-cols-2">{manifestationItems.slice(0, 6).map((item) => <p key={item} className="border-l border-[#b89b62] px-5 py-3 leading-7 text-[#686159]">{item}</p>)}</div></section>}
      {commonDreamPatterns.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title={`Common ${emotion.title} Dream Patterns`} /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{commonDreamPatterns.map((item) => <li key={item} className="border-l border-[#b89b62] px-5 py-3 text-[#686159]">{item}</li>)}</ul></section>}
      {contextualDifferences.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title="Details That Can Change the Interpretation" /><div className="mt-8 space-y-5">{contextualDifferences.map((item) => <div key={item.title || item} className="border-l border-[#b89b62] pl-5"><h3 className="font-serif text-xl">{item.title || item}</h3>{item.description && <p className="mt-2 leading-7 text-[#686159]">{item.description}</p>}</div>)}</div></section>}
      {examples.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading eyebrow="Illustrative, not a user submission" title="Context Example" /><div className="mt-8 space-y-5">{examples.map((item) => <div key={item.title || item} className="border-l border-[#b89b62] pl-5"><h3 className="font-serif text-xl">{item.title || item}</h3>{item.description && <p className="mt-2 leading-7 text-[#686159]">{item.description}</p>}</div>)}</div></section>}
      {connectedDreams.length > 0 && <section id="emotion-dreams" className="scroll-mt-28 py-16"><SectionHeading title={`${emotion.title} and Dream Symbols`} intro="See whether any of these dreams sound familiar. Read them alongside what happened in your own dream and how you felt." /><DreamPreviewGrid dreams={connectedDreams} limit={6} /></section>}
      {wakingParagraphs.length > 0 && <section className="grid gap-12 border-t border-[#ded7cd] py-16 md:grid-cols-2"><SectionHeading title={`${emotion.title} and Waking Life`} /><div className="space-y-5 leading-7 text-[#686159]">{wakingParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>}
      {emotion.lifeSituations?.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Waking-Life Situations Connected to ${emotion.title}`} /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{emotion.lifeSituations.map((situation) => <li key={situation} className="border-l border-[#b89b62] px-5 py-3 text-[#686159]">{situation}</li>)}</ul></section>}
      {reflectionQuestions.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Questions for Reflecting on ${emotion.title} Dreams`} /><ul className="mt-8 space-y-3 border-l border-[#b89b62] pl-5">{reflectionQuestions.map((question) => <li key={question}>{question}</li>)}</ul></section>}
      {spiritualDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Where the data supports it" title="Spiritual Reflection" intro={`Some dreams connected with ${emotion.title.toLowerCase()} include existing spiritual interpretation. Read those perspectives as invitations to reflection rather than absolute spiritual claims.`} /><DreamPreviewGrid dreams={spiritualDreams} limit={4} /></section>}
      {biblicalDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Existing biblical interpretation" title="Biblical Perspective" intro="These connected dream entries contain biblical material in the current dream collection; the section is shown only because that source content exists." /><DreamPreviewGrid dreams={biblicalDreams} limit={4} /></section>}
      {connectedDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Popular ${emotion.title} Dreams`} /><DreamPreviewGrid dreams={connectedDreams} limit={8} /></section>}
      {relatedEmotions.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related feelings" /><LinkPills items={relatedEmotions} hrefFor={(item) => `/emotions/${item.slug}`} /></section>}
      {relatedThemes.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related concerns and dream themes" intro="Explore a more specific experience or the context around this feeling." /><LinkPills items={relatedThemes} hrefFor={(item) => `/emotions/${item.slug}`} /></section>}
      {categories.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Categories" intro="These categories are represented by dreams connected to this emotional state." /><LinkPills items={categories} hrefFor={(item) => `/categories/${item.slug}`} /></section>}
      {guides.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Dream Guides" /><GuideLinks guides={guides} /></section>}
      {faqs.length > 0 && <FAQSection items={faqs} />}
      <ContentSources sources={emotion.sources} />
      {connectedDreams.length > 8 && <section className="pb-20"><SectionHeading title="Explore More Dream Meanings" /><div className="mt-7 flex flex-wrap gap-3">{connectedDreams.slice(8).map((dream) => <Link key={dream.slug} href={getDreamHref(dream)} className="rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm hover:border-[#b89b62]">{dream.title}</Link>)}</div></section>}
    </div></article><SiteFooter /></main>;
}
