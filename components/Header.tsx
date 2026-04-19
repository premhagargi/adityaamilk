"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/achievements", label: "Achievements" },
  { href: "/find-parlour", label: "Find Parlour" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-cream-50/90 backdrop-blur-md transition-all duration-200 ease-premium ${
        scrolled ? "h-[72px] border-b border-line shadow-soft" : "h-[88px]"
      }`}
    >
      <div className="container-x flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900">
            <span className="font-display text-lg italic text-gold-400">A</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-medium tracking-tight text-blue-900">
              Adityaa Milk
            </span>
            <span className="hidden h-5 w-px bg-line md:block" />
            <span className="hidden text-[10.5px] font-semibold uppercase tracking-eyebrow text-gold-500 md:block">
              Quality · Health · Hygiene
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group relative text-[15px] font-medium text-blue-900"
            >
              {n.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-200 ease-premium group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919900255556"
            className="hidden items-center gap-2 text-[14px] text-blue-900 lg:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <Phone size={14} strokeWidth={1.5} />
            +91 99002 55556
          </a>
          <Link href="/contact" className="btn-primary hidden lg:inline-flex">
            Enquire Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-blue-900 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="absolute left-0 top-full h-screen w-full bg-cream-50 lg:hidden">
          <div className="container-x flex h-full flex-col justify-between py-10">
            <nav className="flex flex-col gap-6">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-medium text-blue-900"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 pb-20">
              <a
                href="tel:+919900255556"
                className="flex items-center gap-2 text-blue-900"
              >
                <Phone size={16} /> +91 99002 55556
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
