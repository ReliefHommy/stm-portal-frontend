// app/components/society/data.ts

import { CoreCategory, EventItem } from "./types";

export const CORE_CATEGORIES: CoreCategory[] = [
  { key: "TEMPLE_DAY_TRACKER", label: "Temple Day Tracker" },
  { key: "MARKET_FOOD_FESTIVALS", label: "Market & Food Festivals" },
  { key: "MUSIC_ENTERTAINMENT", label: "Music & Entertainment" },
  { key: "COMMUNITY_EVENTS", label: "Community Events" },
];

// Simple EU set for “near your EU location” feed logic (extend as needed)
export const EU_COUNTRIES = new Set<string>([
  "Sweden",
  "Norway", // not EU but you may want it included (Scandinavia)
  "Denmark",
  "Finland",
  "Germany",
  "France",
  "Netherlands",
  "Belgium",
  "Spain",
  "Italy",
  "Austria",
  "Poland",
  "Portugal",
  "Czech Republic",
  "Ireland",
]);

// ✅ SAMPLE_EVENTS constant (required by your spec)
// This is a UI mock of your Django models:
// Location(Category) + Event(EventType + location FK)
export const SAMPLE_EVENTS: EventItem[] = [
  {
    id: "evt_001",
    title: "Makha Bucha Candlelight Walk (Wat Thai Stockholm)",
    eventType: "RELIGIOUS",
    coreCategory: "TEMPLE_DAY_TRACKER",
    locationName: "Wat Thai Stockholm",
    city: "Stockholm",
    country: "Sweden",
    startDateISO: "2026-02-10T17:00:00Z",
    createdAt: "2026-01-18T08:00:00Z",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thaitemple_6.jpg",
  },
  {
    id: "evt_002",
    title: "Thai Street Food Weekend Market",
    eventType: "MARKET",
    coreCategory: "MARKET_FOOD_FESTIVALS",
    locationName: "Thai Community Market (Partner)",
    city: "Gothenburg",
    country: "Sweden",
    startDateISO: "2026-02-14T10:00:00Z",
    createdAt: "2026-01-25T12:00:00Z",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thaifesti002.jpeg",
  },
  {
    id: "evt_003",
    title: "Thai Pop Night: Live DJ + Dance",
    eventType: "CONCERT",
    coreCategory: "MUSIC_ENTERTAINMENT",
    locationName: "Nordic Club Venue",
    city: "Oslo",
    country: "Norway",
    startDateISO: "2026-02-20T19:30:00Z",
    createdAt: "2026-01-27T18:10:00Z",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thaifesti001.jpg",
  },
  {
    id: "evt_004",
    title: "Community Meet-up: Newcomers in Scandinavia",
    eventType: "COMMUNITY",
    coreCategory: "COMMUNITY_EVENTS",
    locationName: "Somtam Society Partner Hub",
    city: "Malmö",
    country: "Sweden",
    startDateISO: "2026-02-05T17:30:00Z",
    createdAt: "2026-01-29T09:00:00Z",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thaifair.jpg",
  },
  {
    id: "evt_005",
    title: "Songkran Planning Circle (Volunteer Board)",
    eventType: "COMMUNITY",
    coreCategory: "COMMUNITY_EVENTS",
    locationName: "Thai Cultural Center",
    city: "Berlin",
    country: "Germany",
    startDateISO: "2026-03-01T16:00:00Z",
    createdAt: "2026-01-26T10:30:00Z",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thaifesti003.jpg",
  },
  {
    id: "evt_006",
    title: "Temple Cooking Fundraiser (Khao Soi Day)",
    eventType: "MARKET",
    coreCategory: "MARKET_FOOD_FESTIVALS",
    locationName: "Wat Thai Copenhagen",
    city: "Copenhagen",
    country: "Denmark",
    startDateISO: "2026-02-22T11:00:00Z",
    createdAt: "2026-01-20T07:15:00Z",
    imageUrl:
      "https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/society/event/thaifair_12.jpg",
  },
];
