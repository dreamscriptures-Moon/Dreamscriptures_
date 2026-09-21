import Link from "next/link";
import GuidesSearchList from "@/app/components/GuidesSearchList";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import DreamSchoolGrid from "@/app/components/DreamSchoolGrid";
import { getAllGuideEntries } from "@/lib/guideCatalog";
import { createGuideMetadata } from "@/lib/guideExperience";

export const metadata = createGuideMetadata({ slug: "", title: "Dream Guides & Knowledge Hub", description: "Find guides to dreams, lucid dreaming, nightmares, sleep experiences, science, psychology, and spiritual perspectives." });

const guideSearchItems = getAllGuideEntries();
const questions = [
  { slug: "recurring-dreams", question: "Why do I keep having the same dream?" },
  { slug: "why-dreams-feel-so-real", question: "Why did my dream feel so real?" },
  { slug: "how-to-remember-dreams", question: "Why do I forget my dreams so quickly?" },
  { slug: "lucid-dreaming", question: "How do lucid dreams work?" },
  { slug: "lucid-dreaming-techniques", question: "How can I have a lucid dream?" },
  { slug: "nightmares-meaning", question: "Why do I keep having nightmares?" },
  { slug: "false-awakening-dreams", question: "Why did I dream that I woke up?" },
  { slug: "stages-of-sleep-and-dreaming", question: "What happens while we sleep and dream?" },
  { slug: "why-dreams-feel-emotional-after-waking", question: "Why does a dream affect how I feel after waking?" },
  { slug: "spiritual-dreams-meaning", question: "Could my dream have a spiritual meaning?" },
].filter(({ slug }) => guideSearchItems.some((guide) => guide.slug === slug));

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#29251f]">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-6 pb-14 pt-8 md:pb-20 md:pt-12">
        <header className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-[#756C61]">
            <Link href="/" className="hover:text-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span><span aria-current="page">Guides</span>
          </nav>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">Dream Guides</h1>
          <p className="mt-5 text-lg leading-8 text-[#5F574E]">Have a question about dreams, sleep, or something that happened while you were sleeping?</p>
          <p className="mt-3 text-base leading-7 text-[#6B6B6B]">These guides explore dreaming, lucid dreaming, sleep, nightmares, and the ideas and experiences surrounding them — from science and psychology to spiritual perspectives. You don&apos;t need any background knowledge. Start with whatever you&apos;re curious about.</p>
        </header>

        <GuidesSearchList guides={guideSearchItems}>
          <section aria-labelledby="question-heading" className="mt-10 md:mt-12">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="question-heading" className="font-serif text-3xl">Start with a question</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
              {questions.map(({ slug, question }) => (
                <Link key={slug} href={"/guides/" + slug} className="rounded-2xl border border-[#D8C7A0] bg-[#FFFDF9] p-5 transition-colors hover:border-[#8F743C] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]">
                  <h3 className="flex items-start justify-between gap-4 font-serif text-xl leading-7"><span>{question}</span><span aria-hidden="true" className="shrink-0 text-[#8F743C]">→</span></h3>
                </Link>
              ))}
            </div>
          </section>

          <DreamSchoolGrid />

          <aside aria-labelledby="begin-heading" className="my-10 border-l-2 border-[#B79B5E] py-1 pl-5 md:my-12 md:pl-6">
            <h2 id="begin-heading" className="font-serif text-2xl">Not sure where to begin?</h2>
            <Link href="/guides/basics" className="mt-3 inline-flex min-h-11 items-center font-medium text-[#806431] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]">Dream Basics <span aria-hidden="true" className="ml-2">→</span></Link>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#6B6258]">An introduction to what dreams are, why we dream, what happens during sleep, and why some dreams are easier to remember than others.</p>
          </aside>

        </GuidesSearchList>

        <section aria-labelledby="dictionary-heading" className="border-t border-[#DED7CD] pt-8 md:pt-10">
          <h2 id="dictionary-heading" className="font-serif text-2xl md:text-3xl">Looking for something from your own dream?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#6B6258]">You may not need a guide — you might just be looking for a dream you&apos;ve experienced.</p>
          <Link href="/dreams" className="mt-4 inline-flex min-h-11 items-center font-medium text-[#806431] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]">Explore the Dream Dictionary <span aria-hidden="true" className="ml-2">→</span></Link>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
