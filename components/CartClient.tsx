"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export function CartClient() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = window.localStorage.getItem("itele-cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  function updateCart(nextCart: CartItem[]) {
    setCart(nextCart);
    window.localStorage.setItem("itele-cart", JSON.stringify(nextCart));
  }

  function removeItem(slug: string) {
    updateCart(cart.filter((item) => item.slug !== slug));
  }

  if (cart.length === 0) {
    return (
      <section className="cart-page cart-empty">
        <p className="cart-eyebrow">Shopping Cart</p>
        <h1>Your cart is empty</h1>
        <Link href="/shop" className="button button-outline">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <p className="cart-eyebrow">Shopping Cart</p>
        <h1>Your Selection</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.slug}>
              <div className="cart-item-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="120px"
                />
              </div>

              <div className="cart-item-copy">
                <Link href={`/collections/${item.slug}`}>{item.name}</Link>
                <p>{item.price}</p>
                <span>Quantity: {item.quantity}</span>
              </div>

              <button type="button" onClick={() => removeItem(item.slug)}>
                Remove
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <p>
            A client advisor will confirm availability, final sizing, delivery,
            and payment details after checkout.
          </p>
          <button type="button">Request Checkout</button>
          <Link href="/shop">Continue Shopping</Link>
        </aside>
      </div>
    </section>
  );
}
