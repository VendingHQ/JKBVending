import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | J-K-B Vending | DFW Family-Owned Vending",
  description:
    "Meet John and Kayla — DFW locals with 25+ years of H-E-B grocery retail experience, bringing smart coolers and micro markets to North Texas offices, apartments, hotels, and more.",
  openGraph: {
    title: "About Us | J-K-B Vending",
    description:
      "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities.",
    url: "https://www.jkbvending.com/about",
    siteName: "J-K-B Vending",
    type: "website",
  },
};

const values = [
  {
    icon: "🏠",
    title: "Local First",
    desc: "We live here. We work here. Every dollar you spend with J-K-B stays in the DFW community.",
  },
  {
    icon: "🛒",
    title: "Product Expertise",
    desc: "Our H-E-B grocery background means we curate better products than any national vending operator.",
  },
  {
    icon: "⚡",
    title: "Responsive Service",
    desc: "When something needs attention, you'll hear from us that day — not next week.",
  },
  {
    icon: "🤝",
    title: "No Long Contracts",
    desc: "We operate on a 30-day agreement because we believe in earning your business every single month.",
  },
  {
    icon: "📊",
    title: "Data-Driven Stocking",
    desc: "We use real-time machine data to keep your property stocked with what people actually want.",
  },
  {
    icon: "💚",
    title: "Community Focused",
    desc: "As a family business, we care about the properties and people we serve — not just the machines.",
  },
];

const whoWeServe = [
  { icon: "🏢", label: "Offices & Businesses" },
  { icon: "🏠", label: "Apartment Communities" },
  { icon: "🏨", label: "Hotels & Extended Stay" },
  { icon: "🏥", label: "Healthcare & Medical" },
  { icon: "🏭", label: "Manufacturing & Industrial" },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow">Our Story</p>
          <h1 className="page-title">
            Built by DFW Locals,<br />for DFW Properties
          </h1>
          <p className="page-sub">
            J-K-B Vending was founded by John and Kayla — two H-E-B grocery retail veterans
            who saw a gap in the DFW vending market and decided to fill it.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-photo-wrap">
              <Image
                src="https://i.postimg.cc/fbzY9L4d/IMG-7427.avif"
                alt="John and Kayla — Founders of J-K-B Vending"
                width={500}
                height={500}
                className="about-photo"
              />
            </div>
            <div className="about-text">
              <h2 className="about-title">Meet John &amp; Kayla</h2>
              <p>
                After 25+ years working in grocery retail at H-E-B — one of the most respected
                food retailers in the country — John and Kayla understood something most vending
                operators miss: product selection matters. Freshness matters. And relationships matter.
              </p>
              <p>
                We launched J-K-B Vending right here in Wylie, TX because we saw too many local
                businesses, apartment communities, and properties stuck with outdated machines,
                stale products, and faceless national vendors who never showed up on time.
              </p>
              <p>
                Today we serve offices, apartment communities, hotels, healthcare facilities, and
                manufacturing businesses across DFW — and we bring the same personal attention
                to every single one.
              </p>
              <p>
                At J-K-B, the relationship doesn&apos;t start when you sign and end when we
                leave — it&apos;s ongoing, personal, and built on earning your trust every month.
              </p>
              <div className="about-ctas">
                <Link href="/contact" className="btn-primary">Work With Us</Link>
                <Link href="/services" className="btn-outline">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">Who We Serve</p>
          <h2 className="section-title">More Than Just Office Break Rooms</h2>
          <p className="section-sub">
            Our H-E-B background taught us how to serve a wide range of customers with very
            different needs. That translates directly to how we serve our vending clients —
            wherever they are.
          </p>
          <div className="serve-strip">
            {whoWeServe.map((w) => (
              <div key={w.label} className="serve-item">
                <span className="serve-icon">{w.icon}</span>
                <span className="serve-label">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">What We Stand For</p>
          <h2 className="section-title">Our Values</h2>
          <div className="grid-3">
            {values.map((v) => (
              <div key={v.title} className="card">
                <span className="card-icon">{v.icon}</span>
                <h3 className="card-title">{v.title}</h3>
                <p className="card-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Work With a Local Team?</h2>
          <p className="cta-sub">
            Get a free machine for your property — no cost, no long-term contract.
          </p>
          <Link href="/contact" className="btn-primary btn-large">
            Get a Free Machine →
          </Link>
        </div>
      </section>
    </main>
  );
}
