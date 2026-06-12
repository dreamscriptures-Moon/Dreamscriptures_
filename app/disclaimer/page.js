import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
title: "Disclaimer | DreamScriptures",

description:
"Important information about DreamScriptures, dream interpretations, educational content, and the limitations of information provided on this website.",

alternates: {
canonical: "https://www.dreamscriptures.com/disclaimer",
},
};

export default function DisclaimerPage() {
return ( <main className="min-h-screen bg-[#FAF8F5]"> <SiteHeader />

  <article className="mx-auto max-w-3xl px-6 py-16 md:py-28">
    {/* Breadcrumb */}
    <nav
      aria-label="Breadcrumb"
      className="mb-8 text-sm text-[#6B6B6B]"
    >
      <Link href="/" className="transition hover:text-[#8F743C]">
        Home
      </Link>{" "}
      / <span>Disclaimer</span>
    </nav>

    <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
      Important information
    </p>

    <h1 className="mb-4 font-serif text-4xl leading-tight text-[#1A1A1A] md:text-5xl">
      Disclaimer
    </h1>

    <p className="mb-8 text-sm text-[#8A8175]">
      Last updated: June 2026
    </p>

    <div className="space-y-6 text-lg leading-relaxed text-[#5F574E]">
      <p>
        DreamScriptures explores dream meaning through emotional patterns,
        symbolic relationships, subconscious themes, and reflective
        interpretation.
      </p>

      <p>
        The content published on this website is intended for educational
        and informational purposes only and should always be interpreted
        within the context of personal experience and individual
        circumstances.
      </p>
    </div>

    {/* General Information */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        General Information
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          DreamScriptures publishes content related to dream
          interpretation, dream symbolism, emotional patterns,
          subconscious themes, and related educational topics.
        </p>

        <p>
          The information presented on this website is intended to
          encourage reflection, understanding, and personal exploration.
          It should not be viewed as definitive statements of fact or
          universally applicable conclusions.
        </p>
      </div>
    </section>

    {/* No Professional Advice */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        No Professional Advice
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          Content on DreamScriptures does not constitute medical,
          psychological, psychiatric, therapeutic, legal, financial, or
          professional advice.
        </p>

        <p>
          Dream interpretations should never be used as a substitute for
          professional diagnosis, treatment, counselling, legal guidance,
          or other qualified services.
        </p>

        <p>
          If you are experiencing medical concerns, mental health
          difficulties, emotional distress, or other serious issues,
          please seek assistance from an appropriately qualified
          professional.
        </p>
      </div>
    </section>

    {/* Dream Interpretation Disclaimer */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        Dream Interpretation Disclaimer
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          Dream interpretation is inherently subjective.
        </p>

        <p>
          The same dream symbol may carry different meanings depending on
          personal experiences, emotional context, culture, beliefs,
          relationships, and life circumstances.
        </p>

        <p>
          Interpretations presented on DreamScriptures represent possible
          perspectives and should not be viewed as predictions,
          guarantees, diagnoses, or absolute explanations.
        </p>

        <p>
          Interpretations are developed through emotional context,
          symbolic relationships, subconscious patterns, and recurring
          themes rather than fixed or universal definitions.
        </p>

        <p>
          Dreams are deeply personal experiences, and no interpretation
          should be considered universally correct for every individual or
          situation.
        </p>
      </div>
    </section>

    {/* Accuracy */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        Accuracy of Information
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          DreamScriptures strives to provide accurate, thoughtful, and
          useful information.
        </p>

        <p>
          However, no guarantees are made regarding the completeness,
          accuracy, reliability, or applicability of content to any
          particular individual or circumstance.
        </p>

        <p>
          Content may be revised, expanded, updated, or corrected over
          time as the website continues to grow and improve.
        </p>
      </div>
    </section>

    {/* External Links */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        External Links
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          DreamScriptures may include links to external websites,
          resources, research materials, or third-party content.
        </p>

        <p>
          These links are provided for informational purposes only.
          DreamScriptures does not control and cannot guarantee the
          accuracy, availability, content, or practices of external
          websites.
        </p>
      </div>
    </section>

    {/* Advertising */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        Advertising and Affiliate Disclosure
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          DreamScriptures may display advertisements, sponsored content,
          affiliate links, or promotional partnerships now or in the
          future.
        </p>

        <p>
          If affiliate links are used, DreamScriptures may earn a small
          commission from qualifying purchases at no additional cost to
          users.
        </p>

        <p>
          Any sponsored relationships or promotional content will be
          disclosed where appropriate.
        </p>
      </div>
    </section>

    {/* Independence */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        Independence and Editorial Integrity
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          DreamScriptures is independently operated and maintained.
        </p>

        <p>
          Content is created according to the sites methodology,
          editorial standards, and interpretation framework.
        </p>

        <p>
          The website is not affiliated with any medical organization,
          psychological practice, academic institution, governmental
          agency, or religious authority.
        </p>

        <p>
          Learn more through our{" "}
          <Link href="/about" className="underline">
            About
          </Link>
          ,{" "}
          <Link href="/methodology" className="underline">
            Methodology
          </Link>
          , and{" "}
          <Link href="/editorial-standards" className="underline">
            Editorial Standards
          </Link>{" "}
          pages.
        </p>
      </div>
    </section>
{/* Sources and Interpretation Framework */}
<section className="mt-14 border-t border-[#EAE6E1] pt-10">
  <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
    Sources and Interpretation Framework
  </h2>

  <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
    <p>
      DreamScriptures interpretations are informed by dream symbolism,
      historical dream traditions, emotional pattern analysis,
      psychological concepts, recurring dream themes, and contemporary
      dream research.
    </p>

    <p>
      Content is developed using the DreamScriptures interpretation
      methodology and is intended as reflective educational material
      rather than scientific conclusions or definitive statements of
      fact.
    </p>
  </div>
</section>

    {/* Acceptance */}
    <section className="mt-14 border-t border-[#EAE6E1] pt-10">
      <h2 className="mb-5 font-serif text-3xl text-[#1A1A1A]">
        Acceptance of This Disclaimer
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
        <p>
          By using DreamScriptures, you acknowledge this disclaimer and
          understand the nature, purpose, and limitations of the
          information provided on this website.
        </p>
      </div>
    </section>
  </article>

  <SiteFooter />
</main>


);
}
