import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | J-K-B Vending | DFW Family-Owned Vending",
  description: "Meet John and Kayla — DFW locals with H-E-B grocery retail experience, bringing smart coolers and micro markets to North Texas businesses.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1B5E20] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4 block">Our Story</span>
          <h1 className="text-5xl font-bold text-white mb-5">Built by DFW Locals, for DFW Businesses</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            J-K-B Vending was founded by John and Kayla — two H-E-B grocery retail veterans who saw a gap in the DFW vending market and decided to fill it.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
  src="https://i.imgur.com/nJIy3ZJ.jpeg"
  alt="John and Kayla — Founders of J-K-B Vending"
  className="w-full h-full object-cover"
/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Meet John & Kayla</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              After years working in grocery retail at H-E-B — one of the most respected food retailers in the country — John and Kayla understood something most vending operators miss: product selection matters. Freshness matters. And relationships matter.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              We launched J-K-B Vending right here in Wylie, TX because we saw too many local businesses stuck with outdated machines, stale products, and faceless national vendors who never showed up on time.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              At J-K-B, the relationship doesn't start when you sign and end when we leave — it's ongoing, personal, and built on earning your trust every month.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="inline-block bg-[#2E7D32] text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#1B5E20] transition-colors">
                Work With Us
              </Link>
              <Link href="/services" className="inline-block border border-gray-200 text-gray-700 font-semibold text-sm px-7 py-3 rounded-full hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FBF9] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏠", title: "Local First", desc: "We live here. We work here. Every dollar you spend with J-K-B stays in the DFW community." },
              { icon: "🛒", title: "Product Expertise", desc: "Our H-E-B grocery background means we curate better products than any national vending operator." },
              { icon: "⚡", title: "Responsive Service", desc: "When something needs attention, you'll hear from us that day — not next week." },
              { icon: "🤝", title: "No Long Contracts", desc: "We operate on a 30-day agreement because we believe in earning your business every single month." },
              { icon: "📊", title: "Data-Driven Stocking", desc: "We use real-time machine data to keep your break room stocked with what people actually want." },
              { icon: "💚", title: "Community Focused", desc: "As a family business, we care about the businesses and people we serve — not just the machines." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B5E20] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With a Local Team?</h2>
          <p className="text-green-200 mb-8">Get a free machine for your break room — no cost, no long-term contract.</p>
          <Link href="/contact" className="inline-block bg-white text-[#1B5E20] font-bold px-10 py-4 rounded-full hover:bg-green-50 transition-colors">
            Get a Free Machine →
          </Link>
        </div>
      </section>
    </>
  );
}
