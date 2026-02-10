// app/components/society/api.ts

export async function fetchEvents() {
  const res = await fetch("/api/society/events", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchLocations() {
  const res = await fetch("/api/society/locations", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

