import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-cream-50 py-32">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionEyebrow>404 · Page not found</SectionEyebrow>
          <h1 className="mt-6 font-display text-[56px] font-medium leading-[1.05] tracking-tight text-blue-900 md:text-[80px]">
            This page has
            <br />
            <span className="italic text-gold-500">gone to pasture.</span>
          </h1>
          <p className="mt-7 max-w-[480px] text-[17px] leading-relaxed text-ink-600">
            The page you were looking for isn't here — it may have moved, or
            the link may be wrong. Try one of the routes below, or head back
            home.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {[
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Achievements", "/achievements"],
              ["Find Parlour", "/find-parlour"],
              ["Contact", "/contact"],
              ["Terms", "/terms"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="group inline-flex items-center gap-2 text-[14px] text-blue-900 hover:text-gold-500"
              >
                <span className="h-px w-5 bg-gold-500 transition-all group-hover:w-8" />
                {label}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="font-display text-[200px] font-medium italic leading-none text-blue-900/10">
            404
          </div>
        </div>
      </div>
    </section>
  );
}
