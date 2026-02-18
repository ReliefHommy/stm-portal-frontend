"use client";

import React, { useMemo, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PartnerEventItem = {
  event: string;
  imageUrl: string;
  href?: string; // optional: link to a country page/filter
};

const DEFAULT_COUNTRIES: PartnerEventItem[] = [
  {
    event: "Main Thai Festival",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/main_thai2026.png",
  },
  {
    event: "Thai film night",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thai_film_night.png",
  },
  {
    event: "SongKran Festival Stockholm ",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/Songkran-SE.png",
  },
    {
    event: "SongKran Festival Stockholm ",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thai_grand_hague.png",
  },


 
];

type Props = {
  title?: string;
  items?: PartnerEventItem[];
  onSelect?: (item: PartnerEventItem) => void; // optional callback
};

export default function PartnerEventCard({
  title = "Throwback to the Thai Markets & Festivals in Europe 2025",
  items = DEFAULT_COUNTRIES,
  onSelect,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    // scroll by ~2 cards
    const cardWidth = 180; // matches w-44
    const gap = 16; // gap-4
    const delta = (cardWidth + gap) * 2 * (direction === "right" ? 1 : -1);

    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  const cards = useMemo(() => items, [items]);

  return (
    <section className="w-full">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="truncate text-sm font-extrabold text-indigo-600">{title}</h2>
          <p className="text-sm text-slate-600">
           Scenes from recent Thai markets and festivals across Europe in 2025.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Gradient edges (nice, subtle) */}
       

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* hide scrollbar (webkit) */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {cards.map((item) => {
            const CardWrap: React.ElementType = item.href ? "a" : "button";
            const wrapProps =
              CardWrap === "a"
                ? { href: item.href }
                : { type: "button" as const };

            return (
              <CardWrap
                key={item.event}
                {...wrapProps}
                onClick={() => onSelect?.(item)}
                className="snap-start shrink-0 text-left group"
                aria-label={`Open ${item.event}`}
              >
                <div className="w-44">
                  {/* Square image, no text overlay */}
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={item.imageUrl}
                      alt={item.event}
                      fill
                      sizes="176px"
                      className="object-cover "
                      priority={false}
                    />
                  </div>

                  {/* Label below image (not on image) */}
                  <div className="mt-2">
                    <p className="truncate text-sm font-extrabold text-slate-900">
                      {item.event}
                    </p>
                    <p className="text-xs text-slate-600">
                      Thai markets & Festivals
                    </p>
                  </div>
                </div>
              </CardWrap>
            );
          })}
        </div>
      </div>
    </section>
  );
}