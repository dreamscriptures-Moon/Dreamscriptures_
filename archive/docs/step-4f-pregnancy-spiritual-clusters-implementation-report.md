# Step 4F — Pregnancy and Spiritual Dreams Clusters

## Scope

Pregnancy and Spiritual Dreams were implemented in the same development phase but remain separate editorial systems. Recurring Dreams, Pregnancy-adjacent pages not supported by distinct intent, and unrelated future clusters were not expanded.

## Pregnancy architecture

### Inventory and hub decision

The inventory found existing pages for `pregnant`, `giving-birth`, `having-a-miscarriage`, `pregnant-with-twins`, `finding-a-baby`, `holding-a-baby`, `losing-a-baby`, and `breastfeeding-a-baby`. Baby pages were included only where the reader’s experience concerns care, encounter, or loss alongside pregnancy; generic baby symbolism was not treated as pregnancy by default. No suitable Pregnancy hub existed, so `/guides/pregnancy-dreams` was created as one organizing destination.

### Purpose and retained pages

The hub’s purpose is to distinguish carrying, expecting, losing, delivering, and encountering responsibility while keeping dream imagery separate from reproductive evidence. Eight existing pages are organized into four pathways: carrying a possibility (`pregnant`, `pregnant-with-twins`); arrival and delivery (`giving-birth`); loss and what cannot continue (`having-a-miscarriage`, `losing-a-baby`); and baby encounters/care (`finding-a-baby`, `holding-a-baby`, `breastfeeding-a-baby`). No new individual pregnancy pages were created.

### Semantic boundaries

Being pregnant centers inhabiting the role; giving birth centers arrival and aftermath; miscarriage centers feared or experienced loss; twins add multiplicity and capacity; finding/holding/feeding a baby center encounter and care rather than proof of pregnancy. The hub explicitly distinguishes pregnancy from fertility planning, bodily sensation, memory, family conversation, and symbolic creation.

### Dependency repair: `pregnant-with-twins`

- Previous status: unclassified P2, score 24.
- Current status: KEEP; P2, score 24 under the current audit.
- Anchor: doubling changes responsibility, identity, possibility, and capacity; twins are not a prediction.
- Changes: direct opening, wanted/unexpected and joy/fear distinctions, carrying-versus-delivery scenarios, five specific reflection questions, contextual related links, and Dream Compass transition.
- Inherited handling: generic “twins mean abundance/new beginnings” language was replaced with conditional reasoning; pregnancy-planning and bodily explanations were preserved.
- Trust: the page explicitly says it cannot prove pregnancy, twins, fertility, conception, or a baby’s future.

## Spiritual Dreams architecture

### Inventory and hub decision

The existing `/guides/spiritual-dreams-meaning` was a suitable long-form hub and was retained rather than creating a competing Spiritual Dreams URL. The inventory includes `seeing-god`, `seeing-jesus`, `speaking-to-jesus`, `speaking-to-god`, `angels`, `praying`, `church`, `going-to-heaven`, `cross`, `fighting-a-demon`, `demonic-attack`, `casting-out-demons`, `fighting-an-angel`, and `angel-numbers`.

The existing guide was strengthened with an explicit “Tradition, personal meaning, and limits” section. A separate cluster record supplies contextual grouping and routes from individual pages to the retained hub without changing its URL.

### Purpose and retained pages

The hub separates biblical/religious tradition, personal symbolism, cultural belief, psychological processing, and what the dream cannot establish. Four pathways organize 14 existing pages: sacred figures/presence; prayer, worship, and sacred places; conflict and spiritual threat; and signs/meaning-making. No new spiritual pages were created.

### Semantic boundaries

Seeing God and speaking to God differ through presence versus exchange; seeing Jesus and speaking to Jesus use the same distinction. Angels are treated as a figure/presence page, while fighting an angel or demon centers conflict and agency. Demonic attack is framed as the felt experience of threat, not verified activity. Angel numbers are treated as cultural meaning-making rather than guaranteed signs. The hub retains links to the existing long-form guide, emotion/context guidance, and psychology guide.

### Dependency repair: `demonic-attack`

- Previous status: unclassified P2 candidate.
- Current status: KEEP; P2, score 27.
- Anchor: a frightening perceived spiritual threat must be interpreted through fear, agency, sleep-boundary sensations, belief, and aftermath—not accepted as supernatural fact.
- Changes: direct opening, spiritual-tradition versus ordinary-processing distinction, inability-to-move and confrontation scenarios, five specific reflection questions, contextual links, and Dream Compass transition.
- Inherited handling: spiritual language was retained but bounded; generic certainty and threat escalation were removed or adapted.
- Trust: the page explicitly rejects proof of demons, curses, possession, prophecy, or required dangerous action and directs waking safety concerns to waking support.

## Reader journeys and linking

Pregnancy follows: search → specific pregnancy/birth/loss experience → Pregnancy hub → relevant care, delivery, or grief interpretation → Dream Compass. Spiritual follows: search → sacred figure/practice/conflict page → retained Spiritual Dreams guide for framework and discernment → relevant emotional or psychology context → Dream Compass. The clusters are not cross-linked merely because both can involve creation, belief, or life change. Related links use contextual reasons, and no additional discovery module was added.

## Findings

Pregnancy pages most often collapsed every experience into “new beginnings” and risked implying medical evidence. The effective repair was to make who was pregnant, whether the event was wanted, the stage/outcome, and the emotional response do the interpretive work. Spiritual pages most often collapsed tradition, intuition, psychology, and prophecy into a single “message.” The effective repair was to name the framework and state limits without dismissing faith.

## Validation

- Related-link audit: passed with 0 unresolved references.
- Content-quality audit: 370 indexable pages; 73 strong, 201 good, 96 needs-enrichment; 0 repeated fields, 0 pages without direct openings, and 0 pages without explained related links.
- Dream-quality audit: P0 0, P1 48, P2 215, P3 91, P4 16; reader-test failures 0; collision count 84. No doorway pages were added.
- ESLint: passed for modified Pregnancy/Spiritual files.
- Production build: passed; 628 static routes generated, including `/guides/pregnancy-dreams`. The retained Spiritual hub remains `/guides/spiritual-dreams-meaning`.
- Route checks: HTTP 200 for `/guides/pregnancy-dreams`, `/guides/spiritual-dreams-meaning`, `/dreams/pregnant-with-twins`, `/dreams/demonic-attack`, and `/sitemap.xml`.
- Sitemap: each hub appears once; no indexing directives, canonicals, redirects, or URLs were changed.
- Browser inspection: Pregnancy hub desktop/mobile, Spiritual hub mobile, and Pregnant-with-twins mobile renders were inspected. The first-screen answers, hierarchy, wrapping, and CTA treatment were readable with no horizontal overflow. The existing privacy-choice dialog appeared in one capture as a site-wide consent surface.

## Scaling recommendation

Both clusters are ready as models for later expansion, but they should remain separate. The next phase should not begin Recurring Dreams automatically. Before any further Pregnancy expansion, review overlap between `pregnant` and `pregnant-with-twins`; before further Spiritual expansion, review `seeing-god`/`speaking-to-god` and `seeing-jesus`/`speaking-to-jesus` with the same presence-versus-exchange distinction used here.
