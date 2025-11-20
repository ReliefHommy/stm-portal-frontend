
import React from "react";

export default function WellnessCategory() {
  const features = [
    { title: "Traditional Medicine&Herbal", desc: "Focus:Internal balance throught natural remedies" },
    { title: "Body & Energy Therapy ", desc: "Focus: Physical, energytic, and emotional release.." },
    { title: "mindfulness & Spiritual Wellness", desc: "Mental clarity, emotionak healing, and spiritual growth." }
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Embrace Balance, Health, and Harmony</h2>
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