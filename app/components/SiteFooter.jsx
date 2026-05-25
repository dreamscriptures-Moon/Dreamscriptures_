import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#EAE6E1] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-[#6B6B6B] flex flex-col md:flex-row justify-between gap-4">
        <p>(c) {new Date().getFullYear()} DreamScriptures</p>

        <nav className="flex flex-wrap gap-6">
          <Link href="/about">About</Link>
          <Link href="/author">Author</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
