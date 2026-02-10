// app/components/society/MainContentFeed.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { EventItem } from "./types";
import EventCard from "./EventCard";
import { fetchEvents, fetchLocations } from "./api";
import { mapEventsToEventItems } from "./mappers";

export default function MainContentFeed({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // ✅ debug counts from REAL fetch
  const [eventsCount, setEventsCount] = useState(0);
  const [locationsCount, setLocationsCount] = useState(0);

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
      setItems(mapped);
      setLoaded(true);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const displayEvents = useMemo(() => {
    const source = items;
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("events near")) {
      return source.slice(0, 6);
    }

    if (lowerTitle.includes("newly")) {
      const sorted = [...source].sort((a, b) => {
        // createdAt may not exist; fall back to id sorting
        const aTime = a.createdAt ? Date.parse(a.createdAt) : NaN;
        const bTime = b.createdAt ? Date.parse(b.createdAt) : NaN;

        if (!Number.isNaN(aTime) && !Number.isNaN(bTime)) return bTime - aTime;
        if (!Number.isNaN(aTime)) return -1;
        if (!Number.isNaN(bTime)) return 1;

        const aId = Number(a.id);
        const bId = Number(b.id);
        if (!Number.isNaN(aId) && !Number.isNaN(bId)) return bId - aId;
        return String(b.id).localeCompare(String(a.id));
      });

      return sorted.slice(0, 8);
    }

    return source.slice(0, 8);
  }, [items, title]);

  const showEmptyState = loaded && displayEvents.length === 0;

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
        {displayEvents.map((event) => (
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

