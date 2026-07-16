import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SearchBar from "@/app/components/SearchBar";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import JumpToNavigation from "@/app/components/JumpToNavigation";

export const metadata = {
  title:
    "Dream Basics: What Dreams Are, Why We Dream & How Dream Interpretation Works",

  description:
    "Learn the fundamentals of dreaming, dream symbols, dream interpretation, emotions, memory, and the science behind why we dream.",

  alternates: {
    canonical: "/guides/basics",
  },
};



const guides = [
  {
    title: "What Are Dreams",
    href: "/guides/what-are-dreams",
  },
  {
    title: "Why We Dream",
    href: "/guides/why-we-dream",
  },
  {
    title: "What Are Dream Symbols",
    href: "/guides/how-to-interpret-dream-symbols",
  },
  {
    title: "Different Types of Dreams",
    href: "/guides/what-are-dreams",
  },
  {
    title: "Why Dreams Feel Real",
    href: "/guides/why-dreams-feel-so-real",
  },
  {
    title: "Why We Forget Dreams",
    href: "/guides/how-to-remember-dreams",
  },
  {
    title: "How Dreams Work",
    href: "/guides/stages-of-sleep-and-dreaming",
  },
  {
    title: "Can Dreams Predict The Future",
    href: "/guides/why-do-some-dreams-come-true",
  },
  {
    title: "Most Common Dreams",
    href: "/guides/most-common-dreams",
  },
  {
    title: "How To Remember Dreams",
    href: "/guides/how-to-remember-dreams",
  },
];

export default function DreamBasicsPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">

      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">

        <nav className="text-sm text-[#8A8175] flex gap-2 mb-10">

          <Link href="/">Home</Link>

          <span>›</span>

          <Link href="/guides">Guides</Link>

          <span>›</span>

          <span className="text-[#6B6B6B]">Basics</span>

        </nav>

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.25em] text-[#B79B5E] text-xs mb-4">

            Dream Library

          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

            Basics

          </h1>

          <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">

            Learn what dreams are, why we dream, how dream symbols work,
            why dreams feel so real, and the foundations of thoughtful
            dream interpretation.

          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

              📚 15+ Guides

            </span>

            <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

              🌙 Beginner Friendly

            </span>

            <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

              🧠 Science • Psychology • Spirituality

            </span>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 mb-16">

        <p className="text-sm text-[#6B6B6B] mb-4">

          Looking for something specific?

        </p>
        
<p className="text-sm uppercase tracking-[0.18em] text-[#A89F91] mb-3">

Search 5,000+ dream meanings and interpretations

</p>

<section id="navigation">
</section>

        <SearchBar />

      </section>

      <section className="max-w-5xl mx-auto px-6 mt-16">

  <nav
    className="bg-white border border-[#EAE6E1] rounded-3xl p-8"
    aria-label="Guide sections"
  >
    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-2">
      Explore this guide
    </p>

    <ul className="space-y-2 pl-4 relative">
      <li
        aria-hidden="true"
        className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]"
      />

      <li>
        <Link
          href="#what-are-dreams"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          What Are Dreams?
        </Link>
      </li>

      <li>
        <Link
          href="#why-we-dream"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Why Do We Dream?
        </Link>
      </li>

      <li>
        <Link
          href="#dream-symbols"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          How Dream Symbols Work
        </Link>
      </li>

      <li>
        <Link
          href="#what-happens-when-we-sleep"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          What Happens When We Sleep?
        </Link>
      </li>

      <li>
        <Link
          href="#why-dreams-feel-real"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Why Dreams Feel Real
        </Link>
      </li>

      <li>
        <Link
          href="#why-we-forget-dreams"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Why We Forget Dreams
        </Link>
      </li>

      <li>
        <Link
          href="#why-dreams-are-weird"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Why Dreams Are Weird
        </Link>
      </li>

      <li>
        <Link
          href="#can-you-control-dreams"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Can You Control Dreams?
        </Link>
      </li>

      <li>
        <Link
          href="#who-dreams"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Who Dreams?
        </Link>
      </li>

      <li className="pt-2">
        <Link
          href="/dreams"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] font-medium text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Explore Dream Meanings →
        </Link>
      </li>
    </ul>

  </nav>

</section>
   
      <LazyMobileQuickNav />

<article className="max-w-4xl mx-auto px-6">



        <h2 className="font-serif text-4xl mb-8">



          What is Dream Basics?



        </h2>



        <div className="space-y-8 text-lg leading-relaxed text-[#444]">



          <p>



            Dreams have fascinated humanity for thousands of years.



            Ancient civilizations recorded them, religious traditions

            reflected on them, psychologists studied them, and modern

            neuroscience continues to investigate what happens inside the

            sleeping mind.



            Although explanations differ, one question has remained

            remarkably consistent:



            why do we dream?



          </p>



          <p>



            Dream Basics is designed to answer that question before jumping

            into individual dream meanings.



            Instead of immediately searching for the meaning of a snake,

            water, a house, or falling, it helps build an understanding of

            how dreams actually work and why symbols cannot always be reduced

            to one universal definition.



          </p>



          <p>



            Every dream is shaped by memory, emotion, personal experience,

            culture, relationships, stress, beliefs, and subconscious

            association.



            Two people can dream about the same object while experiencing

            completely different emotional realities.



            A house may represent identity for one dreamer and family history

            for another.



            Water may symbolize emotional change, renewal, uncertainty or

            peace depending on the atmosphere surrounding the dream.



          </p>



          <p>



            This is why thoughtful dream interpretation focuses on context

            rather than fixed answers.



            Instead of asking only &quot;What does this symbol mean?&quot; it also asks

            &quot;How did it feel?&quot;, &quot;What was happening?&quot;, &quot;What emotions were

            present?&quot;, and &quot;What part of waking life does this resemble?&quot;



          </p>



          <p>



            Throughout this library you&apos;ll explore dreaming from multiple

            perspectives.



            Modern science explains REM sleep, memory consolidation and brain

            activity.



            Psychology explores subconscious patterns and emotional

            processing.



            Spiritual traditions consider dreams as experiences that may

            encourage reflection, wisdom and personal growth.



          </p>



          <p>



            Together these guides create a foundation for understanding dreams

            with curiosity instead of certainty.



            Rather than offering one-size-fits-all definitions, Dream Basics

            helps you learn how dreams communicate through emotion,

            symbolism, memory and lived experience so that every future dream

            meaning becomes easier to understand.



          </p>



        </div>



      </article>


<section className="max-w-5xl mx-auto mt-20 mb-20">

  <div className="bg-white border border-[#EAE6E1] rounded-3xl p-8 md:p-12">

    <h2 className="font-serif text-4xl mb-8 text-[#1A1A1A]">

      ⭐ Dream Fundamentals

    </h2>

    <div className="grid md:grid-cols-2 gap-4 text-[#6B6B6B]">

      <a href="#what-are-dreams" className="hover:text-[#C6A96B]">
        What Are Dreams?
      </a>

      <a href="#why-we-dream" className="hover:text-[#C6A96B]">
        Why We Dream
      </a>

      <a href="#what-happens-when-we-sleep" className="hover:text-[#C6A96B]">
        What Happens When We Sleep?
      </a>

      <a href="#why-dreams-feel-real" className="hover:text-[#C6A96B]">
        Why Dreams Feel Real
      </a>

      <a href="#why-we-forget-dreams" className="hover:text-[#C6A96B]">
        Why We Forget Dreams
      </a>

      <a href="#why-dreams-are-weird" className="hover:text-[#C6A96B]">
        Why Dreams Are Weird
      </a>

      <a href="#can-you-control-dreams" className="hover:text-[#C6A96B]">
        Can You Control Dreams?
      </a>

      <a href="#who-dreams" className="hover:text-[#C6A96B]">
        Who Dreams?
      </a>

    </div>

  </div>

</section>

<section
id="what-are-dreams"
className="max-w-4xl mx-auto px-6 mt-24"
>

<h2 className="font-serif text-4xl mb-8">

What Are Dreams?

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Dreams are experiences created by the mind during sleep, combining
images, memories, emotions, sensations and imagination into stories that
often feel completely real while they are happening.

</p>

<p>

Rather than replaying daily life exactly as it happened, dreams rebuild
experience through emotion and association. A childhood home may appear
next to a current workplace, familiar people may behave differently, and
impossible events can feel perfectly natural.

</p>

<p>

Scientists study dreams through sleep cycles, brain activity and memory
formation. Psychologists explore dreams as reflections of subconscious
patterns and emotional processing. Spiritual traditions often view dreams
as opportunities for guidance, reflection or personal growth.

</p>

<p>

Although these perspectives differ, they all recognize that dreams are a
natural part of being human. They help us process experiences, organize
memories, explore emotions and sometimes reveal thoughts that remain
hidden during ordinary waking life.

</p>

</div>

</section>
<section
id="why-we-dream"
className="max-w-4xl mx-auto px-6 mt-24"
>

<h2 className="font-serif text-4xl mb-8">

Why Do We Dream?

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

There is no single explanation for why humans dream. Modern research
suggests dreaming is connected to memory consolidation, emotional
processing, creativity and learning, while psychological and spiritual
traditions offer additional perspectives on meaning and self-awareness.

</p>

<p>

During sleep, the brain remains remarkably active. It reorganizes recent
experiences, strengthens important memories and creates new associations
between emotions, people and places. This process often appears as the
symbolic and emotional narratives we experience as dreams.

</p>

<p>

Instead of asking why every dream exists, it may be more useful to ask
what emotional patterns, memories or experiences the mind is continuing
to process beneath conscious awareness.

</p>

</div>

</section>

<section
  id="dream-symbols"
  className="max-w-4xl mx-auto px-6 mt-24"
>
  <h2 className="font-serif text-4xl mb-8">
    How Dream Symbols Work
  </h2>

  <div className="space-y-8 text-lg leading-relaxed text-[#444]">

    <p>
      Dream symbols do not have one universal meaning. Although many dream
      dictionaries assign fixed definitions to objects such as snakes,
      water, houses or teeth, dream interpretation is often far more
      personal.
    </p>

    <p>
      The same symbol can represent completely different experiences for
      different people. A dog may symbolize comfort, friendship and loyalty
      for one dreamer, while another person who was bitten by a dog may
      experience fear, danger or vulnerability.
    </p>

    <p>
      This is why DreamScriptures approaches dream interpretation through
      context rather than fixed answers. Instead of asking only,
      <em> &quot;What does this symbol mean?&quot;</em>, it also asks:
    </p>

    <ul className="list-disc pl-6 space-y-3">
      <li>How did the dream feel emotionally?</li>
      <li>What was happening in waking life?</li>
      <li>What other symbols appeared together?</li>
      <li>Did the symbol help, threaten or guide you?</li>
      <li>Does the symbol have personal or cultural significance?</li>
    </ul>

    <p>
      Dreams communicate through relationships between symbols, emotions,
      memories and experiences. Looking at the whole dream often provides
      far more insight than interpreting a single object by itself.
    </p>

  </div>
</section>

      
<section
id="what-happens-when-we-sleep"
className="max-w-4xl mx-auto px-6 mt-24"
>

<h2 className="font-serif text-4xl mb-8">

🧠 What Happens When We Sleep?

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Sleep is not a single state of unconsciousness. Throughout the night,
the brain moves through repeating cycles that help restore the body,
process emotions, strengthen memories and prepare us for the next day.

</p>

<p>

Most people experience four to six sleep cycles every night. Each cycle
contains different stages that become deeper before returning to REM
(Rapid Eye Movement) sleep, where the most vivid dreams usually occur.

</p>

<h3 className="font-serif text-2xl pt-4">

Sleep Cycles

</h3>

<p>

A complete sleep cycle lasts around ninety minutes. The brain moves from
light sleep into deeper sleep before returning to REM sleep. These
cycles repeat throughout the night, with REM periods becoming longer
towards morning.

</p>

<h3 className="font-serif text-2xl pt-4">

REM Sleep

</h3>

<p>

REM sleep is the stage most closely associated with vivid dreaming.
Brain activity becomes highly active while the body&apos;s muscles remain
temporarily relaxed, allowing the mind to create detailed and emotional
dream experiences.

</p>

<h3 className="font-serif text-2xl pt-4">

NREM Sleep

</h3>

<p>

Non-REM sleep focuses more on physical restoration. During these stages
the body repairs tissues, strengthens the immune system and conserves
energy while the brain continues organizing information gathered during
the day.

</p>

<h3 className="font-serif text-2xl pt-4">

Brain Activity

</h3>

<p>

Even while asleep, the brain remains remarkably active. Areas connected
to emotion, imagery and memory continue working, which is why dreams can
feel immersive and emotionally convincing even when they contain
impossible events.

</p>

<h3 className="font-serif text-2xl pt-4">

Memory Formation

</h3>

<p>

Scientists believe sleep helps strengthen important memories while
filtering unnecessary information. Dreams may reflect this process by
combining recent experiences with older memories and emotional
associations.

</p>

<h3 className="font-serif text-2xl pt-4">

Emotional Processing

</h3>

<p>

Dreams often revisit stress, relationships, fears and hopes because the
sleeping brain continues processing emotional experiences. This may help
explain why certain dreams feel meaningful or stay with us long after we
wake up.

</p>

</div>

</section>

<section id="why-dreams-feel-real" className="mt-20">
  <h2 className="font-serif text-3xl mb-6">
    Why Dreams Feel Real
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed mb-4">
    Dreams often feel remarkably real because many of the same brain regions
    involved in emotion, perception, and memory remain highly active during
    REM sleep. Although the body is asleep, the mind can create vivid
    experiences that feel completely believable.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed">
    Since the logical parts of the brain are less active while dreaming,
    unusual events rarely seem strange until we wake up. This helps explain
    why impossible situations can feel perfectly normal inside a dream.
  </p>
</section>

<section id="why-we-forget-dreams" className="mt-20">
  <h2 className="font-serif text-3xl mb-6">
    Why We Forget Dreams
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed mb-4">
    Most people dream several times each night, yet many remember little or
    nothing after waking. Dream memories fade quickly because the brain
    shifts from the sleeping state to waking consciousness before the dream
    is fully stored as a long-term memory.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed">
    Factors such as sleep quality, stress, waking suddenly, and keeping a
    dream journal can all influence how much of a dream you remember.
  </p>
</section>

<section id="can-you-control-dreams" className="mt-20">
  <h2 className="font-serif text-3xl mb-6">
    Can You Control Dreams?
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed mb-4">
    Some people become aware that they are dreaming while the dream is still
    happening. This experience is known as lucid dreaming. During a lucid
    dream, a person may be able to influence the dream environment, make
    decisions, or interact with dream characters intentionally.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed">
    Although not everyone experiences lucid dreams, researchers continue to
    study why they occur and how awareness develops during sleep.
  </p>
</section>

<section
id="why-dreams-are-weird"
className="max-w-4xl mx-auto px-6 mt-24"
>

<h2 className="font-serif text-4xl mb-8">

Why Are Dreams So Weird?

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Dreams rarely follow the rules of waking life.

People change identity.

Places merge together.

Time jumps forward without explanation.

The impossible often feels completely normal.

</p>

<p>

This happens because the dreaming brain builds experiences through
emotion and association instead of strict logic. Memories blend with
imagination, recent events mix with childhood experiences and symbolic
thinking becomes more active.

</p>

<p>

Rather than replaying reality exactly as it happened, dreams create
stories that reflect emotional patterns, memories and subconscious
connections, making even the strangest dreams feel believable while they
are happening.

</p>

</div>

</section>

<section
id="who-dreams"
className="max-w-4xl mx-auto px-6 mt-24"
>

<h2 className="font-serif text-4xl mb-8">

Who Dreams?

</h2>

<div className="space-y-10 text-lg leading-relaxed text-[#444]">

<div>

<h3 className="font-serif text-2xl mb-4">

Can Blind People Dream?

</h3>

<p>

Yes. People who are blind dream, although the experience depends on when
vision was lost. Those born blind often experience dreams through sound,
touch, movement, emotion, smell and spatial awareness rather than visual
images.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Can Babies Dream?

</h3>

<p>

Researchers believe babies spend a large amount of time in REM sleep,
suggesting dream-like brain activity occurs very early in life, although
the exact nature of infant dreams remains unknown.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Do Animals Dream?

</h3>

<p>

Many mammals and birds experience REM sleep and display behaviors that
suggest dream activity. Sleeping dogs may move their legs, twitch or
make sounds, indicating the brain continues creating internal
experiences during sleep.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Does Everyone Dream?

</h3>

<p>

Nearly everyone dreams several times each night. Many people simply do
not remember them because dream memories fade quickly during the
transition from sleeping to waking.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Why Do Some People Never Remember Dreams?

</h3>

<p>

Dream recall varies between individuals and is influenced by sleep
quality, stress, waking habits and attention. Most people dream
regularly, but the memory often disappears before it becomes part of
conscious awareness.

</p>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mt-24">

<h2 className="font-serif text-4xl mb-10">

Continue Exploring

</h2>

<div className="grid md:grid-cols-3 gap-8">

<Link
href="/guides/science"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8 hover:shadow-md transition"
>

<div className="text-3xl mb-5">🧠</div>

<h3 className="font-serif text-2xl mb-4">

 Science

</h3>

<p className="text-[#6B6B6B]">

Learn how REM sleep, memory, emotions and neuroscience shape dreams.

</p>

</Link>

<Link
href="/guides/psychology"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8 hover:shadow-md transition"
>

<div className="text-3xl mb-5">🧠</div>

<h3 className="font-serif text-2xl mb-4">

Dream Psychology

</h3>

<p className="text-[#6B6B6B]">

Understand subconscious patterns, emotions and recurring dream themes.

</p>

</Link>

<Link
href="/guides/interpretation"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8 hover:shadow-md transition"
>

<div className="text-3xl mb-5">🔍</div>

<h3 className="font-serif text-2xl mb-4">

Dream Interpretation

</h3>

<p className="text-[#6B6B6B]">

Learn how to approach dream symbols thoughtfully instead of relying on fixed definitions.

</p>

</Link>

</div>

</section>
<section className="max-w-5xl mx-auto px-6 mt-24">

<h2 className="font-serif text-4xl mb-10">

Frequently Asked Questions

</h2>
<div className="space-y-5">

<details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

<summary className="cursor-pointer font-serif text-xl">

What is the difference between dreams and dream interpretation?

</summary>

<p className="mt-4 text-[#6B6B6B] leading-relaxed">

Dreams are experiences that occur during sleep, while dream interpretation is the process of reflecting on symbols, emotions and experiences to understand possible personal meaning.

</p>

</details>

<details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

<summary className="cursor-pointer font-serif text-xl">

Why do people dream?

</summary>

<p className="mt-4 text-[#6B6B6B] leading-relaxed">

Researchers believe dreams are connected to memory, emotional processing, learning and subconscious activity, although no single theory explains every dream.

</p>

</details>

<details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

<summary className="cursor-pointer font-serif text-xl">

Do dreams have meaning?

</summary>

<p className="mt-4 text-[#6B6B6B] leading-relaxed">

Many dreams reflect emotional experiences, memories and subconscious patterns. Their meaning often depends on the dreamer&apos;s personal context rather than one universal definition.

</p>

</details>

<details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

<summary className="cursor-pointer font-serif text-xl">

Why do dreams feel real?

</summary>

<p className="mt-4 text-[#6B6B6B] leading-relaxed">

Dreams can feel real because emotional and visual areas of the brain remain highly active during REM sleep while critical reasoning becomes less dominant.

</p>

</details>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mt-24">

<h2 className="font-serif text-4xl mb-10">

Popular Dream Meanings

</h2>

<div className="flex flex-wrap gap-4">

<Link
href="/dreams/snake"
className="bg-white border border-[#EAE6E1] rounded-full px-6 py-3 hover:border-[#C6A96B]"
>

Snake Dream

</Link>

<Link
href="/dreams/water"
className="bg-white border border-[#EAE6E1] rounded-full px-6 py-3 hover:border-[#C6A96B]"
>

Water Dream

</Link>

<Link
href="/dreams/house"
className="bg-white border border-[#EAE6E1] rounded-full px-6 py-3 hover:border-[#C6A96B]"
>

House Dream

</Link>

<Link
href="/dreams/falling"
className="bg-white border border-[#EAE6E1] rounded-full px-6 py-3 hover:border-[#C6A96B]"
>

Falling Dream

</Link>

<Link
href="/dreams/chased"
className="bg-white border border-[#EAE6E1] rounded-full px-6 py-3 hover:border-[#C6A96B]"
>

Being Chased Dream

</Link>

</div>

</section>

<JumpToNavigation
  target="#navigation"
  label="Jump to Navigation"
/>

      <SiteFooter />

    </main>
  );
}
