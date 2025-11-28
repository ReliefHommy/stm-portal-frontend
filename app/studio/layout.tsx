// app/studio/layout.tsx

// app/studio/layout.tsx (or wherever this is)
import React, { Suspense } from "react"
import MainNavbar from "../components/hompage/MainNavbar"
import { Sidebar } from "lucide-react"
import Topbar from "../components/studio/Topbar"


export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <MainNavbar />

      {/* 👇 Make layout direction responsive */}
      <div className="flex flex-col md:flex-row">
        {/* 👇 Sidebar: full-width on small, fixed width on tablet+ */}
        <aside
          className="
            hidden           /* hide on very small screens */
            sm:block         /* show from small screens up */
            sm:w-full        /* at small: take full width (stacked) */
            md:w-64          /* at md (tablet): fixed sidebar width */
            lg:w-72          /* a bit wider on desktop if you like */
            md:flex-shrink-0
            border-r border-gray-200 bg-white
          "
        >
          <Sidebar />
        </aside>

        {/* Content area */}
        <div className="flex-1 flex flex-col">
          <Topbar />

          {/* ✅ Suspense boundary that wraps all /studio children */}
          <Suspense fallback={<main className="p-4 md:p-6">Loading studio…</main>}>
            <main className="p-4 md:p-6">
              {children}
            </main>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

