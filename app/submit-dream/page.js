import Link from "next/link";

import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import DreamSubmissionForm from "./DreamSubmissionForm";

export const metadata = {
  title: "Submit Your Dream",
  description:
    "Share your dream with DreamScriptures, including the emotions, symbols, and details you remember.",
  alternates: {
    canonical: "/submit-dream",
  },
  openGraph: {
    title: "Share Your Dream | DreamScriptures",
    description:
      "Describe your dream and share the emotions, symbols, and details you remember.",
    url: "/submit-dream",
    type: "website",
  },
};

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
            Share Your Dream
          </h1>
          <div className="mb-7 h-px w-12 bg-[#C6A96B]" />
          <p className="text-base leading-relaxed text-[#5F574E] md:text-lg">
            Every dream tells a story. Describe your dream below and share as
            much detail as you remember.
          </p>
        </header>

        <DreamSubmissionForm />

        <aside className="mt-10 border-l border-[#D8C7A0] pl-5 text-sm leading-relaxed text-[#756C61]">
          Share only what feels comfortable. Submitting a dream does not
          guarantee publication or a personal interpretation.
        </aside>
      </article>

      <SiteFooter />
    </main>
  );
}
