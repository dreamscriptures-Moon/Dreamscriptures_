import Link from "next/link";
import GuideLayout from "@/app/components/guides/GuideLayout";
import SearchBar from "@/app/components/SearchBar";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const guideInfo = { slug: "types-of-dreams", title: "12 Types of Dreams: Meanings, Causes & Common Signs", category: "Dream Basics Pillar Guide", description: "Explore 12 common types of dreams, including recurring dreams, nightmares, lucid dreams, false awakenings, prophetic dreams, and anxiety dreams.", quickInsight: "Dream types overlap. Interpret the pattern, emotional atmosphere, and personal context together.", actions: ["Record the strongest emotion before interpreting symbols.", "Notice repeated settings, conflicts, or waking concerns.", "Compare the dream with current stress, relationships, memory, and beliefs."], readingTime: 16 };
export const metadata = createMetadataFromGuide(guideInfo);

const dreamTypes = [
  {
    id: "ordinary-dreams", title: "Ordinary Dreams",
    explanation: "Ordinary dreams are the shifting stories most people experience during sleep. They may blend recent events, familiar people, old memories, imagined places, and emotions without forming an obvious message or repeating pattern.",
    why: "They may emerge as the sleeping brain organizes memory, emotion, and new information. Everyday concerns can be recombined through association rather than waking logic.",
    characteristics: ["Familiar people or places", "Loose or rapidly changing plots", "Fragments of recent experiences", "Details that fade soon after waking"],
    dreams: [["Flying", "/dreams/flying"], ["Falling", "/dreams/falling"], ["Snakes", "/dreams/snakes"]],
    guides: [["What are dreams?", "/guides/what-are-dreams"], ["Why we dream", "/guides/why-we-dream"]],
  },
  {
    id: "recurring-dreams", title: "Recurring Dreams",
    explanation: "Recurring dreams repeat the same story, setting, symbol, or emotional conflict across different nights. The details may change while the central tension remains recognizable.",
    why: "They are often associated with continuing stress, unresolved emotion, persistent concerns, or a pattern the dreamer has not fully processed. Repetition does not prove a fixed meaning, but it makes context especially important.",
    characteristics: ["A repeated place, person, or problem", "A familiar ending or emotional tone", "Return during stressful periods", "Strong recognition while dreaming or waking"],
    dreams: [["Being chased", "/dreams/being-chased"], ["Teeth falling out", "/dreams/teeth-falling-out"], ["Falling", "/dreams/falling"]],
    guides: [["Recurring dreams", "/guides/recurring-dreams"], ["Interpreting dream symbols", "/guides/how-to-interpret-dream-symbols"]],
  },
  {
    id: "nightmares", title: "Nightmares",
    explanation: "Nightmares are distressing dreams that produce fear, grief, disgust, helplessness, or danger and may wake the dreamer. Their emotional force can remain after the storyline fades.",
    why: "Stress, trauma, illness, medication, disrupted sleep, and frightening waking experiences can influence nightmares. Frequent nightmares that impair sleep deserve support from a qualified health professional.",
    characteristics: ["Threat or loss of control", "Vivid fear and physical arousal", "Sudden awakening", "Clearer recall than many ordinary dreams"],
    dreams: [["Death", "/dreams/death"], ["Drowning", "/dreams/drowning"], ["Being chased", "/dreams/being-chased"]],
    guides: [["Nightmares meaning", "/guides/nightmares-meaning"], ["Dreams and emotions", "/guides/dreams-and-emotions"]],
  },
  {
    id: "lucid-dreams", title: "Lucid Dreams",
    explanation: "A lucid dream happens when you become aware that you are dreaming while the dream continues. Awareness varies: some people simply recognize the state, while others can influence limited parts of it.",
    why: "Lucidity may occur spontaneously or alongside habits that strengthen dream recall and metacognitive awareness. It is not the same as complete dream control, and healthy sleep should remain the priority.",
    characteristics: ["Knowing you are inside a dream", "Unusually vivid perception", "Intentional choices within the dream", "Partial or changing control"],
    dreams: [["Flying", "/dreams/flying"], ["Mirrors", "/dreams/mirrors"], ["Falling", "/dreams/falling"]],
    guides: [["Lucid dreaming", "/guides/lucid-dreaming"], ["Safe lucid dreaming techniques", "/guides/lucid-dreaming-techniques"]],
  },
  {
    id: "false-awakenings", title: "False Awakenings",
    explanation: "A false awakening is a dream in which you believe you have woken up and begun a normal routine, only to wake again later. Some occur in repeating layers.",
    why: "They may happen near transitions between REM sleep and wakefulness, when awareness of the bedroom or morning routine is incorporated into a continuing dream.",
    characteristics: ["A convincing bedroom or home setting", "Starting an ordinary morning task", "Small details that feel wrong", "Waking more than once"],
    dreams: [["Mirrors", "/dreams/mirrors"], ["Being trapped", "/dreams/being-trapped"], ["Darkness", "/dreams/darkness"]],
    guides: [["False awakening dreams", "/guides/false-awakening-dreams"], ["Stages of sleep", "/guides/stages-of-sleep-and-dreaming"]],
  },
  {
    id: "sleep-paralysis", title: "Sleep Paralysis",
    explanation: "Sleep paralysis is a brief state in which awareness returns while normal REM muscle immobility continues. It is a sleep phenomenon rather than a dream type in the strict sense, but vivid dreamlike imagery can overlap with it.",
    why: "It occurs when features of REM sleep continue into waking. Irregular sleep, sleep deprivation, and sleeping on the back may be associated with episodes for some people.",
    characteristics: ["Temporary inability to move or speak", "Awareness of the room", "Pressure or a sensed presence", "Vivid auditory or visual imagery"],
    dreams: [["Darkness", "/dreams/darkness"], ["Being trapped", "/dreams/being-trapped"], ["Death", "/dreams/death"]],
    guides: [["Stages of sleep", "/guides/stages-of-sleep-and-dreaming"], ["Why dreams feel real", "/guides/why-dreams-feel-so-real"]],
  },
  {
    id: "prophetic-dreams", title: "Prophetic Dreams",
    explanation: "Prophetic dreams are experiences interpreted as anticipating a future event or offering spiritual warning or guidance. They hold importance in many religious and cultural traditions.",
    why: "Believers may understand them spiritually; psychological explanations include coincidence, intuition, selective recall, and the mind noticing patterns before conscious awareness. A dream alone is not reliable evidence that an event will occur.",
    characteristics: ["A strong sense of significance", "Specific people, warnings, or events", "Unusually lasting recall", "Meaning assigned after a later event"],
    dreams: [["Death", "/dreams/death"], ["Snake", "/dreams/snake"], ["Water", "/dreams/water"]],
    guides: [["Prophetic dreams", "/guides/prophetic-dreams-meaning"], ["Why dreams seem to come true", "/guides/why-do-some-dreams-come-true"]],
  },
  {
    id: "emotional-dreams", title: "Emotional Dreams",
    explanation: "Emotional dreams are defined less by plot than by the feeling they carry. Grief, love, shame, relief, anger, or longing may remain vivid long after the images disappear.",
    why: "Dreaming can draw together recent emotion, memory, attachment, and unfinished interpersonal experiences. The dominant feeling often provides more interpretive value than an isolated symbol.",
    characteristics: ["One dominant emotional atmosphere", "Feelings that continue after waking", "People linked to attachment or conflict", "Scenes organized around emotion"],
    dreams: [["Ex-partner", "/dreams/ex-partner"], ["Crying", "/dreams/crying"], ["Death", "/dreams/death"]],
    guides: [["Dreams and emotions", "/guides/dreams-and-emotions"], ["Emotions after waking", "/guides/why-dreams-feel-emotional-after-waking"]],
  },
  {
    id: "symbolic-dreams", title: "Symbolic Dreams",
    explanation: "Symbolic dreams express an experience through images and actions rather than direct explanation. Water, houses, animals, journeys, and broken objects may represent different ideas depending on personal context.",
    why: "The dreaming mind connects memories and emotions associatively. A symbol can condense several experiences into one image, but it does not carry one universal definition for every dreamer.",
    characteristics: ["Memorable objects or environments", "Metaphorical transformations", "Several meanings suggested at once", "Meaning shaped by emotion and history"],
    dreams: [["Snake", "/dreams/snake"], ["Water", "/dreams/water"], ["Mirrors", "/dreams/mirrors"]],
    guides: [["Interpreting dream symbols", "/guides/how-to-interpret-dream-symbols"], ["The subconscious mind", "/guides/subconscious-mind-dreams"]],
  },
  {
    id: "visitation-dreams", title: "Visitation Dreams",
    explanation: "Visitation dreams are vivid encounters in which a deceased person, ancestor, or spiritual presence seems to visit the dreamer. Many people experience them as comforting, sacred, or unusually real.",
    why: "Spiritual traditions may view them as genuine contact, while grief psychology may understand them as part of continuing emotional bonds, memory, and bereavement. These perspectives need not erase personal meaning.",
    characteristics: ["A calm or vivid encounter", "Clear communication or presence", "A sense of peace or closure", "Long-lasting, detailed recall"],
    dreams: [["Death", "/dreams/death"], ["Ex-partner", "/dreams/ex-partner"], ["Flying", "/dreams/flying"]],
    guides: [["Spiritual dreams", "/guides/spiritual-dreams-meaning"], ["Dreams and emotions", "/guides/dreams-and-emotions"]],
  },
  {
    id: "wish-fulfillment-dreams", title: "Wish Fulfillment Dreams",
    explanation: "Wish fulfillment dreams portray a wanted reunion, achievement, relationship, escape, or opportunity. The idea is associated with Freud, though modern dream theories do not treat all dreams as disguised wishes.",
    why: "Longing, anticipation, imagination, and unmet emotional needs can supply dream material. Sometimes the dream explores the emotional consequences of a wish rather than simply granting it.",
    characteristics: ["Receiving something deeply wanted", "Reuniting with a significant person", "Success without waking obstacles", "Pleasure mixed with loss after waking"],
    dreams: [["Ex-partner", "/dreams/ex-partner"], ["Flying", "/dreams/flying"], ["Pregnancy", "/dreams/pregnancy"]],
    guides: [["Psychological dreams", "/guides/psychological-dreams"], ["The subconscious mind", "/guides/subconscious-mind-dreams"]],
  },
  {
    id: "anxiety-dreams", title: "Anxiety Dreams",
    explanation: "Anxiety dreams center on pressure, embarrassment, unreadiness, danger, or loss of control. Common scenarios include being late, unprepared, chased, exposed, or unable to complete an urgent task.",
    why: "Waking stress and anticipatory worry can remain active during sleep. The dream may simulate a feared outcome or translate diffuse tension into a concrete situation.",
    characteristics: ["Urgency without progress", "Being late, lost, or unprepared", "Repeated obstacles", "Relief followed by lingering tension"],
    dreams: [["Being chased", "/dreams/being-chased"], ["Teeth falling out", "/dreams/teeth-falling-out"], ["Falling", "/dreams/falling"]],
    guides: [["Psychological dreams", "/guides/psychological-dreams"], ["Nightmares meaning", "/guides/nightmares-meaning"]],
  },
];

const faqs = [
  ["What are the most common types of dreams?", "Common types include ordinary dreams, recurring dreams, nightmares, lucid dreams, false awakenings, emotional dreams, symbolic dreams, and anxiety dreams. More than one type can occur in the same dream."],
  ["Can one dream belong to more than one type?", "Yes. A recurring dream can also be a nightmare, an emotional dream can be symbolic, and a lucid dream can begin with a false awakening. These categories describe patterns rather than rigid boundaries."],
  ["Do dream types have fixed meanings?", "No. A dream type describes how a dream behaves or feels, not one universal interpretation. Personal associations, circumstances, emotions, culture, and the complete context all matter."],
  ["Are prophetic dreams proof of the future?", "No dream establishes with certainty that a future event will happen. Spiritual traditions interpret some dreams prophetically, while psychology also considers intuition, coincidence, pattern recognition, and selective recall."],
  ["When should nightmares or sleep paralysis be discussed with a professional?", "Consider speaking with a qualified healthcare professional when episodes are frequent, cause fear of sleeping, significantly disrupt rest or daytime functioning, or occur alongside other concerning symptoms."],
].map(([question, answer]) => ({ question, answer }));

export default function TypesOfDreamsPage() {
  const toc = dreamTypes.map(({ id, title }) => ({ id, title }));
  return <GuideLayout guide={{ ...guideInfo, faqs }} readingTime={guideInfo.readingTime} toc={toc} contentStart={7}>
      <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-[#8A8175]"><Link href="/">Home</Link><span>›</span><Link href="/guides">Guides</Link><span>›</span><span>Types of Dreams</span></nav>
      <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#9A7B3F]">Dream Basics Pillar Guide</p>
      <h1 className="mb-8 font-serif text-4xl leading-tight text-[#1A1A1A] md:text-6xl">12 Types of Dreams and What They May Mean</h1>
      <p className="mb-6 text-lg leading-relaxed text-[#5F5A54] md:text-xl">Dreams can be grouped by how they feel, repeat, affect awareness, or connect with waking life. This guide compares twelve widely discussed dream types without reducing personal experiences to fixed definitions.</p>
      <p className="mb-12 leading-relaxed">Some categories describe sleep experiences, while others come from psychology, spirituality, or everyday language. A single dream may fit several types. Begin with its emotional atmosphere, then consider your memories, present circumstances, beliefs, and associations. Start with <Link className="underline" href="/guides/what-are-dreams">what dreams are</Link>, compare the <Link className="underline" href="/guides/most-common-dreams">20 most common dreams</Link>, and learn <Link className="underline" href="/guides/how-to-interpret-dream-symbols">how to interpret dream symbols</Link>.</p>
      <section className="mb-14 rounded-2xl border border-[#E2DCD3] bg-white p-6 md:p-8"><h2 className="mb-4 font-serif text-2xl text-[#1A1A1A]">Explore the types</h2><ol className="grid gap-2 md:grid-cols-2">{dreamTypes.map((type, index) => <li key={type.id}><a className="hover:underline" href={`#${type.id}`}>{index + 1}. {type.title}</a></li>)}</ol></section>
      <section className="mb-16 text-center"><p className="mb-3 text-sm text-[#6B6B6B]">Looking for a specific symbol or experience?</p><SearchBar /></section>
      <div className="space-y-20">{dreamTypes.map((type, index) => <section id={type.id} key={type.id} className="scroll-mt-24 border-t border-[#DDD6CC] pt-12">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#9A7B3F]">Type {index + 1}</p><h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">{type.title}</h2>
        <h3 className="mb-2 font-serif text-xl">What it is</h3><p className="mb-6 leading-relaxed">{type.explanation}</p><h3 className="mb-2 font-serif text-xl">Why it may happen</h3><p className="mb-6 leading-relaxed">{type.why}</p>
        <h3 className="mb-3 font-serif text-xl">Common characteristics</h3><ul className="mb-7 list-disc space-y-2 pl-6">{type.characteristics.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl bg-white p-5"><h3 className="mb-3 font-serif text-lg">Related dream meanings</h3>{type.dreams.map(([label, href]) => <Link className="block py-1 underline" href={href} key={href}>{label}</Link>)}</div><div className="rounded-xl bg-white p-5"><h3 className="mb-3 font-serif text-lg">Continue learning</h3>{type.guides.map(([label, href]) => <Link className="block py-1 underline" href={href} key={href}>{label}</Link>)}</div></div>
      </section>)}</div>
      <section className="mt-20 border-t border-[#DDD6CC] pt-12"><h2 className="mb-7 font-serif text-3xl text-[#1A1A1A]">Frequently asked questions</h2><div className="space-y-4">{faqs.map((faq) => <details className="rounded-xl border border-[#E2DCD3] bg-white p-5" key={faq.question}><summary className="cursor-pointer font-serif text-lg">{faq.question}</summary><p className="mt-4 leading-relaxed">{faq.answer}</p></details>)}</div></section>
      <section className="mt-16 rounded-2xl bg-white p-8 text-center"><h2 className="mb-3 font-serif text-2xl">Explore your own dream</h2><p className="mb-6 text-[#6B6B6B]">Browse the <Link className="underline" href="/dreams">dream dictionary</Link>, explore <Link className="underline" href="/emotions">dream emotions</Link>, or search below.</p><SearchBar /></section>
  </GuideLayout>;
}
