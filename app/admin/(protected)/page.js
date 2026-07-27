import Link from "next/link";
import { getDreamSubmissionStats, listDreamSubmissions } from "@/lib/repositories/dreamSubmissions";

export default async function AdminDashboard() {
  const [stats, recent] = await Promise.all([
    getDreamSubmissionStats(),
    listDreamSubmissions({ pageSize: 5, sort: "priority", direction: "desc" }),
  ]);
  const cards = [
    ["Pending", stats.pending], ["Reviewed", stats.reviewed], ["Published", stats.published],
    ["Rejected", stats.rejected], ["Premium", stats.premium], ["Community", stats.community],
    ["Today's submissions", stats.today], ["This week's submissions", stats.week], ["Total submissions", stats.total],
  ];
  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <div><p className="text-sm font-medium text-amber-700">Overview</p><h1 className="mt-1 text-3xl font-semibold">Dream submissions</h1></div>
        <Link href="/admin/submissions" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">View all</Link>
      </div>
      <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([label, value]) => <div key={label} className="rounded-xl border border-slate-200 bg-white p-5"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-3xl font-semibold">{value}</p></div>)}
      </section>
      <section className="mt-8 rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-5 py-4"><h2 className="text-xl font-semibold">Priority queue</h2><p className="mt-1 text-sm text-slate-500">Premium submissions appear first.</p></div>
        <div className="divide-y divide-slate-100">
          {recent.submissions.map((item) => <Link key={item.id} href={`/admin/submissions/${item.id}`} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-slate-50"><div><p className="font-medium">{item.dream_title || "Untitled dream"}</p><p className="mt-1 text-sm text-slate-500">{item.reference_id} · {item.name}</p></div><div className="flex gap-2"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.priority === "Premium" ? "bg-amber-100 text-amber-900" : "bg-slate-100 text-slate-600"}`}>{item.priority === "Premium" ? "⭐⭐⭐ Premium" : "Community"}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">{item.status}</span></div></Link>)}
          {!recent.submissions.length && <p className="px-5 py-8 text-sm text-slate-500">No submissions yet.</p>}
        </div>
      </section>
    </>
  );
}
