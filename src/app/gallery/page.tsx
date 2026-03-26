import Link from "next/link";

const galleryItems = [
  {
    title: "Residential Panel Upgrade",
    category: "Residential",
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    alt: "Electrical panel upgrade work",
  },
  {
    title: "Commercial Wiring Project",
    category: "Commercial",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    alt: "Commercial electrical wiring",
  },
  {
    title: "Modern Lighting Installation",
    category: "Lighting",
    src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop",
    alt: "Modern pendant lighting installation",
  },
  {
    title: "Industrial Electrical Work",
    category: "Commercial",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    alt: "Industrial electrical installation",
  },
  {
    title: "Kitchen Renovation Wiring",
    category: "Residential",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    alt: "Kitchen renovation electrical work",
  },
  {
    title: "Recessed Lighting Design",
    category: "Lighting",
    src: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&h=600&fit=crop",
    alt: "Recessed lighting in living room",
  },
  {
    title: "EV Charger Installation",
    category: "EV Charging",
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
    alt: "Electric vehicle charger installation",
  },
  {
    title: "Office Building Electrical",
    category: "Commercial",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    alt: "Office building electrical work",
  },
  {
    title: "Outdoor Landscape Lighting",
    category: "Lighting",
    src: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop",
    alt: "Landscape lighting at night",
  },
  {
    title: "Smart Home Installation",
    category: "Residential",
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    alt: "Smart home system installation",
  },
  {
    title: "Warehouse Lighting Retrofit",
    category: "Commercial",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    alt: "Warehouse lighting installation",
  },
  {
    title: "Bathroom Renovation Electrical",
    category: "Residential",
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
    alt: "Bathroom electrical renovation",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,197,71,0.03)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Project<br />
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Browse our portfolio of residential and commercial electrical projects throughout Calgary. Quality workmanship you can see.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-dark-600/50 card-hover"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-dark-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-2 py-0.5 bg-electric-gold/20 text-electric-gold text-xs font-semibold rounded mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>

                {/* Category badge (always visible) */}
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 bg-dark-900/80 backdrop-blur-sm text-electric-gold text-xs font-medium rounded-full border border-electric-gold/20">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Like What You See?</h2>
          <p className="mt-4 text-slate-400">
            Let us bring the same quality and attention to detail to your next electrical project.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-electric-gold text-dark-900 font-bold text-lg rounded-lg hover:bg-electric-gold-dark transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.15)]"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
