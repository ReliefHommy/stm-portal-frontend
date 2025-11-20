import React from 'react';

export default function SubHero() {
  return (
    <section className="bg-orange-400 to-yellow-200 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
        Somtam Marketplace
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
        Your Gateway to Thai Socity - Life style in Europe.
      </p>
      <a
        href="#explore"
        className="bg-white text-black px-6 py-3 rounded-lg shadow hover:bg-black hover:text-white transition-colors duration-300"
      >
        Explore Now
      </a>
    </section>
  );
}
