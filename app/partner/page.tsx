import MainNavbar from "@/app/components/hompage/MainNavbar";
import Hero from "@/app/components/reuse/HeroSlide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | STM Marketplace",
  description:
    "Partner with STM Marketplace across Food, Wellness, and Games to reach EU customers with a modern, AI-enhanced platform.",
};

const PartnerPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
         <MainNavbar />
      
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">
        {/* Page Header */}
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Partner With STM Marketplace
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            One Platform. Three Growth Ecosystems.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            STM Marketplace is a Sweden-rooted, EU-focused digital platform
            built around three pillars: Food, Wellness, and Games. Whether you
            work with Thai groceries, holistic services, or creative game
            experiences, we provide a calm, modern space to grow your presence
            across Europe.
          </p>
        </header>

        {/* Food Marketplace Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            1. Food Marketplace
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            The Food marketplace supports businesses that bring Thai flavours to
            European kitchens. From retail products to restaurant supply, we
            help you connect with customers and partners in a structured,
            content-driven way.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Thai Grocery's Creator
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Brands, shops, and suppliers offering Thai ingredients, snacks,
                sauces, and pantry items for EU customers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Restaurants
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Thai and Asian restaurants, food trucks, and cloud kitchens that
                want smarter ingredient supply and visibility.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Import &amp; Export
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Importers and exporters of Thai products seeking a focused
                discovery and storytelling layer for the EU market.
              </p>
            </div>
          </div>

          <div className="pt-2">
            {/* Adjust href to your real route */}
            <a
              href="/creator"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Explore Food Partner Program
            </a>
          </div>
        </section>

        {/* Wellness Marketplace Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            2. Wellness Marketplace
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            The Wellness marketplace is for professionals and creators inspired
            by Thai healing, mindfulness, and holistic living. We provide a home
            for your services, stories, and digital offerings.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Wellness Professionals
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Thai massage therapists, spa owners, yoga and meditation
                teachers, and holistic coaches.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Studios &amp; Services
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Physical studios and online service providers looking to reach
                EU clients with clearer positioning and content.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Digital Wellness Creators
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Creators offering guides, courses, and digital products rooted
                in Thai-inspired wellness and calm living.
              </p>
            </div>
          </div>

          <div className="pt-2">
            {/* Adjust href to your real route */}
            <a
              href="/partner/wellness"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Explore Wellness Partner Program
            </a>
          </div>
        </section>

        {/* Games Marketplace Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            3. Games Marketplace
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            The Games marketplace is where playful, story-driven, and
            gamified experiences live. We focus on puzzle, escape, and
            narrative-style games, along with tools that help others use
            gamification.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Game Marketing
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Indie studios and game creators seeking creative marketing,
                launch support, and EU-facing visibility for their titles.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Game SaaS &amp; Tools
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Platforms and services that offer gamification, loyalty
                mechanics, or mini-game experiences for brands and businesses.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-700">
                Creative Game Projects
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                Story-rich, puzzle, or escape-style games that align with STM&apos;s
                calm, artistic, and culture-inspired direction.
              </p>
            </div>
          </div>

          <div className="pt-2">
            {/* Adjust href to your real route */}
            <a
              href="/partner/games"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Explore Games Partner Program
            </a>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="rounded-2xl bg-black p-6 text-white shadow-md md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to Build With STM Marketplace?
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base">
            Whether you&apos;re working with food, wellness, or games, STM
            Marketplace offers a calm, focused environment to grow your presence
            across the EU—supported by human-led creativity and AI-enhanced
            tools.
          </p>
          <div className="mt-6">
            {/* Adjust href to your real route */}
            <a
              href="/partner/apply"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
            >
              Apply Now to Become an STM Partner
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PartnerPage;
