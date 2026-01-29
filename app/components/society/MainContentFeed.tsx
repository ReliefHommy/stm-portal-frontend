import React from "react";
import type { EventItem } from "./types";
import EventCard from "./EventCard";

export default function MainContentFeed({
  title,
  subtitle,
  events,
}: {
  title: string;
  subtitle?: string;
  events: EventItem[];
}) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-white/60">{subtitle}</p> : null}
      </div>

      {/* Grid: mobile 2 cols, md 3 cols, xl 4 cols (Spotify-like tiles) */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {events.slice(0, 8).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {events.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70">
          No events found for this filter.
        </div>
      ) : null}
    </section>
  );
}
