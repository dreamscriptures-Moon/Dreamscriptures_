function uniqueGuidesBySlug(items) {
  const seen = new Set();

  return items.filter((guide) => {
    if (seen.has(guide.slug)) return false;
    seen.add(guide.slug);
    return true;
  });
}

export const guides = uniqueGuidesBySlug([
{
  slug: "what-are-dreams",
  title: "What are dreams? Meaning, definition, and how they work",
  description: "What dreams are, how they form in the brain, and why they feel real. A clear explanation of dreaming and its deeper meaning.",

  intro:
    "Dreams feel real while you’re in them. Not just visually, but emotionally — as if the experience is actually happening. But when you wake up, they become harder to explain, like something that made sense in the moment but doesn’t fully translate back into waking life.",

  content: [
    "Dreams are experiences that occur during sleep, made up of images, emotions, sensations, and thoughts that unfold without conscious control. When people ask what dreams are, they are often trying to understand why these experiences feel so real and where they come from.",
    "They are not random in the way they appear. Many people wonder whether dreams have meaning, and while they may seem chaotic, they are often shaped by activity in the brain, especially during REM (Rapid Eye Movement) sleep, where imagination, memory, and emotion become highly active.",
    "At the same time, the part of the brain responsible for logic and self-awareness — the prefrontal cortex — becomes less active. This is one reason why dreams feel real even when they don’t make sense.",
    "Dreams often combine elements from different sources: recent experiences, older memories, emotions, and imagined scenarios. These elements are not organized logically, but they are often connected through feeling.",
    "Even when a dream seems confusing or fragmented, it usually leaves behind an emotional impression. That feeling is often more consistent than the storyline itself."
  ],

  sections: [
    {
      title: "What happens in the brain during dreams",
      body: "Dreams are closely linked to REM sleep, a stage where the brain becomes highly active. Visual and emotional regions are engaged, while logical control is reduced. The brain begins to reorganize experiences, combining memory fragments in ways that are not linear but still meaningful. This helps explain what dreams are from a scientific perspective — not random images, but structured mental activity."
    },
    {
      title: "Why dreams feel so real",
      body: "One of the most common questions people ask is why dreams feel so real. During dreams, the brain processes experiences without the same level of logical filtering as waking life. Because the prefrontal cortex is less active, there is little questioning of what is happening. At the same time, sensory and emotional systems remain active, creating a fully immersive experience."
    },
    {
      title: "Emotional and symbolic layers",
      body: "Dreams often organize around emotion rather than logic. A single feeling can shape an entire dream scenario, even if the situation itself is unusual. This is also why people often ask what dreams mean — because even when the story is unclear, the emotion usually feels accurate and connected to real life."
    },
    {
      title: "Why dreams are hard to explain",
      body: "Dreams do not follow the same structure as waking thought. They shift quickly, merge different ideas, and operate without clear cause and effect. When you wake up, the brain returns to a more logical state, which makes the dream feel fragmented or difficult to translate. The experience made sense in the moment, but it does not always convert cleanly into waking language."
    },
  ],

  quickInsight:
    "Dreams are not random images — they are immersive experiences shaped by brain activity, emotion, and perception during sleep.",

  reflection:
    "When you think about your dreams, what stays clearer — the events, or the feeling they left behind?",

  actions: [
    "Pay attention to how your dreams feel rather than trying to make them fully logical",
    "Notice patterns in emotions or themes across different dreams",
    "Reflect on how dream experiences connect to your waking thoughts or situations"
  ],

  related: ["why-we-dream"],
},
{
  slug: "why-we-dream",
  title: "Why do we dream? Science, meaning, and psychological explanation",
  description: "Why we dream explained through brain science, emotions, and psychology. Understand what dreams mean and why they happen.",

  intro:
    "Dreams don’t usually raise questions until one stays with you. Not just an image, but a feeling that lingers — something that feels important even if you can’t explain why. That moment is often where curiosity begins.",

  content: [
    "Dreams do not come with a single explanation, but they are not without structure. When people ask why we dream, they are often trying to understand what these experiences mean and why they happen at all.",
    "During sleep — especially in REM (Rapid Eye Movement) stages — the brain remains highly active. Regions linked to memory and emotion continue working, while the part responsible for logic and control becomes less active. This imbalance is part of why dreams feel real, but not always logical, which connects closely to what dreams are and how they form.",
    "Some researchers understand dreams as a process of memory consolidation, where the brain reorganizes experiences, blending recent events with older memories in ways that are not always linear.",
    "From a psychological perspective, thinkers like  suggested dreams reveal hidden desires, while  viewed dreams as symbolic communication from the unconscious — not to hide meaning, but to express it differently.",
    "Beyond theory, dreams often feel emotional before they feel logical. This is why many people question what their dreams mean, especially when the feeling stays even after waking.",
    "And occasionally, dreams feel less like random activity and more like reflection — as if something internal is being brought into focus rather than created."
  ],

  sections: [
    {
      title: "What science suggests about dreams",
      body: "Dreams are closely linked to brain activity during REM sleep, where memory and imagination become highly active. The brain does not simply replay experiences — it restructures them. This process, often described as memory consolidation, helps integrate new information with existing knowledge. Because logical filtering is reduced during this stage, dreams can combine unrelated elements into a single experience that still feels meaningful."
    },
    {
      title: "The emotional layer of dreaming",
      body: "Emotional centers of the brain, particularly those linked to fear, attachment, and stress, remain active during dreams. This is why feelings often appear stronger than events. A small worry may turn into a chase, while a quiet connection may feel deeply intense. This connection between dreams and emotions helps explain why feelings often matter more than the events themselves."
    },
    {
      title: "When dreams feel deeper",
      body: "Some dreams feel unusually clear, symbolic, or persistent. These are often described as reflective dreams — not because they are mystical, but because they draw attention to something internal that may not be fully acknowledged. They can feel intentional, as if the mind is highlighting a pattern, tension, or awareness rather than generating random imagery."
    },
    {
      title: "What dreams might reflect in your life",
      body: "Rather than searching for a fixed meaning, it is often more useful to notice connections. Dreams tend to reflect states of mind rather than literal events. The question shifts from 'What does this mean?' to 'What in my life feels like this?' This approach connects closely to how dream symbols work, where meaning is shaped by emotion and personal context rather than fixed definitions."
    },
  ],

  quickInsight:
    "Dreams are not random images. They are structured experiences shaped by memory, emotion, and internal awareness — even when they appear chaotic.",

  reflection:
    "Think about your last vivid dream. What stayed longer — the story, or the feeling it left behind?",

  related: ["how-to-remember-dreams"],
},
{
  slug: "how-to-remember-dreams",
  title: "How to remember your dreams (simple techniques that work)",
  description: "Learn how to remember dreams better with simple, proven techniques. Improve dream recall and stop forgetting your dreams.",

  intro:
    "Most dreams fade within minutes of waking up. Not because they were meaningless, but because your mind shifts too quickly into the waking world. What was vivid seconds ago begins to dissolve before it has a chance to settle.",

  content: [
    "Dream recall is not something you either have or don’t have — it is a skill shaped by attention and timing. Many people wonder how to remember dreams, especially when they feel so real but disappear quickly after waking.",
    "During sleep, especially in REM stages, the brain is highly active in emotional and visual areas, but the systems responsible for structured memory are less engaged. This is closely connected to why we forget dreams, as the brain does not always store them in a stable way.",
    "The transition from sleep to waking is critical. As soon as you move, check your phone, or engage with light, the brain shifts states — and the dream begins to fade before it is fully encoded.",
    "Even small fragments matter. A feeling, a single image, or a vague impression is often enough to reconnect you to the rest of the dream if you stay with it.",
    "Over time, the brain responds to attention. The more consistently you acknowledge dreams, the more likely they are to become clearer, longer, and easier to recall."
  ],

  sections: [
    {
      title: "Why dreams are easily forgotten",
      body: "Dreams are often forgotten because they are formed in a different neurological state than waking memories. During REM sleep, the brain prioritizes emotion and imagery over structured recall. When you wake up, the brain quickly shifts into a more logical state, and without immediate attention, the dream is not transferred into long-term memory. This is why people often struggle with remembering dreams, even when they felt vivid moments before."
    },
    {
      title: "How to improve dream recall",
      body: "The first moments after waking are the most important. Before moving or opening your eyes fully, stay still and allow the dream to return. Try to recall the last thing you experienced, then trace it backward. Avoid reaching for your phone or engaging with anything external too quickly. The goal is not to force memory, but to create space for it to surface. This simple habit is one of the most effective techniques for remembering dreams consistently."
    },
    {
      title: "The role of consistency",
      body: "Dream recall improves through repetition. Each time you make an effort to remember or write something down, you are signaling to your brain that dreams matter. Over time, this changes how the brain prioritizes dream memory. Even writing a single sentence or a few keywords each morning can gradually strengthen recall and awareness, making it easier to remember dreams over time."
    },
    {
      title: "What to focus on",
      body: "Trying to remember every detail can make recall harder. Instead, focus on what stayed — the emotion, the atmosphere, or a single clear moment. These fragments often carry more meaning than the full storyline. This connects closely to how dreams and emotions work, where the feeling is often more important than the exact events."
    },
  ],

  actions: [
    "Stay still for a few moments immediately after waking before moving or checking your phone",
    "Write down any dream fragments — even a single word or feeling is enough",
    "Notice recurring emotions or symbols instead of trying to capture every detail",
    "Keep a consistent habit of recalling dreams, even on days when nothing feels clear"
  ],

  quickInsight:
    "Dream recall doesn’t depend on memory alone — it depends on attention at the moment of waking.",

  reflection:
    "When you wake up, what disappears first — the images, or the feeling of the dream?",

  related: ["why-we-dream"],
},
{
  slug: "why-dreams-feel-so-real",
  title: "Why do dreams feel so real? (explained)",
  description: "Why some dreams feel vivid and real. Learn how the brain creates immersive dream experiences during sleep.",

  intro:
    "Some dreams don’t feel like dreams at all. They feel real — detailed, emotional, and convincing in a way that makes it hard to question them while they’re happening.",

  content: [
    "Many people wonder why dreams feel so real, especially when they wake up still feeling the emotion or intensity of the experience. Dreams can feel real because the brain activates many of the same systems used during waking life. Visual, sensory, and emotional regions remain active, creating a fully immersive experience.",
    "At the same time, the part of the brain responsible for logic and critical thinking — the prefrontal cortex — becomes less active. This reduces your ability to question what is happening, allowing even unrealistic situations to feel believable. This is also connected to what dreams are and how they form in the brain.",
    "Emotion plays a major role in this realism. When a dream carries strong emotional intensity, it feels more significant and more real, even if the scenario itself is unusual. This is why vivid dreams often stay with you long after waking.",
    "Memory also contributes to this effect. Dreams often use familiar places, people, and situations, which makes the experience feel grounded and recognizable.",
    "The combination of vivid sensory input, emotional intensity, and reduced questioning creates a state where the dream is experienced as reality rather than imagination."
  ],

  sections: [
    {
      title: "The brain's role in dream realism",
      body: "During REM sleep, the brain remains highly active in areas responsible for vision, sensation, and emotion. These regions create detailed environments and experiences that feel immersive. Because the same systems are involved as in waking life, the dream can feel convincingly real. This helps explain why some dreams feel more vivid than others."
    },
    {
      title: "Why you don’t question the dream",
      body: "One of the key reasons dreams feel real is that you don’t question them. The prefrontal cortex, which is responsible for reasoning and self-awareness, is less active during dreams. This reduces your ability to recognize inconsistencies or question what is happening. As a result, even impossible situations can feel normal while you are inside the dream."
    },
    {
      title: "The role of emotion in realism",
      body: "Strong emotions make dreams feel more real. Fear, joy, attachment, or urgency can intensify the experience, making it feel meaningful and immediate. This connection between dreams and emotions explains why some dreams feel more powerful than others, even when the events themselves are unrealistic."
    },
    {
      title: "Connection to lucid and false awakening dreams",
      body: "Hyper-real dreams are often connected to lucid dreaming and false awakenings. In lucid dreams, awareness increases while the dream remains vivid, making the experience feel even more real. In false awakening dreams, the dream closely mimics waking life, which can make it difficult to distinguish between the two states."
    },
  ],

  quickInsight:
    "Dreams feel real not because they are real, but because the brain creates them using the same systems it uses for reality.",

  reflection:
    "What made your dream feel real — the detail, the emotion, or the fact that you didn’t question it?",

  actions: [
    "Pay attention to what made a dream feel realistic — detail, emotion, or familiarity",
    "Notice how often you accept dream situations without questioning them",
    "Reflect on how emotional intensity affects how real a dream feels",
    "Use moments of realism as a cue to become aware and potentially enter a lucid dream"
  ],

  related: ["lucid-dreaming"],
},
{
  slug: "why-we-forget-dreams",
  title: "Why we forget dreams so quickly (and how to remember them)",
  description: "Why dreams fade after waking and how memory and brain states affect dream recall. Learn how to remember more dreams.",

  intro:
    "Dreams can feel vivid and detailed while you’re in them. But within minutes of waking, they begin to fade — sometimes disappearing completely, leaving only a vague feeling behind.",

  content: [
    "Many people wonder why we forget dreams so quickly, especially when they felt so real just moments before waking. Forgetting dreams is not unusual — it is the default. Dream memories are formed in a different brain state than waking memories, which makes them more fragile and harder to retain.",
    "During REM sleep, the brain is highly active in emotional and visual areas, but the systems responsible for structured memory and long-term storage are less engaged. This is also why dreams feel so real in the moment but are difficult to remember afterward.",
    "This means that even though the dream feels real in the moment, it is not always stored in a stable way unless attention is given to it after waking. This is closely connected to how to remember dreams, where awareness plays a key role in recall.",
    "The transition from sleep to waking plays a major role. As the brain shifts into a more logical and alert state, the dream begins to dissolve unless it is consciously held.",
    "External factors — such as movement, light, or immediately checking your phone — can interrupt recall, causing the dream to fade before it is fully remembered."
  ],

  sections: [
    {
      title: "Why dreams fade so quickly",
      body: "Dreams fade because they are not always transferred into long-term memory. During sleep, the brain prioritizes experience and emotion over storage. When you wake up, the brain shifts into a different mode, and without immediate attention, the dream is not encoded and begins to disappear. This is why many people feel like they can’t remember dreams even when they have them every night."
    },
    {
      title: "The role of brain state changes",
      body: "Waking up involves a shift from a dreaming state to a more alert, logical state. This transition affects how memory works. The structure that supports clear recall becomes active, but the dream itself belongs to a different state, making it harder to access unless you remain still and focused on it."
    },
    {
      title: "Why some dreams are remembered",
      body: "Dreams are more likely to be remembered when they are emotionally intense, unusual, or when you wake up during or shortly after REM sleep. Attention also plays a role — the more you value and focus on dreams, the more likely they are to be retained. This is why vivid or emotional dreams are often easier to remember."
    },
    {
      title: "How attention affects memory",
      body: "Memory depends on attention. If you focus on a dream immediately after waking, you increase the chances of storing it. If your attention shifts quickly to the outside world, the dream is often lost. Even a few seconds of stillness can make the difference between remembering and forgetting, which is why small habits can significantly improve dream recall over time."
    },
  ],

  quickInsight:
    "Dreams are often forgotten not because they are unimportant, but because they are not fully stored before your mind shifts into waking awareness.",

  reflection:
    "When you wake up, how quickly does your attention move away from the dream?",

  actions: [
    "Stay still for a few moments after waking to give the dream time to surface",
    "Recall even small fragments before moving or checking your phone",
    "Focus on the feeling of the dream to help reconnect to the memory",
    "Build a habit of noticing dreams daily to strengthen recall over time"
  ],

  related: ["how-to-remember-dreams"],
},
{
  slug: "lucid-dreaming",
  title: "Lucid dreaming: what it is and how it works",
  description: "What lucid dreaming means, why it happens, and how to become aware inside your dreams.",

  intro:
    "Lucid dreaming is one of the few moments where the line between dreaming and awareness becomes clear. You are still inside the dream, but something shifts — you realize you are there, and the experience changes instantly.",

  content: [
    "Many people wonder what lucid dreaming is and whether it is possible to control dreams. Lucid dreaming begins with a simple but unusual realization: you are dreaming while the dream is still happening. That moment of awareness changes your role in the experience.",
    "During most dreams, the mind is immersed in the story without questioning it. In a lucid dream, part of your awareness remains active, allowing you to observe instead of only react. This is closely connected to why dreams feel so real, because the same immersive systems are still active.",
    "Neurologically, lucid dreaming is often linked to increased activity in areas of the brain responsible for self-awareness, even while the body remains in REM sleep.",
    "For some people, lucid dreams happen spontaneously. For others, they develop gradually through attention, pattern recognition, and consistent dream recall. This is why learning how to remember dreams can increase the chances of becoming lucid.",
    "Lucid dreaming is often misunderstood as complete control, but in many cases it begins simply as awareness — noticing the dream without immediately changing it."
  ],

  sections: [
    {
      title: "What lucid dreaming is",
      body: "Lucid dreaming occurs when awareness enters the dream state. You recognize that what you are experiencing is not waking reality, even though it feels vivid and immersive. This awareness can be brief or sustained, and it may or may not come with the ability to influence the dream."
    },
    {
      title: "Why lucid dreams happen",
      body: "Lucid dreams tend to occur when the brain maintains a level of alertness during REM sleep. This can happen naturally, but it is more likely when you regularly pay attention to your dreams. Techniques like reality checking — questioning whether you are awake during the day — can carry into dreams, triggering awareness. Methods such as MILD (Mnemonic Induction of Lucid Dreams) also train the mind to recognize the dream state."
    },
    {
      title: "What it feels like",
      body: "Lucid dreams often feel sharper and more stable than regular dreams. Colors may appear more vivid, and your sense of presence becomes stronger. Some people experience a sense of control, while others simply observe with clarity. There can also be a moment of surprise or excitement, which sometimes causes the dream to end if the awareness becomes too intense."
    },
    {
      title: "What it might reflect",
      body: "Lucid dreaming often connects to awareness rather than control. It reflects the ability to recognize your internal state while still inside it. In that sense, it mirrors waking life — becoming aware of thoughts, patterns, or emotions as they happen, instead of being fully carried by them. This connection between dreams and awareness is also explored in dreams and the subconscious mind."
    },
  ],

  quickInsight:
    "Lucid dreaming is not just about controlling the dream — it begins with recognizing that you are in it.",

  reflection:
    "If you became aware inside a dream, would you try to control it — or simply observe what happens?",

  actions: [
    "Pay attention to recurring dream signs, such as familiar places or unusual situations",
    "Practice reality checks during the day by questioning whether you are dreaming",
    "Write down your dreams consistently to strengthen awareness over time",
    "Before sleeping, set a clear intention to recognize when you are dreaming"
  ],

  related: ["nightmares"],
},
{
  slug: "nightmares",
  title: "Nightmares: why they happen and what they mean",
  description: "What causes nightmares and what they reveal about stress, fear, and emotional overload.",

  intro:
    "Some dreams don’t just feel strange — they feel intense, uncomfortable, or even frightening. They can wake you suddenly, leave your body tense, or stay with you long after the dream ends.",

  content: [
    "Many people wonder why they have nightmares, especially when the experience feels so vivid and disturbing. Nightmares often leave a stronger impression than other dreams because of the intensity of the emotions involved. Fear, panic, helplessness, or loss can feel immediate and real.",
    "They are rarely random. Nightmares are commonly linked to heightened emotional states — stress, anxiety, unresolved conflict, or internal tension that has not been fully processed. This is closely connected to stress and anxiety dreams, where pressure and overwhelm appear in symbolic forms.",
    "During REM sleep, emotional centers of the brain remain highly active, while the systems responsible for logical reasoning are less engaged. This imbalance allows fear and urgency to take shape without the usual sense of control, which is also part of why dreams feel so real in the moment.",
    "In some cases, nightmares can be connected to specific experiences, but often they reflect broader emotional patterns rather than a single event.",
    "What makes a dream a nightmare is not just what happens, but how it feels — the intensity, the lack of control, and the sense that something is wrong or unresolved."
  ],

  sections: [
    {
      title: "Why nightmares happen",
      body: "Nightmares are closely linked to emotional overload. When stress, anxiety, or internal conflict builds without being fully processed, it can surface during sleep. The brain attempts to work through these states, but without the stabilizing effect of logic, the experience can become exaggerated or distressing. This is why nightmares often appear during periods of pressure, change, or emotional strain."
    },
    {
      title: "Emotional meaning",
      body: "Many people ask what nightmares mean, especially when the same type of dream repeats. Nightmares often reflect feelings that are difficult to face directly. Fear may appear as being chased. Loss of control may appear as falling or being trapped. Avoidance may appear as something following you that you cannot escape. The scenario may be distorted, but the emotion is often precise. Understanding the feeling behind the dream often reveals more than the events themselves, which connects closely to how dreams and emotions work."
    },
    {
      title: "Recurring nightmares",
      body: "When a nightmare repeats, it often points to something that has not been resolved or acknowledged. The details may shift slightly, but the core emotion or situation remains. Recurring nightmares are less about repetition and more about persistence — the mind continues to bring the same pattern forward until it is understood or processed differently. This pattern is explored further in recurring dreams, where repetition reflects ongoing internal states."
    },
  ],

  quickInsight:
    "Nightmares are not random disturbances — they are intensified emotional signals trying to be processed.",

  reflection:
    "What part of the nightmare felt the most real — the situation, or the emotion behind it?",

  actions: [
    "Notice emotional patterns in your nightmares rather than focusing only on events",
    "Pay attention to what was happening in your waking life before the dream",
    "Write down recurring nightmares to identify what stays consistent over time",
    "Focus on the feeling after waking — it often points to what needs attention"
  ],

  related: ["recurring-dreams"],
},
{
  slug: "how-to-interpret-dream-symbols",
  title: "How to interpret dream symbols (without dream dictionaries)",
  description: "Learn how dream symbols really work and why meanings are personal. Understand symbols through emotion and context.",

  intro:
    "Dream symbols can feel confusing. The same image can appear in different dreams and feel completely different each time. What looks obvious on the surface often doesn’t have a single, fixed meaning.",

  content: [
    "Many people search for dream symbols meaning, hoping for clear answers. But dream symbols are not universal in the way they are often presented. While some images may have common associations, their meaning is shaped by your personal experiences, emotions, and current state of mind.",
    "Psychological perspectives, including those of , suggest that symbols are a way the mind expresses deeper thoughts and emotions indirectly rather than literally.",
    "A single symbol can represent different things depending on the context of the dream. A snake, for example, could reflect fear, transformation, or something unfamiliar — the meaning comes from how it felt, not just what it was.",
    "Dreams tend to organize around emotion rather than logic. Symbols are often built around a feeling, which is why the same object can carry a completely different meaning in another dream. This is closely connected to dreams and emotions, where feelings shape the experience more than events.",
    "Trying to apply fixed meanings too quickly can disconnect you from what the dream is actually reflecting. Understanding comes more from observing patterns than from assigning definitions."
  ],

  sections: [
    {
      title: "Why dream symbols are not fixed",
      body: "Dream symbols are shaped by personal context. While cultural or shared meanings exist, they are not universal rules. The same symbol can represent different ideas depending on your experiences, memories, and emotional associations. This is why two people can dream about the same thing and interpret it differently."
    },
    {
      title: "The role of personal association",
      body: "Your mind builds symbols from what is familiar to you. A place, object, or person in a dream often carries meaning based on your own history with it. This is especially noticeable when dreaming about someone, where the person represents a feeling or connection rather than just themselves. Instead of asking what a symbol means generally, it is often more useful to ask what it means to you."
    },
    {
      title: "Emotion over literal meaning",
      body: "The meaning of a symbol is usually found in how it felt rather than what it was. The same situation can feel safe in one dream and threatening in another. The scenario may change, but the emotional tone reveals what the symbol represents. This is why understanding emotions in dreams often leads to clearer interpretation than focusing on symbols alone."
    },
    {
      title: "Recognizing patterns over time",
      body: "Understanding dream symbols becomes clearer when you notice patterns across multiple dreams. A symbol that appears repeatedly often carries a consistent emotional or situational meaning, even if the details change. This connects closely to recurring dreams, where repetition reveals ongoing patterns rather than random events."
    },
  ],

  quickInsight:
    "Dream symbols are not fixed definitions — they are personal expressions shaped by emotion, memory, and context.",

  reflection:
    "Think of a symbol that appears in your dreams. What does it feel like — not just what does it look like?",

  actions: [
    "Focus on how a symbol felt in the dream rather than what it represents generally",
    "Reflect on your personal associations with the symbol",
    "Look for patterns across different dreams instead of relying on one interpretation",
    "Avoid rushing to assign fixed meanings — allow understanding to build over time"
  ],

  related: ["recurring-dreams"],
},
{
  slug: "how-to-interpret-dream-symbols",
  title: "How to interpret dream symbols (without dream dictionaries)",
  description: "Learn how dream symbols really work and why meanings are personal. Understand symbols through emotion and context.",

  intro:
    "Dream symbols can feel confusing. The same image can appear in different dreams and feel completely different each time. What looks obvious on the surface often doesn’t have a single, fixed meaning.",

  content: [
    "Many people search for dream symbols meaning, hoping for clear answers. But dream symbols are not universal in the way they are often presented. While some images may have common associations, their meaning is shaped by your personal experiences, emotions, and current state of mind.",
    "Psychological perspectives, including those of , suggest that symbols are a way the mind expresses deeper thoughts and emotions indirectly rather than literally.",
    "A single symbol can represent different things depending on the context of the dream. A snake, for example, could reflect fear, transformation, or something unfamiliar — the meaning comes from how it felt, not just what it was.",
    "Dreams tend to organize around emotion rather than logic. Symbols are often built around a feeling, which is why the same object can carry a completely different meaning in another dream. This is closely connected to dreams and emotions, where feelings shape the experience more than events.",
    "Trying to apply fixed meanings too quickly can disconnect you from what the dream is actually reflecting. Understanding comes more from observing patterns than from assigning definitions."
  ],

  sections: [
    {
      title: "Why dream symbols are not fixed",
      body: "Dream symbols are shaped by personal context. While cultural or shared meanings exist, they are not universal rules. The same symbol can represent different ideas depending on your experiences, memories, and emotional associations. This is why two people can dream about the same thing and interpret it differently."
    },
    {
      title: "The role of personal association",
      body: "Your mind builds symbols from what is familiar to you. A place, object, or person in a dream often carries meaning based on your own history with it. This is especially noticeable when dreaming about someone, where the person represents a feeling or connection rather than just themselves. Instead of asking what a symbol means generally, it is often more useful to ask what it means to you."
    },
    {
      title: "Emotion over literal meaning",
      body: "The meaning of a symbol is usually found in how it felt rather than what it was. The same situation can feel safe in one dream and threatening in another. The scenario may change, but the emotional tone reveals what the symbol represents. This is why understanding emotions in dreams often leads to clearer interpretation than focusing on symbols alone."
    },
    {
      title: "Recognizing patterns over time",
      body: "Understanding dream symbols becomes clearer when you notice patterns across multiple dreams. A symbol that appears repeatedly often carries a consistent emotional or situational meaning, even if the details change. This connects closely to recurring dreams, where repetition reveals ongoing patterns rather than random events."
    },
  ],

  quickInsight:
    "Dream symbols are not fixed definitions — they are personal expressions shaped by emotion, memory, and context.",

  reflection:
    "Think of a symbol that appears in your dreams. What does it feel like — not just what does it look like?",

  actions: [
    "Focus on how a symbol felt in the dream rather than what it represents generally",
    "Reflect on your personal associations with the symbol",
    "Look for patterns across different dreams instead of relying on one interpretation",
    "Avoid rushing to assign fixed meanings — allow understanding to build over time"
  ],

  related: ["recurring-dreams"],
},
{
  slug: "false-awakening-dreams",
  title: "False awakening dreams: why you dream that you woke up",
  description: "What false awakening dreams are, why they feel real, and how they connect to lucid dreaming.",

  intro:
    "Sometimes you wake up, start your day, and everything feels normal — until you realize you’re still dreaming. The moment can feel subtle or unsettling, especially when the dream mimics reality so closely.",

  content: [
    "Many people wonder what a false awakening is, especially after experiencing a dream where they seemed to wake up but were still asleep. A false awakening happens when you dream that you have woken up, while still being inside the dream.",
    "The environment often looks familiar — your room, your routine, or a normal sequence of events. Because the setting feels realistic, it can be difficult to recognize that you are still dreaming. This is closely connected to why dreams feel so real, where the brain creates convincing experiences without questioning them.",
    "The experience may continue until something feels slightly off, or until you wake up again for real. In some cases, this can happen more than once, creating a loop of waking up inside another dream.",
    "False awakenings are often linked to REM sleep, where dreaming is vivid and immersive. In some cases, awareness begins to return while the dream is still active, creating a blurred boundary between dreaming and waking. This also relates to what dreams are and how they form in the brain.",
    "They are commonly associated with lucid dreaming. A false awakening can either happen before becoming aware, or act as a trigger that makes you realize you are dreaming."
  ],

  sections: [
    {
      title: "Why false awakenings happen",
      body: "False awakenings often occur when the brain transitions between sleep and waking states but does not fully separate them. The mind begins to simulate waking reality while the body remains in a dreaming state. Because familiar environments are used, the experience feels believable and continuous."
    },
    {
      title: "Why they feel so real",
      body: "One of the main reasons false awakening dreams feel so real is that the brain activates sensory and visual systems while reducing critical thinking. During REM sleep, this combination creates a detailed and immersive environment without questioning it. Because the dream reflects familiar surroundings, it becomes even harder to distinguish from waking life."
    },
    {
      title: "Connection to lucid dreaming",
      body: "False awakenings are closely connected to lucid dreaming. In some cases, noticing something unusual in the false awakening can trigger awareness, leading to a lucid dream. In other cases, they occur just before or after a lucid experience, as the mind shifts between awareness and dreaming. This makes them one of the most common entry points into lucid dreaming."
    },
    {
      title: "What false awakenings might reflect",
      body: "False awakenings often reflect a state of partial awareness — being close to waking, but not fully there. They can also connect to mental preoccupation with routine, control, or transitions, where the mind is focused on 'starting the day' even while still processing internally."
    },
  ],

  quickInsight:
    "A false awakening is not waking up — it is the mind simulating waking while still inside a dream.",

  reflection:
    "If your environment felt completely normal, what would make you realize you were still dreaming?",

  actions: [
    "Get into the habit of questioning reality occasionally during the day",
    "Notice small details in your surroundings — inconsistencies can reveal a dream",
    "If a false awakening happens, stay calm and observe instead of reacting immediately",
    "Use the moment as an opportunity to become aware and enter a lucid dream"
  ],

  related: ["lucid-dreaming"],
},
{
  slug: "dreams-and-emotions",
  title: "Dreams and emotions: what your feelings in dreams mean",
  description: "Why emotions feel stronger in dreams and how they reflect your inner state and emotional patterns.",

  intro:
    "Sometimes the most important part of a dream isn’t what happened — it’s how it made you feel. The story may fade or stop making sense, but the emotion often stays, clear and recognizable.",

  content: [
    "Many people wonder what emotions in dreams mean, especially when the feeling stays long after waking. Dreams often carry emotions more strongly than logic. What you experience in a dream is less about accurate events and more about amplified feelings.",
    "During REM sleep, emotional centers of the brain — especially the amygdala — remain highly active, while areas responsible for reasoning and control are less engaged. This creates an environment where emotions can surface without being filtered or regulated. This is also part of why dreams feel so real, even when the situation itself doesn’t make sense.",
    "Because of this, even a simple or unusual situation can feel intense. The dream is not trying to recreate reality — it is expressing an emotional state.",
    "Dreams often bring forward feelings that were not fully processed during the day. These may be subtle, ignored, or not fully understood while awake, but become more visible during sleep. This is closely connected to why we dream, where the mind processes internal experiences.",
    "Even when the storyline feels confusing or disconnected, the emotional tone is often consistent. The scenario may shift, but the feeling remains aligned with your internal state."
  ],

  sections: [
    {
      title: "Why emotions appear strongly in dreams",
      body: "During sleep, emotional processing becomes more active while logical control decreases. This allows feelings to emerge more freely, without being suppressed or explained away. As a result, emotions in dreams often feel stronger, clearer, and less restricted than they do in waking life."
    },
    {
      title: "Unprocessed feelings",
      body: "Dreams can bring forward emotions that were ignored, suppressed, or not fully understood. These may include stress, attachment, fear, or tension that was present during the day but not consciously addressed. The dream does not create these feelings — it reveals them in a different form. This is often reflected in nightmares or stress and anxiety dreams, where emotions become more intense."
    }, 
    {
      title: "Emotional patterns in dreams",
      body: "Over time, certain emotional tones may repeat across different dreams. Fear, anxiety, calm, or longing can appear in different scenarios but carry the same underlying feeling. These patterns often reflect ongoing states of mind rather than isolated experiences, which is explored further in recurring dreams."
    },
    {
      title: "Why emotions matter more than events",
      body: "The events in a dream can be distorted, exaggerated, or unrealistic, but the emotion is often precise. Understanding a dream usually comes from recognizing how it felt rather than analyzing what literally happened. This is why interpreting dream symbols becomes clearer when you focus on emotion instead of fixed meanings."
    },
  ],

  quickInsight:
    "In many dreams, the emotion is not part of the experience — it is the message itself.",

  reflection:
    "What emotion do your dreams return to most often, even when the situations change?",

  actions: [
    "Pay attention to the emotional tone of your dreams rather than only the events",
    "Notice if the same feelings appear across different dreams",
    "Reflect on how those emotions connect to your current state of mind",
    "Write down how the dream felt immediately after waking, before the details fade"
  ],

  related: ["recurring-dreams"],
},
{
  slug: "dreaming-about-someone",
  title: "Dreaming about someone: what it means and why it happens",
  description: "Why certain people appear in your dreams and what dreaming about someone really means emotionally.",

  intro:
    "Dreaming about someone can feel personal, especially when the connection feels strong or unexpected. It can leave you wondering whether the dream is about them — or about something within you.",

  content: [
    "Many people ask what it means when you dream about someone, especially if the dream feels emotional or repeated. Dreams about people are rarely about the person alone. More often, they reflect your thoughts, emotions, or associations connected to them.",
    "The brain uses familiar faces and relationships as a way to represent feelings, memories, and internal states. This is why people you know — or even people you haven’t thought about in a while — can appear in dreams.",
    "During sleep, especially in REM stages, emotional processing becomes more active. Connections, attachments, and unresolved feelings can surface more clearly in the form of interactions with others. This is closely connected to dreams and emotions, where feelings shape the experience more than events.",
    "The role the person plays in the dream is often more important than who they are. How they act, how you feel around them, and what happens between you can reveal more than their identity alone.",
    "Dreaming about someone repeatedly can indicate an ongoing emotional pattern — not necessarily about them directly, but about what they represent in your life. This connects closely to recurring dreams, where repetition reflects unresolved or ongoing internal states."
  ],

  sections: [
    {
      title: "Why certain people appear in dreams",
      body: "The mind builds dreams using familiar people because they carry emotional meaning and memory. A person in your dream may represent a relationship, a feeling, or a part of your own experience. Their presence is often tied to association rather than literal significance. This is also part of why we dream, where the mind processes internal experiences through familiar forms."
    },
    {
      title: "Emotional connections and attachment",
      body: "Dreams often reflect emotional bonds, whether strong, distant, or unresolved. Someone you care about may appear during moments of connection or reflection, while someone from the past may appear when something associated with them becomes relevant again. The emotion connected to the person is usually more important than their presence alone."
    },
    {
      title: "When dreams feel like they are about them",
      body: "Some dreams feel direct, as if they are about the other person. In reality, they are often shaped by your perception, memory, and emotional experience of that person. The dream reflects how they exist in your mind, not necessarily what is happening with them externally. This is similar to how dream symbols work, where meaning comes from personal association rather than fixed interpretation."
    },
    {
      title: "Recurring dreams about someone",
      body: "If the same person appears repeatedly, it may point to an ongoing emotional pattern — such as attachment, unresolved feelings, or a situation that has not fully settled. The repetition is less about the person and more about what they represent in your internal experience."
    },
  ],

  quickInsight:
    "Dreaming about someone is often less about them, and more about what they represent in your thoughts and emotions.",

  reflection:
    "When you dream about someone, what stands out more — who they are, or how you feel around them?",

  actions: [
    "Focus on how you felt in the dream rather than only who appeared",
    "Reflect on what the person represents to you personally",
    "Notice if the same person appears during certain emotional states",
    "Avoid taking the dream literally — look at the connection, not just the person"
  ],

  related: ["dreams-and-emotions"],
}
]);

export function getGuideBySlug(slug) {
  if (!slug) return null;

  const cleanSlug = Array.isArray(slug)
    ? slug[0]
    : slug.toString().trim().toLowerCase();

  return guides.find(
    (guide) => guide.slug.toLowerCase() === cleanSlug
  );
}
