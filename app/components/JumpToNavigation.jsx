"use client";

import { useEffect, useState } from "react";

export default function JumpToNavigation({
  target = "#navigation",
  label = "Explore Sections",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navigation = document.querySelector(target);

      if (!navigation) return;

      const rect = navigation.getBoundingClientRect();

      // Hide when navigation is visible
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setVisible(false);
        return;
      }

      // Show only when user has scrolled well past it
      if (window.scrollY > 800) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [target]);

  if (!visible) return null;

  return (
    <a
      href={target}
      className="
        fixed
        bottom-24
        right-6
        z-40
        rounded-full
        border
        border-[#EAE6E1]
        bg-[#FAF8F5]/95
        backdrop-blur
        px-5
        py-3
        text-sm
        text-[#5F574E]
        shadow-lg
        transition-all
        duration-300
        hover:border-[#C6A96B]
        hover:text-[#1A1A1A]
      "
    >
      ↑ {label}
    </a>
  );
}