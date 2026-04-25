import Link from "next/link";

const navItems = [
  ["Dream Dictionary", "/dreams"],
  ["Categories", "/categories"],
  ["Guides", "/guides"],
  ["About", "/about"],
];

export default function SiteHeader({ sticky = false }) {
  return (
    <header
      className={`w-full border-b border-[#EAE6E1] ${
        sticky ? "sticky top-0 bg-[#FAF8F5]/80 backdrop-blur-sm" : "bg-[#FAF8F5]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-2xl md:text-3xl font-semibold font-serif tracking-wide"
            style={{ letterSpacing: "0.05em" }}
          >
            DreamScriptures
          </span>
          <span className="text-[10px] text-[#A89F91] tracking-wider mt-[2px]">
            Dream interpretation
          </span>
        </Link>

        <div className="hidden md:flex gap-10 text-sm text-[#6B6B6B]">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#C6A96B] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
