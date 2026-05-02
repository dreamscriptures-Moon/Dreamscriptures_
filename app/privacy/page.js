import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export const metadata = {
  title: "Privacy Policy | DreamScriptures",
  description:
    "Learn how DreamScriptures handles data, cookies, and privacy while you explore dream meanings and interpretations.",
};

const sections = [
  [
    "What we collect",
    "You are welcome to explore DreamScriptures without creating an account or sharing personal information. We only receive information you choose to provide directly, such as messages sent through contact features or future submissions.",
  ],
  [
    "How the site is used",
    "Like most websites, basic non-identifying information may be collected automatically. This can include pages visited, time spent on the site, device type, browser type, and general location data. It helps us understand what is useful, what can be improved, and how to keep the experience smooth and thoughtful.",
  ],
  [
    "Cookies & services",
    "DreamScriptures may use cookies or similar technologies to improve functionality, understand traffic, and support the website. Trusted third-party services, such as analytics providers or future advertising partners, may also use cookies for measurement or relevant content.",
  ],
  [
    "Your choices",
    "You can control or disable cookies through your browser settings at any time. You may also choose not to use optional features that involve sharing information. Your experience here should always feel voluntary, never intrusive.",
  ],
  [
    "How information is handled",
    "Any information shared directly with DreamScriptures is treated with care and used only for the purpose it was provided for, such as responding to a message, improving the site, or supporting future services.",
  ],
  [
    "Updates",
    "This privacy page may be refined over time as DreamScriptures grows, tools change, or new features are introduced. The most current version will always be available here.",
  ],
  [
    "A final note",
    "Dream interpretation is personal, and privacy should be too. This space is designed to feel calm, respectful, and considered — never loud, invasive, or careless.",
  ],
];

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
          DreamScriptures is meant to feel personal, reflective, and quietly
          trustworthy. Your time here should never feel exposed, pressured, or
          unnecessarily tracked.
        </p>

        {/* SEO anchor */}
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          This privacy policy explains how DreamScriptures handles information
          while you explore dream meanings, interpretations, and guides across
          the site.
        </p>

        {/* Sections */}
        <section className="space-y-10 text-[#2A2A2A] text-base md:text-lg leading-relaxed">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-serif text-2xl md:text-3xl mb-3">
                {title}
              </h2>
              <p>{body}</p>
            </section>
          ))}
        </section>

        {/* Contact */}
        <section className="mt-14 pt-10 border-t border-[#EAE6E1]">
          <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed">
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
