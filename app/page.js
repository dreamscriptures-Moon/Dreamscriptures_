import Link from "next/link";
import HomeSearch from "@/app/components/HomeSearch";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

const popularDreams = [
  "Falling",
  "Snakes",
  "Being Chased",
  "Teeth Falling Out",
  "Flying",
  "Water",
];

const featuredGuides = [
  {
    slug: "why-we-dream",
    title: "Why do we dream?",
    desc: "Understanding what dreams are and why they happen.",
  },
  {
    slug: "recurring-dreams",
    title: "Recurring dreams",
    desc: "Why some dreams repeat and what they might mean.",
  },
  {
    slug: "nightmares",
    title: "Nightmares",
    desc: "What causes intense or disturbing dreams.",
  },
  {
    slug: "dreams-and-emotions",
    title: "Dreams and emotions",
    desc: "How your emotional state shapes your dreams.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F7F5F2] text-[#1A1A1A] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl leading-tight mb-8 font-serif tracking-tight">
          Dream meanings, symbols & interpretation
        </h1>

        <p className="text-[#6B6B6B] text-base md:text-lg mb-8 leading-relaxed">
          Search for your dream and explore what it might mean; from emotional
          signals to deeper symbolic patterns that shape your experience.
        </p>

        <p className="text-[#BFA06A] text-sm tracking-wide uppercase mb-10">
          Dreams do not follow one fixed meaning. What matters is what yours is
          reflecting.
        </p>

        <HomeSearch />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-serif">
          Popular dreams
        </h2>
        <div className="w-24 h-[1px] bg-[#C6A96B] mx-auto mb-8 opacity-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {popularDreams.map((dream) => (
            <Link
              key={dream}
              href={`/dreams/${dream.toLowerCase().replace(/\s+/g, "-")}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl hover:border-[#C6A96B] hover:bg-white/40 transition"
            >
              <p className="text-base md:text-lg font-medium">{dream}</p>
              <p className="text-sm text-[#6B6B6B] mt-2">
                Explore what this dream might mean
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF9F7] px-6 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">
            How interpretation works
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
            Dreams are not one-size-fits-all. The same dream can mean different
            things depending on your emotions, your experiences, and what is
            happening in your life.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl font-serif mb-10 text-center">
          Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl bg-white hover:border-[#C6A96B] transition"
            >
              <span className="block font-medium text-base md:text-lg">
                {guide.title}
              </span>
              <span className="block text-sm text-[#6B6B6B] mt-2">
                {guide.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
