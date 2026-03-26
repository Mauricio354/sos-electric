import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential",
    desc: "Complete home electrical services from wiring to lighting upgrades and smart home installations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial",
    desc: "Industrial and commercial electrical solutions, tenant improvements, and building maintenance.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Emergency 24/7",
    desc: "Round-the-clock emergency electrical service. When you need help fast, S.O.S is there.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Panel Upgrades",
    desc: "Modernize your electrical panel to handle today's power demands safely and efficiently.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "EV Chargers",
    desc: "Level 2 EV charger installation for homes and businesses. Future-proof your property.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Lighting Design",
    desc: "Custom lighting solutions for ambiance, energy efficiency, and architectural enhancement.",
  },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "5,000+", label: "Projects Completed" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Licensed & Insured" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,197,71,0.04)_0%,_transparent_70%)]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-grey-600/5 rounded-full blur-[100px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up flex justify-center mb-8">
            <Image src="/logo/sos-bolt.svg" alt="SOS Electric" width={100} height={100} priority />
          </div>

          <h1 className="animate-fade-in-up-delay text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Calgary&apos;s Trusted</span>
            <br />
            <span className="gradient-text">Electrical Experts</span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Powering Calgary homes and businesses since 1996. Professional, reliable electrical services backed by nearly three decades of experience.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-electric-gold text-dark-900 font-bold text-lg rounded-lg hover:bg-electric-gold-dark transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.15)]"
            >
              Request a Free Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-electric-gold/30 text-electric-gold font-semibold text-lg rounded-lg hover:border-electric-gold hover:bg-electric-gold/5 transition-all"
            >
              Our Services
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-electric-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dark-800 border-y border-dark-600/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-electric-gold electric-glow">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Comprehensive Electrical Services</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              From simple repairs to complex installations, our team of certified electricians delivers quality workmanship on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover p-8 bg-dark-700/40 border border-grey-700/30 rounded-xl group"
              >
                <div className="text-electric-gold group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-electric-gold font-semibold hover:underline"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-2">Why S.O.S Electric</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Built on Trust,<br />Powered by Experience</h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                For nearly three decades, S.O.S Electric has been the name Calgary trusts for electrical work. Our master electricians bring expertise, professionalism, and a commitment to safety to every job.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Fully licensed & insured master electricians",
                  "Transparent pricing with no hidden fees",
                  "Clean, respectful work — we treat your home like ours",
                  "Warranty on all workmanship",
                  "24/7 emergency response available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-electric-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-electric-gold font-semibold hover:underline"
              >
                Learn Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="aspect-square bg-dark-700 rounded-2xl border border-dark-600/50 electric-border flex items-center justify-center">
                <Image src="/logo/sos-bolt.svg" alt="SOS Electric" width={180} height={180} />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-electric-gold/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-electric-gold/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 bg-gradient-to-b from-dark-700 to-dark-800 rounded-2xl border border-grey-700/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Whether it&apos;s a small repair or a major renovation, our team is ready to help. Contact us today for a free, no-obligation quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-electric-gold text-dark-900 font-bold text-lg rounded-lg hover:bg-electric-gold-dark transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.15)]"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:4035550196"
                className="px-8 py-4 border-2 border-electric-gold/30 text-electric-gold font-semibold text-lg rounded-lg hover:border-electric-gold hover:bg-electric-gold/5 transition-all"
              >
                Call (403) 555-0196
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
