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
    "Questions & Conversation",
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
      Have a question about a dream meaning, interpretation, or article on DreamScriptures? We would love to hear from you.
      </p>
<LazyMobileQuickNav />
        {/* SEO anchor */}
        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-12">
          If you have questions about dream meanings, interpretations, or the
          content on DreamScriptures, you can reach out anytime.
        </p>

        <section className="bg-white border border-[#EAE6E1] rounded-3xl p-8 mb-14">

  <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">
    Share Your Dream
  </p>

  <h2 className="font-serif text-3xl mb-5">
    We&apos;d Love to Hear Your Dream
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed mb-6">
    Have you experienced a dream that stayed with you?
    Whether it was beautiful, confusing, recurring or deeply symbolic,
    you&apos;re welcome to share it.

    Dream stories help us understand the many ways people experience dreams
    and may inspire future educational content on DreamScriptures.
  </p>

  <div className="bg-[#FAF8F5] border border-[#EAE6E1] rounded-2xl p-6">

    <h3 className="font-serif text-xl mb-3">
      When sharing your dream...
    </h3>

    <ul className="space-y-2 text-[#6B6B6B]">

      <li>• Describe what happened.</li>

      <li>• Mention how the dream made you feel.</li>

      <li>• Include any recurring symbols.</li>

      <li>• Share any waking-life context you feel comfortable sharing.</li>

    </ul>

  </div>

</section>

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

       <section>
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    What We Can Help With
  </h2>

  <ul className="space-y-3">
    <li>• Questions about dream meanings and interpretations</li>
    <li>• Reporting errors, corrections, or outdated information</li>
    <li>• Feedback about DreamScriptures content</li>
    <li>• Partnership and collaboration inquiries</li>
    <li>• Media and interview requests</li>
  </ul>
</section>

<section>
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    Who You will Be Contacting
  </h2>

  <p>
Messages sent through DreamScriptures are reviewed by founder and editor
Amber Balentine.

Questions, feedback, corrections, collaboration ideas, and thoughtful
discussion about dream interpretation are all welcome. </p>
</section>

<section className="bg-[#F8F6F2] border border-[#EAE6E1] rounded-3xl p-8 mb-10">

  <h2 className="font-serif text-3xl mb-4">
    Every Dream Has a Story
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed">
    Some dreams are easy to forget.

    Others stay with us for years.

    If there&apos;s a dream you&apos;ve never stopped thinking about,
    we&apos;d genuinely love to hear it.
  </p>

</section>

        {/* Email */}
        <div className="mt-14 pt-10 border-t border-[#E8E0D2]">
         <h2 className="font-serif text-3xl mb-4">

Email DreamScriptures

</h2>

<p className="text-lg mb-4">

dreamscriptures@gmail.com

</p>

<p className="text-[#6B6B6B] leading-relaxed">

Whether you&apos;re sharing a dream,
asking a question,
reporting an issue,
or simply saying hello,
your message is always welcome.

</p>

          <p className="text-sm text-[#8A8177] mt-4">
  DreamScriptures is an independent project focused on thoughtful,
  emotionally grounded dream interpretation.
</p>
        </div>

<div className="mt-6 flex flex-wrap gap-4 text-sm">
  <Link href="/methodology" className="underline">
    Methodology
  </Link>

  <Link href="/editorial-standards" className="underline">
    Editorial Standards
  </Link>

  <Link href="/disclaimer" className="underline">
    Disclaimer
  </Link>
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
<section className="mt-20 text-center border-t border-[#EAE6E1] pt-14">

  <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">
    Continue Exploring
  </p>

  <h2 className="font-serif text-4xl mb-5">
    Keep Exploring Your Dreams
  </h2>

  <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-8">
    Browse hundreds of dream meanings,
    discover emotional themes,
    or explore our Dream Library to learn more
    about the fascinating world of dreams.
  </p>

  <div className="flex flex-wrap justify-center gap-4">

    <Link
      href="/dreams"
      className="px-6 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#333] transition"
    >
      Dream Dictionary →
    </Link>

    <Link
      href="/guides"
      className="px-6 py-3 rounded-full border border-[#EAE6E1] hover:border-[#C6A96B] transition"
    >
      Dream Library
    </Link>

  </div>

</section>

      <SiteFooter />
    </main>
  );
}