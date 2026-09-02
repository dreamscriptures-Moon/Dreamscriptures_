# Step 4G — Recurring Dreams Topic Cluster

## Architecture

### Inventory

The library contains one dedicated recurring-dream interpretation page, `repeating-the-same-dream`, and one established long-form guide, `/guides/recurring-dreams`. Related material includes `deja-vu`, `reliving-a-specific-memory`, `being-in-the-past`, and recurring-dream references in the emotional and spiritual pathways. Other pages such as Falling, Being Chased, and Houses are not duplicated into recurring variants; recurrence is a cross-topic interpretive condition rather than a reason to create “recurring + keyword” doorway pages.

### Hub decision

The existing `/guides/recurring-dreams` is a suitable hub and was retained. It already answers why dreams repeat, why unfinished feelings can return, how versions change, and how recurrence can ease without implying prediction. Its metadata, first-screen answer, and long-form structure were preserved. The guide now also points directly to `repeating-the-same-dream` as the specific interpretation route.

The cluster record documents the hub’s organizing purpose without creating a second URL: recurrence should be read as a sequence—what stays the same, what changes, how emotion and agency shift, and how each version ends.

### Existing page used

The cluster contains one existing individual page: `repeating-the-same-dream`. No new recurring-dream pages were created. The page is the appropriate broad interpretation because its intent is the experience of recognizing a dream returning, not a particular symbol recurring.

## Page review

### `repeating-the-same-dream`

- Previous status: unclassified P2, score 25.
- Current status: KEEP; P2, score 25. Reader test passes; nearest neighbor is `deja-vu` with similarity 0.4774.
- Editorial anchor: recurrence is a pattern to compare across versions, not a fixed message. The page already asks which details stay identical, what changes, when the pattern began, what precedes it, and whether agency is increasing.
- Repair decision: no rewrite was needed. Existing writing is specific, natural, and sequence-based; it distinguishes escalating emotion from quieting familiarity and acknowledges that recurrence may change without being solved by one symbol definition.
- Content handling: KEEP. No generic inherited section required removal. The existing six reflection questions were preserved.
- Neighbor distinction: `deja-vu` concerns a moment of recognition; `reliving-a-specific-memory` concerns returning to a particular memory; `repeating-the-same-dream` concerns a full dream cycle recurring and changing over time.

## Hub purpose and reader journey

The hub’s unique purpose is to teach the reader how to compare repetitions. Its principles cover recording the pattern, separating constants from changes, tracking emotional movement, noticing agency and outcome, and keeping stress, memory, bodily sensation, media, and sleep patterns available as ordinary explanations.

The journey is: search → `repeating-the-same-dream` or the broad recurring guide → compare versions and emotional shifts → follow a relevant symbol or emotional guide only if it adds context → Dream Compass for a personalized comparison of the reader’s recurring details. The hub does not force a reader through a directory, and it does not create a second recurring discovery layer.

## Semantic distinctions

- Recurring dream versus ordinary symbol: recurrence changes the question from “what does this symbol mean?” to “what does its return and variation show?”
- Recurring dream versus déjà vu: a full repeated sequence differs from a brief recognition experience.
- Recurring dream versus reliving a memory: a recurring dream may borrow a memory but is organized by the repeated dream pattern and its changing response.
- Recurring dream versus prophecy: repetition alone is not evidence of future events.
- Recurring dream versus diagnosis or trauma: repetition can accompany stress, grief, memory, bodily sensations, or unresolved concerns, but it does not establish a condition.

## Editorial findings

The recurring-dream problem is architectural as much as lexical. The library could easily proliferate into recurring snake, recurring falling, recurring chase, and recurring house pages that repeat the same method. The stronger approach is one hub that explains sequence comparison, with individual symbol pages linked only when the recurring dream’s content creates a genuinely different next question.

The most useful interpretive variables are what remains constant, what changes in the setting or sequence, whether the dreamer gains or loses agency, how the ending develops, and whether emotional intensity escalates or softens. The hub also preserves ordinary sleep explanations without treating them as dismissive alternatives.

## Validation

- Related-link audit: passed with 0 unresolved references.
- Dream-quality audit: 370 indexed pages; P0 0, P1 48, P2 215, P3 91, P4 16; reader-test failures 0; collision count 84.
- Content-quality audit: no recurring page rewrite was needed; library audits continue to report 0 repeated fields and 0 pages without direct openings.
- Editorial-status consistency: `repeating-the-same-dream` is canonically marked KEEP; no Merge Review or Noindex decision was changed.
- ESLint: passed for modified files.
- Production build: passed; 628 static routes generated.
- Route checks: HTTP 200 for `/guides/recurring-dreams`, `/dreams/repeating-the-same-dream`, and `/sitemap.xml`.
- Canonical/sitemap: the recurring hub appears once in the sitemap, has its expected canonical, and is not noindex. No redirects, URLs, or indexing directives were changed.
- Browser inspection: desktop and mobile hub renders and a mobile `repeating-the-same-dream` render were inspected. The first-screen answer, headings, spacing, and text wrapping were readable with no horizontal overflow observed. The site-wide privacy-choice surface appeared in one capture and was not cluster content.

## Remaining gaps

The library has only one dedicated recurring-dream page, so symbol-specific recurring journeys remain intentionally uncovered. That is not a deficiency to solve with doorway pages. Future work could improve Dream Compass history comparison and add a page only if a recurring experience develops independent intent and enough distinct reasoning.

## Post-cluster recommendation

Recurring Dreams is the final planned topical-cluster implementation in this sequence. Do not begin another cluster or broad cleanup automatically. Move next to a library-wide post-cluster phase: review cross-cluster linking, inspect the aggregate semantic-collision set, evaluate hub-to-page journeys with real usage data, and prioritize human editorial repairs based on reader evidence rather than adding more topic infrastructure.
