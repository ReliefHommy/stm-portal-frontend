
import React from "react";

export default function FunGameCategory() {
  const features = [
    { title: "Relaxtion&Entertainment", desc: "Casual games provide a sende of relaxation and fun." },
    { title: "Sense of Achievement & Purpose", desc: "Simple level-based games give a sense of progress and motivation" },
    { title: "Accessibility & Ease of use", desc: "Game with out time pressure or complex mechanics.." }
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Relaxing, stress-free and Brain-stimulating gameplay</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}