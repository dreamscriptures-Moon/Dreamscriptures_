import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "Editorial Standards | DreamScriptures",
  description:
    "Learn how DreamScriptures researches, reviews, updates, and maintains dream interpretation content through clear editorial standards and structured methodology.",
  alternates: {
    canonical: "https://www.dreamscriptures.com/editorial-standards",
  },
};

export default function EditorialStandardsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-28">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B6B6B]">
          <Link href="/" className="transition hover:text-[#8F743C]">
            Home
          </Link>{" "}
          / <span>Editorial Standards</span>
        </nav>

        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
          DreamScriptures publishing standards
        </p>

        <h1 className="mb-6 font-serif text-4xl leading-tight text-[#1A1A1A] md:text-5xl">
          Editorial Standards
        </h1>

        <div className="space-y-6 text-lg leading-relaxed text-[#5F574E]">
          <p>
            DreamScriptures publishes structured, thoughtful, and context-aware
            dream interpretation content grounded in emotional insight,
            symbolic relationships, and recurring patterns.
          </p>

          <p>
            These editorial standards explain how content is researched,
            written, reviewed, and maintained across the site.
          </p>
        </div>

        {/* Purpose */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Our purpose
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              DreamScriptures exists to help readers explore dream meaning
              through emotional context, symbolic behavior, recurring patterns,
              and reflective interpretation.
            </p>

            <p>
              The goal is to support understanding and self-reflection rather
              than provide absolute answers, predictions, or guarantees.
            </p>
          </div>
        </section>

        {/* Research Process */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Research process
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              DreamScriptures interpretations are informed by historical dream
              symbolism, cross-cultural traditions, psychological and behavioral
              concepts, sleep and dream research, and commonly reported dream
              experiences.
            </p>

            <p>
              Rather than relying on a single fixed system, interpretations are
              developed by examining multiple perspectives and identifying
              recurring emotional and symbolic patterns across different
              contexts.
            </p>

            <p>
              Additional details about this framework can be found in the{" "}
              <Link href="/methodology" className="underline">
                methodology page
              </Link>.
            </p>
          </div>
        </section>

        {/* Content Structure */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Content structure
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              DreamScriptures content follows a consistent structure designed to
              improve clarity and depth of interpretation.
            </p>

            <p>
              Articles may include emotional context, symbolic meaning,
              subconscious patterns, waking-life connections, and multiple
              interpretive perspectives.
            </p>

            <p>
              This structured approach ensures consistency while allowing
              interpretations to remain flexible and nuanced.
            </p>
          </div>
        </section>

        {/* Content Review */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Content review
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              All content is reviewed before publication for clarity,
              consistency, readability, and overall quality.
            </p>

            <p>
              Content is written and reviewed by the site’s editor to ensure
              alignment with DreamScriptures methodology and editorial
              standards.
            </p>

            <p>
              Interpretations acknowledge uncertainty where appropriate and
              avoid exaggerated or fear-based conclusions.
            </p>

            <p>
              Dream meanings are presented as possible interpretations rather
              than statements of fact.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Sources and references
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              DreamScriptures references psychological literature, sleep and
              dream research, historical texts, and cultural traditions where
              relevant to a topic.
            </p>

            <p>
              Sources are used to provide context, support interpretation
              frameworks, and introduce multiple perspectives rather than
              enforce a single meaning.
            </p>
          </div>
        </section>

        {/* Updates */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Updates and revisions
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              Content is reviewed periodically and may be updated to improve
              clarity, expand coverage, correct inaccuracies, or reflect new
              insights.
            </p>

            <p>
              Pages may display a (Last updated) date when significant revisions
              have been made.
            </p>
          </div>
        </section>

        {/* Corrections */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Corrections policy
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              While every effort is made to maintain accurate and helpful
              content, errors may occasionally occur.
            </p>

            <p>
              Identified issues are corrected to improve accuracy, clarity, and
              overall quality.
            </p>
          </div>
        </section>

        {/* Independence */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Editorial independence
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <section className="mt-14 border-t border-[#EAE6E1] pt-10">
  <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
    Editorial independence
  </h2>

  <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
    <p>
      DreamScriptures is independently owned and operated by Amber Balentine.
    </p>

<p>
  All editorial decisions, content development, updates, and interpretation
  frameworks are managed independently and are guided by the site
  published methodology and editorial standards.
</p>

<p>
  DreamScriptures is not affiliated with any medical organization,
  psychological practice, academic institution, governmental agency,
  religious authority, or commercial dream interpretation service.
</p>

<p>
  The goal is to provide thoughtful, balanced, and emotionally grounded
  dream interpretation content that encourages reflection rather than
  certainty.
</p>


  </div>
</section>

          </div>
        </section>
<section className="mt-14 border-t border-[#EAE6E1] pt-10">
  <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
    Our interpretation philosophy
  </h2>

  <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
    <p>
      DreamScriptures approaches dream interpretation through emotional
      context, symbolic relationships, recurring subconscious patterns,
      personal experience, and reflective analysis.
    </p>


<p>
  Unlike traditional dream dictionaries that assign a single fixed meaning
  to a symbol, DreamScriptures recognizes that dream symbols can change
  meaning depending on the emotional atmosphere of the dream and the
  circumstances of the dreamer.
</p>

<p>
  This approach allows interpretations to remain flexible, nuanced,
  and personally relevant while acknowledging the inherently subjective
  nature of dreams.
</p>


  </div>
</section>

        {/* Disclaimer */}
        <section className="mt-14 border-t border-[#EAE6E1] pt-10">
          <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
            Disclaimer
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
            <p>
              DreamScriptures content is intended for educational and reflective
              purposes only.
            </p>

            <p>
              Content should not be considered medical, psychological,
              psychiatric, therapeutic, legal, or professional advice.
            </p>

            <p>
              Dream interpretations are subjective and may vary depending on
              individual experiences, beliefs, and circumstances.
            </p>
          </div>
        </section>

      </article>

      <SiteFooter />
    </main>
  );
}