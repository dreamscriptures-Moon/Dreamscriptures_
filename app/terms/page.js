import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

const sections = [
  [
    "Use of this site",
    "DreamScriptures is provided for informational, reflective, and personal exploration purposes. Content on this website is not professional medical, psychological, legal, or financial advice.",
  ],
  [
    "Interpretation is personal",
    "Dream meanings are not fixed or universal. Interpretations may vary depending on personal experiences, emotions, beliefs, and life circumstances. What resonates with one person may not apply to another.",
  ],
  [
    "No guarantees",
    "While we aim to provide thoughtful and accurate content, DreamScriptures makes no guarantees regarding completeness, reliability, or outcomes based on the use of any interpretation shared on this site.",
  ],
  [
    "Your responsibility",
    "Any decisions or actions you take based on content from this website remain your own responsibility. DreamScriptures provides perspective and reflection, not certainty or instruction.",
  ],
  [
    "Content ownership",
    "Unless otherwise stated, written content, branding, and original materials on DreamScriptures belong to this website and may not be copied or republished without permission.",
  ],
  [
    "Content changes",
    "We may update, revise, remove, or expand content at any time as the website evolves.",
  ],
  [
    "A final note",
    "This platform is designed to feel thoughtful, calm, and open-minded. Take what is meaningful to you, and leave what is not.",
  ],
];

export default function TermsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Terms</h1>
        <div className="w-12 h-[1px] bg-[#C6A96B] mb-10" />

        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-12">
          This space is here to guide reflection, not to define it for you.
          What you take from it is always your own.
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
