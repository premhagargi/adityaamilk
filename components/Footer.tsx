import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white/80">
      <div className="container-x grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/adityaalogo.png"
              alt="Adityaa Milk"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-xl text-white">Adityaa Milk</span>
          </div>
          <p className="mt-5 max-w-[260px] text-[14px] leading-relaxed">
            A brand of Vijaykant Dairy and Food Products Limited. Premium dairy,
            built beside the Malaprabha since 1994.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-xs border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-gold-400">
              ISO 22000:2005
            </span>
            <span className="rounded-xs border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-gold-400">
              FSSAI · 10013043000577
            </span>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-400">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-[14px]">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Achievements", "/achievements"],
              ["Find Parlour", "/find-parlour"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-gold-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Addresses */}
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-400">
            Find Us
          </h4>
          <div className="mt-5 space-y-5 text-[13px] leading-relaxed">
            <div className="flex gap-3">
              <MapPin size={14} className="mt-1 flex-none text-gold-400" />
              <div>
                <div className="font-medium text-white">Corporate Office</div>
                LIG 159, Mahantesh Nagar,<br />
                Belagavi – 590016, Karnataka
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={14} className="mt-1 flex-none text-gold-400" />
              <div>
                <div className="font-medium text-white">Factory</div>
                Neginhal Village, Bailhongal Taluk,<br />
                Dist. Belagavi – 591102, Karnataka
              </div>
            </div>
          </div>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-400">
            Get in Touch
          </h4>
          <div className="mt-5 space-y-3 text-[14px]">
            <a
              href="tel:+919900255556"
              className="flex items-center gap-2 transition-colors hover:text-gold-400"
            >
              <Phone size={14} className="text-gold-400" /> +91 99002 55556
            </a>
            <a
              href="mailto:info@adityaamilk.com"
              className="flex items-center gap-2 transition-colors hover:text-gold-400"
            >
              <Mail size={14} className="text-gold-400" /> info@adityaamilk.com
            </a>
          </div>

          <div className="mt-8">
            <div className="text-[12px] text-white/60">
              Dealership & B2B enquiries
            </div>
            <form className="mt-2 flex items-center gap-2 border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-[14px] text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="text-gold-400 transition-transform hover:translate-x-1"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Gold hairline */}
      <div className="mx-auto h-px max-w-content bg-gold-500/30" />

      <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-[12px] text-white/60 md:flex-row md:items-center">
        <div>
          © {new Date().getFullYear()} Vijaykant Dairy and Food Products Limited.
          All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-gold-400">
            Terms &amp; Conditions
          </Link>
          <Link href="/terms" className="hover:text-gold-400">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
