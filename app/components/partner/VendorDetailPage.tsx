//app/components/partner/VendorDetailPage.tsx

import Link from "next/link";
import { vendors } from "./vendorMock";

export default function VendorDetailPage({ slug }: { slug: string }) {
  const vendor = vendors.find((v) => v.slug === slug);

  if (!vendor) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-10">
        <h1 className="text-xl font-black text-slate-900">Vendor not found</h1>
        <Link href="/partner" className="mt-4 inline-block text-sm font-bold text-indigo-600 hover:underline">
          ← Back to vendors
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
      <header className="mb-6 flex flex-col gap-3 md:mb-10">
        <div className="flex items-center gap-2">
          {vendor.verified ? (
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-extrabold text-emerald-700">
              Verified Partner
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-extrabold text-slate-600">
              Partner Vendor
            </span>
          )}

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-extrabold text-slate-600">
            {vendor.city}, {vendor.country}
          </span>
        </div>

        <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
          {vendor.name}
        </h1>
        <p className="text-sm font-semibold text-slate-600 md:text-base">{vendor.tagline}</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <section className="md:col-span-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Wire Society → Studio → Food
            </p>
            <p className="mt-2 text-sm text-slate-700">
              This profile connects the vendor’s community presence (Society), story/visual identity (Studio),
              and ordering action (Food).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">About</p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {vendor.note}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {vendor.categories.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-extrabold text-slate-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Featured Sets</p>
            <p className="mt-2 text-sm text-slate-600">(MVP placeholder) show product sets here later.</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Seen in Society</p>
            <p className="mt-2 text-sm text-slate-600">(MVP placeholder) show event cards where vendor appears.</p>
          </div>
        </section>

        {/* Sidebar (this matches your EventDetailPage mock) */}
        <aside className="md:col-span-4 space-y-6">
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              Partner Vendor
            </h4>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
              <div>
                <p className="font-bold text-sm">{vendor.name}</p>
                <p className="text-xs text-slate-500">{vendor.tagline}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-3 italic">{vendor.note}</p>

            <Link
              href={`/food/vendors/${vendor.slug}`}
              className="text-xs text-indigo-600 font-bold hover:underline"
            >
              View Marketplace Shop →
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Navigate</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/partner" className="text-xs font-extrabold text-indigo-600 hover:underline">
                ← Back to vendor list
              </Link>
              <Link href="/" className="text-xs font-extrabold text-indigo-600 hover:underline">
                ← Back to Society feed
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

