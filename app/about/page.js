import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          About DreamScriptures
        </h1>

        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-12">
          A thoughtful, modern approach to dream interpretation.
        </p>

        <div className="space-y-10 text-[#2A2A2A] leading-loose text-base md:text-lg">
          <section>
            <p>
              DreamScriptures was created for people seeking deeper, more
              thoughtful dream interpretation. Too often, dream meanings online
              feel simplistic, generic, or disconnected from real life. We
              created a space where dreams can be explored with more care,
              nuance, and perspective.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Our Approach
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6"></div>

            <p>
              We believe dreams rarely have one fixed meaning. The same symbol
              can mean different things depending on your emotions,
              relationships, beliefs, memories, and current stage of life.
            </p>

            <p className="mt-6">
              That is why DreamScriptures explores dreams through multiple
              lenses:
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
              What We Value
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6"></div>

            <p>
              We value clarity over confusion, depth over generic answers, and
              honesty over exaggerated claims. Our goal is not to tell you
              exactly what your dream means, but to help you reflect on what it
              may be revealing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              A Living Library
            </h2>

            <div className="w-10 h-[1px] bg-[#EAE6E1] mb-6"></div>

            <p>
              DreamScriptures continues to grow as new dreams, guides, and
              interpretations are added. We see it as an evolving library for
              curiosity, insight, and self-understanding.
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