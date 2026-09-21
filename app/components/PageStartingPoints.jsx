import Link from "next/link";

export default function PageStartingPoints({ title, hint, items }) {
  return (
    <section aria-label={title} className="my-10 rounded-3xl border border-[#ded7cd] bg-white/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl leading-snug text-[#29251f]">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#686159]">{hint}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map(({ href, label, description }) => (
          <Link key={href} href={href} className="rounded-2xl border border-[#e1dcd5] bg-[#fcfaf6] p-5 transition hover:border-[#b89b62] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f743c]">
            <span className="block font-medium leading-6 text-[#493d29]">{label} <span aria-hidden="true">→</span></span>
            <span className="mt-2 block text-sm leading-6 text-[#686159]">{description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
