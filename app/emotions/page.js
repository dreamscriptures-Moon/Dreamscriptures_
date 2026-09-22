import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { emotionalHubs } from "@/data/emotionalHubs";
import { coreEmotionBySlug, featuredEmotionSlugs } from "@/data/coreEmotions";
import { getCoreEmotionEntries } from "@/lib/emotions/discovery";
import { getRelevantGuides } from "@/lib/editorialDiscovery";
import { Breadcrumbs, FAQSection, GuideLinks, SectionHeading } from "@/app/components/EditorialDiscovery";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dream Emotions: How Did Your Dream Make You Feel?",
  description: "Explore dreams by feeling: fear, anxiety, sadness, grief, joy, love, peace, anger, repulsion, and more. Start with the emotion you remember.",
  path: "/emotions",
});

function FeelingCard({ emotion }) {
  return <Link href={`/emotions/${emotion.slug}`} className="group flex h-full flex-col rounded-2xl border border-[#ded7cd] bg-[#fcfaf6] p-5 transition hover:border-[#b89b62] hover:bg-[#fffdf9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f743c] sm:p-6">
    <h3 className="font-serif text-2xl leading-tight group-hover:text-[#806431]">{emotion.title}</h3>
    <p className="mt-3 flex-1 text-sm leading-6 text-[#70685f]">{emotion.intro}</p>
    <span className="mt-5 text-xs tracking-wide text-[#806431]">{emotion.count} related {emotion.count === 1 ? "dream" : "dreams"}<span aria-hidden="true"> &rarr;</span></span>
  </Link>;
}

export default function EmotionsPage() {
  const emotions = getCoreEmotionEntries();
  const featured = featuredEmotionSlugs.map((slug) => emotions.find((emotion) => emotion.slug === slug));
  const remaining = emotions.filter((emotion) => !featuredEmotionSlugs.includes(emotion.slug));
  const themes = Object.entries(emotionalHubs).filter(([slug]) => !coreEmotionBySlug[slug])
    .map(([slug, hub]) => ({ slug, title: hub.title })).sort((a, b) => a.title.localeCompare(b.title));
  const guides = getRelevantGuides(["emotion", "interpret", "psychology"], 3);
  const faqs = [
    { question: "What if I remember the feeling but not the dream?", answer: "Start with the feeling that stayed with you. You can explore the descriptions and reflection questions without remembering a complete story. Leave room for details to return, rather than trying to fill in what is missing." },
    { question: "What if I felt more than one emotion?", answer: "You can choose more than one. Grief may come with love, surprise may turn into fear, and relief may follow anxiety. The order and mixture can matter as much as any single feeling." },
    { question: "Does a dream emotion prove something about me?", answer: "No. These pages offer ways to reflect, not diagnoses or predictions. A dream feeling can be familiar, unexpected, or difficult to explain without establishing a condition or a fixed meaning." },
    { question: "Where can I explore life changes or specific worries?", answer: "Open Specific concerns and dream themes below. Those guides remain available separately from the main feeling choices. You can also browse dream categories for people, places, and situations." },
  ];

  return <main className="min-h-screen bg-[#f7f3ed] text-[#29251f]">
    <SiteHeader />
    <header className="border-b border-[#ded7cd] bg-[#fbf9f5]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Emotions" }]} />
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8f743c]">Dream emotions</p>
          <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl md:text-6xl">How did your dream make you feel?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#686159]">You may remember the feeling more clearly than the dream. Start with the one that feels closest. You don&apos;t need the whole story.</p>
        </div>
      </div>
    </header>
    <div className="mx-auto max-w-6xl px-6">
      <section id="dream-feelings" className="scroll-mt-28 py-12 md:py-16" aria-labelledby="familiar-feelings-heading">
        <h2 id="familiar-feelings-heading" className="font-serif text-3xl">Start with a familiar feeling</h2>
        <p className="mt-3 max-w-2xl leading-7 text-[#686159]">Choose what you felt during the dream or what stayed with you after waking.</p>
        <div className="mt-8 grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {featured.map((emotion) => <FeelingCard key={emotion.slug} emotion={emotion} />)}
        </div>
      </section>
      <section className="border-t border-[#ded7cd] py-12 md:py-16" aria-labelledby="more-feelings-heading">
        <h2 id="more-feelings-heading" className="font-serif text-3xl">A feeling that is harder to name</h2>
        <p className="mt-3 max-w-2xl leading-7 text-[#686159]">Maybe you felt exposed, torn, unwanted, or simply unsure. These feelings can overlap; you can explore more than one.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remaining.map((emotion) => <FeelingCard key={emotion.slug} emotion={emotion} />)}
        </div>
      </section>
      <section id="dream-themes" className="scroll-mt-28 border-t border-[#ded7cd] py-12">
        <details className="rounded-2xl border border-[#ded7cd] bg-[#fbf9f5] p-6 md:p-8">
          <summary className="cursor-pointer font-serif text-2xl leading-snug focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f743c]">Specific concerns and dream themes</summary>
          <p className="mt-4 max-w-3xl leading-7 text-[#686159]">Looking for a particular worry, life change, relationship experience, or process such as letting go? These guides explore the context around a feeling.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {themes.map((theme) => <Link key={theme.slug} href={`/emotions/${theme.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm hover:border-[#b89b62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f743c]">{theme.title}</Link>)}
          </div>
          <Link href="/categories" className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-[#806431] underline underline-offset-4">Browse dream categories &rarr;</Link>
        </details>
      </section>
      <section className="grid gap-8 border-t border-[#ded7cd] py-12 md:grid-cols-2 md:py-16">
        <SectionHeading title="A feeling is a starting point" />
        <div className="space-y-4 leading-7 text-[#686159]"><p>The same dream can feel different to different people. Being alone might feel peaceful in one dream and lonely in another.</p><p>Read the related dreams alongside your own experience. A feeling gives you a question to explore; it does not decide what the dream means.</p></div>
      </section>
      {guides.length > 0 && <section className="border-t border-[#ded7cd] py-12"><SectionHeading title="Guides for reflecting on your dream" /><GuideLinks guides={guides} /></section>}
      <FAQSection items={faqs} title="Questions about dream feelings" />
    </div>
    <SiteFooter />
  </main>;
}
