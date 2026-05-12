import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionTitle } from "../../components/SectionTitle";
import { products } from "../../data/products";

export default function CollectionsPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="collection-page">
        <SectionTitle eyebrow="Fine jewelry by Itele" title="Collections" />

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
