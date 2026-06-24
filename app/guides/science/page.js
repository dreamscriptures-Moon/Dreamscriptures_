import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SearchBar from "@/app/components/SearchBar";

export const metadata = {
  title:
    "Dream Science: REM Sleep, Brain Activity & The Neuroscience of Dreams",

  description:
    "Learn how dreams work through sleep cycles, REM sleep, brain activity, memory, emotion and modern neuroscience.",

  alternates: {
    canonical: "/guides/science",
  },
};

const startLearning = [
  {
    title: "What Is Dream Science?",
    description:
      "Discover how modern science studies dreaming and the sleeping brain.",
    href: "#what-is-dream-science",
    icon: "🔬",
    read: "5 min read",
  },

  {
    title: "REM Sleep Explained",
    description:
      "Understand the sleep stage most closely associated with vivid dreams.",
    href: "#rem-sleep",
    icon: "🌙",
    read: "6 min read",
  },

  {
    title: "How The Brain Dreams",
    description:
      "Explore the brain regions involved in dreaming and imagination.",
    href: "#brain-activity",
    icon: "🧠",
    read: "7 min read",
  },

  {
    title: "Memory & Emotion",
    description:
      "See how dreams connect with memory formation and emotional processing.",
    href: "#memory-emotion",
    icon: "💭",
    read: "6 min read",
  },
];

export default function DreamSciencePage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">

      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">

        <nav className="flex gap-2 text-sm text-[#8A8175] mb-10">

          <Link href="/">Home</Link>

          <span>›</span>

          <Link href="/guides">Guides</Link>

          <span>›</span>

          <span>Dream Science</span>

        </nav>

        <p className="uppercase tracking-[0.22em] text-[#B79B5E] text-xs mb-4">

          Dream School

        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

          Dream Science

        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[#6B6B6B] leading-relaxed">

          Discover how the brain creates dreams through sleep,
          memory, emotion, neuroscience and modern biology.

        </p>

        <div className="flex flex-wrap gap-3 mt-10">

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🔬 Sleep Science

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🧠 Brain & Memory

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🌙 REM Sleep

          </span>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 mb-20">

        <SearchBar />

      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Main Topics

            </p>

            <p>

              REM Sleep

              <br />

              Brain Activity

              <br />

              Memory

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Disciplines

            </p>

            <p>

              Neuroscience

              <br />

              Sleep Medicine

              <br />

              Psychology

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Reading Level

            </p>

            <h3 className="font-serif text-2xl">

              Beginner

            </h3>

          </div>

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Reading Time

            </p>

            <h3 className="font-serif text-2xl">

              35 min

            </h3>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 mb-20">

        <div className="bg-white rounded-3xl border border-[#EAE6E1] p-8">

          <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

            START HERE

          </p>

          <h2 className="font-serif text-4xl mb-8">

            Reading Path

          </h2>

          <div className="space-y-5 text-lg">

            <a href="#what-is-dream-science">

              ① What Is Dream Science?

            </a>

            <div>↓</div>

            <a href="#sleep-cycles">

              ② Sleep Cycles

            </a>

            <div>↓</div>

            <a href="#rem-sleep">

              ③ REM Sleep

            </a>

            <div>↓</div>

            <a href="#brain-activity">

              ④ Brain Activity

            </a>

            <div>↓</div>

            <a href="#memory-emotion">

              ⑤ Memory & Dreams

            </a>

            <div>↓</div>

            <a href="#lucid-dreaming">

              ⑥ Lucid Dreaming

            </a>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24">

        <div className="mb-10">

          <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

            START LEARNING

          </p>

          <h2 className="font-serif text-4xl mt-3">

            Explore Dream Science

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {startLearning.map((item) => (

            <a
              key={item.title}
              href={item.href}
              className="bg-white border border-[#EAE6E1] rounded-2xl p-8 hover:shadow-md transition"
            >

              <div className="text-4xl mb-5">

                {item.icon}

              </div>

              <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

                {item.read}

              </p>

              <h3 className="font-serif text-2xl mb-4">

                {item.title}

              </h3>

              <p className="text-[#6B6B6B] leading-relaxed">

                {item.description}

              </p>

              <p className="mt-6 text-[#B79B5E]">

                Explore →

              </p>

            </a>

          ))}

        </div>

      </section>

      <article
        id="what-is-dream-science"
        className="max-w-4xl mx-auto px-6 mb-24"
      >

        <h2 className="font-serif text-4xl mb-8">

          What Is Dream Science?

        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-[#444]">

          <p>

            Dream science explores what happens inside the brain and body
            while we sleep. Rather than asking what a specific dream
            symbol means, scientists investigate how dreams are created,
            why they occur and what role they may play in memory,
            learning, emotion and consciousness.

          </p>

          <p>

            Modern sleep research combines neuroscience, psychology,
            biology and medicine to study dreaming. Researchers examine
            brain activity, sleep cycles, eye movements and dream reports
            to better understand one of the most fascinating experiences
            of human life.

          </p>

          <blockquote className="border-l-4 border-[#C6A96B] pl-6 italic text-[#666]">

            Dream science continues evolving as new technology allows
            researchers to observe the sleeping brain in greater detail
            than ever before.

          </blockquote>

          <p>

            This library explains complex scientific ideas in a clear,
            beginner-friendly way while highlighting where evidence is
            strong and where important questions remain open.

          </p>

        </div>

      </article>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

INSIDE THE DREAMING BRAIN

</p>

<h2 className="font-serif text-4xl mt-3">

The Brain During Dreams

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

👁️

</div>

<h3 className="font-serif text-2xl mb-4">

Visual Cortex

</h3>

<p className="text-[#6B6B6B]">

Creates the vivid images, places and people experienced during dreams.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

❤️

</div>

<h3 className="font-serif text-2xl mb-4">

Amygdala

</h3>

<p className="text-[#6B6B6B]">

Processes fear, excitement, joy and many of the emotions that make
dreams feel so intense.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🗂️

</div>

<h3 className="font-serif text-2xl mb-4">

Hippocampus

</h3>

<p className="text-[#6B6B6B]">

Connects memories, experiences and fragments that often appear together
inside dreams.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🤔

</div>

<h3 className="font-serif text-2xl mb-4">

Prefrontal Cortex

</h3>

<p className="text-[#6B6B6B]">

Reduced activity may explain why unusual dream events often seem normal
until we wake up.

</p>

</div>

</div>

</section>

<section
id="sleep-cycles"
className="max-w-4xl mx-auto px-6 mb-24"
>

<h2 className="font-serif text-4xl mb-10">

How Sleep Cycles Work

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Sleep is not a single continuous state. Throughout the night the brain
moves through repeating cycles that include light sleep, deep sleep and
REM sleep.

</p>

<p>

Each stage plays an important role in physical recovery, memory,
learning and emotional regulation. Dreaming can occur during multiple
stages, although the most vivid dreams are commonly associated with REM
sleep.

</p>

<p>

These cycles repeat several times each night, with REM periods generally
becoming longer toward the morning.

</p>

</div>

</section>

<section
id="rem-sleep"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

SLEEP SCIENCE

</p>

<h2 className="font-serif text-4xl mt-3">

REM Sleep Explained

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Rapid Eye Movement

</h3>

<p>

Eyes move quickly beneath closed eyelids while brain activity remains
remarkably high.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Vivid Dreams

</h3>

<p>

Many of the most memorable dreams occur during REM sleep.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Brain Activity

</h3>

<p>

Several regions involved in imagery, memory and emotion remain highly
active.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Muscle Relaxation

</h3>

<p>

The body becomes largely still, helping prevent people from physically
acting out most dreams.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Learning

</h3>

<p>

Researchers continue investigating how REM contributes to learning and
memory organization.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Open Questions

</h3>

<p>

Scientists still debate exactly why REM sleep is so strongly connected
with dreaming.

</p>

</div>

</div>

</section>

<section
id="brain-activity"
className="max-w-5xl mx-auto px-6 mb-24"
>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

SCIENCE SNAPSHOT

</p>

<h2 className="font-serif text-4xl mb-8">

Current Understanding

</h2>

<div className="space-y-6 text-lg text-[#444]">

<p>

✔ Dreaming involves widespread brain activity rather than a single
&quot;dream center.&quot;

</p>

<p>

✔ REM sleep is strongly associated with vivid dreams.

</p>

<p>

✔ Emotional regions remain highly active while dreaming.

</p>

<p>

✔ Memory networks appear to contribute to dream construction.

</p>

<p>

✔ Researchers continue exploring why dreams occur and what functions
they serve.

</p>

</div>

<p className="mt-10 text-sm text-[#777]">

Last reviewed: 2026

</p>

</div>

</section>

<section
id="memory-emotion"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

MEMORY & EMOTION

</p>

<h2 className="font-serif text-4xl mt-3">

How Dreams Connect Memory & Emotion

</h2>

</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🗂️

</div>

<h3 className="font-serif text-2xl mb-5">

Memory Consolidation

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Current research suggests sleep helps organize experiences from the day,
strengthening some memories while integrating them with older ones.
Dreams may reflect this ongoing process through familiar people,
places and events appearing in unexpected combinations.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

❤️

</div>

<h3 className="font-serif text-2xl mb-5">

Emotion Processing

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Emotional brain regions remain highly active during dreaming, which may
help explain why fear, joy, grief and excitement often feel especially
intense while asleep.

</p>

</div>

</div>

</section>

<section
id="lucid-dreaming"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

CONSCIOUSNESS

</p>

<h2 className="font-serif text-4xl mt-3">

States of Dream Consciousness

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-4">

🌙

</div>

<h3 className="font-serif text-xl mb-3">

Ordinary Dreams

</h3>

<p className="text-[#6B6B6B]">

The dream unfolds without awareness that you&apos;re dreaming.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-4">

✨

</div>

<h3 className="font-serif text-xl mb-3">

Lucid Dreams

</h3>

<p className="text-[#6B6B6B]">

The dreamer becomes aware they are dreaming while remaining inside the
experience.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-4">

🛌

</div>

<h3 className="font-serif text-xl mb-3">

False Awakenings

</h3>

<p className="text-[#6B6B6B]">

The dream recreates waking life so convincingly that it feels real until
another awakening occurs.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-4">

💫

</div>

<h3 className="font-serif text-xl mb-3">

Hypnagogia

</h3>

<p className="text-[#6B6B6B]">

Vivid sensory experiences that can occur while transitioning into sleep.

</p>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

MYTH VS SCIENCE

</p>

<h2 className="font-serif text-4xl mt-3">

Common Misconceptions

</h2>

</div>

<div className="overflow-x-auto">

<table className="w-full bg-white rounded-2xl overflow-hidden">

<thead>

<tr>

<th className="p-5 text-left">

Myth

</th>

<th className="p-5 text-left">

Current Science

</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-5">

Dreams only happen during REM sleep.

</td>

<td className="p-5">

Dreams can occur during multiple sleep stages, although REM dreams are
often the most vivid.

</td>

</tr>

<tr>

<td className="p-5">

The brain shuts down while sleeping.

</td>

<td className="p-5">

Many brain regions remain highly active throughout sleep.

</td>

</tr>

<tr>

<td className="p-5">

Scientists know exactly why humans dream.

</td>

<td className="p-5">

Several theories exist and research continues.

</td>

</tr>

<tr>

<td className="p-5">

Dreams are completely random.

</td>

<td className="p-5">

Research suggests dreams often incorporate memory, emotion and recent
experience in meaningful ways.

</td>

</tr>

</tbody>

</table>

</div>

</section>

<section className="max-w-5xl mx-auto px-6 mb-24">

<h2 className="font-serif text-4xl mb-10">

Frequently Asked Questions

</h2>

<div className="space-y-5">

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

What is REM sleep?

</summary>

<p className="mt-4 text-[#6B6B6B]">

REM, or Rapid Eye Movement sleep, is a stage of sleep strongly
associated with vivid dreaming and increased brain activity.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Why do dreams feel so real?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Visual and emotional brain regions remain highly active while critical
evaluation becomes less dominant, making dream experiences feel
convincing.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Can dreams improve memory?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Research suggests sleep contributes to memory organization, although the
exact role of dreams continues to be studied.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Do animals dream?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Many mammals experience REM sleep and display behaviors suggesting they
may also experience dream-like states.

</p>

</details>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="text-center mb-12">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">

KEEP LEARNING

</p>

<h2 className="font-serif text-5xl">

Continue Exploring

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<Link
href="/guides/research"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

📊

<h3 className="font-serif text-2xl mt-4">

Dream Research

</h3>

</Link>

<Link
href="/guides/psychology"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🧠

<h3 className="font-serif text-2xl mt-4">

Dream Psychology

</h3>

</Link>

<Link
href="/guides/basics"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

📖

<h3 className="font-serif text-2xl mt-4">

Dream Basics

</h3>

</Link>

<Link
href="/guides/interpretation"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🔍

<h3 className="font-serif text-2xl mt-4">

Dream Interpretation

</h3>

</Link>

</div>

</section>

      <SiteFooter />

    </main>
  );
}