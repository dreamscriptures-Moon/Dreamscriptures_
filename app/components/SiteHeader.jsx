import Link from "next/link";
import SiteHeaderNav from "./SiteHeaderNav";

export default function SiteHeader({ sticky = false }) {
  return (
    <header
      className={`w-full h-16 md:h-20 border-b border-[#EAE6E1] ${
        sticky
          ? "sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#FAF8F5]/70"
          : "bg-[#FAF8F5]"
      }`}
    >
      <nav className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col justify-center leading-none select-none"
        >
          <span
            className="text-2xl md:text-3xl font-semibold font-serif tracking-wide"
            style={{ letterSpacing: "0.05em" }}
          >
            DreamScriptures
          </span>
          <span className="text-[10px] text-[#6F665C] tracking-wider mt-1">
            Dream interpretation
          </span>
        </Link>

        {/* Desktop Nav */}
        <SiteHeaderNav />

      </nav>
    </header>
  );
}
