import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Users,
  Scale,
  Gavel,
  Newspaper,
  Building2,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Desk",
  description:
    "Vijaykant Dairy and Food Products Limited — investor relations, statutory disclosures, board composition, policies, unpaid dividend and shareholder notices. CIN: U51201KA2004PLC034702.",
  alternates: { canonical: "/investor-desk" },
  openGraph: {
    title: "Investor Desk · Adityaa Milk",
    description:
      "Corporate governance, statutory filings, board and committee composition, policies and public notices for Vijaykant Dairy and Food Products Limited.",
    url: "/investor-desk",
  },
};

type Doc = {
  title: string;
  blurb: string;
  file: string;
  sizeKB: number;
};

const governance: Doc[] = [
  {
    title: "Board of Directors",
    blurb:
      "Composition and tenure of the Board of Directors of Vijaykant Dairy and Food Products Limited.",
    file: "/documents/Board of Directors.pdf",
    sizeKB: 66,
  },
  {
    title: "Board Committees",
    blurb:
      "Constitution, roles and membership of the Audit, Nomination & Remuneration and Stakeholders' Relationship Committees.",
    file: "/documents/BoardCommittees.pdf",
    sizeKB: 46,
  },
  {
    title: "Terms & Conditions · Independent Directors",
    blurb:
      "Formal letter of appointment outlining the role, fiduciary duties and tenure of Independent Directors.",
    file: "/documents/tcIndependentdirectors.pdf",
    sizeKB: 1605,
  },
  {
    title: "Nodal Officer",
    blurb:
      "Details of the nodal officer appointed under IEPF rules for shareholder assistance.",
    file: "/documents/Nodal Officer.pdf",
    sizeKB: 50,
  },
];

const policies: Doc[] = [
  {
    title: "CSR Policy",
    blurb:
      "Corporate Social Responsibility Policy covering focus areas, governance and implementation framework.",
    file: "/documents/CSRPolicy.pdf",
    sizeKB: 156,
  },
  {
    title: "Remuneration Policy",
    blurb:
      "Policy on remuneration for Directors, Key Managerial Personnel and Senior Management, per Section 178 of the Companies Act, 2013.",
    file: "/documents/remunerationpolicy.pdf",
    sizeKB: 237,
  },
  {
    title: "Vigil Mechanism / Whistle-blower Policy",
    blurb:
      "Framework enabling employees and directors to report genuine concerns regarding unethical behaviour or fraud.",
    file: "/documents/vigilmechanism.pdf",
    sizeKB: 106,
  },
];

const investorInfo: Doc[] = [
  {
    title: "Company Details",
    blurb:
      "Corporate identity, registered office, statutory particulars and authorised capital.",
    file: "/documents/Company Details.pdf",
    sizeKB: 135,
  },
  {
    title: "Investor Details",
    blurb:
      "Shareholding pattern and investor-relations particulars as on the latest disclosure date.",
    file: "/documents/detailsinvestors.pdf",
    sizeKB: 82,
  },
  {
    title: "Unpaid Dividend",
    blurb:
      "Particulars of unpaid / unclaimed dividend liable to be transferred to the IEPF.",
    file: "/documents/unpaiddividend.pdf",
    sizeKB: 397,
  },
  {
    title: "Scrutinizer Report",
    blurb:
      "Independent scrutinizer's report on postal ballot / EGM voting outcomes.",
    file: "/documents/Scrutinizer Report.pdf",
    sizeKB: 3694,
  },
];

const notices = [
  {
    title: "Business Standard · Bengaluru",
    subtitle: "Public Notice · Section 66, Companies Act 2013",
    date: "12 December 2025",
    blurb:
      "English publication of the reduction-of-share-capital notice under the order of the Hon'ble NCLT, Bengaluru Bench dated 28 November 2025.",
    file: "/documents/business standrd bangalore 2025.pdf",
    kind: "pdf" as const,
    sizeKB: 5940,
  },
  {
    title: "Kannada Prabha · Belagavi",
    subtitle: "Public Notice · Section 66, Companies Act 2013",
    date: "12 December 2025",
    blurb:
      "Kannada publication of the same NCLT order — as mandated for regional circulation in the state of incorporation.",
    file: "/documents/kp2025.jpg",
    kind: "image" as const,
    sizeKB: 236,
  },
];

function fileSize(kb: number) {
  if (kb < 1000) return `${kb} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function encode(p: string) {
  // Keep the leading slash, encode the rest (handles spaces in filenames)
  return "/" + p.replace(/^\//, "").split("/").map(encodeURIComponent).join("/");
}

function DocCard({ doc }: { doc: Doc }) {
  return (
    <a
      href={encode(doc.file)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-soft transition-all duration-200 ease-premium hover:-translate-y-[2px] hover:border-gold-500/60 hover:shadow-lift"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blue-900/5 text-blue-900 transition-colors group-hover:bg-blue-900 group-hover:text-gold-400">
            <FileText size={20} strokeWidth={1.5} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
            PDF · {fileSize(doc.sizeKB)}
          </span>
        </div>
        <h3 className="mt-5 font-display text-[19px] font-medium leading-snug text-blue-900">
          {doc.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
          {doc.blurb}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-900 transition-colors group-hover:text-gold-500">
          View document
          <ExternalLink size={13} />
        </span>
        <Download
          size={15}
          className="text-ink-400 transition-colors group-hover:text-gold-500"
        />
      </div>
    </a>
  );
}

const SITE_URL = "https://www.adityaamilk.com";

const allDocs: Doc[] = [...governance, ...policies, ...investorInfo];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/investor-desk`,
      name: "Investor Desk · Vijaykant Dairy and Food Products Limited",
      description:
        "Statutory filings, policies, board composition, unpaid dividend register and public notices for Vijaykant Dairy and Food Products Limited.",
      url: `${SITE_URL}/investor-desk`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: {
        "@type": "Organization",
        name: "Vijaykant Dairy and Food Products Limited",
        alternateName: "Adityaa Milk",
        identifier: "U51201KA2004PLC034702",
      },
      hasPart: [
        ...allDocs.map((d) => ({
          "@type": "DigitalDocument",
          name: d.title,
          description: d.blurb,
          url: `${SITE_URL}${encode(d.file)}`,
          encodingFormat: "application/pdf",
          fileFormat: "application/pdf",
          publisher: {
            "@type": "Organization",
            name: "Vijaykant Dairy and Food Products Limited",
          },
          inLanguage: "en",
        })),
        ...notices.map((n) => ({
          "@type": "DigitalDocument",
          name: `${n.title} — ${n.subtitle}`,
          description: n.blurb,
          url: `${SITE_URL}${encode(n.file)}`,
          encodingFormat: n.kind === "image" ? "image/jpeg" : "application/pdf",
          fileFormat: n.kind === "image" ? "image/jpeg" : "application/pdf",
          datePublished: "2025-12-12",
          publisher: {
            "@type": "Organization",
            name: "Vijaykant Dairy and Food Products Limited",
          },
        })),
      ],
    },
  ],
};

export default function InvestorDeskPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <div className="container-x relative">
          <SectionEyebrow>Investor Desk</SectionEyebrow>
          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
            <h1 className="font-display text-[44px] font-medium leading-[1.05] tracking-tight text-blue-900 md:text-[60px]">
              Transparent by
              <br />
              <span className="italic text-gold-500">default.</span>
            </h1>
            <p className="max-w-md self-end text-[17px] leading-relaxed text-ink-600">
              Statutory filings, policies, board composition and public notices
              for Vijaykant Dairy and Food Products Limited — the company behind
              the Adityaa Milk brand.
            </p>
          </div>

          {/* Corporate identity strip */}
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: "Legal Entity",
                v: "Vijaykant Dairy & Food Products Ltd.",
                icon: Building2,
              },
              {
                k: "CIN",
                v: "U51201KA2004PLC034702",
                icon: ShieldCheck,
              },
              {
                k: "Incorporated",
                v: "2004 · Karnataka",
                icon: Scale,
              },
              {
                k: "Registered Office",
                v: "Fort Road, Belagavi – 590001",
                icon: Users,
              },
            ].map((s) => (
              <div key={s.k} className="flex items-start gap-4 bg-cream-50 px-5 py-5">
                <s.icon size={18} className="mt-1 flex-none text-gold-500" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="text-[10.5px] font-semibold uppercase tracking-eyebrow text-ink-400">
                    {s.k}
                  </div>
                  <div className="mt-1 truncate font-display text-[15px] text-blue-900">
                    {s.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO NOTE */}
      <section className="bg-cream-50 pb-10">
        <div className="container-x">
          <Reveal className="max-w-prose">
            <div className="border-l-2 border-gold-500 pl-6">
              <p className="text-[16.5px] leading-relaxed text-ink-600">
                Vijaykant Dairy &amp; Food Products Limited is an unlisted public
                company incorporated in 2004 in Belagavi, Karnataka. We publish
                the disclosures below in the spirit of the Companies Act, 2013 —
                so that shareholders, regulators and partners can review our
                governance in one place.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                All documents are in PDF format and will open in a new tab. For
                any clarification, please write to the Nodal Officer using the
                contact block at the bottom of this page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="bg-cream-50 py-20 md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                <Gavel size={14} />
                <span>01 · Governance</span>
              </div>
              <h2 className="mt-4 font-display text-[34px] font-medium leading-tight text-blue-900 md:text-[40px]">
                Board &amp; committee composition.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              Our Board oversees strategy, audit and stakeholder relationships
              through specialised committees constituted under the Companies
              Act, 2013.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governance.map((d, i) => (
              <Reveal key={d.file} delay={i * 0.06}>
                <DocCard doc={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-cream-100 py-20 md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                <ShieldCheck size={14} />
                <span>02 · Policies</span>
              </div>
              <h2 className="mt-4 font-display text-[34px] font-medium leading-tight text-blue-900 md:text-[40px]">
                The rules we hold ourselves to.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              Policies that codify what we do — so the conduct is not left to
              memory.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {policies.map((d, i) => (
              <Reveal key={d.file} delay={i * 0.06}>
                <DocCard doc={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR INFORMATION */}
      <section className="bg-cream-50 py-20 md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                <Users size={14} />
                <span>03 · Investor Information</span>
              </div>
              <h2 className="mt-4 font-display text-[34px] font-medium leading-tight text-blue-900 md:text-[40px]">
                Shareholding, dividends &amp; voting.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              Records for shareholders of the company — kept current and
              available for download.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {investorInfo.map((d, i) => (
              <Reveal key={d.file} delay={i * 0.06}>
                <DocCard doc={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLIC NOTICES / MEDIA COVERAGE */}
      <section className="relative overflow-hidden bg-blue-900 py-20 text-cream-50 md:py-24">
        <Image
          src="/images/sunmark-removebg-preview.png"
          alt=""
          width={800}
          height={400}
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -right-16 h-auto w-[280px] opacity-70 md:w-[440px]"
        />
        <Image
          src="/images/sunmark-removebg-preview.png"
          alt=""
          width={400}
          height={200}
          aria-hidden
          className="pointer-events-none absolute -top-8 right-8 hidden h-auto w-[150px] opacity-25 md:block"
        />
        <div className="container-x relative">
          <Reveal className="max-w-[720px]">
            <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-eyebrow text-gold-400">
              <Newspaper size={14} />
              <span>04 · Public Notices</span>
            </div>
            <h2 className="mt-4 font-display text-[34px] font-medium leading-tight md:text-[40px]">
              Published in the record,
              <br />
              on <span className="italic text-gold-400">record</span>.
            </h2>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-relaxed text-cream-50/75">
              Statutory notices published in English and Kannada newspapers as
              mandated under Section 66 of the Companies Act, 2013, following
              the NCLT Bengaluru Bench order dated 28 November 2025.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {notices.map((n, i) => (
              <Reveal key={n.file} delay={i * 0.08}>
                <a
                  href={encode(n.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-200 ease-premium hover:-translate-y-[2px] hover:border-gold-400/40 hover:bg-white/[0.07]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-cream-50">
                    {n.kind === "image" ? (
                      <Image
                        src={encode(n.file)}
                        alt={`${n.title} · ${n.subtitle}`}
                        fill
                        sizes="(min-width: 768px) 40vw, 90vw"
                        className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-cream-100 to-cream-200 p-10 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-900/5">
                          <Newspaper
                            size={36}
                            className="text-blue-900"
                            strokeWidth={1.2}
                          />
                        </div>
                        <div className="font-display text-[22px] italic leading-snug text-blue-900">
                          Business Standard
                          <br />
                          Bengaluru Edition
                        </div>
                        <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                          {n.date}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-gold-400">
                        {n.date}
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-cream-50/50">
                        {n.kind === "image" ? "JPG" : "PDF"} · {fileSize(n.sizeKB)}
                      </div>
                    </div>
                    <h3 className="mt-3 font-display text-[20px] font-medium">
                      {n.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] italic text-cream-50/70">
                      {n.subtitle}
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-cream-50/75">
                      {n.blurb}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-gold-400 transition-transform group-hover:translate-x-1">
                      Open notice
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR CONTACT */}
      <section className="bg-cream-50 py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionEyebrow>Investor Contact</SectionEyebrow>
              <h2 className="mt-5 font-display text-[34px] font-medium leading-tight text-blue-900 md:text-[40px]">
                Questions? We answer.
              </h2>
              <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-ink-600">
                For shareholder queries, unpaid dividend claims, clarifications
                on any filing or matters relating to the Companies Act, please
                reach out to the Nodal Officer. A full profile is available in
                the linked PDF.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={encode("/documents/Nodal Officer.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Nodal Officer details
                </a>
                <Link href="/contact" className="btn-secondary">
                  General contact
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white p-8 shadow-soft">
              <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                Registered Office
              </div>
              <div className="mt-3 font-display text-[22px] leading-snug text-blue-900">
                Vijaykant Dairy and Food
                <br />
                Products Limited
              </div>
              <div className="mt-4 text-[14.5px] leading-relaxed text-ink-600">
                Vijaynand Road Lines,
                <br />
                CTS. No. 4883, Fort Road,
                <br />
                Belagavi – 590001, Karnataka, India.
              </div>

              <div className="mt-8 space-y-4 border-t border-line pt-6">
                <a
                  href="tel:+919900255556"
                  className="flex items-center gap-3 text-[15px] text-blue-900 transition-colors hover:text-gold-500"
                >
                  <Phone size={15} className="text-gold-500" />
                  +91 9900255556
                </a>
                <a
                  href="mailto:info@adityaamilk.com"
                  className="flex items-center gap-3 text-[15px] text-blue-900 transition-colors hover:text-gold-500"
                >
                  <Mail size={15} className="text-gold-500" />
                  info@adityaamilk.com
                </a>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-400">
                  CIN
                </div>
                <div className="mt-2 font-mono text-[14px] text-blue-900">
                  U51201KA2004PLC034702
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
