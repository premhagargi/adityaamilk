"use client";

import { useState } from "react";
import Image from "next/image";
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

const CONTACT_EMAIL = "info@adityaamilk.com";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") ?? "").toString().trim();
    const company = (fd.get("company") ?? "").toString().trim();
    const email = (fd.get("email") ?? "").toString().trim();
    const phone = (fd.get("phone") ?? "").toString().trim();
    const enquiryType = (fd.get("enquiryType") ?? "").toString().trim();
    const message = (fd.get("message") ?? "").toString().trim();

    const subject = `Enquiry${enquiryType ? ` · ${enquiryType}` : ""}${name ? ` — ${name}` : ""}`;
    const body = [
      `Name: ${name || "—"}`,
      `Company: ${company || "—"}`,
      `Email: ${email || "—"}`,
      `Phone: ${phone || "—"}`,
      `Enquiry Type: ${enquiryType || "—"}`,
      "",
      "Message:",
      message || "—",
      "",
      "— Sent from adityaamilk.com contact form",
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default mail app with the draft prefilled
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 py-20">
        <Image
          src="/images/sunmark-removebg-preview.png"
          alt=""
          width={700}
          height={350}
          aria-hidden
          className="pointer-events-none absolute -bottom-12 -right-14 h-auto w-[240px] opacity-40 md:w-[360px]"
        />
        <div className="container-x relative">
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
                    Registered Office
                  </div>
                  <div className="mt-1 text-[15px] leading-relaxed text-ink-900">
                    Vijaynand Road Lines,<br />
                    CTS. No. 4883, Fort Road,<br />
                    Belagavi – 590001, Karnataka
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
                  Draft ready.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] text-ink-600">
                  Your mail app should have opened with the enquiry drafted
                  to{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-blue-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-500"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . Please review and hit send — we'll reply within one
                  business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[13px] font-medium text-blue-900 underline decoration-gold-500 underline-offset-4 hover:text-gold-500"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" hint="(optional)" />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Select
                  label="Enquiry Type"
                  name="enquiryType"
                  options={[
                    "Dealership",
                    "B2B Supply",
                    "Product Query",
                    "Careers",
                    "Other",
                  ]}
                />
                <Field label="Message" name="message" textarea required />

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send enquiry
                </button>
                <p className="text-[12.5px] text-ink-400">
                  Submitting opens your mail app with the enquiry drafted to{" "}
                  {CONTACT_EMAIL}. We typically respond within 1 business day.
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
              stroke="#27398F"
              strokeWidth="1"
            />
          </g>
          <text
            x="30"
            y="40"
            fontSize="10"
            fill="#27398F"
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
  name,
  type = "text",
  required,
  textarea,
  hint,
}: {
  label: string;
  name: string;
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
          name={name}
          rows={4}
          required={required}
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-all focus:border-blue-900 focus:ring-2 focus:ring-gold-400/40"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink-900 outline-none transition-all focus:border-blue-900 focus:ring-2 focus:ring-gold-400/40"
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
        {label}
      </span>
      <select
        name={name}
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
