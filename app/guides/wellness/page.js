import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import JumpToNavigation from "@/app/components/JumpToNavigation";
import { createMetadataFromGuide } from "@/lib/guideExperience";
import GuideLayout from "@/app/components/guides/GuideLayout";
import { getDedicatedGuide } from "@/app/data/dedicatedGuides";
const guideInfo = getDedicatedGuide("wellness");
export const metadata = createMetadataFromGuide(guideInfo);


export default function DreamWellnessPage() {
  return (
    <GuideLayout guide={guideInfo} readingTime={guideInfo.readingTime} toc={guideInfo.toc} contentStart={4}>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">

        <nav className="flex gap-2 text-sm text-[#8A8175] mb-10">

          <Link href="/">Home</Link>

          <span>›</span>

          <Link href="/guides">Guides</Link>

          <span>›</span>

          <span>Wellness</span>

        </nav>

        <p className="uppercase tracking-[0.22em] text-[#B79B5E] text-xs mb-4">

          Dream Library

        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

          Wellness

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

   <section className="max-w-5xl mx-auto px-6 mt-16 mb-20">

  <nav
    className="bg-white border border-[#EAE6E1] rounded-3xl p-8"
    aria-label="Guide sections"
  >

    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-2">
      On This Page
    </p>

    <ul className="space-y-2 pl-4 relative">

      <li
        aria-hidden="true"
        className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]"
      />

      <li>
        <Link
          href="#sleep-dreams"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Sleep, Dreams & Well-being
        </Link>
      </li>

      <li>
        <Link
          href="#healthy-sleep"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Healthy Dream Habits
        </Link>
      </li>

      <li>
        <Link
          href="#dream-recall"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Better Dream Recall
        </Link>
      </li>

      <li>
        <Link
          href="#nightmares-stress"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Stress & Nightmares
        </Link>
      </li>

      <li>
        <Link
          href="#emotional-wellbeing"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          A Healthy Relationship With Dreams
        </Link>
      </li>

      <li>
        <Link
          href="#morning-reflection"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Morning Reflection
        </Link>
      </li>

      <li>
        <Link
          href="#faq"
          className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] text-[#6B6B6B] transition hover:border-[#C6A96B] hover:text-[#8F743C]"
        >
          Frequently Asked Questions
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
     <article
id="sleep-dreams"
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

WELLNESS TOOLKIT

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
  id="healthy-habits-comparison"
  className="max-w-6xl mx-auto px-6 mb-24"
>

  <h2 className="font-serif text-4xl mb-10">
 Simple Habits That Support Better Sleep & Dream Recall
  </h2>

  <div className="overflow-x-auto">

    <table className="w-full bg-white rounded-2xl border border-[#EAE6E1] overflow-hidden">

      <thead>

        <tr className="bg-[#F8F6F2]">

          <th className="p-5 text-left font-semibold">
            Habit
          </th>

          <th className="p-5 text-left font-semibold">
            Why It Helps
          </th>

        </tr>

      </thead>

      <tbody>

        <tr className="border-t border-[#EAE6E1]">

          <td className="p-5">
            Keep a dream journal
          </td>

          <td className="p-5">
            Strengthens dream recall by capturing details before they fade.
          </td>

        </tr>

        <tr className="border-t border-[#EAE6E1]">

          <td className="p-5">
            Maintain a consistent sleep schedule
          </td>

          <td className="p-5">
            Supports healthy sleep cycles and more regular dreaming.
          </td>

        </tr>

        <tr className="border-t border-[#EAE6E1]">

          <td className="p-5">
            Limit screens before bed
          </td>

          <td className="p-5">
            Encourages relaxation and may improve overall sleep quality.
          </td>

        </tr>

        <tr className="border-t border-[#EAE6E1]">

          <td className="p-5">
            Reflect before checking your phone
          </td>

          <td className="p-5">
            Gives your brain time to remember dreams more clearly.
          </td>

        </tr>

        <tr className="border-t border-[#EAE6E1]">

          <td className="p-5">
            Practice stress management
          </td>

          <td className="p-5">
            May reduce emotional distress and the frequency of stress-related nightmares.
          </td>

        </tr>

      </tbody>

    </table>

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
A Healthy Relationship With Dreams
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

<section
id="faq"
className="max-w-5xl mx-auto px-6 mb-24"
>
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

Continue Your Dream Library Journey

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<Link
href="/guides/science"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🔬

<h3 className="font-serif text-2xl mt-4">

Science

</h3>

</Link>

<Link
href="/guides/psychology"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🧠

<h3 className="font-serif text-2xl mt-4">

Psychology

</h3>

</Link>

<Link
href="/guides/research"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

📊

<h3 className="font-serif text-2xl mt-4">

Research

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

    </GuideLayout>
  );
}
