'use client';
import Link from 'next/link'





export default function HeroSociety() {


 

  return (
<section
  className="relative w-full h-[120vh] bg-cover bg-center transition-all duration-700"
  style={{ backgroundImage: "url('/wat-thai2.png')" }}
>
  <div className="absolute inset-0 bg-white bg-opacity-5 flex flex-col justify-start items-center text-center px-4 pt-24 md:pt-32">
    
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-indigo-700 mb-4 drop-shadow-sm">
      Your Gateway to the Thai Community in Europe
    </h1>
    
    <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl font-medium">
      Connecting Thai expatriates and enthusiasts across Europe through events, resources, and support.
    </p>

    {/* CTA Button Group */}

    <div className="flex flex-col sm:flex-row gap-4">

                  <Link
              href="/somtam_2026"
              className="px-8 py-4 bg-indigo-900 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300"
            >
              Explore Events
            </Link>
      
     
      
      <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-indigo-900 text-blue-900 font-bold rounded-full hover:bg-white transition-all duration-300">
        Explore the Map
      </button>
    </div>
      
  </div>
</section>
  );
}
