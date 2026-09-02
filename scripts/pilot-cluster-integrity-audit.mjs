import { clusters } from "../data/clusters.js";
import { dreams } from "../data/dream.js";
import { editorialStatuses } from "../data/editorialStatuses.js";

const pilotKeys = ["snake_dreams", "water_dreams", "relationship_dreams"];
const errors = [];
const dreamBySlug = new Map(dreams.map((dream) => [dream.slug, dream]));
const guidePaths = new Set(Object.values(clusters).map((cluster) => cluster.guide));
const allowedPathways = new Set([
  "/emotions/fear",
  "/emotions/emotional-overwhelm",
  "/emotions/relationship-confusion",
  "/guides/how-to-interpret-dream-symbols",
  "/guides/loss-of-control-dreams",
  "/guides/dreaming-about-someone",
  "/dreams/family",
]);

for (const key of pilotKeys) {
  const cluster = clusters[key];
  if (!cluster) {
    errors.push(`Missing pilot cluster: ${key}`);
    continue;
  }

  const listed = new Set(cluster.dreams || []);
  for (const slug of listed) {
    if (!dreamBySlug.has(slug)) errors.push(`${key}: unresolved dream ${slug}`);
    const decision = editorialStatuses[slug]?.decision || "";
    if (decision.includes("MERGE_REVIEW") || decision.includes("NOINDEX_REVIEW")) {
      errors.push(`${key}: reviewed non-primary destination exposed: ${slug} (${decision})`);
    }
  }

  const grouped = (cluster.groups || []).flatMap((group) => group.dreams || []);
  for (const slug of grouped) {
    if (!listed.has(slug)) errors.push(`${key}: grouped dream missing from core list: ${slug}`);
  }
  for (const slug of listed) {
    if (!grouped.includes(slug)) errors.push(`${key}: core dream is orphaned from hub groups: ${slug}`);
  }
  if (new Set(grouped).size !== grouped.length) errors.push(`${key}: a dream appears in more than one hub group`);

  for (const pathway of cluster.relatedPathways || []) {
    if (!allowedPathways.has(pathway.href) && !guidePaths.has(pathway.href)) {
      errors.push(`${key}: unverified pathway ${pathway.href}`);
    }
  }
}

if ((clusters.water_dreams?.dreams || []).includes("lost-at-sea")) errors.push("Water hub includes prohibited lost-at-sea placeholder");
if ((clusters.relationship_dreams?.dreams || []).includes("marrying-a-stranger")) errors.push("Relationship hub exposes merge-review stranger-marriage page");

for (const slug of ["snake-bite-on-the-leg", "looking-at-a-river", "engagement"]) {
  if (editorialStatuses[slug]?.decision !== "KEEP") errors.push(`${slug}: repaired dependency is not canonically KEEP`);
  const dream = dreamBySlug.get(slug);
  if (!dream?.microSummary || !dream?.scenarios?.length || !dream?.reflectionQuestions?.length) {
    errors.push(`${slug}: repaired dependency is missing required contextual fields`);
  }
}

const pilotGuides = pilotKeys.map((key) => clusters[key]?.guide).filter(Boolean);
if (new Set(pilotGuides).size !== pilotGuides.length) errors.push("Pilot guide paths are not unique");
const pilotDescriptions = pilotKeys.map((key) => clusters[key]?.description).filter(Boolean);
if (new Set(pilotDescriptions).size !== pilotDescriptions.length) errors.push("Pilot guide descriptions are duplicated");

const result = {
  pilotClusters: pilotKeys.length,
  coreDreamCounts: Object.fromEntries(pilotKeys.map((key) => [key, clusters[key]?.dreams?.length || 0])),
  unresolvedReferences: errors.filter((item) => item.includes("unresolved")).length,
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
