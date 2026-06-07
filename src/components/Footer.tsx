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
              <Image
                src="/logo.png"
                alt="J-K-B Vending Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-green-100 text-sm hover:text-white transition"
                >
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
            
              href="https://www.instagram.com/jkbvending"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
            >
              📸 @jkbvending
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
