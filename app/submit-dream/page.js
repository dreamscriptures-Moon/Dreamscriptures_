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
            Submit Your Dream for Interpretation
          </h1>
          <div className="mb-7 h-px w-12 bg-[#C6A96B]" />
          <p className="text-base leading-relaxed text-[#5F574E] md:text-lg">
            Have you had a dream that stayed with you? Maybe it keeps coming back,
            felt unusually real, or left you with a feeling you can&apos;t quite shake.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5F574E]">
            Share your dream using the form below. Tell us what happened, how you
            felt, and what you&apos;d like to understand.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5F574E]">
            DreamScriptures offers possible emotional, symbolic, and spiritual
            perspectives to help you reflect on your dream and explore what it
            might mean to you.
          </p>
        </header>

        <section className="mb-8 max-w-2xl" aria-labelledby="dream-story-heading">
          <h2 id="dream-story-heading" className="font-serif text-2xl text-[#2A2A2A]">
            Every dream tells a story.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5F574E]">
            Describe your dream below and share as much detail as you remember.
            Include the people, places, feelings, moments, or little details that
            stood out to you.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5F574E]">
            Not sure where to start? Just tell us what happened in your own words.
            There&apos;s no right or wrong way to describe a dream.
          </p>
        </section>

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
