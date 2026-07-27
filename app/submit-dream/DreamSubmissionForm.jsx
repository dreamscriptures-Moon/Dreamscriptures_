"use client";

import { useActionState, useState } from "react";
import { submitDreamAction } from "./actions";

const emotions = [
  "Fear", "Love", "Peace", "Hope", "Healing", "Grief", "Joy",
  "Confusion", "Anxiety", "Relief",
];

const symbols = [
  "Snake", "Water", "House", "Baby", "Door", "Fire", "Death", "Bird",
  "Moon", "Ocean", "Wedding", "Car", "Money", "Rain", "Dog", "Cat",
];

const recurrenceOptions = ["First Time", "Sometimes", "Often", "Recurring"];

const initialState = { status: "idle", message: "", errors: {} };

function FieldError({ id, message }) {
  if (!message) return null;
  return <p id={id} className="mt-2 text-sm text-[#9A4F45]" role="alert">{message}</p>;
}

function ChipGroup({ legend, hint, name, options }) {
  return (
    <fieldset>
      <legend className="font-serif text-xl text-[#2A2A2A]">{legend}</legend>
      {hint && <p className="mt-1 text-sm text-[#756C61]">{hint}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input type="checkbox" name={name} value={option} className="peer sr-only" />
            <span className="inline-flex rounded-full border border-[#E1DCD5] bg-[#FCFBF9] px-4 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B] peer-checked:border-[#A98A4C] peer-checked:bg-[#F3ECDD] peer-checked:text-[#5D4921] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#8F743C]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function DreamSubmissionForm() {
  const [state, formAction, pending] = useActionState(submitDreamAction, initialState);
  const [showCustomSymbols, setShowCustomSymbols] = useState(false);
  const [dreamLength, setDreamLength] = useState(0);

  if (state.status === "success") {
    return (
      <section className="rounded-3xl border border-[#D8C7A0] bg-white px-7 py-12 text-center shadow-[0_20px_55px_rgba(91,72,38,0.06)] md:px-12" aria-live="polite" tabIndex="-1">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D8C7A0] bg-[#FAF8F5] text-xl text-[#8F743C]" aria-hidden="true">✓</div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">Dream received</p>
        <h2 className="mb-4 font-serif text-3xl">Thank You for Sharing</h2>
        <p className="mx-auto max-w-lg leading-relaxed text-[#5F574E]">{state.message}</p>
      </section>
    );
  }

  const inputClass = "mt-2 w-full rounded-2xl border border-[#E1DCD5] bg-[#FCFBF9] px-4 py-3 text-[#2A2A2A] outline-none transition placeholder:text-[#A39B91] focus:border-[#B79B5E] focus:ring-2 focus:ring-[#C6A96B]/20";

  return (
    <form action={formAction} className="rounded-3xl border border-[#EAE6E1] bg-white p-6 shadow-[0_20px_55px_rgba(91,72,38,0.05)] md:p-10" noValidate>
      <div className="space-y-8">
        <fieldset>
          <legend className="font-serif text-xl text-[#2A2A2A]">Interpretation type</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#C6A96B] bg-[#FAF7EF] px-4 py-4 text-sm text-[#5F574E]">
              <input type="radio" name="submissionType" value="Community" defaultChecked className="mt-1 h-4 w-4 accent-[#8F743C]" />
              <span><strong className="block text-[#2A2A2A]">Community Interpretation</strong>Free. Your dream may anonymously inspire a public article.</span>
            </label>
            <div className="rounded-2xl border border-[#E1DCD5] bg-[#FCFBF9] px-4 py-4 text-sm text-[#756C61]" aria-disabled="true">
              <strong className="block text-[#5F574E]">Personal Interpretation · $5.99</strong>
              Detailed, private interpretation available after publication.
            </div>
          </div>
        </fieldset>

        <div>
          <label htmlFor="dreamDescription" className="font-serif text-xl text-[#2A2A2A]">Dream description <span className="text-[#9A4F45]" aria-hidden="true">*</span></label>
          <textarea id="dreamDescription" name="dreamDescription" required rows="9" minLength="100" maxLength="3000" aria-required="true" aria-invalid={Boolean(state.errors?.dreamDescription)} aria-describedby={`dream-description-hint dream-description-counter${state.errors?.dreamDescription ? " dream-description-error" : ""}`} className={inputClass} onChange={(event) => setDreamLength(event.target.value.length)} />
          <p id="dream-description-hint" className="mt-2 text-sm text-[#756C61]">Include as much detail as you remember—people, places, emotions, colors, symbols, conversations, and how the dream ended.</p>
          <p id="dream-description-counter" className={`mt-1 text-xs transition-colors ${dreamLength >= 2700 ? "text-[#9A4F45]" : "text-[#756C61]"}`} aria-live="polite">{dreamLength} / 3000 characters</p>
          <FieldError id="dream-description-error" message={state.errors?.dreamDescription} />
        </div>

        <div>
          <label htmlFor="dreamTitle" className="font-medium text-[#3A3A3A]">Dream title <span className="font-normal text-[#8A8175]">(optional)</span></label>
          <input id="dreamTitle" name="dreamTitle" type="text" maxLength="160" autoComplete="off" placeholder="A short name for your dream" className={inputClass} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-medium text-[#3A3A3A]">Name <span className="text-[#9A4F45]" aria-hidden="true">*</span></label>
            <input id="name" name="name" type="text" required maxLength="120" autoComplete="name" aria-required="true" aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? "name-error" : undefined} className={inputClass} />
            <FieldError id="name-error" message={state.errors?.name} />
          </div>
          <div>
            <label htmlFor="email" className="font-medium text-[#3A3A3A]">Email <span className="text-[#9A4F45]" aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" required maxLength="254" autoComplete="email" inputMode="email" aria-required="true" aria-invalid={Boolean(state.errors?.email)} aria-describedby={`email-privacy${state.errors?.email ? " email-error" : ""}`} className={inputClass} />
            <p id="email-privacy" className="mt-2 text-xs leading-relaxed text-[#756C61]">Your email will only be used to contact you regarding your dream submission. It will never be shared.</p>
            <FieldError id="email-error" message={state.errors?.email} />
          </div>
        </div>

        <div className="border-t border-[#EAE6E1] pt-8"><ChipGroup legend="Emotions" hint="Choose every feeling that shaped the dream." name="emotions" options={emotions} /></div>

        <div className="border-t border-[#EAE6E1] pt-8">
          <ChipGroup legend="Symbols" hint="Select any symbols you remember." name="symbols" options={symbols} />
          <button type="button" aria-expanded={showCustomSymbols} aria-controls="custom-symbols" onClick={() => setShowCustomSymbols((visible) => !visible)} className="mt-4 text-sm font-medium text-[#8F743C] underline decoration-[#C6A96B] underline-offset-4">
            {showCustomSymbols ? "Hide custom symbols" : "+ Add custom symbols"}
          </button>
          {showCustomSymbols && (
            <div id="custom-symbols" className="mt-4">
              <label htmlFor="customSymbols" className="text-sm font-medium text-[#3A3A3A]">Custom symbols</label>
              <input id="customSymbols" name="customSymbols" type="text" maxLength="500" placeholder="Forest, keys, clock" aria-describedby="custom-symbols-hint" className={inputClass} />
              <p id="custom-symbols-hint" className="mt-2 text-xs text-[#756C61]">Separate multiple symbols with commas.</p>
            </div>
          )}
        </div>

        <fieldset className="border-t border-[#EAE6E1] pt-8">
          <legend className="font-serif text-xl text-[#2A2A2A]">Recurring dream?</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {recurrenceOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#E1DCD5] bg-[#FCFBF9] px-4 py-3 text-sm text-[#5F574E] transition hover:border-[#C6A96B]">
                <input type="radio" name="recurrence" value={option} className="h-4 w-4 accent-[#8F743C]" /> {option}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="border-t border-[#EAE6E1] pt-8">
          <legend className="font-serif text-xl leading-snug text-[#2A2A2A]">Would you like DreamScriptures to contact you if your dream is selected for interpretation?</legend>
          <div className="mt-4 flex gap-5">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-2 text-[#5F574E]">
                <input type="radio" name="contactPermission" value={option} className="h-4 w-4 accent-[#8F743C]" /> {option}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="border-t border-[#EAE6E1] pt-8">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#5F574E]">
            <input type="checkbox" name="consent" required aria-required="true" aria-invalid={Boolean(state.errors?.consent)} aria-describedby={state.errors?.consent ? "consent-error" : undefined} className="mt-1 h-4 w-4 shrink-0 accent-[#8F743C]" />
            <span>I understand my dream may be used anonymously to inspire a future DreamScriptures interpretation. My personal information will never be published. <span className="text-[#9A4F45]" aria-hidden="true">*</span></span>
          </label>
          <FieldError id="consent-error" message={state.errors?.consent} />
        </div>
      </div>

      {state.status === "error" && <p className="mt-8 rounded-2xl border border-[#E8CEC9] bg-[#FFF8F6] px-4 py-3 text-sm text-[#8B443C]" role="alert">{state.message}</p>}

      <button type="submit" disabled={pending} className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#1A1A1A] px-7 py-3 font-medium text-white transition hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C] disabled:cursor-wait disabled:opacity-60 md:w-auto" aria-disabled={pending}>
        {pending ? "Sharing your dream…" : "Share My Dream"}
      </button>
    </form>
  );
}
