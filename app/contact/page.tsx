"use client";

import { useState } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Check,
  Navigation,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-cream-50 py-20">
        <div className="container-x">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="mt-6 max-w-[680px] font-display text-[48px] font-medium leading-tight text-blue-900 md:text-[56px]">
            Let's talk dairy.
          </h1>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
            Dealerships, retail supply, B2B orders, press or a simple product
            query — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 pb-24">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[4fr_6fr]">
          {/* Left: contact details */}
          <div>
            <div className="space-y-6">
              <a
                href="tel:+919900255556"
                className="block font-display text-[34px] font-medium text-blue-900 underline decoration-gold-500 decoration-2 underline-offset-[10px] transition-opacity hover:opacity-80"
              >
                +91 99002 55556
              </a>
              <a
                href="mailto:info@adityaamilk.com"
                className="inline-flex items-center gap-2 text-[16px] text-blue-900 hover:text-gold-500"
              >
                <Mail size={16} className="text-gold-500" />
                info@adityaamilk.com
              </a>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 flex-none text-gold-500" />
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
                    Corporate Office
                  </div>
                  <div className="mt-1 text-[15px] leading-relaxed text-ink-900">
                    LIG 159, Mahantesh Nagar,<br />
                    Belagavi – 590016, Karnataka
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 flex-none text-gold-500" />
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
                    Factory
                  </div>
                  <div className="mt-1 text-[15px] leading-relaxed text-ink-900">
                    Neginhal Village, Bailhongal Taluk,<br />
                    Dist. Belagavi – 591102, Karnataka
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
                Office Hours
              </div>
              <p className="mt-2 text-[14px] text-ink-600">
                Monday – Saturday · 9:30 AM – 6:30 PM IST
              </p>
            </div>

            <div className="mt-10 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-blue-900 transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-lg border border-line bg-white p-8 shadow-soft md:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/50 bg-gold-100">
                  <Check size={24} className="text-gold-500" />
                </div>
                <h3 className="mt-6 font-display text-[28px] font-medium text-blue-900">
                  Thank you.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] text-ink-600">
                  We've received your enquiry and will be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Name" required />
                  <Field label="Company" hint="(optional)" />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" required />
                </div>
                <Select
                  label="Enquiry Type"
                  options={[
                    "Dealership",
                    "B2B Supply",
                    "Product Query",
                    "Careers",
                    "Other",
                  ]}
                />
                <Field label="Message" textarea required />

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send enquiry
                </button>
                <p className="text-[12.5px] text-ink-400">
                  We typically respond within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map strip */}
      <section className="relative h-[320px] w-full bg-cream-100">
        <svg
          viewBox="0 0 1200 320"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="g2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#E7E1D2"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="1200" height="320" fill="#F8F5ED" />
          <rect width="1200" height="320" fill="url(#g2)" />
          <path
            d="M0,200 Q400,180 700,190 T1200,170"
            stroke="#8A8880"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 4"
          />
          <g transform="translate(720,160)">
            <circle r="18" fill="#C9A227" fillOpacity="0.15" />
            <path
              d="M0,-14 C7,-14 11,-9 11,-3 C11,5 0,14 0,14 C0,14 -11,5 -11,-3 C-11,-9 -7,-14 0,-14 Z"
              fill="#C9A227"
              stroke="#0A2540"
              strokeWidth="1"
            />
          </g>
          <text
            x="30"
            y="40"
            fontSize="10"
            fill="#0A2540"
            fontWeight="600"
            letterSpacing="1.5"
          >
            FACTORY · NEGINHAL
          </text>
        </svg>
        <div className="absolute right-6 top-6 max-w-[320px] rounded-lg border border-line bg-white/95 p-5 shadow-soft backdrop-blur">
          <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
            Factory
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-900">
            Neginhal Village, Bailhongal Taluk, Dist. Belagavi – 591102,
            Karnataka
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-[13px] text-blue-900 hover:text-gold-500"
          >
            <Navigation size={13} /> Get directions
          </a>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  required,
  textarea,
  hint,
}: {
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
        {label}{" "}
        {hint && <span className="text-ink-400 normal-case">{hint}</span>}
      </span>
      {textarea ? (
        <textarea
          rows={4}
          required={required}
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-all focus:border-blue-900 focus:ring-2 focus:ring-gold-400/40"
        />
      ) : (
        <input
          type={type}
          required={required}
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-all focus:border-blue-900 focus:ring-2 focus:ring-gold-400/40"
        />
      )}
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
        {label}
      </span>
      <select
        className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-all focus:border-blue-900 focus:ring-2 focus:ring-gold-400/40"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
