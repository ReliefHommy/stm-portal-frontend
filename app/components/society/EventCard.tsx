import React from "react";
import type { EventItem } from "./types";

export default function EventCard({ event }: { event: EventItem }) {
  const dateLabel = formatEventDate(event.startDateISO);

  return (
   <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-fuchsia-500/10 hover:shadow-lg">
      <div className="flex gap-3">
        {/* Image */}
        <div className="h-14 w-14 flex-none overflow-hidden rounded bg-white/10">
          {/* Using <img> for simplicity; you can swap to next/image later */}
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <div className="truncate text-sm font-extrabold">{event.title}</div>
          <div className="mt-1 truncate text-xs text-white/60">
            {event.locationName} • {event.city}, {event.country}
          </div>
          <div className="mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-2 py-1 text-[11px] font-semibold text-white">
            {event.coreCategory.replaceAll("_", " ")}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-white/60">
        <span>{dateLabel}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
          {event.eventType}
        </span>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-50 transition group-hover:opacity-100">
        <div className="absolute -inset-24 bg-gradient-to-r from-fuchsia-500/10 via-white/0 to-emerald-400/10 blur-2xl" />
      </div>
    </div>
  );
}

function formatEventDate(iso: string) {
  const d = new Date(iso);
  // Localized short format
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
