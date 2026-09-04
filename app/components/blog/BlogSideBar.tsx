//app/components/blog/BlogSideBar.tsx

"use client";

import React from "react";
import type { BlogCategory, BlogCategoryKey,SidebarNavKey } from "./types";


type Props = {
  // EventCategories
  activeCategory: BlogCategoryKey | "ALL";
  onCategoryChange: (key: BlogCategoryKey | "ALL") => void;
  categories: BlogCategory[];


  // Navigation (optional, so it won’t break existing usage)
  activeNav?: SidebarNavKey;
  onNavChange?: (key: SidebarNavKey) => void;

  // Mobile drawer
  isMobile?: boolean;
  onCloseMobile?: () => void;
};

export default function BlogSideBar({
  activeCategory,
  onCategoryChange,
  categories,

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

      
      </div>

      {/* Section 2: Event Categories */}
      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
          Blog Categories
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

      
      </div>
        <br></br>
      <hr></hr>
      <br></br>
    {/* Section 3: Post */}

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