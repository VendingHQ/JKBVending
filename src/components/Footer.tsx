import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold tracking-tight">J-K-B</span>
            <span className="text-sm font-light tracking-[0.2em] uppercase text-green-300">Vending</span>
          </div>
          <p className="text-green-200 text-sm leading-relaxed">
            Family-owned. DFW local.<br />
            Smart coolers & micro markets<br />
            for businesses across North Texas.
          </p>
          <div className="flex gap-4 mt-4">
            
              href="https://www.instagram.com/jkbvending"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            
              href="tel:9725899165"
              className="text-green-300 hover:text-white transition-colors"
              aria-label="Call us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.18 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">Navigate</h4>
          <ul className="space-y-2">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/locations", label: "Locations" },
              { href: "/contact", label: "Get a Free Machine" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-green-200 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li>
              <a href="tel:9725899165" className="hover:text-white transition-colors">
                (972) 589-9165
              </a>
            </li>
            <li>
              <a href="mailto:john@jkbvending.com" className="hover:text-white transition-colors">
                john@jkbvending.com
              </a>
            </li>
            <li>Wylie, TX — Serving all of DFW</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 py-5 text-center text-xs text-green-500">
        © {new Date().getFullYear()} J-K-B Vending. All rights reserved. · Wylie, TX
      </div>
    </footer>
  );
}
