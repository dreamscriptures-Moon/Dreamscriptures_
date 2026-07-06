import Link from "next/link";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import HomeSearchWrapper from "./components/HomeSearchWrapper";
import { DreamCard, DreamFeatureCard } from "@/components/DreamCards";
import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { featuredEmotions } from "@/data/featuredEmotions";
import {
  getDreamOfTheDay,
  getRecentlyAddedDreams,
} from "@/lib/dreamEngagement";


const popularDreams = [
  { title: "Falling", slug: "falling" },
  { title: "Snakes", slug: "snakes" },
  { title: "Being Chased", slug: "being-chased" },
  { title: "Teeth Falling Out", slug: "teeth-falling-out" },
  { title: "Flying", slug: "flying" },
  { title: "Water", slug: "water" },
];

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

export default function Home() {
  const recentlyAddedDreams = getRecentlyAddedDreams(dreams, 6);
  const dreamOfTheDay = getDreamOfTheDay(dreams);

  return (
<main className="bg-[#F7F5F2] text-[#1A1A1A] min-h-screen">
  <SiteHeader sticky />

  {/* HERO */}
  <section className="max-w-3xl mx-auto px-6 pt-12 md:pt-20 pb-10 text-center">

    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-serif tracking-tight mb-6">
Understand Your Dreams Through
Emotion, Symbolism and Personal Context
 </h1>

<p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
Explore dream meanings through emotional patterns,
symbolism, psychology, spirituality and personal
reflection to better understand what your dreams
may be communicating.
</p>

   <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
  Explore common dreams like 

  <Link href="/dreams/falling" className="underline mx-1">falling</Link>, 
  <Link href="/dreams/being-chased" className="underline mx-1">being chased</Link>, 
  <Link href="/dreams/teeth-falling-out" className="underline mx-1">losing teeth</Link>, 
  and 
  <Link href="/dreams/snakes" className="underline mx-1">snakes</Link>.
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
<section className="max-w-xl mx-auto px-6 pb-10 text-center">

  <h2 className="text-xl md:text-2xl font-medium mb-4">
    What does your dream mean?
  </h2>

  {/* Search */}
  <div className="max-w-md mx-auto mb-6">
    <HomeSearchWrapper />
  </div>

<div className="flex flex-wrap justify-center gap-3 mb-8">

  <span className="px-4 py-2 rounded-full bg-white border border-[#EAE6E1] text-sm">

    🌙 240+ Dream Meanings

  </span>

  <span className="px-4 py-2 rounded-full bg-white border border-[#EAE6E1] text-sm">

    ❤️ 70+ Emotional Themes

  </span>

  <span className="px-4 py-2 rounded-full bg-white border border-[#EAE6E1] text-sm">

    📚 100+ Dream Guides

  </span>

</div>

  {/* Intent shortcuts */}
  <div className="text-sm text-[#6B6B6B] space-y-2">

    <p className="font-medium">Browse by:</p>

    <div className="flex flex-wrap justify-center gap-2">
      <Link href="/dreams" className="underline">Dream symbol</Link>
      <Link href="/emotions" className="underline">Emotion</Link>
      <Link href="/categories" className="underline">Situation</Link>
    </div>

    <p className="mt-4">Or explore:</p>
<p className="text-xs text-[#8A8177] mt-2">
  Start with a common dream or search your own — there is no single fixed meaning.
</p>

    <div className="flex flex-wrap justify-center gap-3">
      <Link href="/dreams/falling" className="underline">Falling dreams meaning</Link>
      <Link href="/dreams/being-chased" className="underline">Being chased dream meaning</Link>
      <Link href="/dreams/teeth-falling-out" className="underline">Teeth falling out dream meaning</Link>
      <Link href="/dreams/snakes" className="underline">Snake dream meaning</Link>
    </div>

  </div>
<p className="text-sm text-[#6B6B6B] max-w-xl mx-auto mt-4">
  Dreams often repeat the same emotional patterns beneath different symbols like fear, uncertainty, or loss of control.
</p>
</section>

{/* DREAM OF THE DAY */}
<section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
  <div className="mb-8 text-center">
    <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
      Daily reflection
    </p>

    <h2 className="font-serif text-4xl md:text-5xl">
      Dream of the Day
    </h2>
  </div>

  <DreamFeatureCard dream={dreamOfTheDay} />
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
    Read our methodology
  </Link>
</div>


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
<LazyMobileQuickNav />
  

  {/* SEO INTERNAL LINKS */}
  <section className="max-w-3xl mx-auto px-6 pb-8 text-left">
    <p className="text-sm text-[#6B6B6B]">
     Many recurring dreams revolve around fear, uncertainty,
transformation, and emotional pressure.
 <Link href="/dreams/teeth-falling-out" className="underline">
        teeth falling out
      </Link>
      ,{" "}
      <Link href="/dreams/being-chased" className="underline">
        being chased
      </Link>
      , and{" "}
      <Link href="/dreams/falling" className="underline">
        falling dreams
      </Link>
      .
    </p>
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

{/* Popular dream meanings */}
      <section className="max-w-xl mx-auto px-6 py-2 md:py-22">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-serif">
          Popular dream meanings
        </h2>
        <div className="w-24 h-[1px] bg-[#C6A96B] mx-auto mb-8 opacity-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {popularDreams.map((dream) => (
            <Link
              key={dream.slug}
              href={`/dreams/${dream.slug}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl hover:border-[#C6A96B] hover:bg-white/40 transition"
            >
              <p className="text-base md:text-lg font-medium">{dream.title}</p>
             <p className="text-sm text-[#6B6B6B] mt-2">
              Explore the meaning of this dream and what it may reveal
             </p>
            </Link>
          ))}
        </div>
      </section>



      <div className="text-center mt-8">
  <Link
    href="/categories"
    className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition"
  >
    Browse all dream categories →
  </Link>
</div>

      <section className="bg-[#FAF9F7] px-6 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">
            How DreamScriptures Interprets Dreams
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
        DreamScriptures begins with the emotional
experience of the dream.

The same symbol may carry different meanings
depending on whether the dream feels fearful,
peaceful, overwhelming, comforting, or uncertain.

By examining emotions, symbolism, recurring
patterns, and life circumstances together,
interpretations become more personal and
meaningful.</p>
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
<section className="max-w-xl mx-auto px-6 py-1 text-center">

  <div className="border-t border-[#EAE6E1] pt-16">

    <p className="font-serif text-3xl md:text-5xl leading-tight text-[#1A1A1A] max-w-3xl mx-auto">
      “Dreams speak in symbols when words are no longer enough.”
    </p>

    <p className="mt-8 text-sm tracking-[0.18em] uppercase text-[#5F574E]">
      DreamScriptures
    </p>

  </div>

</section>



      <SiteFooter />
    </main>
  );
}
