import Link from "next/link";

const services = [
  {
    icon: "🧊",
    title: "Smart Coolers",
    desc: "AI-powered coolers that track inventory in real time. Perfect for 15–75 person teams. No cost to your business.",
  },
  {
    icon: "🏪",
    title: "Micro Markets",
    desc: "Open-concept self-serve markets with 100+ SKUs of snacks, drinks, and fresh food. Ideal for 75+ employees.",
  },
  {
    icon: "☕",
    title: "Pantry Service",
    desc: "We stock your break room shelves with snacks and beverages so your team never runs out.",
  },
];

const stats = [
  { value: "15–75", label: "Employees for Smart Cooler" },
  { value: "75+", label: "Employees for Micro Market" },
  { value: "24hr", label: "Service Response" },
  { value: "100%", label: "No Cost to Your Business" },
];

const locations = [
  "Wylie", "Plano", "Frisco", "Richardson", "McKinney",
  "Allen", "Garland", "Collin County", "Rockwall", "Sachse",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[#1B5E20] overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-green-200 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              🤝 Family-Owned · DFW Local
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 text-balance">
              Your Team Deserves a Better{" "}
              <span className="text-[#66BB6A]">Break Room.</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg">
              J-K-B Vending brings smart coolers and micro markets to DFW businesses — fully stocked, locally serviced, and always free to your company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-[#1B5E20] font-bold text-base px-8 py-4 rounded-full hover:bg-green-50 transition-colors text-center shadow-lg">
                Get a Free Machine →
              </Link>
              <Link href="/services" className="border border-white/40 text-white font-medium text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-center">
                See Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
              <div className="text-5xl mb-4">🧊</div>
              <h3 className="text-xl font-bold mb-2">Smart Cooler Placement</h3>
              <p className="text-green-200 text-sm leading-relaxed mb-6">
                We handle delivery, setup, stocking, and service. You just enjoy happy employees.
              </p>
              <div className="space-y-3">
                {["Free installation & setup", "Cashless payment ready", "Real-time inventory monitoring", "Local same-day service"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <span className="text-[#66BB6A] font-bold">✓</span>
                    <span className="text-green-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-6 block bg-[#66BB6A] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#43A047] transition-colors text-center">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-[#1B5E20] mb-1">{s.value}</div>
              <div className="text-xs text-gray-500 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2E7D32] mb-3 block">See It In Action</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Is a Smart Cooler?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See exactly how our smart coolers work — and why DFW businesses love them.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              <source src="/hahademo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F9FBF9] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2E7D32] mb-3 block">What People Are Saying</span>
            <h2 className="text-4xl font-bold text-gray-900">Real People. Real Results.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The machine and convenience of being onsite, saves me a trip to the store. I get what I want here and even cheaper than the grocery store.",
                name: "Lisa",
                title: "Resident",
              },
              {
                quote: "When you're hungry at 1 AM and want a quick snack, it's nice coming downstairs to get fresh options and not having to leave my apartment complex.",
                name: "Jackie",
                title: "Resident",
              },
              {
                quote: "With pool season coming up, it's nice to have this onsite at my apartment.  I can get cold food and drinks while laying by the pool.",
                name: "Preston",
                title: "Resident",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[#2E7D32] text-3xl mb-4">"</div>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.title}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F9FBF9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2E7D32] mb-3 block">What We Offer</span>
            <h2 className="text-4xl font-bold text-gray-900">Break Room Solutions for Every Business</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block border border-[#2E7D32] text-[#2E7D32] font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#2E7D32] hover:text-white transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY JKB */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2E7D32] mb-3 block">Why J-K-B</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
              We're Not a National Chain. We're Your Neighbors.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              John and Kayla founded J-K-B Vending right here in Wylie, TX. With years of H-E-B grocery retail experience, we know food, we know freshness, and we know what it takes to keep a break room stocked with products people actually want.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              When you call us, you get us — not a call center in another state. We service our own machines, we know our accounts by name, and we treat every placement like it's our own break room.
            </p>
            <Link href="/about" className="inline-block bg-[#2E7D32] text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-[#1B5E20] transition-colors">
              Meet John & Kayla →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏠", title: "Locally Owned", desc: "Based in Wylie, TX. We live and work in DFW." },
              { icon: "🛒", title: "Grocery Expertise", desc: "H-E-B veterans. We know product curation." },
              { icon: "⚡", title: "Fast Service", desc: "Same-day response. No national wait times." },
              { icon: "🤝", title: "No Contracts", desc: "30-day agreement. We earn your business monthly." },
            ].map((item) => (
              <div key={item.title} className="bg-[#F9FBF9] rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#1B5E20] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-3 block">Service Area</span>
          <h2 className="text-3xl font-bold text-white mb-4">Proudly Serving DFW</h2>
          <p className="text-green-200 mb-10 max-w-xl mx-auto text-sm">
            We cover the full DFW Metroplex with a focus on Collin County and the surrounding cities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <span key={loc} className="bg-white/10 border border-white/20 text-green-100 text-sm font-medium px-5 py-2 rounded-full">
                📍 {loc}
              </span>
            ))}
          </div>
          <Link href="/locations" className="mt-10 inline-block bg-white text-[#1B5E20] font-bold text-sm px-8 py-3 rounded-full hover:bg-green-50 transition-colors">
            See Full Service Area
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
            Ready to Upgrade Your Break Room?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            We'll assess your space, recommend the right solution, and handle everything — at no cost to your business.
          </p>
          <Link href="/contact" className="inline-block bg-[#2E7D32] text-white font-bold text-base px-10 py-4 rounded-full hover:bg-[#1B5E20] transition-colors shadow-lg">
            Get a Free Machine Today →
          </Link>
        </div>
      </section>
    </>
  );
}
