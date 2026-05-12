export type Product = {
  slug: string;
  name: string;
  price: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
};

export const products: Product[] = [
  {
    slug: "maris-pearl-choker",
    name: "Maris Pearl Choker",
    price: "₦382,450.00",
    category: "Necklaces",
    image:
      "https://i.pinimg.com/736x/48/6c/51/486c514e5eb8a5d24ba3a9ac45f77cbc.jpg",
    description:
      "A luminous pearl choker designed for refined evening styling and understated bridal moments.",
  },
  {
    slug: "halo-round-natural-diamond-earrings",
    name: "0.4ct Halo Round Natural Diamond Earrings",
    price: "₦1,650,000.00",
    category: "Earrings",
    image:
      "https://i.pinimg.com/1200x/f4/93/69/f49369aff8345ba7e2c6b9e1d86f5c66.jpg",
    description:
      "Classic halo diamond earrings with a brilliant round profile and an elegant high-polish finish.",
  },
  {
    slug: "aeda-elongated-oval-moissanite-engagement-ring",
    name: "18 Karat Aeda Elongated Oval Fully Moissanite Engagement Ring",
    price: "₦3,350,000.00",
    category: "Rings",
    image:
      "https://i.pinimg.com/1200x/52/b5/b7/52b5b744b5231549ab3fafa4398b5604.jpg",
    description:
      "An elongated oval engagement ring in 18 karat gold with fully set moissanite brilliance.",
  },
  {
    slug: "garnet-heart-tennis-bracelet",
    name: "Garnet Heart Tennis Bracelet - 18k Gold Set With Swiss Rubies",
    price: "₦2,600,000.00",
    category: "Bracelets",
    image:
      "https://i.pinimg.com/736x/b8/79/e5/b879e5f55be853669ac917efe4760154.jpg",
    description:
      "A romantic tennis bracelet in 18k gold, finished with garnet hearts and Swiss ruby accents.",
  },
  {
    slug: "bloom-imitation-ivory-earrings",
    name: "Bloom - Imitation Ivory Earrings",
    price: "₦800,000.00",
    category: "Earrings",
    image:
      "https://i.pinimg.com/1200x/70/1a/c6/701ac6b58f961e9f4a662405f0a7844b.jpg",
    images: [
      "https://i.pinimg.com/1200x/70/1a/c6/701ac6b58f961e9f4a662405f0a7844b.jpg",
      "https://i.pinimg.com/736x/52/1d/dd/521ddd2d2951a3fece8a0a402f580d18.jpg",
    ],
    description:
      "Sculptural imitation ivory earrings with a soft bloom silhouette for statement occasions.",
  },
];

export const newReleaseProducts = products.slice(0, 3);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
