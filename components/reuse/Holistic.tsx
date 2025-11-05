

import React from "react";

export default function Holistic() {
  return (
        <section
      className="relative w-full bg-white bg-cover bg-center h-[90vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/holistic2.png')" }} // Replace with your real image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white p-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
        Thai Holistic Wellness
      </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
         
          <a
        href="#explore"
        className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700"
      >
        Explore Now
      </a>
        </div>
      </div>
    </section>
 
  );
}