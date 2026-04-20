import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

const sections = [
  [
    "Use of this site",
    "DreamScriptures is created for insight, reflection, and personal exploration. The content is not intended as professional advice, medical guidance, or psychological diagnosis.",
  ],
  [
    "Interpretation is personal",
    "Dream meanings are not fixed. They can shift depending on your experiences, emotions, and current life context. What resonates with you may not be universal, and that is part of the process.",
  ],
  [
    "Your responsibility",
    "By using this site, you acknowledge that how you interpret and apply any meaning is your own responsibility. This space offers perspective, not certainty.",
  ],
  [
    "Content changes",
    "Content may evolve over time as new insights are added or refined. DreamScriptures reserves the right to update or adjust content without notice.",
  ],
  [
    "A final note",
    "This platform is built to feel thoughtful, calm, and open, not prescriptive. Take what feels true, and leave what does not.",
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
