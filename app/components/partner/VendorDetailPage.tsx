//app/components/partner/VendorDetailPage.tsx

// app/components/partner/VendorPublicPage.tsx

import Link from "next/link";

type VendorProfile = {
  slug: string;
  name: string;
  tagline: string;
  shortBio: string;
  longBio: string[];
  badges: string[];
  categories: string[];
  location: {
    city: string;
    country: string;
    address?: string;
  };
  links: {
    marketplaceShopHref: string;
    website?: string;
    instagram?: string;
    facebook?: string;
  };
  highlights: { label: string; value: string }[];
  featuredSets: {
    title: string;
    desc: string;
    price: string;
    href: string;
  }[];
  upcomingSocietyEvents: {
    id: string;
    title: string;
    dateLabel: string;
    locationLabel: string;
    roleLabel: string;
    href: string;
  }[];
  studioContent: {
    title: string;
    desc: string;
    href: string;
  }[];
};

const vendor: VendorProfile = {
  slug: "somtam-kitchen",
  name: "Somtam Kitchen",
  tagline: "Authentic Thai Food • Snacks • Catering",
  shortBio: "Providing traditional Thai snacks for community events across Sweden.",
  longBio: [
    "Somtam Kitchen is a small vendor bringing Thai street-food energy into local community spaces.",
    "We partner with temples, cultural festivals, and Thai community meetups—offering handmade snacks, set menus, and seasonal specials.",
    "You can discover us through Society events, explore our visuals through Studio content, and order via the STM Food Marketplace.",
  ],
  badges: ["Partner Vendor", "Community Verified", "Event Catering"],
  categories: ["Thai Snacks", "Street Food", "Catering"],
  location: {
    city: "Malmö",
    country: "Sweden",
    address: "Pickup by arrangement (message us after ordering)",
  },
  links: {
    marketplaceShopHref: "/food/vendors/somtam-kitchen",
    website: "https://example.com",
    instagram: "https://instagram.com/example",
    facebook: "https://facebook.com/example",
  },
  highlights: [
    { label: "Delivery", value: "Pickup + Local delivery" },
    { label: "Lead time", value: "24–48 hours" },
    { label: "Best sellers", value: "Snack sets + Somtam kit" },
    { label: "Languages", value: "Thai • English • Swedish" },
  ],
  featuredSets: [
    {
      title: "Thai Snack Set",
      desc: "A curated box of Thai sweets & savory bites (perfect for events).",
      price: "199 kr",
      href: "/food/products/thai-snack-set",
    },
    {
      title: "Somtam Ingredients Kit",
      desc: "Everything you need for real somtam at home (EU-friendly).",
      price: "249 kr",
      href: "/food/products/somtam-kit",
    },
    {
      title: "Catering Mini Tray",
      desc: "Small tray package for meetups (10–15 people).",
      price: "499 kr",
      href: "/food/products/catering-mini-tray",
    },
  ],
  upcomingSocietyEvents: [
    {
      id: "evt_1024",
      title: "Temple Community Lunch",
      dateLabel: "Sat • 12:00",
      locationLabel: "Thai Temple • Lund",
      roleLabel: "Providing snacks",
      href: "/event/1024",
    },
    {
      id: "evt_1029",
      title: "Thai Culture Night",
      dateLabel: "Fri • 18:00",
      locationLabel: "Community Hall • Malmö",
      roleLabel: "Food partner",
      href: "/event/1029",
    },
  ],
  studioContent: [
    {
      title: "Behind the scenes: Thai Snacks",
      desc: "Short story + visuals (Studio content card).",
      href: "/studio/posts/behind-the-scenes-thai-snacks",
    },
    {
      title: "Brand Story: Somtam Kitchen",
      desc: "Founder story and signature flavors.",
      href: "/studio/posts/somtam-kitchen-story",
    },
  ],
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
      {children}
    </span>
  );
}

function SectionTitle({ label }: { label: string }) {
  return (
    <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
      {label}
    </h2>
  );
}

type VendorDetailPageProps = {
  slug: string;
};

export default function PartnerVendorPublicProfilePage({
  slug,
}: VendorDetailPageProps) {
  void slug;
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
      {/* Header */}
      <header className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {vendor.badges.map((b) => (
              <Pill key={b}>{b}</Pill>
            ))}
          </div>

          <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            {vendor.name}
          </h1>
          <p className="mt-1 text-sm font-semibold text-slate-600 md:text-base">
            {vendor.tagline}
          </p>

          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            {vendor.shortBio}
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <Link
            href={vendor.links.marketplaceShopHref}
            className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-sm hover:bg-indigo-700"
          >
            View Marketplace Shop →
          </Link>
          <Link
            href="/food"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
          >
            Explore STM Food
          </Link>
        </div>
      </header>

      {/* Body grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Left / Main */}
        <section className="md:col-span-8 space-y-6">
          {/* Wire banner */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle label="Wire Society → Studio → Food" />
            <p className="mt-2 text-sm text-slate-700">
              Discover this vendor through <span className="font-bold">Society</span>{" "}
              events, connect through <span className="font-bold">Studio</span>{" "}
              stories & visuals, and order via <span className="font-bold">Food</span>{" "}
              marketplace.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-extrabold text-slate-900">Society</p>
                <p className="mt-1 text-xs text-slate-600">
                  Events, community presence, trust.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-extrabold text-slate-900">Studio</p>
                <p className="mt-1 text-xs text-slate-600">
                  Stories, visuals, brand content.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-extrabold text-slate-900">Food</p>
                <p className="mt-1 text-xs text-slate-600">
                  Shop sets, order, pickup/delivery.
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle label="About this partner" />
            <div className="mt-3 space-y-3">
              {vendor.longBio.map((p, idx) => (
                <p key={idx} className="text-sm text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {vendor.categories.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
          </div>

          {/* Featured sets (Food preview) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <SectionTitle label="Featured sets" />
              <Link
                href={vendor.links.marketplaceShopHref}
                className="text-xs font-extrabold text-indigo-600 hover:underline"
              >
                Open full shop →
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {vendor.featuredSets.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-extrabold text-slate-900">
                        {s.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-600">{s.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-extrabold text-slate-800">
                      {s.price}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-extrabold text-indigo-600 group-hover:underline">
                    View →
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Society events */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle label="Seen in Society" />
            <p className="mt-2 text-sm text-slate-600">
              Events where this partner vendor participates.
            </p>

            <div className="mt-4 space-y-3">
              {vendor.upcomingSocietyEvents.map((e) => (
                <Link
                  key={e.id}
                  href={e.href}
                  className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-white"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-extrabold text-slate-900">
                      {e.title}
                    </p>
                    <p className="text-xs font-bold text-slate-500">
                      {e.roleLabel}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    {e.dateLabel} • {e.locationLabel}
                  </p>
                  <p className="mt-2 text-xs font-extrabold text-indigo-600 hover:underline">
                    Open event →
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Studio content */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle label="Studio content" />
            <p className="mt-2 text-sm text-slate-600">
              Stories & visuals that help users trust the vendor before buying.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {vendor.studioContent.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-white"
                >
                  <p className="text-sm font-extrabold text-slate-900">
                    {c.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{c.desc}</p>
                  <p className="mt-3 text-xs font-extrabold text-indigo-600 hover:underline">
                    Read →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Right / Sidebar */}
        <aside className="md:col-span-4 space-y-6">
          {/* Vendor card: matches your EventDetailPage mock vibe */}
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              Partner Vendor
            </h4>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
              <div className="min-w-0">
                <p className="font-extrabold text-sm text-slate-900">
                  {vendor.name}
                </p>
                <p className="text-xs text-slate-500">
                  {vendor.location.city}, {vendor.location.country}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-3 italic">
              “Providing traditional snacks for Society events.”
            </p>

            <Link
              href={vendor.links.marketplaceShopHref}
              className="text-xs text-indigo-600 font-extrabold hover:underline"
            >
              View Marketplace Shop →
            </Link>
          </div>

          {/* Quick info */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <SectionTitle label="Quick info" />
            <div className="mt-3 space-y-2">
              {vendor.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start justify-between gap-3"
                >
                  <p className="text-xs font-bold text-slate-500">{h.label}</p>
                  <p className="text-xs font-extrabold text-slate-800 text-right">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact / follow */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <SectionTitle label="Contact & follow" />
            <div className="mt-3 flex flex-col gap-2">
              {vendor.links.website ? (
                <a
                  href={vendor.links.website}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-700 hover:bg-white"
                >
                  Website →
                </a>
              ) : null}
              {vendor.links.instagram ? (
                <a
                  href={vendor.links.instagram}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-700 hover:bg-white"
                >
                  Instagram →
                </a>
              ) : null}
              {vendor.links.facebook ? (
                <a
                  href={vendor.links.facebook}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-extrabold text-slate-700 hover:bg-white"
                >
                  Facebook →
                </a>
              ) : null}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              (Later: add “Message vendor” + booking/catering request form.)
            </p>
          </div>

          {/* Back navigation */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <SectionTitle label="Navigate" />
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/"
                className="text-xs font-extrabold text-indigo-600 hover:underline"
              >
                ← Back to Society feed
              </Link>
              <Link
                href="/studio"
                className="text-xs font-extrabold text-indigo-600 hover:underline"
              >
                Explore Studio →
              </Link>
              <Link
                href="/food"
                className="text-xs font-extrabold text-indigo-600 hover:underline"
              >
                Explore Food →
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
