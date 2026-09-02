import ClusterGuidePage from "@/app/components/ClusterGuidePage";
import { getClusterGuideBySlug } from "@/lib/clusterGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const fallingGuide = getClusterGuideBySlug("falling-dreams");

export function generateMetadata() {
  return createMetadataFromGuide(fallingGuide);
}

export default function FallingDreamsGuidePage() {
  return <ClusterGuidePage clusterGuide={fallingGuide} />;
}
