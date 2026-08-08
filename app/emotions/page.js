import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { featuredEmotions } from "@/data/featuredEmotions";
import { dreams } from "@/data/dreams";
import { getEmotionEntries, getRelevantGuides } from "@/lib/editorialDiscovery";
import { Breadcrumbs, DreamPreviewGrid, FAQSection, GuideLinks, SectionHeading } from "@/app/components/EditorialDiscovery";

export const metadata = { title: "Dream Emotions: Explore Dreams by Feeling", description: "Explore dream meanings through fear, love, overwhelm, peace, grief, growth, and the emotional patterns represented in DreamScriptures data.", alternates: { canonical: "/emotions" } };

export default function EmotionsPage() {
  const emotions = getEmotionEntries();
  const featured = featuredEmotions.map((item) => emotions.find((emotion) => emotion.slug === item.slug)).filter(Boolean);
  const remaining = emotions.filter((emotion) => !featured.some((item) => item.slug === emotion.slug));
  const popularDreams = dreams.filter((dream) => dream.emotionalConnections?.length && dream.microSummary).slice(0, 6);
  const guides = getRelevantGuides(["emotion", "interpret", "psychology", "symbol"], 3);
  const faqs = [
    { question: "Why do emotions feel so strong in dreams?", answer: "Dreams can preserve an emotional atmosphere even when their plot becomes difficult to remember. That feeling may reflect recent experiences, older associations, imagination, or several influences at once." },
    { question: "Can the same dream symbol mean different things with different emotions?", answer: "Yes. A snake experienced with terror may invite reflection on threat or vulnerability, while a snake experienced with calm may suggest a very different personal association. The feeling adds context; it does not create a fixed answer." },
    { question: "Do difficult dream emotions mean something bad will happen?", answer: "Not necessarily. DreamScriptures treats dream interpretation as reflective rather than predictive. A difficult feeling may be worth exploring without assuming that it forecasts an event or provides a diagnosis." },
  ];
  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]"><SiteHeader />
    <header className="border-b border-[#ded7cd] bg-[#fbf9f5]"><div className="mx-auto max-w-6xl px-6 py-12 md:py-20"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emotions" }]} /><div className="max-w-3xl"><p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8f743c]">Emotional pathways</p><h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">Dream Emotions</h1><p className="mt-6 text-lg leading-8 text-[#686159]">Explore dreams through the emotions that shape them. Sometimes the feeling inside a dream can be just as meaningful as the people, places, or symbols that appear.</p></div></div></header>
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-16 md:py-24"><SectionHeading eyebrow="Start with the feeling" title="Explore Dreams by Emotion" intro="These pathways come from the site's existing emotional system. Begin with the feeling closest to the dream, then compare the connected symbols and experiences." /><div className="mt-10 grid gap-5 md:grid-cols-2">{featured.map((emotion) => <Link key={emotion.slug} href={`/emotions/${emotion.slug}`} className="group rounded-[1.75rem] border border-[#ded7cd] bg-[#fcfaf6] p-7 transition hover:border-[#b89b62]"><div className="flex items-start justify-between gap-4"><h2 className="font-serif text-2xl group-hover:text-[#806431]">{emotion.title}</h2>{emotion.count > 0 && <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-[#8f743c]">{emotion.count} dreams</span>}</div><p className="mt-3 leading-7 text-[#70685f]">{emotion.intro}</p></Link>)}</div><div className="mt-10 border-t border-[#ded7cd] pt-8"><h3 className="font-serif text-2xl">More emotional pathways</h3><div className="mt-5 flex flex-wrap gap-3">{remaining.map((emotion) => <Link key={emotion.slug} href={`/emotions/${emotion.slug}`} className="rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm hover:border-[#b89b62]">{emotion.title}{emotion.count ? ` · ${emotion.count}` : ""}</Link>)}</div></div></section>
      <section className="grid gap-12 border-y border-[#ded7cd] py-16 md:grid-cols-[.8fr_1.2fr] md:py-24"><SectionHeading eyebrow="Emotion changes context" title="Why Do Emotions Matter in Dreams?" /><div className="space-y-5 leading-7 text-[#686159]"><p>The same symbol can feel completely different depending on the emotion around it. A snake accompanied by terror may lead to a different reflection than a snake accompanied by calmness.</p><p>Emotion does not prove what a dream means, but it can help you ask better questions: Did you feel threatened or protected? Were you resisting a change or welcoming it? Did the feeling belong to the dream itself, or did it echo something familiar from waking life?</p><p>Reading symbol and feeling together gives interpretation more personal context while leaving room for uncertainty.</p></div></section>
      <section className="py-16"><SectionHeading title="Explore Popular Emotional Themes" intro="These are the emotional pathways most prominently featured in the current DreamScriptures collection." /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{featured.slice(0, 4).map((emotion) => <Link key={emotion.slug} href={`/emotions/${emotion.slug}`} className="border-t border-[#b89b62] py-5"><h3 className="font-serif text-xl">{emotion.title}</h3><p className="mt-2 text-sm leading-6 text-[#70685f]">{emotion.intro}</p></Link>)}</div></section>
      <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Popular Dreams" /><DreamPreviewGrid dreams={popularDreams} /></section>
      {guides.length > 0 && <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Dream Interpretation Guides" /><GuideLinks guides={guides} /></section>}
      <FAQSection items={faqs} title="Questions About Emotions in Dreams" />
    </div><SiteFooter /></main>;
}
