# Foundation Integrity Cleanup

Date: 2026-09-01

## Scope

This cleanup addressed the two integrity issues identified by the Phase 5 library-wide calibration: stale related-dream source references and an ambiguous editorial-status authority. No dream content, URLs, canonicals, redirects, or indexing directives were changed.

## Stale source references

Two active related-dream records referenced the redirected slug `lost-in-a-building`:

- `darkness` → `being-lost-in-a-building`
- the enrichment relationship attached to `being-lost` → `being-lost-in-a-building`

The redirected `lost-in-a-building` page record and its alias remain in place for URL compatibility. A traversal of the active `dreams` object now reports **0 related-object references** to the obsolete slug. No new redirect or page was created.

## Authoritative editorial-status model

`data/editorialStatuses.js` is now the authoritative status source. `getEditorialStatus()` and direct imports use the same map. Terminal/review decisions remain explicit and unchanged; the historical Improve cohort is represented separately so completed decisions cannot be re-queued.

- `KEEP`: 72
- `KEEP_MODEL_CANDIDATE`: 2
- `MERGE_REVIEW`: 5
- `NOINDEX_REVIEW`: 4
- active `IMPROVE`: 14
- unclassified pages (no current editorial decision): 273
- indexed dream pages: 370

The active Improve queue is the 14 members of the reviewed 29-page reclassification list that do not have a later explicit decision. Pages subsequently repaired or reviewed remain terminal `KEEP` (or their documented review decision), rather than returning to Improve.

Historical/report-only queues are not active work queues:

- the Phase 5B 85-page needs-enrichment cohort;
- the earlier 38-page reclassification report;
- completed Phase 6 batch lists and cluster reports;
- generated audit/action reports.

These documents remain useful evidence, but future audits should read the canonical status module and its active queue metadata instead of treating historical lists as instructions to re-queue pages.

## Validation

- Indexed-page/status reconciliation: 370 pages; every status key resolves to an existing page; no active Improve item has a terminal decision.
- Source-reference validation: stale active `lost-in-a-building` references **0**.
- Related-link audit: unresolved references **0**.
- Dream-quality audit: P0 **0**, P1 **48**, P2 **215**, P3 **91**, P4 **16**; reader-test failures **0**; semantic-collision prompts **84**.
- Content-quality audit: strong **73**, good **201**, needs-enrichment **96**; direct-opening failures **0**; repeated fields **0**; unexplained related links **0**.
- ESLint: passed.
- Production build: passed; 628 routes generated.
- Representative production routes: death hub, houses hub, falling hub, spiritual guide, canonical lost-in-building dream, and sitemap returned HTTP 200.
- No unintended indexing, canonical, URL, or sitemap changes were introduced.

## Remaining interpretation

The 273 unclassified pages are not automatically Improve decisions; they are simply outside the current reviewed status set. The 14 active Improve pages, five Merge Review pages, four Noindex Review pages, and two model candidates are now distinguishable from unclassified library inventory. This preserves documented editorial intent while preventing historical queue drift.
