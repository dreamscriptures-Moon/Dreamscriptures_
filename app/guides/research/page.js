import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SearchBar from "@/app/components/SearchBar";
import JumpToNavigation from "@/app/components/JumpToNavigation";

export const metadata = {
  title:
    "Dream Research Library | Scientific Studies, Statistics & Modern Dream Science",

  description:
    "Explore dream research, scientific studies, REM sleep, dream statistics, neuroscience, psychology and evidence-based discoveries about dreaming.",

  alternates: {
    canonical: "/guides/research",
  },
};

export default function DreamResearchPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">

      <SiteHeader />

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">

        <nav className="flex gap-2 text-sm text-[#8A8175] mb-10">

          <Link href="/">Home</Link>

          <span>›</span>

          <Link href="/guides">Dream Guides</Link>

          <span>›</span>

          <span>Dream Research</span>

        </nav>

        <p className="uppercase tracking-[0.22em] text-[#B79B5E] text-xs mb-4">

          Dream Library
        </p>

        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

          Dream Research Library

        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[#6B6B6B] leading-relaxed">

          Explore scientific studies, dream statistics, sleep research,
          common dream themes and what researchers have discovered about
          dreaming.

        </p>

        <div className="flex flex-wrap gap-3 mt-10">

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            📊 Research & Statistics

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            🧠 Science-Based

          </span>

          <span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

            📚 Continuously Updated

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

      <li><Link href="#research-overview">What Dream Research Tells Us</Link></li>

      <li><Link href="#how-scientists-study-dreams">How Scientists Study Dreams</Link></li>

      <li><Link href="#most-common-dreams">Most Common Dreams</Link></li>

      <li><Link href="#dream-statistics">Most Searched Dream Meanings</Link></li>

      <li><Link href="#research-timeline">Research Timeline</Link></li>

      <li><Link href="#consensus">Scientific Consensus</Link></li>

      <li><Link href="#future">Where Dream Science Is Heading</Link></li>

      <li><Link href="#faq">FAQ</Link></li>

      <li className="pt-2">
        <Link href="/guides/science">
          Explore Dream Science →
        </Link>
      </li>

    </ul>

  </nav>

</section>


      <section className="max-w-6xl mx-auto px-6 mb-20">

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

            <p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

              Published Studies

            </p>

            <h3 className="font-serif text-2xl">

              10,000+

            </h3>

          </div>

          <div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

            <p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

              Main Fields

            </p>

            <p>

              Sleep Science

              <br />

              Neuroscience

              <br />

              Psychology

            </p>

          </div>

          <div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

            <p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

              Topics

            </p>

            <p>

              Memory

              <br />

              Emotion

              <br />

              REM Sleep

            </p>

          </div>

          <div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

            <p className="text-xs uppercase tracking-widest text-[#B79B5E] mb-3">

              Reading Time

            </p>

            <h3 className="font-serif text-2xl">

              35 min

            </h3>

          </div>

        </div>

      </section>



<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

🔬 SCIENTIFIC STUDIES

</p>

<h2 className="font-serif text-4xl mt-3">

Explore Research Topics
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<Link href="/guides/science">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

Memory Studies →

</div>

</Link>

<Link href="/guides/dreams-and-emotions">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

Emotion Studies →

</div>

</Link>

<Link href="/guides/science">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

REM Sleep Studies →

</div>

</Link>

<Link href="/guides/lucid-dreaming">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

Lucid Dream Studies →

</div>

</Link>

<Link href="/guides/nightmares-meaning">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

Nightmare Studies →

</div>

</Link>

<Link href="/guides/research">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

Brain Imaging →

</div>

</Link>

</div>

</section>

      <article
        id="research-overview"
        className="max-w-4xl mx-auto px-6 mb-24"
      >

        <h2 className="font-serif text-4xl mb-8">

          What Dream Research Tells Us

        </h2>

        <div className="space-y-8 text-lg leading-relaxed text-[#444]">

          <p>

            Dreams are among the most familiar human experiences and one
            of the most challenging subjects to study. Unlike speech,
            movement or behavior, dreams happen internally and can only be
            described after waking.

          </p>

          <p>

            To better understand dreaming, researchers combine sleep
            laboratories, EEG recordings, brain imaging, dream journals,
            interviews and controlled experiments. Together these methods
            help scientists investigate when dreams occur, how they relate
            to memory and emotion, and why certain dream patterns appear
            repeatedly across different people.

          </p>

          <blockquote className="border-l-4 border-[#C6A96B] pl-6 italic text-[#666]">

            Dream research continues evolving. Some findings are supported
            by decades of evidence, while many questions remain active
            areas of scientific investigation.

          </blockquote>

          <p>

            This library brings together research findings, statistics,
            historical milestones and current scientific consensus,
            providing an evidence-based overview of what we know—and what
            researchers are still exploring—about the dreaming mind.

          </p>

        </div>

      </article>

<section
id="how-scientists-study-dreams"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

RESEARCH METHODS

</p>

<h2 className="font-serif text-4xl mt-3">

How Scientists Study Dreams

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🧠

</div>

<h3 className="font-serif text-2xl mb-4">

Sleep Labs

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Researchers monitor sleeping volunteers under controlled conditions to
study dream timing and sleep stages.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

📈

</div>

<h3 className="font-serif text-2xl mb-4">

EEG Recording

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Electroencephalography measures electrical activity in the brain while
people sleep.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🌙

</div>

<h3 className="font-serif text-2xl mb-4">

REM Observation

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Rapid Eye Movement sleep is strongly associated with vivid dreaming and
remains one of the most studied sleep stages.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

📚

</div>

<h3 className="font-serif text-2xl mb-4">

Dream Journals

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Participants record dreams immediately after waking, allowing patterns
to be compared across thousands of reports.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🎙️

</div>

<h3 className="font-serif text-2xl mb-4">

Interviews

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Researchers analyze emotions, themes and recurring experiences through
structured conversations.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">

🔬

</div>

<h3 className="font-serif text-2xl mb-4">

Brain Imaging

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

Modern neuroscience compares brain activity during sleep and waking
states using advanced imaging technology.

</p>

</div>

</div>

</section>



<section
id="most-common-dreams"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

DREAM DATA HUB

</p>

<h2 className="font-serif text-4xl mt-3">

Top 10 Most Common Dreams

</h2>

<p className="mt-4 text-[#6B6B6B] max-w-3xl">

Dream experiences reported repeatedly across research studies and dream
journals from around the world.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

{[
"🏃 Being Chased",
"⬇️ Falling",
"🦷 Teeth Falling Out",
"🕊️ Flying",
"🎓 School Dreams",
"⏰ Being Late",
"😳 Being Naked",
"🔍 Losing Something",
"🏃 Running Away",
"💀 Death Dreams",
].map((dream)=>(
<div
key={dream}
className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center hover:shadow-md transition"
>

<p className="font-serif text-xl">

{dream}

</p>

</div>
))}

</div>

</section>

<section
id="dream-statistics"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

POPULAR SEARCHES

</p>

<h2 className="font-serif text-4xl mt-3">

Top 10 Most Searched Dream Meanings

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

{[
"🐍 Snake",
"💧 Water",
"🤰 Pregnancy",
"🏠 House",
"💀 Death",
"👶 Baby",
"🐶 Dog",
"💒 Wedding",
"💰 Money",
"🐟 Fish",
].map((dream)=>(
<div
key={dream}
className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center hover:shadow-md transition"
>

<p className="font-serif text-xl">

{dream}

</p>

<p className="text-[#B79B5E] mt-4">

Explore →

</p>

</div>
))}

</div>

</section>

<section
id="research-timeline"
className="max-w-5xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

RESEARCH HISTORY

</p>

<h2 className="font-serif text-4xl mt-3">

Dream Research Timeline

</h2>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-3xl p-10">

<div className="space-y-8">

<div>

<h3 className="font-serif text-2xl">

1899

</h3>

<p className="text-[#6B6B6B] mt-2">

Sigmund Freud publishes <i>The Interpretation of Dreams</i>,
bringing dream analysis into modern psychology.

</p>

</div>

<div>↓</div>

<div>

<h3 className="font-serif text-2xl">

1953

</h3>

<p className="text-[#6B6B6B] mt-2">

Researchers identify REM sleep, transforming scientific dream research.

</p>

</div>

<div>↓</div>

<div>

<h3 className="font-serif text-2xl">

1977

</h3>

<p className="text-[#6B6B6B] mt-2">

Activation-Synthesis Theory proposes dreams emerge from brain activity.

</p>

</div>

<div>↓</div>

<div>

<h3 className="font-serif text-2xl">

1980s

</h3>

<p className="text-[#6B6B6B] mt-2">

Lucid dreaming becomes an active area of laboratory research.

</p>

</div>

<div>↓</div>

<div>

<h3 className="font-serif text-2xl">

2000s

</h3>

<p className="text-[#6B6B6B] mt-2">

Brain imaging allows scientists to study dreaming in greater detail.

</p>

</div>

<div>↓</div>

<div>

<h3 className="font-serif text-2xl">

Today

</h3>

<p className="text-[#6B6B6B] mt-2">

Neuroscience, psychology and sleep medicine continue exploring the
purpose and function of dreams.

</p>

</div>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

DREAM FACTS

</p>

<h2 className="font-serif text-4xl mt-3">

Research Highlights

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">
🧠
</div>

<h3 className="font-serif text-2xl mb-3">

4–6 Dreams

</h3>

<p className="text-[#6B6B6B]">

Most people experience between four and six dreams every night.

</p>

</div>

<div className="text-4xl mb-5">
🌙
</div>

<h3 className="font-serif text-2xl mb-3">

Longest REM

</h3>

<p className="text-[#6B6B6B]">

REM periods become progressively longer toward morning.

</p>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">
📚
</div>

<h3 className="font-serif text-2xl mb-3">

Dream Recall

</h3>

<p className="text-[#6B6B6B]">

Many dreams fade within minutes unless they&apos;re written down.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">
🐶
</div>

<h3 className="font-serif text-2xl mb-3">

Beyond Humans

</h3>

<p className="text-[#6B6B6B]">

Many mammals experience REM sleep, suggesting dreaming may extend beyond humans.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<div className="text-4xl mb-5">
😴
</div>

<h3 className="font-serif text-2xl mb-3">

A Lifetime of Dreams

</h3>

<p className="text-[#6B6B6B]">

Most people spend thousands of hours dreaming over the course of their lives.

</p>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="flex justify-between items-center mb-10">

<div>

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

❌ DREAM MYTHS

</p>

<h2 className="font-serif text-4xl mt-3">

Common Dream Myths

</h2>

</div>

<Link
href="/guides/dream-myths"
className="text-[#B79B5E] font-medium"
>

Explore →

</Link>

</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

❌ Everyone dreams in black and white

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

❌ Every dream predicts the future

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

❌ Falling means you&apos;ll die

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

❌ Nightmares are always bad

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

❌ Dream dictionaries are universal

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

🧪 DREAM LAB

</p>

<h2 className="font-serif text-4xl mt-3">

Try These Self-Observation Experiments

</h2>

<p className="mt-4 max-w-3xl text-[#6B6B6B]">

Simple activities designed to help you notice patterns in your own dreams
and sleep habits.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-8">

📝

<h3 className="font-serif text-2xl mt-5">

7-Day Dream Journal

</h3>

<p className="mt-4 text-[#6B6B6B]">

Record one dream every morning and notice recurring themes.

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-8">

💚

<h3 className="font-serif text-2xl mt-5">

Emotion Tracker

</h3>

<p className="mt-4 text-[#6B6B6B]">

Compare your daytime emotions with your dream content.

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-8">

🌙

<h3 className="font-serif text-2xl mt-5">

Morning Recall Test

</h3>

<p className="mt-4 text-[#6B6B6B]">

Stay still for three minutes before checking your phone and compare recall.

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-8">

😴

<h3 className="font-serif text-2xl mt-5">

Sleep Schedule

</h3>

<p className="mt-4 text-[#6B6B6B]">

Track whether consistent bedtimes affect dream vividness.

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-8">

🔄

<h3 className="font-serif text-2xl mt-5">

Recurring Symbols

</h3>

<p className="mt-4 text-[#6B6B6B]">

Notice which symbols appear repeatedly over one month.

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-8">

📊

<h3 className="font-serif text-2xl mt-5">

Compare One Week vs One Month

</h3>

<p className="mt-4 text-[#6B6B6B]">

Observe how dream patterns become clearer over time.

</p>

</div>

</div>

</section>

<section
id="consensus"
className="max-w-6xl"
>
<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

RESEARCH CONSENSUS

</p>

<h2 className="font-serif text-4xl mt-3">

What Current Evidence Suggests

</h2>

</div>

<div className="overflow-x-auto">

<table className="w-full bg-white rounded-2xl overflow-hidden">

<thead>

<tr className="bg-[#F8F6F2]">

<th className="p-5 text-left font-semibold">

Research Question

</th>

<th className="p-5 text-left font-semibold">

Current Evidence

</th>

<th className="p-5 text-left font-semibold">

Confidence

</th>

</tr>

</thead>

<tbody>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5">

Do humans dream every night?

</td>

<td className="p-5">

Yes. Most healthy adults experience multiple dreams each night.

</td>

<td className="p-5">

🟢 Strong

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5">

Do dreams occur only during REM sleep?

</td>

<td className="p-5">

No. Dreams can occur outside REM, although REM dreams are often more vivid.

</td>

<td className="p-5">

🟡 Moderate

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5">

Does stress affect dreams?

</td>

<td className="p-5">

Stress is strongly linked with changes in dream frequency and emotional content.

</td>

<td className="p-5">

🟢 Strong

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5">

Can dreams support memory?

</td>

<td className="p-5">

Research suggests dreaming may contribute to memory consolidation.

</td>

<td className="p-5">

🟡 Moderate

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5">

Can dreams predict the future?

</td>

<td className="p-5">

There is currently no scientific evidence that dreams predict future events.

</td>

<td className="p-5">

⚪ Unsupported

</td>

</tr>

<tr className="border-t border-[#EAE6E1]">

<td className="p-5">

Is there one accepted dream theory?

</td>

<td className="p-5">

No. Multiple theories continue to be researched.

</td>

<td className="p-5">

🟡 Moderate

</td>

</tr>

</tbody>

</table>

</div>

</section>

<section
id="future"
className="max-w-5xl mx-auto px-6 mb-24"
>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

STATE OF DREAM RESEARCH

</p>

<h2 className="font-serif text-4xl mb-8">

Where Dream Science Is Heading

</h2>

<div className="space-y-6 text-lg text-[#444]">

<p>

Researchers continue investigating why dreams occur, how they influence
memory, whether lucid dreaming can be trained consistently and how
dreaming contributes to emotional well-being.

</p>

<p>

New technologies, brain imaging techniques and artificial intelligence
are providing researchers with better tools than ever before, yet many
fundamental questions remain unanswered.

</p>

<p>

Dream science continues to evolve, making it one of the most fascinating
fields in sleep research.

</p>

</div>

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
