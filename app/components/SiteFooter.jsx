import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#EAE6E1] bg-[#FAF8F5]">
      <div className="mx-auto max-w-5xl px-6 py-14">
        
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
            DreamScriptures
          </p>

          <p className="mt-4 text-sm leading-[1.9] text-[#6B6B6B] md:text-base">
            Dream interpretation through emotional tone, symbolic behavior,
            subconscious patterns, and waking-life context rather than fixed
            definitions alone.
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5F574E]">
          <Link
            href="/dreams"
            className="transition hover:text-[#8F743C]"
          >
            Dream meanings
          </Link>

          <Link
            href="/guides"
            className="transition hover:text-[#8F743C]"
          >
            Guides
          </Link>

          <Link
            href="/faq"
            className="transition hover:text-[#8F743C]"
          >
            FAQ
          </Link>

          <Link
            href="/author"
            className="transition hover:text-[#8F743C]"
          >
            Interpretation approach
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[#8F743C]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[#8F743C]"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="transition hover:text-[#8F743C]"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-[#8F743C]"
          >
            Terms
          </Link>
        </nav>

        <div className="mt-12 border-t border-[#EAE6E1] pt-5">
          <p className="text-xs leading-relaxed text-[#8A8175]">
            © {new Date().getFullYear()} DreamScriptures
          </p>
        </div>
      </div>
    </footer>
  );
}