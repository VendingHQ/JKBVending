import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="J-K-B Vending Logo" width={36} height={36} className="rounded-lg" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-tight">J-K-B Vending</span>
                <span className="text-[10px] text-green-300 tracking-widest uppercase">Family-Owned · DFW Local</span>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Smart coolers and micro markets for DFW offices, apartment communities, hotels, and more. Always free to your property.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-green-300 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/locations", label: "Locations" },
                { href: "/contact", label: "Get a Free Machine" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-green-100 text-sm hover:text-white transition">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-green-300 mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:9725899165" className="text-green-100 text-sm hover:text-white transition">
                📞 (972) 589-9165
              </a>
              <a href="mailto:john@jkbvending.com" className="text-green-100 text-sm hover:text-white transition">
                ✉️ john@jkbvending.com
              </a>
              <p className="text-green-100 text-sm">📍 Wylie, TX — Serving DFW</p>
            </div>
            {/* Instagram */}
            
              href="https://www.instagram.com/jkbvending"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @jkbvending
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-200 text-xs">
            © {new Date().getFullYear()} J-K-B Vending. All rights reserved. · Wylie, TX
          </p>
          <p className="text-green-200 text-xs">
            Family-owned · Serving DFW since 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
