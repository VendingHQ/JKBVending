import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | J-K-B Vending | DFW Vending Locations",
  description: "J-K-B Vending serves Wylie, Plano, Frisco, Richardson, McKinney, Allen, Garland and all of Collin County.",
};

const cities = [
  { name: "Wylie, TX", desc: "Our home base. We know every business park and office complex in Wylie.", tag: "Home Base" },
  { name: "Plano, TX", desc: "Serving corporate offices, tech companies, and manufacturing facilities throughout Plano.", tag: "High Priority" },
  { name: "Frisco, TX", desc: "Fast-growing business community with high demand for premium break room solutions.", tag: "High Priority" },
  { name: "Richardson, TX", desc: "From the Telecom Corridor to small offices — we serve all of Richardson.", tag: "Active" },
  { name: "McKinney, TX", desc: "One of the fastest-growing cities in Texas. We're growing right alongside it.", tag: "Active" },
  { name: "Allen, TX", desc: "Corporate campuses and office parks in Allen get fast, local service from our Wylie team.", tag: "Active" },
  { name: "Garland, TX", desc: "Industrial and manufacturing facilities in Garland are a strong fit for our smart coolers.", tag: "Active" },
  { name: "Sachse, TX", desc: "Right in our backyard. Businesses in Sachse get some of our fastest response times.", tag: "Active" },
  { name: "Rockwall, TX", desc: "Healthcare facilities, offices, and growing commercial districts in Rockwall.", tag: "Active" },
  { name: "Collin County", desc: "We cover all of Collin County — if you're here, we can serve you.", tag: "Full Coverage" },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#1B5E20] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4 block">Service Area</span>
          <h1 className="text-5xl font-bold text-white mb-5">Proudly Serving DFW</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Based in Wylie, TX — we provide fast, local vending service across the full DFW Metroplex with a focus on Collin County and surrounding cities.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Cities We Serve</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Don't see your city? Reach out — if you're in DFW, there's a good chance we can serve you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="bg-[#F9FBF9] rounded-2xl p-7 border border-gray-100 hover:border-[#2E7D32] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">📍 {city.name}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    city.tag === "Home Base" ? "bg-[#1B5E20] text-white" :
                    city.tag === "High Priority" ? "bg-[#2E7D32] text-white" :
                    city.tag === "Full Coverage" ? "bg-green-100 text-[#1B5E20]" :
                    "bg-gray-100 text-gray-600"
                  }`}>{city.tag}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B5E20] py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">Local Service Beats National Every Time</h2>
            <p className="text-green-200 leading-relaxed mb-4">
              National vending companies manage hundreds of accounts per rep. When your machine needs service, you're a ticket number in a queue.
            </p>
            <p className="text-green-200 leading-relaxed mb-6">
              With J-K-B, you know your operator by name. We're 20 minutes away, not 2 states away.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[#1B5E20] font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
              Check Your Area →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Same-day service response", icon: "⚡" },
              { label: "Owner-direct relationship", icon: "🤝" },
              { label: "Local product knowledge", icon: "🛒" },
              { label: "No national middlemen", icon: "🏠" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-2xl p-5 border border-white/20 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-green-100 text-xs font-medium leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Your City on the List?</h2>
          <p className="text-gray-500 mb-8">Reach out and we'll confirm availability in your area — usually within a few hours.</p>
          <Link href="/contact" className="inline-block bg-[#2E7D32] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1B5E20] transition-colors">
            Get a Free Machine Today →
          </Link>
        </div>
      </section>
    </>
  );
}
