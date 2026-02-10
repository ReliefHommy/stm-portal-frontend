// app/components/society/api.ts

import type { EventDTO, LocationDTO } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_SOCIETY_API_BASE ?? "";

function buildUrl(path: string) {
  if (!BASE_URL) return path;
  const base = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  const safePath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${safePath}`;
}

async function safeJson<T>(res: Response): Promise<T | null> {
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function fetchEvents(): Promise<EventDTO[]> {
  try {
    const res = await fetch(buildUrl("/api/society/events"), {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await safeJson<unknown>(res);
    if (!data) return [];

    // Temporary: inspect payloads during integration
    console.log("[society] events payload", data);

    if (Array.isArray(data)) return data as EventDTO[];
    if (typeof data === "object" && data && Array.isArray((data as { results?: unknown }).results)) {
      return (data as { results: EventDTO[] }).results;
    }

    return [];
  } catch {
    return [];
  }
}

export async function fetchLocations(): Promise<LocationDTO[]> {
  try {
    const res = await fetch(buildUrl("/api/society/locations"), {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await safeJson<unknown>(res);
    if (!data) return [];

    // Temporary: inspect payloads during integration
    console.log("[society] locations payload", data);

    if (Array.isArray(data)) return data as LocationDTO[];
    if (typeof data === "object" && data && Array.isArray((data as { results?: unknown }).results)) {
      return (data as { results: LocationDTO[] }).results;
    }

    return [];
  } catch {
    return [];
  }
}
