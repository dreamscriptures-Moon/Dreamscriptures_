import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";

export const metadata = {
  title: "Terms of Use | DreamScriptures",
  description:
    "Read the terms of use for DreamScriptures, including how dream interpretation content is provided, limitations, and user responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-2 md:py-32">

        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span>Terms of Use</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Terms of Use
        </h1>

        <div className="w-12 h-[1px] bg-[#C6A96B] mb-10" />

        {/* Intro */}
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-6">
          This space is here to guide reflection, not to define it for you.
          What you take from it is always your own.
        </p>

        {/* SEO anchor */}
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          These terms explain how DreamScriptures content should be used while
          exploring dream meanings, interpretations, and guides across the site.
        </p>

        <LazyMobileQuickNav />

        {/* CONTENT */}
        <section className="space-y-12 text-[#2A2A2A] text-base md:text-lg leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Use of this site
            </h2>
            <p>
              DreamScriptures is provided for informational, reflective, and
              personal exploration purposes only.
            </p>
            <p className="mt-4">
              Content on this website is not professional medical,
              psychological, legal, or financial advice and should not be used
              as a substitute for professional guidance.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Interpretation is personal
            </h2>
            <p>
              Dream meanings are not fixed or universal. Interpretations vary
              depending on personal experiences, emotions, beliefs, and life
              circumstances.
            </p>
            <p className="mt-4">
              What resonates with one person may not apply to another. The
              purpose of this site is to support reflection, not to define
              absolute meaning.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              No guarantees
            </h2>
            <p>
              While DreamScriptures aims to provide thoughtful and meaningful
              content, no guarantees are made regarding completeness,
              reliability, or outcomes based on the use of any interpretation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Your responsibility
            </h2>
            <p>
              Any decisions or actions taken based on content from this website
              remain your own responsibility.
            </p>
            <p className="mt-4">
              DreamScriptures offers perspectives and insights, not instructions
              or directives.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Intellectual property
            </h2>
            <p>
              Unless otherwise stated, all written content, structure, and
              original materials on DreamScriptures are owned by this website.
            </p>
            <p className="mt-4">
              Content may not be copied, reproduced, or redistributed without
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              Changes to content and terms
            </h2>
            <p>
              DreamScriptures may update, revise, remove, or expand content and
              terms at any time as the website evolves.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              External links
            </h2>
            <p>
              This website may contain links to other pages or external
              resources. DreamScriptures is not responsible for the content or
              practices of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-3">
              A final note
            </h2>
            <p>
              This platform is designed to feel thoughtful, calm, and open-minded.
              Take what is meaningful to you, and leave what is not.
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
            <Link href="/dreams/being-chased" className="underline">
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
            If you have questions about these terms, you can reach out through the{" "}
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