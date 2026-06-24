import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "Amber Balentine | Founder, Editor & Dream Researcher | DreamScriptures",
  description:
    "Learn about Amber Balentine, founder and editor of DreamScriptures, and the emotional interpretation framework behind the site's dream meanings and symbolism.",
  alternates: {
    canonical: "https://www.dreamscriptures.com/author/amber-balentine",
  },
};

export default function AuthorPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-28">

        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6B6B] mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/author" className="hover:underline">
            Authors
          </Link>
        </nav>

        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
          Founder • Editor • Independent Dream Researcher
        </p>

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Amber Balentine
        </h1>

        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-6">
         Founder and editor of DreamScriptures, an independent dream
knowledge hub exploring dreams through psychology, symbolism,
sleep science, spirituality, emotional patterns and research.
        </p>

        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          Amber Balentine is the founder and editor of DreamScriptures, an
          independent dream interpretation resource focused on emotional
          patterns, symbolism, subconscious themes, and personal context.
        </p>

        <LazyMobileQuickNav />

        <div className="space-y-14 text-[#2A2A2A] leading-loose text-base md:text-lg">

          {/* About */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              About Amber
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              Amber founded DreamScriptures after becoming fascinated by the
way dreams combine emotion, memory, symbolism and personal
experience into stories that often feel more meaningful than
ordinary thoughts.

Rather than collecting fixed dream definitions, the project
gradually evolved into an educational resource exploring dreams
through multiple perspectives including psychology, sleep science,
spiritual traditions, history and modern research.
            </p>

            <p className="mt-6">
              Through years of independent study and research, she became
              particularly interested in how emotional patterns influence the
              way dreams are experienced and interpreted.
            </p>

            <p className="mt-6">
              This interest eventually led to the development of the
              DreamScriptures emotional interpretation framework used
              throughout the site.
            </p>
          </section>

{/* Why DreamScriptures Exists */}

<section>
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    Why DreamScriptures Exists
  </h2>

  <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

  <p>
    Many dream websites provide a single meaning for every symbol.
    A snake always means betrayal. Water always represents emotion.
    Falling always means losing control.
  </p>

  <p className="mt-6">
    DreamScriptures was created from a different belief: dreams are
    personal experiences shaped by memory, emotion, relationships,
    culture, spirituality, subconscious patterns, and the events of
    everyday life.
  </p>

  <p className="mt-6">
    Instead of asking only{" "}
    <span className="italic">
      &quot;What does this symbol mean?&quot;
    </span>{" "}
    DreamScriptures also asks:
  </p>

  <div className="mt-8 space-y-4 border-l border-[#EAE6E1] pl-6">

    <p>❤️ What emotions were present during the dream?</p>

    <p>🌙 What was happening in waking life?</p>

    <p>🔍 How did the symbols interact with one another?</p>

    <p>🧠 What might psychology or neuroscience suggest?</p>

    <p>📊 What does modern dream research tell us?</p>

    <p>🌍 How have different cultures and traditions understood similar dreams?</p>

  </div>

  <p className="mt-8">
    Rather than offering absolute answers, DreamScriptures combines
    emotional interpretation, symbolism, psychology, spirituality,
    sleep science, history, wellness, and research to help readers
    explore dreams from multiple complementary perspectives.
  </p>

<p className="mt-8 text-[#5F574E] font-serif text-lg leading-relaxed italic">
  Dreams rarely speak in fixed definitions.
  They speak through emotion, memory, symbolism,
  experience, and the quiet patterns we often overlook
  while awake.
</p>

</section>

          {/* Philosophy */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Dream Interpretation Philosophy
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              DreamScriptures is built around the idea that dreams are often
              organized through emotion before they are organized through
              symbols.
            </p>

            <p className="mt-6">
              A dream symbol rarely exists in isolation. The emotions
              surrounding the dream, relationships between symbols, and the
                dreamer&apos;s personal circumstances often provide important context
              for interpretation.
            </p>

            <p className="mt-6">
              Because of this, DreamScriptures explores dream meanings through
              emotional patterns, symbolic relationships, subconscious themes,
              spiritual perspectives, and waking-life experiences rather than
              relying solely on fixed definitions.
            </p>

            <p className="mt-6">
              Dream interpretation is best approached as exploration rather
than certainty. </p>

          </section>

          {/* Research */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Research &  Interest
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              Research and interpretation work frequently explores:
            </p>

            <ul className="mt-6 space-y-3 text-[#4A4A4A]">
              <li>• Dream symbolism and recurring symbols</li>
              <li>• Emotional and behavioral patterns</li>
              <li>• Recurring dreams and nightmares</li>
              <li>• Jungian symbolism and archetypes</li>
              <li>• Dream psychology concepts</li>
              <li>• Sleep science</li>
              <li>• Psychology</li>
              <li>• Cross-cultural dream traditions</li>
              <li>• Subconscious themes and personal reflection</li>
            </ul>
          </section>

          {/* Role */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Editorial & Research Role
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              As founder and editor, Amber oversees the development,
              research, review, and maintenance of DreamScriptures content.
            </p>

            <p className="mt-6">
              Responsibilities include researching dream meanings,
              maintaining editorial standards, refining interpretation
              methodology, reviewing content quality, and expanding educational
              resources throughout the website.
            </p>
          </section>

          {/* Editorial */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Editorial Standards & Methodology
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              All content published on DreamScriptures is created and reviewed
              according to the site is interpretation framework, editorial
              standards, and content guidelines.
            </p>

            <p className="mt-6">
              Learn more about:
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                <Link href="/about" className="underline">
                  About DreamScriptures
                </Link>
              </li>

              <li>
                <Link href="/methodology" className="underline">
                  Methodology
                </Link>
              </li>

              <li>
                <Link href="/editorial-standards" className="underline">
                  Editorial Standards
                </Link>
              </li>

              <li>
                <Link href="/disclaimer" className="underline">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Contact
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
           Questions, corrections, collaboration inquiries and thoughtful
discussion about dreams, symbolism and research are always
welcome.

DreamScriptures continues to grow through ongoing research,
careful writing and community feedback.</p>

            <p className="mt-6">
              Email: dreamscriptures@gmail.com
            </p>

            <p className="mt-6">
              Visit the{" "}
              <Link href="/contact" className="underline">
                Contact Page
              </Link>{" "}
              to get in touch.
            </p>
          </section>

        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
