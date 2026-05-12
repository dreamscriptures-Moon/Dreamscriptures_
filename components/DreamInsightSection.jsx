import { getParagraphs } from "@/lib/dreams";

export default function DreamInsightSection({ id, title, body }) {
  const paragraphs = getParagraphs(body);

  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <section id={id} className="border-t border-[#EAE6E1] pt-6 scroll-mt-28">
      <h2 className="font-serif text-4xl md:text-5xl mb-4">{title}</h2>

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
