"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import { products } from "@/lib/data";

const categories = ["All", "Milk", "Curd & Cultured", "Sweets", "Fats"] as const;

export default function ProductsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-cream-50 py-20">
        <div className="container-x">
          <SectionEyebrow>Our Products</SectionEyebrow>
          <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h1 className="max-w-[640px] font-display text-[48px] font-medium leading-tight text-blue-900">
              Thirteen everyday essentials, measured to one standard.
            </h1>
            <p className="max-w-sm text-[16px] leading-relaxed text-ink-600">
              From the first pour of morning milk to slow-reduced khoa, each
              Adityaa product is made the same way it was a decade ago — just
              with better machines.
            </p>
          </div>

          {/* Category filter */}
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`inline-flex h-10 items-center rounded-full border px-5 text-[14px] font-medium transition-all duration-200 ease-premium ${
                    isActive
                      ? "border-blue-900 bg-blue-900 text-white"
                      : "border-line bg-white text-blue-900 hover:border-gold-500"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-grid pull quote */}
      <section className="bg-cream-100 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-[780px] text-center">
            <SectionEyebrow>On Sourcing</SectionEyebrow>
            <blockquote className="mt-6 font-display text-[28px] italic leading-snug text-blue-900 md:text-[34px]">
              "We only buy milk we would happily give our own family. If a
              collection doesn't pass the fat, SNF and antibiotic screen at the
              gate, it goes back on the truck."
            </blockquote>
            <div className="mt-5 text-[13px] font-semibold uppercase tracking-eyebrow text-gold-500">
              — Quality Control Lead, Neginhal
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-50 py-24">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-[640px] font-display text-[32px] font-medium leading-tight text-blue-900">
            Need a specific product for institutional supply?
          </h2>
          <p className="max-w-[480px] text-[15px] leading-relaxed text-ink-600">
            We work with hotels, sweet shops, ice-cream brands and HORECA
            buyers. Tell us your volumes — we'll reply with specs and pricing.
          </p>
          <Link href="/contact" className="btn-primary">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
