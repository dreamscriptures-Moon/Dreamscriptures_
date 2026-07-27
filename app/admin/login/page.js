import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import LoginForm from "./LoginForm";

export const metadata = { title: "Admin Login", robots: { index: false, follow: false } };

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">DreamScriptures</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Admin access</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to manage private dream submissions.</p>
        <LoginForm />
      </section>
    </main>
  );
}
