"use client";

import React, { useMemo, useState } from "react";
import { CoreCategoryKey, SidebarNavKey } from "./components/society/types";
import { SAMPLE_EVENTS, EU_COUNTRIES, CORE_CATEGORIES } from "./components/society/data";
import EventSidebar from "./components/society/EventSidebar";
import MainContentFeed from "./components/society/MainContentFeed";
import FooterSociety from "./components/hompage/FooterSociety";
import TopNav from "./components/society/TopNav";





export default function HomePage() {
  // Sidebar (mobile drawer)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filters
  const [activeCategory, setActiveCategory] = useState<CoreCategoryKey | "ALL">("ALL");
  const [activeNav, setActiveNav] = useState<SidebarNavKey>("HOME");

  // Mock "EU location" (later replace with geo/IP/user profile)
  const userCountry = "Sweden";

  const allEvents = SAMPLE_EVENTS;

  const filteredEvents = useMemo(() => {
    if (activeCategory === "ALL") return allEvents;
    return allEvents.filter((e) => e.coreCategory === activeCategory);
  }, [activeCategory, allEvents]);

  const nearEUEvents = useMemo(() => {
    // Simple “near you” logic for now:
    // - If user's country matches event country -> show first
    // - Else show other EU events
    const inEU = filteredEvents.filter((e) => EU_COUNTRIES.has(e.country));
    const sameCountry = inEU.filter((e) => e.country === userCountry);
    const otherEU = inEU.filter((e) => e.country !== userCountry);
    return [...sameCountry, ...otherEU];
  }, [filteredEvents, userCountry]);

  const newlyAddedEvents = useMemo(() => {
    // Sort by createdAt desc (newest first)
    return [...filteredEvents].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }, [filteredEvents]);

  // Optional: simple nav switching behavior (you can route later)
  const pageTitle =
    activeNav === "HOME"
      ? "Good morning"
      : activeNav === "SAVED"
      ? "Saved Events"
      : "Go Together Board";

  return (
        <div className="min-h-screen bg-white text-slate-900">
      {/* Top gradient header (Spotify-like) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-fuchsia-200 via-white to-white" />

      {/* Mobile Top Bar */}
      <header className="relative z-10 flex items-center gap-3 px-4 pt-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold hover:bg-white/10"
          aria-label="Open menu"
        >
          ☰
        </button>
        <div className="flex-1">
          <div className="text-sm text-white/70">Somtam 2026</div>
          <div className="text-lg font-bold">{pageTitle}</div>
        </div>

        {/* Right-side placeholder buttons */}
        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            Search
          </button>
        </div>
      </header>

      {/* Layout grid */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-10 pt-6 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <EventSidebar
        
             
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              categories={CORE_CATEGORIES}
              onCloseMobile={() => setSidebarOpen(false)}
              isMobile={false}
            />
          </aside>

          {/* Main Content */}
     
           <div className="min-h-screen bg-white text-slate-900">
             <TopNav/>
          
            
            <div className="mb-6 hidden lg:block">
              <h1 className="text-3xl font-extrabold tracking-tight">{pageTitle}</h1>
              <p className="mt-2 text-white/70">
                Find temple days, markets, music, and community meetups across EU.
              </p>
            </div>

            {/* Mobile: category chips above feed (optional UX improvement) */}
            <div className="mb-4 lg:hidden">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("ALL")}
                  className={[
                    "rounded-full px-3 py-1 text-sm font-semibold transition",
                    activeCategory === "ALL"
                      ? "bg-white text-black"
                      : "bg-white/10 text-white hover:bg-white/15",
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
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/15",
                    ].join(" ")}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <MainContentFeed
                title="Events Near Your EU Location"
                subtitle={`Showing EU events (priority: ${userCountry})`}
                events={nearEUEvents}
              />

              <MainContentFeed
                title="Newly Added Events"
                subtitle="Fresh updates from partners & community"
                events={newlyAddedEvents}
              />
            </div>
             <FooterSociety/>
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