import SectionEyebrow from "@/components/SectionEyebrow";

const sections = [
  {
    id: "use",
    title: "1. Use of this Website",
    body: [
      "By accessing adityaamilk.com and any related subdomains, you agree to the terms, conditions and notices contained herein. If you do not agree to any part of these terms, please discontinue use of the site.",
      "The content on this site is provided for general information about Vijaykant Dairy and Food Products Limited and its brand Adityaa Milk. Nothing on this site should be interpreted as a binding offer of sale.",
    ],
  },
  {
    id: "orders",
    title: "2. Orders & Payment",
    body: [
      "All orders placed with Adityaa Milk are subject to confirmation and availability. We reserve the right to accept or decline any order at our discretion.",
      "Payments may be collected in advance, on delivery, or as agreed contractually with institutional partners. GST is applicable on all invoices as per prevailing government rates.",
    ],
  },
  {
    id: "delivery",
    title: "3. Delivery",
    body: [
      "Deliveries are made within the network of our authorised parlours and retail partners across North Karnataka. Timelines depend on product category and route availability.",
      "We maintain an unbroken cold chain up to the point of handover. Once a product has been received by the customer or retailer, responsibility for storage transfers to the recipient.",
    ],
  },
  {
    id: "returns",
    title: "4. Returns & Refunds",
    body: [
      "Being perishable dairy products, returns are accepted only within 4 hours of delivery, and only if the product is found to be unfit for consumption on receipt.",
      "Any complaint must be raised by phone or email within this window. Refunds or replacements are processed after verification by our QC team.",
    ],
    highlight: "4-hour return window for perishable dairy products.",
  },
  {
    id: "quality",
    title: "5. Quality Standards",
    body: [
      "All our products are manufactured under ISO 22000:2005 and FSSAI (License No. 10013043000577) compliance. Every batch passes a 21-point laboratory panel before dispatch.",
      "We stand fully behind the quality of every pack. If a consumer has reason to believe a product was below standard, we would like to hear from you at info@adityaamilk.com.",
    ],
  },
  {
    id: "ip",
    title: "6. Intellectual Property",
    body: [
      "All trademarks, logos, product names, photography, copy and design elements on this site are the property of Vijaykant Dairy and Food Products Limited and may not be used without prior written permission.",
    ],
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    body: [
      "Vijaykant Dairy shall not be liable for any indirect, incidental, consequential or punitive damages arising out of the use, or inability to use, this website or the products discussed on it.",
    ],
  },
  {
    id: "law",
    title: "8. Governing Law",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of these Terms shall be subject to the exclusive jurisdiction of the courts of Belagavi, Karnataka.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact",
    body: [
      "For any query relating to these Terms or the services described here, please write to info@adityaamilk.com or call +91 99002 55556.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="bg-cream-50 py-20">
      <div className="container-x">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-5 font-display text-[48px] font-medium leading-tight text-blue-900 md:text-[56px]">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-[13px] uppercase tracking-eyebrow text-ink-400">
          Last updated · April 2025
        </p>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[220px_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-blue-900">
                On this page
              </div>
              <ul className="mt-5 space-y-3 text-[14px]">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-2 text-ink-600 transition-colors hover:text-blue-900"
                    >
                      <span className="mt-2 h-px w-4 bg-line group-hover:bg-gold-500" />
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <div className="mx-auto w-full max-w-prose">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-32 pb-12">
                <h2 className="font-display text-[28px] font-medium leading-tight text-blue-900">
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-[17px] leading-[1.8] text-ink-900">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.highlight && (
                  <div className="mt-6 border-l-[3px] border-gold-500 bg-cream-100 py-4 pl-5 pr-6">
                    <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-gold-500">
                      Please note
                    </div>
                    <p className="mt-1 text-[15.5px] text-blue-900">
                      {s.highlight}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-cream-200">
        <div className="container-x py-10 text-center text-[14px] text-ink-900">
          Questions? Reach us at{" "}
          <a
            href="mailto:info@adityaamilk.com"
            className="text-blue-900 underline decoration-gold-500 underline-offset-4"
          >
            info@adityaamilk.com
          </a>{" "}
          or{" "}
          <a
            href="tel:+919900255556"
            className="text-blue-900 underline decoration-gold-500 underline-offset-4"
          >
            +91 99002 55556
          </a>
          .
        </div>
      </div>
    </section>
  );
}
