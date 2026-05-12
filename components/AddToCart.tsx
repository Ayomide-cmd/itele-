"use client";

import { useState } from "react";

export function AddToCart({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      className="add-to-cart"
      type="button"
      onClick={() => setAdded(true)}
    >
      {added ? `${productName} Added` : "Add to Cart"}
    </button>
  );
}
