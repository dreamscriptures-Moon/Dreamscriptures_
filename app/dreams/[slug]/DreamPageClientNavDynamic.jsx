"use client";

import dynamic from "next/dynamic";

const DreamPageClientNav = dynamic(() => import("./DreamPageClientNav"), {
  ssr: false,
});

export default DreamPageClientNav;
