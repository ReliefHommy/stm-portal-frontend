import { CoreCategory, EventItem } from "./typs";


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
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1520975958225-566b2d991b63?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1604908554109-2c3f1d9f0b8b?auto=format&fit=crop&w=900&q=80",
  },
];