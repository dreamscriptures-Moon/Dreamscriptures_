import Link from "next/link";

const libraries = [
  {
    title: "Dream Basics",
    href: "/guides/basics",
    description:
      "Dreaming, recall, familiar experiences, and ways to think about dreams.",
  },
  {
    title: "Science",
    href: "/guides/science",
    description:
      "Learn what research says about sleep, memory, and dreaming.",
  },
  {
    title: "Psychology",
    href: "/guides/psychology",
    description:
      "Read about emotions, experiences, and psychological approaches to dreams.",
  },
  {
    title: "Spirituality",
    href: "/guides/spirituality",
    description:
      "Learn how dreams are understood through spiritual traditions.",
  },
  {
    title: "Interpretation",
    href: "/guides/interpretation",
    description:
      "Understand symbols, context, emotions and thoughtful interpretation.",
  },
  {
    title: "History & Culture",
    href: "/guides/history-culture",
    description:
      "Explore how civilizations have understood dreams throughout history.",
  },
  {
    title: "Wellness",
    href: "/guides/wellness",
    description:
      "Sleep habits, stress, nightmares, dream recall, and well-being.",
  },
  {
    title: "Research",
    href: "/guides/research",
    description:
      "Studies of dreaming, lucid dreams, REM sleep, and what researchers are still asking.",
  },
];

export default function DreamSchoolGrid() {
  return (
    <section aria-labelledby="topics-heading" className="mt-8 border-t border-[#DED7CD] py-8 md:mt-10 md:py-10">
      <h2 id="topics-heading" className="font-serif text-2xl text-[#29251f]">Explore by topic</h2>
      <p className="mt-3 text-sm leading-6 text-[#6B6258]">Prefer to browse? These collections bring together guides on a shared subject.</p>
      <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
        {libraries.map((library) => (
          <Link key={library.href} href={library.href} className="border-b border-[#E2DCD3] py-4 hover:text-[#806431] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]">
            <h3 className="font-medium">{library.title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#6B6258]">{library.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
