"use client";

import { useActionState } from "react";
import { loginAdmin } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, { error: "" });
  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="password" className="text-sm font-medium text-slate-700">Admin password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" autoFocus className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200" />
      </div>
      {state.error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{state.error}</p>}
      <button disabled={pending} className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white hover:bg-slate-700 disabled:opacity-60">{pending ? "Signing in…" : "Sign in"}</button>
    </form>
  );
}
