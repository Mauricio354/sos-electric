import Image from "next/image";
import Link from "next/link";

const timeline = [
  { year: "1996", event: "S.O.S Electric founded in Calgary, Alberta" },
  { year: "2002", event: "Expanded to commercial and industrial services" },
  { year: "2008", event: "Launched 24/7 emergency electrical service" },
  { year: "2015", event: "Became certified green energy installer" },
  { year: "2020", event: "Added EV charger installation services" },
  { year: "2024", event: "Celebrating 28 years serving Calgary" },
];

const values = [
  {
    title: "Safety First",
    desc: "Every project follows strict safety protocols. We never cut corners when it comes to protecting your family or employees.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Quality Craftsmanship",
    desc: "We take pride in clean, precise work that meets or exceeds all code requirements. Our reputation depends on it.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Customer Trust",
    desc: "Honest communication, fair pricing, and reliable service. We build long-term relationships, not just circuits.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,197,71,0.03)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Powering Calgary<br />
            <span className="gradient-text">Since 1996</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            What started as a one-man operation has grown into one of Calgary&apos;s most trusted electrical contractors, serving thousands of homes and businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-dark-700 rounded-2xl border border-dark-600/50 electric-border flex items-center justify-center">
              <Image src="/logo/sos-bolt.svg" alt="SOS Electric" width={160} height={160} />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-electric-gold/10 rounded-full blur-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Our Journey</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Founded in 1996, S.O.S Electric began with a simple mission: provide Calgary with honest, high-quality electrical services that homeowners and business owners can count on.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Over nearly three decades, we&apos;ve built our reputation one project at a time. From rewiring heritage homes in the inner city to powering new commercial developments, our commitment to excellence has never wavered.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Today, our team of certified master electricians continues that tradition, combining decades of experience with modern techniques and technology to deliver the best possible results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-8 bg-dark-700/40 border border-grey-700/30 rounded-xl card-hover">
                <div className="text-electric-gold">{v.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Timeline</h2>
          </div>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-dark-700 border-2 border-electric-gold/40 rounded-full flex items-center justify-center text-electric-gold font-bold text-xs">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-16 bg-dark-600" />}
                </div>
                <div className="pt-2.5 pb-8">
                  <p className="text-slate-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Work With Us?</h2>
          <p className="mt-4 text-slate-400">Experience the S.O.S Electric difference for yourself.</p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-electric-gold text-dark-900 font-bold text-lg rounded-lg hover:bg-electric-gold-dark transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.15)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
