import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "Contact DreamScriptures",
  description:
    "Contact DreamScriptures with questions, feedback, corrections, partnership opportunities, or to share your dream. We'd love to hear from you.",
  alternates: {
    canonical: "https://www.dreamscriptures.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />

      <article className="mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-[#6B6B6B]"
        >
          <Link href="/" className="hover:text-[#8F743C] transition">
            Home
          </Link>{" "}
          / <span>Contact</span>
        </nav>

        {/* Hero */}

        <section className="rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm md:p-16">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B6A2F]">

            We&apos;d Love To Hear From You

          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#1A1A1A] md:text-6xl">

            Get in Touch with DreamScriptures

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F574E]">

            Whether you have a question about a dream interpretation,
            feedback on an article, a correction to suggest, a
            collaboration opportunity, or simply want to say hello,
            you&apos;re always welcome here.

          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F574E]">

            Every thoughtful message helps DreamScriptures continue
            growing into a more helpful and trusted dream education
            resource.

          </p>

        </section>

        <LazyMobileQuickNav />

        {/* Contact Cards */}

        <section className="mt-20">

          <h2 className="font-serif text-4xl">
            How Can We Help?
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">💬</div>

              <h3 className="mt-5 font-serif text-2xl">

                Questions

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Ask about dream meanings,
                articles,
                or DreamScriptures itself.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">✍️</div>

              <h3 className="mt-5 font-serif text-2xl">

                Share Your Dream

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Submit your dream for a thoughtful
                Community or Premium interpretation.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">🤝</div>

              <h3 className="mt-5 font-serif text-2xl">

                Collaborations

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Partnerships,
                interviews,
                media requests,
                and business opportunities.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">🛠️</div>

              <h3 className="mt-5 font-serif text-2xl">

                Corrections

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Report mistakes,
                outdated information,
                or suggest improvements.

              </p>

            </div>

          </div>

        </section>

        {/* Share Your Dream */}

        <section className="mt-24 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6A2F]">

            Share Your Dream

          </p>

          <h2 className="mt-4 font-serif text-4xl">

            Every Dream Has a Story

          </h2>

          <p className="mt-8 text-lg leading-9 text-[#5F574E]">

            Some dreams disappear before breakfast.

            Others stay with us for years.

          </p>

          <p className="mt-6 text-lg leading-9 text-[#5F574E]">

            Whether your dream was comforting,
            confusing,
            recurring,
            symbolic,
            emotional,
            or impossible to forget,
            we&apos;d genuinely love to hear it.

          </p>

          <div className="mt-10 rounded-3xl bg-[#FAF8F5] p-8">

            <h3 className="font-serif text-2xl">

              To help us understand your dream...

            </h3>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div>🌙 What happened?</div>

              <div>❤️ How did you feel?</div>

              <div>👥 Who was in the dream?</div>

              <div>📍 Where did it happen?</div>

              <div>🔄 Was it recurring?</div>

              <div>💭 Any life context you&apos;d like to share?</div>

            </div>

          </div>

          <div className="mt-10">

            <Link
              href="/submit-dream"
              className="inline-flex rounded-full bg-[#1A1A1A] px-8 py-4 font-semibold text-white transition hover:bg-[#333]"
            >

              Submit Your Dream

            </Link>

          </div>

        </section>

        {/* What Happens Next */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            What Happens Next?

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                📬 Every Message is Read
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Every thoughtful email is personally reviewed with care
                and appreciation.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                ❤️ Your Feedback Matters
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Reader suggestions often inspire new dream pages,
                educational guides,
                and improvements throughout DreamScriptures.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                🛠️ Corrections Welcome
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                If something needs updating or improving,
                we&apos;d genuinely appreciate knowing.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                🌱 Always Improving
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                DreamScriptures continues to grow through research,
                thoughtful discussion,
                and reader feedback.

              </p>

            </div>

          </div>

        </section>
                {/* Founder */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Who You&apos;ll Be Contacting
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Messages sent through DreamScriptures are personally
              reviewed by <strong>Amber Balentine</strong>, the founder
              and editor of DreamScriptures.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Questions about dream meanings, thoughtful feedback,
              corrections, collaboration opportunities, media
              inquiries, and conversations about dreams are always
              welcome.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Every message is appreciated because it helps improve
              DreamScriptures for readers around the world.

            </p>

            <div className="mt-8">

              <Link
                href="/about"
                className="font-medium underline"
              >
                Learn more about DreamScriptures →
              </Link>

            </div>

          </div>

        </section>

        {/* Before You Contact Us */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            You Might Find What You&apos;re Looking For
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <p className="mt-8 max-w-3xl text-lg leading-9 text-[#5F574E]">

            Before sending a message, you may find the answer in one of
            our resources below.

          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/dreams"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">🌙</div>

              <h3 className="mt-5 font-serif text-2xl">

                Dream Library

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Browse hundreds of dream interpretations covering
                symbols, emotions, places, people, and recurring dream
                themes.

              </p>

            </Link>

            <Link
              href="/guides"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">📚</div>

              <h3 className="mt-5 font-serif text-2xl">

                Dream Guides

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Learn more about dream symbolism, psychology,
                spirituality, recurring dreams, and sleep science.

              </p>

            </Link>

            <Link
              href="/faq"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">❓</div>

              <h3 className="mt-5 font-serif text-2xl">

                Frequently Asked Questions

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Find answers to common questions about DreamScriptures,
                dream interpretation, and submissions.

              </p>

            </Link>

            <Link
              href="/methodology"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">📖</div>

              <h3 className="mt-5 font-serif text-2xl">

                Our Methodology

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Learn how DreamScriptures researches and develops dream
                interpretations.

              </p>

            </Link>

            <Link
              href="/editorial-standards"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">✅</div>

              <h3 className="mt-5 font-serif text-2xl">

                Editorial Standards

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Discover the editorial principles that guide every
                article published on DreamScriptures.

              </p>

            </Link>

            <Link
              href="/submit-dream"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">✍️</div>

              <h3 className="mt-5 font-serif text-2xl">

                Submit Your Dream

              </h3>

              <p className="mt-4 leading-7 text-[#5F574E]">

                Want a personal interpretation?
                Submit your dream through our Community or Premium
                service.

              </p>

            </Link>

          </div>

        </section>

        {/* FAQs */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Do you personally interpret dreams?

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Yes. DreamScriptures offers both Community and Premium
                dream interpretation services through our secure
                submission platform.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Can I report an error?

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Absolutely. If you notice outdated information,
                inaccuracies, or anything that could be improved,
                we&apos;d genuinely appreciate hearing from you.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Can I suggest a dream symbol?

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Yes. Reader suggestions help us decide which dream
                symbols and educational topics to research next.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                How quickly will I receive a response?

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                We aim to reply as quickly as possible, although response
                times may vary depending on message volume.

              </p>

            </div>

          </div>

        </section>

                {/* Email */}

        <section id="corrections" className="mt-24 scroll-mt-28">

          <h2 className="font-serif text-4xl">
            Email DreamScriptures
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-8 rounded-3xl border border-[#E7DDD2] bg-[#FFFDF9] p-7">
            <h3 className="font-serif text-2xl text-[#1A1A1A]">Report an error or interpretation concern</h3>
            <p className="mt-4 leading-8 text-[#5F574E]">
              Include the page URL, the passage or claim you are concerned
              about, and—when possible—the source or context you think should
              be considered. Corrections, source questions, safety concerns,
              and respectful disagreement about an interpretation are all
              welcome. Each report is reviewed by Amber Balentine, founder and
              editor; a change is made when the review supports it.
            </p>
          </div>

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6A2F]">

              Contact Email

            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#1A1A1A]">

              dreamscriptures@gmail.com

            </h3>

            <p className="mt-8 text-lg leading-9 text-[#5F574E]">

              Whether you&apos;re asking a question,
              sharing a dream,
              reporting an error,
              suggesting a new dream symbol,
              discussing a collaboration,
              or simply saying hello—

              we&apos;d genuinely love to hear from you.

            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                <h4 className="font-semibold">

                  💬 Typical Topics

                </h4>

                <ul className="mt-4 space-y-2 text-[#5F574E]">

                  <li>Dream questions</li>

                  <li>Article feedback</li>

                  <li>Corrections</li>

                  <li>Partnerships</li>

                  <li>Media requests</li>

                </ul>

              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                <h4 className="font-semibold">

                  ⏳ Response Time

                </h4>

                <p className="mt-4 leading-8 text-[#5F574E]">

                  While response times vary depending on message volume,
                  we do our best to reply within a few business days.

                </p>

              </div>

            </div>

        </div>

        </section>

        {/* Every Message Matters */}

        <section className="mt-24 rounded-[32px] bg-[#FFFDF9] p-10 shadow-sm">

          <h2 className="font-serif text-4xl">

            Every Message Matters

          </h2>

          <p className="mt-8 text-lg leading-9 text-[#5F574E]">

            DreamScriptures continues to grow because readers take the
            time to share their experiences, ask thoughtful questions,
            and suggest improvements.

          </p>

          <p className="mt-6 text-lg leading-9 text-[#5F574E]">

            Many of our ideas for new dream interpretations,
            educational guides,
            and website improvements begin with conversations from
            readers just like you.

          </p>

          <blockquote className="mt-10 rounded-2xl border-l-4 border-[#8F743C] bg-white p-8">

            <p className="text-2xl italic leading-10 text-[#3E352C]">

              &quot;Every dream tells a story.

              Every question starts a conversation.

              Every message helps DreamScriptures become a better
              resource for everyone.&quot;

            </p>

          </blockquote>

        </section>

        {/* Trust Links */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            Learn More About DreamScriptures

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/about"
              className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white"
            >
              About Us
            </Link>

            <Link
              href="/methodology"
              className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white"
            >
              Methodology
            </Link>

            <Link
              href="/editorial-standards"
              className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white"
            >
              Editorial Standards
            </Link>

            <Link
              href="/faq"
              className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white"
            >
              FAQ
            </Link>

            <Link
              href="/disclaimer"
              className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white"
            >
              Disclaimer
            </Link>

            <Link
              href="/privacy"
              className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white"
            >
              Privacy Policy
            </Link>

          </div>

        </section>

      </article>

      {/* Final CTA */}

      <section className="mt-10 bg-[#1A1A1A] py-20 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#D8C08F]">

            Continue Exploring

          </p>

          <h2 className="mt-6 font-serif text-5xl">

            Explore the World of Dreams

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#DDD2C3]">

            Browse hundreds of dream interpretations,
            discover emotional themes,
            explore biblical perspectives,
            or submit your own dream for a thoughtful interpretation.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/dreams"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#1A1A1A] transition hover:scale-105"
            >
              🌙 Browse Dream Library
            </Link>

            <Link
              href="/submit-dream"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#1A1A1A]"
            >
              ✍️ Submit Your Dream
            </Link>

          </div>

        </div>

      </section>

      <SiteFooter />

    </main>

  );
}
