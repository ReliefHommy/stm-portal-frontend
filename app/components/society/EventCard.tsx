//app/components/society/EventCard.tsx
import React from "react";
import Image from "next/image";
import type { EventItem } from "./types";
import Link from "next/link";

export default function EventCard({ event }: { event: EventItem }) {
  const dateLabel = formatEventDate(event.startDateISO);

  return (

    <article className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        {/* Thumb */}
        <div className="h-12 w-12 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
          {event.imageUrl ? (
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={48}
              height={48}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>

        {/* Title + location */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-extrabold text-slate-900">
            {event.title}
          </h3>
          {event.sub_title_thai && (
  <p className="mt-1 truncate text-sm text-slate-500">
    {event.sub_title_thai}
  </p>
)}

          <p className="mt-1 truncate text-xs text-slate-600">
            {event.locationName} •{event.country}
          </p>
        </div>
      </div>

      {/* Tags row */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Pill kind="category">{prettyCore(event.eventType)}</Pill>
        <Pill kind="type">{event.country}</Pill>
      </div>

      {/* Meta */}
      <Link href={`/events/${event.id}`}>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span>{dateLabel}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold text-slate-700">
          View
        </span>
      </div></Link>

      

    </article>
  );
  
}

function Pill({
  kind,
  children,
}: {
  kind: "category" | "type";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold";
  const styles =
    kind === "category"
      ? "bg-indigo-600 text-white"
      : "bg-slate-100 text-slate-700 ring-1 ring-slate-200";

  return <span className={`${base} ${styles}`}>{children}</span>;
}

function prettyCore(key: string) {
  return key
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function formatEventDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
