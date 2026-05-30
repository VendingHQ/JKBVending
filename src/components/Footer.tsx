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
              <a href="mailto:john@jkbvending.com" className="hover:text-white transition-colors">
                john@jkbvending.com
              </a>
            </li>
            <li>Wylie, TX — Serving all of DFW</li>
            <li className="pt-2">
              <a href="https://www.instagram.com/jkbvending" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @jkbvending on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 py-5 text-center text-xs text-green-500">
        © {new Date().getFullYear()} J-K-B Vending. All rights reserved. · Wylie, TX
      </div>
    </footer>
  );
}
