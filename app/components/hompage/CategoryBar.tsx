// components/home/CategoryBar.tsx
const categories = [
  { name: 'Temple Luna', icon: '🛕' },
  { name: 'Market', icon: '🛍️' },
  { name: 'Music', icon: '🎸' },
  { name: 'Community', icon: '🤝' },
];

export default function CategoryBar() {
  return (
    <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center space-x-12 py-4">
        {categories.map((cat) => (
          <button key={cat.name} className="group flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-all">
            <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F3D2E]">{cat.name}</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-[#F97316] transition-all duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}