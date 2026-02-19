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
<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
   <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
 <div className="absolute top-4 left-4 flex gap-2">
        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{event.locationName}</span>
        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm border border-slate-200">{event.country}</span>
      </div>


    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-md font-extrabold text-white">{event.organizer_name}</h3>
   

</article>

              
              
              </Link>
            ))}
      </div>
    </section>
  );
}
