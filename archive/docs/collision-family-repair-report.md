# Collision-Family Repair Report

Date: 2026-09-01

## Scope and method

The five families from `docs/collision-family-diagnostic.md` were repaired through the existing `dreamPagePriorityEnrichments` layer. Existing page structures and strong source prose were preserved; only targeted summaries, interpretive anchors, contextual reasoning, reflection questions, and trust framing were overlaid. No URLs, statuses, canonicals, redirects, indexing directives, or hubs were changed.

## Repairs by family

### Water

Repaired `water` and `being-in-the-ocean`.

- `water` now leads with movement, visibility, depth, position, and agency rather than a universal emotions definition.
- `being-in-the-ocean` now distinguishes immersion and distance from shore from the broader ocean environment.
- Both pages received conditional reasoning and specific reflection questions.
- Existing water variants (`clear-water`, `dirty-water`, `water-rising`, `boat-sinking`, and `looking-at-a-river`) remain separate KEEP destinations; no merge candidate was created.

Remaining weakness: `ocean` and several action variants still deserve a composed neighbor review so hub links make environment-versus-action distinctions visible.

### Money

Repaired `finding-money`, `receiving-money`, and `losing-money`.

- Finding now centers discovery, entitlement, and what happens after the encounter.
- Receiving centers source, consent, support, and obligation.
- Losing centers cause, threatened capacity, recovery, and responsibility.
- Each page explicitly states that dreams are not financial predictions.

Remaining weakness: the broad `money` and `stealing-money` pages still need a later composed pass; all five core money pages remain unclassified rather than being silently assigned a status.

### Spiritual

Repaired `seeing-god`, `speaking-to-god`, and `speaking-to-jesus`.

- Seeing versus speaking is now explicit: presence/distance/recognition versus exchange, remembered words, and response.
- Traditional or biblical association is separated from personal interpretation and from what the dream can prove.
- The pages acknowledge prayer, memory, worship, stress, and ordinary dream construction without dismissing faith.
- Existing KEEP pages such as `seeing-jesus`, `angel-numbers`, and `demonic-attack` were not overwritten.

Remaining weakness: `fighting-a-demon`, `casting-out-demons`, `church`, and `praying` need a future trust-focused review, but no merge/noindex decision is justified now.

### Relationships

Repaired `ex-partner`, `ex-texting-you`, `arguing-with-your-ex`, `confessing-your-love-to-someone`, and `someone-confessing-their-love-to-you`.

- The ex pages distinguish broad relationship memory from receiving a message and attempting to be heard or set a boundary.
- The confession pair now makes agency visible: speaking first versus receiving unexpected attention.
- The pages explicitly avoid claims about another person's thoughts, feelings, intentions, or future contact.
- Existing KEEP pages (`ex-texting-you`, `engagement`, `cheating-on-your-partner`, and `confessing-your-love-to-someone`) retain their canonical statuses.

Remaining weakness: marriage/intimacy pages still need a later composed review for repeated commitment language and discovery hierarchy.

### Baby / pregnancy

Repaired `pregnant`, `giving-birth`, `having-a-miscarriage`, `finding-a-baby`, `abandoned-baby`, and `baby-smiling`.

- Pregnancy is framed around development and context, never as biological evidence.
- Birth is distinguished by outcome/arrival; pregnancy by development; loss pages by grief, interruption, and helplessness.
- Finding and abandoned-baby pages now distinguish encounter, responsibility, absence of care, and setting.
- Baby smiling now treats positive affect as contextual rather than a promise of pregnancy or good fortune.
- Sensitive pages state what dream imagery cannot establish about pregnancy, fertility, miscarriage, health, or future events.

Remaining weakness: `holding-a-baby`, `baby-crying`, `baby-dying`, and baby-sex variants need a later safety-and-neighbor pass. `pregnant-with-twins`, `finding-a-baby`, and `being-in-labour` remain documented KEEP decisions; `baby-smiling` remains active IMPROVE pending broader queue work.

## Status and indexing impact

No editorial status changed. The authoritative status map remains `data/editorialStatuses.js`. No page was merged or noindexed, and no indexing or canonical behavior changed.

## Validation

- Related-link audit: unresolved references **0**.
- Dream-quality audit: 370 indexed pages; P0 **0**, P1 **44**, P2 **217**, P3 **93**, P4 **16**; reader-test failures **0**; collision prompts **85**.
- Content-quality audit: direct-opening failures **0**, repeated fields **0**, unexplained related links **0**; specific-reflection-question flags **144** (down from 150 before this repair).
- ESLint: passed.
- Production build: passed; 628 routes generated.
- Modified dream routes are included in the production build and retain existing canonical/indexing behavior.

## What improved versus what did not

The strongest measurable improvement was in direct-reader differentiation: four former P1 pages moved out of P1 without introducing any P0 or reader-test failures. Reflection coverage also improved because questions were derived from each family’s actual variables. The collision prompt count rose slightly because richer contextual fields create more detectable semantic relationships; this is not evidence of duplicate pages by itself and requires human neighbor review.

The work intentionally did not attempt to normalize every page, clear all unclassified statuses, or collapse related symbols. Remaining work should proceed in the family batches documented in the diagnostic, beginning with the still-unrepaired broad Money and Water neighbors and then the sensitive Spiritual and Baby groups.
