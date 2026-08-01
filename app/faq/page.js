import Link from "next/link";
import { Search, BookOpen, MoonStar, Sparkles, Brain, BookMarked, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dream Interpretation FAQ | DreamScriptures",
  description:
    "Find answers to the most common questions about dreams, dream interpretation, symbolism, biblical meaning, recurring dreams, nightmares, and more.",
};

const popularDreams = [
  { title: "Snake Dream", href: "/dreams/snake" },
  { title: "Water Dream", href: "/dreams/water" },
  { title: "Teeth Falling Out", href: "/dreams/teeth-falling-out" },
  { title: "Flying Dream", href: "/dreams/flying" },
  { title: "Money Dream", href: "/dreams/money" },
  { title: "Pregnancy Dream", href: "/dreams/pregnancy" },
];

const quickLinks = [
  "How DreamScriptures Interprets Dreams",
  "Are Dream Meanings Fixed?",
  "Can Dreams Predict the Future?",
  "Why Do Recurring Dreams Happen?",
  "Why Do Nightmares Happen?",
  "Can Anxiety Affect Dreams?",
  "Why Do Dreams Feel So Real?",
  "How Can I Interpret My Own Dreams?",
];

export default function FAQPage() {
  return (
    <main className="bg-[#FAF8F5]">

      {/* HERO */}

      <section className="border-b border-[#E8DED1] bg-gradient-to-b from-[#FFFDF9] to-[#F8F4EE]">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="mb-5 inline-flex items-center rounded-full border border-[#E5D7BD] bg-[#FFF7EA] px-4 py-2 text-sm font-medium text-[#8B6A2F]">

            📖 8 min read

            <span className="mx-2">•</span>

            Updated August 2026

          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-[#2B2115]">
            Dream Interpretation FAQ
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#5C5349]">
            Everything you need to know about dream interpretation,
            recurring dreams, nightmares, symbolism, biblical meaning,
            emotional dreams, and how DreamScriptures approaches dream
            interpretation.
          </p>

          <div className="mt-10 rounded-3xl border border-[#E7DCC8] bg-white p-8 shadow-sm">

            <div className="flex items-center gap-3">

              <MoonStar className="h-8 w-8 text-amber-600" />

              <h2 className="text-2xl font-semibold text-[#2B2115]">
                Welcome to DreamScriptures
              </h2>

            </div>

            <p className="mt-5 text-lg leading-8 text-[#5C5349]">
              Dreams can be fascinating, comforting, confusing,
              emotional, and sometimes deeply personal.
              Whether you experienced a vivid nightmare, a recurring
              dream, or a dream that left you searching for answers,
              you&apos;re not alone.

              <br />
              <br />

              At DreamScriptures, we don&apos;t believe every dream has one
              universal meaning.

              Instead, we explore dreams through emotional context,
              symbolism, biblical wisdom, spiritual reflection, and
              personal life circumstances.

              Our goal is to encourage thoughtful reflection—not make
              absolute predictions.
            </p>

          </div>

        </div>
      </section>

      {/* SEARCH */}

      <section className="py-16">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-3xl bg-[#2B2115] p-10 text-white">

            <div className="flex items-center gap-3">

              <Search className="h-8 w-8" />

              <h2 className="text-3xl font-bold">
                Search Dream Meanings
              </h2>

            </div>

            <p className="mt-4 max-w-2xl text-lg text-[#DDD2C3]">
              Looking for a specific dream?

              Search hundreds of dream interpretations covering
              symbolism, biblical meaning, emotions, and spiritual
              insights.
            </p>

            <Link
              href="/dreams"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#2B2115] transition hover:scale-105"
            >
              Browse Dream Library

              <ArrowRight size={18} />

            </Link>

            <div className="mt-10 flex flex-wrap gap-3">

              {popularDreams.map((dream) => (

                <Link
                  key={dream.href}
                  href={dream.href}
                  className="rounded-full bg-[#4A4034] px-5 py-3 text-sm transition hover:bg-[#5E5245]"
                >
                  {dream.title}
                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="pb-20">

        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <BookOpen className="mb-4 h-10 w-10 text-amber-600" />

            <h3 className="text-4xl font-bold">300+</h3>

            <p className="mt-2 text-[#6A6259]">
              Dream Interpretations
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <Brain className="mb-4 h-10 w-10 text-amber-600" />

            <h3 className="text-4xl font-bold">
              Emotional + Spiritual
            </h3>

            <p className="mt-2 text-[#6A6259]">
              Every interpretation considers emotions,
              symbolism, and spiritual reflection.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <Sparkles className="mb-4 h-10 w-10 text-amber-600" />

            <h3 className="text-4xl font-bold">
              Biblical Insights
            </h3>

            <p className="mt-2 text-[#6A6259]">
              Scripture references where relevant,
              always encouraging discernment.
            </p>

          </div>

        </div>

      </section>

      {/* HOW TO USE */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12">

            <h2 className="text-4xl font-bold">
              How to Get the Most from DreamScriptures
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-[#5C5349]">
              Dream interpretation isn&apos;t about finding one perfect
              answer.

              It&apos;s about exploring your dream thoughtfully from
              multiple perspectives.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "Start with your emotions",
                text: "How did the dream make you feel? Fear, peace, joy, anxiety, excitement, or relief often reveal more than the symbols themselves.",
              },
              {
                number: "02",
                title: "Explore the symbolism",
                text: "Dream symbols work together. Consider the relationships between people, places, actions, and objects rather than focusing on one symbol alone.",
              },
              {
                number: "03",
                title: "Read the biblical perspective",
                text: "Where appropriate, compare dream themes with Scripture and broader biblical principles rather than isolated verses.",
              },
              {
                number: "04",
                title: "Reflect on your life",
                text: "Dreams often connect with current relationships, emotions, spiritual growth, transitions, hopes, and concerns.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="rounded-3xl border border-[#E7DDD2] bg-[#FAF8F4] p-8"
              >

                <span className="text-sm font-semibold tracking-widest text-amber-700">
                  {item.number}
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#5C5349]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUICK NAVIGATION */}

      <section className="py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-3xl bg-white p-10 shadow-sm">

            <div className="flex items-center gap-3">

              <BookMarked className="text-amber-600" />

              <h2 className="text-3xl font-bold">
                Most Asked Questions
              </h2>

            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              {quickLinks.map((question) => (

                <a
                  key={question}
                  href={`#${question.toLowerCase().replaceAll(" ", "-")}`}
                  className="rounded-xl border border-[#ECE4D8] p-5 transition hover:border-amber-500 hover:bg-[#FFF9EF]"
                >
                  {question}
                </a>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* FAQ SECTION */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-14">

            <h2 className="text-4xl font-bold text-[#2B2115]">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-lg text-[#5C5349]">
              These are some of the questions we receive most often from
              readers exploring the meaning of their dreams.
            </p>

          </div>

          {/* Question */}

          <article
            id="how-dreamscriptures-interprets-dreams"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              How does DreamScriptures interpret dreams?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Have you ever noticed that two people can dream about
              exactly the same thing yet experience completely different
              emotions?

              That&apos;s why DreamScriptures doesn&apos;t believe every dream has
              one universal meaning.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              Instead, every interpretation considers multiple layers,
              including:
            </p>

            <ul className="mt-6 space-y-3 text-[#5C5349]">

              <li>🌙 Symbolic meaning</li>

              <li>💛 Emotional context</li>

              <li>🙏 Spiritual reflection</li>

              <li>✝️ Biblical themes where appropriate</li>

              <li>🧠 Personal life circumstances</li>

            </ul>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Our goal isn&apos;t to predict the future but to encourage
              thoughtful reflection and discernment.
            </p>

          </article>

          {/* Question */}

          <article
            id="are-dream-meanings-fixed"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              Are dream meanings fixed?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              No.

              Dream meanings are rarely absolute.

              The same symbol can represent different things depending
              on your emotions, experiences, relationships, and current
              season of life.
            </p>

            <p className="mt-6 leading-8 text-[#5C5349]">
              For example, dreaming about water may symbolize peace for
              one person while representing emotional overwhelm for
              another.
            </p>

            <div className="mt-8 rounded-2xl bg-[#FFF8EC] p-6">

              <strong className="text-[#8B6A2F]">
                DreamScriptures Tip
              </strong>

              <p className="mt-3 leading-8 text-[#5C5349]">
                Always consider the emotional atmosphere of the dream,
                not just the symbol itself.
              </p>

            </div>

          </article>

          {/* Question */}

          <article
            id="can-dreams-predict-the-future"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              Can dreams predict the future?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              DreamScriptures does not treat dreams as guaranteed
              predictions.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              While some people believe certain dreams may carry
              spiritual significance, many dreams simply process
              emotions, memories, stress, relationships, hopes, and
              everyday experiences.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              We encourage prayer, wisdom, and discernment instead of
              assuming every dream predicts future events.
            </p>

          </article>

          {/* Question */}

          <article
            id="why-do-recurring-dreams-happen"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              Why do recurring dreams happen?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Recurring dreams often suggest that something important is
              still asking for your attention.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              This could be:
            </p>

            <ul className="mt-5 space-y-3 text-[#5C5349]">

              <li>• unresolved emotions</li>

              <li>• ongoing stress</li>

              <li>• personal growth</li>

              <li>• relationship challenges</li>

              <li>• spiritual reflection</li>

              <li>• important life decisions</li>

            </ul>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Sometimes the symbols change while the emotional theme
              stays the same.
            </p>

          </article>

          {/* Question */}

          <article
            id="why-do-nightmares-happen"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              Why do nightmares happen?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Nightmares are more common than many people realize.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              They often appear during periods of:
            </p>

            <ul className="mt-5 space-y-3 text-[#5C5349]">

              <li>😟 Anxiety</li>

              <li>💔 Grief</li>

              <li>😴 Poor sleep</li>

              <li>😰 Emotional overwhelm</li>

              <li>⚠️ Major life transitions</li>

            </ul>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Rather than focusing only on frightening images, it can be
              helpful to ask what emotional message your subconscious may
              be expressing.
            </p>

          </article>

          {/* Question */}

          <article
            id="can-anxiety-affect-dreams"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              Can anxiety affect dreams?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Absolutely.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              Anxiety commonly appears through dreams involving:
            </p>

            <ul className="mt-5 space-y-3 text-[#5C5349]">

              <li>🏃 Being chased</li>

              <li>📚 Missing exams</li>

              <li>⏰ Being late</li>

              <li>⬇️ Falling</li>

              <li>🧭 Getting lost</li>

              <li>💼 Feeling unprepared</li>

            </ul>

            <p className="mt-6 leading-8 text-[#5C5349]">
              These dreams often mirror emotional pressure experienced
              during waking life.
            </p>

          </article>

          {/* Question */}

          <article
            id="why-do-dreams-feel-so-real"
            className="mb-14 border-b border-[#ECE4D8] pb-14"
          >

            <h3 className="text-3xl font-semibold">
              Why do dreams feel so real?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Have you ever woken up completely convinced a dream really
              happened?
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              You&apos;re certainly not alone.
            </p>

            <p className="mt-5 leading-8 text-[#5C5349]">
              During sleep, the parts of the brain responsible for
              emotion and imagination remain highly active, making dreams
              feel incredibly vivid.
            </p>

          </article>

          {/* Question */}

          <article
            id="how-can-i-interpret-my-own-dreams"
            className="pb-10"
          >

            <h3 className="text-3xl font-semibold">
              How can I interpret my own dreams?
            </h3>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Start by asking yourself:
            </p>

            <ul className="mt-6 space-y-3 text-[#5C5349]">

              <li>💭 What emotions stood out?</li>

              <li>🌙 Which symbols appeared most often?</li>

              <li>🙏 What is happening in my life right now?</li>

              <li>📖 Are there biblical themes that connect?</li>

              <li>❤️ What might this dream be inviting me to reflect on?</li>

            </ul>

            <p className="mt-6 leading-8 text-[#5C5349]">
              Dream interpretation works best when approached with
              curiosity, humility, and openness rather than searching for
              one fixed answer.
            </p>

          </article>

        </div>

      </section>
            {/* RELATED RESOURCES */}

      <section className="bg-[#FAF8F5] py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-[#2B2115]">
              Continue Exploring DreamScriptures
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5C5349]">
              Understanding dreams doesn&apos;t stop with one answer.
              Explore our growing collection of dream interpretations,
              guides, categories, and biblical resources.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/dreams"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl">🌙</span>

              <h3 className="mt-5 text-xl font-semibold">
                Dream Library
              </h3>

              <p className="mt-4 leading-7 text-[#5C5349]">
                Browse hundreds of dream meanings covering common and
                unique dream symbols.
              </p>
            </Link>

            <Link
              href="/categories"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl">📂</span>

              <h3 className="mt-5 text-xl font-semibold">
                Dream Categories
              </h3>

              <p className="mt-4 leading-7 text-[#5C5349]">
                Explore dreams grouped by themes including animals,
                relationships, nature, emotions, and more.
              </p>
            </Link>

            <Link
              href="/emotions"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl">💛</span>

              <h3 className="mt-5 text-xl font-semibold">
                Emotional Meanings
              </h3>

              <p className="mt-4 leading-7 text-[#5C5349]">
                Discover how emotions influence dream interpretation and
                often reveal deeper meanings.
              </p>
            </Link>

            <Link
              href="/guides"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-4xl">📖</span>

              <h3 className="mt-5 text-xl font-semibold">
                Dream Guides
              </h3>

              <p className="mt-4 leading-7 text-[#5C5349]">
                Learn how dream interpretation works and build a deeper
                understanding of symbolism and context.
              </p>
            </Link>

          </div>

        </div>

      </section>

      {/* STILL HAVE QUESTIONS */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="inline-flex rounded-full bg-[#FFF5E6] px-5 py-2 text-sm font-medium text-[#8B6A2F]">
            🌙 Every dream is unique
          </div>

          <h2 className="mt-8 text-5xl font-bold text-[#2B2115]">
            Didn&apos;t Find Your Answer?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#5C5349]">
            Some dreams contain deeply personal experiences, unusual
            symbols, or details that aren&apos;t fully explained by a general
            interpretation.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5C5349]">
            If you&apos;d like a thoughtful interpretation tailored to your
            specific dream, we&apos;d love to help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/submit-dream"
              className="rounded-full bg-[#2B2115] px-10 py-5 text-lg font-semibold text-white transition hover:scale-105"
            >
              Submit Your Dream
            </Link>

            <Link
              href="/dreams"
              className="rounded-full border border-[#D8CCBD] px-10 py-5 text-lg font-semibold text-[#2B2115] transition hover:bg-[#F7F3EC]"
            >
              Browse Dream Library
            </Link>

          </div>

        </div>

      </section>

      {/* EDITORIAL APPROACH */}

      <section className="bg-[#F7F3EC] py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-3xl bg-white p-12 shadow-sm">

            <h2 className="text-4xl font-bold text-[#2B2115]">
              Our Dream Interpretation Approach
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5C5349]">
              At DreamScriptures, we believe dreams deserve thoughtful,
              balanced interpretation rather than quick conclusions.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              <div className="rounded-2xl bg-[#FAF8F5] p-8">

                <h3 className="text-2xl font-semibold">
                  Every interpretation considers:
                </h3>

                <ul className="mt-6 space-y-4 text-[#5C5349]">

                  <li>✨ Symbolic meaning</li>

                  <li>💛 Emotional context</li>

                  <li>🙏 Spiritual reflection</li>

                  <li>✝️ Biblical themes (where appropriate)</li>

                  <li>🧠 Personal life circumstances</li>

                </ul>

              </div>

              <div className="rounded-2xl bg-[#FFF9EF] p-8">

                <h3 className="text-2xl font-semibold">
                  What we believe
                </h3>

                <p className="mt-6 leading-8 text-[#5C5349]">
                  Dream interpretation should encourage wisdom,
                  reflection, prayer, and discernment—not fear or
                  certainty.
                </p>

                <p className="mt-5 leading-8 text-[#5C5349]">
                  Every dream is unique, and multiple interpretations may
                  be possible depending on the dreamer&apos;s circumstances.
                </p>

              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/methodology"
                className="rounded-full bg-[#2B2115] px-7 py-3 text-white"
              >
                Our Methodology
              </Link>

              <Link
                href="/editorial-standards"
                className="rounded-full border border-[#D8CCBD] px-7 py-3"
              >
                Editorial Standards
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#D8CCBD] px-7 py-3"
              >
                About DreamScriptures
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="bg-[#2B2115] py-24 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold">
            Explore the Meaning Behind Your Dreams
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#DDD2C3]">
            Whether you&apos;re searching for the meaning of a recurring
            dream, exploring biblical symbolism, or looking for a
            thoughtful personal interpretation, DreamScriptures is here
            to help you reflect with wisdom and discernment.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/dreams"
              className="rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#2B2115] transition hover:scale-105"
            >
              Browse Dream Meanings
            </Link>

            <Link
              href="/submit-dream"
              className="rounded-full border border-white px-10 py-5 text-lg font-semibold transition hover:bg-white hover:text-[#2B2115]"
            >
              Submit Your Dream
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}