"use client";

export default function AdminError({ reset }) {
  return <main className="rounded-2xl border border-red-200 bg-red-50 p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-800">Admin workspace</p><h1 className="mt-2 text-2xl font-semibold text-slate-950">This workspace could not load</h1><p className="mt-3 max-w-xl text-sm leading-6 text-red-950">The private admin service returned an error. No credentials or submission details are shown here.</p><button type="button" onClick={() => reset()} className="mt-6 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white">Try again</button></main>;
}
