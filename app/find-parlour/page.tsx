"use client";

import { useState, useMemo } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import { parlours } from "@/lib/data";
import { MapPin, Search, Navigation, Phone } from "lucide-react";

export default function FindParlourPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(parlours[0].name);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return parlours;
    return parlours.filter(
      (p) =>
        p.city.toLowerCase().includes(q) ||
        p.pincode.includes(q) ||
        p.name.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <section className="bg-cream-50 py-16">
        <div className="container-x">
          <SectionEyebrow>Find A Parlour</SectionEyebrow>
          <h1 className="mt-6 max-w-[700px] font-display text-[48px] font-medium leading-tight text-blue-900 md:text-[56px]">
            Find Adityaa near you.
          </h1>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
            Search by pincode or city across North Karnataka.
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
                    placeholder="Enter pincode or city"
                    className="flex-1 bg-transparent py-3 text-[15px] focus:outline-none"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Belagavi", "Bailhongal", "Hubballi", "Dharwad"].map(
                    (c) => (
                      <button
                        key={c}
                        onClick={() => setQuery(c)}
                        className="rounded-xs border border-line bg-cream-50 px-3 py-1 text-[12px] text-blue-900 transition-colors hover:border-gold-500"
                      >
                        {c}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-white shadow-soft">
                {filtered.length === 0 && (
                  <div className="p-8 text-center text-[14px] text-ink-600">
                    No parlour here yet — we're expanding. Tell us where you'd
                    like one.
                  </div>
                )}
                {filtered.map((p) => {
                  const isActive = activeId === p.name;
                  return (
                    <button
                      key={p.name}
                      onClick={() => setActiveId(p.name)}
                      className={`relative block w-full p-5 text-left transition-colors ${
                        isActive ? "bg-cream-100" : "hover:bg-cream-50"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-gold-500" />
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-[18px] font-medium text-blue-900">
                            {p.name}
                          </h3>
                          <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">
                            {p.address} · {p.pincode}
                          </p>
                        </div>
                        <div className="whitespace-nowrap text-[13px] font-semibold text-gold-500">
                          {p.km} km
                        </div>
                      </div>
                      <div className="mt-3 flex gap-4 text-[12.5px]">
                        <a
                          href={`tel:${p.phone.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-1.5 text-blue-900 hover:text-gold-500"
                        >
                          <Phone size={13} /> {p.phone}
                        </a>
                        <span className="inline-flex items-center gap-1.5 text-blue-900 hover:text-gold-500">
                          <Navigation size={13} /> Directions
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: map */}
            <div className="relative h-[640px] overflow-hidden rounded-lg border border-line bg-cream-100 shadow-soft">
              {/* stylised map */}
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
                {/* "water" — Malaprabha */}
                <path
                  d="M0,420 Q150,380 300,410 T600,400 L600,440 Q450,460 300,450 T0,460 Z"
                  fill="#E7E1D2"
                />
                {/* roads */}
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

                {/* parlour pins */}
                {[
                  { x: 200, y: 240, name: parlours[0].name },
                  { x: 250, y: 210, name: parlours[1].name },
                  { x: 330, y: 330, name: parlours[2].name },
                  { x: 460, y: 420, name: parlours[3].name },
                  { x: 410, y: 380, name: parlours[4].name },
                ].map((pin) => {
                  const active = activeId === pin.name;
                  return (
                    <g
                      key={pin.name}
                      transform={`translate(${pin.x},${pin.y})`}
                      className="cursor-pointer"
                      onClick={() => setActiveId(pin.name)}
                    >
                      {active && (
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
                        stroke="#0A2540"
                        strokeWidth="1"
                      />
                      <circle r="3.5" cy="-4" fill="#0A2540" />
                    </g>
                  );
                })}

                {/* label */}
                <text
                  x="30"
                  y="40"
                  fontSize="11"
                  fill="#0A2540"
                  fontWeight="600"
                  letterSpacing="1.5"
                >
                  NORTH KARNATAKA
                </text>
              </svg>

              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-lg border border-line bg-white/95 px-4 py-3 shadow-soft backdrop-blur md:right-auto md:max-w-[360px]">
                <MapPin size={18} className="flex-none text-gold-500" />
                <div className="text-[13px]">
                  <div className="font-medium text-blue-900">
                    {parlours.find((p) => p.name === activeId)?.name}
                  </div>
                  <div className="text-ink-600">
                    {parlours.find((p) => p.name === activeId)?.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
