"use client";

import Image from "next/image";
import Link from "next/link";
import useHighlightEvents from "./useHighlightEvents";
import type { HighlightEventType } from "./highlightConfig";

const SECTION_COPY: Record<HighlightEventType, { title: string; subtitle: string }> = {
  COMMUNITY: {
    title: "Community Highlights",
    subtitle: "Curated community activities from selected events.",
  },
  RELIGIOUS: {
    title: "Religious Highlights",
    subtitle: "Curated temple and religious events.",
  },
  MARKET: {
    title: "Market Highlights",
    subtitle: "Curated Thai market and food festival picks.",
  },
  CONCERT: {
    title: "Concert Highlights",
    subtitle: "Curated live music and entertainment picks.",
  },
};

export default function PartnerHighlightSection({ type }: { type: HighlightEventType }) {
  const { items, loading, error } = useHighlightEvents(type);
  const copy = SECTION_COPY[type];
 

  if (!loading && items.length === 0 && !error) return null;

  return (
    <section className="w-full">
      <div className="mb-3">
        <h2 className="text-sm font-extrabold text-indigo-600">{copy.title}</h2>
        <p className="text-sm text-slate-600">{copy.subtitle}</p>
      </div>

      {error ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
          Unable to load highlights right now.
        </div>
      ) : null}

      <div
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={`highlight-skeleton-${idx}`}
                className="snap-start shrink-0 basis-[83.333%] sm:basis-[calc((100%-0.75rem)/2)] lg:basis-[calc((100%-2.25rem)/4)]"
              >
                <div className="aspect-[4/5] rounded-2xl border border-slate-200 bg-slate-100" />
              </div>
            ))
          : items.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="snap-start shrink-0 basis-[83.333%] sm:basis-[calc((100%-0.75rem)/2)] lg:basis-[calc((100%-2.25rem)/4)]"
              >
<article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
  {/* Image */}
  <div className="relative aspect-[4/5] w-full bg-slate-100">
    <Image
      src={event.imageUrl}
      alt={event.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      priority={false}
    />

    {/* badges */}
    <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] gap-2">
      <span className="max-w-[70%] truncate rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
        {event.locationName}
      </span>
      <span className="shrink-0 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
        {event.country}
      </span>
    </div>
  </div>

  {/* White info panel */}
  <div className="px-4 pb-4 pt-3">
    <h3 className="text-[15px] font-extrabold leading-snug text-white-900 line-clamp-2">
      {event.title}
    </h3>

    {event.sub_title_thai ? (
      <p className="mt-1 text-sm font-medium text-white-600 line-clamp-1">
        {event.sub_title_thai}
      </p>
    ) : null}

    {event.organizer_name ? (
      <p className="mt-1 text-sm text-slate-500 line-clamp-1">
        {event.organizer_name}
      </p>
    ) : null}

    {/* bottom row */}
    <div className="mt-3 flex items-center">
      {event.startDateISO ? (
        <p className="text-xs font-medium text-white-500 line-clamp-1">
          {event.startDateISO.slice(0, 10).split("-").reverse().join("/")}
        </p>
      ) : (
        <span />
      )}

      {/* location icon */}
      <button
        type="button"
        aria-label="Open location"
        className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white-700 hover:bg-indigo-300"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true" color="white">
          <path
            d="M12 22s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  </div>
</article>


              
              
              </Link>
            ))}
      </div>
    </section>
  );
}