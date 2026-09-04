import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact DreamScriptures",
  description: "Contact DreamScriptures with a question, technical issue, feedback, or collaboration enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#756C61]"><Link href="/" className="transition hover:text-[#8F743C]">Home</Link><span aria-hidden="true"> / </span><span>Contact</span></nav>
        <header className="mb-10 text-center md:mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8F743C]">Get in touch</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Contact DreamScriptures</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#625B52] md:text-lg md:leading-8">Have a question, found something that needs fixing, or simply want to reach out? We&apos;d love to hear from you.</p>
        </header>
        <ContactForm />
      </article>
      <SiteFooter />
    </main>
  );
}
