import Link from "next/link";

import GuideLayout from "@/app/components/guides/GuideLayout";
import SearchBar from "@/app/components/SearchBar";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const guideInfo = {
  slug: "most-common-dreams",
  title: "20 Most Common Dreams and What They May Mean",
  category: "Dream Interpretation Pillar Guide",
  description:
    "Explore 20 common dream themes—from being chased and falling to teeth, flying, death, water and exams—with practical reasons they may occur and links to detailed meanings.",
  readingTime: 18,
  updated: "August 2026",
  quickInsight:
    "A common theme is not a universal meaning. The action, emotion, setting and waking-life context make the interpretation personal.",
  actions: [
    "Write down what happened before choosing a meaning.",
    "Name the strongest emotion and the moment it changed.",
    "Check recent experiences, physical sensations and stress first.",
    "Use the linked interpretation as a set of possibilities, not a prediction.",
  ],
  related: [
    "interpretation",
    "types-of-dreams",
    "dreams-and-emotions",
    "why-we-dream",
  ],
  sources: [
    {
      author: "Nielsen, T. A., Zadra, A., Simard, V., et al.",
      title: "The Typical Dreams of Canadian University Students",
      publication: "Dreaming, 13(4), 211–235",
      publicationDate: "2003",
      url: "https://www.dreamscience.ca/en/documents/publications/_2003_Nielsen_Reprint_D_13_211-235_TDQ.pdf",
      sourceType: "Peer-reviewed study",
      citationNote:
        "Reports high lifetime prevalence for themes including pursuit, falling, school or study and sexual experiences, while warning that typical does not mean frequent for every person.",
    },
    {
      author: "Maggiolini, A., Di Lorenzo, M., Falotico, E., Gargioni, D., & Morelli, M.",
      title: "Typical Dreams Across the Life Cycle",
      publication: "International Journal of Dream Research, 13(1)",
      publicationDate: "2020",
      url: "https://iris.uniroma1.it/handle/11573/1425590",
      sourceType: "Peer-reviewed study",
      citationNote:
        "A study of 1,546 participants examining typical dream themes across ages 8 to 70.",
    },
    {
      author: "Baird, B., Mota-Rolim, S. A., & Dresler, M.",
      title: "The Cognitive Neuroscience of Lucid Dreaming",
      publication: "Neuroscience & Biobehavioral Reviews, 100",
      publicationDate: "2019",
      url: "https://doi.org/10.1016/j.neubiorev.2019.03.008",
      sourceType: "Scientific review",
      citationNote:
        "Background on lucid awareness and dream cognition; included because flying and other common themes sometimes occur in lucid dreams.",
    },
  ],
};

export const metadata = createMetadataFromGuide(guideInfo);

const commonDreams = [
  {
    slug: "chased",
    title: "Being chased",
    why: "Pursuit turns pressure into a physical problem: keep moving or be caught. It may draw on stress, avoidance, conflict or an ordinary threat response during sleep.",
    notice: "Who follows you, where the chase happens and whether you hide, freeze, escape or turn around.",
  },
  {
    slug: "falling",
    title: "Falling",
    why: "Falling can accompany a loss of steadiness, uncertainty about an outcome or a bodily startle near sleep onset. It is not dependable evidence that an accident will happen.",
    notice: "What gave way, whether you were pushed or jumped, and what happened when you reached—or never reached—the ground.",
  },
  {
    slug: "teeth-falling-out",
    title: "Teeth falling out",
    why: "These dreams often concentrate exposure, appearance concerns, communication anxiety or unwanted change. Jaw tension, grinding and real dental concerns can also enter the dream directly.",
    notice: "Whether the teeth loosened or crumbled, who saw it and whether speaking, smiling or hiding became the central problem.",
  },
  {
    slug: "flying",
    title: "Flying",
    why: "Flying may express freedom, distance from a problem, ambition or enjoyment of unusual control. In a frightening version, height and instability may matter more than freedom.",
    notice: "How easily you moved, whether you controlled direction and what you were leaving, approaching or viewing from above.",
  },
  {
    slug: "being-late",
    title: "Being late",
    why: "Deadlines, crowded schedules and fear of disappointing someone can become a dream in which every delay feels consequential.",
    notice: "What you were late for, who was waiting and whether the obstacle came from poor preparation, another person or conditions beyond your control.",
  },
  {
    slug: "failing-an-exam",
    title: "Failing an exam",
    why: "Exam dreams can return long after school because tests provide a familiar setting for evaluation, readiness and fear of being exposed as unprepared.",
    notice: "The subject, the evaluator, what you had forgotten and which current situation makes you feel measured or underqualified.",
  },
  {
    slug: "being-naked-in-public",
    title: "Being naked in public",
    why: "Public nakedness removes the ability to manage how others see you. It often fits embarrassment, vulnerability, authenticity or fear that something private will become visible.",
    notice: "Who noticed, whether they reacted and whether you felt shame, freedom, indifference or urgency to cover yourself.",
  },
  {
    slug: "being-lost",
    title: "Being lost",
    why: "An unfamiliar route can give form to missing information, competing choices or an identity transition in which familiar directions no longer work.",
    notice: "Whether the place should have been familiar, the destination you wanted and whether you asked for help or kept repeating the same route.",
  },
  {
    slug: "missing-a-flight",
    title: "Missing a flight",
    why: "Flights combine timing, preparation and commitment to a destination. Travel anxiety can produce the dream literally; otherwise it may fit a time-sensitive opportunity or ambivalence about leaving.",
    notice: "What delayed you, where the flight was going and whether missing it brought panic, regret or unexpected relief.",
  },
  {
    slug: "driving-a-car-without-control",
    title: "Driving a car without control",
    why: "A moving car with failed brakes or steering is a direct image of responsibility without enough agency. Recent driving experiences can also supply the scene.",
    notice: "Who chose the destination, who was in the car, what stopped working and whether you could slow down or ask for help.",
  },
  {
    slug: "being-unable-to-scream",
    title: "Being unable to scream",
    why: "A missing voice may reflect inhibited expression or fear that help will not arrive. If it happens while waking with temporary immobility, a sleep-paralysis experience may be relevant.",
    notice: "What you needed to communicate, who needed to hear it and whether words, sound or your whole body failed to respond.",
  },
  {
    slug: "drowning",
    title: "Drowning",
    why: "Drowning can represent demands that exceed available coping resources, but real water fears, illness sensations or distressing media may also shape it.",
    notice: "How you entered the water, whether anyone could see you, what made breathing difficult and whether rescue was possible.",
  },
  {
    slug: "water",
    title: "Water",
    why: "Because water changes in depth, clarity and force, it readily carries associations with emotion, danger, cleansing, home, travel or renewal.",
    notice: "Whether you watched, crossed, drank, swam or escaped—and whether the water was clear, muddy, still, leaking or rising.",
  },
  {
    slug: "snake",
    title: "Snakes",
    why: "Snakes command attention and carry varied cultural associations, including danger, healing, wisdom and change. A recent encounter or fear of snakes may be the most direct explanation.",
    notice: "The snake's behavior, its location and whether you felt fear, curiosity, respect, disgust or calm before it moved.",
  },
  {
    slug: "spider",
    title: "Spiders",
    why: "A spider can fit patient creation, entanglement, vigilance or discomfort with something small but difficult to ignore. Personal fear and recent sightings matter.",
    notice: "Whether it built, watched, approached, trapped or bit—and how you responded to the web as well as the spider.",
  },
  {
    slug: "house",
    title: "A house",
    why: "Houses organize private life into rooms, boundaries and levels, making them useful settings for memory, family, identity and parts of life that receive different amounts of attention.",
    notice: "Who owned the house, which room mattered, what condition it was in and whether you entered, repaired, searched or tried to leave.",
  },
  {
    slug: "ex-partner",
    title: "An ex-partner",
    why: "An ex may appear because of memory, unfinished feeling, comparison with a current relationship or a quality associated with that period—not necessarily a wish to reunite.",
    notice: "What happened between you in the dream, how the relationship ended and what current event may have reactivated that memory.",
  },
  {
    slug: "pregnant",
    title: "Pregnancy",
    why: "During pregnancy, these dreams may follow anticipation and bodily awareness. Outside pregnancy, the image can fit something developing privately, a new responsibility or anxiety about change.",
    notice: "Whether pregnancy is relevant in waking life, whether it was wanted or surprising and what care, secrecy or responsibility followed the discovery.",
  },
  {
    slug: "death",
    title: "Death",
    why: "Death dreams may arise from grief, health anxiety, fear of separation or recognition that a role or relationship has changed. They do not reliably predict a death.",
    notice: "Who died, what felt unfinished and whether the dream focused on the event, your reaction or life afterward.",
  },
  {
    slug: "seeing-a-dead-person",
    title: "Seeing someone who has died",
    why: "Bereavement dreams can continue an emotional bond, revisit memory or hold a wished-for conversation. Spiritual meaning depends on the dreamer's beliefs and cannot be proved from the dream alone.",
    notice: "What the person did, whether the encounter felt ordinary or unusual and what grief, anniversary or family event is currently active.",
  },
];

const faqs = [
  {
    question: "What are the most common dreams?",
    answer:
      "Frequently reported themes include being chased, falling, flying, school or exam situations, teeth falling out, being late, being exposed, death, water and losing control. Prevalence varies with age, culture, sampling method and how a dream theme is defined.",
  },
  {
    question: "Do common dreams have universal meanings?",
    answer:
      "No. Shared themes do not create one meaning for every person. Emotion, action, setting, personal history, culture, physical sensations and recent waking experiences all change what an image may represent.",
  },
  {
    question: "Why do people have similar dreams?",
    answer:
      "People share many concerns and experiences: threat, attachment, evaluation, loss, deadlines, bodily sensations and uncertainty. Similar sleep physiology and memorable movement or threat imagery may also contribute, but no single theory explains every typical dream.",
  },
  {
    question: "Does a recurring common dream predict the future?",
    answer:
      "Repetition shows that a dream pattern remains active or memorable; it does not establish that an event will occur. Look for repeated stressors, changing responses, sleep disruption and recent triggers before making a predictive interpretation.",
  },
  {
    question: "When should a disturbing dream be taken seriously?",
    answer:
      "Take its effect on well-being seriously, not its imagery as a forecast. Seek qualified support when nightmares repeatedly disrupt sleep, reproduce trauma, cause fear of sleeping or occur alongside concerning physical or mental-health symptoms.",
  },
];

export default function MostCommonDreamsPage() {
  const toc = [
    { id: "what-common-means", title: "What ‘common’ means" },
    { id: "top-20", title: "20 common dreams" },
    { id: "why-themes-repeat", title: "Why themes repeat" },
    { id: "how-to-interpret", title: "How to interpret yours" },
    { id: "frequently-asked-questions", title: "Frequently asked questions" },
  ];

  return (
    <GuideLayout guide={{ ...guideInfo, faqs }} toc={toc} readingTime={guideInfo.readingTime}>
      <section aria-labelledby="common-dreams-introduction">
        <h2 id="common-dreams-introduction" className="mb-5 font-serif text-3xl text-[#1A1A1A] md:text-4xl">
          Why the same dream themes appear again and again
        </h2>
        <p className="text-lg leading-9 text-[#4F4A44]">
          People dream in intensely personal detail, yet certain situations recur across many reports: pursuit, falling, tests, missed departures, exposure, death and encounters with people from the past. Research using typical-dream questionnaires has found recurring patterns across samples, but it also shows variation by age, culture and life experience.
        </p>
        <p className="mt-6 text-lg leading-9 text-[#4F4A44]">
          This list is therefore not a universal ranking from one to twenty. It is a curated guide to twenty widely reported themes that already have detailed interpretations in the DreamScriptures library. Use it to recognize a pattern, then follow the link that best matches what actually happened in your dream.
        </p>
      </section>

      <section id="what-common-means" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">What “common” means in dream research</h2>
        <div className="space-y-6 text-lg leading-9 text-[#4F4A44]">
          <p>A theme can be common because many people remember experiencing it at least once. That does not mean it appears every week, occurs equally in every population or occupies most of anyone&apos;s dream life.</p>
          <p>Questionnaire results also depend on who is asked and how. Students may report school and exam dreams differently from older adults. Grief, parenting, work, migration, health and cultural teaching can make other themes more available or memorable.</p>
          <p>The strongest evidence supports saying that some themes are widely shared. It does not support assigning each theme one fixed psychological or spiritual meaning.</p>
        </div>
      </section>

      <section id="top-20" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <h2 className="mb-4 font-serif text-3xl text-[#1A1A1A] md:text-4xl">The top 20 common dreams</h2>
        <p className="mb-9 text-lg leading-8 text-[#5F574E]">Each entry explains why the theme may occur, what detail to notice and where to read the complete interpretation.</p>
        <ol className="space-y-7">
          {commonDreams.map((dream, index) => (
            <li key={dream.slug} className="rounded-2xl border border-[#E2DCD3] bg-white p-6 md:p-8">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8F743C]">Common dream {index + 1}</p>
              <h3 className="font-serif text-2xl text-[#1A1A1A] md:text-3xl">
                <Link className="underline decoration-[#C7B487] decoration-1 underline-offset-4 hover:text-[#765E31]" href={`/dreams/${dream.slug}`}>
                  {dream.title}
                </Link>
              </h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div><h4 className="mb-2 font-medium text-[#3E3933]">Why it may happen</h4><p className="leading-7 text-[#5F574E]">{dream.why}</p></div>
                <div><h4 className="mb-2 font-medium text-[#3E3933]">What to notice</h4><p className="leading-7 text-[#5F574E]">{dream.notice}</p></div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="why-themes-repeat" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">Why common dream themes repeat</h2>
        <div className="space-y-6 text-lg leading-9 text-[#4F4A44]">
          <p><strong>Shared human situations:</strong> evaluation, attachment, danger, loss, uncertainty and responsibility are not limited to one culture or stage of life.</p>
          <p><strong>Waking-life continuity:</strong> dreams often incorporate recent concerns, older memories and familiar emotional patterns, though they may transform the setting.</p>
          <p><strong>Body and sleep:</strong> jaw tension, breathing difficulty, pain, temperature, sounds and movement near waking can become part of a dream scene.</p>
          <p><strong>Memorability:</strong> movement, threat and strong emotion may make pursuit, falling and similar themes easier to remember than quieter dreams.</p>
          <p>Read more about the competing explanations in <Link className="underline" href="/guides/why-we-dream">why we dream</Link> and learn how feeling changes interpretation in <Link className="underline" href="/guides/dreams-and-emotions">dreams and emotions</Link>.</p>
        </div>
      </section>

      <section id="how-to-interpret" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">How to interpret a common dream without forcing it</h2>
        <ol className="space-y-5 text-lg leading-8 text-[#4F4A44]">
          <li><strong>1. Record the scene.</strong> Write the final moment, central action, setting and people before details fade.</li>
          <li><strong>2. Find the emotional turn.</strong> Note when fear, relief, shame, wonder or grief began and what changed it.</li>
          <li><strong>3. Check direct influences.</strong> Consider recent events, media, travel, illness, medication, sleep disruption and bodily sensations.</li>
          <li><strong>4. Compare personal associations.</strong> Ask what the person, place or object means in your own history before borrowing a cultural definition.</li>
          <li><strong>5. Test more than one reading.</strong> Keep the interpretation that explains the most details with the fewest assumptions.</li>
        </ol>
        <p className="mt-7 text-lg leading-8">For a complete method, use the <Link className="underline" href="/guides/interpretation">Dream Interpretation Guide</Link> or compare <Link className="underline" href="/guides/types-of-dreams">12 types of dreams</Link>.</p>
      </section>

      <section id="frequently-asked-questions" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <h2 className="mb-7 font-serif text-3xl text-[#1A1A1A] md:text-4xl">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border border-[#E2DCD3] bg-white p-5">
              <summary className="cursor-pointer font-serif text-lg text-[#1A1A1A]">{faq.question}</summary>
              <p className="mt-4 leading-7 text-[#5F574E]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[#E2DCD3] bg-white p-7 text-center md:p-10">
        <h2 className="font-serif text-3xl text-[#1A1A1A]">Find the dream you remember</h2>
        <p className="mx-auto mb-7 mt-3 max-w-xl leading-7 text-[#6B6B6B]">Search by symbol, person, place or event, or browse the complete <Link className="underline" href="/dreams">dream dictionary</Link>.</p>
        <SearchBar />
      </section>
    </GuideLayout>
  );
}
