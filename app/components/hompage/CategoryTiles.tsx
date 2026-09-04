
export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Temple Luna', 'Market', 'Music', 'Community'].map((name) => (
          <div key={name} className="group relative h-32 rounded-2xl overflow-hidden cursor-pointer shadow-sm">
            <div className="absolute inset-0 bg-[#0F3D2E]/40 group-hover:bg-[#0F3D2E]/20 transition-colors z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-white font-bold tracking-tight text-lg">{name}</span>
            </div>
            <img 
              src={`/images/cat-${name.toLowerCase().replace(' ', '-')}.jpg`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}