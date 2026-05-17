import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/collections/${product.slug}`} className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 900px) 100vw, 33vw"
          className="product-image"
        />
      </Link>

      <Link href={`/collections/${product.slug}`} className="product-meta">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </Link>

      <p>{product.category}</p>
    </article>
  );
}
