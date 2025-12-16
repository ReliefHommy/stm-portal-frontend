'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/hero_slide-1.png',
    title: 'Thai Society in Europe',
    buttonText: 'Explore Now',
  },
  {
    id: 2,
    image: '/hero_slide-2.png',
    title: 'Discover Thai Wellness & Lifestyle',
    buttonText: 'Join the Movement',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[current];

  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url('${currentSlide.image}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black drop-shadow-md mb-6">
          {currentSlide.title}
        </h1>
        <a
          href="/stm-posts"
          className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
        >
          {currentSlide.buttonText}
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? 'bg-white' : 'bg-white/40'
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}
