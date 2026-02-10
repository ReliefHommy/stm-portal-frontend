// app/components/society/mappers.ts

import type { CoreCategoryKey, EventDTO, EventItem, LocationDTO } from "./types";

const EVENT_TYPE_TO_CORE: Record<string, CoreCategoryKey> = {
  RELIGIOUS: "TEMPLE_DAY_TRACKER",
  TEMPLE: "TEMPLE_DAY_TRACKER",
  MARKET: "MARKET_FOOD_FESTIVALS",
  FOOD: "MARKET_FOOD_FESTIVALS",
  FESTIVAL: "MARKET_FOOD_FESTIVALS",
  MUSIC: "MUSIC_ENTERTAINMENT",
  CONCERT: "MUSIC_ENTERTAINMENT",
  ENTERTAINMENT: "MUSIC_ENTERTAINMENT",
  COMMUNITY: "COMMUNITY_EVENTS",
};

function pickString(...values: Array<unknown>): string {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value;
  }
  return "";
}

function normalizeType(value: string) {
  return value.trim().toUpperCase();
}

function toCoreCategory(value: string): CoreCategoryKey {
  const key = normalizeType(value).replace(/\s+/g, "_");
  return EVENT_TYPE_TO_CORE[key] ?? "COMMUNITY_EVENTS";
}

function getLocationFromEvent(event: EventDTO, locationsById: Map<number, LocationDTO>) {
  if (typeof event.location === "object" && event.location !== null) return event.location;
  if (typeof event.location_id === "number") return locationsById.get(event.location_id);
  if (typeof event.location === "number") return locationsById.get(event.location);
  return undefined;
}

function getDateString(value: string) {
  return value || new Date().toISOString();
}

export function mapEventsToEventItems(
  events: EventDTO[],
  locations: LocationDTO[],
): EventItem[] {
  const locationsById = new Map<number, LocationDTO>();
  for (const loc of locations) {
    if (typeof loc.id === "number") locationsById.set(loc.id, loc);
  }

  return events.map((event, index) => {
    const location = getLocationFromEvent(event, locationsById);

    const title = pickString(event.title, event.name, "Untitled event");
    const eventType = normalizeType(pickString(event.event_type, event.type, event.category, "COMMUNITY"));
    const coreCategory = toCoreCategory(eventType);

    const locationName = pickString(
      event.location_name,
      location?.name,
      "Unknown location",
    );
    const city = pickString(event.city, location?.city, "Unknown city");
    const country = pickString(event.country, location?.country, event.country_code, location?.country_code, "");

    const startDateISO = pickString(event.start_datetime, event.start_date, event.startDate);
    const createdAt = pickString(event.created_at, event.createdAt, startDateISO);

    const imageUrl = pickString(
      event.cover_image,
      event.banner_image,
      event.image_url,
      event.image,
      location?.cover_image,
    );

    const id = String(event.id ?? (event as { uuid?: string }).uuid ?? index);

    return {
      id,
      title,
      eventType,
      coreCategory,
      locationName,
      city,
      country: country || "Unknown",
      startDateISO: getDateString(startDateISO),
      createdAt: getDateString(createdAt),
      imageUrl: imageUrl || null,
    };
  });
}
