import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "Privacy Policy | DreamScriptures",
  description:
    "Learn how DreamScriptures collects, uses, stores, and protects your information while you explore dream interpretations, submit dreams, and use our services.",
  alternates: {
    canonical: "https://www.dreamscriptures.com/privacy",
  },
};

export default function PrivacyPage() {
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
          / <span>Privacy Policy</span>
        </nav>

        {/* Hero */}

        <section className="rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm md:p-16">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B6A2F]">

            Privacy & Data Protection

          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#1A1A1A] md:text-6xl">

            Privacy Policy

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F574E]">

            Your privacy matters.

            DreamScriptures is committed to handling your information
            responsibly, transparently, and with respect.

          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F574E]">

            This Privacy Policy explains what information we collect,
            how it is used,
            how it is protected,
            and the choices available to you when using DreamScriptures.

          </p>

          <p className="mt-8 text-sm text-[#8A8175]">

            Last updated: August 2026

          </p>

        </section>

        <LazyMobileQuickNav />

        {/* Information We Collect */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            Information We Collect

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Information You Provide

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                You can browse most of DreamScriptures without creating
                an account or providing personal information.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                We only collect personal information that you choose to
                provide, such as when you:

              </p>

              <ul className="mt-6 space-y-3 text-[#5F574E]">

                <li>• Submit a dream for interpretation</li>

                <li>• Contact us by email</li>

                <li>• Send feedback or report an issue</li>

                <li>• Purchase a Premium interpretation</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="font-serif text-2xl">

                Information Collected Automatically

              </h3>

              <p className="mt-5 leading-8 text-[#5F574E]">

                Like most websites,
                DreamScriptures automatically collects limited technical
                information that helps us understand how visitors use
                the website.

              </p>

              <p className="mt-5 leading-8 text-[#5F574E]">

                This may include:

              </p>

              <ul className="mt-6 space-y-3 text-[#5F574E]">

                <li>• Browser type</li>

                <li>• Device type</li>

                <li>• Pages visited</li>

                <li>• Time spent on pages</li>

                <li>• General geographic region</li>

                <li>• Referral sources</li>

              </ul>

            </div>

          </div>

        </section>

        {/* How We Use Information */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">

            How We Use Your Information

          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Information collected by DreamScriptures is used only for
              legitimate purposes that help us operate and improve the
              website.

            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                ✍️ Process dream submissions

              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                📧 Send interpretation emails

              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                💬 Respond to questions

              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                📈 Improve DreamScriptures

              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                🔒 Protect the website from misuse

              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-6">

                📊 Understand visitor engagement

              </div>

            </div>

            <p className="mt-10 text-lg leading-9 text-[#5F574E]">

              We never sell your personal information to third parties.

            </p>

          </div>

        </section>

        {/* Dream Submissions */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Dream Submissions
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              When you submit a dream for interpretation, we collect the
              information you choose to provide, including your dream,
              your name, email address, and any additional context you
              decide to share.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              This information is used only to process your dream
              submission, prepare your interpretation, communicate with
              you about your submission, and improve the quality of our
              educational resources.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Your dream remains your personal experience. We do not
              publish personally identifiable dream submissions without
              permission.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Submission records are stored using Supabase, our database
              service provider. Access is limited to operating, reviewing,
              and responding to the submission service.

            </p>

          </div>

        </section>

        {/* Payments */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Payments
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Premium dream interpretations and repeat Community
              submissions are processed by Paystack, our third-party
              payment processor.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              DreamScriptures does not collect or store your complete
              debit or credit card details.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Paystack handles payment information under its own privacy and
              security terms. DreamScriptures receives transaction details
              needed to confirm payment and connect it with a submission.

            </p>

          </div>

        </section>

        {/* Email Communications */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Email Communications
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              If you submit a dream or contact DreamScriptures, we may
              send emails relating to your submission or inquiry.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              These emails may include submission confirmations,
              payment confirmations, completed dream interpretations,
              or replies to questions you have asked.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              We do not send unsolicited marketing emails or sell email
              addresses to third parties.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Transactional submission and interpretation emails are delivered
              through Resend, which processes the recipient address and message
              information needed to send them.

            </p>

          </div>

        </section>

        {/* Cookies & Analytics */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Cookies & Analytics
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures uses Google Tag Manager to manage measurement
              tags, Google Analytics 4 to understand site use, and Vercel
              Analytics and Speed Insights to monitor traffic and technical
              performance. These services may process device, browser,
              approximate-location, page-view, interaction, and performance
              information.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Google Analytics may use cookies or similar identifiers. Vercel
              provides its analytics services under its own privacy terms.
              DreamScriptures does not use analytics reports to identify a
              visitor by name.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              This information helps us improve DreamScriptures and make
              our content more useful.

            </p>

          </div>

        </section>

        {/* Advertising */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Advertising
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures may display advertisements provided by
              third-party advertising partners, including Google
              AdSense.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              These providers may use cookies or similar technologies to
              display relevant advertisements, measure advertising
              performance, limit repeated ads, and help prevent fraud. Depending
              on your location and choices, Google may serve personalized or
              non-personalized advertising.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              Learn more on Google&apos;s{" "}
              <a className="underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
                partner-sites information page
              </a>{" "}
              and manage advertising choices in{" "}
              <a className="underline" href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">
                My Ad Center
              </a>.

            </p>

          </div>

        </section>

                {/* Data Security */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Data Security
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures takes reasonable administrative,
              technical, and organizational measures to protect the
              information entrusted to us.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              While no method of transmitting or storing data can be
              guaranteed to be completely secure, we continually work to
              protect the information we receive and maintain.

            </p>

          </div>

        </section>

        {/* Your Privacy Rights */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Your Privacy Rights
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              Depending on your location and applicable laws,
              you may have the right to:

            </p>

            <ul className="mt-8 space-y-4 text-lg text-[#5F574E]">

              <li>• Request access to personal information we hold about you.</li>

              <li>• Request correction of inaccurate information.</li>

              <li>• Request deletion of personal information where appropriate.</li>

              <li>• Contact us with privacy-related questions.</li>

            </ul>

            <p className="mt-8 text-lg leading-9 text-[#5F574E]">

              We will consider and respond to reasonable requests in
              accordance with applicable law.

            </p>

          </div>

        </section>

        {/* Children's Privacy */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Children&apos;s Privacy
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures is intended for a general audience and is
              not directed specifically toward children.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              We do not knowingly collect personal information from
              children in violation of applicable laws. If you believe a
              child has provided personal information, please contact us
              so we can investigate and, where appropriate, remove the
              information.

            </p>

          </div>

        </section>

        {/* Updates */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Updates to This Policy
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              DreamScriptures may update this Privacy Policy from time
              to time to reflect changes in our services, technology,
              legal requirements, or operational practices.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#5F574E]">

              The latest version will always be published on this page,
              and the &quot;Last updated&quot; date at the top will indicate when
              changes were made.

            </p>

          </div>

        </section>

        {/* Contact */}

        <section className="mt-24">

          <h2 className="font-serif text-4xl">
            Questions About Privacy?
          </h2>

          <div className="mt-4 h-[2px] w-12 bg-[#8F743C]" />

          <div className="mt-10 rounded-[32px] border border-[#E7DDD2] bg-white p-10 shadow-sm">

            <p className="text-lg leading-9 text-[#5F574E]">

              If you have questions about this Privacy Policy or how
              your information is handled, we&apos;d be happy to help.

            </p>

            <p className="mt-6 text-xl font-medium text-[#1A1A1A]">

              dreamscriptures@gmail.com

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-full bg-[#1A1A1A] px-7 py-3 font-medium text-white transition hover:bg-[#333]"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#D8CCBD] px-7 py-3 transition hover:bg-white"
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

            <Link href="/terms" className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white">
              Terms of Use
            </Link>

            <Link href="/disclaimer" className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white">
              Disclaimer
            </Link>

            <Link href="/methodology" className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white">
              Methodology
            </Link>

            <Link href="/editorial-standards" className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white">
              Editorial Standards
            </Link>

            <Link href="/faq" className="rounded-full border border-[#D8CCBD] px-6 py-3 transition hover:bg-white">
              FAQ
            </Link>

          </div>

        </section>

      </article>

      {/* Final CTA */}

      <section className="mt-10 bg-[#1A1A1A] py-20 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#D8C08F]">
            Trust & Transparency
          </p>

          <h2 className="mt-6 font-serif text-5xl">
            Your Privacy Matters
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#DDD2C3]">

            DreamScriptures is committed to treating your information
            with care, respecting your privacy, and being transparent
            about how our website operates.

            Thank you for trusting us as you explore the fascinating
            world of dreams.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/dreams"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#1A1A1A] transition hover:scale-105"
            >
              🌙 Explore Dream Library
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
