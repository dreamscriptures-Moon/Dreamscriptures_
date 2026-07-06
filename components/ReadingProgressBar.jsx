"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    function updateProgress() {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const nextProgress =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setProgress(
        Math.min(100, Math.max(0, nextProgress))
      );
    }

    function onScroll() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        updateProgress();
        frame = null;
      });
    }

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[80] h-[3px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-[#C6A96B] via-[#D9BF87] to-[#F4E3B2] shadow-sm transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}