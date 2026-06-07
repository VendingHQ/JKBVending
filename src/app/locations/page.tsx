import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | J-K-B Vending | DFW Vending Locations",
  description:
    "J-K-B Vending serves offices, apartment communities, hotels, and healthcare facilities across DFW — Wylie, Plano, Frisco, Richardson, McKinney, Allen, Garland, Rockwall, and all of Collin County.",
  openGraph: {
    title: "Service Areas | J-K-B Vending",
    description:
      "Smart coolers and micro markets for offices, apartments, hotels, and more across the DFW Metroplex.",
    url: "https://www.jkbvending.com/locations",
    siteName: "J-K-B Vending",
    type: "website",
  },
};

const cities = [
  {
    name: "Wylie, TX",
    badge: "Home Base",
    description:
      "Our home base. We know every business park, apartment community, and office complex in Wylie — and we're minutes away when you need us.",
  },
  {
    name: "Plano, TX",
    badge: "High Priority",
    description:
      "Serving corporate offices, apartment communities, tech companies, and manufacturing facilities throughout Plano.",
  },
  {
    name: "Frisco, TX",
    badge: "High Priority",
    description:
      "Fast-growing city with high demand from both businesses and luxury apartment communities. We're keeping up with Frisco's growth.",
  },
  {
    name: "Richardson, TX",
    badge: "Active",
    description:
      "From the Telecom Corridor to residential communities and small offices — we serve all of Richardson.",
  },
  {
    name: "McKinney, TX",
    badge: "Active",
    description:
      "One of the fastest-growing cities in Texas, with booming apartment development we're proud to be growing alongside.",
  },
  {
    name: "Allen, TX",
    badge: "Active",
    description:
      "Corporate campuses, office parks, and apartment communities in Allen get fast, local service from our Wylie team.",
  },
  {
    name: "Garland, TX",
    badge: "Active",
    description:
      "Industrial and manufacturing facilities, offices, and residential properties in Garland are a strong fit for our smart coolers.",
  },
  {
    name: "Sachse, TX",
    badge: "Active",
    description:
      "Right in our backyard. Businesses, apartments, and properties in Sachse get some of our fastest response times.",
  },
  {
    name: "Rockwall, TX",
    badge: "Active",
    description:
      "Healthcare facilities, offices, apartment communities, and growing commercial districts across Rockwall.",
  },
  {
    name: "Collin County",
    badge: "Full Coverage",
    description:
      "We cover all of Collin County — offices, apartments, hotels, healthcare, and beyond. If you're here, we can serve you.",
  },
];

const propertyTypes = [
  {
    icon: "🏢",
    title: "Offices & Businesses",
    desc: "Break rooms, lobbies, and common areas for teams of any size.",
  },
  {
    icon: "🏠",
    title: "Apartment Communities",
    desc: "Lobby machines, clubhouse markets, and pool-side coolers.",
  },
  {
    icon: "🏨",
    title: "Hotels & Extended Stay",
    desc: "Corridor coolers and lobby micro markets for guests around the clock.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical",
    desc: "Staff break rooms, waiting areas, and patient floor refreshments.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Industrial",
    desc: "High-volume restocking built around your production schedule.",
  },
];

const badgeClass: Record<string, string> = {
  "Home Base": "badge-home",
  "High Priority": "badge-high",
  "Active": "badge-active",
  "Full Coverage": "badge-full",
};

export default function LocationsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow">Service Area</p>
          <h1 className="page-title">Proudly Serving DFW</h1>
          <p className="page-sub">
            Based in Wylie, TX — we provide fast, local vending service across the full DFW
            Metroplex with a focus on Collin County and surrounding cities. We serve offices,
            apartment communities, hotels, healthcare facilities, and more.
          </p>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">Who We Serve in DFW</p>
          <h2 className="section-title">Every Property Type, Every City</h2>
          <p className="section-sub">
            Wherever people need fresh food and drinks on demand, J-K-B Vending can help —
            regardless of property type.
          </p>
          <div className="grid-3">
            {propertyTypes.map((p) => (
              <div key={p.title} className="card">
                <span className="card-icon">{p.icon}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY LIST */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Cities We Serve</p>
          <h2 className="section-title">Find Your City</h2>
          <p className="section-sub">
            Don&apos;t see your city? Reach out — if you&apos;re in DFW, there&apos;s a
            good chance we can serve you.
          </p>
          <div className="city-list">
            {cities.map((city) => (
              <div key={city.name} className="city-card">
                <div className="city-card-header">
                  <h3 className="city-name">📍 {city.name}</h3>
                  <span className={`badge ${badgeClass[city.badge] ?? "badge-active"}`}>
                    {city.badge}
                  </span>
                </div>
                <p className="city-desc">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL VS NATIONAL */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">Why Local Wins</p>
          <h2 className="section-title">Local Service Beats National Every Time</h2>
          <p className="section-body">
            National vending companies manage hundreds of accounts per rep. When your machine
            needs service, you&apos;re a ticket number in a queue.
          </p>
          <p className="section-body">
            With J-K-B, you know your operator by name. We&apos;re 20 minutes away, not 2
            states away — and we&apos;re just as committed to your apartment community as we
            are to your office.
          </p>
          <div className="why-grid">
            {[
              { icon: "⚡", label: "Same-day service response" },
              { icon: "🤝", label: "Owner-direct relationship" },
              { icon: "🛒", label: "Local product knowledge" },
              { icon: "🏠", label: "No national middlemen" },
            ].map((w) => (
              <div key={w.label} className="why-item">
                <span className="why-icon">{w.icon}</span>
                <div className="why-label">{w.label}</div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/contact" className="btn-primary">Check Your Area →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Is Your City on the List?</h2>
          <p className="cta-sub">
            Reach out and we&apos;ll confirm availability in your area — usually within a
            few hours.
          </p>
          <Link href="/contact" className="btn-primary btn-large">
            Get a Free Machine Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
