"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchEventsPaged, fetchLocations } from "./api";
import { HIGHLIGHT_IDS, type HighlightEventType } from "./highlightConfig";
import { mapEventsToEventItems } from "./mappers";
import type { EventItem } from "./types";

const MAX_HIGHLIGHT_EVENTS = 12;

export default function useHighlightEvents(eventType: HighlightEventType) {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const configuredIds = HIGHLIGHT_IDS[eventType] as readonly number[];
  const curatedIds = useMemo(
    () => Array.from(new Set(configuredIds)).slice(0, MAX_HIGHLIGHT_EVENTS),
    [configuredIds]
  );

  useEffect(() => {
    let cancelled = false;

    async function loadHighlights() {
      if (curatedIds.length === 0) {
        setItems([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const [locations, page] = await Promise.all([
          fetchLocations(),
          fetchEventsPaged({
            limit: MAX_HIGHLIGHT_EVENTS,
            offset: 0,
            event_type: eventType,
            ids: curatedIds,
          }),
        ]);

        if (cancelled) return;

        const mapped = mapEventsToEventItems(page.items, locations);
        setItems(mapped.slice(0, MAX_HIGHLIGHT_EVENTS));
      } catch (err) {
        if (cancelled) return;
        setItems([]);
        setError(err instanceof Error ? err.message : "Failed to load highlights");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadHighlights();

    return () => {
      cancelled = true;
    };
  }, [curatedIds, eventType]);

  return { items, loading, error };
}
