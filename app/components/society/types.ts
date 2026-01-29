
export type SidebarNavKey = "HOME" | "SAVED" | "TOGETHER";

export type CoreCategoryKey =
  | "TEMPLE_DAY_TRACKER"
  | "MARKET_FOOD_FESTIVALS"
  | "MUSIC_ENTERTAINMENT"
  | "COMMUNITY_EVENTS";

export type CoreCategory = {
  key: CoreCategoryKey;
  label: string;
};

export type EventTypeFromBackend = "RELIGIOUS" | "CONCERT" | "MARKET" | "COMMUNITY";

export type EventItem = {
  id: string;
  title: string;

  // Mirrors your Django Event.EventType
  eventType: EventTypeFromBackend;

  // Your landing page filter layer (4 core categories)
  coreCategory: CoreCategoryKey;

  // Mirrors Event.location foreign key concept (flattened for UI)
  locationName: string;
  city: string;
  country: string;

  startDateISO: string; // e.g. "2026-02-14T10:00:00Z"
  createdAt: string;    // used for “Newly Added”
  imageUrl?: string;
};
