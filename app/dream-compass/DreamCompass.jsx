"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  dreamCompassContexts,
  dreamCompassContextQuestions,
  dreamCompassEmotions,
  dreamCompassEmotionQuestions,
  dreamCompassGeneralQuestions,
  dreamCompassPerspectives,
} from "@/data/dreamCompass";

const steps = [
  { eyebrow: "Symbols and images", title: "What stood out to you in the dream?" },
  { eyebrow: "What unfolded", title: "What was happening?" },
  { eyebrow: "The emotional clue", title: "How did the dream feel?" },
  { eyebrow: "Life right now", title: "What feels closest to your waking life?" },
  { eyebrow: "Choose a lens", title: "How would you like to explore it?" },
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
  if (profile.excerpts[answers.perspectives[0]]) score += 6;

  return score;
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

export default function DreamCompass({ profiles }) {
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState("");
  const [returnToResults, setReturnToResults] = useState(false);
  const headingRef = useRef(null);
  const hasMounted = useRef(false);
  const [answers, setAnswers] = useState({
    subject: "",
    relatedSubjects: [],
    action: "",
    emotions: [],
    context: "",
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
    setAnswers({ subject: "", relatedSubjects: [], action: "", emotions: [], context: "", perspectives: ["balanced"] });
    setQuery("");
    setReturnToResults(false);
    setStep(0);
  }

  return (
    <>
      <header className="border-b border-[#DED7CD] bg-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center md:py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8F743C]">Dream Compass</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            What might your dream be showing you?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#625C55] md:text-lg md:leading-8">
            Start with the symbol or image you remember most. Then follow the feelings, details, and life connections that made this dream feel personal to you.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#756D64]">
            Your feelings and life context remain in this browser tab. If you accepted site analytics, we only note completed steps and the article you choose to open.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-12 md:py-20">
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

            <p className="text-[11px] uppercase tracking-[0.18em] text-[#8F743C]">{steps[step].eyebrow}</p>
            <h2 ref={headingRef} tabIndex={-1} className="mt-3 scroll-mt-6 font-serif text-3xl leading-tight outline-none md:text-5xl">{steps[step].title}</h2>

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
                ["Ways to explore", selectedPerspectives.map((item) => item.label).join(", "), 4],
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
          </div>
        )}
      </section>
    </>
  );
}
