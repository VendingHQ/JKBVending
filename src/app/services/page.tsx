import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | J-K-B Vending | Smart Coolers & Micro Markets DFW",
  description:
    "Smart coolers, micro markets, and pantry service for DFW offices, apartment communities, hotels, and healthcare facilities. Free placement, local service, no long contracts.",
  openGraph: {
    title: "Services | J-K-B Vending",
    description:
      "Smart coolers, micro markets, and pantry service for DFW offices, apartment communities, hotels, and more.",
    url: "https://www.jkbvending.com/services",
    siteName: "J-K-B Vending",
    type: "website",
  },
};

const services = [
  {
    icon: "🧊",
    tag: "Best for 15–75 people or any steady-traffic property",
    title: "Smart Coolers",
    description:
      "Our smart coolers are the perfect solution for small-to-mid size teams and residential common areas. Sleek, modern, and stocked with products your employees or residents actually want — curated by our H-E-B grocery veterans.",
    bestFor: [
      "Office break rooms (15–75 employees)",
      "Apartment lobbies & clubhouses",
      "Hotel corridors & common areas",
      "Healthcare waiting rooms",
      "Fitness centers & gyms",
    ],
    features: [
      "AI-powered inventory tracking",
      "Beverages, snacks & fresh food",
      "Cashless & mobile payment",
      "Real-time remote monitoring",
      "Free installation & restocking",
      "HAHA Innovation machines",
    ],
  },
  {
    icon: "🏪",
    tag: "Best for 75+ employees or large residential communities",
    title: "Micro Markets",
    description:
      "Transform your break room or amenity space into a full self-serve market. Your employees or residents get the convenience of a corner store without leaving the building — and it's completely free to your property.",
    bestFor: [
      "Large offices (75+ employees)",
      "Large apartment complexes",
      "Extended-stay hotels",
      "Corporate campuses",
      "Manufacturing & industrial facilities",
    ],
    features: [
      "100+ SKU open-concept market",
      "Fresh food, snacks & beverages",
      "Self-checkout kiosk",
      "Loyalty & rewards programs",
      "Free setup & management",
      "Custom product selection",
    ],
  },
  {
    icon: "☕",
    tag: "Great for any size team or property",
    title: "Pantry Service",
    description:
      "Keep your team or residents fueled without the overhead. We stock and manage your break room pantry or common area shelving on a regular schedule so you never have to think about it.",
    bestFor: [
      "Small offices & teams",
      "Property management offices",
      "Boutique hotels",
      "Community rooms & clubhouses",
      "Any space without room for a full machine",
    ],
    features: [
      "Stocked open shelving",
      "Coffee, snacks & drinks",
      "Weekly restocking visits",
      "Custom product mix",
      "No machine required",
      "Flexible billing options",
    ],
  },
];

const propertyTypes = [
  { icon: "🏢", label: "Offices & Businesses" },
  { icon: "🏠", label: "Apartment Communities" },
  { icon: "🏨", label: "Hotels & Extended Stay" },
  { icon: "🏥", label: "Healthcare & Medical" },
  { icon: "🏭", label: "Manufacturing & Industrial" },
  { icon: "🏫", label: "Schools & Institutions" },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow">Our Services</p>
          <h1 className="page-title">The Right Solution for Every Property</h1>
          <p className="page-sub">
            From a single smart cooler in an apartment lobby to a full micro market on a
            corporate campus — we match your property to the right solution, then handle
            everything else.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE STRIP */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">Who We Serve</p>
          <h2 className="section-title">We Serve More Than Just Offices</h2>
          <p className="section-sub">
            J-K-B Vending serves a wide range of properties across DFW —
            anywhere people need fresh food and drinks on demand.
          </p>
          <div className="property-grid">
            {propertyTypes.map((p) => (
              <div key={p.label} className="property-tag">
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      {services.map((s, i) => (
        <section
          key={s.title}
          className={`section service-section ${i % 2 === 0 ? "" : "section-alt"}`}
        >
          <div className="container">
            <div className="service-layout">
              <div className="service-info">
                <span className="service-icon">{s.icon}</span>
                <p className="service-tag">{s.tag}</p>
                <h2 className="service-title">{s.title}</h2>
                <p className="service-desc">{s.description}</p>
                <div className="service-best-for">
                  <h4>Best For:</h4>
                  <ul>
                    {s.bestFor.map((b) => (
                      <li key={b}>✓ {b}</li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary">Get Started →</Link>
              </div>
              <div className="service-features">
                <h4>What&apos;s Included:</h4>
                {s.features.map((f) => (
                  <div key={f} className="feature-row">
                    <span className="feature-check">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* BOTTOM CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Not Sure Which Is Right for You?</h2>
          <p className="cta-sub">
            Tell us about your property and we&apos;ll recommend the perfect solution —
            no pressure, no long-term commitment.
          </p>
          <Link href="/contact" className="btn-primary btn-large">
            Get a Free Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
