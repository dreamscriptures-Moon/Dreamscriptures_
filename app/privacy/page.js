import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

const sections = [
  [
    "What we collect",
    "You are free to explore this site without sharing personal information. We do not ask for names, emails, or private data unless you choose to provide it through features like contact or submissions.",
  ],
  [
    "Basic usage data",
    "Like most websites, we may collect simple, non-identifying information such as pages visited, time spent on the site, and general device or browser type. This helps us understand what feels useful and what can be improved.",
  ],
  [
    "Cookies & third-party services",
    "Some third-party services, including analytics tools or advertising partners, may use cookies to provide relevant content and measure performance. These tools do not define your experience. They simply help support and sustain it.",
  ],
  [
    "Your control",
    "You can manage or disable cookies through your browser settings at any time. Your experience here should always feel like something you choose, not something imposed.",
  ],
  [
    "A final note",
    "Dream interpretation is personal, and so is privacy. This space is built to respect both quietly, without excess, and without intrusion.",
  ],
];

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Privacy</h1>
        <div className="w-12 h-[1px] bg-[#C6A96B] mb-10" />

        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-12">
          DreamScriptures is designed to feel personal, quiet, and reflective.
          Your experience here should never feel exposed, tracked, or
          intrusive.
        </p>

        <section className="space-y-8 text-[#2A2A2A] text-base md:text-lg leading-relaxed">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-serif text-4xl md:text-5xl mb-3">
                {title}
              </h2>
              <p>{body}</p>
            </section>
          ))}
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
