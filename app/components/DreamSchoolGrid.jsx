import Link from "next/link";

const libraries = [
  {
    step: 1,
    icon: "📖",
    title: " Basics",
    href: "/guides/basics",
    description:
      "Learn what dreams are, why we dream and how dream interpretation works.",
  },
  {
    step: 2,
    icon: "🧠",
    title: "Science",
    href: "/guides/science",
    description:
      "Explore REM sleep, brain activity, memory and neuroscience.",
  },
  {
    step: 3,
    icon: "🧠",
    title: "Psychology",
    href: "/guides/psychology",
    description:
      "Discover Freud, Jung and subconscious dream theories.",
  },
  {
    step: 4,
    icon: "✨",
    title: "Spirituality",
    href: "/guides/spirituality",
    description:
      "Learn how dreams are understood through spiritual traditions.",
  },
  {
    step: 5,
    icon: "🔍",
    title: "Interpretation",
    href: "/guides/interpretation",
    description:
      "Understand symbols, context, emotions and thoughtful interpretation.",
  },
  {
    step: 6,
    icon: "🌍",
    title: "History & Culture",
    href: "/guides/history-culture",
    description:
      "Explore how civilizations have understood dreams throughout history.",
  },
  {
    step: 7,
    icon: "🌿",
    title: "Wellness",
    href: "/guides/wellness",
    description:
      "Improve dream recall, sleep quality and personal reflection.",
  },
  {
    step: 8,
    icon: "📊",
    title: "Research",
    href: "/guides/research",
    description:
      "Discover dream statistics, scientific studies and modern research.",
  },
];

export default function DreamSchoolGrid() {
  return (
    <section className="my-16">

      <h2 className="font-serif text-3xl md:text-4xl mb-4">
        🌙 Dreams Knowledge Hub
      </h2>

      <p className="text-[#6B6B6B] leading-relaxed mb-10">
        Learn dreams step by step through eight carefully organized
        learning libraries. Whether you&apos;re curious about symbolism,
        psychology, spirituality or neuroscience, every guide builds on
        the last to create a deeper understanding of dreams.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        {libraries.map((library) => (

          <Link
            key={library.href}
            href={library.href}
            className="bg-white border border-[#EAE6E1] rounded-2xl p-6 transition hover:shadow-md hover:-translate-y-1"
          >

            <p className="text-sm text-[#6B6B6B] mb-2">
              STEP {library.step}
            </p>

            <h3 className="font-serif text-2xl mb-3">
              {library.icon} {library.title}
            </h3>

            <p className="text-[#6B6B6B] leading-relaxed mb-5">
              {library.description}
            </p>

            <span className="text-sm font-medium">
              Start Learning →
            </span>

          </Link>

        ))}

      </div>

    </section>
  );
}