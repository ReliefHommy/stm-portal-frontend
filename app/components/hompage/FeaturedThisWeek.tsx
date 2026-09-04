// components/home/FeaturedThisWeek.tsx
export default function FeaturedThisWeek() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F3D2E]">Featured This Week</h2>
          <p className="text-neutral-500 mt-1">Curated Thai experiences you can&apos;t miss.</p>
        </div>
        <button className="text-sm font-bold text-[#F97316] hover:underline decoration-2 underline-offset-4">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[500px]">
        {/* BIG FEATURE CARD */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-neutral-100 cursor-pointer">
          <img 
            src="/api/placeholder/800/600" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Main Event"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 p-8 text-white">
            <span className="bg-[#F97316] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              Editor&apos;s Choice
            </span>
            <h3 className="text-4xl font-bold mt-4 mb-2">Songkran Festival Stockholm</h3>
            <p className="text-white/80 max-w-md line-clamp-2">The biggest water festival in Scandinavia returns with authentic street food and traditional performances.</p>
          </div>
        </div>

        {/* SIDE STACK */}
        <div className="md:col-span-4 grid grid-rows-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-neutral-100 cursor-pointer">
              <img 
                src="/api/placeholder/400/300" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Sub Event"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 p-6 text-white">
                <h4 className="text-xl font-bold">Bangkok Pop-up Market</h4>
                <p className="text-sm text-white/90">Berlin • May 12</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}