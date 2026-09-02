# Step 4 — Pilot topical-authority map

**Date:** 2026-08-31  
**Pilot clusters:** Snakes, Water, Relationships  
**Phase:** Architecture and inventory only. No hub, guide, dream-page, indexing, canonical, redirect, or URL changes were made.

## Executive finding

DreamScriptures already has enough underlying material to build all three pilot clusters without programmatically generating new dream pages.

- **Snakes** and **Water** already have generated cluster-guide routes, but their maps are incomplete, contain stale/noncanonical slugs, and offer generic orientation rather than a genuine decision framework.
- **Relationships** has strong individual pages, a broad `dreaming-about-someone` guide, category pathways, and several natural sub-hubs, but no coherent relationship-dream architecture.
- The correct next implementation is to strengthen three underlying Improve pages that sit inside the pilots, repair the existing Snake and Water cluster sources, and add one intentionally scoped Relationships hub. No additional individual dream URL is currently justified.

## Existing architecture

### Shared infrastructure

- Cluster definitions: `data/clusters.js`
- Cluster composition: `lib/clusterGuides.js`
- Cluster renderer: `app/components/ClusterGuidePage.jsx`
- Guide route: `/guides/[slug]`
- Individual dream route: `/dreams/[slug]`
- Category routes: `/categories/[category]`
- Emotion routes: `/emotions/[slug]`
- Dream-level contextual pathways: related dreams, emotional pathways, cluster pathway, and Dream Compass CTA

The current generic cluster renderer provides an introduction, a flat card grid, emotional labels, and related category links. It does not yet explain how interpretations diverge within a topic, organize pages by reader question, label psychological/spiritual frameworks, or route readers from one kind of experience to another.

## Cluster 1: Snakes

### Current inventory

**Existing organizing page:** `/guides/snake-dreams`, generated from `snake_dreams` in `data/clusters.js`.  
**Broad interpretation:** `/dreams/snake`.  
**Existing individual pages (17):**

- Core: `snake`
- Behavior/contact: `being-chased-by-a-snake`, `getting-bitten-by-a-snake`, `snake-bite-on-the-hand`, `snake-bite-on-the-leg`, `snake-wrapping-around-you`, `killing-a-snake`
- Setting/relationship: `snake-in-the-house`, `sleeping-with-a-snake`, `friendly-snake`
- Number/condition: `seeing-many-snakes`, `two-headed-snake`, `seeing-a-dead-snake`, `giant-snake`
- Species/color: `cobra`, `black-snake`, `white-snake`

**Existing general guide support:** `common-dream-symbols`; spiritual material is embedded in individual pages rather than supported by a dedicated snake guide.  
**Dominant category pathways:** Transformation, Emotional Awareness, Hidden Emotions, Fear, Animals, Spirituality.  
**Natural emotional pathways:** fear, distrust, vigilance, curiosity, protection, feeling trapped, personal change, uncertainty.

### Current structural problems

The source cluster names 11 dream slugs, but four are stale or nonexistent:

- `snake-in-house` → canonical `snake-in-the-house`
- `snake-in-bed` → the current closest page is `sleeping-with-a-snake`; this must be an editorial mapping, not silent normalization
- `snake-bite` → no current canonical page; use the broad bite page `getting-bitten-by-a-snake` and expose hand/leg as specific outcomes
- `multiple-snakes` → canonical `seeing-many-snakes`

The cluster omits important current pages, including chase, bite locations, killing, sleeping, dead snake, two-headed snake, and many snakes. Its introduction collapses fear, enemies, healing, wisdom, temptation, transformation, awakening, and spiritual warfare into undifferentiated lists.

The broad Snake page has strong connectivity—15 inbound related references and nine outbound links—but the generated guide does not explain the architecture behind those relationships. High-collision pairs include Snake/Chased by a Snake, Snake/Snake in the House, Snake/Friendly Snake, and general bite/location-specific bite pages.

### Hub purpose

> **The Snake Dreams hub should help readers determine which part of the encounter changes meaning: the snake's behavior, contact with the body, location, condition, the dreamer's relationship to snakes, or the interpretive framework being used.**

This is information individual pages cannot efficiently provide alone.

### Proposed topic map

**Hub:** `/guides/snake-dreams` — retain and substantially revise; do not create another snake hub.

**Core orientation:**

- Why personal relationship with snakes comes before a fixed definition
- Seeing versus being pursued versus being bitten
- Fear, calm, fascination, and protection
- Recent encounters, media, and bodily sensations
- Psychological, symbolic, cultural, and biblical/spiritual perspectives as separate frameworks
- What a snake dream cannot prove: betrayal, attack, spiritual warfare, prophecy, or future harm

**Primary routes:**

1. **You saw or observed it:** Snake, Black Snake, White Snake, Cobra, Giant Snake
2. **It approached or pursued:** Chased by a Snake, Friendly Snake, Snake Wrapping Around You
3. **It made contact or injured you:** Getting Bitten, Bite on Hand, Bite on Leg
4. **It entered private space:** Snake in the House, Sleeping with a Snake
5. **Its number or condition changed the question:** Many Snakes, Two-Headed Snake, Dead Snake, Killing a Snake

**Emotional/contextual pathways:** Fear, Feeling Trapped, Distrust/Relationship Confusion, Protection, Transformation.  
**Spiritual/Biblical pathway:** one labeled section in the hub plus links to the site's broader spiritual methodology; no new “biblical snake meaning” doorway page.  
**Dream Compass pathway:** ask what the snake did, where it appeared, whether contact occurred, and how the reader responded; then continue to personalized exploration.

### Independent-page decisions

- Retain behavior and body-location pages only because chase, bite, hand function, leg mobility, private space, and constriction create different reader problems.
- Do not create “snake in dream,” “seeing a snake,” “snake interpretation,” or other broad wording variants.
- Do not create separate pages for every snake color or species unless existing search intent and interpretation remain genuinely distinct after review.
- `snake-bite-on-the-leg` remains Improve and should be repaired before the hub is launched as complete.

### Genuine gaps

- A hub-level comparison of encounter types and interpretive frameworks.
- Clear routing from general bite to hand/leg outcomes.
- Contextual link explanations between the hub and core pages.

No new individual snake dream page is required.

## Cluster 2: Water

### Current inventory

**Existing organizing page:** `/guides/water-dreams`, generated from `water_dreams`.  
**Broad interpretation:** `/dreams/water`.  
**Core existing interpretations (23):**

- General/scale: `water`, `ocean`, `being-in-the-ocean`
- Condition: `calm-water`, `clear-water`, `dirty-water`, `frozen-lake`
- Movement/containment: `water-rising`, `waves`, `flood`, `tsunami`, `waterfall`, `rain`, `flooded-house`
- Dreamer relationship: `looking-at-a-river`, `drinking-water`, `walking-on-water`, `breathing-underwater`, `being-underwater-but-calm`, `drowning`, `falling-or-swimming-in-dirty-water`
- Vessel/navigation: `boat`, `boat-sinking`

Related creature, cleansing, and ritual pages such as Fish, Crocodile, Shower, and Baptism may be contextual pathways but should not be treated as core water interpretations merely because water appears.

**Dominant category pathways:** Transformation, Emotional Awareness, Healing, Hidden Emotions, Nature, Anxiety, Spirituality.  
**Natural emotional pathways:** overwhelm, calm, fear, lack of control, emotional clarity, healing, uncertainty, survival.

### Current structural problems

The source cluster includes one missing page, `lost-at-sea`, and omits the broad Water page itself, Ocean, underwater variants, drinking, river observation, frozen water, waterfall, flooded house, walking on water, and dirty-water immersion.

Its orientation currently teaches “water equals emotion,” which is too blunt for the library. The repaired Water page already supplies a stronger framework: movement, condition, depth, and the dreamer's position. The hub should organize and extend that framework rather than repeat generic cleansing/overwhelm language.

The Water page has 20 inbound contextual references but only three outbound routes. Important collision pairs include Water/Clear Water, Water/Rising Water, Dirty Water/Swimming in Dirty Water, Ocean/Being in the Ocean, Underwater but Calm/Breathing Underwater, and Boat/Boat Sinking.

### Hub purpose

> **The Water Dreams hub should help readers identify whether condition, movement, scale, containment, bodily position, or ability to act is the part of the dream that carries meaning.**

### Proposed topic map

**Hub:** `/guides/water-dreams` — retain and substantially revise; do not create another general water page.

**Core orientation:**

- Why “water means emotions” is only a starting point
- Condition: clear, dirty, frozen, calm
- Movement: still, rising, flowing, falling, waves
- Scale and boundary: cup/river/ocean/flood/tsunami/house
- Position and agency: observing, entering, swimming, drinking, breathing, drowning, crossing
- Personal history, real weather, thirst, bladder, temperature, and media exposure
- Spiritual cleansing traditions separated from prediction or universal meaning

**Primary routes:**

1. **Condition of water:** Calm, Clear, Dirty, Frozen
2. **Water crossing a boundary:** Rising Water, Flood, Flooded House, Tsunami
3. **The dreamer inside water:** Ocean, Being in the Ocean, Underwater but Calm, Breathing Underwater, Drowning, Swimming in Dirty Water
4. **Watching, receiving, or crossing water:** Looking at a River, Drinking Water, Waterfall, Rain, Walking on Water
5. **Travelling on water:** Boat, Boat Sinking

**Emotional/contextual pathways:** Emotional Overwhelm, Lack of Control, Peace, Healing, Fear, Survival Pressure.  
**Spiritual pathway:** cleansing, baptism, and walking-on-water traditions as clearly labeled optional contexts; Baptism remains its own ritual-intent page, not a generic Water child.  
**Dream Compass pathway:** condition → movement → position → response → waking context.

### Independent-page decisions

- Keep Clear and Dirty Water because visibility/contact changes the reader problem.
- Keep Rising Water, Flood, and Tsunami because pace, boundary, scale, and warning differ.
- Keep underwater variants only while calm survival, ability to breathe, and active drowning remain visibly distinct.
- Do not create `lost-at-sea` merely to fill the stale cluster slot. Existing Ocean/Being in the Ocean and island pages cover the likely intents unless evidence identifies a separate navigation question.
- `looking-at-a-river` remains Improve and should be repaired before the Water cluster is declared complete.

### Genuine gaps

- Hub-level comparison of water condition, movement, scale, position, and agency.
- Better contextual routing among closely related water pages.
- A clear explanation of when ordinary bodily or environmental input may dominate symbolism.

No new water dream URL is currently required.

## Cluster 3: Relationships

### Current inventory

**Existing broad guide:** `/guides/dreaming-about-someone`. It explains why people appear in dreams, emotional association, people from the past, loved ones, and deceased people.  
**Existing broad pages:** `family`, `ex-partner`, and `marriage` each function as partial sub-hubs. There is no `relationships` dream slug and no relationship cluster definition.  
**Relevant category pathways:** Relationships, Relationship, Love, Identity, Self Awareness, Life Transitions, Hidden Emotions, Anxiety. The singular/plural category duplication should be treated as taxonomy debt, not as justification for more pages.

**Core relationship interpretations:**

- Attachment/separation: `abandonment`, `being-left-behind`, `being-rejected`, `breakup`, `seeing-someone-you-miss`
- Ex/past relationship: `ex-partner`, `ex-texting-you`, `arguing-with-your-ex`, `marrying-an-ex`, `meeting-someone-from-your-past`, `old-friend`
- Trust/conflict/communication: `partner-cheating-on-you`, `cheating-on-your-partner`, `failure-to-call-or-communicate`, `confrontation-argument`
- Commitment/marriage: `marriage`, `engagement`, `forced-marriage`, `saying-no-at-a-wedding`, `wedding-day-drama`, `marrying-a-crush`, `marrying-a-celebrity`, `marrying-someone-you-know`, `getting-married-to-a-stranger`
- Closeness/disclosure: `confessing-your-love-to-someone`, `someone-confessing-their-love-to-you`, `kissing-someone`, `having-sex`
- Family belongs as a linked sub-ecosystem rather than being mixed indiscriminately with romantic pages.

The `dreaming-about-someone` guide is useful but repetitive and broader than romantic relationships. It should remain an explanatory guide, not silently become the relationship hub.

### Current structural problems

- No organizing relationship hub explains whether the reader's question concerns attachment, trust, communication, commitment, intimacy, separation, or memory.
- Ex Partner and Marriage have useful inbound/outbound networks, but they operate as isolated sub-hubs.
- The broad keyword/category surface produces many false relationships: family, baby, house, death, and animal pages are sometimes pulled into relationship discovery without a clear reader reason.
- High-risk neighbor pairs include cheating direction, confession direction, marriage variants, ex communication, rejection/abandonment/left behind, and stranger marriage variants.
- `marrying-a-stranger` is already in Merge Review. The architecture must point to the surviving destination rather than designing around both.
- `engagement` and `baby-smiling` remain Improve. Engagement is a core commitment route and should be repaired before cluster completion; Baby Smiling should stay in the family/baby ecosystem rather than the core romantic cluster.

### Hub purpose

> **The Relationship Dreams hub should help readers identify whether the dream is about the actual relationship, an attachment pattern, trust, communication, commitment, separation, intimacy, or a quality associated with another person—and clarify what the dream cannot reveal about that person's thoughts or future behavior.**

### Proposed topic map

**New hub candidate:** `/guides/relationship-dreams`. This is the only new page recommended by the pilot map. It has a purpose not fulfilled by `dreaming-about-someone`: organizing relationship events and directing the reader to the right interpretive problem.

**Supporting guide retained:** `/guides/dreaming-about-someone` — explain person-as-memory/association and literal-versus-representative interpretation; remove unnecessary overlap only during implementation review.

**Primary routes:**

1. **Who appeared and what they represent:** Dreaming About Someone guide, Family, Ex Partner, Old Friend
2. **Distance and separation:** Breakup, Rejection, Abandonment, Left Behind, Missing Someone
3. **Trust and conflict:** Partner Cheating, Cheating on Partner, Arguing with Ex, Communication Failure
4. **Commitment and consent:** Marriage, Engagement, Forced Marriage, Saying No at a Wedding, Wedding Drama
5. **The identity of a proposed partner:** Crush, Ex, Celebrity, Known Person, Stranger destination after merge review
6. **Closeness and disclosure:** Confessing/Receiving Love, Kissing, Sex

**Emotional/contextual pathways:** Fear of Abandonment, Relationship Confusion, Unspoken Feelings, Difficulty Letting Go, Wanting Closure, Past Relationships, Vulnerability, Trust.  
**Spiritual pathway:** optional, labeled treatment of covenant/commitment traditions; no “your ex is returning,” soulmate, destiny, or guaranteed marriage language.  
**Dream Compass pathway:** person → relationship direction → action → emotional response → evidence outside the dream.

### Independent-page decisions

- Preserve direction-of-trust pairs: cheating versus being cheated on; confessing versus receiving a confession.
- Preserve distinct commitment experiences only when consent, stage, partner identity, or ceremony changes the question.
- Do not create pages for “relationship dream meaning,” “dreaming about love,” and minor wording variants beyond the single proposed hub.
- Complete the existing stranger-marriage Merge Review before exposing both pages in the hub.
- Repair `engagement` before declaring the commitment pathway complete.

### Genuine gaps

- One relationship hub that organizes events rather than merely listing people.
- Explicit direction-of-trust and consent routing.
- Cleaner category taxonomy and contextual links between current sub-hubs.

No new individual relationship interpretation is required.

## Before / proposed architecture

| Cluster | Previous structure | Proposed structure | New pages |
|---|---|---|---:|
| Snakes | Generic generated guide with seven valid listed pages and four stale references; broad Snake page carries most connectivity. | Retain route; organize by observation, pursuit, contact, private space, number/condition, and interpretive framework; include all 17 reviewed pages selectively. | 0 |
| Water | Generic generated guide with ten valid listed pages and one missing page; “water equals emotion” orientation. | Retain route; organize by condition, movement, boundary/scale, position/agency, and vessel; select from 23 core pages. | 0 |
| Relationships | No cluster hub; broad people guide plus isolated Family, Ex, and Marriage pathways. | Add one event-oriented hub; retain the people guide as supporting explanation; organize around attachment, trust, communication, commitment, separation, and closeness. | 1 hub |

## Pages to improve before hub implementation

The Step 4 hierarchy requires strong underlying pages before presenting a cluster as complete:

- Snake: `snake-bite-on-the-leg`
- Water: `looking-at-a-river`
- Relationships: `engagement`

`baby-smiling` remains in the broader Family/Baby ecosystem and is not a blocker for the core Relationships pilot.

## Recommended implementation order

1. Repair the three cluster-critical Improve pages above as one small cross-cluster dependency batch.
2. Correct Snake and Water cluster slug maps and remove the nonexistent `lost-at-sea` placeholder.
3. Extend cluster data from flat `dreams` lists to editorial groups with contextual descriptions and explicit framework sections.
4. Revise `/guides/snake-dreams` around encounter type and trust boundaries.
5. Revise `/guides/water-dreams` around condition, movement, scale, position, and agency.
6. Create `/guides/relationship-dreams` only after its hub brief and grouped links are implemented; retain `dreaming-about-someone` as a supporting guide.
7. Add deliberate hub ↔ core-page links and remove redundant cluster pathways that compete with the primary journey.
8. Validate each cluster separately before expanding Step 4 to Death, Houses, Pregnancy, Falling, Chased, Spiritual, or Recurring Dreams.

## Cluster completion criteria for the pilots

Each pilot is complete only when:

- the hub answers its decision questions before presenting links;
- every linked page has independent intent and a contextual reason;
- cluster-critical Improve pages are repaired;
- stale and nonexistent slugs are absent;
- merge-review duplicates are not presented as equal destinations;
- emotional, spiritual, practical, and ordinary-input perspectives are clearly separated;
- the broad page, guide, emotions, and Dream Compass form one understandable journey;
- no new doorway-page variants are introduced;
- related links validate and no intended core page is orphaned;
- desktop and mobile rendering pass after implementation.

## Scaling constraint

Do not begin all ten clusters. Complete and evaluate these three pilots first. This map authorizes one possible new hub (`relationship-dreams`) and no new individual interpretation pages. Content implementation should begin only after the three named underlying pages are repaired or explicitly reclassified.
