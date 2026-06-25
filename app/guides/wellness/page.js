import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SearchBar from "@/app/components/SearchBar";
import JumpToNavigation from "@/app/components/JumpToNavigation";
export const metadata = {
  title:
    "Dream Wellness: Sleep, Stress, Dream Recall & Healthy Dream Habits",

  description:
    "Explore the connection between sleep, stress, emotional well-being, dream recall and healthy dreaming habits through practical science-based guidance.",

  alternates: {
    canonical: "/guides/wellness",
  },
};

const startLearning = [
  {
    title: "Healthy Sleep",
    description:
      "Discover how healthy sleep habits influence dreams and overall well-being.",
    href: "#healthy-sleep",
    icon: "😴",
    read: "5 min read",
  },

  {
    title: "Dream Journaling",
    description:
      "Learn simple ways to improve dream recall through consistent journaling.",
    href: "#dream-journaling",
    icon: "📝",
    read: "6 min read",
  },

  {
    title: "Nightmares & Stress",
    description:
      "Understand how stress and emotions can influence dream experiences.",
    href: "#nightmares-stress",
    icon: "🌙",
    read: "6 min read",
  },

  {
    title: "Morning Reflection",
    description:
      "Build a thoughtful morning routine for remembering and reflecting on dreams.",
    href: "#morning-reflection",
    icon: "💚",
    read: "5 min read",
  },
];

export default function DreamWellnessPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">

      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">

        <nav className="flex gap-2 text-sm text-[#8A8175] mb-10">

          <Link href="/">Home</Link>

          <span>›</span>

          <Link href="/guides">Dream Guides</Link>

          <span>›</span>

          <span>Dream Wellness</span>

        </nav>

        <p className="uppercase tracking-[0.22em] text-[#B79B5E] text-xs mb-4">

          Dream School

        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

          Dream Wellness

        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[#6B6B6B] leading-relaxed">

          Explore the connection between sleep, stress,
          emotional well-being, dream recall and healthy
          dreaming habits.

        </p>

        <div className="flex flex-wrap gap-3 mt-10">

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🌿 Healthy Sleep

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            😴 Better Dream Recall

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            💚 Practical Well-being

          </span>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 mb-20">

        <SearchBar />

      </section>

<section id="navigation"></section>

      <section className="max-w-6xl mx-auto px-6 mb-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Topics

            </p>

            <p>

              Sleep

              <br />

              Stress

              <br />

              Dream Recall

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Focus

            </p>

            <p>

              Healthy Habits

              <br />

              Reflection

              <br />

              Well-being

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Approach

            </p>

            <p>

              Science

              <br />

              Psychology

              <br />

              Practical

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

            <p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

              Reading Time

            </p>

            <h3 className="font-serif text-2xl">

              30 min

            </h3>

          </div>

        </div>

      </section>

    
      <article
        className="max-w-4xl mx-auto px-6 mb-24"
      >

        <h2 className="font-serif text-4xl mb-8">

          Sleep, Dreams & Well-being

        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-[#444]">

          <p>

            Dreams are a natural part of healthy sleep and everyday life.
            They often reflect emotion, memory, imagination and personal
            experience while offering moments for reflection rather than
            certainty.

          </p>

          <p>

            Sleep quality, stress levels, daily routines and emotional
            well-being can all influence how often dreams are remembered
            and how vivid they feel. Developing healthy habits may support
            both better sleep and a more positive relationship with
            dreaming.

          </p>

          <blockquote className="border-l-4 border-[#C6A96B] pl-6 italic text-[#666]">

            Dream wellness is less about finding perfect interpretations
            and more about creating space for rest, awareness and
            thoughtful reflection.

          </blockquote>

          <p>

            This library combines practical guidance from sleep science,
            psychology and mindfulness to help readers build sustainable
            dream and sleep habits without fear or sensationalism.

          </p>

        </div>

      </article>
<section
id="healthy-sleep"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

DREAM WELLNESS TOOLKIT

</p>

<h2 className="font-serif text-4xl mt-3">

Healthy Dream Habits

</h2>

<p className="mt-4 max-w-3xl text-[#6B6B6B]">

Small daily habits can support better sleep, improve dream recall and
create a healthier relationship with dreaming.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

😴

<h3 className="font-serif text-2xl mt-5 mb-4">

Healthy Sleep

</h3>

<p className="text-[#6B6B6B]">

Consistent sleep schedules help support healthy sleep cycles and more
stable dream recall.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📝

<h3 className="font-serif text-2xl mt-5 mb-4">

Dream Journal

</h3>

<p className="text-[#6B6B6B]">

Writing down dreams soon after waking can strengthen dream recall over
time.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📵

<h3 className="font-serif text-2xl mt-5 mb-4">

Screen-Free Evenings

</h3>

<p className="text-[#6B6B6B]">

Reducing distractions before sleep may support relaxation and better
sleep quality.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

☀️

<h3 className="font-serif text-2xl mt-5 mb-4">

Morning Reflection

</h3>

<p className="text-[#6B6B6B]">

Take a few quiet moments before checking your phone to notice any dream
memories or emotions.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

💚

<h3 className="font-serif text-2xl mt-5 mb-4">

Emotional Check-In

</h3>

<p className="text-[#6B6B6B]">

Dreams often reflect emotional experiences, making gentle self-reflection
a useful daily practice.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🧘

<h3 className="font-serif text-2xl mt-5 mb-4">

Relaxation

</h3>

<p className="text-[#6B6B6B]">

Breathing exercises, mindfulness and quiet routines may help create a
calmer transition into sleep.

</p>

</div>

</div>

</section>

<section
id="dream-recall"
className="max-w-5xl mx-auto px-6 mb-24"
>

<h2 className="font-serif text-4xl mb-10">

Better Dream Recall

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Most people dream every night, but many dreams disappear within minutes
of waking. Dream recall often improves through attention and consistency
rather than effort alone.

</p>

<p>

Remaining still for a few moments, noticing emotions and writing down
even small dream fragments can gradually strengthen recall.

</p>

<p>

Rather than trying to remember every detail, begin with one image, one
conversation or one feeling and allow the rest of the dream to return
naturally.

</p>

</div>

</section>

<section
id="nightmares-stress"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

EMOTIONAL WELL-BEING

</p>

<h2 className="font-serif text-4xl mt-3">

Stress & Nightmares

</h2>

</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-5">

Stress

</h3>

<p className="text-[#6B6B6B]">

Periods of change, pressure or uncertainty may influence dream intensity
and emotional themes.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-5">

Nightmares

</h3>

<p className="text-[#6B6B6B]">

Occasional nightmares are common. Persistent nightmares that cause
distress may benefit from discussion with a qualified healthcare
professional.

</p>

</div>

</div>

</section>

<section
id="emotional-wellbeing"
className="max-w-5xl mx-auto px-6 mb-24"
>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

WELLNESS REMINDER

</p>

<h2 className="font-serif text-4xl mb-8">

Dreams Are Part of Being Human

</h2>

<div className="space-y-6 text-lg text-[#444]">

<p>

Dreams can be joyful, confusing, emotional or completely ordinary.
Having unusual dreams does not necessarily mean that something is wrong.

</p>

<p>

Looking after sleep, emotional health and daily routines often provides
a healthier foundation than chasing immediate interpretations.

</p>

<p>

Curiosity, reflection and balance are valuable companions on any dream
journey.

</p>

</div>

</div>

</section>

<section
id="healthy-habits"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

DAILY HABITS

</p>

<h2 className="font-serif text-4xl mt-3">

Simple Practices For Better Sleep & Dream Recall

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📓

<h3 className="font-serif text-2xl mt-5 mb-4">

Keep a Dream Journal

</h3>

<p className="text-[#6B6B6B]">

Write down even small dream fragments before they fade.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

😴

<h3 className="font-serif text-2xl mt-5 mb-4">

Maintain a Sleep Schedule

</h3>

<p className="text-[#6B6B6B]">

Going to bed and waking at similar times supports healthy sleep cycles.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📵

<h3 className="font-serif text-2xl mt-5 mb-4">

Reduce Screen Time

</h3>

<p className="text-[#6B6B6B]">

Create a calmer transition into sleep by limiting distractions before bed.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

☀️

<h3 className="font-serif text-2xl mt-5 mb-4">

Wake Slowly

</h3>

<p className="text-[#6B6B6B]">

Spend a few quiet moments noticing dreams before reaching for your phone.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

💚

<h3 className="font-serif text-2xl mt-5 mb-4">

Notice Your Emotions

</h3>

<p className="text-[#6B6B6B]">

Dreams often leave emotional impressions that can be meaningful to reflect on.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🧘

<h3 className="font-serif text-2xl mt-5 mb-4">

Practice Relaxation

</h3>

<p className="text-[#6B6B6B]">

Gentle breathing, mindfulness or quiet routines may support restful sleep.

</p>

</div>

</div>

</section>

<section
id="morning-reflection"
className="max-w-5xl mx-auto px-6 mb-24"
>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

🌿 MORNING REFLECTION

</p>

<h2 className="font-serif text-4xl mb-8">

Start With Curiosity

</h2>

<p className="text-lg text-[#555] leading-relaxed mb-10">

Instead of asking &ldquo;What did this dream mean?&quot;, try beginning with gentle
curiosity and self-awareness.

</p>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

✨

<h3 className="font-serif text-xl mt-4 mb-3">

How did the dream make me feel?

</h3>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

🌙

<h3 className="font-serif text-xl mt-4 mb-3">

What symbols or people stood out?

</h3>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

💭

<h3 className="font-serif text-xl mt-4 mb-3">

Does it connect with something happening in my life?

</h3>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

📝

<h3 className="font-serif text-xl mt-4 mb-3">

Would writing about it help me understand it better?

</h3>

</div>

</div>

</div>

</section>

<section className="max-w-5xl mx-auto px-6 mb-24">

<h2 className="font-serif text-4xl mb-10">

Frequently Asked Questions

</h2>

<div className="space-y-5">

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

How can I remember dreams better?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Keeping a dream journal, waking gradually and paying attention to dream
fragments may improve dream recall over time.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Can stress affect dreams?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Yes. Stress and major life events can influence dream intensity,
emotional themes and nightmares.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Should I keep a dream journal?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Many people find dream journaling useful for improving recall and
recognizing recurring patterns over time.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

When should I seek support for nightmares?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Occasional nightmares are common. If nightmares become frequent,
distressing or interfere with daily life, consider speaking with a
qualified healthcare professional.

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
href="/guides/science"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🔬

<h3 className="font-serif text-2xl mt-4">

Dream Science

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
href="/guides/research"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

📊

<h3 className="font-serif text-2xl mt-4">

Dream Research

</h3>

</Link>

<Link
href="/guides/basics"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

📖

<h3 className="font-serif text-2xl mt-4">

Basics

</h3>

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