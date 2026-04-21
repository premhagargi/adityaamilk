export type ProductCategory =
  | "Milk"
  | "Flavoured Milk"
  | "Curd & Cultured"
  | "Sweets"
  | "Ghee";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  meta: string;
  image: string;
};

export const products: Product[] = [
  // ── MILK ──────────────────────────────────────────────
  {
    slug: "toned-milk",
    name: "Toned Milk",
    category: "Milk",
    description:
      "Light, everyday milk with balanced fat for daily Indian households.",
    meta: "200ml · 500ml · 1L",
    image: "/products/tonedmilk.jpeg",
  },
  {
    slug: "standardised-milk",
    name: "Standardised Milk",
    category: "Milk",
    description:
      "Consistent fat and SNF — rich, creamy milk ideal for tea, coffee and family use.",
    meta: "500ml · 1L",
    image: "/products/standardisedmilk.jpeg",
  },
  {
    slug: "buffalo-milk",
    name: "Buffalo Milk",
    category: "Milk",
    description:
      "Full-bodied buffalo milk — perfect for curd setting, paneer and sweet preparations.",
    meta: "500ml · 1L",
    image: "/products/buffalomilk.jpeg",
  },

  // ── FLAVOURED MILK ────────────────────────────────────
  {
    slug: "badam-milk",
    name: "Badam Milk",
    category: "Flavoured Milk",
    description:
      "Chilled, lightly sweet milk steeped with ground almonds and saffron.",
    meta: "180ml · 200ml",
    image: "/products/Badam Milk Bottle.png",
  },
  {
    slug: "chocolate-milk",
    name: "Chocolate Milk",
    category: "Flavoured Milk",
    description:
      "Creamy dairy milk with rich cocoa — a classic after-school pour.",
    meta: "180ml · 200ml",
    image: "/products/Chocolate Milk Bottle.png",
  },
  {
    slug: "butterscotch-milk",
    name: "Butterscotch Milk",
    category: "Flavoured Milk",
    description:
      "Buttery-sweet flavoured milk with a warm caramel finish.",
    meta: "180ml · 200ml",
    image: "/products/Butterskotch - Flavoured Milk.png",
  },
  {
    slug: "pista-milk",
    name: "Pista Milk",
    category: "Flavoured Milk",
    description:
      "Cool pistachio milk with a delicate nuttiness and a gentle sweetness.",
    meta: "180ml · 200ml",
    image: "/products/Pista Milk Bottle.png",
  },
  {
    slug: "kulfi-milk",
    name: "Kulfi Milk",
    category: "Flavoured Milk",
    description:
      "All the notes of traditional kulfi — cardamom, nuts, slow-reduced milk — in a chilled bottle.",
    meta: "180ml · 200ml",
    image: "/products/Kulfi - Flavored Milk.png",
  },

  // ── CURD & CULTURED ───────────────────────────────────
  {
    slug: "curd",
    name: "Curd",
    category: "Curd & Cultured",
    description:
      "Thick, naturally set curd with a clean, homemade character.",
    meta: "200g · 400g · 1kg",
    image: "/products/curd.jpeg",
  },
  {
    slug: "paneer",
    name: "Paneer",
    category: "Curd & Cultured",
    description:
      "Soft, milky paneer pressed in small batches — never rubbery. Retail packs for home and a 1 kg block for kitchens and caterers.",
    meta: "200g · 500g · 1kg",
    image: "/products/paneer.jpeg",
  },
  {
    slug: "low-fat-paneer",
    name: "Low-Fat Paneer",
    category: "Curd & Cultured",
    description:
      "Soft-set paneer with a lighter fat profile — the same milky taste, half the richness.",
    meta: "200g · 500g",
    image: "/products/lowfatpaneer.jpeg",
  },
  {
    slug: "lassi",
    name: "Lassi",
    category: "Curd & Cultured",
    description:
      "Thick, sweet curd drink — chilled, silky, lightly spiced. Single-serve pouches and retail bottles.",
    meta: "200ml pouch · 500ml bottle",
    image: "/products/lassiclassic.jpeg",
  },

  // ── FATS ──────────────────────────────────────────────
  {
    slug: "ghee",
    name: "Ghee",
    category: "Ghee",
    description:
      "Golden, grainy, slow-cooked ghee from the cream of our own milk.",
    meta: "200ml · 500ml · 1L",
    image: "/products/Ghee Bottle.jpg.jpeg",
  },

  // ── SWEETS ────────────────────────────────────────────
  {
    slug: "shrikhand",
    name: "Shrikhand",
    category: "Sweets",
    description:
      "Hung curd sweetened gently and perfumed with saffron and cardamom.",
    meta: "250g · 500g",
    image: "/products/Shrikand 1.jpeg",
  },
  {
    slug: "mysore-pak",
    name: "Mysore Pak",
    category: "Sweets",
    description:
      "A soft, porous Mysore Pak, melt-in-mouth, hand-cut in small trays.",
    meta: "250g · 500g",
    image: "/products/mysore pak.png",
  },
  {
    slug: "dharwad-pedha",
    name: "Dharwad Pedha",
    category: "Sweets",
    description:
      "The iconic grainy pedha of North Karnataka — slow-cooked, gently caramelised.",
    meta: "250g · 500g",
    image: "/products/Dharwad pedha Box Mockup.jpg.jpeg",
  },
  {
    slug: "doodh-pedha",
    name: "Doodh Pedha",
    category: "Sweets",
    description:
      "Classic reduced-milk pedha — soft, milky and lightly cardamom-scented.",
    meta: "250g · 500g",
    image: "/products/doodhpedha.png",
  },
  {
    slug: "phika-pedha",
    name: "Phika Pedha",
    category: "Sweets",
    description:
      "Unsweetened khoa pedha — a pure, milky bite used in temples and traditional offerings.",
    meta: "250g · 500g",
    image: "/products/phikapedha.png",
  },
  {
    slug: "kaju-katli",
    name: "Kaju Katli",
    category: "Sweets",
    description:
      "Fine cashew fudge with a whisper of silver leaf — classic, clean, festive.",
    meta: "250g · 500g",
    image: "/products/kaju katli final.png",
  },
  {
    slug: "kunda",
    name: "Kunda",
    category: "Sweets",
    description:
      "Belagavi's beloved caramelised milk sweet, cooked down the slow, old way.",
    meta: "250g · 500g",
    image: "/products/Kunda Box Mockup.jpg.jpeg",
  },
  {
    slug: "milk-cake",
    name: "Milk Cake",
    category: "Sweets",
    description:
      "Dense, grainy milk cake with a deep, roasted-milk character.",
    meta: "250g · 500g",
    image: "/products/Milk cake Box Mockup.jpg.jpeg",
  },
];

export type Achievement = {
  year: string;
  eyebrow: string;
  title: string;
  body: string;
  highlights?: string[];
  images: { src: string; alt: string }[];
};

export const achievements: Achievement[] = [
  {
    year: "2023",
    eyebrow: "Global Partner Visit",
    title: "Hindustan Unilever (Wall's) Global Team visit",
    body:
      "Hindustan Unilever (Wall's) Global Team visit to Vijaykant Dairy & Food Products Ltd — a tour of the Neginhal plant, the frozen-dessert line and the in-house lab, conducted by the global leadership of one of the most demanding partners in the category.",
    images: [
      { src: "/images/aditya1.jpg", alt: "Wall's global team at Vijaykant Dairy" },
      { src: "/images/aditya2.jpg", alt: "Plant walk-through with Wall's leadership" },
    ],
  },
  {
    year: "2021",
    eyebrow: "Top 100 · All India",
    title: "India SME 100 Awards",
    body:
      "Vijaykant Dairy and Food Products Ltd has been awarded the \"INDIA SME 100 Awards\" for scoring in the Top 100 in the overall evaluation of Financial & Non-Financial Parameters amongst 33,102 nominations.",
    highlights: [
      "Top 100 of 33,102 nominations",
      "Financial & non-financial parameters",
    ],
    images: [
      { src: "/images/india-sme-one.jpg", alt: "India SME 100 Award recognition" },
      { src: "/images/india-sme-two.jpg", alt: "India SME 100 Award ceremony" },
    ],
  },
  {
    year: "2018",
    eyebrow: "Presented by Hon. MSME Minister",
    title: "India Small Giant Award 2018",
    body:
      "Vijaykant Dairy and Food Products Ltd has been awarded the SMALL GIANT AWARD 2018, presented by Hon. MSME Minister Shri Giriraj Singh — a recognition of mid-scale manufacturers that compete on quality rather than size.",
    highlights: ["Presented by Hon. Giriraj Singh, MSME Minister"],
    images: [
      { src: "/images/small-giant-one.jpg", alt: "Small Giant Award 2018 ceremony" },
      { src: "/images/small-giant-two.jpg", alt: "Small Giant Award 2018 recognition" },
    ],
  },
  {
    year: "2017",
    eyebrow: "Dupont · Industry Jury",
    title: "The Great Indian Ice Cream & Frozen Dessert Contest",
    body:
      "Dupont — The Great Indian Ice Cream and Frozen Dessert Contest. Gold award for Best Chocolate Ice Cream, and Best-in-Class award for Vanilla Frozen Dessert — judged by industry peers on taste, texture and consistency.",
    highlights: [
      "Gold · Best Chocolate Ice Cream",
      "Best-in-Class · Vanilla Frozen Dessert",
    ],
    images: [
      { src: "/images/frozen-dessert.jpg", alt: "Great Indian Ice Cream Contest award" },
    ],
  },
];

export const qcTests = [
  "Organoleptic evaluation",
  "Temperature check",
  "MBRT (shelf-life)",
  "Adulterant screen",
  "Fat (Gerber)",
  "SNF estimation",
  "Protein analysis",
  "Lactose profile",
  "Acidity (titratable)",
  "pH measurement",
  "COB test",
  "Alcohol stability",
  "Antibiotic residue",
  "Neutraliser check",
  "Preservative scan",
  "Sugar detection",
  "Starch detection",
  "Urea detection",
  "Detergent residue",
  "Microbial load",
  "Phosphatase test",
];

import parloursData from "./parlours.json";

export type Parlour = {
  name: string;
  state: string;
  city: string;
  address: string;
  contact: string;
};

export const parlours: Parlour[] = parloursData as Parlour[];
