"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  dreamCompassContexts,
  dreamCompassContextQuestions,
  dreamCompassEmotions,
  dreamCompassEmotionHubRoutes,
  dreamCompassEmotionQuestions,
  dreamCompassGeneralQuestions,
  dreamCompassIntentions,
  dreamCompassIntentionDreamRoutes,
  dreamCompassIntentionEmotionRoutes,
  dreamCompassLingeringDreamRoutes,
  dreamCompassLingeringEmotionRoutes,
  dreamCompassLingeringOptions,
  dreamCompassPerspectives,
} from "@/data/dreamCompass";
import AdsterraNativeBanner from "@/components/AdsterraNativeBanner";
import { submitDreamCompassFeedback } from "./actions";

const steps = [
  { eyebrow: "Symbols and images", title: "What stood out to you in the dream?" },
  { title: "What unfolded?", prompt: "What was happening?" },
  { title: "The emotional clue", prompt: "How did the dream feel?" },
  { title: "Life right now", prompt: "What feels closest to your waking life?" },
  { title: "What lingered?", prompt: "What stayed with you after you woke up?" },
  { title: "What do you hope to understand?", prompt: "Is there something you're hoping this dream might reveal?" },
  { title: "Choose a lens", prompt: "How would you like to explore it?" },
];

const feedbackRatings = [
  { value: 1, emoji: "😞", label: "Not helpful" },
  { value: 2, emoji: "😕", label: "A little helpful" },
  { value: 3, emoji: "🙂", label: "Helpful" },
  { value: 4, emoji: "😊", label: "Very helpful" },
  { value: 5, emoji: "😍", label: "Loved it" },
];

function normalize(value = "") {
  return String(value).toLowerCase().trim();
}

function trackCompassEvent(name, parameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
}

function scoreProfile(profile, answers, selectedAction) {
  let score = profile.slug === answers.subject ? 36 : 0;

  if (answers.relatedSubjects.includes(profile.slug)) score += 58;

  if (profile.slug === selectedAction?.primarySlug) score += 220;
  const alternativeIndex = selectedAction?.alternativeSlugs.indexOf(profile.slug) ?? -1;
  if (alternativeIndex >= 0) score += 82 - alternativeIndex * 8;
  answers.emotions.forEach((emotion, index) => {
    if (profile.signals.emotions.includes(emotion)) score += Math.max(12, 30 - index * 6);
  });
  if (profile.signals.contexts.includes(answers.context)) score += 22;
  answers.lingered.forEach((signal) => {
    if (dreamCompassLingeringDreamRoutes[signal]?.includes(profile.slug)) score += 16;
  });
  if (dreamCompassIntentionDreamRoutes[answers.intention]?.includes(profile.slug)) score += 18;
  if (profile.excerpts[answers.perspectives[0]]) score += 6;

  return score;
}

function getEmotionPathways(answers, emotionProfiles) {
  const scores = new Map();

  function add(slugs = [], weight) {
    slugs.forEach((slug, index) => {
      scores.set(slug, (scores.get(slug) || 0) + Math.max(1, weight - index));
    });
  }

  answers.emotions.forEach((emotion, index) =>
    add(dreamCompassEmotionHubRoutes[emotion], Math.max(24, 40 - index * 4))
  );
  answers.lingered.forEach((signal) =>
    add(dreamCompassLingeringEmotionRoutes[signal], 14)
  );
  add(dreamCompassIntentionEmotionRoutes[answers.intention], 16);

  return emotionProfiles
    .map((emotion) => ({ ...emotion, score: scores.get(emotion.slug) || 0 }))
    .filter((emotion) => emotion.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

function SelectionButton({ selected, children, description, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`min-h-14 w-full border px-5 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C] ${
        selected
          ? "border-[#9A7B43] bg-[#FFFDF8] shadow-sm"
          : "border-[#DDD5CA] bg-white/65 hover:border-[#B89B62] hover:bg-white"
      }`}
    >
      <span className="block font-medium text-[#312C27]">{children}</span>
      {description && (
        <span className="mt-1.5 block text-sm leading-6 text-[#70685F]">
          {description}
        </span>
      )}
    </button>
  );
}

function ResultCard({ profile, perspectives, primary = false, reasons = [], onOpen }) {
  const excerpt = profile.excerpts[perspectives[0]] || profile.excerpts.balanced;

  return (
    <article className={`border p-6 md:p-8 ${primary ? "border-l-4 border-[#9A7B43] bg-[#FFFDF8] shadow-[0_18px_50px_rgba(73,57,29,0.10)] md:p-10" : "border-[#DDD5CA] bg-white/75"}`}>
      <p className={`inline-flex text-[10px] uppercase tracking-[0.18em] ${primary ? "bg-[#8F743C] px-3 py-1.5 text-white" : "text-[#8F743C]"}`}>
        {primary ? "Closest match" : "Another angle"}
      </p>
      <h3 className={`mt-3 font-serif ${primary ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{profile.title}</h3>
      {excerpt && <p className="mt-4 leading-7 text-[#625C55]">{excerpt}</p>}
      {reasons.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Why this reading may fit">
          {reasons.map((reason) => (
            <li key={reason} className="border border-[#E2D9CC] bg-[#FFFDF8] px-3 py-1.5 text-xs text-[#655C52]">
              {reason}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap gap-3" aria-label="Open your chosen sections">
        {perspectives.map((perspective, index) => {
          const option = dreamCompassPerspectives.find((item) => item.value === perspective);
          const section = profile.sections?.[perspective] || "dream-meaning";
          return (
            <Link
              key={perspective}
              href={`/dreams/${profile.slug}#${section}`}
              onClick={() => onOpen?.(perspective)}
              className={`inline-flex min-h-11 items-center text-sm font-medium transition ${primary && index === 0 ? "bg-[#1A1A1A] px-6 text-white hover:bg-[#333]" : "border border-[#B89B62] bg-white px-5 text-[#695326] hover:bg-[#FFF8E9]"}`}
            >
              {option?.label || "Explore this meaning"}
            </Link>
          );
        })}
      </div>
    </article>
  );
}

export default function DreamCompass({ profiles, emotionProfiles }) {
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState("");
  const [returnToResults, setReturnToResults] = useState(false);
  const [feedbackToken, setFeedbackToken] = useState(() => crypto.randomUUID());
  const [feedbackRating, setFeedbackRating] = useState(null);
  const [feedbackComment, setFeedbackComment] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const headingRef = useRef(null);
  const hasMounted = useRef(false);
  const [answers, setAnswers] = useState({
    subject: "",
    relatedSubjects: [],
    action: "",
    emotions: [],
    context: "",
    lingered: [],
    intention: "",
    perspectives: ["balanced"],
  });

  const selectedProfile = profiles.find((profile) => profile.slug === answers.subject);
  const selectedSymbols = [answers.subject, ...answers.relatedSubjects]
    .filter(Boolean)
    .map((slug) => profiles.find((profile) => profile.slug === slug))
    .filter(Boolean);
  const selectedAction = selectedProfile?.actions.find(
    (action) => action.label === answers.action
  );
  const selectedPerspectives = dreamCompassPerspectives.filter(
    (perspective) => answers.perspectives.includes(perspective.value)
  );
  const isResults = step === steps.length;
  const announcement = isResults
    ? "Your Dream Compass matches are ready."
    : `Step ${step + 1} of ${steps.length}: ${steps[step].title}`;
  const normalizedQuery = normalize(query);
  const subjectProfiles = normalizedQuery
    ? profiles.filter((profile) => normalize(profile.title).includes(normalizedQuery))
    : profiles.filter((profile) => profile.featured);
  const filteredProfiles = subjectProfiles.slice(0, 40);
  const rankedScoredProfiles = [...profiles]
    .map((profile) => ({
      profile,
      score: scoreProfile(profile, answers, selectedAction),
    }))
    .sort(
      (a, b) =>
        b.score - a.score || a.profile.title.localeCompare(b.profile.title)
    )
    .slice(0, 3);
  const rankedProfiles = rankedScoredProfiles
    .map(({ profile }) => profile);
  const topMatchScore = rankedScoredProfiles[0]?.score || 0;
  const emotionPathways = getEmotionPathways(answers, emotionProfiles);
  const primaryEmotionPathway = emotionPathways[0];

  const reflectionQuestions = [
    ...(rankedProfiles[0]?.reflectionQuestions || []),
    ...answers.emotions.map((emotion) => dreamCompassEmotionQuestions[emotion]),
    dreamCompassContextQuestions[answers.context],
    ...dreamCompassGeneralQuestions,
  ]
    .filter(Boolean)
    .filter((question, index, items) => items.indexOf(question) === index)
    .slice(0, 4);

  function getMatchReasons(profile) {
    const reasons = [];
    if (profile.slug === selectedAction?.primarySlug && !selectedProfile?.featured) reasons.push("Begins with the image you chose");
    else if (profile.slug === selectedAction?.primarySlug) reasons.push(`Follows what happened: “${answers.action}”`);
    else if (selectedAction?.alternativeSlugs.includes(profile.slug)) reasons.push(`Offers another view of “${answers.action}”`);
    const matchingEmotions = answers.emotions.filter((emotion) => profile.signals.emotions.includes(emotion));
    if (matchingEmotions.length === 1) reasons.push(`Carries the ${matchingEmotions[0].toLowerCase()} tone you chose`);
    if (matchingEmotions.length > 1) reasons.push(`Connects with ${matchingEmotions.map((emotion) => emotion.toLowerCase()).join(" and ")}`);
    if (answers.relatedSubjects.includes(profile.slug)) reasons.push("Brings in another symbol/image that stood out");
    if (profile.signals.contexts.includes(answers.context)) reasons.push(`May speak to ${answers.context.toLowerCase()}`);
    if (answers.lingered.some((signal) => dreamCompassLingeringDreamRoutes[signal]?.includes(profile.slug))) reasons.push("Echoes what stayed with you after waking");
    if (dreamCompassIntentionDreamRoutes[answers.intention]?.includes(profile.slug)) reasons.push("Supports what you hope to understand");
    return reasons;
  }

  useEffect(() => {
    if (hasMounted.current) {
      headingRef.current?.focus({ preventScroll: true });
      headingRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      hasMounted.current = true;
    }
  }, [isResults, step]);

  const currentValue = [
    answers.subject,
    answers.action,
    answers.emotions.length,
    answers.context,
    answers.lingered.length,
    answers.intention,
    answers.perspectives.length,
  ][step];

  function choose(field, value) {
    setAnswers((current) => ({
      ...current,
      [field]: value,
      ...(field === "subject" ? { action: "" } : {}),
    }));
  }

  function toggleSubject(slug) {
    setAnswers((current) => {
      const selected = [current.subject, ...current.relatedSubjects].filter(Boolean);

      if (selected.includes(slug)) {
        const remaining = selected.filter((item) => item !== slug);
        return {
          ...current,
          subject: remaining[0] || "",
          relatedSubjects: remaining.slice(1),
          action: slug === current.subject ? "" : current.action,
        };
      }

      if (selected.length >= 3) return current;
      if (!current.subject) return { ...current, subject: slug, action: "" };
      return { ...current, relatedSubjects: [...current.relatedSubjects, slug] };
    });
  }

  function toggleList(field, value) {
    setAnswers((current) => {
      const values = current[field];
      return {
        ...current,
        [field]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
  }

  function togglePerspective(value) {
    setAnswers((current) => {
      if (value === "balanced") {
        return { ...current, perspectives: ["balanced"] };
      }

      const currentValues = current.perspectives.filter((item) => item !== "balanced");
      return {
        ...current,
        perspectives: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  }

  function advance() {
    trackCompassEvent("dream_compass_step_completed", {
      step_number: step + 1,
    });

    if (step === steps.length - 1) {
      trackCompassEvent("dream_compass_completed", {
        result_count: rankedProfiles.length,
        match_quality: topMatchScore < 60 ? "low" : topMatchScore < 120 ? "medium" : "high",
        perspective_count: answers.perspectives.length,
        symbol_count: answers.relatedSubjects.length + 1,
        lingering_signal_count: answers.lingered.length,
      });
    }

    if (returnToResults) {
      setReturnToResults(false);
      setStep(steps.length);
    } else {
      setStep((current) => current + 1);
    }
  }

  function editAnswer(targetStep) {
    setReturnToResults(targetStep !== 0);
    setStep(targetStep);
  }

  function goBack() {
    if (returnToResults) {
      setReturnToResults(false);
      setStep(steps.length);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  }

  function restart() {
    setAnswers({ subject: "", relatedSubjects: [], action: "", emotions: [], context: "", lingered: [], intention: "", perspectives: ["balanced"] });
    setQuery("");
    setReturnToResults(false);
    setFeedbackToken(crypto.randomUUID());
    setFeedbackRating(null);
    setFeedbackComment("");
    setFeedbackStatus("idle");
    setFeedbackMessage("");
    setStep(0);
  }

  async function handleFeedbackSubmit(event) {
    event.preventDefault();
    if (!feedbackRating || feedbackStatus === "submitting" || feedbackStatus === "success") return;

    setFeedbackStatus("submitting");
    setFeedbackMessage("");

    const result = await submitDreamCompassFeedback({
      feedbackToken,
      rating: feedbackRating,
      comment: feedbackComment,
      resultSlug: rankedProfiles[0]?.slug || "",
    });

    setFeedbackStatus(result.status);
    setFeedbackMessage(result.message || "");
  }

  return (
    <>
      <header className="border-b border-[#DED7CD] bg-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-6 py-9 text-center md:py-12">
          <h1 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#8F743C] md:text-4xl">Dream Compass</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#625C55] md:text-xl">
            Helping you remember and understand your dreams.
          </p>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#625C55]">
            Not sure what to make of a dream that stayed with you? Dream Compass helps you explore what you remember, how it felt, and what may be happening in your waking life. It&rsquo;s free to use.
          </p>
          <p className="mx-auto mt-5 max-w-xl font-medium leading-7 text-[#695326]">
            Start with what you remember. Dream Compass will help you work through the rest.
          </p>
        </div>
      </header>

      <section id="dream-compass-questions" className="mx-auto max-w-4xl scroll-mt-6 px-4 py-8 sm:px-6 md:py-10">
        <div className="border border-[#DED7CD] border-t-2 border-t-[#9A7B43] bg-[#FFFDF8] p-5 sm:p-8 md:p-10">
        <p className="mb-8 font-serif text-2xl text-[#312C27] md:text-3xl">Your dream. Your direction. Your clarity.</p>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
        {!isResults ? (
          <>
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#7A7167]">
                <span>Step {step + 1} of {steps.length}</span>
                <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="h-1 bg-[#E2DBD1]" aria-hidden="true">
                <div className="h-full bg-[#A7894F] transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
              </div>
            </div>

            {steps[step].eyebrow && <p className="text-[11px] uppercase tracking-[0.18em] text-[#8F743C]">{steps[step].eyebrow}</p>}
            <h2 ref={headingRef} tabIndex={-1} className={`${steps[step].eyebrow ? "mt-3" : ""} scroll-mt-6 font-serif text-3xl leading-tight outline-none md:text-5xl`}>{steps[step].title}</h2>
            {steps[step].prompt && <p className="mt-3 text-lg italic leading-7 text-[#625C55]">{steps[step].prompt}</p>}

            <div className="mt-8">
              {step === 0 && (
                <>
                  <label htmlFor="compass-subject-search" className="sr-only">Filter dream subjects</label>
                  <input
                    id="compass-subject-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Try mirror, ocean, snake, or another image..."
                    className="mb-5 w-full border border-[#D8CFC2] bg-white px-5 py-4 outline-none focus:border-[#9A7B43]"
                  />
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm text-[#756D64]">
                    <p>{normalizedQuery ? `${subjectProfiles.length} possible ${subjectProfiles.length === 1 ? "match" : "matches"}` : "Common dream subjects"}</p>
                    {!normalizedQuery && <p>Browse {profiles.length} available meanings</p>}
                  </div>
                  <p className="mb-5 max-w-2xl text-sm leading-6 text-[#625C55]">
                    Choose up to three symbols/images. Your first choice guides the next question, while the others help us notice connected themes.
                  </p>
                  {selectedSymbols.length > 0 && (
                    <div className="mb-5 border border-[#E2D9CC] bg-[#FFFDF8] p-4">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">Your symbols/images</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedSymbols.map((profile, index) => (
                          <button
                            key={profile.slug}
                            type="button"
                            onClick={() => toggleSubject(profile.slug)}
                            className="min-h-10 border border-[#B89B62] bg-white px-3 text-sm text-[#514A43]"
                            aria-label={`Remove ${profile.title}`}
                          >
                            {profile.title}{index === 0 ? " · main" : ""} <span aria-hidden="true">×</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {filteredProfiles.map((profile) => (
                      <SelectionButton key={profile.slug} selected={answers.subject === profile.slug || answers.relatedSubjects.includes(profile.slug)} onClick={() => toggleSubject(profile.slug)}>
                        {profile.title}
                      </SelectionButton>
                    ))}
                  </div>
                  {filteredProfiles.length === 0 && (
                    <div className="border border-[#DDD5CA] bg-white/60 p-6 text-[#625C55]">
                      <p>We could not find that image in the Compass just yet.</p>
                      <Link href="/dreams" className="mt-3 inline-block underline underline-offset-4">Look through the full dream library</Link>
                    </div>
                  )}
                  {subjectProfiles.length > filteredProfiles.length && (
                    <p className="mt-5 text-sm text-[#756D64]">Here are the first {filteredProfiles.length}. Try a more specific phrase if you want to narrow them down.</p>
                  )}
                </>
              )}

              {step === 1 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {(selectedProfile?.actions || []).map((action) => (
                    <SelectionButton key={action.label} selected={answers.action === action.label} onClick={() => choose("action", action.label)}>{action.label}</SelectionButton>
                  ))}
                </div>
              )}

              {step === 2 && (
                <fieldset>
                  <legend className="mb-3 text-sm font-medium text-[#514A43]">Choose every feeling that fits.</legend>
                  <p className="mb-5 max-w-2xl text-sm leading-6 text-[#625C55]">Dreams rarely leave us with just one emotion. Select the feelings that were present, even if they seem to conflict.</p>
                  <details className="mb-5 border-l border-[#B89B62] pl-4 text-sm text-[#625C55]">
                    <summary className="cursor-pointer font-medium text-[#695326]">Why do the feelings matter?</summary>
                    <p className="mt-2 leading-6">The same symbol/image can feel comforting to one person and threatening to another. Your emotions help keep the reading close to your experience.</p>
                  </details>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {dreamCompassEmotions.map((emotion) => (
                      <SelectionButton key={emotion} selected={answers.emotions.includes(emotion)} onClick={() => toggleList("emotions", emotion)}>{emotion}</SelectionButton>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 3 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {dreamCompassContexts.map((context) => (
                    <SelectionButton key={context} selected={answers.context === context} onClick={() => choose("context", context)}>{context}</SelectionButton>
                  ))}
                </div>
              )}

              {step === 4 && (
                <fieldset>
                  <legend className="mb-5 text-sm font-medium text-[#514A43]">Choose every answer that fits.</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {dreamCompassLingeringOptions.map((option) => (
                      <SelectionButton key={option} selected={answers.lingered.includes(option)} onClick={() => toggleList("lingered", option)}>{option}</SelectionButton>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 5 && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {dreamCompassIntentions.map((intention) => (
                    <SelectionButton key={intention} selected={answers.intention === intention} onClick={() => choose("intention", intention)}>{intention}</SelectionButton>
                  ))}
                </div>
              )}

              {step === 6 && (
                <fieldset>
                  <legend className="mb-5 text-sm leading-6 text-[#625C55]">Choose one or more. We&apos;ll take you straight to each part of the dream page.</legend>
                  <p className="mb-5 border-l border-[#B89B62] pl-4 text-sm leading-6 text-[#625C55]">Dream meanings are possibilities, not predictions or fixed facts. Keep what feels useful and leave what does not fit your experience.</p>
                  <div className="grid gap-3">
                    {dreamCompassPerspectives.map((perspective) => (
                      <SelectionButton key={perspective.value} selected={answers.perspectives.includes(perspective.value)} description={perspective.description} onClick={() => togglePerspective(perspective.value)}>
                        {perspective.label}{perspective.value === "balanced" ? " — A good place to start" : ""}
                      </SelectionButton>
                    ))}
                  </div>
                </fieldset>
              )}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#DED7CD] pt-7">
              <button type="button" onClick={goBack} disabled={step === 0} className="min-h-11 px-2 text-sm underline underline-offset-4 disabled:invisible">
                {returnToResults ? "Cancel" : "Back"}
              </button>
              <button type="button" onClick={advance} disabled={!currentValue} className="min-h-12 bg-[#1A1A1A] px-7 text-sm font-medium text-white transition hover:bg-[#333] disabled:cursor-not-allowed disabled:bg-[#B8B1A8]">
                {returnToResults ? "Refresh my matches" : step === steps.length - 1 ? "Show me where to begin" : "Continue"}
              </button>
            </div>
          </>
        ) : (
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#8F743C]">What your dream pointed toward</p>
            <h2 ref={headingRef} tabIndex={-1} className="mt-3 scroll-mt-6 font-serif text-4xl leading-tight outline-none md:text-6xl">A thoughtful place to begin</h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#625C55]">
              Read the closest match first. The other perspectives may help if a different detail carries more weight for you.
            </p>

            <dl className="mt-8 grid gap-px border border-[#DDD5CA] bg-[#DDD5CA] sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Symbols/images", [selectedProfile?.title, ...answers.relatedSubjects.map((slug) => profiles.find((profile) => profile.slug === slug)?.title)].filter(Boolean).join(", "), 0],
                ["What happened", answers.action, 1],
                ["Feelings", answers.emotions.join(", "), 2],
                ["Life right now", answers.context, 3],
                ["What lingered", answers.lingered.join(", "), 4],
                ["What you hope to understand", answers.intention, 5],
                ["Ways to explore", selectedPerspectives.map((item) => item.label).join(", "), 6],
              ].map(([label, value, targetStep]) => (
                <div key={label} className="bg-[#FFFDF9] p-4">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-[#8A8175]">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[#3F3932]">{value}</dd>
                  <dd className="mt-3">
                    <button
                      type="button"
                      onClick={() => editAnswer(targetStep)}
                      className="min-h-10 text-xs font-medium text-[#695326] underline decoration-[#B89B62] underline-offset-4"
                      aria-label={`Edit ${label.toLowerCase()}`}
                    >
                      Edit
                    </button>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              {rankedProfiles[0] && (
                <ResultCard
                  profile={rankedProfiles[0]}
                  perspectives={answers.perspectives}
                  primary
                  reasons={getMatchReasons(rankedProfiles[0])}
                  onOpen={() => trackCompassEvent("dream_compass_result_opened", { result_rank: 1, match_type: "primary" })}
                />
              )}

              {rankedProfiles.length > 1 && (
                <section className="mt-10" aria-labelledby="related-interpretations-heading">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#8F743C]">If another detail stands out</p>
                  <h3 id="related-interpretations-heading" className="mt-2 font-serif text-2xl md:text-3xl">You may also want to explore</h3>
                  <div className="mt-5 space-y-5">
                    {rankedProfiles.slice(1).map((profile, index) => (
                      <ResultCard
                        key={profile.slug}
                        profile={profile}
                        perspectives={answers.perspectives}
                        reasons={getMatchReasons(profile)}
                        onOpen={() => trackCompassEvent("dream_compass_result_opened", { result_rank: index + 2, match_type: "related" })}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>

            <section className="mt-10 border-l border-[#B89B62] bg-[#FFFDF8] px-6 py-7" aria-labelledby="dream-compass-resonance-heading">
              <h3 id="dream-compass-resonance-heading" className="font-serif text-2xl">Does any of this resonate?</h3>
              <p className="mt-3 italic leading-7 text-[#625C55]">Take a moment. What lands? What doesn&apos;t? Your gut knows.</p>
            </section>

            {primaryEmotionPathway && (
              <section className="mt-10 border border-[#DED7CD] bg-white/70 px-6 py-7" aria-labelledby="dream-compass-emotion-heading">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8F743C]">An emotional pathway</p>
                <h3 id="dream-compass-emotion-heading" className="mt-3 font-serif text-2xl">Follow the feeling a little further</h3>
                <p className="mt-3 max-w-2xl leading-7 text-[#625C55]">{primaryEmotionPathway.intro}</p>
                <Link href={`/emotions/${primaryEmotionPathway.slug}`} className="mt-5 inline-flex min-h-11 items-center border border-[#B89B62] bg-white px-5 text-sm font-medium text-[#695326] transition hover:bg-[#FFF8E9]">
                  Explore this emotion → {primaryEmotionPathway.title}
                </Link>
              </section>
            )}

            {reflectionQuestions.length > 0 && (
              <section className="mt-10 border-l border-[#B89B62] bg-[#FFFDF8] px-6 py-7">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8F743C]">A moment to pause</p>
                <h3 className="mt-3 font-serif text-2xl">Let these questions sit with you</h3>
                <ul className="mt-5 space-y-3 text-[#625C55]">
                  {reflectionQuestions.map((question) => <li key={question}>— {question}</li>)}
                </ul>
              </section>
            )}

            <div className="mt-10 flex flex-wrap gap-4 border-t border-[#DED7CD] pt-8">
              <button type="button" onClick={() => editAnswer(steps.length - 1)} className="min-h-11 underline underline-offset-4">Try a different lens</button>
              <button type="button" onClick={restart} className="min-h-11 border border-[#B89B62] bg-white px-6 text-sm font-medium">Explore another dream</button>
            </div>

            <section className="mt-10 border-t border-[#DED7CD] pt-8" aria-labelledby="dream-compass-feedback-heading">
              {feedbackStatus === "success" ? (
                <div aria-live="polite" className="border border-[#D8C7A0] bg-white/70 px-6 py-7 text-center">
                  <h3 id="dream-compass-feedback-heading" className="font-serif text-2xl text-[#312C27]">Thank you for your feedback.</h3>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="max-w-2xl">
                  <h3 id="dream-compass-feedback-heading" className="font-serif text-2xl text-[#312C27] md:text-3xl">How was your Dream Compass experience?</h3>
                  <fieldset className="mt-6">
                    <legend className="text-sm font-medium text-[#514A43]">How helpful was your reading?</legend>
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5" role="radiogroup">
                      {feedbackRatings.map((option) => {
                        const selected = feedbackRating === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => setFeedbackRating(option.value)}
                            disabled={feedbackStatus === "submitting"}
                            className={`min-h-24 border px-2 py-3 text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C] disabled:cursor-wait disabled:opacity-65 ${selected ? "border-[#9A7B43] bg-[#FFF8E9] shadow-sm" : "border-[#DDD5CA] bg-white/65 hover:border-[#B89B62] hover:bg-white"}`}
                          >
                            <span className="block text-2xl" aria-hidden="true">{option.emoji}</span>
                            <span className="mt-2 block text-xs leading-4 text-[#514A43]">{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <label htmlFor="dream-compass-feedback-comment" className="mt-7 block text-sm font-medium text-[#514A43]">Want to tell us why?</label>
                  <textarea
                    id="dream-compass-feedback-comment"
                    value={feedbackComment}
                    onChange={(event) => setFeedbackComment(event.target.value)}
                    maxLength={1000}
                    rows={3}
                    disabled={feedbackStatus === "submitting"}
                    placeholder="What did you like, or what could we do better?"
                    className="mt-2 w-full resize-y border border-[#D8CFC2] bg-white px-4 py-3 text-[#312C27] outline-none transition placeholder:text-[#9A9289] focus:border-[#9A7B43] disabled:cursor-wait disabled:opacity-65"
                  />

                  {feedbackMessage && <p role="alert" className="mt-3 text-sm text-[#8A3E32]">{feedbackMessage}</p>}

                  <button
                    type="submit"
                    disabled={!feedbackRating || feedbackStatus === "submitting" || !feedbackToken}
                    className="mt-5 min-h-11 bg-[#1A1A1A] px-6 text-sm font-medium text-white transition hover:bg-[#333] disabled:cursor-not-allowed disabled:bg-[#B8B1A8]"
                  >
                    {feedbackStatus === "submitting" ? "Submitting…" : "Submit feedback"}
                  </button>
                </form>
              )}
            </section>
          </div>
        )}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <AdsterraNativeBanner />
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 md:pb-12">
        <div className="border-t border-[#DED7CD] pt-7">
          <h2 className="mb-6 font-serif text-2xl text-[#312C27]">How Dream Compass works</h2>
          <div className="max-w-2xl space-y-7 pb-8 leading-7 text-[#625C55]">
            <section>
              <h3 className="font-serif text-xl text-[#312C27]">What is it?</h3>
              <p className="mt-3">Dream Compass helps you understand and explore a dream from a few different angles instead of giving you one fixed meaning. It looks at what happened, what stood out, how the dream felt, and what may be happening in your waking life.</p>
            </section>
            <section>
              <h3 className="font-serif text-xl text-[#312C27]">How do I use it?</h3>
              <p className="mt-3">Tell us what you remember. You don&apos;t need to remember every detail. Just answer the questions that feel relevant, and Dream Compass will help you connect the pieces. The important bit is what you remember.</p>
            </section>
            <section>
              <h3 className="font-serif text-xl text-[#312C27]">Why use Dream Compass?</h3>
              <div className="mt-3 space-y-4">
                <p>Because a snake, a house, a baby, or even water doesn&apos;t mean exactly the same thing to everyone.</p>
                <p>Dream Compass starts with your dream and your life, rather than forcing your experience into a list of predefined meanings.</p>
                <p>It&apos;s also completely free to use.</p>
                <p>Instead of searching through pages of dream meanings and wondering which one actually fits, Dream Compass gives you a place to start with the dream you actually had. And if you already have something specific in mind, you can use it to move toward the exact kind of meaning you&apos;re looking for.</p>
              </div>
            </section>
            <section>
              <h3 className="font-serif text-xl text-[#312C27]">What might it ask me?</h3>
              <div className="mt-3 space-y-4">
                <p>Dream Compass uses a series of simple questions to help you figure out where to begin. You don&apos;t have to know exactly how to describe your dream before you start.</p>
                <p>The questions help make the reading process easier by bringing your own experience into the interpretation and letting you jump toward the perspective or meaning that feels most relevant to you.</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
