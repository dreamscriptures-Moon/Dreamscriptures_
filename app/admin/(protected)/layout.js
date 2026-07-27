import Link from "next/link";
import { requireAdmin } from "@/lib/adminAuth";
import { logoutAdmin } from "../actions";

export const metadata = { title: "Admin", robots: { index: false, follow: false, nocache: true } };
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
  await requireAdmin();
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <Link href="/admin" className="font-serif text-xl">DreamScriptures Admin</Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/admin" className="text-slate-300 hover:text-white">Dashboard</Link>
            <Link href="/admin/submissions" className="text-slate-300 hover:text-white">Submissions</Link>
            <form action={logoutAdmin}><button className="rounded-lg border border-slate-700 px-3 py-2 text-slate-300 hover:border-slate-500 hover:text-white">Sign out</button></form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8">{children}</main>
    </div>
  );
}
