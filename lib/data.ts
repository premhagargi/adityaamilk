export type ProductCategory =
  | "Milk"
  | "Flavoured Milk"
  | "Curd & Cultured"
  | "Sweets"
  | "Fats";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  meta: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "fresh-toned-milk",
    name: "Fresh Toned Milk",
    category: "Milk",
    description:
      "Light, everyday milk with balanced fat for daily Indian households.",
    meta: "200ml · 500ml · 1L",
    image: "/products/2.png",
  },
  {
    slug: "standardized-milk",
    name: "Standardized Milk",
    category: "Milk",
    description:
      "Consistent fat and SNF levels, ideal for tea, coffee and family use.",
    meta: "500ml · 1L",
    image: "/products/3.png",
  },
  {
    slug: "full-cream-milk",
    name: "Full Cream Milk",
    category: "Milk",
    description:
      "Rich, creamy milk with a full-bodied taste — a breakfast classic.",
    meta: "500ml · 1L",
    image: "/products/4.png",
  },
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
    name: "Kulfi Flavoured Milk",
    category: "Flavoured Milk",
    description:
      "All the notes of traditional kulfi — cardamom, nuts, slow-reduced milk — in a chilled bottle.",
    meta: "180ml · 200ml",
    image: "/products/Kulfi - Flavored Milk.png",
  },
  {
    slug: "curd",
    name: "Curd",
    category: "Curd & Cultured",
    description:
      "Thick, naturally set curd with a clean, homemade character.",
    meta: "200g · 400g · 1kg",
    image: "/products/WhatsApp Image 2026-04-19 at 12.09.28.jpeg",
  },
  {
    slug: "pot-curd",
    name: "Pot Curd",
    category: "Curd & Cultured",
    description:
      "Set in traditional earthen pots, with the mellow, creamy finish of old Karnataka kitchens.",
    meta: "400g · 1kg",
    image: "/products/WhatsApp Image 2026-04-19 at 12.10.18.jpeg",
  },
  {
    slug: "fresh-curd",
    name: "Fresh Curd",
    category: "Curd & Cultured",
    description:
      "Delivered within hours of setting, for a bright and lively taste.",
    meta: "200g · 400g",
    image: "/products/WhatsApp Image 2026-04-19 at 12.10.18 (1).jpeg",
  },
  {
    slug: "paneer",
    name: "Paneer",
    category: "Curd & Cultured",
    description:
      "Soft, milky paneer pressed in small batches — never rubbery.",
    meta: "200g · 500g · 1kg",
    image: "/products/WhatsApp Image 2026-04-19 at 12.10.19.jpeg",
  },
  {
    slug: "lassi",
    name: "Lassi",
    category: "Curd & Cultured",
    description:
      "Thick, sweet curd drink — chilled, silky, lightly spiced.",
    meta: "200ml · 500ml",
    image: "/products/WhatsApp Image 2026-04-19 at 12.11.20.jpeg",
  },
  {
    slug: "buttermilk",
    name: "Buttermilk",
    category: "Curd & Cultured",
    description:
      "Cooling masala buttermilk with curry leaves, ginger and a gentle salt.",
    meta: "200ml · 500ml · 1L",
    image: "/products/WhatsApp Image 2026-04-19 at 12.11.21.jpeg",
  },
  {
    slug: "ghee",
    name: "Ghee",
    category: "Fats",
    description:
      "Golden, grainy, slow-cooked ghee from the cream of our own milk.",
    meta: "200ml · 500ml · 1L",
    image: "/products/Ghee Bottle.jpg.jpeg",
  },
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
    image: "/products/WhatsApp Image 2026-04-19 at 12.11.21 (1).jpeg",
  },
  {
    slug: "khoa-mava",
    name: "Khoa & Mava",
    category: "Sweets",
    description:
      "Slow-reduced khoa for halwais and home kitchens that value the old way.",
    meta: "250g · 500g · 1kg",
    image: "/products/6.png",
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

export const achievements = [
  {
    year: "2023",
    title: "Hindustan Unilever (Wall's) Global Team visit",
    body:
      "The global leadership of Wall's toured our Neginhal facility to review our frozen-dessert manufacturing discipline — a quiet, reassuring nod from a demanding partner.",
  },
  {
    year: "2021",
    title: "India SME 100 Awards",
    body:
      "Recognised among India's top 100 SMEs for operational excellence and sustained growth in the dairy sector.",
  },
  {
    year: "2018",
    title: "India Small Giant Award",
    body:
      "Honoured for building a mid-scale manufacturer that competes on quality, not size — the Small Giant distinction.",
  },
  {
    year: "2017",
    title: "Gold · Great Indian Ice Cream Contest",
    body:
      "Gold for Best Chocolate Ice Cream and Best-in-class for Vanilla Frozen Dessert — judged by industry peers.",
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
