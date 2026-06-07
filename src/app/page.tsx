import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
  description:
    "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities. Local, fresh, free to your property.",
  keywords:
    "vending, smart cooler, micro market, DFW vending, Collin County vending, apartment vending, hotel vending, Plano vending, Frisco vending, Wylie vending",
  openGraph: {
    title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    description:
      "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities. Fresh, reliable, local.",
    url: "https://www.jkbvending.com",
    siteName: "J-K-B Vending",
    locale: "en_US",
    type: "website",
  },
};

const testimonials = [
  {
    quote:
      "The machine and convenience of being onsite saves me a trip to the store. I get what I want here and even cheaper than the grocery store.",
    name: "Lisa",
    role: "Apartment Resident",
    initial: "L",
  },
  {
    quote:
      "When you're hungry at 1 AM and want a quick snack, it's nice coming downstairs to get fresh options and not having to leave my apartment complex.",
    name: "Jackie",
    role: "Apartment Resident",
    initial: "J",
  },
  {
    quote:
      "With pool season coming up, it's nice to have this onsite at my apartment. I can get cold food and drinks while laying by the pool.",
    name: "Preston",
    role: "Apartment Resident",
    initial: "P",
  },
];

const whoWeServe = [
  {
    icon: "🏢",
    title: "Offices & Businesses",
    description:
      "Keep your team fueled without lifting a finger. Smart coolers and micro markets for teams of any size.",
  },
  {
    icon: "🏠",
    title: "Apartment Communities",
    description:
      "A premium amenity your residents will actually use — and rave about. Perfect for lobbies and common areas.",
  },
  {
    icon: "🏨",
    title: "Hotels & Extended Stay",
    description:
      "24/7 fresh food and drinks for guests without the overhead of a full food service operation.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical",
    description:
      "Reliable service for staff, patients, and visitors. We keep your machine stocked so you can focus on care.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Industrial",
    description:
      "High-volume restocking built around your shift schedule. Zero downtime, zero hassle.",
  },
  {
    icon: "🏫",
    title: "Schools & Institutions",
    description:
      "Fresh, healthy options for staff and students. We curate products that fit your community's needs.",
  },
];

const services = [
  {
    icon: "🧊",
    title: "Smart Coolers",
    description:
      "AI-powered coolers that track inventory in real time. Perfect for 15–75 person teams or any property with steady foot traffic. No cost to you.",
  },
  {
    icon: "🏪",
    title: "Micro Markets",
    description:
      "Open-concept self-serve markets with 100+ SKUs of snacks, drinks, and fresh food. Ideal for 75+ employees or large apartment communities.",
  },
  {
    icon: "☕",
    title: "Pantry Service",
    description:
      "We stock your break room shelves with snacks and beverages so your team or residents never run out.",
  },
];

const cities = [
  "Wylie", "Plano", "Frisco", "Richardson",
  "McKinney", "Allen", "Garland", "Collin County",
  "Rockwall", "Sachse",
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">Family Owned and Operated · Est. 2025</div>
          <h1 className="hero-headline">
            Fresh Food &amp; Drinks,<br />Right Where People Need Them.
          </h1>
          <p className="hero-sub">
            J-K-B Vending brings smart coolers and micro markets to DFW offices,
            apartment communities, hotels, healthcare facilities, and more —
            fully stocked, locally serviced, and always free to your property.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Get a Free Machine →
            </Link>
            <Link href="/services" className="btn-secondary">
              See Our Services
            </Link>
          </div>
          <div className="hero-tiles">
            {[
              { value: "🏢", label: "Offices & Workplaces" },
              { value: "🏠", label: "Apartment Communities" },
              { value: "🏨", label: "Hotels & Extended Stay" },
              { value: "🏥", label: "Healthcare Facilities" },
            ].map((s) => (
              <div key={s.label} className="hero-tile">
                <span className="hero-tile-icon">{s.value}</span>
                <span className="hero-tile-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART COOLER VIDEO */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">See It In Action</p>
          <h2 className="section-title">What Is a Smart Cooler?</h2>
          <p className="section-sub">
            See exactly how our smart coolers work — and why DFW properties love them.
          </p>
          <div className="video-wrap">
            <video src="/hahademo.mp4" controls playsInline className="demo-video" />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Who We Serve</p>
          <h2 className="section-title">The Right Solution for Every Property</h2>
          <p className="section-sub">
            Whether you manage a corporate office, an apartment community, a hotel,
            or a healthcare facility — we have a solution that fits your space and your people.
          </p>
          <div className="grid-3">
            {whoWeServe.map((item) => (
              <div key={item.title} className="card">
                <span className="card-icon">{item.icon}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/contact" className="btn-primary">
              Check Availability for Your Property →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">What People Are Saying</p>
          <h2 className="section-title">Real People. Real Results.</h2>
          <p className="section-sub">
            Heard from residents at our active apartment locations in DFW.
          </p>
          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Break Room &amp; Amenity Solutions</h2>
          <div className="grid-3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <span className="card-icon">{s.icon}</span>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY JKB */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">Why J-K-B</p>
          <h2 className="section-title">We&apos;re Not a National Chain. We&apos;re Your Neighbors.</h2>
          <p className="section-body">
            John and Kayla founded J-K-B Vending right here in Wylie, TX. With 25+ years of
            H-E-B grocery retail experience, we know food, we know freshness, and we know what
            it takes to keep any property stocked with products people actually want — whether
            that&apos;s an office break room, an apartment lobby, or a hotel corridor.
          </p>
          <p className="section-body">
            When you call us, you get us — not a call center in another state. We service our
            own machines, we know our accounts by name, and we treat every placement like
            it&apos;s our own property.
          </p>
          <Link href="/about" className="btn-outline">Meet John &amp; Kayla →</Link>
          <div className="why-grid">
            {[
              { icon: "🏠", label: "Locally Owned", desc: "Based in Wylie, TX. We live and work in DFW." },
              { icon: "🛒", label: "Grocery Expertise", desc: "H-E-B veterans. We know product curation." },
              { icon: "⚡", label: "Fast Service", desc: "Same-day response. No national wait times." },
              { icon: "🤝", label: "No Long Contracts", desc: "30-day agreement. We earn your business monthly." },
            ].map((w) => (
              <div key={w.label} className="why-item">
                <span className="why-icon">{w.icon}</span>
                <div>
                  <div className="why-label">{w.label}</div>
                  <div className="why-desc">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Service Area</p>
          <h2 className="section-title">Proudly Serving DFW</h2>
          <p className="section-sub">
            We cover the full DFW Metroplex with a focus on Collin County and surrounding cities.
          </p>
          <div className="city-grid">
            {cities.map((c) => (
              <span key={c} className="city-tag">📍 {c}</span>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/locations" className="btn-outline">See Full Service Area</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Upgrade Your Property?</h2>
          <p className="cta-sub">
            We&apos;ll assess your space, recommend the right solution, and handle everything —
            at no cost to your property.
          </p>
          <Link href="/contact" className="btn-primary btn-large">
            Get a Free Machine Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
