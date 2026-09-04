'use client';
import Link from 'next/link'





export default function HeroSociety() {


 

  return (
<section className="relative w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Headline & Subheadline [cite: 31, 32, 33, 34] */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F3D2E] mb-6 leading-[1.1]">
          Discover Thai-connected <br /> experiences
        </h1>
        <p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto">
          From European Thai festivals to Bangkok hidden gems.
        </p>

        {/* Search Bar: City / Date / Category [cite: 35] */}
        <div className="flex flex-col md:flex-row items-center bg-white border border-neutral-200 shadow-xl shadow-black/5 rounded-2xl md:rounded-full p-2 mb-8 transition-all hover:shadow-2xl">
          <input 
            type="text" 
            placeholder="Search city..." 
            className="flex-1 px-6 py-3 bg-transparent outline-none text-sm border-b md:border-b-0 md:border-r border-neutral-100"
          />
          <input 
            type="text" 
            placeholder="Select date" 
            className="flex-1 px-6 py-3 bg-transparent outline-none text-sm border-b md:border-b-0 md:border-r border-neutral-100"
          />
          <button className="w-full md:w-auto bg-[#F97316] text-white px-8 py-3 rounded-xl md:rounded-full font-semibold text-sm hover:brightness-110 transition-all">
            Find
          </button>
        </div>

        {/* Engine Switch Toggle [cite: 36, 37, 40, 41] */}
        <div className="inline-flex items-center bg-neutral-100 p-1 rounded-full">
          <button className="px-6 py-2 rounded-full text-sm font-bold bg-white text-[#0F3D2E] shadow-sm">
            Europe
          </button>
          <button className="px-6 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-neutral-600">
            Bangkok
          </button>
        </div>
      </div>
    </section>
  );
}
