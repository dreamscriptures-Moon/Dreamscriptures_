import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SearchBar from "@/app/components/SearchBar";
import { dreams } from "@/data/dreams";
import { categoriesData } from "@/data/categories";
import { featuredEmotions } from "@/data/featuredEmotions";
import { emotionalHubs } from "@/data/emotionalHubs";
import { getDreamHref } from "@/lib/routes";
import { getCategoryEntries, getRelevantGuides } from "@/lib/editorialDiscovery";
import { Breadcrumbs, DreamPreviewGrid, FAQSection, GuideLinks, SectionHeading } from "@/app/components/EditorialDiscovery";

export const metadata = {
  title: "Dream Categories: Explore Dream Meanings by Theme",
  description: "Browse the DreamScriptures dream meaning atlas by theme, including emotions, relationships, transformation, animals, water, identity, and more.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  const categories = getCategoryEntries();
  const popular = categories.slice(0, 6);
  const popularDreams = dreams.filter((dream) => dream.microSummary).slice(0, 8);
  const guides = getRelevantGuides(["interpret", "symbol", "recurring", "meaning"], 3);
  const emotions = featuredEmotions.map((item) => ({ ...item, ...emotionalHubs[item.slug] })).filter((item) => item.title).slice(0, 6);
  const faqs = [
    { question: "Can one dream belong to more than one category?", answer: "Yes. Categories are overlapping ways of exploring a dream. A dream about water, for example, may also involve fear, transformation, relationships, or spiritual reflection depending on its events and emotional tone." },
    { question: "Should I start with the symbol or the category?", answer: "Start with what you remember most clearly. A specific symbol can lead you to its dream meaning, while a category is helpful when the larger situation or theme feels more important than one object." },
    { question: "Does a category give every dream the same meaning?", answer: "No. A category creates context, not a fixed definition. Your associations, waking circumstances, and feelings inside the dream remain essential to a thoughtful interpretation." },
  ];

  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]"><SiteHeader />
    <section className="border-b border-[#ded7cd] bg-[#fbf9f5]"><div className="mx-auto max-w-6xl px-6 py-12 md:py-20"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories" }]} /><div className="grid items-end gap-10 md:grid-cols-[1.25fr_.75fr]"><div><p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8f743c]">Dream Meaning Atlas</p><h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">Dream Categories</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#686159]">Explore dreams through the themes, experiences, symbols, relationships, places, and situations that appear throughout our dream lives.</p></div><div className="rounded-3xl border border-[#ded7cd] bg-white/70 p-6"><p className="mb-4 text-sm text-[#686159]">Search for a symbol, person, place, or dream experience.</p><SearchBar /></div></div></div></section>
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-16 md:py-24"><SectionHeading eyebrow="The atlas" title="Explore by Theme" intro="Each collection brings related dreams into conversation without reducing them to one fixed meaning." /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => { const data = categoriesData[category.key]; return <Link key={category.slug} href={`/categories/${category.slug}`} className="group rounded-[1.75rem] border border-[#ded7cd] bg-[#fcfaf6] p-6 transition hover:-translate-y-0.5 hover:border-[#b89b62] motion-reduce:transform-none"><p className="text-xs uppercase tracking-[0.16em] text-[#8f743c]">{category.count} dream{category.count === 1 ? "" : "s"}</p><h2 className="mt-3 font-serif text-2xl group-hover:text-[#806431]">{category.title} Dreams</h2><p className="mt-3 text-sm leading-6 text-[#70685f]">{data?.emotionalNature || `Dreams connected through ${category.title.toLowerCase()} imagery, experiences, and emotional context.`}</p></Link>; })}</div></section>
      <section className="grid gap-10 border-y border-[#ded7cd] py-16 md:grid-cols-[.75fr_1.25fr] md:py-20"><SectionHeading eyebrow="A place to begin" title="Popular Dream Categories" intro="These broad collections offer several paths into the dream dictionary." /><div className="grid gap-3 sm:grid-cols-2">{popular.map((category, i) => <Link key={category.slug} href={`/categories/${category.slug}`} className="border-b border-[#ded7cd] py-4 font-serif text-xl hover:text-[#8f743c]"><span className="mr-4 text-sm text-[#a48a58]">0{i + 1}</span>{category.title}</Link>)}</div></section>
      <section className="grid gap-12 py-16 md:grid-cols-2 md:py-24"><SectionHeading eyebrow="How the atlas works" title="What Do Dream Categories Mean?" /><div className="space-y-5 leading-7 text-[#686159]"><p>Dream categories are reading paths. They gather recurring symbols and situations so you can compare how a theme changes across different dreams.</p><p>A single dream may belong to several categories at once. A storm might be a water dream, an anxiety dream, and a transformation dream. None of those labels is a verdict; each offers a different angle for reflection.</p><p>Begin with the category that feels closest to what stayed with you, then pay attention to the dream&apos;s emotional tone and your own associations.</p></div></section>
      <section className="border-t border-[#ded7cd] py-16"><SectionHeading eyebrow="Another way in" title="Explore Dreams by Emotion" intro="When the feeling is clearer than the symbol, follow an emotional pathway instead." /><div className="mt-8 grid gap-4 md:grid-cols-3">{emotions.map((emotion) => <Link key={emotion.slug} href={`/emotions/${emotion.slug}`} className="border-l border-[#b89b62] bg-white/55 p-5"><h3 className="font-serif text-xl">{emotion.title}</h3><p className="mt-2 text-sm leading-6 text-[#70685f]">{emotion.intro}</p></Link>)}</div><Link href="/emotions" className="mt-7 inline-block font-medium text-[#806431] underline underline-offset-4">Browse all dream emotions →</Link></section>
      <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Explore Dream Guides" intro="Build a more grounded approach to symbols, patterns, and personal context." /><GuideLinks guides={guides} /></section>
      <section className="border-t border-[#ded7cd] py-16"><SectionHeading title="Popular Dream Meanings" /><DreamPreviewGrid dreams={popularDreams} limit={8} /></section>
      <FAQSection items={faqs} title="Questions About Dream Categories" />
    </div><SiteFooter /></main>;
}
