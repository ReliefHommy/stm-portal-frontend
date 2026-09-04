import React from "react";








export default function EventLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#fafafa] text-slate-900">
      {/* Premium Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-6 flex flex-col fixed h-full">
        <div className="mb-10 px-2">
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-400">Navigation</h2>
          <nav className="mt-4 space-y-1">
             {/* Use a soft pill-shape for active states */}
            <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">Home</div>
            <div className="hover:bg-slate-50 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer text-slate-600">Events</div>
            <div className="hover:bg-slate-50 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer text-slate-600">Map</div>
          </nav>
        </div>

        <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-xs leading-relaxed text-slate-500">
            Connected to Thai Events in Sweden, Germany, UK and more.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 flex-1 p-12 max-w-6xl mx-auto">
        <header className="mb-12">
           {/* Editorial Typography */}
          <h1 className="text-5xl font-serif font-medium tracking-tight text-slate-950 mb-4">
            Go Together Luna <br/> <span className="italic text-slate-400">Temple Events</span>
          </h1>
          <p className="text-lg text-slate-500">Find temple days, markets, and community meetups across EU.</p>
        </header>

        {/* This is where your existing event list renders */}
        <section>
          {children}
        </section>
      </main>
    </div>
  );
}
