import Link from "next/link";

import GuideLayout from "@/app/components/guides/GuideLayout";
import { getDedicatedGuide } from "@/app/data/dedicatedGuides";
import { createMetadataFromGuide } from "@/lib/guideExperience";

const registeredGuide = getDedicatedGuide("spirituality");

const guideInfo = {
  ...registeredGuide,
  title: "Dream Spirituality: Biblical, Islamic, Hindu & African Perspectives",
  description:
    "Compare how biblical texts, Islamic sources, Hindu philosophy, and specific African traditions approach dreams—with primary examples, important differences, and a careful discernment method.",
  updated: "August 2026",
  quickInsight:
    "A tradition may take some dreams seriously without teaching that every vivid dream is revelation, prediction, or a command.",
};

export const metadata = createMetadataFromGuide(guideInfo);

const toc = [
  { id: "read-this-first", title: "Read this first" },
  { id: "biblical", title: "Biblical and Christian perspectives" },
  { id: "islamic", title: "Islamic perspectives" },
  { id: "hindu", title: "Hindu perspectives" },
  { id: "african", title: "Specific African perspectives" },
  { id: "compare", title: "Compare the traditions" },
  { id: "discernment", title: "A careful discernment method" },
  { id: "faq", title: "Frequently asked questions" },
];

const biblicalDreams = [
  {
    text: "Genesis 28:10–22",
    event: "Jacob dreams of a stairway between earth and heaven.",
    point: "The narrative connects divine promise with a particular person, place, and covenant; it is not presented as a reusable symbol formula for every ladder dream.",
  },
  {
    text: "Genesis 37; 40–41",
    event: "Joseph dreams, later interprets the prisoners’ dreams and Pharaoh’s dreams.",
    point: "Joseph attributes interpretation to God. The same images are interpreted within their narrative setting, and the interpretation leads to concrete preparation for famine.",
  },
  {
    text: "1 Kings 3:5–15",
    event: "God appears to Solomon in a dream at Gibeon.",
    point: "The scene centers Solomon’s request for wisdom and responsibility, not a private code of dream symbols.",
  },
  {
    text: "Daniel 2",
    event: "Nebuchadnezzar’s troubling dream is disclosed and interpreted to Daniel.",
    point: "Daniel rejects personal credit, prays with companions, and frames the knowledge as a revealed mystery rather than ordinary expertise.",
  },
  {
    text: "Matthew 1–2",
    event: "Joseph receives several dreams concerning Mary, Jesus, Egypt, and return.",
    point: "These dreams have direct instructions inside a unique Gospel narrative. Christians differ on how—or whether—such guidance should be expected today.",
  },
];

const comparisonRows = [
  {
    tradition: "Biblical and Christian",
    primaryFrame: "Divine communication appears in particular scriptural narratives; wisdom, prophecy, warning, and ordinary or deceptive claims must be distinguished.",
    authority: "God and Scripture; Christian communities differ over the present role of revelatory dreams.",
    caution: "A personal dream should not be used to override Scripture, moral responsibility, or evidence about another person.",
  },
  {
    tradition: "Islamic",
    primaryFrame: "Classical sources distinguish a good or true dream, a distressing dream, and material arising from one’s own mind or concerns.",
    authority: "Allah; interpretation is treated as a serious, limited practice rather than certainty available to anyone.",
    caution: "Do not turn every dream into a ruling, disclose distressing dreams indiscriminately, or assume symbolic fluency without knowledge.",
  },
  {
    tradition: "Hindu philosophical texts",
    primaryFrame: "Some Upanishadic and Vedāntic discussions use dreaming to examine consciousness, selfhood, appearance, and the relation between waking and dream experience.",
    authority: "Text, philosophical school, teacher, and practice vary; Hindu traditions are not one interpretive system.",
    caution: "A philosophy of the dream state is not automatically a dictionary predicting waking events.",
  },
  {
    tradition: "Akan and Yoruba examples",
    primaryFrame: "Dreams may be interpreted within kinship, ancestor, spiritual, healing, or communal contexts, but practices differ by people, place, lineage, religion, and practitioner.",
    authority: "Community knowledge and qualified practitioners may matter more than private internet symbolism.",
    caution: "Do not collapse a continent into one ‘African meaning’ or confuse a formal divination system such as Ifá with casual dream interpretation.",
  },
];

const sources = [
  {
    title: "Genesis 40",
    publication: "Bible Gateway",
    url: "https://www.biblegateway.com/passage/?search=Genesis%2040&version=NRSVUE",
    sourceType: "Primary religious text",
    citationNote: "Joseph’s interpretation of the prisoners’ dreams and his attribution of interpretation to God.",
  },
  {
    title: "Daniel 2",
    publication: "Bible Gateway",
    url: "https://www.biblegateway.com/passage/?search=Daniel%202&version=NRSVUE",
    sourceType: "Primary religious text",
    citationNote: "Nebuchadnezzar’s dream, communal prayer, revelation, and Daniel’s refusal to claim superior personal wisdom.",
  },
  {
    title: "Jeremiah 23:25–32",
    publication: "Bible Gateway",
    url: "https://www.biblegateway.com/passage/?search=Jeremiah%2023%3A25-32&version=NRSVUE",
    sourceType: "Primary religious text",
    citationNote: "A warning about false prophetic dream claims and careless use of divine authority.",
  },
  {
    title: "Surah Yusuf (Qur’an 12)",
    publication: "Quran.com",
    url: "https://quran.com/12",
    sourceType: "Primary religious text",
    citationNote: "Yusuf’s childhood dream, the prisoners’ dreams, the king’s dream, and interpretation as knowledge granted by Allah.",
  },
  {
    title: "Sahih Muslim 2263a: dreams are of three types",
    publication: "Sunnah.com",
    url: "https://sunnah.com/muslim:2263a",
    sourceType: "Hadith collection",
    citationNote: "A widely cited classification of dreams in Islamic tradition.",
  },
  {
    title: "Māṇḍūkya Upaniṣad",
    publication: "Internet Sacred Text Archive",
    url: "https://sacred-texts.com/hin/upan/index.htm",
    sourceType: "Primary philosophical text in translation",
    citationNote: "Background for the Upanishadic treatment of waking, dreaming, deep sleep, and consciousness.",
  },
  {
    author: "Enaikele, M. D., & Adeleke, A. T.",
    title: "Yorubas’ Ifa System and Human Destiny: An Oral Narrative Account",
    publication: "Fourth World Journal, 16(2)",
    publicationDate: "2025",
    url: "https://doi.org/10.63428/82wtbz44",
    sourceType: "Ethnographic research",
    citationNote: "Used to distinguish the Yoruba Ifá divination system from a generic pan-African dream dictionary.",
  },
  {
    title: "Dreaming and Reality: The Concept of Dayeɛ in Akan Culture",
    publication: "International Journal of Dream Research",
    publicationDate: "2025",
    url: "https://journals.ub.uni-heidelberg.de/index.php/IJoDR/article/download/110227/109003/288465",
    sourceType: "Cultural dream research",
    citationNote: "A focused account of dream concepts in Akan culture rather than a claim about Africa as a whole.",
  },
];

const faqs = [
  {
    question: "Does every spiritual tradition believe dreams predict the future?",
    answer: "No. Traditions disagree about the source, authority, and purpose of dreams. Even traditions that preserve revelatory dream narratives usually distinguish them from ordinary, confused, distressing, or personally generated dreams.",
  },
  {
    question: "How can I know whether a dream came from God?",
    answer: "A website cannot establish a dream’s divine source. Within a faith, responsible discernment may involve sacred texts, moral character, humility, prayer, trusted community guidance, and whether an interpretation demands harmful, dishonest, or reckless action. Emotional intensity alone is not proof.",
  },
  {
    question: "What does the Bible say about interpreting dreams?",
    answer: "The Bible includes dreams and interpretations in narratives such as Genesis and Daniel, while also warning about false dream claims in passages such as Jeremiah 23. Christians differ on how these texts apply to personal dreams today.",
  },
  {
    question: "What are the three types of dreams in Islam?",
    answer: "A widely cited hadith distinguishes good dreams or glad tidings, distressing dreams associated with Satan, and dreams arising from what a person has been thinking about. Terminology and explanation should be learned from qualified Islamic sources rather than reduced to an online symbol list.",
  },
  {
    question: "Is there one African spiritual interpretation of dreams?",
    answer: "No. Africa contains thousands of communities and many indigenous, Christian, Islamic, and blended religious settings. Akan dream concepts, Yoruba Ifá practice, and the traditions of other peoples should be discussed specifically rather than merged into one system.",
  },
  {
    question: "Can spiritual reflection and psychology both be useful?",
    answer: "Yes, if their claims remain distinct. Psychology may examine memory, emotion, stress, trauma, and sleep; spiritual reflection may ask theological or moral questions. Neither perspective should be misrepresented as proving what the other cannot establish.",
  },
];

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-7">
      {eyebrow && <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#8F743C]">{eyebrow}</p>}
      <h2 className="font-serif text-3xl leading-tight text-[#1A1A1A] md:text-4xl">{title}</h2>
    </div>
  );
}

function TextBlock({ children }) {
  return <div className="space-y-6 text-lg leading-9 text-[#4F4A44]">{children}</div>;
}

export default function DreamSpiritualityPage() {
  return (
    <GuideLayout guide={{ ...guideInfo, faqs, sources }} toc={toc} readingTime={24}>
      <section aria-labelledby="spirituality-introduction">
        <h2 id="spirituality-introduction" className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">
          The important question is not only “What does this dream mean?”
        </h2>
        <TextBlock>
          <p>Spiritual traditions also ask: Who has authority to interpret it? What kind of claim is being made? How should that claim be tested? And what should a person refuse to do on the strength of a dream alone?</p>
          <p>This guide compares several traditions without pretending they say the same thing. Biblical narratives are not interchangeable with later Christian practice. Qur’anic accounts should be read alongside Islamic teachings about different kinds of dreams. Hindu philosophical analysis of the dream state is not simply omen interpretation. “African spirituality” is far too broad to function as one category, so this page uses specific Akan and Yoruba examples and names their limits.</p>
        </TextBlock>
      </section>

      <section id="read-this-first" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Scope and method" title="Read this first" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E2DCD3] bg-white p-6">
            <h3 className="font-serif text-2xl text-[#1A1A1A]">Narrative is not a dictionary</h3>
            <p className="mt-4 leading-7 text-[#5F574E]">When a sacred text gives one dream a particular interpretation, that does not automatically make every matching image mean the same thing. Joseph’s three branches in Genesis 40 belong to that story; “three branches always mean three days” is not the teaching of the passage.</p>
          </div>
          <div className="rounded-2xl border border-[#E2DCD3] bg-white p-6">
            <h3 className="font-serif text-2xl text-[#1A1A1A]">Significance is not certainty</h3>
            <p className="mt-4 leading-7 text-[#5F574E]">A dream can be spiritually meaningful to someone without proving a future event, another person’s intentions, a diagnosis, or a divine command. The strength of a feeling measures the experience, not the reliability of the conclusion.</p>
          </div>
          <div className="rounded-2xl border border-[#E2DCD3] bg-white p-6">
            <h3 className="font-serif text-2xl text-[#1A1A1A]">Tradition has internal differences</h3>
            <p className="mt-4 leading-7 text-[#5F574E]">Catholic, Orthodox, Pentecostal, Reformed, Sunni, Shia, Vedāntic, devotional, Akan, Yoruba, and other communities do not all use the same interpretive rules. This page identifies broad patterns, not official rulings for every community.</p>
          </div>
          <div className="rounded-2xl border border-[#E2DCD3] bg-white p-6">
            <h3 className="font-serif text-2xl text-[#1A1A1A]">Real safety still matters</h3>
            <p className="mt-4 leading-7 text-[#5F574E]">A dream should not replace medical care, mental-health support, safeguarding, evidence, or consent. If an interpretation encourages harm, coercion, panic, or certainty about someone else’s guilt, stop and seek grounded human guidance.</p>
          </div>
        </div>
      </section>

      <section id="biblical" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Texts, then interpretation" title="Biblical and Christian perspectives" />
        <TextBlock>
          <p>The Bible contains dreams, night visions, waking visions, prophetic speech, and warnings about false revelation. Those categories overlap in some narratives but should not be flattened into “the Bible says every dream is a message.”</p>
          <p>Two principles sit in tension. Genesis 40 and Daniel 2 present interpretation as belonging to God rather than human technique. Jeremiah 23, meanwhile, condemns people who use dreams carelessly while claiming divine authority. A responsible Christian reading therefore has room for divine initiative and a strong reason for humility.</p>
        </TextBlock>

        <div className="mt-9 overflow-x-auto rounded-2xl border border-[#E2DCD3] bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="bg-[#F3ECDD]"><tr><th className="p-4">Text</th><th className="p-4">What happens</th><th className="p-4">What the context changes</th></tr></thead>
            <tbody>{biblicalDreams.map((item) => <tr key={item.text} className="border-t border-[#E2DCD3] align-top"><th className="p-4 font-medium text-[#3E3933]">{item.text}</th><td className="p-4 leading-7 text-[#5F574E]">{item.event}</td><td className="p-4 leading-7 text-[#5F574E]">{item.point}</td></tr>)}</tbody>
          </table>
        </div>

        <div className="mt-9 rounded-2xl border-l-4 border-[#B79B5E] bg-[#FDFBF7] p-6 md:p-8">
          <h3 className="font-serif text-2xl text-[#1A1A1A]">Where Christians disagree</h3>
          <p className="mt-4 leading-8 text-[#5F574E]">Some Christians believe revelatory dreams continue as gifts of the Holy Spirit. Others believe Scripture is sufficient and treat contemporary dream claims with much greater restriction. Still others allow that a dream may prompt prayer or self-examination without treating it as revelation. DreamScriptures does not settle that theological disagreement.</p>
        </div>
        <p className="mt-7 leading-8 text-[#5F574E]">Continue with the guide to <Link className="underline" href="/guides/spiritual-dreams-meaning">spiritual dreams and personal meaning</Link> or explore individual <Link className="underline" href="/categories/spiritual">spiritual dream themes</Link>.</p>
      </section>

      <section id="islamic" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Qur’an and hadith" title="Islamic perspectives" />
        <TextBlock>
          <p>Surah Yusuf provides the Qur’an’s most sustained dream narrative. Yusuf sees the sun, moon, and eleven stars bowing; later he interprets the prison companions’ dreams and the king’s seven cows and seven ears of grain. The story repeatedly frames interpretation as knowledge taught by Allah. It also shows restraint: Ya‘qub tells Yusuf not to relate his childhood dream to his brothers, recognizing that disclosure has consequences.</p>
          <p>A widely cited hadith in Sahih Muslim distinguishes three sources: a good dream or glad tidings from Allah, a distressing dream associated with Satan, and a dream arising from what a person has been occupied with in waking life. This classification prevents two opposite errors: dismissing every dream as meaningless and treating every dream as revelation.</p>
        </TextBlock>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6"><h3 className="font-serif text-xl">A good or true dream</h3><p className="mt-3 leading-7 text-[#5F574E]">May be received as glad tidings, but personal interpretation remains fallible and does not create a new religious obligation.</p></div>
          <div className="rounded-2xl border bg-white p-6"><h3 className="font-serif text-xl">A distressing dream</h3><p className="mt-3 leading-7 text-[#5F574E]">Prophetic guidance emphasizes seeking refuge in Allah and not spreading the dream as though its frightening content must occur.</p></div>
          <div className="rounded-2xl border bg-white p-6"><h3 className="font-serif text-xl">Waking preoccupation</h3><p className="mt-3 leading-7 text-[#5F574E]">Daily concerns, memories, fears, and repeated thoughts can appear during sleep without requiring a hidden spiritual message.</p></div>
        </div>

        <div className="mt-9 rounded-2xl bg-[#F3ECDD] p-6 md:p-8">
          <h3 className="font-serif text-2xl">A crucial limit</h3>
          <p className="mt-4 leading-8 text-[#4F4A44]">Islamic dream interpretation is not simply assigning universal meanings to colors, animals, or numbers. Classical interpretation considers the dreamer, language, Qur’anic imagery, circumstance, character, and the interpreter’s knowledge. Readers seeking a religious ruling should consult a qualified scholar they trust.</p>
        </div>
      </section>

      <section id="hindu" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Consciousness, not one symbol code" title="Hindu perspectives" />
        <TextBlock>
          <p>“Hindu dream interpretation” can refer to several different things: philosophical accounts of consciousness, material in classical texts concerning auspicious or inauspicious dreams, devotional understandings, regional practice, or a modern personal reading. These should not be presented as one system.</p>
          <p>The Māṇḍūkya Upaniṣad is important because it analyzes four states: waking, dreaming, deep sleep, and a “fourth” that is not reducible to the other three. In its account, the dreaming self is inwardly aware and experiences subtle or mental objects. The philosophical question is not primarily “What will this symbol predict?” but “What do waking and dreaming reveal about consciousness and the self?”</p>
          <p>Later Vedāntic schools interpret these states within different metaphysical frameworks. Advaita often uses the instability of dream experience to question the apparent solidity of waking experience, but that does not mean waking and dreaming are identical in every practical sense. Other Hindu schools preserve different accounts of self, God, and reality.</p>
        </TextBlock>

        <div className="mt-9 rounded-2xl border border-[#E2DCD3] bg-white p-7">
          <h3 className="font-serif text-2xl">Three questions that fit this material better</h3>
          <ol className="mt-5 space-y-4 leading-8 text-[#5F574E]"><li><strong>1.</strong> What kind of awareness was present while the ordinary senses were inactive?</li><li><strong>2.</strong> How did the dream construct a convincing world from memory, desire, fear, and imagination?</li><li><strong>3.</strong> What remains continuous across waking, dreaming, and deep sleep?</li></ol>
        </div>
        <p className="mt-7 leading-8 text-[#5F574E]">Because Hindu traditions are diverse, a claim about a particular deity, ritual, omen, or regional practice should be sourced to that tradition—not labeled simply “the Hindu meaning.”</p>
      </section>

      <section id="african" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Name the people and practice" title="Specific African perspectives" />
        <TextBlock>
          <p>There is no single African dream tradition. The continent contains thousands of peoples, languages, and religious histories, including indigenous religions, Christianity, Islam, and many locally specific forms of interaction among them. A responsible page names the community being discussed.</p>
          <p><strong>Akan example:</strong> research on the Akan concept of <em>dayeɛ</em> describes dreaming within a cultural world where dream experience can carry personal and social reality. Interpretation may involve relationships, moral life, spiritual concerns, and the consequences of telling a dream. This cannot be generalized automatically to Yoruba, Igbo, Zulu, Ewe, or other peoples.</p>
          <p><strong>Yoruba distinction:</strong> Ifá is a formal divination and knowledge tradition associated with a trained practitioner and a corpus of <em>odù</em>, narratives, verses, and prescribed interpretation. It should not be described as though it were merely a list of dream symbols. A person may bring a concern involving a dream into a religious setting, but that does not make every online “Yoruba dream meaning” authentic Ifá practice.</p>
        </TextBlock>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6"><h3 className="font-serif text-2xl">Communal context</h3><p className="mt-4 leading-7 text-[#5F574E]">In some settings, a dream’s importance may involve family, ancestors, vocation, healing, or community responsibility—not only the individual dreamer’s private psychology.</p></div>
          <div className="rounded-2xl border bg-white p-6"><h3 className="font-serif text-2xl">Religious plurality</h3><p className="mt-4 leading-7 text-[#5F574E]">A Nigerian or Ghanaian dreamer may interpret within indigenous, Christian, Islamic, or blended frameworks. Geography and ancestry alone do not tell you which authority the dreamer recognizes.</p></div>
        </div>

        <div className="mt-9 rounded-2xl border-l-4 border-[#B79B5E] bg-[#FDFBF7] p-6 md:p-8">
          <h3 className="font-serif text-2xl">Editorial rule for this site</h3>
          <p className="mt-4 leading-8 text-[#5F574E]">DreamScriptures should use “African” only when discussing continent-wide diversity. Specific beliefs should be attributed to a named people, source, practitioner, historical period, and—where relevant—diasporic setting.</p>
        </div>
      </section>

      <section id="compare" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Similar questions, different authorities" title="Compare the traditions" />
        <div className="overflow-x-auto rounded-2xl border border-[#E2DCD3] bg-white">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead className="bg-[#F3ECDD]"><tr><th className="p-4">Tradition represented here</th><th className="p-4">Primary frame</th><th className="p-4">Source of authority</th><th className="p-4">Key caution</th></tr></thead>
            <tbody>{comparisonRows.map((row) => <tr key={row.tradition} className="border-t align-top"><th className="p-4 font-medium">{row.tradition}</th><td className="p-4 leading-7 text-[#5F574E]">{row.primaryFrame}</td><td className="p-4 leading-7 text-[#5F574E]">{row.authority}</td><td className="p-4 leading-7 text-[#5F574E]">{row.caution}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-7 leading-8 text-[#5F574E]">The traditions can share respect for discernment while disagreeing about revelation, consciousness, authority, community, and the purpose of interpretation. Similar vocabulary should not hide those differences.</p>
      </section>

      <section id="discernment" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading eyebrow="Practical reflection" title="A careful discernment method" />
        <ol className="space-y-5">
          {[
            ["Describe before interpreting", "Record the dream’s sequence, emotional turn, people, setting, and ending. Do not rewrite it around the first spiritual explanation that comes to mind."],
            ["Identify the kind of claim", "Are you treating the dream as memory, metaphor, comfort, warning, prophecy, moral conviction, or a divine command? Stronger claims require stronger reasons and greater accountability."],
            ["Check direct causes", "Consider grief, stress, trauma reminders, medication, illness, recent teaching, media, prayer, fasting, disrupted sleep, and physical sensations."],
            ["Use the tradition’s own sources", "Consult the relevant text, commentary, and qualified community rather than mixing isolated symbols from unrelated traditions."],
            ["Test the fruit and the risk", "Does the interpretation encourage honesty, humility, responsibility, and care—or panic, superiority, accusation, coercion, or harm?"],
            ["Keep uncertainty visible", "You may preserve a dream as meaningful without claiming certainty about its source or outcome."],
          ].map(([title, body], index) => <li key={title} className="rounded-2xl border border-[#E2DCD3] bg-white p-6"><p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8F743C]">Step {index + 1}</p><h3 className="mt-2 font-serif text-2xl">{title}</h3><p className="mt-3 leading-7 text-[#5F574E]">{body}</p></li>)}
        </ol>
        <div className="mt-9 rounded-2xl bg-[#2D2924] p-7 text-[#F7F5F2] md:p-9">
          <h3 className="font-serif text-2xl">Do not act on a dream alone when the stakes are high</h3>
          <p className="mt-4 leading-8 text-[#DED7CD]">Medical treatment, leaving a safe relationship, accusing someone, giving away money, breaking the law, or placing yourself or another person in danger requires waking evidence and appropriate counsel. Spiritual reflection should deepen responsibility, not remove it.</p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12">
        <SectionHeading title="Frequently asked questions" />
        <div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="rounded-xl border border-[#E2DCD3] bg-white p-5"><summary className="cursor-pointer font-serif text-lg">{faq.question}</summary><p className="mt-4 leading-7 text-[#5F574E]">{faq.answer}</p></details>)}</div>
      </section>

      <section className="rounded-2xl border border-[#E2DCD3] bg-white p-7 md:p-9">
        <h2 className="font-serif text-3xl">Continue carefully</h2>
        <p className="mt-4 leading-8 text-[#5F574E]">Explore <Link className="underline" href="/guides/interpretation">the interpretation method</Link>, compare <Link className="underline" href="/guides/dreams-and-emotions">dreams and emotions</Link>, or read why DreamScriptures keeps its approach <Link className="underline" href="/methodology">reflective rather than predictive</Link>.</p>
      </section>
    </GuideLayout>
  );
}
