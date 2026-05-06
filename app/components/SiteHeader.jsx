"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["Dream Dictionary", "/dreams"],
  ["Categories", "/categories"],
  ["Guides", "/guides"],
  ["About", "/about"],
];

export default function SiteHeader({ sticky = false }) {
  const pathname = usePathname();

  return (
    <header
      className={`w-full h-16 md:h-20 border-b border-[#EAE6E1] ${
        sticky
          ? "sticky top-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#FAF8F5]/70"
          : "bg-[#FAF8F5]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
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
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map(([label, href]) => {
            const isActive =
              pathname === href ||
              (href !== "/dreams" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-[#1A1A1A]"
                    : "text-[#6B6B6B] hover:text-[#C6A96B]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Placeholder (optional future use) */}
        <div className="md:hidden">
          {/* You can plug a hamburger menu here later */}
        </div>
      </nav>
    </header>
  );
}