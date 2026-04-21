"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/SectionEyebrow";
import { parlours, type Parlour } from "@/lib/data";
import { MapPin, Search, Navigation, Phone } from "lucide-react";

type IndexedParlour = Parlour & {
  id: string;
  pincode: string;
  searchBlob: string;
};

const indexed: IndexedParlour[] = parlours.map((p, i) => {
  const pincodeMatch = p.address.match(/\b\d{6}\b/);
  const pincode = pincodeMatch ? pincodeMatch[0] : "";
  const id = `${i}-${p.name}-${p.city}`.toLowerCase().replace(/\s+/g, "-");
  const searchBlob = [p.name, p.state, p.city, p.address, p.contact, pincode]
    .join(" ")
    .toLowerCase();
  return { ...p, id, pincode, searchBlob };
});

const quickCities = Array.from(
  new Set(indexed.map((p) => p.city))
)
  .filter((c) => ["BELAGAVI", "BAILHONGAL", "HUBLI", "DHARWAD", "BANGALORE", "KOLHAPUR"].includes(c))
  .slice(0, 6);

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function FindParlourPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(indexed[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return indexed;
    const tokens = q.split(/\s+/).filter(Boolean);
    return indexed.filter((p) =>
      tokens.every((t) => p.searchBlob.includes(t))
    );
  }, [query]);

  const active =
    indexed.find((p) => p.id === activeId) ?? filtered[0] ?? indexed[0];

  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 py-16">
        <Image
          src="/images/sunmark-removebg-preview.png"
          alt=""
          width={500}
          height={250}
          aria-hidden
          className="pointer-events-none absolute -right-10 top-4 h-auto w-[180px] opacity-30 md:w-[240px]"
        />
        <div className="container-x relative">
          <SectionEyebrow>Find A Parlour</SectionEyebrow>
          <h1 className="mt-6 max-w-[700px] font-display text-[48px] font-medium leading-tight text-blue-900 md:text-[56px]">
            Find Adityaa near you.
          </h1>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
            Search by pincode, city, area or parlour name across Karnataka &
            Maharashtra.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 pb-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[5fr_7fr]">
            {/* Left: search + list */}
            <div className="flex flex-col gap-5">
              <div className="rounded-lg border border-line bg-white p-4 shadow-soft">
                <div className="flex items-center gap-2 rounded-md border border-line bg-cream-50 px-3">
                  <Search size={16} className="text-ink-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter pincode, city, area or parlour name"
                    className="flex-1 bg-transparent py-3 text-[15px] focus:outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="text-[12px] text-ink-400 hover:text-blue-900"
                      aria-label="Clear search"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {quickCities.map((c) => (
                    <button
                      key={c}
                      onClick={() => setQuery(titleCase(c))}
                      className="rounded-xs border border-line bg-cream-50 px-3 py-1 text-[12px] text-blue-900 transition-colors hover:border-gold-500"
                    >
                      {titleCase(c)}
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-[12px] text-ink-600">
                  {filtered.length} parlour
                  {filtered.length === 1 ? "" : "s"} found
                </div>
              </div>

              <div className="max-h-[640px] divide-y divide-line overflow-y-auto rounded-lg border border-line bg-white shadow-soft">
                {filtered.length === 0 && (
                  <div className="p-8 text-center text-[14px] text-ink-600">
                    No parlour here yet — we&apos;re expanding. Tell us where
                    you&apos;d like one.
                  </div>
                )}
                {filtered.map((p) => {
                  const isActive = active.id === p.id;
                  const contactForTel = p.contact.split(/[/,]/)[0].trim();
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveId(p.id)}
                      className={`relative block w-full p-5 text-left transition-colors ${
                        isActive ? "bg-cream-100" : "hover:bg-cream-50"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-gold-500" />
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate font-display text-[18px] font-medium text-blue-900">
                            {titleCase(p.name)}
                          </h3>
                          <div className="mt-0.5 flex flex-wrap gap-x-2 text-[12px] text-ink-400">
                            <span>{titleCase(p.city)}</span>
                            <span>·</span>
                            <span>{titleCase(p.state)}</span>
                            {p.pincode && (
                              <>
                                <span>·</span>
                                <span>{p.pincode}</span>
                              </>
                            )}
                          </div>
                          <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                            {p.address}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-4 text-[12.5px]">
                        <a
                          href={`tel:${contactForTel.replace(/\s/g, "")}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-blue-900 hover:text-gold-500"
                        >
                          <Phone size={13} /> {p.contact}
                        </a>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${p.name} ${p.address}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-blue-900 hover:text-gold-500"
                        >
                          <Navigation size={13} /> Directions
                        </a>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: live Google Maps embed for the active parlour */}
            <div className="relative h-[640px] overflow-hidden rounded-lg border border-line bg-cream-100 shadow-soft lg:sticky lg:top-24">
              <iframe
                key={active.id}
                title={`Map · ${titleCase(active.name)}, ${titleCase(active.city)}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${active.name}, ${active.address}`
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                allowFullScreen
              />

              <div className="absolute left-5 right-5 top-5 flex items-start gap-3 rounded-lg border border-line bg-white/95 px-4 py-3 shadow-soft backdrop-blur md:right-auto md:max-w-[380px]">
                <MapPin size={18} className="mt-0.5 flex-none text-gold-500" />
                <div className="text-[13px]">
                  <div className="font-medium text-blue-900">
                    {titleCase(active.name)}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-ink-400">
                    {titleCase(active.city)} · {titleCase(active.state)}
                    {active.pincode ? ` · ${active.pincode}` : ""}
                  </div>
                  <div className="mt-1 text-ink-600">{active.address}</div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${active.name}, ${active.address}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-blue-900 hover:text-gold-500"
                  >
                    <Navigation size={13} /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
