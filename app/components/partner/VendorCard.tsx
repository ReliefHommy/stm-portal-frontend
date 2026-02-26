// app/components/partner/VendorCard.tsx
import Link from "next/link";
import type { Vendor } from "./vendorMock";

export default function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <Link
      href={`/partner/${vendor.slug}`}
      className="group block break-inside-avoid rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md"
    >
      {/* Image placeholder */}
      <div className="mb-3 aspect-[4/3] w-full rounded-xl bg-slate-100" />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-extrabold text-slate-900">{vendor.name}</p>
          <p className="mt-0.5 text-xs font-semibold text-slate-600">{vendor.tagline}</p>
        </div>
        {vendor.verified ? (
          <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-extrabold text-emerald-700">
            Verified
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-xs text-slate-600 line-clamp-2">{vendor.note}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {vendor.categories.slice(0, 3).map((c) => (
          <span
            key={c}
            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-700"
          >
            {c}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs font-extrabold text-indigo-600 group-hover:underline">
        Open profile →
      </p>
    </Link>
  );
}
