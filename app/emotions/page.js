import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import { emotionalHubs } from "@/data/emotionalHubs";

export default function EmotionsPage() {
  const emotions = Object.entries(emotionalHubs).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/">Home</Link> / <span>Emotions</span>
        </nav>

        <LazyMobileQuickNav />

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Emotional dream meanings
        </h1>

        <p className="text-[#6B6B6B] mb-10 leading-relaxed">
          Explore how emotions shape dream meaning. These emotional patterns
          reveal deeper connections between your dreams and waking life.
        </p>

        {/* Emotion grid */}
        <section className="grid gap-6">
          {emotions.map((emotion) => (
            <Link
              key={emotion.slug}
              href={`/emotions/${emotion.slug}`}
              className="group block border border-[#EAE6E1] rounded-2xl p-6 bg-[#FCFBF9] hover:border-[#C6A96B] transition"
            >
              <h2 className="font-serif text-2xl mb-2">
                {emotion.title}
              </h2>

              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {emotion.intro}
              </p>
            </Link>
          ))}
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
