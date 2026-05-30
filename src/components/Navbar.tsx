"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-[#1B5E20]">J-K-B</span>
          <span className="text-sm font-light tracking-[0.2em] text-[#2E7D32] uppercase">Vending</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/locations", label: "Locations" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-[#2E7D32] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1B5E20] transition-colors">
            Get a Free Machine
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/locations", label: "Locations" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#2E7D32]" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-[#2E7D32] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#1B5E20] transition-colors" onClick={() => setOpen(false)}>
            Get a Free Machine
          </Link>
        </div>
      )}
    </nav>
  );
}
