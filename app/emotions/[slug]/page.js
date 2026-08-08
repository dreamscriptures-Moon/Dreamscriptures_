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

function getEmotion(slug) { return emotionalHubs[normalizeSlug(slug)]; }
export function generateStaticParams() { return Object.keys(emotionalHubs).map((slug) => ({ slug })); }
export async function generateMetadata({ params }) { const slug = normalizeSlug((await params)?.slug); const emotion = getEmotion(slug); if (!emotion) return {}; return { title: `Dreams About ${emotion.title} | Dream Meaning & Interpretation`, description: shorten(`${emotion.intro} Explore connected dream symbols, emotional patterns, waking-life reflections, and related meanings.`, 160), alternates: { canonical: `/emotions/${slug}` } }; }

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
  const manifestationItems = (emotion.manifestations || []).length ? emotion.manifestations : connectedDreams.slice(0, 5).map((dream) => `${dream.title} can carry this feeling through its particular setting, action, and emotional outcome.`);
  const wakingParagraphs = (emotion.lifeSituations || []).length ? [`This emotional pattern may become more noticeable when waking life includes ${emotion.lifeSituations.slice(0, 4).join(", ").toLowerCase()}. A dream does not diagnose what is happening; it can simply offer a private space to notice what feels active.`] : [`Dreams about ${emotion.title.toLowerCase()} can invite you to consider where a similar feeling appears in waking life. The connection may be direct, symbolic, or unclear, so reflection is more useful than certainty.`];
  const faqs = [
    { question: `What can ${emotion.title.toLowerCase()} mean in a dream?`, answer: meaningParagraphs[0] || `${emotion.title} can shape dream imagery when this feeling is asking for attention, honesty, or care. Its meaning depends on the dream's context and your personal associations.` },
    { question: `Why do I keep feeling ${emotion.title.toLowerCase()} in dreams?`, answer: "Recurring feelings may reflect a theme that remains emotionally vivid, but repetition is not a prediction or diagnosis. Notice what changes from dream to dream and what stays the same." },
    { question: `How can I reflect on a dream about ${emotion.title.toLowerCase()}?`, answer: "Write down the moment the feeling became strongest, the symbol or person connected with it, and how the dream ended. Then consider whether the feeling resembles anything current or familiar in waking life." },
  ];
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.dreamscriptures.com/" }, { "@type": "ListItem", position: 2, name: "Emotions", item: "https://www.dreamscriptures.com/emotions" }, { "@type": "ListItem", position: 3, name: emotion.title, item: `https://www.dreamscriptures.com/emotions/${slug}` }] };

  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><article>
    <header className="border-b border-[#ded7cd] bg-[#fbf9f5]"><div className="mx-auto max-w-5xl px-6 py-12 md:py-20"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emotions", href: "/emotions" }, { label: emotion.title }]} /><p className="text-xs uppercase tracking-[0.2em] text-[#8f743c]">Emotional dream guide</p><h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.08] md:text-7xl">Dreams About {emotion.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#686159]">{emotion.intro}</p></div></header>
    <div className="mx-auto max-w-5xl px-6">
      <section className="grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24"><SectionHeading eyebrow="Emotional meaning" title={`What Can ${emotion.title} Mean in Dreams?`} /><div className="space-y-5 leading-7 text-[#686159]">{meaningParagraphs.length ? meaningParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <><p>{emotion.intro}</p><p>The feeling may be the central subject of the dream, or it may change how a person, place, or symbol is experienced. Treat it as context for reflection, not as a guaranteed message.</p></>}</div></section>
      {manifestationItems.length > 0 && <section className="border-y border-[#ded7cd] py-16"><SectionHeading eyebrow="Dream forms" title={`How ${emotion.title} Can Appear in Dreams`} intro="These forms come from this emotional hub's existing interpretation and connected dream relationships." /><div className="mt-8 grid gap-4 md:grid-cols-2">{manifestationItems.slice(0, 6).map((item) => <p key={item} className="border-l border-[#b89b62] px-5 py-3 leading-7 text-[#686159]">{item}</p>)}</div></section>}
      {connectedDreams.length > 0 && <section className="py-16"><SectionHeading title={`${emotion.title} and Dream Symbols`} intro="The symbols below are connected through the site's existing emotional relationships. Their meanings still depend on the full dream and the dreamer's own context." /><DreamPreviewGrid dreams={connectedDreams} limit={6} /></section>}
      <section className="grid gap-12 border-t border-[#ded7cd] py-16 md:grid-cols-2"><SectionHeading title={`${emotion.title} and Waking Life`} /><div className="space-y-5 leading-7 text-[#686159]">{wakingParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{emotion.questionsToReflectOn?.length > 0 && <ul className="space-y-3 border-l border-[#b89b62] pl-5">{emotion.questionsToReflectOn.slice(0, 3).map((question) => <li key={question}>{question}</li>)}</ul>}</div></section>
      {spiritualDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Where the data supports it" title="Spiritual Reflection" intro={`Some dreams connected with ${emotion.title.toLowerCase()} include existing spiritual interpretation. Read those perspectives as invitations to reflection rather than absolute spiritual claims.`} /><DreamPreviewGrid dreams={spiritualDreams} limit={4} /></section>}
      {biblicalDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Existing biblical interpretation" title="Biblical Perspective" intro="These connected dream entries contain biblical material in the current dream collection; the section is shown only because that source content exists." /><DreamPreviewGrid dreams={biblicalDreams} limit={4} /></section>}
      {connectedDreams.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title={`Popular ${emotion.title} Dreams`} /><DreamPreviewGrid dreams={connectedDreams} limit={8} /></section>}
      {relatedEmotions.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Emotions" /><LinkPills items={relatedEmotions} hrefFor={(item) => `/emotions/${item.slug}`} /></section>}
      {categories.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Categories" intro="These categories are represented by dreams connected to this emotional state." /><LinkPills items={categories} hrefFor={(item) => `/categories/${item.slug}`} /></section>}
      {guides.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Related Dream Guides" /><GuideLinks guides={guides} /></section>}
      <FAQSection items={faqs} />
      {connectedDreams.length > 8 && <section className="pb-20"><SectionHeading title="Explore More Dream Meanings" /><div className="mt-7 flex flex-wrap gap-3">{connectedDreams.slice(8).map((dream) => <Link key={dream.slug} href={`/dreams/${normalizeSlug(dream.slug)}`} className="rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm hover:border-[#b89b62]">{dream.title}</Link>)}</div></section>}
    </div></article><SiteFooter /></main>;
}
