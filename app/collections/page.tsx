import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";
import { earrings, necklaces, products, rings } from "../../data/products";

const collectionSections = [
  {
    id: "all-jewelry",
    title: "All Jewelry",
    products,
  },
  {
    id: "necklaces",
    title: "Necklaces",
    products: necklaces,
  },
  {
    id: "rings",
    title: "Rings",
    products: rings,
  },
  {
    id: "earrings",
    title: "Earrings",
    products: earrings,
  },
];

export default function CollectionsPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="collections-catalogue">
        <aside className="collections-sidebar" aria-label="Collections">
          
          <a href="#all-jewelry">All Jewelry</a>
          <a href="#necklaces">Necklaces</a>
          <a href="#rings">Rings</a>
          <a href="#earrings">Earrings</a>
        </aside>

        <div className="collections-content">
          <header className="collections-heading-block">
            
            <h1>Collections</h1>
          </header>

          {collectionSections.map((section) => (
            <section
              className="collection-product-section"
              id={section.id}
              key={section.id}
            >
              <div className="collection-section-heading">
                <h2>{section.title}</h2>
                <span>{section.products.length} Pieces</span>
              </div>

              <div className="product-grid">
                {section.products.map((product) => (
                  <ProductCard product={product} key={product.slug} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
