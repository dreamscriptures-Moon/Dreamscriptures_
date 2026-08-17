import Link from "next/link";

export default function EditorialAttribution({ className = "" }) {
  return (
    <aside
      aria-label="Content attribution"
      className={`border-y border-[#EAE6E1] py-4 text-sm leading-6 text-[#6B655D] ${className}`.trim()}
    >
      Written and edited by{" "}
      <Link href="/author" rel="author" className="font-medium text-[#5C4727] underline underline-offset-4">
        Amber Balentine
      </Link>
      , founder and editor of DreamScriptures. Read the{" "}
      <Link href="/methodology" className="underline underline-offset-4">methodology</Link>{" "}
      and{" "}
      <Link href="/editorial-standards" className="underline underline-offset-4">editorial standards</Link>.
      {" "}To flag an error or concern, use the{" "}
      <Link href="/contact#corrections" className="underline underline-offset-4">corrections channel</Link>.
    </aside>
  );
}
