import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { getPaymentIntent } from "@/lib/repositories/paymentIntents";

export const metadata = { title: "Payment Status", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function PaymentStatusPage({ searchParams }) {
  const query = await searchParams;
  const intent = query.reference ? await getPaymentIntent(String(query.reference)) : null;
  const complete = intent?.status === "Paid" && Boolean(intent.fulfilled_at);
  const isPersonal = intent?.kind === "Personal";

  let title = "Payment processing";
  let message = "Paystack is confirming your payment. This page can be refreshed in a moment.";
  if (complete) {
    title = isPersonal ? "Personal interpretation requested" : "Thank You for Sharing";
    message = isPersonal
      ? "Your payment is confirmed and your submission is now in the Premium queue."
      : "Your payment is confirmed and your dream has been shared successfully.";
  } else if (query.already_paid === "1") {
    title = "Already requested";
    message = "A Personal Interpretation has already been paid for this dream.";
  } else if (query.error) {
    title = "Payment could not be started";
    message = "No submission was saved and no email was sent. Please try again.";
  }

  return <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A]"><SiteHeader /><article className="mx-auto max-w-3xl px-6 py-16 md:py-24"><section className="rounded-3xl border border-[#D8C7A0] bg-white px-7 py-12 text-center shadow-[0_20px_55px_rgba(91,72,38,0.06)] md:px-12" aria-live="polite"><p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">Payment status</p><h1 className="mb-4 font-serif text-3xl">{title}</h1><p className="mx-auto max-w-lg leading-relaxed text-[#5F574E]">{message}</p><div className="mt-7 flex flex-wrap justify-center gap-3">{!complete && intent?.authorization_url && <Link href={`/api/payments/retry?reference=${encodeURIComponent(intent.reference)}`} className="rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white">Retry Payment</Link>}<Link href="/" className="rounded-full border border-[#D8C7A0] px-6 py-3 text-sm font-medium text-[#5F574E]">Return home</Link></div></section></article><SiteFooter /></main>;
}
