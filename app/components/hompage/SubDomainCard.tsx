
import React from "react";

export default function CategoryCards() {
  const categories = [
    {
      title: "Food Marketplace",
      desc: "Authentic Thai ingredients and groceries.",
      link: "/",
      img: "/shop_icon2.png",
      color: "from-yellow-200 to-green-500"
    },
    {
      title: "Wellness Marketplace",
      desc: "Herbal remedies and wellness essentials.",
      link: "/",
      img: "/wellness_icon2.png",
      color: "from-yellow-200 to-pink-500"
    },
    {
      title: "Game Marketplace",
      desc: "Puzzle & trivia games inspired by Thai culture.",
      link: "/",
      img: "/game_icon2.png",
      color: "from-green-300 to-blue-600"
    }
  ];

  return (
    <section id="explore" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href={cat.link}
            className={`p-6 rounded-xl bg-gradient-to-br ${cat.color} shadow hover:shadow-lg transition`}
          >
            <img src={cat.img} alt={cat.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-700">{cat.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
