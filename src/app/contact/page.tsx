"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    employees: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", email: "", phone: "", city: "", employees: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-[#1B5E20] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4 block">Get Started</span>
          <h1 className="text-5xl font-bold text-white mb-5">Get a Free Machine for Your Business</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Tell us about your team and we'll recommend the right solution. No cost. No pressure. No long-term contract.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Business</h2>
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-2">We'll be in touch soon!</h3>
                <p className="text-green-700 text-sm">John or Kayla will reach out within 1 business day to discuss the best solution for your team.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Your Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Company *</label>
                    <input type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors" placeholder="Acme Corp" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors" placeholder="(214) 555-0100" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">City</label>
                    <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors" placeholder="Plano, TX" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Employees on Site</label>
                    <select value={form.employees} onChange={(e) => setForm({ ...form, employees: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors bg-white">
                      <option value="">Select range</option>
                      <option value="15-30">15–30</option>
                      <option value="30-75">30–75</option>
                      <option value="75-150">75–150</option>
                      <option value="150+">150+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Anything else?</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2E7D32] transition-colors resize-none" placeholder="Tell us about your current vending situation, what you're looking for, etc." />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please email us at john@jkbvending.com</p>
                )}
                <button onClick={handleSubmit} disabled={status === "loading" || !form.name || !form.email || !form.company} className="w-full bg-[#2E7D32] text-white font-bold py-4 rounded-full hover:bg-[#1B5E20] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                  {status === "loading" ? "Sending..." : "Get a Free Machine →"}
                </button>
                <p className="text-xs text-gray-400 text-center">We'll respond within 1 business day. No spam, ever.</p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer to reach out directly?</h3>
              <div className="space-y-4">
                <a href="mailto:john@jkbvending.com" className="flex items-center gap-4 p-4 bg-[#F9FBF9] rounded-2xl border border-gray-100 hover:border-[#2E7D32] transition-colors">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</div>
                    <div className="text-sm font-medium text-gray-800">john@jkbvending.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-[#F9FBF9] rounded-2xl border border-gray-100">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Based In</div>
                    <div className="text-sm font-medium text-gray-800">Wylie, TX — Serving all of DFW</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1B5E20] rounded-3xl p-8 text-white">
              <h4 className="font-bold text-lg mb-3">What happens next?</h4>
              <ol className="space-y-3 text-sm text-green-200">
                {[
                  "We review your submission and reach out within 1 business day",
                  "We assess your space and recommend the right solution",
                  "We handle delivery, setup, and first stock — completely free",
                  "You enjoy a fully stocked break room. We handle the rest.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-white/20 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
