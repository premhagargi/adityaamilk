import type { MetadataRoute } from "next";

const SITE_URL = "https://www.adityaamilk.com";

const pages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/achievements", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/find-parlour", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/investor-desk", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

// Investor Desk documents — published so search engines can surface each PDF directly.
const documents = [
  "/documents/Board of Directors.pdf",
  "/documents/BoardCommittees.pdf",
  "/documents/tcIndependentdirectors.pdf",
  "/documents/Nodal Officer.pdf",
  "/documents/CSRPolicy.pdf",
  "/documents/remunerationpolicy.pdf",
  "/documents/vigilmechanism.pdf",
  "/documents/Company Details.pdf",
  "/documents/detailsinvestors.pdf",
  "/documents/unpaiddividend.pdf",
  "/documents/Scrutinizer Report.pdf",
  "/documents/business standrd bangalore 2025.pdf",
  "/documents/kp2025.jpg",
];

function encodePath(p: string) {
  return "/" + p.replace(/^\//, "").split("/").map(encodeURIComponent).join("/");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pageEntries = pages.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const docEntries = documents.map((d) => ({
    url: `${SITE_URL}${encodePath(d)}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...pageEntries, ...docEntries];
}
