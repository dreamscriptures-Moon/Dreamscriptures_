"use client";

import { useEffect, useState } from "react";

export default function BuyMeCoffee() {
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobile(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://buymeacoffee.com/dreamscriptures"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        fixed
        bottom-6
        right-6
        z-50

        flex
        items-center

        rounded-full
        border
        border-[#C6A96B]
        bg-[#FAF8F5]

        px-4
        py-3

        shadow-lg
        transition-all
        duration-300

        hover:shadow-xl

        ${showMobile ? "flex" : "hidden md:flex"}
      `}
    >
      <span className="text-xl">☕</span>

      <div
        className="
          hidden
          md:block
          max-w-0
          overflow-hidden
          whitespace-nowrap
          transition-all
          duration-300
          group-hover:max-w-xs
          group-hover:ml-3
        "
      >
        <p className="text-xs text-[#A89F91] leading-none">
          🌙 Enjoying DreamScriptures?
        </p>

        <p className="text-sm font-medium text-[#5F574E] mt-1">
         Support the project
        </p>
      </div>
    </a>
  );
}