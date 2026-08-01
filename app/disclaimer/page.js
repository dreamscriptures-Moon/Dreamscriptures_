import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata = {
  title: "Disclaimer | DreamScriptures",

  description:
    "Learn about DreamScriptures' educational approach to dream interpretation, our editorial philosophy, and the limitations of dream meanings and personalized interpretations.",

  alternates: {
    canonical: "https://www.dreamscriptures.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-28">

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-[#6B6B6B]"
        >
          <Link
            href="/"
            className="transition hover:text-[#8F743C]"
          >
            Home
          </Link>{" "}
          / <span>Disclaimer</span>
        </nav>

        {/* Hero */}

        <div className="rounded-3xl border border-[#E7DDD2] bg-white p-10 shadow-sm">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B6A2F]">
            Important Information
          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#1A1A1A]">
            DreamScriptures Disclaimer
          </h1>

          <p className="mt-5 text-sm text-[#8A8175]">
            Last updated: August 2026
          </p>

          <p className="mt-8 text-xl leading-9 text-[#5F574E]">

            DreamScriptures provides educational dream interpretations
            that explore dreams through symbolic meaning, emotional
            context, spiritual reflection, biblical themes (where
            appropriate), and personal reflection.

          </p>

          <p className="mt-6 text-lg leading-8 text-[#5F574E]">

            Our mission is to encourage thoughtful reflection,
            discernment, and personal growth rather than provide
            absolute answers or universally applicable interpretations.

          </p>

        </div>

        {/* General Information */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            General Information
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              DreamScriptures is an educational resource dedicated to
              helping readers thoughtfully explore the possible meanings
              behind their dreams.

            </p>

            <p>

              Our content covers topics including dream symbolism,
              emotional interpretation, spiritual reflection, biblical
              themes, recurring dream patterns, common dream symbols,
              and personal dream submissions.

            </p>

            <p>

              Every interpretation published on DreamScriptures is
              intended to encourage learning, reflection, and
              meaningful exploration rather than provide fixed answers
              or guaranteed explanations.

            </p>

            <p>

              Because dreams are deeply personal experiences, no
              interpretation should be considered universally correct
              for every individual or situation.

            </p>

          </div>

        </section>

        {/* No Professional Advice */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            No Professional Advice
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              DreamScriptures does not provide medical, psychological,
              psychiatric, legal, financial, therapeutic, or other
              professional advice.

            </p>

            <p>

              Our dream interpretations—including Community and Personal
              Dream Interpretations—are educational and reflective in
              nature.

            </p>

            <p>

              They should never replace professional diagnosis,
              counselling, treatment, legal advice, financial guidance,
              or other qualified services.

            </p>

            <p>

              If you are experiencing emotional distress, mental health
              concerns, trauma, medical issues, or any other serious
              situation, we strongly encourage you to seek support from
              an appropriately qualified professional.

            </p>

          </div>

        </section>
                {/* Dream Interpretation Disclaimer */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Dream Interpretation Disclaimer
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              Dream interpretation is not an exact science.

            </p>

            <p>

              Dreams can be influenced by many different factors,
              including emotions, memories, relationships, personal
              experiences, stress, physical health, spiritual beliefs,
              culture, life transitions, and countless other individual
              circumstances.

            </p>

            <p>

              For this reason, DreamScriptures does not claim that any
              interpretation represents the only correct meaning of a
              dream.

            </p>

            <p>

              Instead, every interpretation explores one or more
              possible perspectives designed to encourage thoughtful
              reflection and personal understanding.

            </p>

            <div className="rounded-3xl border border-[#E6D8BF] bg-[#FFF9EE] p-8">

              <h3 className="mb-5 text-xl font-semibold text-[#2B2115]">
                Our interpretations may include:
              </h3>

              <ul className="space-y-4 text-[#5F574E]">

                <li>✨ Symbolic meaning</li>

                <li>💛 Emotional interpretation</li>

                <li>🙏 Spiritual reflection</li>

                <li>✝️ Biblical themes (where appropriate)</li>

                <li>🌱 Personal reflection and life application</li>

              </ul>

            </div>

            <p>

              Two people may experience the same dream very differently.

              The emotional tone, life circumstances, relationships,
              beliefs, and personal experiences of the dreamer all
              influence how a dream may be understood.

            </p>

            <p>

              Readers are encouraged to approach every interpretation
              with wisdom, discernment, prayer, and personal reflection
              rather than treating any interpretation as an absolute
              conclusion.

            </p>

          </div>

        </section>

        {/* Personal Dream Interpretations */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Personal Dream Interpretations
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              DreamScriptures offers both Community Dream
              Interpretations and Personal Dream Interpretations.

            </p>

            <p>

              Personal Dream Interpretations are written specifically
              for the dream submitted by the individual and may explore
              additional symbolic, emotional, spiritual, and biblical
              perspectives in greater depth.

            </p>

            <p>

              Even though these interpretations are personalized, they
              remain educational and reflective in nature.

            </p>

            <p>

              Personal interpretations should never be understood as
              prophecy, guarantees, predictions of future events,
              professional advice, diagnoses, or statements of absolute
              truth.

            </p>

            <p>

              The purpose of a Personal Dream Interpretation is to offer
              thoughtful guidance and encourage deeper personal
              reflection rather than certainty.

            </p>

          </div>

        </section>

        {/* Accuracy of Information */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Accuracy of Information
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              DreamScriptures strives to provide thoughtful, balanced,
              well-researched, and carefully reviewed educational
              content.

            </p>

            <p>

              However, because dream interpretation involves subjective
              reflection, no guarantee can be made regarding the
              completeness, accuracy, applicability, or suitability of
              any interpretation for a particular individual.

            </p>

            <p>

              Our content is reviewed, updated, expanded, and improved
              regularly as new research, reader feedback, and editorial
              improvements become available.

            </p>

          </div>

        </section>

        {/* Sources & Interpretation Framework */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Sources & Interpretation Framework
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              DreamScriptures follows its own editorial methodology when
              developing dream interpretations.

            </p>

            <p>

              Rather than relying on one single interpretation system,
              DreamScriptures considers multiple perspectives to provide
              thoughtful and balanced educational content.

            </p>

            <div className="rounded-3xl border border-[#E7DDD2] bg-[#FAF8F4] p-8">

              <h3 className="mb-5 text-xl font-semibold text-[#2B2115]">
                Depending on the dream, interpretations may draw from:
              </h3>

              <ul className="space-y-4 text-[#5F574E]">

                <li>📖 Biblical principles and narratives</li>

                <li>🌙 Traditional dream symbolism</li>

                <li>💛 Emotional themes</li>

                <li>🧠 Common subconscious patterns</li>

                <li>🙏 Spiritual reflection</li>

                <li>📚 Historical dream traditions</li>

                <li>🌍 Contemporary discussions surrounding dreams</li>

              </ul>

            </div>

            <p>

              Our editorial process is intended to encourage thoughtful
              exploration rather than claim certainty or universal
              authority over dream meanings.

            </p>

          </div>

        </section>

        {/* Independence & Editorial Integrity */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Independence & Editorial Integrity
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>

              DreamScriptures is an independent educational resource.

            </p>

            <p>

              Although our content may discuss spiritual and biblical
              themes, DreamScriptures is not officially affiliated with
              any church, denomination, religious organization, medical
              institution, university, psychological practice, or
              governmental agency.

            </p>

            <p>

              All content is created according to our editorial
              standards, interpretation methodology, and commitment to
              thoughtful, respectful, and balanced dream education.

            </p>

            <p>

              Learn more by visiting our{" "}
              <Link href="/about" className="underline hover:text-[#8F743C]">
                About
              </Link>
              ,{" "}
              <Link href="/methodology" className="underline hover:text-[#8F743C]">
                Methodology
              </Link>
              , and{" "}
              <Link
                href="/editorial-standards"
                className="underline hover:text-[#8F743C]"
              >
                Editorial Standards
              </Link>{" "}
              pages.

            </p>

          </div>

        </section>

                {/* External Links */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            External Links
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>
              DreamScriptures may include links to third-party websites,
              books, articles, research publications, or other educational
              resources for your convenience.
            </p>

            <p>
              These external resources are provided to help readers explore
              topics in greater depth and should not be interpreted as an
              endorsement of every opinion or claim made by those sources.
            </p>

            <p>
              Because third-party websites are outside our control,
              DreamScriptures cannot guarantee their accuracy, availability,
              privacy practices, or ongoing content.
            </p>

          </div>

        </section>

        {/* Advertising */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Advertising & Affiliate Disclosure
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>
              DreamScriptures may display advertisements, sponsored
              content, affiliate links, or promotional partnerships to
              help support the operation and continued development of the
              website.
            </p>

            <p>
              If you purchase a product or service through an affiliate
              link, DreamScriptures may receive a small commission at no
              additional cost to you.
            </p>

            <p>
              Advertising, sponsorships, or affiliate relationships do
              not influence our editorial standards, interpretation
              methodology, or the opinions expressed throughout the site.
            </p>

            <p>
              Any sponsored or promotional content will be clearly
              identified whenever appropriate.
            </p>

          </div>

        </section>

        {/* Limitation of Liability */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Limitation of Liability
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>
              By using DreamScriptures, you acknowledge that any actions
              you take based on information found on this website are your
              own responsibility.
            </p>

            <p>
              DreamScriptures and its contributors are not responsible
              for any decisions, losses, damages, misunderstandings, or
              consequences that may arise from relying solely on the
              information or interpretations provided on this website.
            </p>

            <p>
              Readers are encouraged to exercise wisdom, personal
              discernment, prayer where appropriate, and seek qualified
              professional advice whenever necessary.
            </p>

          </div>

        </section>

        {/* Acceptance */}

        <section className="mt-16 border-t border-[#EAE6E1] pt-12">

          <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">
            Acceptance of This Disclaimer
          </h2>

          <div className="space-y-6 text-lg leading-8 text-[#5F574E]">

            <p>
              By accessing or using DreamScriptures, you acknowledge that
              you have read, understood, and accepted this Disclaimer.
            </p>

            <p>
              You understand the educational purpose of DreamScriptures
              and recognize that dream interpretations are intended to
              encourage thoughtful reflection rather than provide
              definitive answers or guarantees.
            </p>

            <p>
              If you do not agree with this Disclaimer, please discontinue
              your use of this website.
            </p>

          </div>

        </section>

        {/* Contact */}

        <section className="mt-16 rounded-3xl border border-[#E7DDD2] bg-[#FFFDF9] p-10 shadow-sm">

          <h2 className="font-serif text-3xl text-[#1A1A1A]">
            Questions About This Disclaimer?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5F574E]">
            If you have any questions regarding this Disclaimer or how
            DreamScriptures approaches dream interpretation, we&apos;d be
            happy to hear from you.
          </p>

          <div className="mt-8">

            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#1A1A1A] px-8 py-4 font-medium text-white transition hover:bg-[#333]"
            >
              Contact Us
            </Link>

          </div>

        </section>

        {/* Continue Exploring */}

        <section className="mt-20 rounded-3xl bg-[#1A1A1A] px-8 py-14 text-center text-white">

          <h2 className="font-serif text-4xl">
            Continue Exploring DreamScriptures
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#DDD2C3]">
            Explore hundreds of dream interpretations, learn more about
            our editorial process, or submit your own dream for a
            thoughtful symbolic, emotional, spiritual, and biblical
            interpretation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/dreams"
              className="rounded-full bg-white px-7 py-3 font-semibold text-[#1A1A1A] transition hover:scale-105"
            >
              🌙 Browse Dream Library
            </Link>

            <Link
              href="/submit-dream"
              className="rounded-full border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#1A1A1A]"
            >
              ✍️ Submit Your Dream
            </Link>

            <Link
              href="/methodology"
              className="rounded-full border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#1A1A1A]"
            >
              📖 Our Methodology
            </Link>

            <Link
              href="/editorial-standards"
              className="rounded-full border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-[#1A1A1A]"
            >
              ✅ Editorial Standards
            </Link>

          </div>

        </section>

      </article>

      <SiteFooter />

    </main>

  );
}