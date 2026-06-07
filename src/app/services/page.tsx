import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | J-K-B Vending | Smart Coolers & Micro Markets DFW",
  description: "Smart coolers, micro markets, and pantry service for DFW businesses. Free placement, local service, no contracts.",
};

const services = [
  {
    icon: "🧊",
    title: "Smart Coolers",
    subtitle: "Best for 15–75 employees",
    color: "bg-blue-50 border-blue-100",
    features: [
      "AI-powered inventory tracking",
      "Beverages, snacks & fresh food",
      "Cashless & mobile payment",
      "Real-time remote monitoring",
      "Free installation & restocking",
      "HAHA Innovation machines",
    ],
    desc: "Our smart coolers are the perfect solution for small-to-mid size teams. Sleek, modern, and stocked with products your employees actually want — curated by our H-E-B grocery veterans.",
  },
  {
    icon: "🏪",
    title: "Micro Markets",
    subtitle: "Best for 75+ employees",
    color: "bg-green-50 border-green-100",
    features: [
      "100+ SKU open-concept market",
      "Fresh food, snacks & beverages",
      "Self-checkout kiosk",
      "Loyalty & rewards programs",
      "Free setup & management",
      "Custom product selection",
    ],
    desc: "Transform your break room into a full self-serve market. Employees get the convenience of a corner store without leaving the building — and it's completely free to your company.",
  },
  {
    icon: "☕",
    title: "Pantry Service",
    subtitle: "Great for any size team",
    color: "bg-amber-50 border-amber-100",
    features: [
      "Stocked open shelving",
      "Coffee, snacks & drinks",
      "Weekly restocking visits",
      "Custom product mix",
      "No machine required",
      "Flexible billing options",
    ],
    desc: "Keep your team fueled without the overhead. We stock and manage your break room pantry on a regular schedule so you never have to think about it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1B5E20] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4 block">Our Services</span>
          <h1 className="text-5xl font-bold text-white mb-5">The Right Solution for Every Workplace</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            From a single smart cooler to a full micro market — we match your headcount and break room to the right solution, then handle everything else.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {services.map((s, i) => (
            <div key={s.title} className={`rounded-3xl border p-10 ${s.color} flex flex-col md:flex-row gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="text-5xl mb-4">{s.icon}</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">{s.subtitle}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <Link href="/contact" className="inline-block bg-[#2E7D32] text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#1B5E20] transition-colors">
                  Get Started →
                </Link>
              </div>
              <div className="flex-1 grid grid-cols-1 gap-3 content-start">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-3 text-sm font-medium text-gray-700">
                    <span className="text-[#2E7D32] font-bold">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F9FBF9] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure Which Is Right for You?</h2>
          <p className="text-gray-500 mb-8">Tell us about your team and we'll recommend the perfect solution — no pressure, no commitment.</p>
          <Link href="/contact" className="inline-block bg-[#2E7D32] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1B5E20] transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
