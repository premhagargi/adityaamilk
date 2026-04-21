"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

const nav = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/achievements", label: "Achievements" },
  { href: "/find-parlour", label: "Find Parlour" },
  { href: "/investor-desk", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

function isActive(current: string, href: string) {
  if (href === "/") return current === "/";
  return current === href || current.startsWith(href + "/");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Stop/start Lenis while mobile menu is open (prevents background scroll)
  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [open, lenis]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-cream-50/90 backdrop-blur-md transition-all duration-200 ease-premium ${
        scrolled ? "h-[92px] border-b border-line shadow-soft" : "h-[112px]"
      }`}
    >
      <div className="container-x flex h-full items-center gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Adityaa Milk — Home"
        >
          <Image
            src="/images/adityaalogo.png"
            alt="Adityaa Milk"
            width={65}
            height={65}
            priority
            className="h-20 w-auto object-contain md:h-[84px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {nav.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`group relative whitespace-nowrap text-[14.5px] font-medium leading-none transition-colors ${
                  active ? "text-blue-900" : "text-blue-900/80 hover:text-blue-900"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-gold-500 transition-all duration-200 ease-premium ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 lg:gap-4">
          <a
            href="tel:+919900255556"
            className="hidden items-center gap-2 whitespace-nowrap text-[13.5px] leading-none text-blue-900 xl:flex"
          >
            <Phone size={13} strokeWidth={1.5} />
            +91 99002 55556
          </a>
          <Link
            href="/contact"
            className="btn-primary hidden whitespace-nowrap lg:inline-flex"
          >
            Enquire Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-blue-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="absolute left-0 top-full h-[calc(100vh-72px)] w-full overflow-y-auto bg-cream-50 lg:hidden"
        >
          <div className="container-x flex h-full flex-col justify-between py-10">
            <nav className="flex flex-col gap-6" aria-label="Mobile primary">
              {nav.map((n) => {
                const active = isActive(pathname, n.href);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`font-display text-2xl font-medium transition-colors ${
                      active
                        ? "text-blue-900"
                        : "text-blue-900/70 hover:text-blue-900"
                    }`}
                  >
                    <span
                      className={`inline-block h-[2px] align-middle bg-gold-500 transition-all mr-3 ${
                        active ? "w-6" : "w-0"
                      }`}
                    />
                    {n.label}
                  </Link>
                );
              })}
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
