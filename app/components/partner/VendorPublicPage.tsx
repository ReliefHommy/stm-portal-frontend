// app/components/partner/VendorPublicPage.tsx
import VendorCard from "./VendorCard";
import { vendors } from "./vendorMock";

export default function VendorPublicPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
      <header className="mb-6 flex flex-col gap-2 md:mb-10">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
          Partners
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl">
          Community partner vendors you’ll see in Society events. Browse profiles, trust the story, and jump to Food shop when ready.
        </p>
      </header>

      {/* Masonry (Pinterest style) */}
      <section className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {vendors.map((v) => (
          <div key={v.slug} className="mb-4">
            <VendorCard vendor={v} />
          </div>
        ))}
      </section>
    </main>
  );
}
