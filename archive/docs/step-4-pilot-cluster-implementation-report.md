# Step 4 — Pilot cluster implementation report

**Date:** 2026-08-31  
**Clusters:** Snakes, Water, Relationships

## Executive result

The three pilot clusters now form topic pathways rather than flat collections of links. Snake and Water retain their existing guide URLs; Relationships adds the single hub authorized by the topic map. No new individual dream pages, redirects, canonical changes, noindex rules, merges, or doorway variants were created.

The three cluster dependencies were repaired before their hubs were treated as complete. Their canonical editorial decisions are now `KEEP`:

- `snake-bite-on-the-leg`: contact that changes mobility, support, escape, or pace.
- `looking-at-a-river`: observing directional change without entering it.
- `engagement`: consent and readiness at the promise-before-marriage stage.

## Snake cluster

### Hub changes

`/guides/snake-dreams` now begins with a decision framework: behavior, the dreamer's response, setting, contact, and personal associations. Psychological, cultural, biblical, and spiritual associations are presented as frameworks rather than evidence of betrayal, attack, prophecy, or future harm.

The previous stale references (`snake-in-house`, `snake-in-bed`, `snake-bite`, and `multiple-snakes`) were replaced by reviewed canonical destinations. The hub now organizes 17 pages into seeing/identifying, pursuit/contact/injury, private space/relationship, and number/condition/response.

### Repaired dependency

`snake-bite-on-the-leg` preserves the existing useful distinction that the leg changes the consequence of the bite. Generic setback language was adapted into movement, support, treatment, and escape reasoning. Scenarios now distinguish being stopped, continuing to walk, receiving treatment, and suffering no injury. Reflection questions address destination, exact location, mobility, warning behavior, help, and possible bodily input.

### Individual pages included

Snake; Black Snake; White Snake; Cobra; Giant Snake; Friendly Snake; Being Chased by a Snake; Getting Bitten by a Snake; Snake Bite on the Hand; Snake Bite on the Leg; Snake Wrapping Around You; Snake in the House; Sleeping with a Snake; Seeing Many Snakes; Two-Headed Snake; Seeing a Dead Snake; Killing a Snake.

### Internal-link changes

Individual pages now link back to the hub through their own editorial group. The pathway excludes the current page and shows at most three nearby experiences, so the reader sees a comparison rather than a repeated cluster directory. The repaired leg-bite page links contextually to broad bite, hand bite, and pursuit interpretations.

### Remaining gaps

Several color/species pages remain close semantic neighbors and should be monitored during later page repair. The pilot does not justify additional snake-color or “snake in dream” variants.

## Water cluster

### Hub changes

`/guides/water-dreams` now treats water as an object, boundary, environment, resource, or force. Its decision framework uses condition, movement, scale, containment, position, agency, and ordinary physical/environmental input. It no longer teaches “water equals emotion” as a complete answer.

The nonexistent `lost-at-sea` placeholder was removed. Twenty-three reviewed pages are grouped by water condition, crossed boundaries, immersion, observation/receiving/crossing, and travel on water.

### Repaired dependency

`looking-at-a-river` keeps the existing quiet observational quality while distinguishing watching from entering. Its new reasoning uses bank, current, destination, visibility, choice, and what passes downstream. Reflection questions address the opposite bank, decision to remain outside, changes in the current, loss or passage, and waking situations being observed.

### Individual pages included

Water; Calm Water; Clear Water; Dirty Water; Frozen Lake; Water Rising; Flood; Flooded House; Tsunami; Waves; Ocean; Being in the Ocean; Being Underwater but Calm; Breathing Underwater; Drowning; Falling or Swimming in Dirty Water; Looking at a River; Drinking Water; Waterfall; Rain; Walking on Water; Boat; Boat Sinking.

### Internal-link changes

The hub routes readers from broad water conditions to the specific action or boundary that occurred. Individual pages receive grouped hub pathways. Looking at a River links to broad Water and Clear Water only where those pages answer a natural next question.

### Remaining gaps

The Water category remains one of the library's weaker categories overall. Close pairs—Ocean/Being in the Ocean, underwater calm/breathing underwater, and broad Water/condition pages—still require continued human review. No evidence currently justifies `lost-at-sea` as a new URL.

## Relationship cluster

### Hub changes

`/guides/relationship-dreams` was created as the one new page approved by the topic map. Its anchor is the relationship event and its direction: who approached, withdrew, confessed, betrayed, refused, or proposed, and how the dreamer responded. It explicitly states that a dream cannot reveal another person's private thoughts or guarantee contact, cheating, marriage, breakup, pregnancy, or reconciliation.

Twenty-eight pages are organized into distance/separation, ex-partners and memory, trust/conflict/communication, commitment/consent, and closeness/disclosure. `dreaming-about-someone` remains a supporting guide rather than being repurposed as the hub. The merge-review `marrying-a-stranger` page is not exposed; the hub uses the reviewed destination `getting-married-to-a-stranger`.

### Repaired dependency

`engagement` retains the valuable “in-between stage” idea and develops it through proposal direction, free consent, ring fit, witnesses, public pressure, and the feeling after the answer. The page distinguishes an engagement promise from marriage, forced commitment, and ring-object intent. It does not predict a proposal or claim knowledge of another person's plans.

### Individual pages included

Breakup; Being Rejected; Abandonment; Being Left Behind; Seeing Someone You Miss; Ex-Partner; Ex Texting You; Arguing With Your Ex; Marrying an Ex; Meeting Someone From Your Past; Old Friend; Partner Cheating on You; Cheating on Your Partner; Unable to Call or Communicate; Confrontation/Argument; Marriage; Engagement; Forced Marriage; Saying No at a Wedding; Wedding Day Drama; Marrying a Crush; Marrying a Celebrity; Marrying Someone You Know; Getting Married to a Stranger; Confessing Your Love; Someone Confessing Their Love; Kissing Someone; Having Sex.

### Internal-link changes

Relationship pages now receive a contextual route to their event group and the hub. The hub links to the people-in-dreams guide, Relationship Confusion pathway, and Family interpretation with an explanation of when each route is more useful.

### Remaining gaps

The singular/plural Relationship category split remains taxonomy debt outside this implementation. Marriage variants and rejection/abandonment/left-behind pages remain collision-sensitive and should stay in human review samples.

## Cross-cluster findings

### Repeated architecture problems

- The old generated hubs placed a flat card collection before a useful interpretation method.
- Cluster source lists contained stale or speculative slugs that runtime filtering could hide.
- Generic lower-page discovery modules duplicated the same destinations and competed with Dream Compass.
- The shared reading-time estimator could not see custom-rendered hub sections; cluster pages now calculate reading time from the content they actually render.
- A new cluster supplied only through dynamic guide pre-rendering produced a production-only 404. The Relationship hub now has an explicit route while continuing to use the shared cluster data and renderer.

### Useful implementation patterns

- Put the interpretation method before the links.
- Group by the detail that changes meaning, not by shared vocabulary.
- Let individual pages show only nearby experiences from their own group.
- Keep framework limits adjacent to spiritual or predictive material.
- End the hub with one progression into Dream Compass instead of adding another generic discovery grid.

### Duplicate and overlap issues

The pilot deliberately excludes `marrying-a-stranger` and `lost-at-sea`. It preserves directional pairs only where who acts changes the reader's question, such as cheating/being cheated on and confessing/receiving a confession. No merges were executed.

### Unnecessary page types avoided

No “seeing a snake,” “snake in dream,” new color/species, `lost-at-sea`, “relationship dream meaning” variant, soulmate, or predictive ex-return page was created.

## Validation evidence

- Content-quality audit: 370 indexable pages; 76 strong, 209 good, 85 needs enrichment; zero repeated fields; zero missing direct openings; zero unresolved related references.
- Dream-quality audit: P0 0, P1 49, P2 213, P3 92, P4 16; zero reader-test failures.
- Pilot cluster integrity audit: 3 clusters, 68 core destinations, zero unresolved references, zero duplicate group placements, no prohibited merge-review destination, and all three dependencies canonically `KEEP`.
- Related-link validation: zero unresolved references.
- Semantic duplication: no new exact repeated fields; the existing library report still identifies known neighbor collisions for future human review.
- Orphan check: every pilot core page appears in exactly one hub group and each group renders a route back from its member pages.
- Metadata check: the three hub descriptions are distinct; repaired dependency metadata is specific to the page anchor.
- Canonical/indexing check: all six implementation routes use their intended canonical URLs; no indexing directives were changed.
- Sitemap: Snake, Water, and Relationship hub URLs are present; `lost-at-sea` is absent.
- ESLint: pass.
- Production build: pass, 624 static pages generated.
- Production route checks: all three hubs and all three repaired dependencies return HTTP 200.
- Browser review: Relationship hub and Looking at a River inspected in desktop (1440×1200) and mobile (500×900) headless Edge. First-screen answer, hierarchy, navigation, paragraph width, and card containment passed with no horizontal overflow. This is representative pilot validation, not a claim of library-wide mobile inspection.

## Cluster quality review

| Test | Snakes | Water | Relationships |
|---|---|---|---|
| Coverage | Covers all 17 reviewed core experiences | Covers 23 condition/action/boundary experiences | Covers 28 event-oriented relationship experiences |
| Depth | Explains encounter variables and framework limits | Explains condition, movement, scale, position, and agency | Explains event direction, consent, memory, and evidence limits |
| Distinctiveness | Contact, body location, setting, and response are visible | Close water states are routed by the detail that changes agency | Directional and consent distinctions are explicit |
| Connectivity | Grouped hub ↔ page pathways | Grouped hub ↔ page pathways | Grouped hub ↔ page plus people/family/emotion pathways |
| Navigation | Method → matching group → context → Compass | Broad condition → specific experience → Compass | Relationship event → relevant interpretation → Compass |
| Trust | No automatic omen or spiritual-attack claim | Symbolism separated from bodily/weather inputs | No private-thought or future-relationship claims |
| Restraint | No new individual pages | `lost-at-sea` not created | One approved hub; no wording variants |

## Final recommendation

The three-cluster architecture is ready to expand **one cluster at a time** to Death, Houses, Pregnancy, Falling, Being Chased, Spiritual Dreams, and Recurring Dreams. Before the next new hub, retain the explicit-route pattern or deliberately fix and test dynamic new-cluster pre-rendering; a successful build alone is not sufficient route evidence. Continue using grouped contextual pathways and the production HTTP/mobile gate. Do not expand all seven clusters simultaneously.
