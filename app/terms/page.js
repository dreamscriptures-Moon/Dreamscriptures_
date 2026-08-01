import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "Terms of Use | DreamScriptures",
  description:
    "Read the Terms of Use governing your access to DreamScriptures, including dream interpretations, community submissions, premium services, and user responsibilities.",
  alternates: {
    canonical: "https://www.dreamscriptures.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />

      <article className="mx-auto max-w-6xl px-6 py-16 md:py-24">

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
          / <span>Terms of Use</span>
        </nav>

        {/* Hero */}

        <section className="rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm md:p-16">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B6A2F]">

            Terms & Conditions

          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#1A1A1A] md:text-6xl">

            Terms of Use

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F574E]">

            These Terms of Use explain the rules that govern your use of
            DreamScriptures, including our dream interpretations,
            educational content, dream submission services, and related
            resources.

          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F574E]">

            By accessing or using DreamScriptures, you agree to these
            Terms. Please read them carefully before using the website or
            submitting a dream.

          </p>

          <p className="mt-8 text-sm text-[#8A8175]">

            Last updated: August 2026

          </p>

        </section>

        <LazyMobileQuickNav />

        {/* Acceptance */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            Acceptance of These Terms

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              By accessing DreamScriptures, browsing our content,
              submitting a dream, purchasing a Premium interpretation, or
              otherwise using this website, you agree to be bound by
              these Terms of Use.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              If you do not agree with these Terms, please discontinue
              your use of DreamScriptures.

            </p>

          </div>

        </section>

        {/* Using DreamScriptures */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            Using DreamScriptures

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Educational Purpose

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                DreamScriptures is an independent educational platform
                created to help readers explore dream symbolism,
                emotional themes, spiritual reflection, biblical
                perspectives, and dream research.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Personal Reflection

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Our content is intended to encourage thoughtful
                reflection and personal exploration. It should not be
                interpreted as medical, psychological, legal, financial,
                or other professional advice.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Responsible Use

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                You agree to use DreamScriptures responsibly and only for
                lawful purposes consistent with these Terms.

              </p>

            </div>

          </div>

        </section>

        {/* Dream Interpretation */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            Dream Interpretation

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Dream interpretation is inherently personal and
              subjective.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              The same dream may hold different meanings depending on
              the dreamer&apos;s emotions, relationships, beliefs,
              experiences, cultural background, and current life
              circumstances.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              DreamScriptures presents possible interpretations intended
              to encourage thoughtful reflection rather than provide
              certainty, prediction, or universally correct meanings.

            </p>

            <div className="mt-10 rounded-2xl bg-[#FFF8EF] p-8">

              <h3 className="font-serif text-2xl">

                Our interpretations may include:

              </h3>

              <ul className="mt-6 space-y-3 text-[#5F574E]">

                <li>🌙 Symbolic meaning</li>

                <li>❤️ Emotional interpretation</li>

                <li>🙏 Spiritual reflection</li>

                <li>✝️ Biblical themes where appropriate</li>

                <li>💡 Practical reflection and life application</li>

              </ul>

            </div>

          </div>

        </section>
                {/* Community & Premium Dream Submissions */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Community & Premium Dream Submissions
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                Community Interpretations
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                DreamScriptures offers a free Community dream
                interpretation service for eligible users.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Community submissions are interpreted in the order they
                are received and response times may vary depending on
                demand.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                While we aim to respond as quickly as possible,
                DreamScriptures does not guarantee that every Community
                submission will receive an interpretation within a
                specific timeframe.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                Premium Interpretations
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Premium interpretations are paid services that receive
                priority processing ahead of Community submissions.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Purchasing a Premium interpretation provides priority
                service but does not guarantee any particular outcome,
                prediction, or desired interpretation.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Estimated response times are provided as guidance only
                and may occasionally vary depending on demand or
                unforeseen circumstances.

              </p>

            </div>

          </div>

        </section>

        {/* Payments */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Payments & Billing
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Payments for Premium interpretations and repeat Community
              submissions are securely processed through trusted
              third-party payment providers.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              DreamScriptures does not store your complete payment card
              information.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Pricing, available services, and payment methods may be
              updated from time to time without prior notice.

            </p>

          </div>

        </section>

        {/* User Responsibilities */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Your Responsibilities
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                Accurate Information
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                When submitting a dream or contacting DreamScriptures,
                you agree to provide truthful information to the best of
                your knowledge.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">
                Respectful Communication
              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                We ask that all communication remains respectful,
                constructive, and appropriate.

              </p>

            </div>

          </div>

        </section>

        {/* Acceptable Use */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Acceptable Use
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              By using DreamScriptures you agree not to:

            </p>

            <ul className="mt-8 space-y-4 text-lg text-[#5F574E]">

              <li>• Submit unlawful, abusive, or offensive content.</li>

              <li>• Impersonate another individual.</li>

              <li>• Attempt to interfere with the operation or security of the website.</li>

              <li>• Copy, scrape, or reproduce DreamScriptures content without permission.</li>

              <li>• Abuse the Community or Premium submission services.</li>

              <li>• Use automated systems to overload or misuse the platform.</li>

            </ul>

          </div>

        </section>

        {/* Intellectual Property */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Intellectual Property
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Unless otherwise stated, all original content published on
              DreamScriptures—including articles, dream
              interpretations, educational guides, illustrations,
              branding, logos, page layouts, graphics, and website
              design—is the intellectual property of DreamScriptures.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Content may not be copied, reproduced, distributed,
              republished, or commercially exploited without prior
              written permission, except where permitted by applicable
              law.

            </p>

          </div>

        </section>

                {/* External Links */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            External Links
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures may include links to external websites,
              research publications, educational resources, or third-party
              services for your convenience.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              We are not responsible for the content, privacy practices,
              availability, or accuracy of third-party websites. Visiting
              those websites is at your own discretion.

            </p>

          </div>

        </section>

        {/* Website Availability */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Website Availability
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              We work hard to keep DreamScriptures available,
              secure, and up to date.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              However, we cannot guarantee uninterrupted access.
              Maintenance, software updates, technical issues,
              or circumstances beyond our control may temporarily affect
              the availability of the website.

            </p>

          </div>

        </section>

        {/* Limitation of Liability */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Limitation of Liability
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures is provided on an &quot;as is&quot; and &quot;as available&quot;
              basis without warranties of any kind.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              To the fullest extent permitted by applicable law,
              DreamScriptures shall not be liable for any direct,
              indirect, incidental, consequential, or special damages
              arising from the use of this website or reliance on its
              content.

            </p>

          </div>

        </section>

        {/* Changes */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Changes to These Terms
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures may revise these Terms of Use from time to
              time to reflect improvements to the website,
              new services,
              legal requirements,
              or operational changes.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Continued use of DreamScriptures after updates are published
              constitutes acceptance of the revised Terms.

            </p>

          </div>

        </section>

        {/* Governing Law */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Governing Law
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              These Terms shall be governed and interpreted in accordance
              with the applicable laws governing DreamScriptures,
              without regard to conflict of law principles.

            </p>

          </div>

        </section>

        {/* Contact */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Questions About These Terms?
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              If you have questions about these Terms of Use,
              our submission services,
              or anything related to DreamScriptures,
              we&apos;d be happy to help.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-full bg-[#1A1A1A] px-7 py-3 font-medium text-white transition hover:bg-[#333]"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#D9CCBD] px-7 py-3 transition hover:bg-white"
              >
                About DreamScriptures
              </Link>

            </div>

          </div>

        </section>

        {/* Helpful Resources */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Helpful Resources
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 flex flex-wrap gap-4">

            <Link href="/methodology" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white transition">
              Methodology
            </Link>

            <Link href="/editorial-standards" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white transition">
              Editorial Standards
            </Link>

            <Link href="/privacy" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white transition">
              Privacy Policy
            </Link>

            <Link href="/disclaimer" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white transition">
              Disclaimer
            </Link>

            <Link href="/faq" className="rounded-full border border-[#D8CCBD] px-6 py-3 hover:bg-white transition">
              FAQ
            </Link>

          </div>

        </section>

      </article>

      {/* Final CTA */}

      <section className="mt-10 bg-[#1A1A1A] py-20 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#D8C08F]">

            Thank You

          </p>

          <h2 className="mt-6 font-serif text-5xl">

            Thank You for Being Part of DreamScriptures

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#DDD2C3]">

            Our mission is to provide thoughtful, balanced,
            and trustworthy dream interpretations that encourage
            reflection rather than certainty.

            Thank you for helping DreamScriptures grow into a trusted
            resource for dream exploration.

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