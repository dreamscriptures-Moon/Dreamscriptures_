import { getParagraphs } from "@/lib/dreams";

const sectionLabels = {
  "emotional-meaning": "The feelings beneath the dream",
  "symbolic-meaning": "The symbol or image",
  "spiritual-meaning": "A spiritual reflection",
  "real-life-meaning": "Where this may meet everyday life",
};

export default function DreamInsightSection({ id, title, body }) {
  const paragraphs = getParagraphs(body);

  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <section id={id} className="scroll-mt-28 border-t border-[#EAE6E1] pt-8">
      {sectionLabels[id] && (
        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#8F743C]">
          {sectionLabels[id]}
        </p>
      )}
      <h2 className="mb-5 font-serif text-3xl leading-tight md:text-4xl">{title}</h2>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph.slice(0, 24)}`}
            className="text-[#6B6B6B] text-base md:text-lg leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
