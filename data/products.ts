export type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Adera Diamond Ear Cuffs",
    price: "$1,280.00",
    category: "Earrings",
    image: "/assets/adera-ear-cuffs.png",
  },
  {
    name: "Maris Pearl Choker",
    price: "$2,450.00",
    category: "Necklaces",
    image: "/assets/maris-pearl-choker.png",
  },
  {
    name: "Selah Ruby Signet",
    price: "$1,980.00",
    category: "Rings",
    image: "/assets/selah-ruby-signet.png",
  },
];

export const gallery = [
  "/assets/gallery-necklace.png",
  "/assets/gallery-ring.png",
  "/assets/gallery-earrings.png",
  "/assets/gallery-bracelet.png",
];
