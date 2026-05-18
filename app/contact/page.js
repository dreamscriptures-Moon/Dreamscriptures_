import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
export const metadata = {
  title: "Contact DreamScriptures",
  description:
    "Get in touch with DreamScriptures for questions, feedback, or collaboration opportunities related to dream meanings and interpretations.",
};

const sections = [
  [
    "Reach out",
    "If you have a question, suggestion, collaboration idea, or simply want to connect, you are welcome here. DreamScriptures is built with care, and thoughtful messages are always appreciated.",
  ],
  [
    "Response times",
    "Messages are read with attention and appreciation. While response times may vary, sincere inquiries are always valued.",
  ],
  [
    "Ideas & feedback",
    "If something could feel clearer, more useful, or more meaningful, feel free to share it. DreamScriptures grows through honest feedback and shared insight.",
  ],
  [
    "Collaborations",
    "For partnerships, creative features, business opportunities, or media inquiries, include a few details so the right conversation can begin.",
  ],
  [
    "A final note",
    "This space was created to feel calm, thoughtful, and meaningful. Thank you for taking the time to connect.",
  ],
];

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-2 md:py-32">

        {/* Breadcrumb */}
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span>Contact</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Contact DreamScriptures
        </h1>

        <div className="w-12 h-[1px] bg-[#C6A96B] mb-10" />

        {/* Intro */}
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-6">
          Some connections arrive quietly, but still matter deeply.
        </p>
<LazyMobileQuickNav />
        {/* SEO anchor */}
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          If you have questions about dream meanings, interpretations, or the
          content on DreamScriptures, you can reach out anytime.
        </p>

        {/* Sections */}
        <section className="space-y-8 text-[#2A2A2A] text-base md:text-lg leading-relaxed">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-serif text-2xl md:text-3xl mb-3">
                {title}
              </h2>
              <p>{body}</p>
            </section>
          ))}
        </section>

        {/* Email */}
        <div className="mt-14 pt-10 border-t border-[#E8E0D2]">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Email
          </h2>
          <p className="text-base md:text-lg text-[#2A2A2A]">
            dreamscriptures@gmail.com
          </p>
          <p className="text-sm text-[#8A8177] mt-4">
  DreamScriptures is an independent project focused on thoughtful,
  emotionally grounded dream interpretation.
</p>
        </div>

        {/* Internal link */}
        <div className="mt-6">
          <p className="text-sm text-[#6B6B6B]">
            You can also learn more about this project on the{" "}
            <Link href="/about" className="underline">
              About page
            </Link>.
          </p>
        </div>

      </article>
<section className="mt-16 border-t border-[#EAE6E1] pt-10">
  <h2 className="font-serif text-2xl mb-4">
    Explore dream meanings
  </h2>

  <div className="flex flex-wrap gap-3">
    <Link href="/dreams/falling" className="underline">Falling dream meaning</Link>
    <Link href="/dreams/being-chased" className="underline">Being chased dream</Link>
    <Link href="/dreams/snake" className="underline">Snake dream meaning</Link>
    <Link href="/categories/fear" className="underline">Fear dreams</Link>
    <Link href="/categories/anxiety" className="underline">Anxiety dreams</Link>
  </div>
</section>
      <SiteFooter />
    </main>
  );
}