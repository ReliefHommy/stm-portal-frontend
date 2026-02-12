// app/components/society/MainContentFeed.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { CoreCategoryKey, EventItem } from "./types";
import EventCard from "./EventCard";
import { fetchEvents, fetchLocations } from "./api";
import { mapEventsToEventItems } from "./mappers";

export default function MainContentFeed({
  title,
  subtitle,
  activeCategory = "ALL",

}: {
  title: string;
  subtitle?: string;
  activeCategory?: CoreCategoryKey | "ALL";

}) {
  const [allItems, setAllItems] = useState<EventItem[]>([]);
  const [loaded, setLoaded] = useState(false);


  // ✅ debug counts from REAL fetch
  const [, setEventsCount] = useState(0);
  const [, setLocationsCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [eventsData, locationsData] = await Promise.all([
        fetchEvents(),
        fetchLocations(),
      ]);

      if (cancelled) return;

      setEventsCount(Array.isArray(eventsData) ? eventsData.length : 0);
      setLocationsCount(Array.isArray(locationsData) ? locationsData.length : 0);

      const mapped = mapEventsToEventItems(eventsData, locationsData);
      setAllItems(mapped);
      setLoaded(true);

    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

    const filteredItems = useMemo(() => {
  if (activeCategory === "ALL") return allItems;
  return allItems.filter((item) => item.coreCategory === activeCategory);
}, [allItems, activeCategory]);

  const showEmptyState = filteredItems.length === 0;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-tight text-purple-700">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </div>

  

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
        {filteredItems.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {showEmptyState ? (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          No events yet.
        </div>
      ) : null}
    </section>
  );
}

