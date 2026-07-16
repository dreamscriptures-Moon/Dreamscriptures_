import Link from "next/link";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import HomeSearchWrapper from "./components/HomeSearchWrapper";
import RandomQuote from "@/app/components/RandomQuote";
import { DreamCard, DreamFeatureCard } from "@/components/DreamCards";
import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { featuredEmotions } from "@/data/featuredEmotions";
import {
  getDreamOfTheDay,
  getRecentlyAddedDreams,
} from "@/lib/dreamEngagement";
import SearchSuggestions from "@/app/components/SearchSuggestions";
import { getDreamHref } from "@/lib/routes";


const featuredGuides = [
  {
    slug: "why-we-dream",
    title: "Why do we dream?",
    desc: "Understanding what dreams are and why they happen.",
  },
  {
    slug: "recurring-dreams",
    title: "Recurring dreams",
    desc: "Why some dreams repeat and what they might mean.",
  },
  {
    slug: "nightmares",
    title: "Nightmares",
    desc: "What causes intense or disturbing dreams.",
  },
  {
    slug: "dreams-and-emotions",
    title: "Dreams and emotions",
    desc: "How your emotional state shapes your dreams.",
  },
];

const emotions = [
  { emoji:"😨", title:"Fear", slug:"fear" },
  { emoji:"❤️", title:"Love", slug:"love" },
  { emoji:"🌱", title:"Healing", slug:"healing" },
  { emoji:"✨", title:"Hope", slug:"hope" },
  { emoji:"😔", title:"Grief", slug:"grief" },
  { emoji:"🌊", title:"Peace", slug:"peace" },
];

const trendingDreams = [
  {
    title: "Dream About Snakes",
    slug: "snake",
    subtitle: "Transformation • Fear • Wisdom",
  },
  {
    title: "Dream About Death",
    slug: "death",
    subtitle: "Endings • Change • Renewal",
  },
  {
    title: "Dream About Falling",
    slug: "falling",
    subtitle: "Loss of Control • Anxiety • Uncertainty",
  },
  {
    title: "Dream About Being Chased",
    slug: "chased",
    subtitle: "Avoidance • Fear • Unresolved Conflict",
  },
  {
    title: "Dream About Water",
    slug: "water",
    subtitle: "Emotions • Healing • The Subconscious",
  },
  {
    title: "Dream About Pregnancy",
    slug: "pregnant",
    subtitle: "Growth • New Beginnings • Potential",
  },
];

const faqs=[

"Can dreams predict the future?",

"Why do I dream about the same person?",

"Why do dreams repeat?",

"Why can't I remember dreams?",

"What causes nightmares?",

"Do dreams have meaning?"

]


export default function Home() {
  const recentlyAddedDreams = getRecentlyAddedDreams(dreams, 4);
  const dreamOfTheDay = getDreamOfTheDay(dreams);


 
 return (
<main className="bg-[#F7F5F2] text-[#1A1A1A] min-h-screen">
  <SiteHeader sticky />

  {/* HERO */}
  <section className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-10 text-center">

    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-serif tracking-tight mb-6">
Discover What Your Dreams May Mean Through
Emotion, Symbolism, Spirituality and Personal Context </h1>

<p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
Explore dream meanings through emotional patterns,
symbolism, psychology, spirituality and personal
reflection to better understand what your dreams
may be communicating.
</p>

   <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
  Explore common dreams like 

  <Link href="/dreams/falling" className="underline mx-1">falling</Link>, 
  <Link href="/dreams/chased" className="underline mx-1">being chased</Link>, 
  <Link href="/dreams/teeth-falling-out" className="underline mx-1">losing teeth</Link>, 
  and 
  <Link href="/dreams/snake" className="underline mx-1">snakes</Link>.
</p>

<p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
  Understand your dreams through emotional patterns like 
  <Link href="/emotions/fear-of-losing-control" className="underline mx-1">loss of control</Link>, 
  <Link href="/emotions/emotional-overwhelm" className="underline mx-1">overwhelm</Link>, 
  and 
  <Link href="/emotions/uncertainty" className="underline mx-1">uncertainty</Link>.
</p>
  

   <div className="w-26 h-[1px] bg-[#EAE6E1] mx-auto mt-6 mb-3" />
  </section>

<LazyMobileQuickNav />

<section className="max-w-xl mx-auto px-6 pb-10 text-center">

  <h2 className="text-xl md:text-2xl font-medium mb-4">
    What does your dream mean?
  </h2>

  {/* Search */}
  <div className="max-w-md mx-auto mb-6">
    <HomeSearchWrapper />
  </div>
<SearchSuggestions />
{/* Divider */}
<div className="flex items-center gap-4 my-6">
  <div className="flex-1 h-[1px] bg-[#EAE6E1]" />
  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8175]"></span>
  <div className="flex-1 h-[1px] bg-[#EAE6E1]" />
</div>
<div className="flex flex-wrap justify-center gap-3 mt-6 mb-8">
  <span className="px-4 py-2 rounded-full bg-white border border-[#EAE6E1] text-sm">

    🌙  {dreams.length}+ Dream Meanings

  </span>

  <span className="px-4 py-2 rounded-full bg-white border border-[#EAE6E1] text-sm">

    ❤️ 74+ Emotional Themes

  </span>

  <span className="px-4 py-2 rounded-full bg-white border border-[#EAE6E1] text-sm">

    📚 105+ Dream Guides

  </span>

</div>
{/* DREAM OF THE DAY */}
{/* DREAM OF THE DAY */}
<section className="max-w-5xl mx-auto px-6 py-4 md:py-16">
  <div className="mb-4 text-center">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
      Daily reflection
    </p>
    <h2 className="font-serif text-4xl md:text-5xl">
      Dream of the Day
    </h2>
  </div>

  {/* Enhanced wrapper */}
  <div className="relative bg-gradient-to-br from-white to-[#FAF8F5] border-l-4 border-[#C6A96B] rounded-2xl shadow-sm p-1">
    <div className="bg-white rounded-xl p-6 md:p-8">
      {/* Small moon icon + label */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#8A8175] mb-4">
        <span className="text-lg">🌙</span>
        <span>Today’s featured dream</span>
      </div>

      <DreamFeatureCard dream={dreamOfTheDay} />
    </div>
  </div>
</section>

<p className="text-sm text-[#6B6B6B] max-w-xl mx-auto mt-4">
  Dreams often repeat the same emotional patterns beneath different symbols like fear, uncertainty, or loss of control.
</p>
</section>


{/* Trending Dreams */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="text-center mb-10">
    <p className="uppercase tracking-[0.18em] text-xs text-[#8A8175]">
      🔥 Trending This Week
    </p>

    <h2 className="font-serif text-4xl md:text-5xl mt-3">
      Trending Dream Meanings
    </h2>
  </div>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {trendingDreams.map((dream) => (
      <Link
        key={dream.slug}
        href={getDreamHref(dream.slug)}
        className="rounded-2xl border border-[#EAE6E1] bg-white p-6 transition hover:border-[#C6A96B]"
      >
     <h3 className="font-serif text-xl">
  {dream.title}
</h3>

<p className="mt-2 text-sm text-[#6B6B6B]">
  {dream.subtitle}
</p>
      </Link>
    ))}
  </div>
</section>

 {/* Quote */}
<section className="text-center py-24">
  <RandomQuote />

  <p className="uppercase text-xs mt-6 tracking-[0.2em]">
    DreamScriptures
  </p>
</section>

{/* Emotion Chips */}
<section className="text-center py-16">

<h2 className="font-serif text-4xl">
Browse by Emotion
</h2>

<div className="flex flex-wrap justify-center gap-3 mt-8">

{emotions.map((emotion) => (
  <Link
    key={emotion.slug}
    href={`/emotions/${emotion.slug}`}
    className="rounded-full border border-[#EAE6E1] px-5 py-3 bg-white hover:border-[#C6A96B]"
  >
    {emotion.emoji} {emotion.title}
  </Link>
))}

</div>

</section>

{/* featuredGuides */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="text-center mb-10">

    <h2 className="font-serif text-4xl">
      Start Learning
    </h2>

  </div>

  <div className="grid gap-6 md:grid-cols-2">

    {featuredGuides.map((guide) => (

      <Link
        key={guide.slug}
        href={`/guides/${guide.slug}`}
        className="rounded-xl border border-[#EAE6E1] bg-white p-6 hover:border-[#C6A96B]"
      >

        <h3 className="font-serif text-2xl">
          {guide.title}
        </h3>

        <p className="mt-3 text-[#6B6B6B]">
          {guide.desc}
        </p>

      </Link>

    ))}

  </div>

</section>


{/* RECENTLY ADDED DREAMS */}
<section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
  <div className="mx-auto mb-10 max-w-3xl text-center">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
      Newly published
    </p>

    <h2 className="font-serif text-4xl md:text-5xl">
      Recently Added Dreams
    </h2>
  </div>

  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {recentlyAddedDreams.map((dream) => (
      <DreamCard key={dream.slug || dream.title} dream={dream} />
    ))}
  </div>
</section>
 


  {/* EXPLANATION */}
  <section className="max-w-3xl mx-auto px-6 pb-12 text-left">
    <h2 className="text-2xl md:text-3xl font-serif mb-4">
      How can dreams be interpreted?
    </h2>

  <div className="space-y-4 mb-6">

  <div className="flex gap-3">
    <span className="text-[#C6A96B]">•</span>
    <p className="text-[#6B6B6B]">
      <strong className="text-[#1A1A1A]">Falling</strong> may reflect a loss of control.
    </p>
  </div>

  <div className="flex gap-3">
    <span className="text-[#C6A96B]">•</span>
    <p className="text-[#6B6B6B]">
      <strong className="text-[#1A1A1A]">Being chased</strong> may reflect avoidance,
      pressure or unresolved stress.
    </p>
  </div>

  <div className="flex gap-3">
    <span className="text-[#C6A96B]">•</span>
    <p className="text-[#6B6B6B]">
      <strong className="text-[#1A1A1A]">Water</strong> may reflect emotional depth,
      healing or personal change.
    </p>
  </div>

</div>

    <p className="text-[#6B6B6B] leading-relaxed">
      Understanding your dreams involves looking at emotional patterns, symbolic meaning, 
      spiritual interpretation, and real-life context. Explore our dream dictionary to 
      discover what your dreams may be trying to tell you.
    </p>
    <p className="text-xs text-[#8A8177] mt-4">
  Interpreted through emotional patterns, symbolic meaning, and real-life context not fixed definitions.
</p>

  </section>


{/* OUR APPROACH */}

<section className="bg-[#FAF9F7] px-6 py-20 md:py-28">
  <div className="max-w-3xl mx-auto text-center">


<p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
  Our approach
</p>

<h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#1A1A1A]">
The Meaning of a Dream Often Depends on the Emotion Behind It</h2>

<div className="w-16 h-[1px] bg-[#C6A96B] mx-auto my-8 opacity-70" />

<div className="space-y-6 text-base md:text-lg leading-relaxed text-[#6B6B6B]">
  <p>
    Many dream dictionaries assign fixed meanings to symbols.
  </p>

  <p>
    DreamScriptures takes a different approach.
  </p>

  <p>
    We explore dreams through emotional patterns, symbolic relationships,
    subconscious themes, and personal context because the same dream can
    mean something very different depending on how it feels and what is
    happening in your life.
  </p>
</div>

<div className="mt-10">
  <Link
    href="/methodology"
    className="text-sm underline underline-offset-4 transition hover:text-[#8F743C]"
  >
    Learn How We Interpret Dreams →
  </Link>
</div>


  </div>
</section>


{/* Explore Dreams Through Emotional Experiences */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl mb-5 font-serif">
            Explore Dreams Through Emotional Experiences
          </h2>

          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
  Dreams often repeat the same emotional patterns beneath different symbols.
  A dream about falling, being chased, losing someone, or feeling trapped
  may all connect to the same underlying emotional experience.
</p>

<p className="mt-5 text-[#6B6B6B] text-base md:text-lg leading-relaxed">
  Explore the emotional states that dreams quietly return to during periods
  of stress, uncertainty, transformation, grief, emotional pressure,
  healing, or inner change.
</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredEmotions.map((item) => {
            const emotion = emotionalHubs[item.slug];

            if (!emotion) return null;

            return (
              <Link
                key={item.slug}
                href={`/emotions/${item.slug}`}
                className="block border-l border-[#D8C7A0] bg-white/70 px-5 py-5 transition hover:border-[#C6A96B] hover:bg-white"
              >
                <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A]">
                  {emotion.title}
                </h3>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-[#6B6B6B]">
  {item.intro || emotion.intro}
</p>

{emotion.subconsciousPatterns?.length > 0 && (
  <p className="mt-4 text-[13px] leading-relaxed text-[#8A8177]">
    Common patterns:{" "}
    {emotion.subconsciousPatterns
      .slice(0, 2)
      .join(", ")}
  </p>
)}
              </Link>
            );
          })}
        </div>
      </section>


    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">

  <div className="text-center max-w-3xl mx-auto mb-12">

    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-4">
      Dream Library
    </p>

    <h2 className="text-4xl md:text-5xl font-serif mb-6">
      Dreams Knowledge Hub
    </h2>

    <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
      Explore dreams through science, psychology,
      spirituality, symbolism, wellness, history and
      modern research. Learn how dreams work before
      exploring individual dream meanings.
    </p>

  </div>

  <div className="grid gap-5 md:grid-cols-2">

    <Link href="/guides/basics" className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition">
      <h3 className="font-serif text-2xl">📖 Basics</h3>
      <p className="mt-3 text-[#6B6B6B]">
        Learn what dreams are, why we dream and how dream interpretation works.
      </p>
    </Link>

    <Link href="/guides/science" className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition">
      <h3 className="font-serif text-2xl">🧠 Science</h3>
      <p className="mt-3 text-[#6B6B6B]">
        REM sleep, memory, brain activity and neuroscience.
      </p>
    </Link>

    <Link href="/guides/psychology" className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition">
      <h3 className="font-serif text-2xl">🧠 Psychology</h3>
      <p className="mt-3 text-[#6B6B6B]">
        Freud, Jung, subconscious patterns and emotion.
      </p>
    </Link>

    <Link href="/guides/spirituality" className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition">
      <h3 className="font-serif text-2xl">✨ Spirituality</h3>
      <p className="mt-3 text-[#6B6B6B]">
        Christian, Islamic and African dream perspectives.
      </p>
    </Link>

    <Link href="/guides/history-culture" className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition">
      <h3 className="font-serif text-2xl">🌍 History & Culture</h3>
      <p className="mt-3 text-[#6B6B6B]">
        Discover how civilizations have understood dreams.
      </p>
    </Link>

    <Link href="/guides/wellness" className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition">
      <h3 className="font-serif text-2xl">🌿 Wellness</h3>
      <p className="mt-3 text-[#6B6B6B]">
        Improve dream recall, sleep quality and reflection.
      </p>
    </Link>

<Link
  href="/guides/interpretation"
  className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition"
>

  <h3 className="font-serif text-2xl">
    🧩 Interpretation
  </h3>

  <p className="mt-3 text-[#6B6B6B]">
    Learn how DreamScriptures interprets dreams using emotion, symbolism and context.
  </p>

</Link>

<Link
  href="/guides/research"
  className="block bg-white border border-[#EAE6E1] rounded-xl p-6 hover:border-[#C6A96B] transition"
>

  <h3 className="font-serif text-2xl">
    🔬 Research
  </h3>

  <p className="mt-3 text-[#6B6B6B]">
    Explore modern dream studies, sleep research and scientific discoveries.
  </p>

</Link>

  </div>

<div className="text-center mt-12">

  <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">
    Continue Learning
  </p>

  <h3 className="font-serif text-3xl mb-4">
    Explore the Dream Library
  </h3>

  <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-8">
    Learn about dreams through psychology, science, spirituality,
    symbolism, history and practical dream interpretation.
  </p>

  <Link
    href="/guides"
    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white rounded-full px-6 py-3 hover:bg-[#333] transition"
  >
    Explore the Dream Library →
  </Link>

</div>

</section>


<Link
  href="/about"
  className="block max-w-5xl mx-auto px-6 pb-24"
>
  <section className="bg-[#FAF8F5] border border-[#EAE6E1] rounded-2xl px-8 md:px-12 py-12 hover:border-[#C6A96B] transition duration-300">

    <p className="text-[11px] uppercase tracking-[0.2em] text-[#5F574E] mb-4">
      About DreamScriptures
    </p>

    <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5 text-[#1A1A1A]">
      A more thoughtful way to understand dreams
    </h2>

    <p className="text-[#4A4A4A] max-w-2xl leading-relaxed text-base md:text-lg">
    Most dream dictionaries focus on fixed meanings.

DreamScriptures explores dreams through emotional patterns,
symbolic relationships, subconscious themes,
and personal context.
</p>

    <div className="mt-8 inline-flex items-center gap-2 text-sm text-[#6B6B6B] group">
      <span className="group-hover:text-[#1A1A1A] transition">
        Learn more about our approach
      </span>
      <span className="group-hover:translate-x-1 transition">
        →
      </span>
    </div>

  </section>
</Link>

<section className="text-center py-20 md:py-28 bg-[#FAF8F5]">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="font-serif text-3xl md:text-4xl mb-4">
      Still wondering what your dream means?
    </h2>
    <p className="text-[#6B6B6B] text-base md:text-lg mb-8 max-w-xl mx-auto">
      Search over 300 dream interpretations, emotional themes, and dream guides.
    </p>

    <div className="max-w-md mx-auto mb-6">
      <HomeSearchWrapper />
    </div>

    {/* New prominent CTA row */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
      <Link
        href="/dreams"
        className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#333] transition"
      >
        Explore All Dreams →
      </Link>
      <Link
        href="/guides"
        className="inline-flex items-center gap-2 border border-[#EAE6E1] bg-white rounded-full px-8 py-3 text-sm font-medium text-[#1A1A1A] hover:border-[#C6A96B] transition"
      >
        Browse Guides
      </Link>
    </div>
  </div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20">
  <div className="text-center mb-10">
    <p className="uppercase tracking-[0.18em] text-xs text-[#8A8175]">
      Frequently Asked
    </p>

    <h2 className="font-serif text-4xl">
      Common Dream Questions
    </h2>
  </div>

  <div className="grid gap-4 sm:grid-cols-2">
    {faqs.map((faq) => (
      <Link
        key={faq}
        href="/guides"
        className="rounded-xl border border-[#EAE6E1] bg-white p-5 hover:border-[#C6A96B] transition"
      >
        {faq}
      </Link>
    ))}
  </div>
</section>

      <SiteFooter />
    </main>
  );
}
