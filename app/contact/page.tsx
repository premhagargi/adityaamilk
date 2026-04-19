import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Adityaa Milk — dealership, B2B supply, product queries or press. Call +91 99002 55556 or write to info@adityaamilk.com.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Adityaa Milk",
    description:
      "Speak to our team in Belagavi, Karnataka — dealerships, institutional supply and product queries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
