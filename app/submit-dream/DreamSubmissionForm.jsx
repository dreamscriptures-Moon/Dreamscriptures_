"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
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
  const [dismissedPaymentUrl, setDismissedPaymentUrl] = useState("");

  useEffect(() => {
    if (state.status !== "payment_required") return;
    if (state.paymentKind === "RepeatCommunity") return;
    if (state.authorizationUrl) window.location.assign(state.authorizationUrl);
  }, [state]);

  if (state.status === "success") {
    return (
      <section className="rounded-3xl border border-[#D8C7A0] bg-white px-7 py-12 text-center shadow-[0_20px_55px_rgba(91,72,38,0.06)] md:px-12" aria-live="polite" tabIndex="-1">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D8C7A0] bg-[#FAF8F5] text-xl text-[#8F743C]" aria-hidden="true">✓</div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">Community submission confirmed</p>
        <h2 className="mb-4 font-serif text-3xl">Your dream has been received!</h2>
        <div className="mx-auto max-w-lg space-y-4 leading-relaxed text-[#5F574E]">
          <p>Thank you for trusting DreamScriptures.</p>
          <p>Your dream has been added to our Community Interpretation queue and will be interpreted as soon as possible.</p>
          <p className="font-medium text-[#3A3A3A]">⏳ Estimated response time: 24–72 hours</p>
          <p>We&apos;ll email you as soon as your interpretation is ready.</p>
          <p>In the meantime, feel free to continue exploring our dream library.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/dreams" className="rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white">Browse Dream Library</Link>
          <Link href="/" className="rounded-full border border-[#D8C7A0] px-6 py-3 text-sm font-medium text-[#5F574E]">Return Home</Link>
        </div>
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
            <label className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-[#E1DCD5] bg-[#FCFBF9] px-5 py-5 text-sm text-[#5F574E] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#C6A96B] hover:shadow-md has-[:checked]:border-[#C6A96B] has-[:checked]:bg-[#FAF7EF] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#8F743C]">
              <input type="radio" name="submissionType" value="Community" defaultChecked className="mt-1 h-4 w-4 accent-[#8F743C]" />
              <span><strong className="block font-serif text-lg text-[#2A2A2A]">Community Interpretation</strong><span className="mt-2 block leading-relaxed">Perfect if you&apos;re happy to wait while helping DreamScriptures grow.</span><strong className="mt-4 block text-xs uppercase tracking-[0.14em] text-[#8A8175]">Included</strong><span className="mt-2 block leading-relaxed">✨ Complete dream interpretation<br />◈ Symbolic interpretation<br />◊ Spiritual reflection<br />✝️ Biblical insights where appropriate<br />✉ Email notification when ready<br />○ Community queue</span><strong className="mt-4 block text-[#3A3A3A]">⏳ Estimated response: 24–72 hours</strong><span className="mt-3 block border-t border-[#E1DCD5] pt-3 text-xs leading-relaxed">Your first Community dream submission is completely free.<br /><br />Additional Community submissions are $0.99 each to help reduce spam and keep the queue fair for everyone.</span></span>
            </label>
            <label className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-[#D8C7A0] bg-gradient-to-b from-[#FFFDF8] to-[#FAF7EF] px-5 py-5 text-sm text-[#5F574E] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#B79B5E] hover:shadow-lg has-[:checked]:ring-2 has-[:checked]:ring-[#C6A96B]/40 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#8F743C]">
              <input type="radio" name="submissionType" value="Personal" className="mt-1 h-4 w-4 accent-[#8F743C]" />
              <span><span className="mb-2 inline-flex rounded-full bg-[#8F743C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">⭐ Most Popular</span><strong className="block font-serif text-lg text-[#2A2A2A]">Personal Dream Interpretation · $5.99</strong><span className="mt-2 block leading-relaxed">Our deepest and most personalized interpretation, written specifically for your dream.</span><strong className="mt-4 block text-xs uppercase tracking-[0.14em] text-[#8A8175]">Premium includes</strong><span className="mt-2 block leading-relaxed">⭐ VIP Priority Queue<br />⚡ Estimated response: 2–8 hours<br />◆ Significantly deeper interpretation<br />◈ Greater symbolic analysis<br />✝️ Rich biblical context and scripture connections<br />◊ Personalized spiritual reflection<br />✓ Practical life application<br />? One follow-up clarification question<br />▣ Beautiful downloadable PDF<br />✉ Priority email delivery<br />⭐ VIP support</span><strong className="mt-4 block text-[#8F743C]">Up to 90% faster than Community</strong></span>
            </label>
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
        {pending ? "Continuing…" : "Continue"}
      </button>

      {state.status === "payment_required" && state.paymentKind === "RepeatCommunity" && state.authorizationUrl !== dismissedPaymentUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-5" onMouseDown={(event) => { if (event.target === event.currentTarget) setDismissedPaymentUrl(state.authorizationUrl); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="repeat-payment-title" className="w-full max-w-lg rounded-3xl border border-[#D8C7A0] bg-white p-7 shadow-2xl md:p-9">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">Community queue</p>
            <h2 id="repeat-payment-title" className="font-serif text-3xl">You&apos;ve already used your free Community submission.</h2>
            <p className="mt-4 leading-relaxed text-[#5F574E]">To help prevent spam and keep response times fair, additional Community submissions cost $0.99.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" autoFocus onClick={() => window.location.assign(state.authorizationUrl)} className="rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]">Continue to Payment</button>
              <button type="button" onClick={() => setDismissedPaymentUrl(state.authorizationUrl)} className="rounded-full border border-[#D8C7A0] px-6 py-3 text-sm font-medium text-[#5F574E] hover:border-[#C6A96B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]">Cancel</button>
            </div>
          </section>
        </div>
      )}
    </form>
  );
}
