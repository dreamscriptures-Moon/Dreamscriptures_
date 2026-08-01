import Link from "next/link";
import { listDreamSubmissions, searchDreamSubmissions } from "@/lib/repositories/dreamSubmissions";

const statuses = ["", "Pending", "Reviewed", "Published", "Rejected"];
const sorts = [
  ["created_at", "Submitted date"], ["reference_id", "Reference ID"], ["name", "Name"],
  ["dream_title", "Dream title"], ["status", "Status"], ["payment_status", "Payment status"],
  ["priority", "Priority"],
];

function queryHref(params, changes) {
  const next = new URLSearchParams(params);
  Object.entries(changes).forEach(([key, value]) => value ? next.set(key, value) : next.delete(key));
  return `/admin/submissions?${next}`;
}

export default async function SubmissionListPage({ searchParams }) {
  const raw = await searchParams;
  const filters = {
    search: String(raw.q || "").trim(),
    status: String(raw.status || ""),
    sort: String(raw.sort || "priority"),
    direction: raw.direction === "asc" ? "asc" : "desc",
    page: Math.max(1, Number(raw.page) || 1),
    pageSize: 20,
  };
  const result = filters.search
    ? await searchDreamSubmissions(filters.search, filters)
    : await listDreamSubmissions(filters);
  const pages = Math.max(1, Math.ceil(result.total / filters.pageSize));
  const preserved = new URLSearchParams();
  if (filters.search) preserved.set("q", filters.search);
  if (filters.status) preserved.set("status", filters.status);
  preserved.set("sort", filters.sort);
  preserved.set("direction", filters.direction);

  return (
    <>
      <div><p className="text-sm font-medium text-amber-700">Manage</p><h1 className="mt-1 text-3xl font-semibold">Submissions</h1><p className="mt-2 text-sm text-slate-500">{result.total} matching submissions</p></div>
      <form className="mt-6 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[minmax(220px,1fr)_180px_180px_130px_auto]">
        <input name="q" defaultValue={filters.search} placeholder="Search reference, name, email, title" className="rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        <select name="status" defaultValue={filters.status} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">{statuses.map((status) => <option key={status} value={status}>{status || "All statuses"}</option>)}</select>
        <select name="sort" defaultValue={filters.sort} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">{sorts.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
        <select name="direction" defaultValue={filters.direction} className="rounded-lg border border-slate-300 px-3 py-2 text-sm"><option value="desc">Descending</option><option value="asc">Ascending</option></select>
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">Apply</button>
      </form>
      <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{["Reference", "Name / Email", "Dream title", "Priority", "Status", "Payment", "Submitted"].map((title) => <th key={title} className="px-4 py-3 font-semibold">{title}</th>)}</tr></thead>
          <tbody className="divide-y divide-slate-100">
            {result.submissions.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-4 py-4"><Link href={`/admin/submissions/${item.id}`} className="font-medium text-amber-800 hover:underline">{item.reference_id}</Link></td>
                <td className="px-4 py-4"><p className="font-medium">{item.name}</p><p className="text-slate-500">{item.email}</p></td>
                <td className="max-w-xs px-4 py-4">{item.dream_title || "Untitled dream"}</td>
                <td className="px-4 py-4"><div className="flex flex-col items-start gap-1.5"><span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${item.submission_type === "Personal" ? "bg-amber-100 text-amber-900" : "bg-slate-100 text-slate-600"}`}>{item.submission_type === "Personal" ? "⭐ Premium" : "☾ Community"}</span><span className={`text-xs font-semibold ${item.priority === "Premium" ? "text-amber-800" : "text-slate-500"}`}>{item.priority === "Premium" ? "⭐⭐⭐ VIP" : "Community priority"}</span></div></td>
                <td className="px-4 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium">{item.status}</span></td>
                <td className="px-4 py-4">{item.payment_status}</td>
                <td className="whitespace-nowrap px-4 py-4 text-slate-500">{new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(item.created_at))}</td>
              </tr>
            ))}
            {!result.submissions.length && <tr><td colSpan="7" className="px-4 py-12 text-center text-slate-500">No submissions match these filters.</td></tr>}
          </tbody>
        </table>
      </div>
      <nav className="mt-5 flex items-center justify-between text-sm">
        <Link aria-disabled={filters.page <= 1} href={filters.page > 1 ? queryHref(preserved, { page: String(filters.page - 1) }) : "#"} className={`rounded-lg border px-4 py-2 ${filters.page <= 1 ? "pointer-events-none text-slate-400" : "bg-white hover:bg-slate-50"}`}>Previous</Link>
        <span className="text-slate-500">Page {Math.min(filters.page, pages)} of {pages}</span>
        <Link aria-disabled={filters.page >= pages} href={filters.page < pages ? queryHref(preserved, { page: String(filters.page + 1) }) : "#"} className={`rounded-lg border px-4 py-2 ${filters.page >= pages ? "pointer-events-none text-slate-400" : "bg-white hover:bg-slate-50"}`}>Next</Link>
      </nav>
    </>
  );
}
