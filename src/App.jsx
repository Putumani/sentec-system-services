import React, { useState } from 'react';

const App = () => {
  const primaryPhone = "0846155341";
  const secondaryPhone = "0678714301";
  const [filter, setFilter] = useState('all');

  const services = [
    { title: "Gate Automation", items: ["Sliding Gates", "Swing Gates", "Centurion Specialists"], icon: "⚙️" },
    { title: "Garage Doors", items: ["Roll-up Motors", "Sectional Doors", "Battery Backup"], icon: "🏠" },
    { title: "Electric Fencing", items: ["Wall Top Fencing", "Energizer Setup", "Compliance"], icon: "⚡" },
    { title: "Intercom Systems", items: ["G-Speak", "POLOphone", "Wireless Access"], icon: "📞" },
    { title: "Welding & Gates", items: ["Custom Fabrication", "Gate Repairs", "Steelwork"], icon: "🔥" },
    { title: "Carports", items: ["Single/Double", "Industrial Grade", "Waterproof"], icon: "🚘" },
    { title: "Burglar Bars", items: ["Spanish Bars", "Clear View", "Custom Window Guards"], icon: "🛡️" },
  ];

  const galleryImages = [
    { id: 1, category: 'steelwork', title: 'Custom Burglar Bars', src: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=800' },
    { id: 2, category: 'automation', title: 'Centurion D5 Installation', src: 'https://images.unsplash.com/photo-1558002038-1033186189a6?q=80&w=800' },
    { id: 3, category: 'steelwork', title: 'Industrial Carport', src: 'https://images.unsplash.com/photo-1590674116340-994fa7523f38?q=80&w=800' },
    { id: 4, category: 'automation', title: 'Garage Door Setup', src: 'https://images.unsplash.com/photo-1621905252507-b354bc2bad32?q=80&w=800' },
    { id: 5, category: 'steelwork', title: 'Security Gate Fabrication', src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800' },
    { id: 6, category: 'automation', title: 'Electric Fence Energizer', src: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=800' },
  ];

  const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-md border-b-2 border-blue-900">
        <div className="flex flex-col">
          <span className="text-2xl font-black text-blue-900 leading-none tracking-tighter">SENTEC</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">System & Services</span>
        </div>
        <div className="hidden md:flex space-x-8 font-bold text-slate-700 uppercase text-sm">
          <a href="#services" className="hover:text-orange-600 transition">Services</a>
          <a href="#gallery" className="hover:text-orange-600 transition">Gallery</a>
          <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
        </div>
        <a href={`https://wa.me/${primaryPhone}`} className="rounded-full bg-green-600 px-6 py-2 text-white font-bold hover:bg-green-700 transition shadow-lg text-sm">
          WHATSAPP US
        </a>
      </nav>

      {/* Hero */}
      <header className="relative h-[91vh] flex items-center justify-center text-white bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="Workshop" />
        <div className="relative z-20 px-6 max-w-5xl w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase italic leading-tight">
            Safety. Steel. <br/><span className="text-orange-500">Service.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl opacity-90">
            Professional Installation of Gate Motors, Garage Doors, Electric Fencing, and Custom Steel Fabrication.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold transition">Get A Free Quote</a>
            <a href="#gallery" className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-lg font-bold transition border border-white/30">View Our Work</a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase italic">Our Services</h2>
            <div className="h-2 w-24 bg-orange-500 mt-2"></div>
          </div>
          <p className="text-slate-500 max-w-md">From automation to heavy-duty welding, we provide end-to-end security solutions for your property.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, idx) => (
                  <li key={idx} className="text-slate-500 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase italic mb-4">Work Gallery</h2>
            <div className="flex justify-center gap-4 mt-8">
              {['all', 'steelwork', 'automation'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all ${filter === cat ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredImages.map((img) => (
              <div key={img.id} className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-800">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <h4 className="font-bold text-lg">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section id="contact" className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-blue-900 mb-6 uppercase">Ready to Secure Your Home?</h2>
        <p className="text-slate-600 mb-10 text-lg">Contact Sentec System & Services today for a professional assessment and competitive pricing.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href={`tel:${primaryPhone}`} className="bg-blue-900 text-white px-10 py-4 rounded-xl font-black hover:bg-blue-800 transition shadow-lg">
            CALL: {primaryPhone}
          </a>
          <a href={`https://wa.me/${secondaryPhone}`} className="bg-green-600 text-white px-10 py-4 rounded-xl font-black hover:bg-green-700 transition shadow-lg">
            WHATSAPP: {secondaryPhone}
          </a>
        </div>
        <p className="mt-8 font-bold text-slate-400 uppercase tracking-tighter italic">Burglar Bars • Carports • Motors • Electric Fences</p>
      </section>

      <footer className="py-8 bg-white border-t border-slate-100 text-center text-slate-400 text-xs font-medium">
        © 2026 SENTEC SYSTEM & SERVICE'S. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;