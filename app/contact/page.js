import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

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

      <article className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact</h1>
        <div className="w-12 h-[1px] bg-[#C6A96B] mb-10" />

        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed italic mb-12">
          Some connections arrive quietly, but still matter deeply.
        </p>

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

        <div className="mt-14 pt-10 border-t border-[#E8E0D2]">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Email
          </h2>
          <p className="text-base md:text-lg text-[#2A2A2A]">
            dreamscriptures@gmail.com
          </p>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}