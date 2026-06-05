"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
const handleScroll = () => {
setIsVisible(window.scrollY > 360);
};

```
handleScroll();

window.addEventListener("scroll", handleScroll, {
  passive: true,
});

return () => {
  window.removeEventListener("scroll", handleScroll);
};
```

}, []);

const scrollToTop = () => {
const prefersReducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

```
window.scrollTo({
  top: 0,
  behavior: prefersReducedMotion ? "auto" : "smooth",
});
```

};

return (
<button
type="button"
onClick={scrollToTop}
title="Back to top"
aria-label="Back to top"
className={`fixed bottom-5 right-5 z-40 border border-[#EAE6E1] bg-white/90 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#5F574E] shadow-sm backdrop-blur transition duration-200 hover:border-[#C6A96B] hover:text-[#8F743C] focus:outline-none focus:ring-2 focus:ring-[#C6A96B]/40 md:bottom-6 md:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
>
Top </button>
);
}
