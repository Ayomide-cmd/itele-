import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCart } from "../../../components/AddToCart";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { getProductBySlug, products } from "../../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="page-shell">
      <Header />

      <section className="product-detail">
        <div className="product-detail-image">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="product-detail-copy">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>
            <p className="product-detail-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <AddToCart
              product={{
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />
          </div>
      </section>

      <Footer />
    </main>
  );
}
