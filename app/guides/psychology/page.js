import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import JumpToNavigation from "@/app/components/JumpToNavigation";
import { createMetadataFromGuide } from "@/lib/guideExperience";
import GuideLayout from "@/app/components/guides/GuideLayout";
import { getDedicatedGuide } from "@/app/data/dedicatedGuides";

const guideInfo = getDedicatedGuide("psychology");
export const metadata = createMetadataFromGuide(guideInfo);


export default function DreamPsychologyPage() {
  return (
    <GuideLayout guide={guideInfo} readingTime={guideInfo.readingTime} toc={guideInfo.toc} contentStart={3}>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">

        <nav className="flex gap-2 text-sm text-[#8A8175] mb-10">

          <Link href="/">Home</Link>

          <span>›</span>

          <Link href="/guides">Guides</Link>

          <span>›</span>

          <span>Psychology</span>

        </nav>

        <p className="uppercase tracking-[0.22em] text-[#B79B5E] text-xs mb-4">

          Dream Library

        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

          Psychology

        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[#6B6B6B] leading-relaxed">

          Explore how psychology explains dreams through unconscious
          thought, memory, emotion, symbolism and modern neuroscience.

        </p>

        <div className="flex flex-wrap gap-3 mt-10">

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            📖 Complete Guide

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🧠 Psychology + Neuroscience

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🌙 Beginner Friendly

          </span>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 mb-20">

        <SearchBar />

      </section>

<section id="navigation"></section>
<section className="max-w-6xl mx-auto px-6 mb-20">

<div className="grid md:grid-cols-4 gap-5">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

Founded

</p>

<h3 className="font-serif text-2xl">

Late 1800s

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

Main Topics

</p>

<p>

Dreams

<br/>

Memory

<br/>

Emotion

<br/>

Symbols

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

Major Figures

</p>

<p>

Freud

<br/>

Jung

<br/>

Hobson

<br/>

Cartwright

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

Reading Time

</p>

<h3 className="font-serif text-2xl">

25 min

</h3>

</div>

</div>

</section>

      <section className="max-w-5xl mx-auto px-6 mb-20">

        <div className="bg-white border border-[#EAE6E1] rounded-3xl p-8">

          <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

            START HERE

          </p>

          <h2 className="font-serif text-4xl mb-8">

            Reading Path

          </h2>

          <div className="space-y-5 text-lg">

            <a href="#what-is-dream-psychology">

              ① What Is Dream Psychology?

            </a>

            <div>↓</div>

            <a href="#freud">

              ② Freud&apos;s Dream Theory

            </a>

            <div>↓</div>

            <a href="#jung">

              ③ Jung&apos;s Dream Theory

            </a>

            <div>↓</div>

            <a href="#modern">

              ④ Modern Dream Research

            </a>

            <div>↓</div>

            <Link href="/guides/interpretation">

              ⑤ Dream Interpretation Guide

            </Link>

          </div>

        </div>

      </section>

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

<Link href="#what-is-dream-psychology"
className="block border-l-2 border-transparent py-1 pl-3 -ml-[17px] hover:border-[#C6A96B]">

What Is Dream Psychology?

</Link>

</li>

<li>

<Link href="#history">

History of Dream Psychology

</Link>

</li>

<li>

<Link href="#timeline">

Dream Psychology Timeline

</Link>

</li>
<section
className="max-w-4xl mx-auto px-6 mb-24"
>

<h2 className="font-serif text-4xl mb-8">

How Dream Psychology Evolved

</h2>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Dream psychology didn&apos;t replace older ideas about dreams—it built upon them.

</p>

<p>

Ancient cultures often viewed dreams as messages from gods or ancestors.

Freud shifted the focus inward, arguing that dreams reflected unconscious wishes.

Jung expanded the idea by exploring archetypes and personal growth.

Modern neuroscience now studies how dreaming relates to memory, emotion and brain activity.

</p>

<p>

Each theory explains a different part of dreaming, which is why modern researchers often combine insights from several perspectives instead of relying on a single explanation.

</p>

</div>

</section>

<li>

<Link href="#freud">

Freud&apos;s Dream Theory

</Link>

</li>

<li>

<Link href="#jung">

Jung&apos;s Dream Theory

</Link>

</li>

<li>

<Link href="#comparison">

Freud vs Jung

</Link>

</li>

<li>

<Link href="#faq">

Frequently Asked Questions

</Link>

</li>

<li className="pt-2">

<Link href="/guides/science">

Continue to Dream Science →

</Link>

</li>

</ul>

</nav>

</section>

      <article
        id="what-is-dream-psychology"
        className="max-w-4xl mx-auto px-6 mb-24"
      >

        <h2 className="font-serif text-4xl mb-8">

          What Is Dream Psychology?

        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-[#444]">

          <p>

            Dream psychology explores what dreams might reveal about the
            human mind. Rather than asking whether a dream predicts the
            future, psychologists ask different questions.

            Why did the brain create this experience?

            Why these emotions?

            Why these symbols?

          </p>

          <p>

            Over the last century, psychologists, neuroscientists and
            sleep researchers have proposed different answers. Some view
            dreams as expressions of unconscious desires. Others see them
            as emotional processing, memory organization or the brain&#39;s
            attempt to create meaning from internal activity.

          </p>

          <blockquote className="border-l-4 border-[#C6A96B] pl-6 italic text-[#666]">

            Dream psychology is less about finding a single correct
            meaning and more about understanding how the mind thinks,
            remembers, imagines and processes experience during sleep.

          </blockquote>

          <p>

            Today, dream research combines psychology, neuroscience,
            cognitive science and sleep medicine, creating a richer
            picture than any single theory can provide on its own.

          </p>

        </div>

      </article>

     <section

     
id="history"
className="max-w-4xl mx-auto px-6 mb-24"
>
        <h2 className="font-serif text-4xl mb-8">

          The History of Dream Psychology

        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-[#444]">

          <p>

            For thousands of years dreams were understood primarily through
            religion, mythology and spiritual tradition. Ancient cultures
            often believed dreams carried messages from gods, ancestors or
            unseen forces.

          </p>

          <p>

            During the late nineteenth and early twentieth centuries,
            psychologists began studying dreams as products of the human
            mind rather than supernatural events. Sigmund Freud argued
            that dreams expressed hidden wishes, while Carl Jung believed
            dreams reflected universal symbols shared across humanity.

          </p>

          <p>

            Modern research expanded the conversation even further.
            Neuroscience now investigates REM sleep, brain activity,
            emotional regulation and memory formation, showing that dreams
            are closely connected with normal cognitive processes rather
            than existing separately from them.

          </p>

        </div>

      </section>

<section
id="timeline"
className="max-w-6xl mx-auto px-6 mb-24"
>
<h2 className="font-serif text-4xl mb-10">

Dream Psychology Timeline

</h2>

<div className="bg-white border border-[#EAE6E1] rounded-3xl p-10">

<div className="space-y-6">

<p>

🏺 Ancient Egypt — Dreams viewed as divine messages

</p>

<p>

🏛 Aristotle — Dreams explained through natural processes

</p>

<p>

🧠 1899 — Freud publishes <i>The Interpretation of Dreams</i>

</p>

<p>

🌙 1912 — Jung develops Analytical Psychology

</p>

<p>

⚡ 1977 — Activation Synthesis Theory introduced

</p>

<p>

🔬 Today — Neuroscience studies REM sleep, memory and emotion

</p>

</div>

</div>

</section>

<section
id="freud"
className="max-w-4xl mx-auto px-6 mb-24"
>

<h2 className="font-serif text-4xl mb-10">

Sigmund Freud&apos;s Dream Theory

</h2>

<div className="space-y-10 text-lg leading-relaxed text-[#444]">

<div>

<h3 className="font-serif text-2xl mb-4">

History

</h3>

<p>

In 1899, Austrian neurologist Sigmund Freud published
<i>The Interpretation of Dreams</i>, a book that changed the way many
psychologists thought about dreaming.

</p>

<p>

Rather than viewing dreams as random events or supernatural messages,
Freud argued that they were meaningful psychological experiences created
by the unconscious mind.

At a time when much of human behavior was explained through conscious
thought, this was a radical idea.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Core Idea

</h3>

<p>

Freud believed dreams represent disguised wishes.

According to his theory, thoughts, desires and conflicts that feel
unacceptable or uncomfortable during waking life do not simply disappear.

Instead, they continue existing beneath conscious awareness and may
appear symbolically during sleep.

</p>

<p>

The dream is therefore not trying to hide meaning from us out of
mystery.

It is the mind expressing thoughts indirectly through images, stories,
people and situations that feel emotionally safer than confronting the
wish directly.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Manifest Content vs Latent Content

</h3>

<p>

Freud distinguished between two layers of every dream.

</p>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8 mt-6">

<p>

<strong>Manifest Content</strong>

</p>

<p className="text-[#666] mt-2">

The dream exactly as you remember it.

The people.

The objects.

The story.

</p>

<hr className="my-6"/>

<p>

<strong>Latent Content</strong>

</p>

<p className="text-[#666] mt-2">

The unconscious thoughts, emotions and wishes hidden beneath the surface
of the dream narrative.

</p>

</div>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Example

</h3>

<p>

Imagine someone dreams they miss a train.

A literal interpretation might simply focus on transportation.

Freud would ask different questions.

</p>

<ul className="list-disc pl-6 space-y-2 mt-5">

<li>What opportunity feels out of reach?</li>

<li>What fear of failure is being expressed?</li>

<li>What desire is being delayed?</li>

<li>What emotional conflict exists beneath the dream?</li>

</ul>

<p className="mt-6">

The train itself matters less than the unconscious emotional experience
it represents.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Criticism

</h3>

<p>

Freud&apos;s theory remains one of the most influential ideas in psychology,
but it has also received significant criticism.

</p>

<p>

Many researchers argue that dream interpretation based on hidden wishes
cannot be objectively tested and often depends heavily on the
interpreter&apos;s own assumptions.

Others believe Freud placed excessive emphasis on childhood conflict and
sexual symbolism.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Modern Perspective

</h3>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-8 mt-12">

<p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-4">

Research Snapshot

</p>

<ul className="space-y-3">

<li>✔ Freud transformed dream research.</li>

<li>✔ Wish fulfillment remains historically important.</li>

<li>✔ Many ideas remain debated.</li>

<li>✔ Modern psychology combines multiple theories.</li>

</ul>

<p className="mt-8 text-sm text-[#777]">

Last reviewed: 2026

</p>

</div>

<p>

Although many psychologists no longer accept Freud&apos;s theory as a
complete explanation of dreaming, his central idea continues to shape
modern psychology.

The recognition that unconscious emotions influence thoughts,
relationships and behavior remains deeply influential.

</p>

<p>

Modern dream research often combines emotional processing, memory,
neuroscience and cognitive psychology rather than relying on hidden wish
fulfillment alone.

</p>

</div>

</div>

</section>

<section
id="jung"
className="max-w-4xl mx-auto px-6 mb-24"
>

<h2 className="font-serif text-4xl mb-10">

Carl Jung&apos;s Dream Theory

</h2>

<div className="space-y-10 text-lg leading-relaxed text-[#444]">

<div>

<h3 className="font-serif text-2xl mb-4">

History

</h3>

<p>

Carl Gustav Jung began his career working closely with Freud before
developing his own approach to psychology.

While Freud focused on hidden wishes, Jung believed dreams served a much
broader purpose.

</p>

<p>

He saw dreams as conversations between the conscious mind and deeper
layers of the psyche, helping individuals grow toward greater
self-understanding.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Core Idea

</h3>

<p>

Jung argued that dreams compensate for what conscious awareness ignores.

If someone becomes overly logical, dreams may become emotional.

If someone suppresses fear, dreams may confront them with it.

Rather than hiding forbidden wishes, dreams restore psychological
balance.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

The Collective Unconscious

</h3>

<p>

One of Jung&apos;s most influential ideas is the collective unconscious.

Unlike personal memories, the collective unconscious represents inherited
psychological patterns shared across humanity.

</p>

<p>

This is why myths, heroes, wise elders, forests, oceans, snakes,
journeys and mothers appear repeatedly in stories and dreams across
different cultures.

Jung called these recurring patterns archetypes.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Real-Life Example

</h3>

<p>

Someone dreams of climbing a mountain guided by an elderly stranger.

Rather than asking what the mountain literally represents, Jung might
see the climb as personal growth and the guide as the archetype of the
Wise Old Man leading the dreamer toward greater understanding.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Criticism

</h3>

<p>

Many of Jung&apos;s ideas are difficult to verify scientifically because
archetypes and the collective unconscious cannot be directly measured.

Critics argue that symbolism may be influenced by culture and individual
experience rather than universal inherited structures.

</p>

</div>

<div>

<h3 className="font-serif text-2xl mb-4">

Modern Perspective

</h3>

<p>

Although researchers debate Jung&apos;s theories, his ideas remain highly
influential in psychotherapy, literature, mythology, religious studies,
creative writing and symbolic dream interpretation.

His emphasis on personal growth continues attracting readers more than a
century later.

</p>

</div>

</div>

</section>

<section
id="comparison"
className="max-w-5xl mx-auto px-6 mb-24"
>
<h2 className="font-serif text-4xl mb-10">

Freud vs Jung

</h2>

<div className="overflow-x-auto">

<table className="w-full bg-white rounded-2xl overflow-hidden">

<thead>

<tr className="bg-[#F8F6F2]">

<th className="p-5 text-left font-semibold">

Question

</th>

<th className="p-5 text-left font-semibold">

Freud

</th>

<th className="p-5 text-left font-semibold">

Jung

</th>

</tr>

</thead>

<tbody>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5 font-medium">

Dreams come from...

</td>

<td className="p-5">

Hidden wishes and unconscious desires

</td>

<td className="p-5">

The unconscious guiding personal growth

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5 font-medium">

Symbols are...

</td>

<td className="p-5">

Mostly personal

</td>

<td className="p-5">

Universal archetypes

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5 font-medium">

Purpose of dreams

</td>

<td className="p-5">

Wish fulfillment

</td>

<td className="p-5">

Psychological balance

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5 font-medium">

Goal

</td>

<td className="p-5">

Reveal hidden conflict

</td>

<td className="p-5">

Encourage self-understanding

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5 font-medium">

Modern influence

</td>

<td className="p-5">

Psychoanalysis

</td>

<td className="p-5">

Analytical psychology

</td>

</tr>

</tbody>
</table>

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

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        What is dream psychology?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Dream psychology is the study of dreams through the lens of human
        behavior, emotion, memory and the unconscious mind. Rather than
        asking whether dreams predict the future, psychologists explore
        how dreams reflect thoughts, relationships, fears, desires and
        everyday experiences.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        Who was Sigmund Freud?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Sigmund Freud was an Austrian neurologist and the founder of
        psychoanalysis. He believed dreams expressed unconscious wishes
        and conflicts through symbolic imagery, making dreams an important
        window into the hidden mind.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        Who was Carl Jung?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Carl Jung was a Swiss psychiatrist who developed analytical
        psychology. He believed dreams guide personal growth and contain
        recurring archetypes shared across humanity through what he called
        the collective unconscious.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        Do psychologists believe dreams have meaning?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Most psychologists agree that dreams reflect mental activity
        during sleep, although they disagree about exactly what dreams
        represent. Some emphasize emotion, others memory, subconscious
        thought, survival or brain processes rather than fixed symbolic
        meanings.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        What is the collective unconscious?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        The collective unconscious is Carl Jung&apos;s idea that humans share
        inherited psychological patterns called archetypes. These
        archetypes appear repeatedly in myths, literature, religion and
        dreams through familiar figures such as heroes, mothers, wise
        guides and journeys.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        What are shadow dreams?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        In Jungian psychology, shadow dreams involve qualities that people
        reject, ignore or fail to recognize within themselves. These
        dreams often feature frightening strangers, conflict or hidden
        places, encouraging self-reflection rather than fear.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        Which dream theory is most accepted today?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Modern dream research does not rely on a single theory. Many
        researchers combine findings from neuroscience, cognitive
        psychology, emotion regulation and memory research while
        recognizing that dreams are complex experiences with multiple
        possible functions.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        Can psychology explain recurring dreams?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Recurring dreams are often understood as repeating emotional
        patterns or unresolved concerns that continue appearing until the
        underlying situation changes or receives attention. They may also
        become more memorable simply because they repeat over time.

      </p>

    </details>

    <details className="bg-white rounded-xl border border-[#EAE6E1] p-6">

      <summary className="cursor-pointer font-serif text-xl">

        How does neuroscience explain dreams?

      </summary>

      <p className="mt-4 text-[#6B6B6B] leading-relaxed">

        Neuroscience suggests dreams emerge from active brain processes
        during sleep involving memory consolidation, emotional regulation,
        imagination and internal simulation. Rather than viewing dreams as
        random, researchers increasingly see them as part of normal brain
        function.

      </p>

    </details>

  </div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<h2 className="font-serif text-4xl mb-10">

Meet The Researchers

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<Link
href="/guides/psychology#freud"
className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
>

<p className="uppercase tracking-[0.2em] text-xs text-[#B79B5E] mb-3">

Pioneer

</p>

<h3 className="font-serif text-2xl mb-4">

Sigmund Freud

</h3>

<p className="text-[#6B6B6B] mb-6">

Founder of psychoanalysis and the theory of wish fulfillment.

</p>

<p className="text-[#B79B5E] font-medium">

Read More →

</p>

</Link>

<Link
href="/guides/psychology#jung"
className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
>

<p className="uppercase tracking-[0.2em] text-xs text-[#B79B5E] mb-3">

Pioneer

</p>

<h3 className="font-serif text-2xl mb-4">

Carl Jung

</h3>

<p className="text-[#6B6B6B] mb-6">

Creator of analytical psychology and the theory of archetypes.

</p>

<p className="text-[#B79B5E] font-medium">

Read More →

</p>

</Link>

<Link
href="https://en.wikipedia.org/wiki/J._Allan_Hobson"
className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
>

<p className="uppercase tracking-[0.2em] text-xs text-[#B79B5E] mb-3">

Researcher

</p>

<h3 className="font-serif text-2xl mb-4">

J. Allan Hobson

</h3>

<p className="text-[#6B6B6B] mb-6">

Co-developed the Activation-Synthesis theory of dreaming.

</p>

<p className="text-[#B79B5E] font-medium">

Learn More →

</p>

</Link>

<Link
href="https://en.wikipedia.org/wiki/Rosalind_Cartwright"
className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
>

<p className="uppercase tracking-[0.2em] text-xs text-[#B79B5E] mb-3">

Researcher

</p>

<h3 className="font-serif text-2xl mb-4">

Rosalind Cartwright

</h3>

<p className="text-[#6B6B6B] mb-6">

Known for research on dreams, emotion and mental health.

</p>

<p className="text-[#B79B5E] font-medium">

Learn More →

</p>

</Link>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<h3 className="font-serif text-2xl mb-3">

Carl Jung

</h3>

<p>

Analytical psychology and archetypes.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<h3 className="font-serif text-2xl mb-3">

J Allan Hobson

</h3>

<p>

Activation Synthesis Theory.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<h3 className="font-serif text-2xl mb-3">

Rosalind Cartwright

</h3>

<p>

Dreams and emotional processing.

</p>

</div>

</div>

</section>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-10 text-center max-w-4xl mx-auto my-24">

  <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

    A Thought To Leave With

  </p>

  <p className="font-serif text-3xl leading-relaxed text-[#1A1A1A]">

    Every dream theory explains part of the picture.

    The challenge isn&apos;t choosing one theory over another,

    but learning what each perspective reveals about the human mind.

  </p>

</div>

<section className="max-w-6xl mx-auto px-6 mb-24">

  <div className="text-center mb-12">

    <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">

      KEEP LEARNING

    </p>

    <h2 className="font-serif text-5xl text-[#1A1A1A]">

 Continue Your Dream Library Journey
    </h2>

    <p className="max-w-2xl mx-auto mt-6 text-lg text-[#6B6B6B] leading-relaxed">

      Psychology is only one way to understand dreams.
      Explore science, interpretation, symbolism and spiritual
      perspectives to build a richer understanding of the dreaming mind.

    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    <Link
      href="/guides/basics"
      className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
    >

      <div className="text-4xl mb-5">🌙</div>

      <h3 className="font-serif text-2xl mb-4">

        Dream Basics

      </h3>

      <p className="text-[#6B6B6B] leading-relaxed">

        Learn what dreams are, why we dream and how dreams work.

      </p>

    </Link>

    <Link
      href="/guides/interpretation"
      className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
    >

      <div className="text-4xl mb-5">📖</div>

      <h3 className="font-serif text-2xl mb-4">

        Dream Interpretation

      </h3>

      <p className="text-[#6B6B6B] leading-relaxed">

        Learn how emotions, context and symbolism work together.

      </p>

    </Link>

    <Link
      href="/guides/science"
      className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
    >

      <div className="text-4xl mb-5">🔬</div>

      <h3 className="font-serif text-2xl mb-4">

        Dream Science

      </h3>

      <p className="text-[#6B6B6B] leading-relaxed">

        Explore REM sleep, memory, neuroscience and modern research.

      </p>

    </Link>

    <Link
      href="/guides/spirituality"
      className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
    >

      <div className="text-4xl mb-5">✝️</div>

      <h3 className="font-serif text-2xl mb-4">

        Biblical Dreams

      </h3>

      <p className="text-[#6B6B6B] leading-relaxed">

        Discover dream symbolism through Scripture and biblical stories.

      </p>

    </Link>

    <Link
      href="/dreams"
      className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
    >

      <div className="text-4xl mb-5">📚</div>

      <h3 className="font-serif text-2xl mb-4">

        Dream Dictionary

      </h3>

      <p className="text-[#6B6B6B] leading-relaxed">

        Browse thousands of dream meanings organized alphabetically.

      </p>

    </Link>

    <Link
      href="/categories"
      className="bg-white border border-[#EAE6E1] rounded-3xl p-8 hover:shadow-lg transition"
    >

      <div className="text-4xl mb-5">🗂️</div>

      <h3 className="font-serif text-2xl mb-4">

        Dream Categories

      </h3>

      <p className="text-[#6B6B6B] leading-relaxed">

        Explore dreams by animals, emotions, places, people and symbols.

      </p>

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
