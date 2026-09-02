const reflectionQuestionsBySlug = {
  snake: [
    "What was the snake doing before you reacted to it?",
    "Did its presence feel threatening, protective, fascinating, or calm?",
    "Where did the snake appear, and what does that place represent in your life?",
    "Is there something you sense instinctively but have not yet named clearly?",
  ],
  falling: [
    "What in your life currently feels difficult to steady or control?",
    "Did you fear the fall, surrender to it, or feel unexpectedly free?",
    "What happened immediately before you began falling?",
    "Did you land, wake before impact, or keep falling without an end?",
  ],
  chased: [
    "What were you trying to escape, and did you recognize it?",
    "Where did you run, and did any place feel safe enough to stop?",
    "What might change if you turned around instead of continuing to flee?",
    "Is a pressure in waking life following you even when you try to avoid it?",
  ],
  water: [
    "Was the water calm, rising, muddy, clear, shallow, or deep?",
    "Were you watching the water, entering it, or struggling to get out?",
    "Which feeling changed when the condition of the water changed?",
    "What part of your emotional life currently feels easy—or difficult—to contain?",
  ],
  death: [
    "What ended in the dream besides a life—such as a role, relationship, place, or season?",
    "Did the death bring grief, fear, relief, numbness, or acceptance?",
    "Is a real loss or recent story about death still active in your mind?",
    "What may be changing form rather than disappearing completely?",
  ],
  "teeth-falling-out": [
    "Were the teeth loose, broken, painful, or falling without warning?",
    "Did you try to hide what happened from anyone in the dream?",
    "Where do you currently feel exposed, unheard, or unable to hold something together?",
    "Could a physical sensation, dental concern, or recent conversation have shaped the dream?",
  ],
  flying: [
    "Did flying feel effortless, risky, joyful, or difficult to control?",
    "What were you rising above, and what could you see from that height?",
    "Were you choosing the direction or being carried somewhere?",
    "Where in waking life do you want more freedom, perspective, or room to move?",
  ],
  house: [
    "Was the house familiar, abandoned, unfinished, damaged, or welcoming?",
    "Which room held the strongest feeling or most important event?",
    "Did you feel at home inside it, or were you trying to leave?",
    "What part of your private life or sense of self resembles that room?",
  ],
  "ex-partner": [
    "What feeling returned when your ex appeared?",
    "Was the dream about reunion, conflict, distance, apology, or unfinished conversation?",
    "What part of that former relationship still influences your present choices?",
    "Could something recent have reminded you of who you were during that relationship?",
  ],
  pregnant: [
    "What in your life feels as though it is beginning to take shape?",
    "Did the pregnancy feel welcome, unexpected, private, or overwhelming?",
    "Were you preparing for change or trying to hide it?",
    "Is there a responsibility, idea, relationship, or hope that needs time before it is ready?",
  ],
  "being-trapped": [
    "What kept you from leaving, and was the barrier physical or emotional?",
    "Did anyone know you were trapped or try to help?",
    "Where in waking life do your choices currently feel narrowed?",
    "What was the smallest possible route toward freedom in the dream?",
  ],
  fire: [
    "Was the fire destroying, warming, lighting, cleansing, or spreading?",
    "What caught fire first, and what did you try to save?",
    "Did you feel panic, anger, awe, comfort, or relief near the flames?",
    "What situation in your life currently feels intense enough to transform what surrounds it?",
  ],
  "holding-a-baby": [
    "Was the baby peaceful, crying, unfamiliar, or in need of protection?",
    "Did holding the baby feel natural, joyful, frightening, or exhausting?",
    "What new responsibility or vulnerable part of life needs care from you?",
    "Who supported you in the dream, and where might you need support now?",
  ],
  marriage: [
    "Did the marriage feel chosen, joyful, pressured, surprising, or uncertain?",
    "Who was being joined, and what qualities did each person bring?",
    "Was the dream focused on commitment, the ceremony, family expectations, or what came afterward?",
    "What agreement or long-term choice are you currently considering in waking life?",
  ],
  "failing-an-exam": [
    "What did you believe the test would prove about you?",
    "Were you unprepared, unable to answer, late, or running out of time?",
    "Where do you currently feel evaluated against expectations you may not share?",
    "What preparation or reassurance would reduce the pressure outside the dream?",
  ],
  "missing-a-train": [
    "Where was the train going, and why did reaching it matter?",
    "What delayed you—confusion, another person, lost belongings, or your own hesitation?",
    "Did missing it feel like failure, relief, abandonment, or a chance to choose another route?",
    "Which opportunity or timetable in waking life feels as though it may move on without you?",
  ],
  "sleep-paralysis": [
    "Did the experience occur while falling asleep, waking, or after disrupted rest?",
    "Could you move, speak, breathe comfortably, or recognize the room around you?",
    "What part felt most frightening: immobility, a sensed presence, pressure, or uncertainty about being awake?",
    "Have stress, irregular sleep, exhaustion, medication, or a recent episode made sleep feel less secure?",
  ],
  "seeing-god": [
    "What made you understand the figure or presence as God?",
    "Did the encounter bring comfort, awe, fear, correction, distance, or peace?",
    "Was anything said, and how does it compare with your beliefs and the character of God you understand from Scripture?",
    "What would careful discernment look like without treating the dream as unquestionable revelation?",
  ],
  "demonic-attack": [
    "What happened before the threatening presence appeared?",
    "Were you asleep, partly awake, unable to move, or fully inside the dream story?",
    "Did prayer, light, another person, waking up, or confronting the fear change the experience?",
    "Could stress, trauma, frightening media, disrupted sleep, or spiritual concerns be contributing to the imagery?",
  ],
};

// Collision-family repairs: these overlays retain the existing page structure while
// making the action, agency, and trust distinction visible to readers.
const collisionRepairFields = {
  water: {
    microSummary: "Water dreams are interpreted through movement, visibility, depth, and your position in the scene—not a fixed emotion label. Watching, entering, drinking, or being pulled under creates different questions.",
    description: "Water can be a setting, a boundary, a resource, or a force. A still surface watched from shore asks something different from rising water that removes your options. Start with what the water was doing and what you could do in response; then consider whether the scene felt calming, exposing, urgent, or physically uncomfortable.",
    context: "Clarity, movement, depth, temperature, location, agency, and outcome determine whether water feels like information, pressure, support, or danger.",
    reflectionQuestions: ["Was the water still, moving, rising, falling, clear, or obscured?", "Were you observing it, entering it, crossing it, drinking it, or trying to escape?", "What did the water make possible or impossible?", "Did your response change as the water changed?"]
  },
  "being-in-the-ocean": {
    microSummary: "Being in the ocean places your body inside a vast environment. Distance from shore, visibility, currents, and your ability to move matter more than the ocean symbol alone.",
    description: "Standing beside an ocean and being surrounded by it are different dreams. Once you are in the water, the question becomes how exposed, supported, or directionless you felt. Calm floating may concern trust or surrender; a current carrying you away may concern agency and distance from familiar support.",
    context: "Position relative to shore, current, depth, visibility, companions, and whether you could choose a direction shape the interpretation.",
    reflectionQuestions: ["How far were you from shore or a place of safety?", "Could you choose your direction, or did the water carry you?", "What did the scale of the ocean make you feel?", "Was the dream about the ocean itself or your ability to remain oriented inside it?"]
  },
  "finding-money": {
    microSummary: "Finding money in a dream centers unexpected discovery: what was found, whether it felt yours to keep, and what you did next can matter more than money as abundance.",
    description: "Finding money is an encounter with value rather than a transfer someone deliberately made to you. A forgotten note, a hidden account, and a large sum in a public place each raise different questions about opportunity, entitlement, luck, and responsibility. The dream cannot predict financial gain.",
    context: "Where the money appeared, who owned it, whether you searched for it, and whether you kept, returned, or lost it determine the reading.",
    reflectionQuestions: ["Did you discover the money accidentally or while looking for it?", "Did it feel like an opportunity, a burden, or something that belonged to someone else?", "What did you do after finding it?", "Where might an overlooked resource or value be asking for attention?"]
  },
  "receiving-money": {
    microSummary: "Receiving money focuses on support or value arriving from a source. The giver, your comfort with accepting, and any obligation attached distinguish help from dependence or pressure.",
    description: "Money handed to you is different from money discovered. Notice who gave it, why you believed they gave it, and whether acceptance felt welcome, embarrassing, conditional, or unsafe. This is a reflection on exchange and support, not a promise of income.",
    context: "Giver, reason, consent, amount, obligation, emotional response, and what happened after acceptance are the key variables.",
    reflectionQuestions: ["Who gave you the money, and what did you believe it meant?", "Did accepting it feel relieving, awkward, indebted, or empowering?", "Was anything expected in return?", "Where are you receiving—or resisting—support in waking life?"]
  },
  "losing-money": {
    microSummary: "Losing money in a dream turns value into vulnerability. What was lost, how it happened, and whether recovery was possible distinguish fear of scarcity from concerns about trust, responsibility, or control.",
    description: "The loss may be accidental, theft, an unaffordable choice, or a mistake you cannot undo. Losing a wallet is not the same as watching savings disappear from an account. The dream may reflect threatened security or confidence, but it does not forecast financial loss.",
    context: "Amount, cause, who knew, your response, and whether you recovered or adapted shape the interpretation.",
    reflectionQuestions: ["How was the money lost, and could you identify the cause?", "What did the loss put at risk: safety, freedom, reputation, or a plan?", "Did anyone help or blame you?", "What resource feels difficult to protect right now?"]
  },
  "seeing-god": {
    microSummary: "Seeing God in a dream may feel spiritually significant, but the interpretation depends on the figure's distance, atmosphere, your beliefs, and what the encounter stirred—not on a claim of guaranteed revelation.",
    description: "A distant presence, a recognizable figure, and a vivid encounter do not carry the same personal meaning. Comfort, awe, fear, correction, and uncertainty are all possible responses. Religious tradition can offer language for reflection while memory, hope, stress, and recent worship can also shape the dream.",
    context: "Recognition, distance, appearance, setting, emotion, dialogue or silence, and waking response determine the possible reading.",
    reflectionQuestions: ["What made you understand the presence as God?", "Did the encounter comfort, challenge, frighten, or steady you?", "Was there communication, or was presence itself the event?", "How can you reflect within your faith without treating the dream as unquestionable instruction?"]
  },
  "speaking-to-god": {
    microSummary: "Speaking to God centers exchange: what you asked, heard, or could not say matters. A conversation can reflect prayer, conscience, longing, or memory without proving divine communication.",
    description: "This page focuses on interaction rather than simply seeing a sacred figure. Remembered words, unanswered questions, your ability to speak, and the feeling afterward provide the useful detail. Biblical stories may inform a tradition, but they do not turn a personal dream into prophecy.",
    context: "Who initiated the exchange, what was said, whether an answer came, and how you responded afterward shape the interpretation.",
    reflectionQuestions: ["What were you trying to ask, confess, or understand?", "Did you receive an answer, and how did it feel?", "Could you speak freely or were you searching for words?", "What would careful discernment look like alongside ordinary explanations?"]
  },
  "speaking-to-jesus": {
    microSummary: "Speaking to Jesus emphasizes a remembered exchange and the qualities you associate with Jesus. It may invite faith-based reflection, but it cannot establish a command, prophecy, or supernatural certainty.",
    description: "Seeing Jesus creates an encounter; speaking to Jesus adds a relationship and a response. The words may echo scripture, personal prayer, a question about forgiveness, or a recent image. Consider what you brought to the conversation before deciding what the figure represented.",
    context: "Conversation content, tone, setting, your beliefs, and what changed after speaking matter more than the label alone.",
    reflectionQuestions: ["What did you want from the conversation?", "What quality of Jesus—comfort, challenge, forgiveness, authority—stood out?", "Did the exchange resolve anything or leave a question open?", "What part is traditional association, and what part belongs to your own context?"]
  },
  "ex-partner": {
    microSummary: "An ex-partner dream usually revisits a relationship memory, role, or lesson rather than revealing what the ex currently thinks. The action and your present response show what is active now.",
    description: "An ex carries a history of communication, safety, conflict, compromise, and identity. Seeing them silently is different from arguing, receiving a message, or choosing reunion. Begin with what the relationship represented to you and what the dream asked you to feel or decide.",
    context: "Current relationship to the memory, interaction, setting, emotional response, and ending determine whether the dream concerns grief, comparison, closure, or a present need.",
    reflectionQuestions: ["What was your ex doing, and what did you do in response?", "Which part of that relationship felt present: comfort, conflict, identity, or unfinished words?", "What has happened recently that may have reactivated the memory?", "What does the dream say about your experience—not your ex's private thoughts?"]
  },
  "ex-texting-you": {
    microSummary: "A dream about an ex texting you centers an unexpected message and your response. It may reflect memory, longing, caution, or unfinished communication; it is not evidence that the ex will contact you.",
    description: "A message creates a small but specific decision: read, reply, ignore, delete, or wait. Notice whether the text felt welcome, threatening, ordinary, or impossible to answer. The dream's meaning rests in that exchange and your boundary, not in predicting the sender's intention.",
    context: "Message content, timing, your choice, emotional response, and whether contact continued shape the interpretation.",
    reflectionQuestions: ["What did the message say or leave unsaid?", "Did you want to reply, and what stopped or encouraged you?", "What boundary did the dream create?", "Could a recent notification, memory, or conversation have supplied the scene?"]
  },
  "arguing-with-your-ex": {
    microSummary: "Arguing with an ex often focuses on the point you were still trying to make—being heard, defending yourself, naming harm, or refusing blame—rather than a prediction about reunion.",
    description: "The argument's subject matters more than the fact that it was an argument. Were you asking for an explanation, correcting a story, protecting a boundary, or trying to be believed? The dream can revisit your position even when you no longer want the relationship.",
    context: "Topic, power balance, ability to speak, the ex's response, and whether the argument ended or changed determine the reading.",
    reflectionQuestions: ["What were you trying to make your ex understand?", "Did you feel heard, dismissed, guilty, or relieved?", "What boundary or truth was at stake?", "What present situation has a similar emotional structure?"]
  },
  pregnant: {
    microSummary: "Being pregnant in a dream can concern development, responsibility, fertility hopes or fears, identity, or a project taking shape. It cannot prove or predict pregnancy, fertility, or a medical outcome.",
    description: "Pregnancy imagery is about carrying something over time, but the relevant “something” depends on your context. A welcome pregnancy differs from a hidden, unwanted, frightening, or physically difficult one. Recent fertility concerns, conversations, bodily sensations, and ordinary symbolic imagination can all contribute.",
    context: "Whether the pregnancy was yours, wanted, visible, progressing, threatened, or nearing birth shapes the possible meaning.",
    reflectionQuestions: ["Did the pregnancy feel welcome, unexpected, private, or overwhelming?", "What were you carrying and who knew?", "Was the dream focused on development, responsibility, fear, or birth?", "What cannot this dream establish about your body or future?"]
  },
  "giving-birth": {
    microSummary: "Giving birth in a dream centers an outcome: something reaches arrival after pressure and preparation. It is not evidence of pregnancy or a prediction about childbirth.",
    description: "Birth differs from pregnancy because the dream has reached a threshold. Notice whether arrival brought relief, shock, grief, pride, or exhaustion, and whether you felt prepared or carried through it by events. The image can fit a project, identity, decision, or relationship as well as reproductive concerns.",
    context: "Preparation, agency, pain, support, the baby's condition, and what happened immediately afterward guide the interpretation.",
    reflectionQuestions: ["What had been developing before the birth?", "Did you feel ready, helped, pressured, or surprised?", "What did the arrival make possible afterward?", "Could recent pregnancy, birth, media, or bodily sensation have shaped the dream?"]
  },
  "having-a-miscarriage": {
    microSummary: "A miscarriage dream can express grief, fear, interrupted hope, or loss of control around something developing. It cannot predict miscarriage, diagnose a condition, or establish a real-world outcome.",
    description: "The emotional force often comes from what the pregnancy represented and what was lost when its progress stopped. For some people the imagery connects directly with reproductive fear or experience; for others it reflects a plan, identity, or hope that changed. Treat the feeling seriously without treating the dream as medical evidence.",
    context: "Relationship to pregnancy, wantedness, timing, cause, support, and aftermath distinguish grief, fear, interruption, and helplessness.",
    reflectionQuestions: ["What was beginning to take shape, and what did its loss mean?", "Did the dream feel like grief, fear, guilt, relief, or shock?", "Who offered support or was absent afterward?", "Is there a real health concern that belongs with a qualified professional rather than dream interpretation?"]
  },
  "finding-a-baby": {
    microSummary: "Finding a baby begins with an unexpected encounter and a decision about care. The setting, condition, responsibility, and your response distinguish opportunity from alarm or unwanted obligation.",
    description: "This is not the same as giving birth or holding a baby already entrusted to you. You discover something vulnerable and must decide what the encounter asks of you. A safe, healthy baby in a clear place differs from an abandoned or endangered one; the dream cannot predict pregnancy or parenthood.",
    context: "Where you found the baby, its condition, who was responsible, your choice, and the outcome determine the reading.",
    reflectionQuestions: ["Where did you find the baby and what did the setting imply?", "Did you feel chosen, protective, resentful, afraid, or unsure?", "What responsibility did you accept or refuse?", "What vulnerable possibility has recently entered your awareness?"]
  },
  "abandoned-baby": {
    microSummary: "An abandoned-baby dream focuses on vulnerability without care. It may reflect neglected potential, responsibility, grief, or concern for someone—not a prediction about a child or a diagnosis of the dreamer.",
    description: "The important contrast is between a baby needing care and the absence of a safe caregiver. Notice whether you rescued, searched, froze, or felt anger at whoever left the child. The image may belong to a neglected project or emotional need, but real caregiving concerns should be handled in waking life with evidence and support.",
    context: "Location, condition, who left the baby, your response, available help, and what happened after discovery shape the meaning.",
    reflectionQuestions: ["What made the baby seem abandoned, and who was missing?", "Did you help, search for someone, freeze, or leave?", "What feeling was strongest: care, anger, fear, guilt, or grief?", "What vulnerable responsibility needs a realistic form of support?"]
  },
  "baby-smiling": {
    microSummary: "A smiling baby dream adds recognition and welcome to baby imagery. Whether the smile felt familiar, reassuring, or unsettling matters more than treating it as a promise of pregnancy or good fortune.",
    description: "The smile changes the encounter, but it does not settle what the baby represents. You may have felt affection, relief, surprise, or distance. Notice whether you knew the baby, whether you were responsible for it, and what happened after the smile; positive imagery can still carry questions about readiness and care.",
    context: "The baby's identity, your relationship, setting, emotional response, and what the smile invited you to do determine the reading.",
    reflectionQuestions: ["Who was the baby, if anyone, and did you feel responsible?", "Did the smile bring comfort, hope, pressure, or unease?", "What happened immediately after the baby smiled?", "What developing possibility feels warmly received but still needs care?" ]
  },
  "confessing-your-love-to-someone": {
    microSummary: "Confessing love in a dream centers your willingness to become known. The other person's response and your vulnerability matter; the dream does not reveal their real feelings or predict a relationship.",
    description: "Speaking first creates a different tension from being told someone loves you. You may be testing honesty, risking rejection, naming a feeling, or rehearsing a conversation. Let the response and aftermath guide reflection rather than assuming the dream is a message about the other person.",
    context: "Who you addressed, what you risked, their response, witnesses, and your feeling afterward shape the interpretation.",
    reflectionQuestions: ["What made you decide to speak in the dream?", "Were you hoping for closeness, clarity, or release?", "How did the other person respond, and how did you feel afterward?", "What truth or vulnerability needs a safe, real-world form of expression?" ]
  },
  "someone-confessing-their-love-to-you": {
    microSummary: "When someone confesses love to you in a dream, the focus is receiving unexpected attention and deciding how to respond—not proof of that person's private feelings or future actions.",
    description: "Being chosen or addressed can feel flattering, exposing, pressuring, or confusing. Notice whether you welcomed the confession, questioned it, or wanted distance. The identity of the speaker may represent memory, a quality you admire, or a present need for recognition without predicting contact.",
    context: "Who spoke, how familiar they were, your response, the setting, and what followed determine the possible meaning.",
    reflectionQuestions: ["How did it feel to be the person receiving the confession?", "Did you accept, doubt, avoid, or return the feeling?", "What did the speaker represent to you beyond their identity?", "Where are you deciding what kind of attention or commitment you actually want?" ]
  },
  ocean: {
    microSummary: "An ocean dream centers scale and the horizon. Whether you watched it, entered it, lost direction, or found a way back determines whether vastness feels like freedom, exposure, or uncertainty.",
    description: "The ocean is the environment; being in the ocean is the bodily experience of immersion. From shore you can observe a force without entering it. In the water, distance, current, depth, and support become immediate. The dream does not require one fixed emotional meaning.",
    context: "Vantage point, distance from shore, weather, visibility, companions, current, and agency shape the interpretation.",
    reflectionQuestions: ["Were you watching the ocean or physically inside it?", "Could you see a shore, destination, or route back?", "Did the scale feel freeing, frightening, or simply unfamiliar?", "What current situation feels larger than your usual frame of reference?"]
  },
  "walking-on-water": {
    microSummary: "Walking on water makes agency the unusual detail. The dream may concern confidence, balance, belief, or the pressure of maintaining control where ordinary support would fail.",
    description: "Unlike a general water dream, this one gives you an unexpected way to move across the surface. Notice whether the ability felt natural, miraculous, precarious, or impossible to repeat. The result may reflect confidence or exposure, not a supernatural guarantee.",
    context: "Surface condition, pace, fear, witnesses, destination, and whether you sank or stayed supported determine the reading.",
    reflectionQuestions: ["Did walking feel effortless, frightening, or performative?", "Were you choosing the route or trying to prove something?", "What happened when the water changed?", "Where are you relying on an unfamiliar kind of confidence?"]
  },
  money: {
    microSummary: "Money dreams concern value, security, exchange, and responsibility, but the action matters. Finding, receiving, losing, or stealing money answers different questions and does not predict financial events.",
    description: "Money is a broad symbol only until the dream shows what happened to it. A balance you protect, cash you discover, support someone offers, and money you take without permission each involve different relationships to value and agency. Start with the transaction or threat rather than an abundance list.",
    context: "Source, direction, ownership, consent, amount, emotion, and consequence determine the interpretation.",
    reflectionQuestions: ["What happened to the money, and who controlled the exchange?", "Did the scene involve security, opportunity, fairness, guilt, or responsibility?", "What consequence followed the financial event?", "Could a real financial concern or recent conversation have supplied the imagery?"]
  },
  "stealing-money": {
    microSummary: "Stealing money in a dream centers forbidden access, fairness, and agency. It may reflect guilt, deprivation, comparison, or fear of consequences—not a prediction or confession of real conduct.",
    description: "Taking money is different from finding it or receiving it. Notice whether you felt desperate, entitled, pressured, curious, or caught, and whose resources were involved. The dream can examine fairness and scarcity without telling you to act or proving a moral fact about you.",
    context: "Target, motive, consent, secrecy, witnesses, emotional response, and aftermath shape the possible meaning.",
    reflectionQuestions: ["Why did you take the money in the dream?", "Did it feel necessary, unfair, thrilling, or shameful?", "Who owned it and what happened when others noticed?", "Where are scarcity or comparison affecting your sense of value?"]
  },
  "fighting-a-demon": {
    microSummary: "Fighting a demon places agency inside frightening spiritual imagery. Traditional beliefs may offer one framework, while stress, memory, media, and sleep experiences may offer others; the dream cannot verify possession or danger.",
    description: "The important difference from a demonic attack is what you did. Were you defending yourself, protecting someone, confronting fear, or acting from a religious story? The outcome and your emotional state matter more than treating the figure as an established external being.",
    context: "Threat, agency, spiritual framework, setting, bodily sensations, support, and outcome determine the reading.",
    reflectionQuestions: ["What did you believe you were fighting, and why?", "Did resistance bring courage, panic, exhaustion, or relief?", "Could sleep paralysis, stress, media, or memory have shaped the imagery?", "What can the dream invite you to reflect on without proving a supernatural event?"]
  },
  "casting-out-demons": {
    microSummary: "Casting out demons centers deliberate removal and regained agency. It may resonate with spiritual warfare traditions or with ending a frightening pattern, but it does not prove demonic activity or guarantee protection.",
    description: "This dream differs from being attacked because you are trying to change the situation. Notice whether you acted alone, prayed, received help, or discovered the threat was symbolic. Relief after the scene may concern restored control; fear afterward may show that safety still feels uncertain.",
    context: "Who acted, what was removed, which tradition informed the scene, resistance, and aftermath shape the interpretation.",
    reflectionQuestions: ["Were you casting something out of yourself, a place, or another person?", "What gave you authority or support in the dream?", "Did the ending bring relief, doubt, or continued fear?", "What ordinary stress or sleep experience might also be relevant?"]
  },
  church: {
    microSummary: "A church dream may concern community, ritual, conscience, memory, or faith. The building's condition and your role matter; the dream does not certify a divine instruction or judgment.",
    description: "Being inside a church, avoiding one, cleaning it, or finding it empty are different experiences. Personal faith, upbringing, recent worship, conflict, and cultural memory can all supply the setting. Interpret the relationship and action before assigning spiritual certainty.",
    context: "Familiarity, activity, people, role, atmosphere, religious associations, and what happened at the threshold shape the reading.",
    reflectionQuestions: ["What were you doing in the church, and did you feel welcome?", "Did the space feel familiar, sacred, judgmental, empty, or safe?", "What belief or community relationship did it bring forward?", "What part belongs to tradition and what part belongs to your current experience?"]
  },
  praying: {
    microSummary: "Praying in a dream centers a request, practice, or search for help. It may reflect faith, conscience, fear, gratitude, or remembered ritual without proving that a response came from outside the dream.",
    description: "Notice what you were asking for and whether prayer felt private, communal, urgent, automatic, or comforting. A prayer that changes the dream is a different experience from repeating words without an answer. The scene can matter spiritually while remaining open to ordinary emotional processing.",
    context: "Request, setting, audience, words, response, emotion, and waking beliefs determine the possible meaning.",
    reflectionQuestions: ["What were you asking for or giving thanks for?", "Did prayer change your fear, choices, or surroundings?", "Were you alone or part of a community?", "How can you reflect on the dream without treating it as a guaranteed instruction?"]
  },
  "holding-a-baby": {
    microSummary: "Holding a baby centers sustained care and responsibility. The baby's condition, your comfort, and the support available matter; the dream is not evidence of pregnancy or parenthood.",
    description: "Holding differs from finding a baby because care has already become your immediate task. A peaceful baby, a crying baby, and a baby you cannot safely hold create different pressures. The dream may concern a vulnerable project, relationship, memory, or real caregiving hope or fear.",
    context: "Familiarity, weight, condition, support, consent, emotional response, and what happened when you put the baby down shape the reading.",
    reflectionQuestions: ["Did holding feel natural, joyful, frightening, or exhausting?", "Was the baby known to you and what support did you have?", "What happened when you tried to put the baby down?", "What vulnerable responsibility needs care without turning the dream into a prediction?"]
  },
  "baby-crying": {
    microSummary: "A crying baby dream makes an unmet need impossible to ignore. Whether you could identify the need, comfort the baby, or get help distinguishes care, helplessness, overload, and bodily sound.",
    description: "The cry is an event requiring a response, not a fixed omen. Notice whether you felt protective, irritated, panicked, numb, or capable, and whether the sound came from a known baby. Noise, recent caregiving, media, and sleep sensations can also shape the dream.",
    context: "Cause of the cry, your response, available help, setting, duration, and whether the baby settled determine the interpretation.",
    reflectionQuestions: ["What did you try when the baby cried?", "Did the cry feel like a need you could understand?", "Who helped or failed to help?", "Could a real sound, caregiving concern, or recent memory have entered the dream?"]
  },
  "baby-dying": {
    microSummary: "A baby-dying dream can express fear, grief, helplessness, or an ending involving something vulnerable. It cannot predict a child's death, diagnose illness, or establish a supernatural warning.",
    description: "The dream's meaning depends on whose vulnerability was represented and what you could or could not do. A feared illness, a symbolic ending, and witnessing a loss are not identical. Treat the emotion with care while keeping real health concerns in the realm of qualified support.",
    context: "Relationship, cause, agency, timing, support, emotional response, and aftermath distinguish grief, fear, interruption, and helplessness.",
    reflectionQuestions: ["Who or what did the baby represent to you?", "Were you trying to help, witnessing, grieving, or feeling numb?", "What changed immediately afterward?", "Is there a real health concern that needs evidence-based care rather than dream interpretation?"]
  },
  "seeing-baby-boy": {
    microSummary: "Seeing a baby boy in a dream may bring identity, family expectation, or a developing possibility into focus. The dream cannot predict a baby's sex, pregnancy, or future.",
    description: "The baby's sex may matter because of personal memories, expectations, culture, or the qualities you associate with boyhood—not because the image provides biological evidence. Notice whether the baby was known, cared for, smiling, crying, or simply observed.",
    context: "Relationship, setting, condition, cultural meaning, emotional response, and your role determine the reading.",
    reflectionQuestions: ["What did the baby's identity mean to you in the dream?", "Were you caring, observing, choosing, or being judged?", "What expectation or memory did the scene activate?", "What can the dream not establish about pregnancy or sex?"]
  },
  "seeing-baby-girl": {
    microSummary: "Seeing a baby girl in a dream may draw on family, identity, cultural expectations, or a developing possibility. It cannot predict pregnancy, fertility, a baby's sex, or future events.",
    description: "Treat the baby's identity as part of your personal and cultural context, not as biological evidence. A familiar child, an unknown baby, and a vulnerable or joyful scene ask different questions. The emotional response and your role are more useful than a fixed gender symbolism.",
    context: "Familiarity, condition, setting, cultural associations, caregiving role, and emotional response shape the possible meaning.",
    reflectionQuestions: ["What did the baby's identity bring up for you?", "Did the scene feel joyful, protective, pressured, or uncertain?", "What role were you taking around the baby?", "What can this dream not prove about your body or future?"]
  },
  marriage: {
    microSummary: "Marriage or wedding dreams concern commitment, public choice, pressure, and what follows a promise. They do not predict marriage, breakup, or another person's intentions.",
    description: "The ceremony is only one part of the dream. Notice whether you chose freely, felt watched, resisted, or wondered what life afterward would require. An engagement, a forced wedding, and a chaotic ceremony overlap in theme but differ in agency and consequence.",
    context: "Partner, consent, witnesses, vows, pressure, emotion, and aftermath determine whether the dream concerns commitment, expectation, identity, or resistance.",
    reflectionQuestions: ["Did the commitment feel chosen, pressured, joyful, or uncertain?", "Who was watching and what did you fear they expected?", "Was the dream about the ceremony or life after it?", "What agreement or boundary deserves attention without treating the dream as a forecast?"]
  },
  "having-sex": {
    microSummary: "Sexual dreams can involve intimacy, curiosity, vulnerability, power, memory, or boundary questions. The dream is not proof of desire, infidelity, consent, or another person's feelings.",
    description: "The identity of the partner matters, but so do consent, emotional tone, and what happened afterward. A wanted encounter differs from pressure, observation, fear, or emotional distance. Recent media, memory, bodily sensation, and ordinary dream blending can contribute.",
    context: "Partner identity, consent, emotional response, power, setting, privacy, and aftermath shape the interpretation.",
    reflectionQuestions: ["Did the intimacy feel mutual and chosen?", "What mattered most: closeness, novelty, vulnerability, fear, or distance?", "How did you feel after the encounter?", "What boundary or relationship question is present without making the dream a prediction?"]
  }
};

const priorityFieldsBySlug = {
  "being-judged": {
    microSummary: "Dreaming of being judged often reflects pressure around criticism, accountability, or how other people may view a choice you have made. Who delivered the judgment—and whether you felt guilty, misunderstood, defiant, or ashamed—shows whether the deeper concern is wrongdoing, visibility, or an unforgiving inner standard.",
  },
  cow: {
    microSummary: "A cow in a dream may point toward provision, patience, caregiving, or the steady responsibilities that keep daily life supported. A calm, well-fed cow suggests something very different from one that is aggressive, neglected, injured, or unable to provide.",
  },
  "being-admired": {
    microSummary: "Being admired in a dream can reflect growing confidence, a wish to be recognized, or uncertainty about receiving attention. The meaning depends on what people admired and whether being seen felt affirming, exposing, undeserved, or uncomfortable.",
  },
  "big-house": {
    microSummary: "A big house dream often reflects expansion: life, responsibility, ambition, or identity may be becoming larger and more complex. Spacious rooms can feel full of possibility, while an empty or confusing house may show that growth has outpaced your sense of belonging or readiness.",
  },
  spider: {
    microSummary: "A spider dream may draw attention to patience, intricate work, entanglement, or a concern developing quietly in the background. Its meaning shifts with the relationship: building a web, hiding nearby, crawling toward you, and trapping you are not the same experience.",
  },
  fish: {
    microSummary: "Fish in dreams often bring attention to feelings, opportunities, or intuitive awareness moving beneath the surface. Clear water and freely swimming fish may suggest ease or possibility, while trapped, dying, or aggressive fish can point toward restriction, neglect, or unease.",
  },
  rat: {
    microSummary: "A rat dream can reflect distrust, a neglected problem, unwanted intrusion, or the resourcefulness needed to survive difficult conditions. Notice where the rat appeared and whether you feared it, chased it away, protected it, or simply watched it move.",
  },
  crocodile: {
    microSummary: "A crocodile in a dream often represents caution around something powerful that is difficult to read. Stillness, concealment, and sudden movement make the setting important: watching from safety differs sharply from sharing the water or being pursued.",
  },
  elephant: {
    microSummary: "An elephant dream may concern strength, memory, protection, or a responsibility too significant to ignore. A gentle elephant can embody steadiness and support, whereas a charging, trapped, or injured one may reveal pressure around power, grief, or a burden that needs attention.",
  },
  tiger: {
    microSummary: "A tiger dream often explores personal power, instinct, boundaries, or the presence of something both compelling and dangerous. Whether the tiger watched, protected, stalked, escaped, or attacked helps distinguish confidence from intimidation and controlled strength from threat.",
  },
  scorpion: {
    microSummary: "A scorpion dream may reflect guardedness, mistrust, self-protection, or a small issue with a painful emotional sting. Seeing one from a distance, finding it at home, being stung, or removing it each points toward a different relationship with the perceived danger.",
  },
  dragon: {
    microSummary: "A dragon dream can represent immense power, ambition, fear, protection, or a challenge that feels larger than ordinary life. A dragon that guards, carries, teaches, or befriends you has a different meaning from one that burns, hunts, or prevents you from moving forward.",
  },
  books: {
    microSummary: "Books in dreams often reflect a search for knowledge, memory, guidance, or an explanation you have not yet found. Reading clearly may suggest readiness to understand, while missing pages, an unknown language, or a book you cannot locate can mirror unanswered questions.",
  },
  bear: {
    microSummary: "A bear dream may center on strength, protection, solitude, territory, or a boundary that should not be crossed. The bear's mood matters: calm presence can feel protective, while pursuit or attack may reflect intimidation, conflict, or power that seems difficult to contain.",
  },
  tornado: {
    microSummary: "A tornado dream often reflects sudden upheaval or circumstances moving faster than you can control. Its distance, direction, and target reveal whether you are anticipating disruption, trying to protect what matters, or already living inside a period of instability.",
  },
  volcano: {
    microSummary: "A volcano dream commonly points to pressure building beneath the surface until expression or change becomes unavoidable. A dormant volcano may reflect contained emotion or tension, while an eruption can represent release, conflict, transformation, or fear of losing control.",
  },
  train: {
    microSummary: "A train dream often concerns direction, timing, commitment, and movement along a path that may already feel established. Riding comfortably, missing the train, boarding the wrong one, or wanting to get off reveal very different feelings about where life is heading.",
  },
  shoe: {
    microSummary: "Shoes in dreams often relate to readiness, identity, and the path you are trying to walk. A pair that fits can suggest confidence in your direction, while missing, damaged, painful, or mismatched shoes may show that a role or next step does not yet feel right.",
  },
  gold: {
    microSummary: "Gold in a dream can represent value, recognition, security, opportunity, or a quality in yourself that deserves greater notice. Finding, receiving, hiding, losing, or stealing it changes whether the dream is about discovery, worth, fear of loss, or the cost of possession.",
  },
  ring: {
    microSummary: "A ring dream often brings commitment, belonging, promises, and repeating cycles into focus. Who offered the ring, whether you accepted it, and whether it fit, broke, or disappeared can reveal how a bond or responsibility feels to you.",
  },
  "eating-food": {
    microSummary: "Eating in a dream may reflect nourishment, desire, comfort, scarcity, or what you are taking into your emotional life. Hunger, taste, company, and whether the food was fresh, spoiled, shared, or forced help distinguish fulfillment from an unmet or unhealthy need.",
  },
  "kissing-someone": {
    microSummary: "Kissing someone in a dream can reflect affection, curiosity, reconciliation, attraction, or a wish for emotional closeness. It does not automatically reveal a hidden romantic desire; who initiated the kiss and how you felt afterward are often more useful clues.",
  },
  "taking-a-shower": {
    microSummary: "Taking a shower in a dream often reflects release, renewal, privacy, or a wish to wash away the emotional residue of an experience. Clean warm water may feel restorative, while dirty water, exposure, or being unable to finish can point toward discomfort that has not fully cleared.",
  },
  dancing: {
    microSummary: "Dancing in a dream may express freedom, confidence, connection, celebration, or the challenge of moving with changing circumstances. Dancing alone, following a partner, losing the rhythm, or feeling watched each reveals a different relationship with expression and belonging.",
  },
  "deja-vu": {
    microSummary: "A déjà vu dream often reflects recognition without a clear source: a present situation may resemble an older emotional pattern, choice, or relationship even when the details are different. It can also arise from the mind blending memory and familiarity during sleep.",
  },
  "feeling-intense-peace": {
    microSummary: "Feeling intense peace in a dream may reflect relief, emotional integration, spiritual comfort, or a deep need for rest after sustained pressure. Notice whether the peace arrived after something changed or existed quietly throughout the dream.",
  },
  "crawling-through-a-tight-space": {
    microSummary: "Crawling through a tight space often reflects pressure, restricted choices, or the difficult work of moving through a situation that offers little room. Fear can point to confinement, while determination or relief may show that a demanding transition is nearly behind you.",
  },
  "being-lost-in-your-own-house": {
    microSummary: "Being lost in your own house can reflect feeling unfamiliar with part of yourself, your family life, or a situation that once felt secure. The room you cannot find—and the one you keep returning to—may reveal where that confusion is centered.",
  },
  "seeing-jesus": {
    editorialControls: { compactEnding: true },
    seoDescription: "Seeing Jesus in a dream can feel deeply personal. The setting, words, emotional after-effect, and your own faith help distinguish comfort, questioning, memory, and spiritual hope from claims of certain revelation.",
    microSummary: "Seeing Jesus in a dream may bring comfort, conviction, hope, or difficult questions. What the figure said or did, how you felt afterward, and what Jesus means within your faith matter more than treating the dream as guaranteed divine instruction.",
    description: `A dream of seeing Jesus can stay with you because the figure carries both personal and cultural meaning. Some people wake comforted; others feel challenged, confused, or unsure whether the encounter was spiritual at all. The first useful question is not “Was this definitely a message?” but “What happened in the encounter, and what did it awaken in me?”\n\nNotice the details. A silent presence beside you may feel different from words of forgiveness, a warning, a question, or an invitation to help someone. Jesus appearing in a church, home, landscape, or unfamiliar light can bring your own memories and expectations into the scene. Recent worship, Scripture, grief, media, or a difficult decision may also supply the image directly.\n\nChristian tradition can offer language for compassion, repentance, courage, service, and hope. It cannot turn a private dream into unquestionable revelation. Compare the dream with your beliefs, Scripture in context, wise counsel, and observable circumstances before making a decision.`,
    emotionalMeaning: `Peace may reflect felt acceptance, a need for reassurance, or the relief of being seen during strain. Fear can arise from guilt, uncertainty, or the intensity of the figure rather than from a supernatural threat. Grief may make the encounter feel like reunion; awe may express the scale of a spiritual question.\n\nIf you felt disappointed when Jesus did not answer, the dream may be holding an unanswered prayer or desire for certainty. If you felt ordinary and safe, the image may be integrating faith into daily life rather than announcing an extraordinary event.`,
    symbolicMeaning: `Jesus may symbolize forgiveness, moral courage, compassion, sacrifice, hope, or the kind of person you are trying to become. The symbol changes when Jesus speaks, remains silent, walks away, embraces you, or asks you to notice another person because the action identifies the relationship being explored: comfort, accountability, service, or longing for guidance.\n\nThe setting also matters. A public gathering can raise questions about community and belonging; a private room can center conscience or personal comfort. The image does not prove that every detail has a hidden code.`,
    spiritualMeaning: "Within Christian faith, a dream about Jesus may invite prayerful reflection on love, truth, mercy, repentance, or hope. That is a possible spiritual reading, not proof of divine authorship. Test any apparent instruction against Scripture in context, humility, wise counsel, and the fruits it produces; do not treat fear or certainty alone as confirmation.",
    wakingLifeMeaning: `This dream may follow a season of grief, moral uncertainty, renewed faith, conflict, or a wish to be forgiven. It can also be ordinary memory processing after worship, reading, conversation, or seeing religious imagery. Write down the exact words and your emotional after-effect, then ask what small, grounded action reflects your values without claiming the dream predicts an outcome.`,
    context: "Who Jesus was to you in the dream, what happened between you, where the encounter occurred, and how you felt after waking distinguish comfort, conscience, memory, and spiritual longing.",
    scenarios: [{title:"Jesus speaks words of comfort",meaning:"The words may give shape to a need for reassurance or forgiveness; compare them with your faith and present circumstances rather than treating them as a guaranteed promise."},{title:"Jesus remains silent",meaning:"Silence can reflect waiting, unanswered prayer, or a wish to listen more carefully rather than rejection."},{title:"You feel afraid or judged",meaning:"Guilt, shame, or fear of disappointing your beliefs may be central; the fear itself is not evidence of condemnation."},{title:"You are asked to help someone",meaning:"The dream may connect faith with a real value or responsibility, but any action still needs practical discernment."}],
    reflectionQuestions: ["What did Jesus do or say, and what part stayed with you after waking?", "Did the encounter feel comforting, challenging, ordinary, frightening, or uncertain?", "What does Jesus represent within your own faith and life right now?", "Could recent worship, Scripture, grief, or media have supplied the image?", "What grounded response would honor your values without treating the dream as unquestionable revelation?"],
    relatedDreams: [{slug:"seeing-god",reason:"This broadens the question of a divine encounter while keeping discernment and personal faith central."},{slug:"speaking-to-jesus",reason:"This is the closer path when the conversation itself, rather than simply seeing Jesus, carried the emotional weight."},{slug:"fighting-an-angel",reason:"This helps when the dream centered spiritual conflict, resistance, or fear rather than comfort."}]
  },
  "water-rising": {
    editorialControls: { compactEnding: true },
    seoDescription: "Rising water in a dream can show pressure crossing a boundary. How fast it rises, where it comes from, what exits exist, and how you respond distinguish accumulating strain from sudden crisis.",
    microSummary: "Water rising in a dream often pictures pressure becoming harder to contain. Slow seepage, a sudden surge, available exits, and your response reveal whether the dream concerns accumulation, escalation, preparation, or feeling overwhelmed.",
    description: `Rising water turns a manageable space into a changing problem. The useful question is not simply whether water means emotion, but what boundary it crossed and how quickly your options narrowed. Water creeping under a door creates a different tension from a wave reaching the roof.\n\nStart with source and pace. A leak may resemble a small issue that keeps returning; water rising from the ground can suggest conditions you cannot easily control; a sudden surge can mirror news or conflict that outpaces preparation. Then notice your response: did you find an exit, warn someone, gather supplies, freeze, or calmly watch the level change?\n\nPlumbing trouble, flood memories, weather coverage, and bodily sensations can supply the image directly. The dream is not a forecast. It is a way to examine pressure, resources, and the point at which support is needed.`,
    emotionalMeaning: `Slow dread often fits accumulation: each demand is tolerable until together they remove breathing room. Panic may reflect escalation faster than your coping resources. Calm problem-solving suggests retained agency, while paralysis can show too many urgent choices competing at once.\n\nRelief when the water recedes matters too. It may reflect recovery or temporary release, not proof that the waking problem has solved itself.`,
    symbolicMeaning: `The rising level represents a boundary being crossed—between private and public life, work and rest, manageable and excessive demand. The source identifies the pressure; the height shows perceived severity; exits and barriers show available support. A contained pool rising evenly is not the same symbol as water breaking through every wall.`,
    spiritualMeaning: "Water can carry spiritual associations of cleansing, baptism, testing, or renewal, but rising water is not a divine warning by default. Let faith-based reflection sit alongside ordinary stress, recent experience, and practical evidence.",
    wakingLifeMeaning: `Ask which pressure is increasing faster than your current support: workload, caregiving, conflict, money, grief, or uncertainty. A useful waking response might be naming the source, asking for help, setting a limit, or making a contingency plan—not waiting for the dream to predict what happens next.`,
    context: "Rate, source, depth, barriers, exits, other people, and whether water stabilizes or recedes determine whether the emphasis is accumulation, escalation, preparation, rescue, or recovery.",
    scenarios: [{title:"Water rises slowly",meaning:"Gradual accumulation may mirror repeated obligations or feelings that have been noticed but not addressed."},{title:"Water reaches you suddenly",meaning:"A rapid surge can represent abrupt news, conflict, or a demand that leaves little preparation time."},{title:"You find high ground or an exit",meaning:"The route out shows that support, planning, or perspective remains available even while the situation feels serious."},{title:"You freeze while others act",meaning:"The dream may center competing emergencies or fear that you cannot choose quickly enough, not a lack of caring."},{title:"The water recedes",meaning:"Relief and recovery may be emerging, while damage left behind points to work still requiring attention."}],
    reflectionQuestions: ["How fast did the water rise, and where did it come from?", "What boundary did it cross—your room, home, work, or sense of safety?", "Did you warn someone, search for an exit, help, freeze, or watch?", "What pressure is accumulating, and what resource would widen your options?", "Could recent weather, plumbing, flood exposure, or news have supplied the image?"],
    relatedDreams: [{slug:"water",reason:"This gives the broader movement-and-condition framework, while rising water focuses on pressure crossing a boundary."},{slug:"flood",reason:"This narrows the experience to water already occupying a space and the dreamer’s response to loss of containment."},{slug:"tsunami",reason:"This is relevant when scale, warning time, and an environmental threat mattered more than gradual accumulation."}]
  },
  "seeing-your-future-self": {
    editorialControls: { compactEnding: true },
    microSummary: "Seeing your future self in a dream can give a face to hope, fear, or a choice that is still unfolding. What changed, what remained familiar, and how the figure treated you matter more than treating the scene as a prediction.",
    description: `Meeting a future version of yourself can feel intimate because the figure is both familiar and out of reach. Dreams build that person from memories, imagination, desire, and concern; they do not provide dependable knowledge of what will happen. The useful question is what possibility the figure makes visible now.\n\nLook at the relationship. Did your future self speak, avoid you, warn you, comfort you, or simply pass by? A confident figure may embody a quality you are practicing. A tired or regretful one may dramatize fear about continuing on the same path. Clothing, home, work, health, and the emotional distance between you can make the concern more specific.`,
    emotionalMeaning: `Hope and warmth may show readiness to imagine growth. Fear can reflect uncertainty about choices or aging. Shame may arise when the future self seems disappointed; relief may signal permission to change direction. Feeling like a stranger to the figure can mark identity transition rather than failure.`,
    symbolicMeaning: `The future self symbolizes a projected identity, not a fixed destination. Resemblance asks what you want to preserve; difference asks what you fear or desire to become. A conversation creates an internal dialogue, while observing from far away emphasizes distance from a goal or concern.`,
    spiritualMeaning: "Some spiritual traditions treat future imagery as guidance, but a dream cannot establish prophecy. If the scene feels spiritually important, hold it with prayer, humility, and practical discernment rather than certainty.",
    wakingLifeMeaning: `Use the dream as a values exercise: name the quality the future self had, the choice that seemed to produce it, and one present action that moves toward or away from that path. Recent anniversaries, planning, career decisions, or media about the future may also explain the image.`,
    context: "Age, appearance, words, setting, emotional tone, and whether the future self welcomed or resisted contact distinguish aspiration, anxiety, regret, and identity rehearsal.",
    scenarios: [{title:"Your future self looks peaceful",meaning:"The calm may represent a quality you hope to develop or reassurance that change can become livable, not a guaranteed outcome."},{title:"Your future self seems tired or regretful",meaning:"The image may concentrate concern about present choices and invite review without declaring that regret is inevitable."},{title:"The figure gives specific advice",meaning:"Treat the advice as your mind’s current values and fears speaking in a vivid form; test it against evidence and consequences."},{title:"You do not recognize yourself",meaning:"Distance between present and projected identity may be the central issue, especially during major transition."}],
    reflectionQuestions: ["What had changed, and what still felt unmistakably like you?", "Did the figure comfort, warn, avoid, or challenge you?", "Which quality or life circumstance did you admire or fear?", "What present choice seems connected to that possible future?", "What evidence and values—not prediction—should guide your next step?"],
    relatedDreams: [{slug:"the-future",reason:"This explores future uncertainty more broadly, while this page centers the future as a version of the dreamer’s identity."},{slug:"seeing-your-double",reason:"This is useful when resemblance, identity, or competing versions of yourself mattered more than time."},{slug:"deja-vu",reason:"This helps when the strongest feeling was recognition rather than a conversation with a future identity."}]
  },
  "confessing-your-love-to-someone": {
    editorialControls: { compactEnding: true },
    microSummary: "Confessing love in a dream can rehearse emotional disclosure, but the feeling may concern attraction, apology, recognition, or a truth that is difficult to say—not necessarily a literal wish for a relationship.",
    description: `A love confession turns an unspoken feeling into a risk. The person you tell, what you actually say, and the response you receive matter more than the romantic label. You may be testing what it would feel like to be honest, accepted, refused, or finally relieved of secrecy.\n\nSometimes the listener represents a quality you want recognized in yourself, or a current situation that resembles an older vulnerability. Recent conversations, media, loneliness, or a real attraction can also supply the plot. The dream does not require you to contact anyone.`,
    emotionalMeaning: "Excitement can show readiness for closeness; dread may reflect fear of rejection or exposure; relief after speaking can point to a truth that needed expression even if romance was not the real subject. Embarrassment, anger, or indifference should change the reading.",
    symbolicMeaning: "The confession symbolizes disclosure and the risk of being known. A public declaration raises visibility and judgment; a private admission centers intimacy. Silence, acceptance, laughter, or rejection reveal what the dreamer expects honesty to cost.",
    spiritualMeaning: "A spiritual reading may involve truthfulness, courage, love, or discernment, but the dream is not an instruction to pursue a particular person. Let consent, character, and real circumstances guide action.",
    wakingLifeMeaning: "Ask what you want acknowledged: attraction, gratitude, apology, hurt, or a wish to belong. A small honest conversation may be more appropriate than treating the dream as proof of destiny.",
    context: "The listener, audience, words, response, and feeling after speaking distinguish romantic interest from the wider need to be understood.",
    scenarios: [{title:"The person responds warmly",meaning:"Acceptance may reflect hope for recognition or safety rather than a prediction of their real feelings."},{title:"You cannot get the words out",meaning:"The dream may center inhibition, timing, or fear of consequences more than the confession itself."},{title:"You feel relieved after speaking",meaning:"Release can show that secrecy or emotional restraint has become heavier than the possible response."},{title:"The confession happens publicly",meaning:"Exposure and social judgment may matter more than private intimacy."}],
    reflectionQuestions: ["What were you really trying to communicate besides ‘I love you’?", "Did the listener feel like themselves or represent a quality you want recognized?", "What did their response—and your feeling afterward—change?", "Is there a truth, apology, gratitude, or need for closeness you are avoiding?", "What would a respectful, consent-aware waking conversation look like, if one is needed?"],
    relatedDreams: [{slug:"someone-confessing-their-love-to-you",reason:"This reverses who risks disclosure and helps distinguish wanting to speak from wanting to be chosen."},{slug:"kissing-someone",reason:"This explores closeness or attraction when physical intimacy, rather than words, carried the dream."},{slug:"being-unable-to-speak",reason:"This is relevant when the central distress was blocked expression."}]
  },
  "hair-falling-out": {
    editorialControls: { compactEnding: true },
    microSummary: "Hair falling out in a dream can dramatize change that feels visible and hard to conceal. The speed of loss, who noticed, your reaction, and any real bodily sensation distinguish appearance anxiety from stress or health worry.",
    description: `Hair loss is frightening in dreams because it can happen in public and seem impossible to hide. The central question is not whether hair universally means confidence, but what kind of change became visible and what you feared others would notice. Gradual thinning, handfuls coming out, or a bald patch before an event create different pressures.\n\nActual scalp sensations, hair concerns, illness fears, aging, or recent stress may contribute. The dream itself cannot diagnose a condition.`,
    emotionalMeaning: "Shame points toward exposure; panic toward loss of control; grief toward identity or aging; indifference may suggest a change you are ready to release. Relief after cutting or losing hair can signal freedom from an image rather than damage.",
    symbolicMeaning: "Hair can represent presentation, continuity, vitality, or a visible identity. Falling out makes the symbol about involuntary change and concealment. Being observed adds social evaluation; losing it alone may keep the concern private.",
    spiritualMeaning: "Some traditions connect hair with strength or devotion, but a hair-loss dream is not a prophecy or punishment. Let personal faith remain one reflective lens among bodily and emotional explanations.",
    wakingLifeMeaning: "Consider where work, aging, health anxiety, or rapid change feels likely to show on you. If real symptoms or distress are present, seek qualified care rather than relying on symbolism.",
    context: "Rate of loss, physical sensation, audience, attempts to hide it, and the final appearance determine whether the dream centers exposure, vulnerability, release, or uncertainty.",
    scenarios: [{title:"Hair falls out in handfuls",meaning:"Sudden loss may mirror a situation changing faster than your confidence can adjust."},{title:"Someone notices first",meaning:"The dream may focus on judgment or fear that strain has become visible."},{title:"You lose hair calmly",meaning:"Acceptance or relief can suggest loosening an identity that no longer fits."},{title:"You feel scalp pain",meaning:"A bodily sensation or health concern deserves practical attention before symbolic interpretation."}],
    reflectionQuestions: ["Was the change gradual, sudden, painful, or strangely ordinary?", "Who saw it, and what did you fear they would conclude?", "Did you feel shame, panic, grief, relief, or indifference?", "Where has stress or change become difficult to conceal?", "Could a real physical sensation or health concern be part of the dream?"],
    relatedDreams: [{slug:"hair-growing-rapidly",reason:"This contrasts unwanted visible loss with accelerated growth and the identity changes each can represent."},{slug:"teeth-falling-out",reason:"Both involve visible bodily change and exposure, but teeth add speech and communication concerns."},{slug:"being-admired",reason:"This is relevant when the central issue was how appearance shaped recognition and worth."}]
  },
  "dog-bite": {
    editorialControls: { compactEnding: true },
    microSummary: "A dog bite in a dream can feel like a rupture in expected safety. The dog’s relationship to you, warning signs, location, injury, and your response distinguish betrayal from boundary correction or protective instinct.",
    description: `A dog is often associated with loyalty, so a bite can feel personal even when no real betrayal is present. Ask what trust the dog represented and whether the bite followed warning signs, play, protection, or sudden surprise. A familiar dog in your home raises a different concern from a stray in an unfamiliar street.\n\nRecent conflict, an actual dog encounter, or fear of being hurt can supply the image. The dream does not prove that someone close is dangerous.`,
    emotionalMeaning: "Shock and hurt may reflect a breach of expectation; anger can mark a boundary; guilt may arise if you ignored a warning; calm observation can suggest learning to respect a limit rather than fearing attack.",
    symbolicMeaning: "The bite is an action, not a fixed omen. Teeth breaking skin make vulnerability concrete; a warning growl that you dismissed adds responsibility; protecting a child or home shifts the dog toward guarded care.",
    spiritualMeaning: "Animal symbolism varies across traditions. A dog bite is not evidence of a curse or betrayal; spiritual reflection should remain secondary to the dreamer’s relationship, behavior, and emotional context.",
    wakingLifeMeaning: "Look for a relationship or commitment that was expected to feel safe but now requires clearer limits. Gather evidence and speak directly instead of treating the dream as proof.",
    context: "Whose dog it was, where it bit, what happened before and after, and whether you approached, fled, or protected someone determine the meaning.",
    scenarios: [{title:"A familiar dog bites",meaning:"The shock of violated trust or a boundary inside a close relationship may be central."},{title:"A stray dog attacks",meaning:"Unfamiliar risk, guardedness, or a setting that feels unsafe may matter more than loyalty."},{title:"The bite follows a warning",meaning:"The dream may revisit a limit you noticed but crossed anyway."},{title:"You protect someone from the dog",meaning:"Responsibility and protective instinct may be more important than personal betrayal."}],
    reflectionQuestions: ["What relationship did the dog represent, and did it feel safe before the bite?", "Were there warnings, or did the injury arrive without explanation?", "Did you feel hurt, angry, guilty, afraid, or protective?", "What boundary or expectation may need clearer evidence and conversation?", "Could a recent dog encounter or media image have supplied the scene?"],
    relatedDreams: [{slug:"dog",reason:"This explores the broader relationship with dogs, while the bite centers a rupture or boundary event."},{slug:"snake-bite",reason:"This compares an expected threat with an injury from a trusted animal, clarifying why the dog bite feels personal."},{slug:"being-betrayed",reason:"This is relevant when broken trust, rather than the animal itself, carried the emotional weight."}]
  },
  water: {
    editorialControls: { compactEnding: true },
    microSummary: "Water in a dream changes meaning through movement, condition, depth, and your position in it. Calm, muddy, rising, cold, refreshing, or overwhelming water can each describe a different relationship with feeling and control.",
    description: `Water is too varied to carry one answer. A still lake, a leaking ceiling, and a fast river create different problems. Begin with movement and condition, then locate yourself: watching from shore, swimming, drinking, crossing, being pulled under, or searching for water. Each action shows a different relationship with what the water may represent.\n\nPersonal history can outweigh familiar symbolism. The sea may mean home to one dreamer and danger to another; recent flood exposure, travel, weather, or bodily sensation may supply the image directly.`,
    emotionalMeaning: "Calm water may accompany steadiness or relief; muddy water can fit confusion; cold water may bring shock or alertness; refreshing water can suggest restoration. Fear of depth differs from fear of being unable to return to shore.",
    symbolicMeaning: "Water’s movement shows how a feeling travels, its clarity shows how understandable it is, its depth shows perceived magnitude, and its temperature or force shows the body’s response. Your position determines whether the dream emphasizes observation, participation, nourishment, cleansing, or overwhelm.",
    spiritualMeaning: "Water can evoke cleansing, baptism, renewal, or testing in spiritual traditions, but no water dream guarantees a spiritual message. Let faith, personal history, and ordinary causes share the interpretation.",
    wakingLifeMeaning: "Ask whether you are trying to contain, understand, enter, escape, or receive something in waking life. That may point toward a conversation, rest, support, or a boundary more clearly than the element alone.",
    context: "Movement, clarity, depth, temperature, weather, location, and your ability to enter or leave are the variables that make a water dream specific.",
    scenarios: [{title:"You watch calm water from shore",meaning:"Distance and steadiness may suggest contemplation without readiness to participate."},{title:"You swim confidently",meaning:"Active movement can reflect engagement with a feeling while retaining direction."},{title:"Muddy water surrounds you",meaning:"Confusion or mixed motives may matter, especially if you cannot see the bottom or route out."},{title:"You are swept away",meaning:"Force and lost footing point toward insufficient control or demands exceeding support."},{title:"You drink or wash",meaning:"Water becomes sustaining or cleansing when the dream centers receiving, release, or restoration."}],
    reflectionQuestions: ["How did the water move, and what did its clarity, depth, or temperature feel like?", "Were you watching, entering, crossing, drinking, washing, or trying to escape?", "What emotion changed when the water changed?", "Does your personal history with water alter the usual symbolism?", "What are you currently trying to contain, understand, enter, or leave?"],
    relatedDreams: [{slug:"ocean",reason:"This narrows water to scale, horizon, and the tension between awe and limited control."},{slug:"water-rising",reason:"This focuses on pressure crossing a boundary rather than water’s full range of conditions."},{slug:"flood",reason:"This explores water already occupying a space and the loss or recovery of containment."}]
  },
  "cheating-on-your-partner": {
    editorialControls: { compactEnding: true },
    microSummary: "Cheating in a dream does not automatically mean you want to betray your partner. Guilt, excitement, secrecy, tenderness, and the person involved can reveal whether the dream rehearses conflict, novelty, unmet connection, identity, or ordinary memory processing.",
    description: `A cheating dream can feel like evidence against you, especially when the scene was vivid. It is not proof of an intention or prediction of betrayal. Start with the emotional gap between what happened and how it felt. Guilt may show attachment or fear of harm; excitement may point toward novelty or a neglected part of yourself; indifference may suggest the plot was symbolic or recently supplied by memory.\n\nThe other person matters for what they represent—freedom, admiration, risk, a former identity, or simply recent exposure—not only for who they are.`,
    emotionalMeaning: "Shame and panic can reflect fear of losing trust. Relief or aliveness may signal a need for novelty, autonomy, or emotional validation. Sadness can point toward distance in the current relationship; tenderness may reveal a wish for a quality of connection rather than a wish for that person.",
    symbolicMeaning: "The affair creates a triangle of loyalty, secrecy, desire, and identity. The location, who initiated it, whether it was discovered, and what you protected show the conflict more clearly than the act alone.",
    spiritualMeaning: "A spiritual reading may invite honesty, compassion, and discernment, but the dream is not a moral verdict or divine accusation. Consider real behavior and consent, not dream imagery, when making relationship decisions.",
    wakingLifeMeaning: "Ask what need or tension the scene gave form to: closeness, independence, recognition, escape, or unresolved conflict. A calm conversation about that need is more useful than confessing a dream as though it were an action.",
    context: "The partner, third person, emotional tone, secrecy, discovery, and aftermath distinguish relationship dissatisfaction from curiosity, memory, or identity exploration.",
    scenarios: [{title:"You feel intense guilt",meaning:"Attachment, fear of hurting someone, or a real boundary concern may be active; guilt alone does not prove desire to cheat."},{title:"The dream feels freeing",meaning:"Novelty, autonomy, or a neglected quality may be seeking expression outside the literal scenario."},{title:"The other person is an ex",meaning:"An old emotional pattern or former self may be present rather than a wish to reunite."},{title:"Your partner discovers the affair",meaning:"Fear of exposure, honesty, or consequences may be more central than the imagined relationship."}],
    reflectionQuestions: ["What feeling remained after waking: guilt, excitement, sadness, relief, tenderness, or confusion?", "What quality did the other person represent to you?", "What was hidden, discovered, protected, or lost?", "Is there a need for closeness, novelty, autonomy, or honesty in your current life?", "What real conversation or boundary would address that need without treating the dream as evidence?"],
    relatedDreams: [{slug:"partner-cheating-on-you",reason:"This reverses the fear from betraying to being betrayed and helps identify which side of trust felt vulnerable."},{slug:"kissing-someone",reason:"This explores intimacy and curiosity without the added secrecy or loyalty conflict."},{slug:"arguing-with-your-partner",reason:"This is relevant when the dream’s central issue was unresolved conflict rather than attraction."}]
  },
  "fighting-an-angel": {
    microSummary: "Fighting an angel in a dream can stage a conflict with guidance, conscience, authority, or a change that appears good but feels imposed. Your reason for resisting and the emotional aftermath matter more than labeling the figure holy or hostile.",
    description: `An angel can feel benevolent, powerful, demanding, or unfamiliar. Fighting one creates a tension between what seems right and what you can honestly accept. Ask what you were defending: a boundary, an old identity, a belief, another person, or the right to choose your own timing.\n\nThe image may draw on religious stories, personal faith, conflict with authority, or ordinary stress. It does not prove spiritual attack or divine instruction.`,
    emotionalMeaning: "Anger may show pressure from an expectation that claims moral authority. Fear can reflect guilt or uncertainty; determination may show a needed boundary; relief after the fight can suggest reclaiming agency rather than defeating a holy being.",
    symbolicMeaning: "The angel’s behavior changes the symbol. A figure blocking a door presents authority differently from one offering help; a silent angel invites a different question from one issuing a command. The fight is meaningful because it shows the dreamer’s response to the message or power represented.",
    spiritualMeaning: "Biblical and spiritual traditions include angels as messengers and agents, but a dream cannot establish that a supernatural being appeared. Compare any apparent message with Scripture in context, humility, wise counsel, and real circumstances; do not act from fear alone.",
    wakingLifeMeaning: "Consider a person, institution, belief, or inner standard that seems unquestionably right yet leaves you feeling cornered. A grounded response may be asking questions, setting a boundary, or seeking counsel rather than treating resistance as sin or proof of danger.",
    context: "What the angel wanted, what you were protecting, whether the figure attacked or guided, and how the encounter ended distinguish conscience, authority conflict, spiritual longing, and fear.",
    scenarios: [{title:"The angel blocks your path",meaning:"Resistance may concern a direction or authority that feels imposed, even if others consider it beneficial."},{title:"You fight to protect someone",meaning:"The dream may connect moral courage with responsibility rather than hostility toward the angel."},{title:"The angel attacks first",meaning:"Fear of judgment or coercion may be central; the scene is not evidence of an external attack."},{title:"You stop fighting and feel calm",meaning:"A change in posture may reflect integration, acceptance, or simply relief from conflict."}],
    reflectionQuestions: ["What were you resisting, and what did you believe the angel wanted?", "Did the figure feel protective, judging, commanding, unfamiliar, or threatening?", "What were you trying to protect—your choice, identity, belief, or another person?", "Did the ending bring relief, guilt, surrender, or renewed conflict?", "What evidence and wise counsel should guide any waking decision connected to the dream?"],
    relatedDreams: [{slug:"fighting-a-demon",reason:"This compares resistance to a threatening figure while keeping the angel page focused on morally complex authority."},{slug:"seeing-jesus",reason:"This is relevant when the dream centered guidance, comfort, or faith rather than confrontation."},{slug:"being-judged",reason:"This helps when the angel felt like an evaluator or inner moral standard."}]
  },
  "clear-water": {
    microSummary: "Clear water in a dream can make a feeling, truth, or situation easier to see—but clarity is not the same as safety. Depth, movement, temperature, your position, and whether the visibility brought peace or fear give the image its meaning.",
    description: `Clear water reveals what lies beneath, which can feel peaceful, beautiful, exposing, or dangerous. The useful question is what became visible and whether you could approach it safely. Seeing a clear lake from shore differs from discovering a deep current beneath your feet.\n\nYour history with water, recent travel, weather, or physical sensations may supply the image directly. Treat clarity as an invitation to examine evidence, not proof that every impression is true.`,
    emotionalMeaning: "Relief may show uncertainty easing; wonder can reflect readiness to look closely; fear may arise when clarity exposes something unwanted or reveals depth you cannot control. Calm visibility and threatening transparency are different experiences.",
    symbolicMeaning: "Clarity concerns access to information, not automatic purity. Depth shows magnitude, movement shows emotional force, and your distance shows participation. What the water reveals—objects, people, a bottom, or nothing—changes the question.",
    spiritualMeaning: "Clear water can evoke cleansing or renewal in spiritual traditions, but the dream is not proof of spiritual purity or a divine sign. Let faith-based reflection remain alongside personal history and ordinary causes.",
    wakingLifeMeaning: "Ask what has recently become clearer and what action that clarity permits: a conversation, boundary, decision, or acceptance of incomplete knowledge. Seeing clearly does not require immediate movement.",
    context: "Depth, current, temperature, location, visibility, and whether you were watching or immersed distinguish insight, exposure, restoration, and risk.",
    scenarios: [{title:"You see the bottom from shore",meaning:"Distance with visibility may reflect understanding a situation without being ready to enter it."},{title:"You swim through clear water",meaning:"Movement and breath suggest active engagement while retaining orientation."},{title:"Clear water reveals something frightening",meaning:"The issue may be unwanted clarity or evidence that changes your sense of safety."},{title:"The water feels warm and restorative",meaning:"Clarity may be paired with healing, acceptance, or a return to bodily ease."}],
    reflectionQuestions: ["What did the clear water reveal, and did you want to see it?", "Were you at the edge, swimming, submerged, or trying to leave?", "Did visibility bring peace, wonder, exposure, or fear?", "What has become clearer in waking life, and what remains uncertain?", "Could a real water experience or bodily sensation have shaped the dream?"],
    relatedDreams: [{slug:"water",reason:"This provides the broader movement-and-position framework, while Clear Water centers visibility and what is revealed."},{slug:"calm-water",reason:"This narrows the experience to emotional steadiness; clear water can still be deep or threatening."},{slug:"dirty-water",reason:"This contrasts visibility with murkiness without assuming either condition has one universal meaning."}]
  },
  "many-doors": {
    microSummary: "Many doors in a dream shift the question from whether to move forward to which path deserves your trust. Their sameness, differences, accessibility, and your response reveal choice overload, curiosity, pressure, or a search for permission.",
    description: `One door can symbolize a threshold; many doors create a problem of selection. Identical doors may make every option feel equally uncertain, while distinct doors can expose competing values or futures. Locked, opening, disappearing, or crowded doorways show how available each path feels.\n\nThe dream is not a promise that one choice is destined. It can reflect real decisions, comparison, opportunity, or the exhaustion of keeping every option open.`,
    emotionalMeaning: "Curiosity may signal appetite for possibility; anxiety can reflect fear of irreversible choice; frustration may come from lacking useful information; relief after choosing suggests permission to stop comparing.",
    symbolicMeaning: "The repeated threshold represents selection under uncertainty. What lies beyond a door, who opens it, and whether you can return matter more than the number itself. A hallway of identical doors is a different symbol from a single door guarded by someone.",
    spiritualMeaning: "Doors can carry spiritual associations of invitation or discernment, but a dream cannot identify a divinely approved option. Prayer and wise counsel may support reflection; practical information and consent still guide action.",
    wakingLifeMeaning: "Name the real decision that is consuming attention, then identify what information would make one option meaningfully different. A smaller reversible step may be wiser than waiting for a magical sign.",
    context: "Door differences, locks, permission, destination, time pressure, and whether you chose or kept searching determine the interpretation.",
    scenarios: [{title:"All doors look identical",meaning:"The difficulty may be insufficient information or fear that any choice could be wrong."},{title:"One door stands out",meaning:"A value or opportunity may feel more aligned, though the dream does not guarantee its outcome."},{title:"Doors open and close quickly",meaning:"Urgency or fear of missing out may be more central than the destinations themselves."},{title:"You choose a door and feel relief",meaning:"The ending may show a need to commit and recover attention, not proof that the choice is perfect."}],
    reflectionQuestions: ["How were the doors different, and what could you see or hear beyond them?", "Did you feel curious, pressured, trapped, excited, or relieved?", "Were you choosing freely, waiting for permission, or afraid of losing an option?", "What information would make the waking decision clearer?", "Which small, reversible step would let you move without needing certainty?"],
    relatedDreams: [{slug:"doors",reason:"This covers a single threshold or boundary, while Many Doors focuses on selection among competing paths."},{slug:"opening-a-door",reason:"This is relevant when the act of beginning mattered more than comparing options."},{slug:"being-trapped-in-a-maze",reason:"This helps when repeated choices created disorientation rather than opportunity."}]
  },
  "being-in-a-room-with-many-people": {
    microSummary: "A crowded room in a dream can test belonging, visibility, and the freedom to leave. Who filled the room, whether anyone noticed you, and how your body responded distinguish community from scrutiny or confinement.",
    description: `A room full of people is not automatically a social dream. The enclosed space makes proximity and escape part of the meaning. Familiar faces may raise belonging or family expectations; strangers can make the crowd feel evaluative or anonymous. Notice whether you were participating, searching for someone, hiding, speaking, or unable to move.\n\nThe dream may follow a real gathering, workplace pressure, loneliness, or sensory overload. It does not prove that everyone is judging you.`,
    emotionalMeaning: "Warmth and recognition can suggest community; shame or vigilance may signal scrutiny; loneliness in a crowd points toward disconnection; relief on leaving makes the exit as important as the people.",
    symbolicMeaning: "The room represents a social field with limited personal space. Crowd density, arrangement, sound, and the dreamer’s role show whether connection is available or imposed. A large room with many people differs from a small room where bodies block the exit.",
    spiritualMeaning: "A gathering may evoke fellowship or discernment in spiritual traditions, but the crowd is not proof of divine approval or condemnation. Let personal faith and actual relationships guide reflection.",
    wakingLifeMeaning: "Ask where you are expected to perform belonging, absorb other people’s needs, or make yourself smaller. A practical response may be naming the relationship, taking a pause, or setting a privacy boundary.",
    context: "Who was present, how much space you had, whether you were seen or heard, and what happened at the door distinguish belonging, evaluation, loneliness, and confinement.",
    scenarios: [{title:"Everyone knows you",meaning:"Recognition can feel supportive or exposing depending on whether you wanted the attention."},{title:"You search for one person",meaning:"The crowd may provide a backdrop for attachment, absence, or fear of not finding support."},{title:"You cannot reach the exit",meaning:"Confinement and choice restriction may matter more than social connection."},{title:"You feel at ease among strangers",meaning:"An unfamiliar community or a less guarded version of yourself may be becoming possible."}],
    reflectionQuestions: ["Who filled the room, and did you feel known, ignored, judged, or welcomed?", "Where were the doors and how easy was it to leave?", "Were you participating, searching, hiding, speaking, or simply observing?", "What current group or relationship leaves you with too little space?", "What would belonging with genuine choice look like?"],
    relatedDreams: [{slug:"being-in-a-small-crowded-room",reason:"This narrows the experience to physical compression and blocked space, while this page centers social roles and visibility."},{slug:"being-unable-to-speak",reason:"This is relevant when the crowd’s main effect was losing a voice rather than losing room."},{slug:"being-watched",reason:"This helps when scrutiny or an observer mattered more than the group itself."}]
  },
  "hearing-bells": {
    microSummary: "Hearing or seeing bells in a dream can mark attention, timing, celebration, warning, or a call you are unsure how to answer. The bell’s source, rhythm, setting, and your response matter more than the sound alone.",
    description: `A bell interrupts. It may announce a beginning, a closing, a gathering, a danger, or simply a memory of a familiar sound. Ask what the bell was asking you to notice and whether you wanted to respond. A church bell, school bell, alarm, or bell with no visible source carries different associations.\n\nRecent ceremonies, schedules, music, or waking sounds can supply the image directly.`,
    emotionalMeaning: "A calm tone can feel reassuring or ceremonial; sudden ringing can bring urgency; repeated bells may create pressure; silence after the sound can leave uncertainty about whether the call was answered.",
    symbolicMeaning: "The bell is an attention event, not a universal message. Rhythm and source show whether the dream concerns timing, transition, invitation, or interruption. A bell you ring yourself differs from one that summons you without explanation.",
    spiritualMeaning: "Bells can accompany worship, mourning, or ritual, but a ringing dream does not prove a divine summons. Reflect through your faith if appropriate while considering memory, sound, and ordinary stress.",
    wakingLifeMeaning: "Consider a deadline, decision, transition, or message that keeps returning to awareness. The practical question is what you can responsibly attend to now, not what the bell predicts.",
    context: "Source, rhythm, volume, setting, audience, and whether you answered or ignored the sound determine the dream’s emphasis.",
    scenarios: [{title:"A bell rings once",meaning:"A single interruption may mark one decision or realization asking for attention."},{title:"The bell repeats urgently",meaning:"Repeated sound can mirror escalating reminders, deadlines, or reassurance-seeking."},{title:"You ring the bell",meaning:"Initiating the sound shifts the dream toward asking for help, gathering others, or claiming attention."},{title:"You cannot find the source",meaning:"Uncertainty about what is calling may be more important than any spiritual association."}],
    reflectionQuestions: ["What kind of bell was it, and where did the sound seem to come from?", "Did it feel comforting, celebratory, urgent, intrusive, or mysterious?", "Were you answering a call, waiting, hiding, or making the sound yourself?", "What keeps asking for your attention in waking life?", "Could a recent ceremony, schedule, alarm, or sound during sleep have shaped it?"],
    relatedDreams: [{slug:"hearing-your-name-called",reason:"This narrows attention to a personally addressed call, while bells can signal a wider event or transition."},{slug:"angel-numbers",reason:"Both can feel like meaningful signals, but bells provide sound, rhythm, and source to examine."},{slug:"hearing-a-voice",reason:"This helps when words or a speaker mattered more than the interruption itself."}]
  },
  "intimacy-with-strange-creature": {
    microSummary: "Intimacy with a strange creature in a dream can explore closeness to an unfamiliar feeling, instinct, or identity. Consent, fear, tenderness, and what the creature represented matter more than treating the scene as a literal desire.",
    description: `An unfamiliar creature makes intimacy feel both revealing and uncertain. The dream may be exploring a part of yourself you usually keep separate, a relationship that crosses expectations, or curiosity about what seems different. Begin with consent and emotional tone: did closeness feel chosen, pressured, safe, shameful, fascinating, or threatening?\n\nThe creature’s behavior and qualities give the encounter content. Recent fiction, media, memory, or bodily sensation can also shape an unusual scene.`,
    emotionalMeaning: "Tenderness may suggest acceptance of a neglected quality; fear or disgust may mark a boundary; curiosity can signal exploration; shame may reflect social judgment rather than the creature itself. Relief after separation is meaningful too.",
    symbolicMeaning: "The creature represents qualities through its form, movement, intelligence, and distance from the human. Intimacy symbolizes contact and integration, but the relationship can be mutual, unequal, protective, or coercive. The dreamer’s agency decides which reading is plausible.",
    spiritualMeaning: "Some traditions use animal or hybrid figures symbolically, but an unusual intimate dream is not proof of possession, prophecy, or moral corruption. Keep spiritual reflection grounded in consent, faith, and personal context.",
    wakingLifeMeaning: "Ask what unfamiliar quality or relationship is becoming close: creativity, instinct, vulnerability, difference, or a need you have judged. No waking action is required simply because the dream was vivid.",
    context: "Creature qualities, consent, setting, body response, and what happened afterward distinguish integration from fear, pressure, curiosity, or ordinary dream imagery.",
    scenarios: [{title:"The creature feels gentle and familiar",meaning:"Closeness may reflect acceptance of a part of yourself that once seemed strange."},{title:"You feel pressured or unable to leave",meaning:"The dream may be processing a boundary violation, fear, or loss of agency rather than desire."},{title:"The creature speaks or teaches",meaning:"Its message may give language to an intuition or value; assess it as inner material, not external authority."},{title:"You feel shame after waking",meaning:"Social expectations may be shaping the reaction more than the dream’s actual emotional experience."}],
    reflectionQuestions: ["What did the creature feel like it represented—instinct, difference, danger, creativity, or care?", "Was the intimacy chosen, mutual, confusing, pressured, or frightening?", "Which detail made the creature seem safe or unsafe?", "What unfamiliar quality or relationship is becoming closer in waking life?", "Could recent media, memory, or bodily sensation have supplied the image?"],
    relatedDreams: [{slug:"intimacy-with-an-animal",reason:"This broadens the encounter to animal closeness, while the strange-creature page centers unfamiliar form and identity."},{slug:"person-changing-into-an-animal",reason:"This is relevant when transformation of a person, rather than intimacy itself, carried the meaning."},{slug:"shapeshifter",reason:"This helps when uncertainty about appearance and trust mattered more than closeness."}]
  },
  famine: {
    microSummary: "A famine dream can reveal what feels chronically scarce—food, money, care, time, safety, or hope. Whether you searched, shared, hoarded, helped, or went numb shows how deprivation is affecting your choices.",
    description: `Famine is not ordinary hunger; it is prolonged lack that changes how a whole community survives. In a dream, that scale can describe a need that has gone unattended for too long, but it may also reflect news, family history, spiritual stories, or real food insecurity.\n\nNotice what was scarce and how people responded. Searching for food, protecting a child, sharing a small supply, or watching others hoard each gives the image a different moral and emotional shape.`,
    emotionalMeaning: "Panic may reflect fear that resources will not last; numbness can show exhaustion; generosity may reveal solidarity; shame or guilt may arise around having more than others. Relief after finding food matters as much as the shortage.",
    symbolicMeaning: "The famine symbolizes a system of insufficient support rather than one isolated want. The missing resource, the people affected, and the distribution of what remains show whether the dream concerns deprivation, injustice, responsibility, or resilience.",
    spiritualMeaning: "Biblical famine stories can evoke testing, injustice, repentance, provision, and communal responsibility, but the dream is not a prophecy of disaster or punishment. Read tradition in context and keep real-world compassion central.",
    wakingLifeMeaning: "Ask what has been rationed in your life: rest, affection, money, attention, or time. The practical response may be seeking support, sharing responsibility, or addressing a material need directly rather than interpreting scarcity as fate.",
    context: "What was scarce, who was affected, whether help existed, and how you responded distinguish personal depletion from collective fear or moral concern.",
    scenarios: [{title:"You search for food",meaning:"The dream may center active need-seeking and whether a route to support is visible."},{title:"You share a small supply",meaning:"Solidarity and responsibility may be more important than personal deprivation."},{title:"Others hoard resources",meaning:"The image can reflect mistrust, unfairness, or fear that systems will not protect people equally."},{title:"The fields begin to recover",meaning:"Renewal may be possible, but rebuilding requires time and shared work rather than instant rescue."}],
    reflectionQuestions: ["What exactly was scarce, and did it feel personal or communal?", "Were you searching, sharing, protecting, hoarding, helping, or unable to act?", "Which feeling stayed strongest—panic, numbness, generosity, guilt, or hope?", "Where is a real need being rationed or ignored?", "What practical support would make the situation less dependent on endurance alone?"],
    relatedDreams: [{slug:"drought",reason:"This focuses on environmental absence and waiting, while famine centers the human consequences of prolonged scarcity."},{slug:"bread",reason:"This explores nourishment and shared provision at a personal scale."},{slug:"harvesting",reason:"This offers the contrasting cycle of labor, yield, and resources becoming available."}]
  },
  "being-late-for-class": {
    microSummary: "Being late for class in a dream can expose a fear of arriving unprepared, being evaluated, or following a timetable that no longer fits. What delayed you, who was waiting, and whether you entered the room change the interpretation.",
    description: `A classroom turns lateness into a test of readiness and belonging. The dream may revive school memories, but it can also borrow that setting for a present deadline, comparison, or fear of being judged. The useful question is what you thought would happen if you arrived late—and whether the class represented learning, performance, or someone else’s timetable.\n\nTraffic, missing materials, an unknown room, or being unable to find your schedule each creates a different obstacle.`,
    emotionalMeaning: "Panic may reflect evaluation pressure; shame can signal fear of disappointing others; frustration may come from obstacles outside your control; relief after entering suggests the feared judgment was larger than the actual consequence.",
    symbolicMeaning: "The class symbolizes a standard or lesson, while lateness represents a mismatch between demand and preparation. The teacher, classmates, subject, and seat show whose expectations are active and whether learning or performance is central.",
    spiritualMeaning: "A school setting can invite reflection on growth or humility, but the dream is not a divine grade or warning. Use spiritual language only if it fits your faith and keep practical evidence in view.",
    wakingLifeMeaning: "Identify the current timetable you are trying to meet: work, family, study, or a milestone. A smaller preparation step, renegotiated deadline, or kinder standard may address the real pressure better than self-criticism.",
    context: "What class you were late for, the cause of delay, who judged you, whether you entered, and how prepared you felt distinguish performance anxiety from a timetable that no longer belongs to you.",
    scenarios: [{title:"You cannot find the classroom",meaning:"Unclear expectations or direction may be more central than lack of effort."},{title:"You arrive without materials",meaning:"The dream may focus on fear of being exposed as unprepared or unsupported."},{title:"The teacher welcomes you",meaning:"Acceptance can soften the imagined consequence and reveal that learning remains available after delay."},{title:"You never reach the room",meaning:"The unresolved ending may mirror a deadline or standard that still feels inaccessible."}],
    reflectionQuestions: ["What class or subject was it, and what did it represent to you?", "What caused the delay—your choice, another person, traffic, confusion, or missing materials?", "Who was watching, and what consequence did you fear?", "Did you know what you wanted to learn but lack a workable route to it?", "Whose timetable are you following, and what preparation would be genuinely enough?"],
    relatedDreams: [{slug:"being-late",reason:"This broadens lateness to deadlines and timing, while class adds evaluation and learning history."},{slug:"failing-an-exam",reason:"This focuses on performance outcome rather than getting to the lesson."},{slug:"going-back-to-school",reason:"This is relevant when returning to an earlier identity or learning environment carried the emotional weight."}]
  },
  "dirty-water": {
    seoDescription: "Dirty water in a dream can reflect unclear, contaminated, or emotionally difficult conditions. Contact, source, movement, and whether it clears change the meaning.",
    microSummary: "Dirty water in a dream often points to a situation you cannot assess or enter cleanly. Where the water came from, whether you touched it, and whether it spread or cleared distinguish uncertain information from direct emotional involvement.",
    description: `Dirty water makes visibility and contact uncertain. Watching a muddy river from the bank is different from being forced to drink it, falling into it, or seeing clean water become polluted. The useful question is not whether the water is “bad,” but what made it difficult to trust and what you did next.\n\nRecent weather, plumbing, illness, travel, or media can supply the image. Dirty water does not prove moral contamination, spiritual attack, or coming harm.`,
    emotionalMeaning: "Disgust can mark a boundary; fear may reflect uncertainty about safety; shame can arise when the dreamer feels associated with the mess; relief as the water clears can show that confusion is becoming workable. Calm observation suggests more distance than panic while submerged.",
    symbolicMeaning: "Water carries and reveals conditions. Dirt, oil, debris, or cloudiness changes what can be seen and whether contact feels safe. The source matters: contamination entering clean water suggests a changed situation, while sediment settling may represent clarity returning without force.",
    spiritualMeaning: "Some traditions associate clean water with purification, but dirty water is not evidence of impurity, punishment, or an omen. Spiritual reflection should remain connected to the dreamer's beliefs, actual conduct, and ordinary sources for the image.",
    wakingLifeMeaning: "Consider where information, motives, or emotional boundaries feel hard to read. The practical response may be gathering facts, reducing exposure, naming a concern, or waiting for conditions to settle rather than treating discomfort as proof.",
    context: "Source, visibility, smell, movement, contact, bodily response, and whether the water cleared determine whether the dream concerns uncertainty, exposure, disgust, or recovery.",
    scenarios: [{title:"You watch from the bank",meaning:"Distance may allow concern without direct involvement; ask why you stayed out."},{title:"You fall or swim in it",meaning:"Direct contact can reflect being caught inside conditions you distrust rather than merely observing them."},{title:"Clean water turns dirty",meaning:"A change in evidence, trust, or circumstances may be the central event."},{title:"The water begins to clear",meaning:"Settling sediment can represent understanding returning gradually, not instant purity."}],
    reflectionQuestions: ["What made the water seem unsafe or unclear?","Were you observing, entering, drinking, cleaning, or escaping it?","Where did the contamination begin, and did anyone else notice?","What fact or boundary would help you assess a waking situation more clearly?","Could weather, plumbing, illness, or recent imagery have supplied the scene?"],
    relatedDreams: [{slug:"water",reason:"This provides the broad movement-and-condition framework; Dirty Water focuses specifically on uncertain visibility and contact."},{slug:"falling-or-swimming-in-dirty-water",reason:"This is the closer path when involuntary entry or immersion, rather than the water's condition alone, drove the dream."},{slug:"clear-water",reason:"This contrasts uncertainty with visibility while showing that clear water is not automatically safe."}]
  },
  "boat-sinking": {
    seoDescription: "A sinking boat dream can reflect a shared plan or coping structure failing under pressure. Cause, passengers, rescue, and what survives shape the interpretation.",
    microSummary: "A sinking boat dream often asks whether the structure carrying you through difficulty can still hold. The leak, speed, passengers, your response, and whether anyone reached safety distinguish repairable strain from the end of a shared course.",
    description: `A boat normally creates a boundary between the traveller and the water. When it sinks, that boundary fails. The dream may concern a plan, relationship, team, or coping method that no longer keeps pressure outside. Notice whether you repaired the leak, abandoned the boat, helped passengers, froze, or discovered shallow water beneath you.\n\nThe dream is not a forecast of an accident. Recent travel, films, news, or bodily sensations during sleep may contribute.`,
    emotionalMeaning: "Panic may signal rapidly narrowing options; guilt can arise when others depend on you; grief may mark the end of a shared chapter; relief after leaving can show that preserving the vessel was no longer the right task.",
    symbolicMeaning: "The boat represents a means of passage, not simply the self. A leak suggests gradual loss of capacity; capsizing suggests sudden instability; overloaded cargo points to demands; the waterline shows how much pressure the structure can contain.",
    spiritualMeaning: "Boat and storm stories can support reflection on trust and community, but a sinking dream does not prove punishment, failed faith, or divine warning. Practical safety and evidence remain primary.",
    wakingLifeMeaning: "Ask what plan or shared arrangement is taking on more pressure than it can carry. Repair, asking for help, reducing load, or leaving safely are different responses; the dream cannot choose among them without waking evidence.",
    context: "Cause, pace, water conditions, passengers, cargo, available rescue, and the ending determine whether the dream concerns repair, responsibility, surrender, or transition.",
    scenarios: [{title:"A slow leak appears",meaning:"Accumulating strain may still be visible enough to address."},{title:"The boat is overloaded",meaning:"The problem may be capacity and competing obligations rather than navigation."},{title:"You help others into safety",meaning:"Responsibility and available resources matter more than solitary fear."},{title:"You reach shore after it sinks",meaning:"The vessel may end while the underlying journey or relationship to safety continues."}],
    reflectionQuestions: ["What caused the boat to fail, and when did you notice?","Who or what was depending on it?","Did you repair, signal, rescue, abandon, or freeze?","What current structure is carrying more than it can sustain?","What would a safe response look like if repair is no longer enough?"],
    relatedDreams: [{slug:"boat",reason:"Boat covers navigation and role while the vessel is functioning; this page centers failure of that support."},{slug:"water-rising",reason:"This helps when pressure crossing a boundary mattered more than the vessel itself."},{slug:"drowning",reason:"This is the closer path when bodily survival underwater, not the shared structure, dominated."}]
  },
  "finding-a-baby": {
    seoDescription: "Finding a baby in a dream can reflect discovering a vulnerable responsibility or possibility. Location, condition, consent, support, and what follows change the meaning.",
    microSummary: "Finding a baby in a dream places discovery before responsibility: something vulnerable appears and you must decide whether and how to respond. The baby's condition, where it was found, whose child it was, and whether help arrived distinguish welcome possibility from an unsupported demand.",
    description: `This dream begins with an encounter, not a birth. You may feel chosen, alarmed, protective, resentful, or unsure whether the baby belongs with you. Finding a healthy baby in a safe place differs from discovering one abandoned, injured, hidden, or already being searched for. What happens after discovery is the interpretation's center.\n\nThe image does not predict pregnancy or impose a duty. Parenting experience, fertility concerns, grief, news, and recent contact with children can shape it.`,
    emotionalMeaning: "Tenderness may reveal readiness to care; panic can signal responsibility without resources; anger may concern whoever left the burden; relief when help arrives shows that support, not avoidance, was missing.",
    symbolicMeaning: "The baby represents something vulnerable and dependent only when the dream context supports that reading. Finding emphasizes recognition and response: a new possibility, neglected need, or responsibility existed before the dreamer claimed it.",
    spiritualMeaning: "Traditions may view children as gifts or responsibilities, but this dream does not prove a promised pregnancy, calling, or divine assignment. Discernment should include consent, capacity, community, and ordinary explanations.",
    wakingLifeMeaning: "Consider what recently came to your attention and now seems to require care. Before accepting responsibility, identify ownership, urgency, support, and the smallest protective action grounded in real evidence.",
    context: "Location, the baby's condition and identity, the dreamer's consent, available caregivers, and the outcome distinguish discovery, rescue, unwanted responsibility, and hope.",
    scenarios: [{title:"The baby is safe and responsive",meaning:"Discovery may feel like a welcome possibility, especially if care is shared."},{title:"The baby has been abandoned",meaning:"Neglect and urgent protection become more central than new beginnings."},{title:"Someone is searching for the baby",meaning:"Returning responsibility or reconnecting what was separated may matter more than keeping it."},{title:"You cannot find help",meaning:"The dream may expose unsupported responsibility rather than a lack of compassion."}],
    reflectionQuestions: ["Where did you find the baby, and what made you stop?","Did care feel chosen, imposed, frightening, or welcome?","Who else had responsibility, and was support available?","What vulnerable possibility or need has recently come to your attention?","Could parenting, fertility, grief, news, or recent contact with children explain the image?"],
    relatedDreams: [{slug:"abandoned-baby",reason:"This narrows the dream to neglect and urgent care; Finding a Baby also includes safe discovery and return."},{slug:"holding-a-baby",reason:"This focuses on the experience of caregiving after contact has already been established."},{slug:"giving-birth",reason:"Birth centers bringing something forth; finding centers encountering something that already exists."}]
  },
  locusts: {
    seoDescription: "Locust dreams may reflect cumulative loss, collective pressure, or fear that many small demands will consume resources. Scale, damage, response, and context matter.",
    microSummary: "Locusts in a dream often turn one manageable concern into a problem of scale. Whether the swarm approached, consumed crops, passed without damage, or was driven away helps distinguish anticipated depletion from loss already underway.",
    description: `A locust is small; a swarm changes a landscape. That shift from one to many is the page's central clue. The dream may reflect repeated demands, collective pressure, threatened work, or frightening imagery absorbed from Scripture, history, farming, or news. Notice what the locusts consumed and whether people prepared, shared resources, fought them, or simply watched.\n\nLocust dreams do not predict plague, famine, punishment, or economic disaster.`,
    emotionalMeaning: "Dread before the swarm may reflect anticipated depletion; helplessness can arise when no single action seems sufficient; anger may concern preventable loss; relief after it passes highlights endurance and recovery.",
    symbolicMeaning: "Locusts represent cumulative impact through number and appetite. Crops connect the threat to invested labor and future provision; locusts inside a home shift the issue toward intrusion; a swarm that causes no damage may expose fear larger than the outcome.",
    spiritualMeaning: "Biblical locust passages include judgment, devastation, repentance, and restoration in distinct historical and literary contexts. A personal dream may borrow that tradition, but it is not evidence that God is announcing punishment or disaster.",
    biblicalMeaning: "Joel describes locust devastation and later restoration; Exodus places locusts within a specific plague narrative. These texts provide cultural associations, not a formula for decoding an individual's dream. Personal context and the dream's actual outcome remain necessary.",
    wakingLifeMeaning: "Look for many small demands consuming time, money, attention, or the results of sustained work. A useful response may involve protecting a resource, coordinating with others, or separating actual loss from catastrophic anticipation.",
    context: "Number, direction, what was consumed, collective response, available protection, and whether recovery began determine the interpretation.",
    scenarios: [{title:"The swarm is approaching",meaning:"Anticipation and preparation may matter more than damage that has not occurred."},{title:"Crops are consumed",meaning:"Threatened labor, provision, or future yield becomes specific."},{title:"Locusts enter the home",meaning:"Collective pressure has crossed into private safety or daily life."},{title:"The swarm passes",meaning:"The ending can shift the dream toward survival, assessment, and rebuilding."}],
    reflectionQuestions: ["Was the threat one locust or a swarm, and what changed with scale?","What resource or work was being consumed?","Did you prepare, cooperate, flee, fight, or wait?","Are repeated small demands creating a cumulative waking cost?","Could Scripture, farming, news, or recent media have supplied the imagery?"],
    relatedDreams: [{slug:"famine",reason:"Famine centers prolonged scarcity and distribution; locusts center a multiplying cause of threatened loss."},{slug:"giant-bugs",reason:"Giant Bugs changes threat through size, while Locusts changes it through number and collective appetite."},{slug:"harvesting",reason:"This is relevant when the threatened or preserved yield of prior work carried the emotional weight."}]
  },
  "being-drunk": {
    seoDescription: "Being drunk in a dream can reflect impaired agency, exposure, escape, or social pressure. Cause, consent, behavior, witnesses, and recovery shape the meaning.",
    microSummary: "Being drunk in a dream often centers reduced agency: your perception, movement, speech, or judgment no longer works as expected. Whether intoxication was chosen, accidental, pressured, frightening, or relieving distinguishes escape from vulnerability or loss of consent.",
    description: `The important detail is not a moral label but what intoxication changed. Did you lose time, say something, become unable to leave, enjoy release, fear being judged, or try to protect someone? Being secretly drugged or pressured is fundamentally different from choosing to drink.\n\nReal alcohol use, recovery, medication, illness, dehydration, social events, or bodily sensations can shape the dream. It cannot diagnose addiction or prove wrongdoing.`,
    emotionalMeaning: "Relief may reveal a wish to loosen control; shame can reflect exposure; fear may concern impaired consent or safety; confusion can mirror unreliable information; determination while sobering up points toward restored agency.",
    symbolicMeaning: "Intoxication changes perception and control, but its source matters. A voluntary drink may concern escape or experimentation; unexpected impairment concerns vulnerability; performing normally while impaired may reflect concealed strain.",
    spiritualMeaning: "Religious traditions may value sobriety and discernment, but the dream is not proof of sin, possession, or divine condemnation. Apply spiritual reflection with compassion, evidence, and awareness of medical or experiential causes.",
    wakingLifeMeaning: "Ask where pressure, emotion, another person, or exhaustion is reducing your ability to choose clearly. The grounded response may be rest, information, a boundary, support, or professional help if real substance use concerns exist.",
    context: "Cause, consent, degree of impairment, company, behavior, consequences, and whether clarity returned determine the reading.",
    scenarios: [{title:"You become impaired unexpectedly",meaning:"Loss of consent or unexplained vulnerability is more central than escape."},{title:"Friends pressure you to drink",meaning:"Belonging and boundary pressure may be driving the scene."},{title:"You embarrass yourself",meaning:"Exposure and feared consequences may matter more than alcohol itself."},{title:"You become sober",meaning:"Regaining perception and choice can shift the dream toward recovery or accountability."}],
    reflectionQuestions: ["How did the intoxication begin, and did you consent?","Which ability changed first: movement, speech, memory, judgment, or boundaries?","Who was present, and did anyone protect or exploit your vulnerability?","Where is your waking agency being reduced by pressure, emotion, or exhaustion?","Could alcohol, medication, illness, recovery, or a recent event have shaped the dream?"],
    relatedDreams: [{slug:"losing-control",reason:"This gives the broader control framework; Being Drunk focuses on altered perception and agency."},{slug:"being-unable-to-speak",reason:"This is relevant when impaired communication, rather than intoxication itself, carried the fear."},{slug:"being-judged",reason:"This helps when exposure and other people's response outweighed the loss of control."}]
  },
  "watching-a-natural-disaster": {
    seoDescription: "Watching a natural disaster in a dream can reflect distance from large-scale change. Safety, responsibility, warning, intervention, and outcome shape the meaning.",
    microSummary: "Watching a natural disaster rather than being caught inside it makes distance the central question. Your vantage point, who remained in danger, and whether you warned, recorded, prepared, or withdrew distinguish useful perspective from helplessness or detachment.",
    description: `A tornado crosses the horizon, water overtakes a town, or the earth shifts while you remain an observer. Being physically safe does not settle the meaning: you may feel responsible for others, unable to intervene, fascinated, numb, or aware that danger is moving closer. The kind of disaster matters, but your relationship to it matters more.\n\nSuch dreams are not reliable forecasts. News, weather, films, community anxiety, and recent emergencies can supply dramatic imagery.`,
    emotionalMeaning: "Awe can coexist with fear when events exceed personal scale. Guilt may come from being safe while others struggle; numbness can be temporary emotional distance; urgency may indicate a real but bounded responsibility.",
    symbolicMeaning: "The viewing place represents access, distance, and protection. A window, hill, screen, or shelter each changes what action is possible. The disaster supplies the form of disruption; watching supplies the tension between awareness and participation.",
    spiritualMeaning: "Disaster imagery may prompt compassion, humility, prayer, or preparation, but it does not prove prophecy, punishment, or a supernatural warning. Faith-based reflection should reduce panic and remain answerable to evidence.",
    biblicalMeaning: "Biblical upheaval imagery belongs to particular narratives and literary contexts. It can inform tradition without turning an individual dream into a timetable or prediction.",
    wakingLifeMeaning: "Consider whether you are witnessing organizational change, family crisis, frightening news, or another person's struggle. Identify what is yours to do, what requires shared action, and what remains outside your control.",
    context: "Vantage point, distance, disaster type, people at risk, available action, warning time, and outcome distinguish perspective, responsibility, helplessness, and preparation.",
    scenarios: [{title:"You watch from shelter",meaning:"Safety may create perspective, survivor guilt, or responsibility to help within limits."},{title:"You try to warn people",meaning:"The focus may be whether your concern is heard and what evidence supports action."},{title:"You record instead of moving",meaning:"Documentation can mean useful witnessing or emotional distance depending on available choices."},{title:"The danger turns toward you",meaning:"A problem once observed may now feel personally relevant or less containable."}],
    reflectionQuestions: ["Where were you watching from, and what protection did it provide?","Who was still exposed, and what responsibility did you believe you had?","Did you warn, document, prepare, help, freeze, or leave?","What current event feels large but still offers one bounded response?","Could news, weather, film, or a recent emergency have supplied the scene?"],
    relatedDreams: [{slug:"tornado",reason:"This focuses on volatile movement when the tornado itself, rather than observer distance, dominated."},{slug:"flood",reason:"This is the closer path when water crossing boundaries shaped the experience."},{slug:"earthquake",reason:"This helps when shaken foundations and what remained standing mattered most."}]
  },
  "living-a-double-life": {
    seoDescription: "Living a double life in a dream can reflect incompatible roles, secrecy, or the cost of managing separate audiences. Choice, discovery, and consequences matter.",
    microSummary: "Living a double life in a dream often exposes the cost of keeping roles, relationships, or values separated. What was hidden, from whom, and whether the second life felt chosen or necessary distinguish deception from privacy, adaptation, or an identity that lacks a safe place to exist.",
    description: `A double life requires maintenance. The dream may involve separate homes, partners, jobs, names, beliefs, or versions of yourself, along with the constant risk that the two worlds meet. The anchor is not simply “identity”; it is the work and consequence of preventing integration.\n\nPrivacy is not automatically dishonesty. The dream may reflect code-switching, safety, caregiving roles, creative experimentation, or recent stories as readily as guilt.`,
    emotionalMeaning: "Fear of discovery can signal real conflict or an unforgiving audience; excitement may show freedom unavailable in one role; exhaustion highlights the cost of switching; relief when truth emerges may reveal a wish for integration.",
    symbolicMeaning: "Two lives represent contexts that are being kept apart. Different names, homes, clothing, or partners show which values and obligations change between them. Discovery forces those systems into contact and reveals the feared consequence.",
    spiritualMeaning: "Traditions may value integrity, but a dream cannot prove hypocrisy or guilt. Discernment should distinguish harmful deception from legitimate privacy and from adaptation used for safety.",
    wakingLifeMeaning: "Map the audiences, obligations, and values attached to each role. A grounded step might be one honest conversation, a boundary, or a safer place for an excluded part of life—not indiscriminate disclosure.",
    context: "What differed between lives, who knew, why separation existed, how discovery occurred, and what it cost determine the interpretation.",
    scenarios: [{title:"You maintain two families or homes",meaning:"Competing attachment and responsibility may be more central than abstract identity."},{title:"The second life feels freer",meaning:"An excluded need or value may lack expression in the primary role."},{title:"Someone discovers the secret",meaning:"The expected reaction reveals whether guilt, safety, rejection, or accountability drives the fear."},{title:"You choose one life",meaning:"The ending may concern integration or loss, not proof that one role is false."}],
    reflectionQuestions: ["What changed between the two lives: name, relationship, work, values, or behavior?","Why did the worlds need to remain separate?","Did secrecy protect safety, avoid accountability, or preserve freedom?","What consequence did discovery create?","What honest but appropriately bounded waking step would reduce the conflict?"],
    relatedDreams: [{slug:"seeing-your-double",reason:"Seeing Your Double externalizes a counterpart; Living a Double Life centers the work of maintaining separate roles."},{slug:"hiding-something",reason:"This is relevant when one concealed fact, rather than an entire parallel role, drove the dream."},{slug:"being-caught",reason:"This helps when exposure and consequence outweighed the structure of the two lives."}]
  },
  "seeing-your-double": {
    seoDescription: "Seeing your double in a dream can stage an encounter with a competing, rejected, or possible version of yourself. Recognition, behavior, and outcome shape meaning.",
    microSummary: "Seeing your double in a dream turns identity into an encounter: another version of you can be watched, questioned, feared, protected, or followed. What the double knew or did—and whether you recognized it as yourself—distinguishes comparison from disowned feeling, possible identity, or loss of control over how you are represented.",
    description: `A double is not merely a secret role. It stands outside you and can act independently, occupy your place, imitate you, or reveal a quality you do not claim. Notice who recognized the double, whether it behaved like you, and what happened when you approached it.\n\nThe image is common in fiction and can arise through memory, media, self-observation, or ordinary dream construction. It does not prove a supernatural duplicate or external presence.`,
    emotionalMeaning: "Fear may reflect replacement or loss of ownership; curiosity can support comparison; shame may attach to a rejected quality; compassion toward the double can indicate willingness to understand rather than eliminate conflict.",
    symbolicMeaning: "The double externalizes a possible, competing, performed, or disowned self. Identical appearance with different behavior emphasizes agency; altered age or condition emphasizes a possible path; imitation raises authorship and reputation.",
    spiritualMeaning: "Folklore gives doubles ominous meanings, but a dream double is not reliable evidence of death, possession, or warning. Personal context and ordinary sources are safer interpretive ground.",
    wakingLifeMeaning: "Consider where you are comparing yourself with a possible version, watching someone else define you, or avoiding a quality that needs examination. Choose evidence-based reflection rather than treating the double as an instruction.",
    context: "Recognition, resemblance, independent behavior, witnesses, setting, dialogue, and what happened after contact determine the reading.",
    scenarios: [{title:"The double copies you",meaning:"Imitation may raise concern about representation, conformity, or ownership of a role."},{title:"The double acts differently",meaning:"A competing possibility or rejected response becomes visible."},{title:"Others prefer the double",meaning:"Replacement, comparison, and fear of being misunderstood may drive the dream."},{title:"You speak with the double",meaning:"Dialogue can turn conflict into examination of a choice or quality."}],
    reflectionQuestions: ["What made you certain the figure was your double?","What did it do that you would or would not do?","Who else recognized it, and what did you fear they would believe?","Which possible or rejected version of yourself does it resemble?","Could fiction, mirrors, photographs, or recent self-comparison have supplied the image?"],
    relatedDreams: [{slug:"living-a-double-life",reason:"That page concerns maintaining separate roles; Seeing Your Double centers an external encounter with a counterpart."},{slug:"watching-yourself-like-a-movie",reason:"This is relevant when observational distance, rather than an independently acting copy, carried the meaning."},{slug:"different-reflection-in-the-mirror",reason:"This helps when the altered self remained inside a reflection instead of entering the dream as another figure."}]
  },
  "being-in-a-small-crowded-room": {
    seoDescription: "A small crowded room dream can reflect compressed options, overstimulation, or insufficient personal space. Density, exits, bodily response, and relief matter.",
    microSummary: "A small crowded room dream is less about being social than losing usable space. How tightly people pressed in, whether you could move or reach an exit, and what your body did distinguish unwanted closeness from overstimulation, blocked choice, or temporary discomfort.",
    description: `The room's capacity is the key. A lively group with room to move differs from bodies blocking the door, air feeling scarce, noise becoming unbearable, or more people continually entering. Identify what became impossible: movement, privacy, speech, rest, or leaving.\n\nReal heat, bedding, breathing discomfort, a crowded event, or sensory overload can influence the dream. Persistent breathing symptoms deserve ordinary medical attention, not symbolic certainty.`,
    emotionalMeaning: "Panic can follow blocked movement or breath; irritation may concern repeated boundary crossings; numbness can signal overload; relief outside the room shows which form of space was needed.",
    symbolicMeaning: "The small room represents limited capacity. People, belongings, noise, heat, and blocked exits show what consumes that capacity. The image becomes interpretive when it identifies what the dreamer can no longer do.",
    spiritualMeaning: "A desire for quiet or inner space may be spiritually relevant, but crowding is not proof that people or influences are spiritually harmful. Practical boundaries and bodily context come first.",
    wakingLifeMeaning: "Ask which environment leaves too little room to think, recover, move, or decline requests. The next step may be reducing one demand, protecting recovery time, or naming an exit rather than rejecting every relationship present.",
    context: "Room size, crowd density, identity of people, noise, air, exit access, bodily response, and what changed after leaving determine the reading.",
    scenarios: [{title:"People keep entering",meaning:"Accumulating demands may be exceeding capacity rather than one person causing the problem."},{title:"The exit is blocked",meaning:"Restricted choice and lack of a workable pause become central."},{title:"The room is noisy but not trapped",meaning:"Sensory overload may matter more than physical confinement."},{title:"You step outside and recover",meaning:"The kind of relief identifies whether space, quiet, privacy, or agency was missing."}],
    reflectionQuestions: ["What became impossible as the room filled?","Were the people known, demanding, indifferent, or simply present?","Could you see and reach an exit?","What bodily signal—heat, breath, tension, numbness—stood out?","Where would one protected margin create usable space in waking life?"],
    relatedDreams: [{slug:"being-in-a-room-with-many-people",reason:"That page centers social role and visibility; this one centers physical capacity, compression, and exit."},{slug:"room-closing-in-on-you",reason:"This is the closer path when the room itself shrank without a crowd causing the pressure."},{slug:"being-stuck-in-an-elevator",reason:"This helps when mechanical confinement and interrupted movement mattered more than crowd density."}]
  },
  "intimacy-with-an-animal": {
    seoDescription: "Intimacy with an animal in a dream is usually nonliteral. Species, familiarity, behavior, consent, boundaries, and aftermath shape its possible meaning.",
    microSummary: "Intimacy with an animal in a dream is usually about unusual closeness, not literal desire. The specific animal, your real relationship with it, and whether contact felt mutual, protective, pressured, or frightening determine whether the scene concerns trust, instinct, vulnerability, or a boundary.",
    description: `A recognizable animal brings known behavior and personal history into an intimate scene. Affection with a trusted pet differs from being held by a wild animal, caring for an injured creature, or being unable to stop unwanted contact. Begin with consent and the animal's actual qualities rather than a fixed symbol list.\n\nUnusual dream imagery does not define sexuality, morality, or intent. Recent contact with animals, fiction, bodily sensation, memory, and sleep-state blending can all contribute.`,
    emotionalMeaning: "Tenderness may concern care or trust; curiosity can accompany an unfamiliar quality; fear or disgust can mark a boundary; shame after waking may come from the image's taboo quality rather than the dreamer's wishes.",
    symbolicMeaning: "The animal contributes species, behavior, familiarity, and power; intimacy contributes closeness and vulnerability. A protective dog, constricting snake, injured bird, and unfamiliar predator cannot support the same conclusion.",
    spiritualMeaning: "Animals carry traditions across cultures, but this dream is not proof of possession, corruption, instruction, or a literal bond. Any spiritual reading should remain consent-aware and grounded in personal belief and context.",
    wakingLifeMeaning: "Ask what known quality or relationship has come unusually close and whether that closeness feels chosen. No waking action is required because the scene was vivid; boundaries and real evidence should guide response.",
    context: "Species, familiarity, animal behavior, consent, power difference, setting, bodily response, and aftermath determine the interpretation.",
    scenarios: [{title:"A familiar animal seeks affection",meaning:"Trust, caregiving, memory, or comfort may be more relevant than taboo imagery."},{title:"A wild animal allows closeness",meaning:"Contact with power or instinct may feel possible without being fully controllable."},{title:"You cannot stop the contact",meaning:"Loss of agency or a boundary concern is central; the scene should not be framed as desire."},{title:"You care for an injured animal",meaning:"Vulnerability and responsibility may outweigh intimacy as the dream's real focus."}],
    reflectionQuestions: ["What animal was it, and what history do you have with that species?","Was the closeness chosen, mutual, protective, pressured, or frightening?","What did the animal do before and after contact?","Which known quality—trust, power, vulnerability, instinct, care—did it embody?","Could recent animals, media, memory, or bodily sensation have shaped the scene?"],
    relatedDreams: [{slug:"intimacy-with-strange-creature",reason:"That page centers ambiguity and otherness; this page relies on a recognizable animal and its known relationship."},{slug:"friendly-snake",reason:"This is relevant when a snake's unexpected safety or trust, rather than intimacy generally, drove the dream."},{slug:"animal-attack",reason:"This helps when threat and defensive response replaced mutual or ambiguous closeness."}]
  },
};

export function applyDreamPagePriorityEnrichments(dreams = []) {
  for (const dream of dreams) {
    const questions = reflectionQuestionsBySlug[dream.slug];
    if (questions && (!Array.isArray(dream.reflectionQuestions) || dream.reflectionQuestions.length === 0)) {
      dream.reflectionQuestions = questions;
    }

    if (priorityFieldsBySlug[dream.slug]) {
      Object.assign(dream, priorityFieldsBySlug[dream.slug]);
    }
    if (collisionRepairFields[dream.slug]) {
      Object.assign(dream, collisionRepairFields[dream.slug]);
    }
  }
}
