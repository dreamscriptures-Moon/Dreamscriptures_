import Link from "next/link";

import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import DreamSubmissionForm from "./DreamSubmissionForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Submit Your Dream",
  description:
    "Share your dream with DreamScriptures, including the emotions, symbols, and details you remember.",
  path: "/submit-dream",
  ogTitle: "Share Your Dream | DreamScriptures",
  ogDescription:
    "Describe your dream and share the emotions, symbols, and details you remember.",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Share Your Dream",
  description:
    "A form for sharing a dream with DreamScriptures for possible future interpretation.",
  url: "https://www.dreamscriptures.com/submit-dream",
  isPartOf: {
    "@type": "WebSite",
    name: "DreamScriptures",
    url: "https://www.dreamscriptures.com",
  },
};

export default function SubmitDreamPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-24">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[#6B6B6B]">
          <Link href="/" className="transition hover:text-[#8F743C]">
            Home
          </Link>{" "}
          <span aria-hidden="true">/</span>{" "}
          <span aria-current="page">Submit Your Dream</span>
        </nav>

        <header className="mb-12 max-w-2xl">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
            Dream submission
          </p>
          <h1 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
            Have you had a dream that stayed with you?
          </h1>
          <div className="mb-7 h-px w-12 bg-[#C6A96B]" />
          <p className="text-base leading-relaxed text-[#5F574E] md:text-lg">
            Maybe it keeps coming back, felt unusually real, or left you with a
            feeling you can&apos;t quite shake. Tell us what you remember and what
            you&apos;re curious about.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5F574E]">
            DreamScriptures offers possible emotional, symbolic, and spiritual
            perspectives to help you reflect on your dream. An interpretation
            is one way of exploring what your dream might mean to you.
          </p>
        </header>

        <DreamSubmissionForm />

        <aside className="mt-10 border-l border-[#D8C7A0] pl-5 text-sm leading-relaxed text-[#756C61]">
          Share only what feels comfortable. You can leave out names or details
          you would rather keep to yourself.
        </aside>
      </article>

      <SiteFooter />
    </main>
  );
}
