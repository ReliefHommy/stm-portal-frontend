import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "./types";

export default function NewStyleEventCard({ event }: { event: EventItem }) {
  const dateLabel = formatEventDate(event.startDateISO);

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative h-[260px] w-full bg-slate-100">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.1fr_1fr]">
        {/* Left */}
        <div className="p-6">
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
            {event.title}
          </h3>

          {event.sub_title_thai ? (
            <p className="mt-2 text-base font-medium text-slate-600">
              {event.sub_title_thai}
            </p>
          ) : null}

          <div className="mt-4">
            <Link
              href={`/events/${event.id}`}
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
            >
              View
            </Link>
          </div>
        </div>

        {/* Right (details) */}
        <div className="border-t border-slate-200 p-6 md:border-t-0 md:border-l">
          <DetailRow label="Category" value={prettyCore(event.eventType)} />
          <DetailRow
            label="Location"
            value={`${event.locationName} • ${event.country}`}
          />
          <DetailRow label="Date" value={dateLabel} />
        </div>
      </div>
    </article>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 py-2">
      <div className="w-24 shrink-0 text-sm font-extrabold text-slate-900">
        {label} :
      </div>
      <div className="text-sm text-slate-600">{value}</div>
    </div>
  );
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
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

