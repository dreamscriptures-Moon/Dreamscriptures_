import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.14em] text-stone-900"
        >
          DreamScriptures
        </Link>

        <nav className="flex items-center gap-6 text-sm text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-amber-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
