import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "About DreamScriptures | Dream Meanings, Symbolism & Interpretation",

  description:
    "Learn about DreamScriptures, our mission, methodology, editorial standards, and the emotional interpretation framework behind our dream meanings.",

  alternates: {
    canonical: "https://www.dreamscriptures.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-28">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6B6B] mb-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span>About</span>
        </nav>

        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
          About DreamScriptures
        </p>

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          About DreamScriptures
        </h1>

        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-6">
          A thoughtful approach to dream interpretation rooted in emotional
          patterns, symbolism, and personal context.
        </p>

      <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
  DreamScriptures is an independent dream interpretation resource
  dedicated to exploring dream meanings through emotional awareness,
  symbolic relationships, subconscious themes, dream psychology, and
  reflective insight.
   </p>

        <LazyMobileQuickNav />

        <div className="space-y-14 text-[#2A2A2A] leading-loose text-base md:text-lg">
          {/* Why Created */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Why DreamScriptures Was Created
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              DreamScriptures was created to provide a more thoughtful and
              contextual approach to dream interpretation. Many dream meaning
              websites rely heavily on fixed definitions that often overlook
              emotional nuance, personal experiences, and the complexity of how
              dreams are experienced.
            </p>

            <p className="mt-6">
              The goal was to create a resource that treats dreams as layered
              experiences shaped by emotions, symbolism, subconscious patterns,
              relationships, and life circumstances rather than one-size-fits-all
              answers.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Our Mission
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              Our mission is to build one of the most useful, trustworthy, and
              emotionally intelligent dream interpretation resources online.
            </p>

            <p className="mt-6">
              We aim to help readers explore possible meanings within their
              dreams while recognizing that dream experiences are deeply personal
              and rarely explained by a single interpretation alone.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Our Approach
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              Dreams rarely have one universal meaning. The same symbol may
              represent something entirely different depending on emotional
              tone, personal history, relationships, beliefs, and current life
              circumstances.
            </p>

            <p className="mt-6">
              DreamScriptures explores dream meanings through multiple lenses:
            </p>

            <ul className="mt-6 space-y-3 text-[#4A4A4A]">
              <li>• Emotional and behavioral patterns</li>
              <li>• Symbolic and archetypal meaning</li>
              <li>• Subconscious themes and recurring experiences</li>
              <li>• Spiritual and reflective perspectives</li>
              <li>• Modern dream and sleep research</li>
            </ul>
          </section>

          {/* Emotional Framework */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Emotional Interpretation Framework
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              DreamScriptures is built around the idea that dreams are often
              organized through emotion before they are organized through
              symbols.
            </p>

            <p className="mt-6">
              Two people may dream about the same symbol yet experience very
              different meanings because the emotional atmosphere surrounding
              the dream is different.
            </p>

            <p className="mt-6">
              For this reason, interpretations consider emotional tone,
              symbolic behavior, subconscious themes, recurring patterns, and
              waking-life context rather than relying on fixed definitions
              alone.
            </p>
          </section>

          {/* Research */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              How We Research Dream Meanings
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              DreamScriptures interpretations draw from historical dream
              symbolism, cultural traditions, psychological and behavioral
              concepts, dream research, and recurring themes reported across a
              wide range of dream experiences.
            </p>

            <p className="mt-6">
              Rather than relying on a single interpretation system, meanings
              are developed by comparing multiple perspectives and identifying
              recurring emotional and symbolic patterns.
            </p>

            <p className="mt-6">
              Learn more about our{" "}
              <Link href="/methodology" className="underline">
                interpretation methodology
              </Link>.
            </p>
          </section>
{/* Research Sources */}
<section>
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    Research Sources & Influences
  </h2>

  <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

  <p>
    DreamScriptures interpretations are informed by a combination of
    historical symbolism, dream psychology, emotional pattern analysis,
    cross-cultural traditions, and modern dream research.
  </p>

  <p className="mt-6">
    Research and interpretation may draw from:
  </p>

  <ul className="mt-6 space-y-3 text-[#4A4A4A]">
    <li>• Historical dream symbolism traditions</li>
    <li>• Jungian concepts of archetypes and symbolism</li>
    <li>• Dream psychology and behavioral theories</li>
    <li>• Sleep and dream research literature</li>
    <li>• Cross-cultural dream traditions</li>
    <li>• Recurring dream reports and common dream themes</li>
    <li>• Comparative analysis of symbolic and emotional patterns</li>
  </ul>

  <p className="mt-6">
    Rather than relying on a single authority or interpretation system,
    DreamScriptures compares multiple perspectives to identify recurring
    emotional, symbolic, and behavioral themes.
  </p>
</section>

          {/* Editorial Standards */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Editorial Standards
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              Content is reviewed for clarity, consistency, readability, and
              alignment with the DreamScriptures methodology before publication.
            </p>

            <p className="mt-6">
              Existing content may be revised, expanded, and updated as new
              information, perspectives, and research become available.
            </p>

            <p className="mt-6">
              View our full{" "}
              <Link href="/editorial-standards" className="underline">
                editorial standards
              </Link>.
            </p>
          </section>

          {/* How To Use */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              How to Use DreamScriptures
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              Dream interpretations are intended to be explored rather than
              accepted as fixed answers.
            </p>

            <p className="mt-6">
              When reading an interpretation, consider the emotions present,
              recent life experiences, recurring themes, symbolic details, and
              personal associations connected to the dream.
            </p>

            <p className="mt-6">
              The most useful interpretation is often the one that resonates
              with the emotional experience of the dream itself.
            </p>
          </section>

          {/* Founder */}
<section>
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    About the Founder
  </h2>

  <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

  <p>
    DreamScriptures was founded by Amber Balentine, an independent writer
    and dream researcher with a long-standing interest in dream symbolism,
    recurring dream themes, emotional patterns, and subconscious
    experiences.
  </p>

  <p className="mt-6">
    The project began after years of studying how emotions, symbolic
    relationships, and recurring patterns influence dream interpretation.
    During this research, it became clear that many dream resources
    focused heavily on fixed symbol definitions while giving less
    attention to emotional context and personal experience.
  </p>

  <p className="mt-6">
    DreamScriptures was created to provide a more thoughtful and
    contextual approach that explores dreams through emotional awareness,
    symbolic behavior, subconscious themes, and waking-life relevance.
  </p>

  <p className="mt-6">
    Over time, the project evolved into a structured interpretation
    framework designed to help readers explore dream experiences with
    greater depth, perspective, and emotional realism.
  </p>
<Link href="/author" className="underline">
  Amber Balentine
</Link>
</section>

          {/* Transparency */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Transparency
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6" />

            <p>
              DreamScriptures is independently operated and is not affiliated
              with any medical organization, psychological practice, academic
              institution, governmental agency, or religious authority.
            </p>

            <p className="mt-6">
              Content is created according to the sites methodology,
              editorial standards, and interpretation framework.
            </p>

            <p className="mt-6">
              Learn more through our{" "}
              <Link href="/methodology" className="underline">
                Methodology
              </Link>
              ,{" "}
              <Link href="/editorial-standards" className="underline">
                Editorial Standards
              </Link>
              , and{" "}
              <Link href="/disclaimer" className="underline">
                Disclaimer
              </Link>{" "}
              pages.
            </p>
          </section>
        </div>
      </div>

<p className="mt-4 text-sm text-[#6B6B6B]">
  Founded and edited by{" "}
  <Link href="/author" className="underline">
    Amber Balentine
  </Link>
</p>

      <SiteFooter />
    </main>
  );
}