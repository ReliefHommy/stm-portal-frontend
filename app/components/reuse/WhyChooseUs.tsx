
import React from "react";

export default function WhyChooseUs() {
  const features = [
    { title: "Fast Delivery", desc: "Quick and reliable delivery across Europe." },
    { title: "Authentic Quality", desc: "Genuine Thai products and experiences." },
    { title: "Trusted Vendors", desc: "Carefully selected Thai business partners." }
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Somtam Marketplace?</h2>
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
