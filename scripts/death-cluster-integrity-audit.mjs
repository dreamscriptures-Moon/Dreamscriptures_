import { clusters } from "../data/clusters.js";
import { dreams } from "../data/dream.js";
import { editorialStatuses } from "../data/editorialStatuses.js";
import { guides } from "../app/data/guides.js";
import { emotionalHubs } from "../data/emotionalHubs.js";

const dependencySlugs = [
  "seeing-a-dead-person",
  "talking-to-a-dead-person",
  "seeing-your-own-death",
  "someone-dying",
];

if (process.argv.includes("--inspect")) {
  const fields = [
    "title", "slug", "seoDescription", "microSummary", "description",
    "emotionalMeaning", "symbolicMeaning", "spiritualMeaning", "biblicalMeaning",
    "wakingLifeMeaning", "context", "scenarios", "reflectionQuestions", "relatedDreams",
    "behaviorInsights", "subconsciousPatterns", "lifeSituations", "contradictions",
  ];
  const selected = dreams.filter((dream) => dependencySlugs.includes(dream.slug)).map((dream) =>
    Object.fromEntries(fields.filter((field) => dream[field] != null).map((field) => [field, dream[field]]))
  );
  console.log(JSON.stringify(selected, null, 2));
  process.exit(0);
}

const errors = [];
const cluster = clusters.death_dreams;
const dreamBySlug = new Map(dreams.map((dream) => [dream.slug, dream]));

if (!cluster) errors.push("Missing death_dreams cluster");
if (cluster?.guide !== "/guides/death-dreams") errors.push("Unexpected Death hub route");

const listed = new Set(cluster?.dreams || []);
const grouped = (cluster?.groups || []).flatMap((group) => group.dreams || []);
for (const slug of listed) {
  if (!dreamBySlug.has(slug)) errors.push(`Unresolved Death dream: ${slug}`);
  const decision = editorialStatuses[slug]?.decision || "";
  if (decision.includes("MERGE_REVIEW") || decision.includes("NOINDEX_REVIEW")) {
    errors.push(`Reviewed non-primary destination exposed: ${slug} (${decision})`);
  }
}
for (const slug of grouped) if (!listed.has(slug)) errors.push(`Grouped page missing from core list: ${slug}`);
for (const slug of listed) if (!grouped.includes(slug)) errors.push(`Core page orphaned from hub groups: ${slug}`);
if (new Set(grouped).size !== grouped.length) errors.push("A Death page appears in more than one hub group");

const clusterGuidePaths = Object.values(clusters).map((item) => item.guide).filter(Boolean);
if (clusterGuidePaths.filter((path) => path === cluster?.guide).length !== 1) errors.push("Duplicate Death hub path in cluster data");
if (guides.some((guide) => guide.slug === "death-dreams")) errors.push("Death hub duplicates an existing editorial guide slug");
if (guides.some((guide) => guide.description === cluster?.description)) errors.push("Death hub duplicates existing guide metadata");

const guideSlugs = new Set(guides.map((guide) => guide.slug));
const clusterGuideSlugs = new Set(clusterGuidePaths.map((path) => path.split("/").filter(Boolean).at(-1)));
for (const pathway of cluster?.relatedPathways || []) {
  const [, type, slug] = pathway.href.split("/");
  if (type === "guides" && !guideSlugs.has(slug) && !clusterGuideSlugs.has(slug)) errors.push(`Unresolved guide pathway: ${pathway.href}`);
  if (type === "emotions" && !emotionalHubs[slug]) errors.push(`Unresolved emotion pathway: ${pathway.href}`);
}

for (const slug of dependencySlugs) {
  const dream = dreamBySlug.get(slug);
  if (editorialStatuses[slug]?.decision !== "KEEP") errors.push(`${slug}: repaired dependency is not canonically KEEP`);
  if (!dream?.microSummary || !dream?.scenarios?.length || !dream?.reflectionQuestions?.length) {
    errors.push(`${slug}: repaired dependency lacks contextual repair fields`);
  }
}

for (const excluded of ["being-shot", "blood", "car-accident", "seeing-a-dead-snake"]) {
  if (listed.has(excluded)) errors.push(`Semantically adjacent but non-core page included: ${excluded}`);
}

const result = {
  hub: cluster?.guide || null,
  coreDreamCount: listed.size,
  dependencyCount: dependencySlugs.length,
  unresolvedReferences: errors.filter((item) => item.startsWith("Unresolved")).length,
  errors,
};
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
