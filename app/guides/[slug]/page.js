import { notFound } from "next/navigation";
import GuideLayout from "@/app/components/guides/GuideLayout";
import ClusterGuidePage from "@/app/components/ClusterGuidePage";
import { guides, getGuideBySlug } from "@/app/data/guides";
import { getClusterGuideBySlug, getClusterGuides } from "@/lib/clusterGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

export function generateStaticParams() {
  return [...guides.map(({ slug }) => ({ slug })), ...getClusterGuides().map(({ slug }) => ({ slug }))];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug) || getClusterGuideBySlug(slug);
  if (!guide) return {};
  return createMetadataFromGuide(guide);
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const clusterGuide = getClusterGuideBySlug(slug);
  if (guide) return <GuideLayout guide={guide} />;
  if (clusterGuide) return <ClusterGuidePage clusterGuide={clusterGuide} />;
  notFound();
}
