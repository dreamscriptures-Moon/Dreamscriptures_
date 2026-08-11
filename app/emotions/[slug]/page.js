import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { emotionalHubs } from "@/data/emotionalHubs";
import { dreams } from "@/data/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { getDreamBySlug, shorten, uniqueDreams } from "@/lib/dreams";
import { getCategoriesForDreams, getRelevantGuides } from "@/lib/editorialDiscovery";
import { Breadcrumbs, DreamPreviewGrid, FAQSection, GuideLinks, LinkPills, SectionHeading } from "@/app/components/EditorialDiscovery";
import ContentSources from "@/app/components/ContentSources";

function getEmotion(slug) { return emotionalHubs[normalizeSlug(slug)]; }
export function generateStaticParams() { return Object.keys(emotionalHubs).map((slug) => ({ slug })); }
export async function generateMetadata({ params }) { const slug = normalizeSlug((await params)?.slug); const emotion = getEmotion(slug); if (!emotion) return {}; return { title: `Dreams About ${emotion.title} | Dream Meaning & Interpretation`, description: shorten(emotion.intro, 160), alternates: { canonical: `/emotions/${slug}` } }; }

function toParagraphs(items = []) { return items.filter(Boolean).slice(0, 4); }

export default async function EmotionPage({ params }) {
  const slug = normalizeSlug((await params)?.slug);
  const emotion = getEmotion(slug);
  if (!emotion) notFound();
  const explicitDreams = (emotion.connectedDreams || []).map((dreamSlug) => getDreamBySlug(dreamSlug, dreams)).filter(Boolean);
  const relatedDreams = dreams.filter((dream) => dream.emotionalConnections?.includes(slug));
  const connectedDreams = uniqueDreams([...explicitDreams, ...relatedDreams]);
  const categories = getCategoriesForDreams(connectedDreams);
  const relatedEmotions = (emotion.relatedHubs || []).map((relatedSlug) => ({ slug: relatedSlug, ...emotionalHubs[relatedSlug] })).filter((item) => item.title);
  const guides = getRelevantGuides([emotion.title, emotion.domain, ...(emotion.emotionalThemes || []), "interpret"], 3);
  const biblicalDreams = connectedDreams.filter((dream) => dream.biblical || dream.biblicalMeaning || dream.biblicalPerspective);
  const spiritualDreams = connectedDreams.filter((dream) => dream.spiritual || dream.spiritualMeaning);
  const meaningParagraphs = toParagraphs(emotion.deepInterpretation || []);
  const manifestationItems = emotion.manifestations || [];
  const wakingParagraphs = emotion.wakingLifeInterpretation || [];
  const faqs = emotion.faqs || [];
  const commonDreamPatterns = emotion.commonDreamPatterns || [];
  const contextualDifferences = emotion.contextualDifferences || [];
  const examples = emotion.examples || [];
  const relatedEmotionalStates = (emotion.relatedEmotionalStates || []).map((relatedSlug) => ({ slug: relatedSlug, ...emotionalHubs[relatedSlug] })).filter((item) => item.title);
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.dreamscriptures.com/" }, { "@type": "ListItem", position: 2, name: "Emotions", item: "https://www.dreamscriptures.com/emotions" }, { "@type": "ListItem", position: 3, name: emotion.title, item: `https://www.dreamscriptures.com/emotions/${slug}` }] };

  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><article>
    <header className="border-b border-[#ded7cd] bg-[#fbf9f5]"><div className="mx-auto max-w-5xl px-6 py-12 md:py-20"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emotions", href: "/emotions" }, { label: emotion.title }]} /><p className="text-xs uppercase tracking-[0.2em] text-[#8f743c]">Emotional dream guide</p><h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.08] md:text-7xl">Dreams About {emotion.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#686159]">{emotion.intro}</p></div></header>
    <div className="mx-auto max-w-5xl px-6">
      {meaningParagraphs.length > 0 && <section className="grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24"><SectionHeading eyebrow="Emotional meaning" title={`What Can ${emotion.title} Mean in Dreams?`} /><div className="space-y-5 leading-7 text-[#686159]">{meaningParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>}
      {manifestationItems.length > 0 && <section className="border-y border-[#ded7cd] py-16"><SectionHeading eyebrow="Dream forms" title={`How ${emotion.title} Can Appear in Dreams`} /><div className="mt-8 grid gap-4 md:grid-cols-2">{manifestationItems.slice(0, 6).map((item) => <p key={item} className="border-l border-[#b89b62] px-5 py-3 leading-7 text-[#686159]">{item}</p>)}</div></section>}
      {commonDreamPatterns.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title={`Common ${emotion.title} Dream Patterns`} /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{commonDreamPatterns.map((item) => <li key={item} className="border-l border-[#b89b62] px-5 py-3 text-[#686159]">{item}</li>)}</ul></section>}
      {contextualDifferences.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading title="Details That Can Change the Interpretation" /><div className="mt-8 space-y-5">{contextualDifferences.map((item) => <div key={item.title || item} className="border-l border-[#b89b62] pl-5"><h3 className="font-serif text-xl">{item.title || item}</h3>{item.description && <p className="mt-2 leading-7 text-[#686159]">{item.description}</p>}</div>)}</div></section>}
      {examples.length > 0 && <section className="border-b border-[#ded7cd] py-16"><SectionHeading eyebrow="Illustrative, not a user submission" title="Context Example" /><div className="mt-8 space-y-5">{examples.map((item) => <div key={item.title || item} className="border-l border-[#b89b62] pl-5"><h3 className="font-serif text-xl">{item.title || item}</h3>{item.description && <p className="mt-2 leading-7 text-[#686159]">{item.description}</p>}</div>)}</div></section>}
      {connectedDreams.length > 0 && <section className="py-16"><SectionHeading title={`${emotion.title} and Dream Symbols`} intro="The symbols below are connected through the site's existing emotional relationships. Their meanings still depend on the full dream and the dreamer's own context." /><DreamPreviewGrid dreams={connectedDreams} limit={6} /></section>}
      {wakingParagraphs.length > 0 && <section className="grid gap-12 border-t border-[#ded7cd] py-16 md:grid-cols-2"><SectionHeading title={`${emotion.title} and Waking Life`} /><div className="space-y-5 leading-7 text-[#686159]">{wakingParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>}
      {emotion.lifeSituations?.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Waking-Life Situations Connected to ${emotion.title}`} /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{emotion.lifeSituations.map((situation) => <li key={situation} className="border-l border-[#b89b62] px-5 py-3 text-[#686159]">{situation}</li>)}</ul></section>}
      {emotion.questionsToReflectOn?.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Questions for Reflecting on ${emotion.title} Dreams`} /><ul className="mt-8 space-y-3 border-l border-[#b89b62] pl-5">{emotion.questionsToReflectOn.map((question) => <li key={question}>{question}</li>)}</ul></section>}
      {spiritualDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Where the data supports it" title="Spiritual Reflection" intro={`Some dreams connected with ${emotion.title.toLowerCase()} include existing spiritual interpretation. Read those perspectives as invitations to reflection rather than absolute spiritual claims.`} /><DreamPreviewGrid dreams={spiritualDreams} limit={4} /></section>}
      {biblicalDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Existing biblical interpretation" title="Biblical Perspective" intro="These connected dream entries contain biblical material in the current dream collection; the section is shown only because that source content exists." /><DreamPreviewGrid dreams={biblicalDreams} limit={4} /></section>}
      {connectedDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Popular ${emotion.title} Dreams`} /><DreamPreviewGrid dreams={connectedDreams} limit={8} /></section>}
      {relatedEmotions.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Emotions" /><LinkPills items={relatedEmotions} hrefFor={(item) => `/emotions/${item.slug}`} /></section>}
      {relatedEmotionalStates.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Emotional States" /><LinkPills items={relatedEmotionalStates} hrefFor={(item) => `/emotions/${item.slug}`} /></section>}
      {categories.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Categories" intro="These categories are represented by dreams connected to this emotional state." /><LinkPills items={categories} hrefFor={(item) => `/categories/${item.slug}`} /></section>}
      {guides.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Dream Guides" /><GuideLinks guides={guides} /></section>}
      {faqs.length > 0 && <FAQSection items={faqs} />}
      <ContentSources sources={emotion.sources} />
      {connectedDreams.length > 8 && <section className="pb-20"><SectionHeading title="Explore More Dream Meanings" /><div className="mt-7 flex flex-wrap gap-3">{connectedDreams.slice(8).map((dream) => <Link key={dream.slug} href={`/dreams/${normalizeSlug(dream.slug)}`} className="rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm hover:border-[#b89b62]">{dream.title}</Link>)}</div></section>}
    </div></article><SiteFooter /></main>;
}
