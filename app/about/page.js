import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title:
    "About DreamScriptures | Dream Meanings, Symbolism & Interpretation",

  description:
    "Learn about DreamScriptures, our mission, editorial philosophy, dream interpretation methodology, and the research behind our growing dream knowledge hub.",

  alternates: {
    canonical: "https://www.dreamscriptures.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />

      <article className="mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-sm text-[#6B6B6B]"
        >
          <Link
            href="/"
            className="transition hover:text-[#8F743C]"
          >
            Home
          </Link>{" "}
          / <span>About</span>
        </nav>

        {/* Hero */}

        <section className="rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm md:p-16">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8B6A2F]">

            Independent Dream Education

          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[#1A1A1A] md:text-6xl">

            Helping People Better Understand Their Dreams

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F574E]">

            DreamScriptures is an independent educational platform
            dedicated to helping people thoughtfully explore the possible
            meanings of their dreams through symbolism, emotional
            understanding, spiritual reflection, biblical themes, and
            modern dream research.

          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F574E]">

            Rather than offering one-size-fits-all definitions,
            DreamScriptures encourages readers to explore dreams within
            the context of their emotions, experiences, relationships,
            beliefs, and current season of life.

          </p>

        </section>

        {/* Statistics */}

        <section className="mt-20">

          <div className="mb-10">

            <h2 className="font-serif text-4xl text-[#1A1A1A]">

              DreamScriptures Today

            </h2>

            <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">🌙</div>

              <h3 className="mt-5 text-4xl font-bold">
                300+
              </h3>

              <p className="mt-3 leading-7 text-[#6B6B6B]">

                Dream interpretations covering hundreds of dream symbols,
                situations, emotions, people, places, and experiences.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">📚</div>

              <h3 className="mt-5 text-4xl font-bold">

                100+

              </h3>

              <p className="mt-3 leading-7 text-[#6B6B6B]">

                Educational guides exploring dream psychology,
                symbolism, spirituality, biblical themes, wellness, and
                sleep science.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">❤️</div>

              <h3 className="mt-5 text-2xl font-bold">

                Context First

              </h3>

              <p className="mt-3 leading-7 text-[#6B6B6B]">

                Every interpretation considers emotional context,
                symbolism, spiritual reflection, biblical themes, and
                personal circumstances.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="text-4xl">🌍</div>

              <h3 className="mt-5 text-2xl font-bold">

                Growing Daily

              </h3>

              <p className="mt-3 leading-7 text-[#6B6B6B]">

                New dream interpretations, educational resources, and
                research continue to be added as DreamScriptures grows.

              </p>

            </div>

          </div>

        </section>

        <LazyMobileQuickNav />

        {/* Why DreamScriptures Exists */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">

            Why DreamScriptures Exists

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">

            <div>

              <p className="text-lg leading-9 text-[#5F574E]">

                Dreams have fascinated humanity for thousands of years.

                Yet many dream websites reduce them to simple
                one-sentence definitions that ignore emotion, context,
                personal experiences, and the complexity of dreaming
                itself.

              </p>

              <p className="mt-7 text-lg leading-9 text-[#5F574E]">

                DreamScriptures was created because we believe dreams
                deserve a more thoughtful approach.

                Instead of asking,

                <strong> &quot;What does this symbol always mean?&quot;</strong>

                we ask,

                <strong>
                  {" "}
                  &quot;What could this dream mean for this person?&quot;
                </strong>

              </p>

            </div>

            <div className="rounded-3xl border border-[#E7DDD2] bg-[#FFFDF9] p-8">

              <h3 className="font-serif text-2xl">

                Our Philosophy

              </h3>

              <p className="mt-6 leading-8 text-[#5F574E]">

                Dreams rarely have one universal meaning.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                The same dream symbol may represent completely different
                things depending on the dreamer&apos;s emotions,
                relationships, beliefs, experiences, spiritual life,
                and current circumstances.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                That&apos;s why DreamScriptures explores dreams through
                multiple complementary perspectives instead of relying
                on fixed definitions.

              </p>

            </div>

          </div>

        </section>

                {/* What Makes DreamScriptures Different */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            What Makes DreamScriptures Different?
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#5F574E]">

            Many dream dictionaries focus on giving one fixed meaning for
            every dream symbol.

            DreamScriptures takes a different approach.

          </p>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-[#5F574E]">

            We believe dreams are deeply personal experiences. Two people
            can dream about the exact same symbol yet experience entirely
            different meanings because their emotions, relationships,
            beliefs, memories, and life circumstances are different.

          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-[#E7DDD2] bg-white p-8 shadow-sm">

              <h3 className="mb-6 font-serif text-2xl text-[#1A1A1A]">

                Instead of asking...

              </h3>

              <div className="rounded-2xl bg-[#FFF8EF] p-6">

                <p className="text-lg italic text-[#5F574E]">

                  &quot;What does this symbol always mean?&quot;

                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-[#E7DDD2] bg-white p-8 shadow-sm">

              <h3 className="mb-6 font-serif text-2xl text-[#1A1A1A]">

                We ask...

              </h3>

              <div className="rounded-2xl bg-[#F7F4EE] p-6">

                <p className="text-lg italic text-[#5F574E]">

                  &quot;What could this dream mean for this dreamer,
                  considering their emotions, experiences,
                  relationships, and current season of life?&quot;

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* What You'll Find */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            What You&apos;ll Find on DreamScriptures
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#5F574E]">

            DreamScriptures is more than a dream dictionary.

            It&apos;s a growing educational resource designed to help readers
            better understand dreams from multiple complementary
            perspectives.

          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "🌙",
                title: "Dream Interpretations",
                text: "Hundreds of dream meanings covering common symbols, recurring dreams, emotions, people, places, and situations.",
              },
              {
                icon: "💛",
                title: "Emotional Interpretation",
                text: "Explore how emotions often shape the meaning and significance behind dreams.",
              },
              {
                icon: "✝️",
                title: "Biblical Perspectives",
                text: "Relevant scripture and biblical themes where appropriate, encouraging wisdom and discernment.",
              },
              {
                icon: "📚",
                title: "Educational Guides",
                text: "In-depth articles covering dream psychology, symbolism, sleep science, and interpretation.",
              },
              {
                icon: "🧠",
                title: "Dream Psychology",
                text: "Understand the relationship between memory, stress, emotions, and subconscious experiences.",
              },
              {
                icon: "✍️",
                title: "Personal Dream Interpretations",
                text: "Submit your own dream for a thoughtful Community or Premium interpretation.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-[#5F574E]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Our Mission */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            Our Mission
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Our mission is to build one of the world&apos;s most trusted,
              helpful, and thoughtfully researched dream education
              platforms.

            </p>

            <p className="mt-7 text-lg leading-9 text-[#5F574E]">

              We aim to combine symbolism, emotional understanding,
              spiritual reflection, biblical themes, psychology,
              historical traditions, and modern dream research into one
              growing knowledge hub that is accessible to everyone.

            </p>

            <p className="mt-7 text-lg leading-9 text-[#5F574E]">

              Every article is written with one goal:

            </p>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-[#8F743C] bg-[#FFF9EF] p-8">

              <p className="text-2xl italic leading-10 text-[#3E352C]">

                &quot;To help readers leave with greater understanding—not
                simply another dream definition.&quot;

              </p>

            </blockquote>

          </div>

        </section>

        {/* Our Interpretation Approach */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            Our Interpretation Approach
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#5F574E]">

            Every interpretation published on DreamScriptures considers
            multiple complementary perspectives rather than relying on a
            single system of interpretation.

          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              "💛 Emotional interpretation",
              "🌙 Symbolic meaning",
              "✝️ Biblical themes where appropriate",
              "🙏 Spiritual reflection",
              "🧠 Dream psychology",
              "📖 Historical dream traditions",
              "🌍 Cross-cultural symbolism",
              "💤 Sleep science",
              "❤️ Personal life context",
              "🔄 Recurring dream patterns",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-[#E7DDD2] bg-white p-6"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

               {/* How We Research */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            How We Research Dream Meanings
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#5F574E]">

            DreamScriptures doesn&apos;t rely on a single dream dictionary or
            one interpretation system.

            Instead, we compare multiple perspectives, identify recurring
            themes, and carefully consider the emotional, symbolic,
            spiritual, and historical context surrounding dreams.

          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "📖 Historical dream symbolism",
              "🧠 Dream psychology",
              "💤 Sleep science",
              "🌍 Cross-cultural dream traditions",
              "❤️ Emotional pattern analysis",
              "✝️ Biblical themes and narratives",
              "🔄 Recurring dream reports",
              "📚 Contemporary dream research",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-[#E7DDD2] bg-white p-6 shadow-sm"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* Emotional Framework */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            Our Emotional Interpretation Framework
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              One of the core ideas behind DreamScriptures is that dreams
              are often organized through emotion before they are
              organized through symbols.

            </p>

            <p className="mt-7 text-lg leading-9 text-[#5F574E]">

              Two people may dream about the exact same thing while
              experiencing completely different meanings because the
              emotional atmosphere surrounding the dream is different.

            </p>

            <p className="mt-7 text-lg leading-9 text-[#5F574E]">

              That&apos;s why every interpretation encourages readers to
              consider both the symbols and the feelings experienced
              within the dream.

            </p>

          </div>

        </section>

        {/* Our Journey */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl text-[#1A1A1A]">
            Our Journey
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold text-[#8F743C]">
                🌱 The Beginning
              </h3>

              <p className="mt-4 leading-8 text-[#5F574E]">
                DreamScriptures began with a simple goal:
                create a more thoughtful approach to dream
                interpretation that values context over fixed
                definitions.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold text-[#8F743C]">
                🚀 Today
              </h3>

              <p className="mt-4 leading-8 text-[#5F574E]">
                The platform continues to grow with hundreds of dream
                interpretations, educational guides, emotional hubs,
                biblical insights, and personalized dream
                interpretations.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold text-[#8F743C]">
                🌍 Looking Ahead
              </h3>

              <p className="mt-4 leading-8 text-[#5F574E]">
                Our vision is to become one of the world&apos;s most trusted
                dream education resources by continually improving our
                content, expanding our research, and listening to our
                readers.
              </p>
            </div>

          </div>

        </section>

        {/* Our Commitment */}

        <section className="mt-24 rounded-3xl bg-[#FFFDF9] p-10 shadow-sm">

          <h2 className="font-serif text-4xl">
            Our Commitment
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#5F574E]">

            DreamScriptures is constantly evolving.

            We are committed to continually improving both the quality
            and depth of our content.

          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              "✔ Expand the Dream Library",
              "✔ Improve existing interpretations",
              "✔ Add richer biblical references",
              "✔ Strengthen emotional insights",
              "✔ Publish new educational guides",
              "✔ Listen to reader feedback",
              "✔ Keep improving editorial quality",
              "✔ Make dream interpretation more accessible",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white p-5"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* Founder */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            About the Founder
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="leading-9 text-[#5F574E]">

              DreamScriptures was founded by Amber Balentine after years
              of exploring dream symbolism, emotional interpretation,
              recurring dream patterns, and the many ways different
              cultures have understood dreams throughout history.

            </p>

            <p className="mt-7 leading-9 text-[#5F574E]">

              The vision has always been simple:

            </p>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-[#8F743C] bg-[#FFF9EF] p-8">

              <p className="text-2xl italic leading-10">

                &quot;Create a dream resource that helps people think more
                deeply rather than simply giving one-word definitions.&quot;

              </p>

            </blockquote>

            <Link
              href="/author"
              className="mt-8 inline-block font-medium underline"
            >
              Learn more about the author →
            </Link>

          </div>

        </section>

        {/* Support */}

        <section className="mt-24 rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="font-serif text-4xl">
            Support DreamScriptures
          </h2>

          <p className="mt-7 text-lg leading-9 text-[#5F574E]">

            DreamScriptures is independently researched, written,
            maintained, and continually expanded.

            If our work has helped you better understand your dreams,
            your support helps us continue creating free educational
            content for everyone.

          </p>

          <a
            href="https://buymeacoffee.com/dreamscriptures"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#1A1A1A] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            ☕ Buy us a coffee
          </a>

        </section>

        {/* Transparency */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Transparency & Editorial Integrity
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <p className="mt-8 text-lg leading-9 text-[#5F574E]">

            DreamScriptures is independently operated and follows its own
            editorial standards and interpretation methodology.

            We are not affiliated with any medical institution,
            university, governmental agency, or religious organization.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link href="/methodology" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white">
              Methodology
            </Link>

            <Link href="/editorial-standards" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white">
              Editorial Standards
            </Link>

            <Link href="/disclaimer" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white">
              Disclaimer
            </Link>

          </div>

        </section>

        {/* Final CTA */}

        <section className="mt-24 rounded-[32px] bg-[#1A1A1A] p-14 text-center text-white">

          <h2 className="font-serif text-5xl">

            Explore the World of Dreams

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#DDD2C3]">

            Whether you&apos;re trying to understand a recurring dream,
            explore biblical symbolism, or simply learn more about the
            fascinating world of dreams, DreamScriptures is here to help
            you reflect with wisdom, curiosity, and discernment.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/dreams"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#1A1A1A] transition hover:scale-105"
            >
              Browse Dream Library
            </Link>

            <Link
              href="/submit-dream"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#1A1A1A]"
            >
              Submit Your Dream
            </Link>

          </div>

        </section>

      </article>

      <SiteFooter />

    </main>
  );
} 