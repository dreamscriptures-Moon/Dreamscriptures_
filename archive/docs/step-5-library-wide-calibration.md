# Step 5 — Library-Wide Post-Cluster Calibration

**Scope:** Diagnostic only. No dream pages were rewritten, merged, noindexed, redirected, or re-canonicalized in this phase. No new cluster was created.

## A. Current library state

### Library and cluster footprint

- 370 indexed dream pages.
- 10 organizing cluster records/hubs: Loss of Control, Snakes, Water, Relationships, Death, Houses, Falling, Pregnancy, Spiritual Dreams, and Recurring Dreams.
- 165 cluster-listed individual destinations across those records. Recurring Dreams intentionally has one dedicated individual page because recurrence is a cross-topic interpretive condition, not a reason to create recurring-symbol doorway pages.
- 0 pages without a direct opening in the current content audit.
- 0 pages without explained related links.

### Current automated quality state

The latest dream-quality audit (2026-09-01) reports:

| Tier | Count |
|---|---:|
| P0 | 0 |
| P1 | 48 |
| P2 | 215 |
| P3 | 91 |
| P4 | 16 |

Reader-test failures: **0**. The audit reports 54 pages that clearly avoid a generic dictionary answer, 278 partially differentiated pages, and 38 pages that still resemble generic dictionary treatment. The collision report contains 84 semantic-neighbor prompts.

The content-quality audit reports 73 strong pages, 201 good pages, and 96 needs-enrichment pages. It also reports 150 pages without sufficiently specific reflection questions under its broad heuristic. A narrower editorial action queue identifies 83 weak-reflection-question cases; the difference is expected because the two checks use different thresholds and scopes.

### Technical validation already passing

- Related-reference audit: 0 unresolved references.
- ESLint: passing in the latest cluster runs.
- Production build: passing; 628 static routes generated.
- Existing hub and dependency route checks: passing across the completed cluster reports.
- Cluster-specific integrity checks: passing for completed cluster implementations.
- No current P0 reader-test failures.

## B. What is genuinely still weak

### Critical — must resolve before launch

There is no current P0 content failure, but two data-integrity items should be resolved before treating the library as launch-ready:

1. Replace the two physical related-object references to the redirected `lost-in-a-building` slug with the canonical `being-lost-in-a-building` reference. Runtime filtering prevents broken output, but source data should not depend on that safety net.
2. Reconcile the canonical editorial-status model with the historical queue. `data/editorialStatuses.js` currently contains 83 explicit decisions (72 KEEP, 2 KEEP_MODEL_CANDIDATE, 5 MERGE_REVIEW, 4 NOINDEX_REVIEW), while 287 pages have no explicit status entry. The original reclassification report describes a 29-page Improve queue and 45 KEEP decisions within the 85-page cohort; later cluster repairs legitimately added KEEP decisions, but the system does not expose a single unambiguous current Improve count. This is a reporting/queue-consistency problem, not a reason to rewrite content.

### High-value — should happen before or immediately around launch

- The 48 P1 pages remain the clearest reader-value opportunity. Highest-value examples include `receiving-money`, `deja-vu`, `water-rising`, `angel-numbers`, `lost-in-a-building` (redirect alias should be replaced by the canonical page), `dog-bite`, `many-doors`, `finding-a-baby`, `water`, `boat-sinking`, `clear-water`, and `walking-tree`.
- Water, Biblical dreams, Body-related dreams, Objects, and Family are the weakest categories by average score. They combine strategic search demand with repeated generic interpretation patterns.
- The top collision prompts require focused human decisions, not automatic merges: ocean/being-in-the-ocean, money/finding-money/receiving-money, shooting-star/shooting-stars, lion-chase duplicates, doors/many-doors, teeth/broken-teeth, house/new-house, dog/dog-bite, pregnancy/twins, Jesus seeing/speaking, and God seeing/speaking.
- Conditional interpretation is weakest where pages list a symbol or emotional label without showing how behavior, agency, setting, or outcome changes meaning. The P1 generic queue is the best repair surface because it concentrates these failures.
- Reflection questions need themed remediation, beginning with P1 pages and sensitive/high-intent pages rather than all 150 heuristic flags at once.

### Worthwhile — valuable but not a launch blocker

- Review formulaic metadata and excerpts in the highest-collision and highest-impression pages. Exact duplicate values are currently zero for titles, SEO descriptions, micro-summaries, and short descriptions, but uniqueness does not guarantee specificity.
- Reduce competing lower-page pathways where an individual page presents several equally prominent related, thematic, and guide CTAs. The preferred order remains interpretation → reflection → one primary next action; related exploration should be secondary.
- Consolidate stale source references beyond the two known redirect aliases after the canonical status reconciliation.
- Sample P2/P3 pages for semantic repetition between emotional, symbolic, spiritual, and practical sections. Preserve repetition when it teaches a principle once and applies it deliberately; remove only interchangeable explanations.

### Low priority / can wait

- Broad P3/P4 enrichment where the page already passes the 2 a.m. reader test and has defensible independent intent.
- New scenario pages, recurring-symbol pages, or additional hubs. The cluster work demonstrates that page proliferation is not the missing quality lever.
- Style normalization. The library should retain individual human phrasing rather than converging on a single voice.

## C. Consolidated workstreams

The remaining work can be handled in four substantial workstreams.

### Workstream 1 — High-value page repair with reflection remediation

Combine the remaining P1/strategic P2 repairs with themed reflection-question work. Select pages by reader weakness, independent value, trust sensitivity, collision risk, and repair opportunity. Start with Water, Biblical, Body, Objects, Family, and high-intent relationship pages. Each batch should include direct opening, anchor, conditional reasoning, neighbor distinction, reflection questions, and a complete-page reread.

### Workstream 2 — Semantic, status, and source-data integrity

Resolve the two redirected source references, reconcile the 83 explicit statuses against the 29-page Improve queue and later cluster KEEP decisions, and review the highest collision pairs. This workstream produces merge/noindex recommendations only; it does not execute those decisions automatically. It should also identify source objects that are technically valid but semantically stale.

### Workstream 3 — Metadata and discovery hierarchy

Audit metadata/excerpts together with lower-page discovery. Sample titles, meta descriptions, micro-summaries, search-card excerpts, related previews, and Dream Compass excerpts against their rendered pages. Then reduce competing CTAs so the reader sees one clear next step after reflection. Hub pathways should remain contextual and restrained.

### Workstream 4 — Final technical, indexing, mobile, and measurement QA

Run the final route/canonical/sitemap/build/ESLint checks after Workstreams 1–3. Reinspect representative short, long, image-heavy, scenario-heavy, spiritual, relationship, body, natural-disaster, and broad-symbol pages on desktop and mobile. Verify analytics events in the deployed environment and establish a post-launch review cadence.

## D. Priority queue

The next repairs should be selected in this order:

1. `water-rising`, `water`, `clear-water`, and `boat-sinking` — high search value, weakest category, and repeated broad-water/generic-emotion overlap.
2. `deja-vu` and `angel-numbers` — P1 spiritual/meaning-making intent with a high need for tradition-versus-certainty boundaries.
3. `receiving-money`, `finding-money`, `money`, and `losing-money` — a collision family where agency and direction of exchange are more useful than generic abundance language.
4. `dog-bite` and one carefully selected animal-neighbor page — trust-sensitive threat interpretation with clear behavior and relationship variables.
5. `finding-a-baby`, `abandoned-baby`, `baby-crying`, and `holding-a-baby` — family/baby overlap requiring careful outcome, responsibility, and emotional distinctions.
6. `many-doors`, `doors`, `opening-a-door`, `climbing-stairs`, and `endless-stairs` — access and movement family where action and agency should decide whether pages remain separate.
7. `walking-tree` and `tree-with-a-human-face` — unusual-symbol pages that need concrete scene reasoning instead of generalized transformation language.
8. `speaking-to-jesus`, `seeing-jesus`, `speaking-to-god`, and `seeing-god` — presence-versus-exchange distinctions with spiritual trust safeguards.

This is a repair order, not an automatic batch. Each group should be reviewed as a composed page plus its nearest neighbors before editing.

## E. Launch-readiness assessment

### Must happen before launch

- Clean the two stale redirected source references and rerun related-reference validation.
- Reconcile editorial-status reporting so the active Improve queue, KEEP decisions, Merge Review decisions, and Noindex Review decisions have one authoritative count and source.
- Run the final production build, ESLint, route checks, canonical checks, sitemap checks, and representative desktop/mobile inspection after those data changes.
- Confirm no new P0 reader-test failures and no unresolved references.

### Should happen before launch if practical

- Repair the highest-value P1 pages in at least the Water and sensitive-spiritual/relationship groups.
- Complete reflection questions for the first themed high-intent batches.
- Review the top collision families for obvious source-level stale relationships and competing CTAs.
- Verify deployed analytics consent behavior and Dream Compass completion/result-open events.

### Can safely happen after launch

- The remaining P1/P2 editorial repair queue, provided no page has a trust or technical blocker.
- Broad reflection-question remediation across lower-risk P2/P3 pages.
- Metadata/discovery refinement based on real search and click behavior.
- Additional mobile sampling and accessibility improvements informed by actual devices and usage.
- Any future merge/noindex execution after human review and search/link evidence.

## F. Analytics and search data

The repository contains privacy-conscious analytics instrumentation for Dream Compass and search interactions, but no meaningful production Search Console, click-through, query, or post-launch completion dataset was available in the project. Therefore analytics did not determine the priority order. The next execution phase should use real impressions, clicks, no-result searches, Compass completion, and result-open data as soon as those signals exist; no traffic or query volume has been invented here.

## Final recommendation

The next execution workstream should be **Workstream 2 — Semantic, status, and source-data integrity**, beginning with the two stale redirect references and authoritative queue reconciliation. It is the smallest dependency-cleaning step that prevents later editorial decisions from being recorded against the wrong page or queue. After that, proceed to Workstream 1 with a focused high-value repair batch.

Do not begin another cluster, broad rewrite, merge, or noindex operation automatically from this report. The library is technically close to readiness and has no current P0 reader failures, but launch confidence depends on a clean source/status model and a final representative QA pass rather than on eliminating every P1/P2 flag.
