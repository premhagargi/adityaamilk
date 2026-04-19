import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import SectionEyebrow from "@/components/SectionEyebrow";
import ProductCard from "@/components/ProductCard";
import { products, achievements } from "@/lib/data";
import {
  ShieldCheck,
  Award,
  Factory,
  MapPin,
  Search,
  ArrowRight,
} from "lucide-react";

const trustPoints = [
  "ISO 22000:2005",
  "FSSAI Certified",
  "Est. Belagavi, Karnataka",
  "21-stage Quality Testing",
];

const qualityChain = [
  { label: "Farmer", body: "Morning milk collected from partnered village farmers." },
  { label: "Collection", body: "Village centres, weighed, fat-tested, chilled under 4°C." },
  { label: "Chilling", body: "Bulk coolers hold milk within spec before transit." },
  { label: "21 QC Tests", body: "Every batch clears a 21-point lab protocol, daily." },
  { label: "Consumer", body: "Packed on Swedish lines, dispatched cold, delivered fresh." },
];

export default function HomePage() {
  const featured = products.filter((p) =>
    ["full-cream-milk", "curd", "paneer", "ghee"].includes(p.slug)
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-50">
        <div className="container-x grid min-h-[88vh] grid-cols-1 items-center gap-12 py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionEyebrow>Since 1994 · Belagavi</SectionEyebrow>
            <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.05] tracking-tight text-blue-900 md:text-[64px]">
              Taste that comes with the{" "}
              <span className="italic text-gold-500">trust of quality.</span>
            </h1>
            <p className="mt-7 max-w-[480px] text-[17px] leading-relaxed text-ink-600">
              Adityaa Milk is a brand of Vijaykant Dairy and Food Products
              Limited — a Karnataka dairy built beside the Malaprabha, run on
              imported Swedish and Italian precision, and measured every day by
              a single standard: Quality, Health and Hygiene.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative">
            <Placeholder
              label="Milk pour, studio"
              caption="Full-bleed hero · warm daylight"
              ratio="5/4"
              tone="mixed"
              className="shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg border border-gold-500/30 bg-cream-50 px-4 py-3 shadow-soft">
              <Factory size={18} className="text-gold-500" strokeWidth={1.5} />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-blue-900">
                  Imported machinery
                </div>
                <div className="text-[12px] text-ink-600">
                  Sweden &amp; Italy — best in class
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-line bg-cream-200/50">
          <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-[13px] text-blue-900">
            {trustPoints.map((t, i) => (
              <div key={t} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-500" />}
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="bg-cream-50 py-28">
        <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Our Heritage</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] font-medium leading-tight text-blue-900">
              Built beside the Malaprabha,
              <br />
              run on imported precision.
            </h2>
            <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-ink-600">
              <p>
                Adityaa Milk is rolled out of Vijaykant Dairy &amp; Food Products
                Ltd., situated in Belagavi, Karnataka, besides river Malaprabha.
                Vijaykant Dairy is into manufacturing and marketing of premium
                quality dairy products.
              </p>
              <p>
                The company insists on honesty, integrity and faith in all
                aspects of its business — from the farmer who collects at dawn
                to the consumer who opens the pack.
              </p>
            </div>
            <Link
              href="/about"
              className="link-underline mt-8 inline-flex font-medium"
            >
              Read the full story <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative">
            <Placeholder
              label="Factory · Neginhal"
              caption="Tetra Pak line, warm light"
              ratio="5/4"
              tone="blue"
            />
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="flex items-center gap-3 rotate-90 origin-right whitespace-nowrap">
                <span className="h-px w-10 bg-gold-500" />
                <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-blue-900">
                  Belagavi · 1994
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="bg-cream-100 py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Our Range</SectionEyebrow>
              <h2 className="mt-5 max-w-[560px] font-display text-[38px] font-medium leading-tight text-blue-900">
                A range made for every Indian kitchen.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] text-ink-600">
              From everyday toned milk to slow-reduced ghee and Mysore Pak —
              thirteen products, one standard.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/products" className="btn-secondary">
              See all 13 products
            </Link>
          </div>
        </div>
      </section>

      {/* QUALITY CHAIN */}
      <section className="bg-cream-50 py-28">
        <div className="container-x">
          <div className="max-w-prose">
            <SectionEyebrow>Farmer to Consumer</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] font-medium leading-tight text-blue-900">
              A short, well-watched journey.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
              Every drop of Adityaa milk passes through five tightly controlled
              stages and 21 laboratory tests before it reaches your fridge.
            </p>
          </div>

          <div className="relative mt-16">
            {/* dashed connector */}
            <div className="absolute left-0 right-0 top-7 hidden h-px border-t border-dashed border-gold-500/40 md:block" />
            <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
              {qualityChain.map((step, i) => (
                <div key={step.label} className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/50 bg-cream-50 font-display text-lg text-blue-900">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-display text-[18px] font-medium text-blue-900">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS TEASER */}
      <section className="relative overflow-hidden bg-blue-900 py-28 text-cream-50">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #F6EBC8 0%, transparent 60%), radial-gradient(circle at 80% 80%, #F6EBC8 0%, transparent 60%)",
          }}
        />
        <div className="container-x relative">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionEyebrow tone="dark">Recognition</SectionEyebrow>
              <h2 className="mt-5 font-display text-[38px] font-medium leading-tight">
                Noticed by the ones that matter.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] text-cream-50/70">
              Awards are a by-product of the daily discipline — we're proud of
              the nods, but prouder of what earned them.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {achievements.slice(0, 3).map((a) => (
              <div
                key={a.title}
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-7 transition-all duration-200 ease-premium hover:-translate-y-[2px] hover:border-gold-500/40 hover:bg-white/[0.07]"
              >
                <Award size={22} className="text-gold-400" strokeWidth={1.5} />
                <div className="mt-4 font-display text-[14px] italic text-gold-400">
                  {a.year}
                </div>
                <h3 className="mt-1 font-display text-[20px] font-medium text-cream-50">
                  {a.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-cream-50/70">
                  {a.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-gold-400 transition-colors hover:text-gold-500"
            >
              See all achievements <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FIND PARLOUR TEASER */}
      <section className="bg-cream-50 py-28">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[360px]">
              {/* stylised karnataka outline */}
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <path
                  d="M40 40 L160 50 L170 90 L150 130 L170 160 L120 170 L80 160 L50 140 L30 100 Z"
                  fill="#F8F5ED"
                  stroke="#0A2540"
                  strokeWidth="1.2"
                />
                <circle cx="70" cy="80" r="5" fill="#C9A227" />
                <circle cx="70" cy="80" r="10" fill="none" stroke="#C9A227" strokeOpacity="0.4" />
                <text
                  x="80"
                  y="84"
                  fontSize="9"
                  fill="#0A2540"
                  fontWeight="600"
                >
                  Belagavi
                </text>
              </svg>
            </div>
          </div>
          <div>
            <SectionEyebrow>Find A Parlour</SectionEyebrow>
            <h2 className="mt-5 font-display text-[38px] font-medium leading-tight text-blue-900">
              Find Adityaa near you.
            </h2>
            <p className="mt-4 max-w-[420px] text-[16px] leading-relaxed text-ink-600">
              600+ retail touchpoints across North Karnataka — parlours, retail
              shelves and institutional partners.
            </p>
            <form className="mt-8 flex max-w-md overflow-hidden rounded-lg border border-line bg-white shadow-soft">
              <div className="flex items-center pl-4 text-ink-400">
                <MapPin size={16} />
              </div>
              <input
                type="text"
                placeholder="Enter pincode or city"
                className="flex-1 bg-transparent px-3 py-3 text-[15px] focus:outline-none"
              />
              <Link
                href="/find-parlour"
                className="flex items-center gap-2 bg-blue-900 px-5 text-[14px] font-medium text-white"
              >
                <Search size={16} />
                Find parlour
              </Link>
            </form>
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="bg-cream-200 py-24">
        <div className="container-x text-center">
          <SectionEyebrow>Work with Us</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-[720px] font-display text-[40px] font-medium leading-tight text-blue-900">
            Partner with a dairy that takes quality personally.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-ink-600">
            Dealerships, institutional supply, retail chains — we'd love to
            hear from you. Call us or drop a note and we'll respond within a
            business day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link href="/contact" className="btn-primary">
              Enquire Now
            </Link>
            <a
              href="tel:+919900255556"
              className="font-display text-[22px] text-blue-900 underline decoration-gold-500 decoration-2 underline-offset-8"
            >
              +91 99002 55556
            </a>
          </div>
          <div className="mt-14 inline-flex items-center gap-2 text-[13px] text-ink-600">
            <ShieldCheck size={14} className="text-gold-500" /> Trusted across
            Karnataka since 1994
          </div>
        </div>
      </section>
    </>
  );
}
