"use client";

import dynamic from "next/dynamic";

const HomeSearch = dynamic(() => import("./HomeSearch"), {
  ssr: false,
});

export default function HomeSearchWrapper() {
  return <HomeSearch />;
}