import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export const metadata = {
  title: "About DreamScriptures | Dream Meaning & Interpretation",
  description:
    "Learn about DreamScriptures, a modern approach to dream interpretation exploring emotional, symbolic, and spiritual meanings behind dreams.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-6 py-2 md:py-32">

        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span>About</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          About DreamScriptures
        </h1>

        {/* Intro */}
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-6">
          A thoughtful, modern approach to dream interpretation.
        </p>

        {/* SEO anchor */}
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          DreamScriptures is a growing resource for understanding dream meanings,
          symbolism, and interpretation through emotional, spiritual, and real-life perspectives.
        </p>

        <div className="space-y-10 text-[#2A2A2A] leading-loose text-base md:text-lg">

          <section>
            <p>
              DreamScriptures was created for people seeking deeper, more
              thoughtful dream interpretation. Too often, dream meanings online
              feel simplistic, generic, or disconnected from real life. This
              space exists to explore dreams with more care, nuance, and
              perspective.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Our approach to dream interpretation
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6"></div>

            <p>
              Dreams rarely have one fixed meaning. The same symbol can reflect
              different things depending on your emotions, relationships,
              beliefs, memories, and current stage of life.
            </p>

            <p className="mt-6">
              DreamScriptures explores dream meanings through multiple lenses:
            </p>

            <ul className="mt-6 space-y-3 text-[#4A4A4A]">
              <li>• Emotional and psychological patterns</li>
              <li>• Symbolism and archetypal meaning</li>
              <li>• Spiritual and religious traditions</li>
              <li>• Cultural perspectives and folklore</li>
              <li>• Modern dream and sleep research</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              What we value
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6"></div>

            <p>
              We value clarity over confusion, depth over generic answers, and
              honesty over exaggerated claims. Our goal is not to define your
              dream for you, but to help you reflect on what it may be revealing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              A living library of dream meanings
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6"></div>

            <p>
              DreamScriptures continues to grow as new dreams, guides, and
              interpretations are added. It is designed as an evolving library
              for curiosity, insight, and self-understanding.
            </p>
          </section>

          {/* Internal linking (important for SEO) */}
          <section>
            <p>
              You can explore dream meanings directly through our{" "}
              <Link href="/dreams" className="underline">
                dream dictionary
              </Link>{" "}
              or browse patterns and themes in{" "}
              <Link href="/categories" className="underline">
                dream categories
              </Link>.
            </p>
          </section>

          <section className="pt-8 border-t border-[#EAE6E1]">
            <p className="font-serif text-2xl leading-relaxed">
              Your dreams may not be random. They may be reflecting something
              worth noticing.
            </p>
          </section>

        </div>
      </div>

      <SiteFooter />
    </main>
  );
}