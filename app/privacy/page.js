import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "Privacy Policy | DreamScriptures",
  description:
    "Learn how DreamScriptures handles data, cookies, and user privacy while you explore dream meanings and interpretations.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-2 md:py-32">

        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span>Privacy Policy</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Privacy Policy
        </h1>

        <div className="w-12 h-[1px] bg-[#C6A96B] mb-10" />

        {/* Intro */}
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-6">
          DreamScriptures is designed to feel calm, reflective, and quietly trustworthy.
          Your time here should never feel exposed, pressured, or unnecessarily tracked.
        </p>

        {/* SEO anchor */}
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          This privacy policy explains how DreamScriptures handles data, cookies,
          and user information while you explore dream meanings, interpretations,
          and guides across the site.
        </p>

        <LazyMobileQuickNav />

        {/* CONTENT */}
        <section className="space-y-12 text-[#2A2A2A] text-base md:text-lg leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Information we collect
            </h2>
            <p>
              You can explore DreamScriptures without creating an account or
              providing personal information. We only receive information you
              choose to share directly, such as messages sent through the contact
              page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              How the site is used
            </h2>
            <p>
              Like most websites, DreamScriptures may collect non-identifying
              information such as pages visited, time spent on the site, device
              type, browser type, and general location data.
            </p>

            <p className="mt-4">
              This helps improve usability, understand what content is helpful,
              and create a smoother, more meaningful experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Cookies & third-party services
            </h2>
            <p>
              DreamScriptures may use cookies or similar technologies to improve
              functionality, understand traffic, and support the website.
            </p>

            <p className="mt-4">
              Third-party services such as analytics providers and advertising
              partners (including Google AdSense) may use cookies to measure
              engagement and provide relevant content.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Your choices
            </h2>
            <p>
              You can control or disable cookies through your browser settings at
              any time. You may also choose not to use features that involve
              sharing information.
            </p>

            <p className="mt-4">
              Your experience on DreamScriptures should always feel voluntary,
              never intrusive.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              How information is handled
            </h2>
            <p>
              Any information shared directly is treated with care and used only
              for the purpose it was provided for, such as responding to a message
              or improving the site.
            </p>

            <p className="mt-4 text-sm text-[#8A8177]">
              DreamScriptures does not sell personal information and does not
              require users to create accounts to access content.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Updates to this policy
            </h2>
            <p>
              This page may be updated as DreamScriptures grows, tools change, or
              new features are introduced. The most current version will always
              be available here.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              A final note
            </h2>
            <p>
              Dream interpretation is personal, and privacy should be too. This
              space is built to feel thoughtful, respectful, and calm — never
              invasive or careless.
            </p>
          </section>

        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-16 border-t border-[#EAE6E1] pt-10">
          <h2 className="font-serif text-2xl mb-4">
            Explore dream meanings
          </h2>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/dreams/falling" className="underline">
              Falling dream meaning
            </Link>
            <Link href="/dreams/chased" className="underline">
              Being chased dream
            </Link>
            <Link href="/categories" className="underline">
              Dream categories
            </Link>
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-14 pt-10 border-t border-[#EAE6E1]">
          <p className="text-[#6B6B6B] text-sm md:text-base">
            For privacy-related questions, you can reach out through the{" "}
            <Link href="/contact" className="underline">
              Contact page
            </Link>.
          </p>

        </section>

      </article>

      <SiteFooter />
    </main>
  );
}
