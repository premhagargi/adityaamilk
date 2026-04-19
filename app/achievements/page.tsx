import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import SectionEyebrow from "@/components/SectionEyebrow";
import { achievements } from "@/lib/data";
import { Award } from "lucide-react";

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

export default function AchievementsPage() {
  return (
    <>
      <section className="bg-cream-50 py-20">
        <div className="container-x">
          <SectionEyebrow>Milestones</SectionEyebrow>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <h1 className="font-display text-[48px] font-medium leading-tight text-blue-900 md:text-[56px]">
              Milestones that mattered.
            </h1>
            <p className="max-w-md text-[17px] leading-relaxed text-ink-600">
              Awards are the by-product of the daily discipline — the early
              starts, the 21 lab tests, the imported machines kept in spec. We
              are grateful for the nods, and prouder still of what earned them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-50 pb-24">
        <div className="container-x">
          <div className="relative mx-auto max-w-[960px]">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-900/30 md:left-1/2" />

            <div className="space-y-16">
              {achievements.map((a, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={a.title}
                    className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2"
                  >
                    {/* node */}
                    <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-500 ring-4 ring-cream-50 md:left-1/2" />

                    {/* card */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        isLeft
                          ? "md:pr-12 md:text-right"
                          : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div
                        className={`font-display text-[15px] italic text-gold-500 ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        {a.year}
                      </div>
                      <h3 className="mt-2 font-display text-[26px] font-medium leading-tight text-blue-900">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-[15.5px] leading-relaxed text-ink-600">
                        {a.body}
                      </p>
                      <div
                        className={`mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500`}
                      >
                        <Award size={14} /> Recognition
                      </div>
                    </div>

                    {/* image */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        isLeft ? "md:col-start-2 md:pl-12" : "md:pr-12"
                      }`}
                    >
                      <Placeholder
                        label={a.title}
                        caption={a.year}
                        ratio="4/3"
                        tone={i % 2 === 0 ? "mixed" : "blue"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition strip */}
      <section className="bg-cream-200 py-14">
        <div className="container-x">
          <div className="text-center text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
            Recognised by
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-[13px] font-semibold uppercase tracking-eyebrow text-blue-900/70">
            <span>Hindustan Unilever (Wall's)</span>
            <span>·</span>
            <span>India SME Forum</span>
            <span>·</span>
            <span>FSSAI</span>
            <span>·</span>
            <span>ISO 22000:2005</span>
            <span>·</span>
            <span>Great Indian Ice Cream Contest</span>
          </div>
        </div>
      </section>
    </>
  );
}
