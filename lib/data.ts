export type Product = {
  slug: string;
  name: string;
  category: "Milk" | "Curd & Cultured" | "Sweets" | "Fats";
  description: string;
  meta: string;
};

export const products: Product[] = [
  {
    slug: "fresh-toned-milk",
    name: "Fresh Toned Milk",
    category: "Milk",
    description:
      "Light, everyday milk with balanced fat for daily Indian households.",
    meta: "200ml · 500ml · 1L",
  },
  {
    slug: "standardized-milk",
    name: "Standardized Milk",
    category: "Milk",
    description:
      "Consistent fat and SNF levels, ideal for tea, coffee and family use.",
    meta: "500ml · 1L",
  },
  {
    slug: "full-cream-milk",
    name: "Full Cream Milk",
    category: "Milk",
    description:
      "Rich, creamy milk with a full-bodied taste — a breakfast classic.",
    meta: "500ml · 1L",
  },
  {
    slug: "curd",
    name: "Curd",
    category: "Curd & Cultured",
    description:
      "Thick, naturally set curd with a clean, homemade character.",
    meta: "200g · 400g · 1kg",
  },
  {
    slug: "pot-curd",
    name: "Pot Curd",
    category: "Curd & Cultured",
    description:
      "Set in traditional earthen pots, with the mellow, creamy finish of old Karnataka kitchens.",
    meta: "400g · 1kg",
  },
  {
    slug: "fresh-curd",
    name: "Fresh Curd",
    category: "Curd & Cultured",
    description:
      "Delivered within hours of setting, for a bright and lively taste.",
    meta: "200g · 400g",
  },
  {
    slug: "shrikhand",
    name: "Shrikhand",
    category: "Sweets",
    description:
      "Hung curd sweetened gently and perfumed with saffron and cardamom.",
    meta: "250g · 500g",
  },
  {
    slug: "paneer",
    name: "Paneer",
    category: "Curd & Cultured",
    description:
      "Soft, milky paneer pressed in small batches — never rubbery.",
    meta: "200g · 500g · 1kg",
  },
  {
    slug: "lassi",
    name: "Lassi",
    category: "Curd & Cultured",
    description:
      "Thick, sweet curd drink — chilled, silky, lightly spiced.",
    meta: "200ml · 500ml",
  },
  {
    slug: "buttermilk",
    name: "Buttermilk",
    category: "Curd & Cultured",
    description:
      "Cooling masala buttermilk with curry leaves, ginger and a gentle salt.",
    meta: "200ml · 500ml · 1L",
  },
  {
    slug: "ghee",
    name: "Ghee",
    category: "Fats",
    description:
      "Golden, grainy, slow-cooked ghee from the cream of our own milk.",
    meta: "200ml · 500ml · 1L",
  },
  {
    slug: "mysore-pak",
    name: "Mysore Pak",
    category: "Sweets",
    description:
      "A soft, porous Mysore Pak, melt-in-mouth, hand-cut in small trays.",
    meta: "250g · 500g",
  },
  {
    slug: "khoa-mava",
    name: "Khoa & Mava",
    category: "Sweets",
    description:
      "Slow-reduced khoa for halwais and home kitchens that value the old way.",
    meta: "250g · 500g · 1kg",
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

export const parlours = [
  {
    name: "Adityaa Parlour — Tilakwadi",
    city: "Belagavi",
    pincode: "590006",
    address: "Shop 14, RPD Cross, Tilakwadi, Belagavi",
    phone: "+91 99002 55556",
    km: 0.9,
  },
  {
    name: "Adityaa Parlour — Mahantesh Nagar",
    city: "Belagavi",
    pincode: "590016",
    address: "Opp. LIG 159, Mahantesh Nagar, Belagavi",
    phone: "+91 99002 55556",
    km: 1.4,
  },
  {
    name: "Adityaa Parlour — Bailhongal Main",
    city: "Bailhongal",
    pincode: "591102",
    address: "Main Road, Bailhongal, Dist. Belagavi",
    phone: "+91 99002 55556",
    km: 36.2,
  },
  {
    name: "Adityaa Parlour — Hubballi Central",
    city: "Hubballi",
    pincode: "580020",
    address: "Gokul Road, Near Unkal, Hubballi",
    phone: "+91 99002 55556",
    km: 102.6,
  },
  {
    name: "Adityaa Parlour — Dharwad Campus",
    city: "Dharwad",
    pincode: "580003",
    address: "Saptapur Circle, Dharwad",
    phone: "+91 99002 55556",
    km: 74.1,
  },
];
