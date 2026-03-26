import Link from "next/link";

const services = [
  {
    title: "Residential Electrical",
    desc: "Complete electrical services for homes of all sizes. From new construction wiring to renovations, we handle everything with precision and care.",
    features: ["Full home rewiring", "Circuit breaker panels", "Outlet & switch installation", "Basement development wiring", "Hot tub & spa wiring", "Smoke & CO detector installation"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Commercial & Industrial",
    desc: "Professional electrical solutions for businesses, offices, retail spaces, and industrial facilities throughout Calgary.",
    features: ["Office & retail buildouts", "Warehouse lighting", "3-phase power installation", "Tenant improvement", "Code compliance upgrades", "Scheduled maintenance programs"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Panel Upgrades & Repairs",
    desc: "Modernize your electrical panel to safely support today's power demands. We upgrade outdated panels and fix hazardous conditions.",
    features: ["100A to 200A upgrades", "Fuse box to breaker conversion", "Sub-panel installation", "Load calculations", "Aluminum wiring remediation", "Surge protection"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Lighting Solutions",
    desc: "Transform your space with custom lighting design. From potlights to LED retrofits, we create the perfect ambiance.",
    features: ["Pot light installation", "LED conversions", "Under-cabinet lighting", "Landscape lighting", "Dimmer systems", "Motion sensor lighting"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "EV Charger Installation",
    desc: "Future-proof your property with a professionally installed Level 2 EV charger. We handle permits, installation, and inspection.",
    features: ["Level 2 charger install", "Dedicated circuit wiring", "Load management", "Permit & inspection", "All major brands supported", "Commercial fleet charging"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "24/7 Emergency Service",
    desc: "Electrical emergencies don't wait, and neither do we. Call us anytime for fast, reliable emergency electrical service.",
    features: ["Power outages", "Burning smell investigation", "Sparking outlets", "Tripped breakers", "Storm damage repair", "Same-day response"],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,197,71,0.04)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Professional Electrical<br />
            <span className="gradient-text">Services in Calgary</span>
          </h1>
          <p className="mt-6 text-lg text-grey-400 max-w-2xl mx-auto">
            From residential repairs to large-scale commercial projects, our certified electricians deliver quality workmanship you can depend on.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="p-8 bg-dark-700/50 border border-dark-600/50 rounded-xl card-hover">
                <div className="w-12 h-12 bg-grey-700/40 border border-grey-600/30 rounded-lg flex items-center justify-center text-electric-gold mb-5">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-grey-400 leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-grey-300">
                      <svg className="w-4 h-4 text-electric-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Don&apos;t See What You Need?</h2>
          <p className="mt-4 text-grey-400">
            We offer many more electrical services. Contact us to discuss your specific project and we&apos;ll provide a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-electric-gold text-dark-900 font-bold text-lg rounded-lg hover:bg-electric-gold-dark transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.2)]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
