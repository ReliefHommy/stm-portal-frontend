//app/components/society/EventSidebar.tsx

"use client";

import React from "react";
import type { CoreCategory, CoreCategoryKey, SidebarNavKey } from "./types";



type Props = {
  // Categories
  activeCategory: CoreCategoryKey | "ALL";
  onCategoryChange: (key: CoreCategoryKey | "ALL") => void;
  categories: CoreCategory[];

  // Navigation (optional, so it won’t break existing usage)
  activeNav?: SidebarNavKey;
  onNavChange?: (key: SidebarNavKey) => void;

  // Mobile drawer
  isMobile?: boolean;
  onCloseMobile?: () => void;
};


export default function EventSidebar({
  activeCategory,
  onCategoryChange,
  categories,
  activeNav = "HOME",
  onNavChange,
  isMobile,
  onCloseMobile,
}: Props) {
  const handleNav = (key: SidebarNavKey) => {
    onNavChange?.(key);
    if (isMobile) onCloseMobile?.();
  };

  return (
    <div className="h-full rounded-2xl bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-4 text-white shadow-sm">
      {/* Mobile header */}
      {isMobile ? (
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-white/60">Somtam Society</div>
            <div className="text-lg font-bold text-white/80">Menu</div>
          </div>
          <button
            onClick={onCloseMobile}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
      ) : null}

      {/* Section 1: Navigation */}
      <div className="mb-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
          Page Navigation
        </div>

        <div className="space-y-1">
          <SidebarLink
            label="Home"
            active={activeNav === "HOME"}
            onClick={() => handleNav("HOME")}
          />
          <SidebarLink
            label="Events"
            active={activeNav === "SAVED"}
            onClick={() => handleNav("SAVED")}
          />
          <SidebarLink
            label="Map"
            active={activeNav === "BOARD"}
            onClick={() => handleNav("BOARD")}
          />

        </div>
      </div>

      {/* Section 2: Categories */}
      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
          Event Categories
        </div>

        <div className="flex flex-wrap gap-2">
          <Chip
            label="All"
            active={activeCategory === "ALL"}
            onClick={() => onCategoryChange("ALL")}
          />

          {categories.map((c) => (
            <Chip
              key={c.key}
              label={c.label}
              active={activeCategory === c.key}
              onClick={() => onCategoryChange(c.key)}
            />
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          <div className="font-semibold text-white">Somtam Society</div>
          <div className="mt-1 text-white/80">
            Temple days • Markets • Music • Community
          </div>

          <div className="mt-3 text-xs text-white/60">
            ✅ Connected to Thai Events in Sweden,Germany, UK and more
          </div>

          <div className="mt-2 text-xs text-white/60">
            Next: Search for events, save your favorites, and share with friends!
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition",
        active
          ? "bg-white/15 text-white"
          : "text-white/80 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1 text-sm font-semibold transition",
        active ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/15",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
