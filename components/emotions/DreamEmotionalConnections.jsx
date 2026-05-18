import Link from "next/link";

import { emotionalHubs } from "@/data/emotionalHubs";
import { shorten } from "@/lib/dreams";

export default function DreamEmotionalConnections({ dream }) {
  const connections = (dream?.emotionalConnections || [])
    .map((slug) => ({ slug, emotion: emotionalHubs[slug] }))
    .filter((item) => item.emotion);

  if (connections.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-[#EAE6E1] pt-10">
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Emotional reflection
      </p>

      <h2 className="mb-4 font-serif text-3xl md:text-4xl">
        Emotional Experiences Connected to This Dream
      </h2>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
        This dream may be less about one fixed symbol and more about the feeling
        moving underneath it. These emotional pathways can help you explore what
        the dream may be reflecting.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {connections.map(({ slug, emotion }) => (
          <Link
            key={slug}
            href={`/emotions/${slug}`}
            className="group block border-l border-[#D8C7A0] bg-white/75 px-5 py-4 transition hover:border-[#C6A96B] hover:bg-white"
          >
            <h3 className="font-serif text-xl text-[#1A1A1A] transition group-hover:text-[#8F743C]">
              {emotion.title}
            </h3>

            {emotion.intro && (
              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                {shorten(emotion.intro, 170)}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
