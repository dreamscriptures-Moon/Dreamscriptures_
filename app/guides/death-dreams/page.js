import ClusterGuidePage from "@/app/components/ClusterGuidePage";
import { getClusterGuideBySlug } from "@/lib/clusterGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const deathGuide = getClusterGuideBySlug("death-dreams");

export function generateMetadata() {
  return createMetadataFromGuide(deathGuide);
}

export default function DeathDreamsGuidePage() {
  return <ClusterGuidePage clusterGuide={deathGuide} />;
}
