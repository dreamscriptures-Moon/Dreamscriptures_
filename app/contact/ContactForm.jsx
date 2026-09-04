"use client";

import { useActionState, useEffect, useRef } from "react";
import { CONTACT_CATEGORIES } from "@/lib/contactValidation";
import { sendContactMessageAction } from "./actions";

const initialState = { status: "idle", errors: {}, values: {} };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessageAction, initialState);
  const formRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return <section ref={statusRef} tabIndex="-1" aria-live="polite" className="rounded-[2rem] border border-[#D8C7A0] bg-white px-7 py-12 text-center shadow-[0_20px_55px_rgba(91,72,38,0.06)] outline-none sm:px-12"><p className="text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">Thank you</p><h2 className="mt-3 font-serif text-3xl text-[#29251F]">Message sent</h2><p className="mx-auto mt-4 max-w-md leading-7 text-[#625B52]">Thank you for reaching out. Your message has been sent successfully.</p></section>;
  }

  const inputClass = "mt-2 w-full rounded-2xl border border-[#DED7CD] bg-[#FCFBF9] px-4 py-3 text-[#29251F] outline-none transition placeholder:text-[#A39B91] focus:border-[#B79B5E] focus:ring-2 focus:ring-[#C6A96B]/20 disabled:cursor-wait disabled:opacity-70";
  return (
    <form ref={formRef} action={formAction} noValidate className="rounded-[2rem] border border-[#E7DDD2] bg-white p-6 shadow-[0_20px_55px_rgba(91,72,38,0.06)] sm:p-9">
      {state.message && <div ref={statusRef} tabIndex="-1" role="alert" className="mb-6 rounded-2xl border border-[#D8B4A8] bg-[#FFF8F5] px-4 py-3 text-sm leading-6 text-[#7A3E2F] outline-none">{state.message}</div>}
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" /></div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={state.errors?.name} htmlFor="contact-name"><input id="contact-name" name="name" type="text" required minLength="2" maxLength="120" autoComplete="name" disabled={isPending} defaultValue={state.values?.name || ""} aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? "contact-name-error" : undefined} className={inputClass} /></Field>
        <Field label="Email" error={state.errors?.email} htmlFor="contact-email"><input id="contact-email" name="email" type="email" required maxLength="254" autoComplete="email" inputMode="email" disabled={isPending} defaultValue={state.values?.email || ""} aria-invalid={Boolean(state.errors?.email)} aria-describedby={state.errors?.email ? "contact-email-error" : undefined} className={inputClass} /></Field>
      </div>
      <div className="mt-6"><Field label="What can we help with?" error={state.errors?.category} htmlFor="contact-category"><select id="contact-category" name="category" required disabled={isPending} defaultValue={state.values?.category || ""} aria-invalid={Boolean(state.errors?.category)} aria-describedby={state.errors?.category ? "contact-category-error" : undefined} className={inputClass}><option value="" disabled>Select a topic</option>{CONTACT_CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>)}</select></Field></div>
      <div className="mt-6"><Field label="Message" error={state.errors?.message} htmlFor="contact-message"><textarea id="contact-message" name="message" required minLength="20" maxLength="5000" rows="8" disabled={isPending} defaultValue={state.values?.message || ""} aria-invalid={Boolean(state.errors?.message)} aria-describedby={state.errors?.message ? "contact-message-error contact-privacy-note" : "contact-privacy-note"} className={`${inputClass} resize-y`} /></Field></div>
      <button type="submit" disabled={isPending} className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#29251F] px-7 py-3 font-medium text-white transition hover:bg-[#51483E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C] disabled:cursor-wait disabled:opacity-65 sm:w-auto">{isPending ? "Sending…" : "Send message →"}</button>
      <p id="contact-privacy-note" className="mt-4 text-sm italic leading-6 text-[#756C61]">Please don&apos;t include highly sensitive personal information in your message.</p>
    </form>
  );
}

function Field({ children, error, htmlFor, label }) {
  return <div><label htmlFor={htmlFor} className="text-sm font-medium text-[#3A342E]">{label}</label>{children}{error && <p id={`${htmlFor}-error`} className="mt-2 text-sm text-[#9A4735]">{error}</p>}</div>;
}
