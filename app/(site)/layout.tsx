import React from "react";

import TopNav from "../components/society/TopNav";
import EventSidebar from "../components/society/EventSidebar";
import { CoreCategoryKey } from "../components/society/types";


export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="flex">
        {/* Sidebar stays on all pages */}
        <aside className="hidden lg:block w-[280px] border-r border-slate-100">
          <EventSidebar activeCategory={"TEMPLE_DAY_TRACKER"} onCategoryChange={function (key: CoreCategoryKey | "ALL"): void {
                      throw new Error("Function not implemented.");
                  } } categories={[]} />
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <TopNav />
          <div className="mx-auto max-w-6xl px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
