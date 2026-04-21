import type { Metadata } from "next";
import Image from "next/image";
import Placeholder from "@/components/Placeholder";
import SectionEyebrow from "@/components/SectionEyebrow";
import { qcTests } from "@/lib/data";
import {
  Scale,
  Handshake,
  Sunrise,
  MapPin,
  Check,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Adityaa Milk is a brand of Vijaykant Dairy and Food Products Limited — built beside the Malaprabha in Belagavi, Karnataka. Imported Swedish and Italian machinery, 21-point quality protocol, ISO 22000:2005 and FSSAI certified.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us · Adityaa Milk",
    description:
      "A Karnataka dairy built on imported precision, a 21-point quality protocol, and three decades of honest work.",
    url: "/about",
  },
};

const principles = [
  {
    icon: Scale,
    name: "Honesty",
    body:
      "We measure what we make, and we say what we measure. Straight numbers, straight answers.",
  },
  {
    icon: Handshake,
    name: "Integrity",
    body:
      "The same standard for a 200ml pack or a 5,000-litre institutional order. No exceptions.",
  },
  {
    icon: Sunrise,
    name: "Faith",
    body:
      "In the farmers who deliver at dawn, in the families who trust our pack — a relationship rebuilt each day.",
  },
];

const chain = [
  {
    title: "Collection",
    body:
      "Morning and evening collection at partnered village centres, with on-the-spot fat and SNF readings.",
  },
  {
    title: "Chilling",
    body:
      "Bulk coolers drop milk below 4°C within minutes, locking in freshness before the road to Neginhal.",
  },
  {
    title: "Testing",
    body:
      "Every tanker unloads only after clearing our gate-level quality panel in the in-house lab.",
  },
  {
    title: "Processing",
    body:
      "Imported Swedish homogenisers and Italian separators handle the critical steps — precise, repeatable, boring in the best way.",
  },
  {
    title: "Packing",
    body:
      "Tetra Pak, pouch and bottle lines, operated in controlled, HACCP-compliant zones.",
  },
  {
    title: "Dispatch",
    body:
      "Reefer vehicles, route-planned deliveries, cold chain maintained until the last kilometre.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-50 py-20 md:py-24">
        <Image
          src="/images/sunmark-removebg-preview.png"
          alt=""
          width={500}
          height={250}
          aria-hidden
          className="pointer-events-none absolute -right-10 top-6 h-auto w-[180px] opacity-30 md:w-[260px]"
        />
        <div className="container-x relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionEyebrow>About Adityaa Milk</SectionEyebrow>
            <h1 className="mt-6 font-display text-[44px] font-medium leading-[1.1] tracking-tight text-blue-900 md:text-[56px]">
              Quality, Health and Hygiene —
              <br className="hidden md:block" />
              <span className="italic text-gold-500">
                not a slogan, a standard.
              </span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-ink-600">
              For over three decades, Vijaykant Dairy has been quietly building
              one of Karnataka's most trusted dairy brands — on the back of
              Swedish and Italian machinery, a 21-point QC protocol, and a
              relationship-first approach to farmers and retailers.
            </p>
          </div>
          <Placeholder
            label="Plant entrance"
            caption="Neginhal, Bailhongal Taluk"
            ratio="3/4"
            tone="blue"
          />
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="bg-cream-50 py-24">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionEyebrow>Origin Story</SectionEyebrow>
            <h2 className="mt-5 font-display text-[36px] font-medium leading-tight text-blue-900">
              Rolled out of Vijaykant Dairy, beside the Malaprabha.
            </h2>
            <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-ink-600">
              <p>
                Adityaa Milk is a brand rolled out of Vijaykant Dairy &amp; Food
                Products Ltd., situated in Belagavi, Karnataka, besides river
                Malaprabha. Vijaykant Dairy is into manufacturing and marketing
                of premium quality dairy products.
              </p>
              <p>
                All the machinery in the factory are imported from Sweden and
                Italy, which are among the best in their kind. The company
                insists on honesty, integrity and faith in all aspects of its
                business — a simple, old-fashioned discipline we have not
                outgrown.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Placeholder
              label="Swedish homogeniser"
              ratio="16/9"
              tone="mixed"
            />
            <Placeholder
              label="Malaprabha · morning"
              ratio="16/9"
              tone="cream"
            />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-cream-100 py-24">
        <div className="container-x">
          <div className="max-w-prose">
            <SectionEyebrow>What We Insist On</SectionEyebrow>
            <h2 className="mt-5 font-display text-[36px] font-medium leading-tight text-blue-900">
              Three principles. Not negotiable.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.name}
                className="relative rounded-lg border-t-2 border-t-gold-500 bg-white p-8 shadow-soft"
              >
                <p.icon
                  size={22}
                  className="text-blue-900"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-[22px] font-medium text-blue-900">
                  {p.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY CONTROL */}
      <section className="bg-cream-50 py-28">
        <div className="container-x">
          <div className="max-w-prose">
            <SectionEyebrow>Quality Control</SectionEyebrow>
            <h2 className="mt-5 font-display text-[40px] font-medium leading-tight text-blue-900">
              21 tests. Every single batch.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-600">
              Our in-house laboratory runs the same 21-point panel on every
              tanker received and every batch dispatched. Nothing leaves
              Neginhal on a shortcut.
            </p>
          </div>

          <div className="mt-12 border-l-2 border-blue-900 pl-6">
            <div className="flex flex-wrap gap-2 text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
              <span className="rounded-xs bg-cream-200 px-2.5 py-1">
                ISO 22000:2005
              </span>
              <span className="rounded-xs bg-cream-200 px-2.5 py-1">
                FSSAI No. 10013043000577
              </span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
              {qcTests.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-xs border border-line bg-white px-4 py-2.5 text-[14px] text-ink-900 transition-all hover:border-gold-500/50 hover:shadow-soft"
                >
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-100">
                    <Check size={12} className="text-gold-500" />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FARMER -> CONSUMER */}
      <section className="relative overflow-hidden bg-blue-900 py-28 text-cream-50">
        <Image
          src="/images/sunmark-removebg-preview.png"
          alt=""
          width={800}
          height={400}
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -left-14 h-auto w-[280px] opacity-70 md:w-[440px]"
        />
        <div className="container-x relative">
          <div className="max-w-prose">
            <SectionEyebrow tone="dark">Farmer to Consumer</SectionEyebrow>
            <h2 className="mt-5 font-display text-[36px] font-medium leading-tight">
              Six stages. One unbroken cold chain.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {chain.map((c, i) => (
              <div key={c.title} className="bg-blue-900 p-8">
                <div className="font-display text-[14px] italic text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-[22px] font-medium">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-cream-50/75">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES MOSAIC */}
      <section className="bg-cream-50 py-24">
        <div className="container-x">
          <SectionEyebrow>Inside the Plant</SectionEyebrow>
          <h2 className="mt-5 max-w-[560px] font-display text-[36px] font-medium leading-tight text-blue-900">
            Imported machinery, disciplined people.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="md:col-span-2 md:row-span-2">
              <Placeholder label="Tetra Pak line" ratio="4/5" tone="mixed" />
            </div>
            <Placeholder label="Cold store" ratio="1/1" tone="blue" />
            <Placeholder label="QC Lab" ratio="1/1" tone="cream" />
            <Placeholder label="Pouch packing" ratio="1/1" tone="blue" />
            <Placeholder label="Dispatch bay" ratio="1/1" tone="cream" />
          </div>
        </div>
      </section>

      {/* ADDRESSES */}
      <section className="bg-cream-100 py-24">
        <div className="container-x grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Registered Office",
              body:
                "Vijaynand Road Lines, CTS. No. 4883, Fort Road, Belagavi – 590001, Karnataka",
            },
            {
              title: "Factory",
              body:
                "Neginhal Village, Bailhongal Taluk, Dist. Belagavi – 591102, Karnataka",
            },
          ].map((a) => (
            <div
              key={a.title}
              className="rounded-lg border border-line bg-white p-8 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gold-500" />
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
                    {a.title}
                  </div>
                  <div className="mt-2 text-[16px] leading-relaxed text-ink-900">
                    {a.body}
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-blue-900 hover:text-gold-500"
                  >
                    Open in Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
