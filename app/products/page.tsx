import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the Adityaa Milk range — toned milk, full cream milk, curd, paneer, ghee, shrikhand, Mysore Pak, khoa and more. Thirteen products made to one quality standard in Belagavi, Karnataka.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products · Adityaa Milk",
    description:
      "Thirteen everyday essentials — milk, curd, paneer, ghee and traditional sweets — made to one quality standard.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
