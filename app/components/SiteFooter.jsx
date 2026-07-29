import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#EAE6E1] bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
              DreamScriptures
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B6B6B]">
              Exploring dream meaning through emotional patterns, symbolism,
              subconscious themes, and reflective interpretation.
            </p>
          </div>

<div className="mt-8 text-center text-sm text-[#6B6B6B]">

  <p className="mb-3">
    Enjoying DreamScriptures?
  </p>

  <a
    href="https://buymeacoffee.com/dreamscriptures"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-[#C6A96B]"
  >
    ☕ Support the project
  </a>

</div>

          {/* Trust */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-[#8A8175]">
              Trust & Transparency
            </h3>

            <nav className="mt-3 flex flex-col gap-2 text-sm text-[#5F574E]">
              <Link href="/submit-dream" prefetch={false} className="hover:text-[#8F743C]">
                Submit Dream
              </Link>
              <Link href="/methodology" prefetch={false} className="hover:text-[#8F743C]">
                Methodology
              </Link>

              <Link
                href="/editorial-standards"
                prefetch={false}
                className="hover:text-[#8F743C]"
              >
                Editorial Standards
              </Link>

              <Link href="/disclaimer" prefetch={false} className="hover:text-[#8F743C]">
                Disclaimer
              </Link>

              <Link href="/about" prefetch={false} className="hover:text-[#8F743C]">
                About
              </Link>
<Link href="/faq" prefetch={false} className="hover:text-[#8F743C]">
                FAQ
              </Link>

              <Link href="/contact" prefetch={false} className="hover:text-[#8F743C]">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-[#EAE6E1] pt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#8A8175]">
            © {new Date().getFullYear()} DreamScriptures. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-[#8A8175]">
            <Link href="/privacy" prefetch={false} className="hover:text-[#8F743C]">
              Privacy
            </Link>

            <Link href="/terms" prefetch={false} className="hover:text-[#8F743C]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
