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
    title: "Temple Highlights",
    subtitle: "Curated temple and religious events.",
  },
  MARKET: {
    title: "Market Highlights",
    subtitle: "Curated Thai market and food festival picks.",
  },
  CONCERT: {
   title: "Music Highlights",
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
    <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] gap-2">
      <span className="max-w-[70%] truncate rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          📅 {event.startDateISO}
      </span>
      <span className="shrink-0 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
        {event.country}
      </span>
    </div>
  </div>

  {/* White info panel */}
  <div className="px-4 pb-4 pt-3">
              <h3 className="text-base font-extrabold text-slate-600 line-clamp-2 lg:text-sm">
            {event.title}
          </h3>
           {event.sub_title_thai ? (
            <p className="mt-1 text-sm text-indigo-600 line-clamp-1">
  


              {event.sub_title_thai}
            </p>
          ) : null}
            {event.organizer_name ? (
               <p className="mt-2 text-xs text-slate-600 line-clamp-1">
                <span className="font-extrabold">Organized by</span> {event.organizer_name}
            
            </p>
          ) : null}

    </div>

</article>


              
              
              </Link>
            ))}
      </div>
    </section>
  );
}