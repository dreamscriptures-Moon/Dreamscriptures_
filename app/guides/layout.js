import ReadingProgressBar from "@/components/ReadingProgressBar";

export default function GuidesLayout({ children }) {
  return <><ReadingProgressBar /><div className="guide-experience">{children}</div></>;
}
