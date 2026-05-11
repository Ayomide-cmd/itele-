import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="storefront-frame">
        <Header />
        <Hero />

        <section className="new-releases" id="new-releases">
          <SectionTitle
            eyebrow="Made for the timeless woman"
            title="New Releases"
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </div>
        </section>

        <section className="style-gallery">
          <div className="collection-stack">
            {products.map((product) => (
              <div className="collection-row" key={product.name}>
                <div className="collection-image">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 760px) 100vw, 32vw"
                  />
                </div>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-copy">
            <p>Rare metals, hand-set stones, and sculptural restraint.</p>
            <a href="#" className="button button-outline">
              Discover Collection
            </a>
            <h2>Style Gallery</h2>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
