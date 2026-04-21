"use client";

import { useMemo, useState } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import SunMark from "@/components/SunMark";
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
        <SunMark
          variant="corner"
          size={220}
          rayColor="#D4AF37"
          className="pointer-events-none absolute right-0 top-0 opacity-[0.14] -scale-x-100"
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

            {/* Right: map */}
            <div className="relative h-[640px] overflow-hidden rounded-lg border border-line bg-cream-100 shadow-soft lg:sticky lg:top-24">
              <svg
                viewBox="0 0 600 640"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#E7E1D2"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="600" height="640" fill="#F8F5ED" />
                <rect width="600" height="640" fill="url(#grid)" />
                <path
                  d="M0,420 Q150,380 300,410 T600,400 L600,440 Q450,460 300,450 T0,460 Z"
                  fill="#E7E1D2"
                />
                <path
                  d="M60,80 Q200,200 320,300 T560,520"
                  stroke="#8A8880"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="3 4"
                />
                <path
                  d="M40,520 Q200,440 380,460 T580,320"
                  stroke="#8A8880"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="3 4"
                />

                {/* a ring of pins scattered on the stylised map */}
                {filtered.slice(0, 12).map((p, i) => {
                  const angle = (i / 12) * Math.PI * 2;
                  const radius = 180 + (i % 3) * 40;
                  const x = 300 + Math.cos(angle) * radius * 0.8;
                  const y = 320 + Math.sin(angle) * radius * 0.6;
                  const isActive = active.id === p.id;
                  return (
                    <g
                      key={p.id}
                      transform={`translate(${x},${y})`}
                      className="cursor-pointer"
                      onClick={() => setActiveId(p.id)}
                    >
                      {isActive && (
                        <circle
                          r="22"
                          fill="#C9A227"
                          fillOpacity="0.15"
                          className="animate-pulse"
                        />
                      )}
                      <path
                        d="M0,-18 C8,-18 14,-12 14,-4 C14,6 0,18 0,18 C0,18 -14,6 -14,-4 C-14,-12 -8,-18 0,-18 Z"
                        fill="#C9A227"
                        stroke="#27398F"
                        strokeWidth="1"
                      />
                      <circle r="3.5" cy="-4" fill="#27398F" />
                    </g>
                  );
                })}

                <text
                  x="30"
                  y="40"
                  fontSize="11"
                  fill="#27398F"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  KARNATAKA · MAHARASHTRA
                </text>
              </svg>

              <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3 rounded-lg border border-line bg-white/95 px-4 py-3 shadow-soft backdrop-blur md:right-auto md:max-w-[380px]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
