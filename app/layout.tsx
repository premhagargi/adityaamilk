import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const SITE_URL = "https://www.adityaamilk.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Adityaa Milk — Quality, Health and Hygiene",
    template: "%s · Adityaa Milk",
  },
  description:
    "Adityaa Milk is a brand of Vijaykant Dairy and Food Products Limited — premium dairy products from Belagavi, Karnataka, made on imported Swedish and Italian machinery with a 21-point quality protocol.",
  keywords: [
    "Adityaa Milk",
    "Vijaykant Dairy",
    "Belagavi dairy",
    "Karnataka milk",
    "paneer",
    "ghee",
    "curd",
    "Mysore Pak",
    "ISO 22000",
    "FSSAI",
  ],
  authors: [{ name: "Vijaykant Dairy and Food Products Limited" }],
  creator: "Vijaykant Dairy and Food Products Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Adityaa Milk",
    title: "Adityaa Milk — Quality, Health and Hygiene",
    description:
      "Premium dairy products from Belagavi, Karnataka, built on imported precision and a 21-point quality protocol.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adityaa Milk — Quality, Health and Hygiene",
    description:
      "Premium dairy products from Belagavi, Karnataka. A brand of Vijaykant Dairy and Food Products Limited.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vijaykant Dairy and Food Products Limited",
  alternateName: "Adityaa Milk",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  slogan: "Quality, Health and Hygiene",
  foundingDate: "1994",
  foundingLocation: "Belagavi, Karnataka, India",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9900255556",
    contactType: "customer service",
    email: "info@adityaamilk.com",
    areaServed: "IN",
    availableLanguage: ["English", "Kannada", "Hindi"],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "LIG 159, Mahantesh Nagar",
      addressLocality: "Belagavi",
      postalCode: "590016",
      addressRegion: "Karnataka",
      addressCountry: "IN",
      name: "Corporate Office",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Neginhal Village, Bailhongal Taluk",
      addressLocality: "Belagavi",
      postalCode: "591102",
      addressRegion: "Karnataka",
      addressCountry: "IN",
      name: "Factory",
    },
  ],
  sameAs: [],
  awards: [
    "Hindustan Unilever (Wall's) Global Team visit",
    "India SME 100 Award",
    "India Small Giant Award 2018",
    "Gold – Great Indian Ice Cream Contest",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans text-ink-900">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="content" className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
