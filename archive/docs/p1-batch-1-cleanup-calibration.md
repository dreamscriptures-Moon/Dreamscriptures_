# Phase 4.5 — P1 Batch 1 cleanup and calibration

**Review date:** 2026-08-31  
**Routes reviewed:** `seeing-jesus`, `water-rising`, `seeing-your-future-self`, `confessing-your-love-to-someone`, `hair-falling-out`, `water`, `dog-bite`, `cheating-on-your-partner`  
**P1 Batch 2:** Not started.

## Cleanup applied

The renderer now honors an editorial `compactEnding` control for these eight pages. It removes inherited, low-value ending sections that were competing with the interpretation: generic emotional pathways/themes, semantic-authority blocks, tags, broad category exploration, generic related reading, and the duplicate Continue Exploring rail. The reader-facing journey now ends with:

**Interpretation → Reflection → Related Dreams → Dream Compass → trust note**

Related Dreams remains supporting exploration; Dream Compass is the single primary next step.

## Final page judgments

| Page | Final judgment | Anchor integrity | Neighbor outcome | Remaining weakness |
|---|---|---|---|---|
| Seeing Jesus | **Model-quality** | Passes from answer through discernment | Presence/faith is distinct from speaking/conversation | Scripture context should remain concise and personal-faith aware. |
| Water Rising | **Model-quality** | Passes; scale is replaced by boundary, pace, and response | Distinct from broad Water and Tsunami | Automated similarity remains because the subject is necessarily adjacent to Water. |
| Seeing Your Future Self | **Good** | Passes; projection versus prediction remains visible | Distinct from The Future and Seeing Your Double | Short page could use one more lived example if reader feedback shows uncertainty. |
| Confessing Your Love | **Good** | Passes; disclosure and response remain central | Direction is now explicit versus receiving a confession | Neighbor similarity remains high; keep the opening distinction prominent. |
| Hair Falling Out | **Good** | Passes; visible, difficult-to-hide change carries through | Distinct from Hair Growing Rapidly and Teeth Falling Out | Broad body-related taxonomy still deserves later category-wide review. |
| Water | **Model-quality** | Passes; movement × condition × position remains the framework | Broad hub is distinct from rising water, flood, and ocean | Breadth naturally creates collisions; specialized links must explain their narrower focus. |
| Dog Bite | **Good** | Passes; rupture in expected safety remains visible | Distinct from Dog’s broader relationship symbolism | Keep the bite-specific warning/relationship context above generic animal symbolism. |
| Cheating on Your Partner | **Good** | Passes; behavior versus emotional need remains central | Direction of trust is explicit versus partner-cheating page | Relationship pages need continued control of repeated “emotional” phrasing. |

## Inherited material removed or adapted

- **Seeing Jesus:** removed placeholder fragments and replaced the keyword-led “closer look” with encounter, faith, and discernment reasoning.
- **Water Rising:** removed emotion-only water definitions; retained source, pace, boundary, exits, and response.
- **Seeing Your Future Self:** removed any implication of foreknowledge; adapted future imagery into projected identity and values.
- **Confessing Your Love:** removed repeated vulnerability/romance lists; adapted the confession into a disclosure-and-response process.
- **Hair Falling Out:** removed the generic identity/confidence catalogue; retained bodily sensation, visibility, and non-diagnostic caution.
- **Water:** removed broad element definitions that repeated the opening; retained movement, condition, depth, position, and personal history.
- **Dog Bite:** removed the betrayal list and standalone snake comparison; adapted them into expected safety, warnings, and boundary context.
- **Cheating on Your Partner:** removed the repetitive emotional catalogue; retained guilt, novelty, secrecy, tenderness, and relationship-direction distinctions.

## Measurement

| Measure | Before repair | After repair | After inherited cleanup |
|---|---:|---:|---:|
| Full-library indexed pages | 370 | 370 | 370 |
| P0 pages | 0 | 0 | 0 |
| P1 pages | 51 | 50 | 50 |
| Reader-test failures | 0 | 0 | 0 |
| Unresolved related references | 0 | 0 | 0 |
| Duplicate fields | 0 | 0 | 0 |

The eight individual automated scores did not all rise after cleanup because the scorecard still measures semantic breadth and neighbor collision. The rendered experience did improve: generic tail sections are no longer present on these routes, and the primary next step is unambiguous.

## What improved

1. The anchor now survives the full page instead of being diluted by inherited taxonomy and discovery blocks.
2. Page endings no longer ask the reader to choose between several generic navigation systems.
3. The four lenses remain only where they add different reasoning; scenario and reflection sections now carry the contextual work.
4. Relationship direction and water breadth are visible before related links, making semantic neighbors easier to understand.

## What remains generic

- The global audit still reports generic similarity on broad hubs and close relationship pairs. This is a measurement and library-architecture issue, not a reason to add more copy.
- Some older pages outside this batch still contain duplicated behavior prose; that is deferred to later P1 batches.
- Visual browser screenshots were not generated in this environment; route-level HTML checks confirmed all eight pages contain Dream Compass and omit generic Related Reading/Explore blocks. The production build is the final composition check.

## New editorial principle

**Composition is part of authorship.** A page is not repaired when its authored fields are strong; every inherited section rendered after composition must either deepen the anchor or be removed. For broad hubs, concise contextual routing is more valuable than additional generic interpretation.

## Validation

- Content-quality audit: passed; no unresolved related references or repeated fields.
- Dream-quality audit: passed; 0 P0, 50 P1, 0 reader-test failures.
- ESLint: passed.
- Production build: passed; all 623 static routes generated.

## Scaling decision

**The complete rendered pages are now ready to serve as the basis for scaling P1 repairs.** Proceed to Batch 2 only after this report is accepted, using the inherited-content, anchor-placement, detail-reason, neighbor-visibility, and composition-as-authorship gates. Do not treat the unchanged numerical scores as a reason to inflate pages.
