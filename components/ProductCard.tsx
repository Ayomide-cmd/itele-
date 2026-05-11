import { Heart } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <button aria-label={`Save ${product.name}`} className="heart-button">
          <Heart size={17} strokeWidth={1.8} />
        </button>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 760px) 100vw, 31vw"
          className="product-image"
        />
      </div>
      <div className="product-meta">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <p>{product.category}</p>
    </article>
  );
}
