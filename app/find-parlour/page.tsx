import type { Metadata } from "next";
import FindParlourClient from "./FindParlourClient";

export const metadata: Metadata = {
  title: "Find a Parlour",
  description:
    "Find Adityaa Milk parlours and retail touchpoints across North Karnataka — Belagavi, Bailhongal, Hubballi, Dharwad and beyond.",
  alternates: { canonical: "/find-parlour" },
  openGraph: {
    title: "Find a Parlour · Adityaa Milk",
    description:
      "600+ retail touchpoints across North Karnataka. Search by pincode or city.",
    url: "/find-parlour",
  },
};

export default function FindParlourPage() {
  return <FindParlourClient />;
}
