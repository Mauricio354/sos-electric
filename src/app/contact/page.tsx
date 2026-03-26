"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to an API route or email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,197,71,0.03)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-electric-gold font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Contact<br />
            <span className="gradient-text">S.O.S Electric</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to start your project? Have a question? We&apos;d love to hear from you. Fill out the form below or give us a call.
          </p>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Talk</h2>
                <p className="text-slate-400 leading-relaxed">
                  Whether it&apos;s a simple repair or a major project, our team is here to help. Get in touch and we&apos;ll respond promptly with a free quote.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-electric-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <a href="tel:4035550196" className="text-slate-400 hover:text-electric-gold transition-colors">(403) 555-0196</a>
                    <p className="text-xs text-slate-500 mt-1">24/7 Emergency Line Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-electric-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a href="mailto:info@soselectric.ca" className="text-slate-400 hover:text-electric-gold transition-colors">info@soselectric.ca</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-electric-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-slate-400">Calgary, Alberta</p>
                    <p className="text-xs text-slate-500 mt-1">Serving all of Calgary &amp; surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-electric-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Hours</h3>
                    <p className="text-slate-400">Mon–Fri: 7:00 AM – 6:00 PM</p>
                    <p className="text-slate-400">Sat: 8:00 AM – 2:00 PM</p>
                    <p className="text-xs text-slate-500 mt-1">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="p-12 bg-dark-900 border border-electric-gold/30 rounded-xl text-center electric-border">
                  <div className="w-16 h-16 bg-electric-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-electric-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-3 text-slate-400">
                    We&apos;ve received your message and will get back to you within 1 business day. For urgent matters, please call us directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-electric-gold font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-dark-900 border border-dark-600/50 rounded-xl space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-electric-gold/50 focus:ring-1 focus:ring-electric-gold/50 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-electric-gold/50 focus:ring-1 focus:ring-electric-gold/50 transition-colors"
                        placeholder="(403) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-electric-gold/50 focus:ring-1 focus:ring-electric-gold/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-lg text-white focus:outline-none focus:border-electric-gold/50 focus:ring-1 focus:ring-electric-gold/50 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="residential">Residential Electrical</option>
                      <option value="commercial">Commercial Electrical</option>
                      <option value="panel">Panel Upgrade</option>
                      <option value="lighting">Lighting Installation</option>
                      <option value="ev">EV Charger Installation</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-500 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-electric-gold/50 focus:ring-1 focus:ring-electric-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-electric-gold text-dark-900 font-bold text-lg rounded-lg hover:bg-electric-gold-dark transition-all hover:shadow-[0_0_20px_rgba(232,197,71,0.15)] cursor-pointer"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We typically respond within 1 business day. For emergencies, call (403) 555-0196.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
