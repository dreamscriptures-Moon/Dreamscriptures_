# Phase 5A — Editorial framework audit

**Date:** 2026-08-31  
**Status:** Framework audit complete; no library-wide rewriting or P1 Batch 2 work started.

## Opening-cohort definition

The source currently contains **25** `shortSummary` openings. The previously benchmarked `family` page is excluded from the requested manual cohort, leaving **24 openings for this review**. This discrepancy is recorded rather than silently treating the source count as 24.

## 24 opening results

| Slug | Decision | Reader-facing reason |
|---|---|---|
| being-watched | Pass | Names permission, watcher identity, response, and discovery; exact intent is immediately clear. |
| hearing-a-voice | Pass | Distinguishes source, message, tone, and after-feeling instead of treating every voice as guidance. |
| hospital | Pass | Separates physical health from emotional recovery, dependence, and a situation needing care. |
| earthquake | Pass | Uses affected structure, response, and what remains standing as the interpretive variables. |
| public-speaking | Pass | Centers being seen/heard and audience response rather than generic performance anxiety. |
| breakup | Pass | Explicitly prevents prediction and distinguishes initiator, reason, reaction, and aftermath. |
| cat | Targeted revision | Behavior and waking relationship are present, but the opening still lists many broad cat traits before naming the strongest decision point. |
| dog | Targeted revision | Loyalty and behavior are useful, but the first sentence could distinguish expected safety from generic companionship more sharply. |
| horse | Pass | Control, movement, condition, and response make the opening specific enough for a broad animal page. |
| wolf | Targeted revision | Pack/belonging distinction is promising, but danger, loyalty, and instinct still read as a familiar symbolism list. |
| boat | Pass | Navigation, water condition, role, and control create a clear event-based framework. |
| seeing-a-stranger | Pass | Explains unfamiliarity as new situation or unrecognized self and conditions it on reaction. |
| childhood-home | Pass | Past/present relationship, home condition, and people make the exact setting meaningful. |
| baptism | Pass | Distinguishes participation, resistance, observation, faith, and nonreligious personal meaning. |
| being-left-behind | Pass | Separates who left, destination, pursuit, and relief versus abandonment. |
| butterfly | Pass | Behavior, condition, number, and life transition prevent a flat “transformation” answer. |
| new-house | Pass | House condition and reaction explain whether a new stage feels secure, empty, unfinished, or unstable. |
| bread | Pass | Personal nourishment and shared provision are separated through condition, giver, and response. |
| court-room | Pass | Role in the proceeding and feelings distinguish self-judgment, conflict, and accountability. |
| ladder | Targeted revision | Direction and stability are useful, but the opening could foreground what the dreamer was trying to reach before listing movement meanings. |
| shapeshifter | Pass | Identity uncertainty is tied to what changed and the reaction to discovering it. |
| heart-attack | Targeted revision | Strong non-diagnostic intent, but the opening needs a clearer distinction between bodily sensation, emotional overload, and fear for another person. |
| owl | Targeted revision | Behavior is named, but the “observation/hidden information/intuition” triad remains close to generic bird language. |
| burning-hands | Pass | What the hands were handling and whether healing occurred provide a distinctive control/responsibility frame. |

**Opening outcome:** 17 Pass, 7 Targeted revision, 0 Rewrite required. These are opening judgments only; a full-page review can still change the result.

## Conceptual repetition audit

The existing exact-duplicate audit remains clean for paragraphs and flags seven repeated sentences in unrelated legacy fields. A conceptual review of the rendered composition found four repeat patterns that need library-wide sampling:

1. **Emotional vs practical:** “stress/pressure/overwhelm” is often restated as a waking-life situation without adding a decision, behavior, or resource distinction.
2. **Symbolic vs spiritual:** symbol association is sometimes repeated with spiritual vocabulary but no faith-specific question, text, or discernment boundary.
3. **Opening vs core:** broad lists in inherited “A closer look” sections can repeat the more precise micro-summary.
4. **Scenarios vs core:** scenario cards occasionally paraphrase the preceding interpretation instead of explaining why a changed behavior or outcome matters.

The new review rule is to retain repetition only when the later passage changes the reader’s question or applies the anchor to a new context.

## Conditional-coverage baseline

Across 370 indexable pages:

| Signal | Pages |
|---|---:|
| Has structured scenarios | 78 |
| Has contextual variable text | 161 |
| Has reflection questions | 186 |
| Has all four core lenses | 338 |
| Has explained related-link reasons | 370 |

These counts are not quality scores. They show where conditional reasoning is likely to be absent or inherited rather than authored. The next audit must inspect whether the existing scenario/context actually changes meaning, not merely whether a field exists.

## Human-review sample design

The review sample will include:

- all 50 remaining P1 pages;
- all 85 needs-enrichment pages after triage;
- all pages marked Mostly yes by the generic-dictionary test;
- all high-collision pages;
- the weakest page in each category;
- a random P2/P3 sample stratified by category;
- all 16 P4/model pages.

The sample will be reviewed in rendered order using the 2 a.m. test, anchor test, inherited-content gate, detail-reason gate, neighbor-visibility gate, and four-lens distinction. It is designed to test the standard across categories, not to substitute a score for human judgment.

## Dependency decision

Phase 5A is ready to feed Phase 5B triage. No reflection-question, metadata, stale-reference, or broad discovery rewrite should begin until the 85-page decisions are recorded. The seven targeted opening revisions should be queued, not automatically rewritten, until their complete pages and nearest neighbors are reviewed together.
