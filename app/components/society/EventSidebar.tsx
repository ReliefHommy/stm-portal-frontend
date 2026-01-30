"use client";

import React from "react";
import { CoreCategory, CoreCategoryKey } from "./types";




type Props = {


  activeCategory: CoreCategoryKey | "ALL";
  onCategoryChange: (key: CoreCategoryKey | "ALL") => void;

  categories: CoreCategory[];
  isMobile?: boolean;
  onCloseMobile?: () => void;
};

export default function EventSidebar({

  activeCategory,
  onCategoryChange,
  categories,
  isMobile,
  onCloseMobile,
}: Props) {
  return (
    <div className="h-full rounded-2xl p-4 text-white shadow-sm
  bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      {/* Mobile header */}
      {isMobile ? (
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-white/60">Somtam 2026</div>
            <div className="text-lg font-bold text-white/60">Menu</div>
          </div>
          <button
            onClick={onCloseMobile}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white"
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

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          <div className="font-semibold text-white">Somtam Society</div>
          <div className="mt-1">
            Temple days • Markets • Music • Community
          </div>
          <div className="mt-3 text-xs text-white/50">
            Next step: connect to Django API: <span className="text-white/70"></span>
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
        active ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white",
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
