import ClusterGuidePage from "@/app/components/ClusterGuidePage";
import { getClusterGuideBySlug } from "@/lib/clusterGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const pregnancyGuide = getClusterGuideBySlug("pregnancy-dreams");

export function generateMetadata() {
  return createMetadataFromGuide(pregnancyGuide);
}

export default function PregnancyDreamsGuidePage() {
  return <ClusterGuidePage clusterGuide={pregnancyGuide} />;
}
