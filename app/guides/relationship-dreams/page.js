import ClusterGuidePage from "@/app/components/ClusterGuidePage";
import { getClusterGuideBySlug } from "@/lib/clusterGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const relationshipGuide = getClusterGuideBySlug("relationship-dreams");

export function generateMetadata() {
  return createMetadataFromGuide(relationshipGuide);
}

export default function RelationshipDreamsGuidePage() {
  return <ClusterGuidePage clusterGuide={relationshipGuide} />;
}
