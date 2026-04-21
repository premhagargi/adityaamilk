import type { Metadata } from "next";
import Image from "next/image";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/data";
import { Award, Medal, Trophy, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Recognition earned by Adityaa Milk — Hindustan Unilever (Wall's) global team visit, India SME 100 Awards, India Small Giant Award 2018, Gold at the Great Indian Ice Cream Contest.",
  alternates: { canonical: "/achievements" },
  openGraph: {
    title: "Achievements · Adityaa Milk",
    description:
      "Awards are the by-product of daily discipline — here are some of ours.",
    url: "/achievements",
  },
};

const [hul, sme, smallGiant, dupont] = achievements;

export default function AchievementsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-50 pb-10 pt-20 md:pt-24">
        <div className="container-x relative">
          <SectionEyebrow>Milestones</SectionEyebrow>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <h1 className="font-display text-[44px] font-medium leading-[1.05] text-blue-900 md:text-[60px]">
              Milestones that <span className="italic text-gold-500">mattered</span>.
            </h1>
            <p className="max-w-md self-end text-[17px] leading-relaxed text-ink-600">
              Awards are the by-product of the daily discipline — the early starts,
              the 21 lab tests, the imported machines kept in spec. We are grateful
              for the nods, and prouder still of what earned them.
            </p>
          </div>

          {/* Summary strip */}
          <div className="mt-14 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {[
              { k: "Global audit", v: "Wall's, 2023", icon: Sparkles },
              { k: "All-India rank", v: "Top 100 SME", icon: Trophy },
              { k: "Ministry honour", v: "Small Giant '18", icon: Medal },
              { k: "Jury awards", v: "Gold · Best-in-class", icon: Award },
            ].map((s) => (
              <div key={s.k} className="flex items-center gap-4 bg-cream-50 px-5 py-5">
                <s.icon size={18} className="text-gold-500" strokeWidth={1.5} />
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-eyebrow text-ink-400">
                    {s.k}
                  </div>
                  <div className="mt-1 font-display text-[16px] text-blue-900">
                    {s.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 · HINDUSTAN UNILEVER — asymmetric two-photo collage */}
      <section className="bg-cream-50 pt-24 md:pt-28">
        <div className="container-x">
          <Reveal>
            <EntryMarker index="01" year={hul.year} eyebrow={hul.eyebrow} />
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4 md:pt-8">
              <Reveal>
                <h2 className="font-display text-[30px] font-medium leading-tight text-blue-900 md:text-[38px]">
                  Hindustan Unilever <span className="italic text-gold-500">(Wall's)</span>
                  <br />
                  Global Team visit.
                </h2>
                <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
                  {hul.body}
                </p>
                <div className="mt-8 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                  <span className="h-px w-10 bg-gold-500" />
                  Partner Audit · Neginhal Plant
                </div>
              </Reveal>
            </div>

            {/* collage */}
            <div className="col-span-12 md:col-span-8">
              <Reveal delay={0.1}>
                <div className="grid grid-cols-5 gap-4 md:gap-5">
                  <figure className="col-span-3">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line shadow-soft">
                      <Image
                        src={hul.images[0].src}
                        alt={hul.images[0].alt}
                        fill
                        sizes="(min-width: 768px) 42vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figure className="col-span-2 md:pt-16">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line shadow-soft">
                      <Image
                        src={hul.images[1].src}
                        alt={hul.images[1].alt}
                        fill
                        sizes="(min-width: 768px) 28vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-[12px] italic text-ink-400">
                      Plant walk-through, 2023
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · INDIA SME 100 — reversed, split pair on right */}
      <section className="bg-cream-50 py-24 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* paired images */}
            <div className="col-span-12 md:col-span-8 md:order-2">
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-4 md:gap-5">
                  <figure>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line shadow-soft">
                      <Image
                        src={sme.images[0].src}
                        alt={sme.images[0].alt}
                        fill
                        sizes="(min-width: 768px) 34vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figure className="md:pt-12">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line shadow-soft">
                      <Image
                        src={sme.images[1].src}
                        alt={sme.images[1].alt}
                        fill
                        sizes="(min-width: 768px) 34vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-4 md:order-1">
              <Reveal>
                <EntryMarker index="02" year={sme.year} eyebrow={sme.eyebrow} />
                <h2 className="mt-8 font-display text-[30px] font-medium leading-tight text-blue-900 md:text-[38px]">
                  India <span className="italic text-gold-500">SME 100</span>
                  <br />
                  Awards.
                </h2>
                <p className="mt-6 text-[16.5px] leading-relaxed text-ink-600">
                  {sme.body}
                </p>

                {sme.highlights && (
                  <ul className="mt-8 space-y-3">
                    {sme.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-3 border-l-2 border-gold-500 pl-4 text-[14.5px] text-ink-900"
                      >
                        <Trophy size={14} className="text-gold-500" />
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · INDIA SMALL GIANT 2018 — wide strip on deep blue */}
      <section className="relative overflow-hidden bg-blue-900 py-24 text-cream-50 md:py-28">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 overflow-hidden md:h-48">
          <Image
            src="/images/sunmark.png"
            alt=""
            width={1600}
            height={300}
            aria-hidden
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container-x relative">
          <Reveal>
            <div className="max-w-[640px]">
              <div className="flex items-center gap-4">
                <span className="font-display text-[64px] font-medium leading-none text-cream-50/15 md:text-[80px]">
                  03
                </span>
                <div className="h-px w-16 bg-gold-400" />
                <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-400">
                  {smallGiant.year} · {smallGiant.eyebrow}
                </span>
              </div>
              <h2 className="mt-6 font-display text-[32px] font-medium leading-tight md:text-[44px]">
                India Small Giant
                <br />
                <span className="italic text-gold-400">Award 2018</span>.
              </h2>
            </div>
          </Reveal>

          {/* wide strip: two photos side by side */}
          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              {smallGiant.images.map((img, i) => (
                <figure key={img.src} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-lift">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 text-[12px] italic text-cream-50/60">
                    {i === 0 ? "Award presentation, 2018" : "Small Giant recognition"}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          {/* inset text block */}
          <Reveal delay={0.15}>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr]">
              <p className="text-[17px] leading-relaxed text-cream-50/85">
                {smallGiant.body}
              </p>
              {smallGiant.highlights && (
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-gold-400">
                    <Medal size={14} /> Ministry Citation
                  </div>
                  <div className="mt-3 font-display text-[18px] leading-snug">
                    {smallGiant.highlights[0]}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 · DUPONT · GREAT INDIAN ICE CREAM — single hero image + ribbon card */}
      <section className="bg-cream-50 py-24 md:py-28">
        <div className="container-x">
          <Reveal>
            <EntryMarker index="04" year={dupont.year} eyebrow={dupont.eyebrow} />
          </Reveal>

          <div className="relative mt-10">
            <Reveal delay={0.05}>
              <figure className="relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line shadow-lift md:aspect-[21/9]">
                  <Image
                    src={dupont.images[0].src}
                    alt={dupont.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 75vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent" />
                </div>
              </figure>
            </Reveal>

            {/* floating headline card */}
            <Reveal delay={0.15}>
              <div className="relative z-10 -mt-14 ml-0 max-w-[640px] rounded-2xl border border-line bg-cream-50 p-7 shadow-lift md:ml-10 md:-mt-20 md:p-10">
                <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                  <Trophy size={14} /> Gold · Best-in-Class
                </div>
                <h2 className="mt-4 font-display text-[28px] font-medium leading-tight text-blue-900 md:text-[36px]">
                  The Great Indian Ice Cream <br className="hidden md:block" />
                  &amp; <span className="italic text-gold-500">Frozen Dessert</span> Contest.
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600">
                  {dupont.body}
                </p>
              </div>
            </Reveal>
          </div>

          {/* medal pair */}
          {dupont.highlights && (
            <Reveal delay={0.2}>
              <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
                {dupont.highlights.map((h, i) => (
                  <div
                    key={h}
                    className="flex items-start gap-5 rounded-xl border border-line bg-white p-6 shadow-soft"
                  >
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gold-100">
                      {i === 0 ? (
                        <Trophy size={20} className="text-gold-500" />
                      ) : (
                        <Medal size={20} className="text-gold-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                        {i === 0 ? "Gold Award" : "Best-in-Class"}
                      </div>
                      <div className="mt-1 font-display text-[18px] leading-snug text-blue-900">
                        {h.replace(/^(Gold|Best-in-Class) · /, "")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Recognition strip */}
      <section className="bg-cream-200 py-14">
        <div className="container-x">
          <div className="text-center text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
            Recognised by
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[13px] font-semibold uppercase tracking-eyebrow text-blue-900/70 md:gap-x-16">
            <span>Hindustan Unilever (Wall's)</span>
            <span className="text-gold-500">·</span>
            <span>India SME Forum</span>
            <span className="text-gold-500">·</span>
            <span>Hon. MSME Ministry</span>
            <span className="text-gold-500">·</span>
            <span>Dupont</span>
            <span className="text-gold-500">·</span>
            <span>FSSAI</span>
            <span className="text-gold-500">·</span>
            <span>ISO 22000:2005</span>
          </div>
        </div>
      </section>
    </>
  );
}

function EntryMarker({
  index,
  year,
  eyebrow,
}: {
  index: string;
  year: string;
  eyebrow: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="font-display text-[64px] font-medium leading-none text-blue-900/15 md:text-[80px]">
        {index}
      </span>
      <div className="h-px w-16 bg-gold-500" />
      <span className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
        {year} · {eyebrow}
      </span>
    </div>
  );
}
