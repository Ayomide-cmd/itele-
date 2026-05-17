"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CartProduct = {
  slug: string;
  name: string;
  price: string;
  image: string;
};

export function AddToCart({ product }: { product: CartProduct }) {
  const [added, setAdded] = useState(false);
  const router = useRouter();

  function handleAddToCart() {
    const cartItem = {
      ...product,
      quantity: 1,
    };

    const existingCart = window.localStorage.getItem("itele-cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    const existingItem = cart.find(
      (item: CartProduct) => item.slug === product.slug,
    );

    const nextCart = existingItem
      ? cart.map((item: CartProduct & { quantity: number }) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...cart, cartItem];

    window.localStorage.setItem("itele-cart", JSON.stringify(nextCart));
    setAdded(true);
    router.push("/cart");
  }

  return (
    <button
      className="add-to-cart"
      type="button"
      onClick={handleAddToCart}
    >
      {added ? "Added" : "Add to Cart"}
    </button>
  );
}
