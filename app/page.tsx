
// app/page.tsx
"use client";

import React, { useState } from "react";
import type { CoreCategoryKey, SidebarNavKey } from "./components/society/types";
import { CORE_CATEGORIES } from "./components/society/constants";
import EventSidebar from "./components/society/EventSidebar";
import MainContentFeed from "./components/society/MainContentFeed";
import FooterSociety from "./components/hompage/FooterSociety";
import TopNav from "./components/society/TopNav";
import PartnerHighlightSection from "./components/society/PartnerHighlightSection";

export default function HomePage() {


  // Sidebar (mobile drawer)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Keep these for UI (filter logic later)
  const [activeCategory, setActiveCategory] = useState<CoreCategoryKey | "ALL">("ALL");
  const [activeNav, setActiveNav] = useState<SidebarNavKey>("HOME");

  // Mock "EU location" for subtitle only (real geo later)
  const userCountry = "Sweden";

  const pageTitle =
    activeNav === "HOME"
      ? "Go Together Luna Temple Events"
      : activeNav === "SAVED"
      ? "Saved Events"
      : "Go Together Board";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top gradient header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-fuchsia-200 via-white to-white" />

      {/* Mobile Top Bar */}
      <header className="relative z-10 flex items-center gap-3 px-4 pt-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="flex-1">
          <div className="text-sm text-slate-500">Somtam Society</div>
          <div className="text-lg font-bold">{pageTitle}</div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
            Search
          </button>
        </div>
      </header>

      {/* Layout grid */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-10 pt-6 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
         <EventSidebar activeNav={activeNav} onNavChange={setActiveNav} activeCategory={activeCategory} onCategoryChange={setActiveCategory} categories={CORE_CATEGORIES} onCloseMobile={() => setSidebarOpen(false)} isMobile={false} />
          </aside>

          {/* Main Content */}
          <div className="min-h-screen bg-white text-slate-900">
            <TopNav />

            <div className="mb-6 hidden lg:block">
              <h1 className="text-3xl font-extrabold tracking-tight">{pageTitle}</h1>
              <p className="mt-2 text-slate-600">
                Find temple days, markets, music, and community meetups across EU.
              </p>
            </div>

            {/* Mobile category chips (UI only for now) */}
            <div className="mb-4 lg:hidden">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("ALL")}
                  className={[
                    "rounded-full px-3 py-1 text-sm font-semibold transition",
                    activeCategory === "ALL"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                  ].join(" ")}
                >
                  All
                </button>

                {CORE_CATEGORIES.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setActiveCategory(c.key)}
                    className={[
                      "rounded-full px-3 py-1 text-sm font-semibold transition",
                      activeCategory === c.key
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                    ].join(" ")}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <PartnerHighlightSection type="RELIGIOUS" />
              <PartnerHighlightSection type="MARKET" />
              <MainContentFeed
  title="Events Near Your EU Location"
  subtitle={`Showing EU events (priority: ${userCountry})`}
  activeCategory={activeCategory}

  
/>
              {/* Other sections (e.g. Saved Events) could go here based on activeNav */}



            </div>

            <FooterSociety />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[88%] max-w-sm">
           <EventSidebar
  activeNav={activeNav}
  onNavChange={(k) => {
    setActiveNav(k);
    setSidebarOpen(false);
  }}
  activeCategory={activeCategory}
  onCategoryChange={(k) => {
    setActiveCategory(k);
    setSidebarOpen(false);
  }}
  categories={CORE_CATEGORIES}
  onCloseMobile={() => setSidebarOpen(false)}
  isMobile
/>

          </div>
        </div>
      ) : null}
    </div>
  );
}



