import ClusterGuidePage from "@/app/components/ClusterGuidePage";
import { getClusterGuideBySlug } from "@/lib/clusterGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const houseGuide = getClusterGuideBySlug("house-dreams");

export function generateMetadata() {
  return createMetadataFromGuide(houseGuide);
}

export default function HouseDreamsGuidePage() {
  return <ClusterGuidePage clusterGuide={houseGuide} />;
}
