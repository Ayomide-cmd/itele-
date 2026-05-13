import {Header} from '../../components/Header'
import {Hero} from '../../components/Hero'
import {ProductCard} from '../../components/ProductCard'
import {SectionTitle} from '../../components/SectionTitle'
import { newReleaseProducts } from'../../data/products';
import { Footer } from "../../components/Footer";
 
export default function Home() {
  return (
    <main className="page-shell">
      <Header />
      <Hero />
      <section className="new-releases" id="new-releases">
        <SectionTitle
          eyebrow="Fine Swiss Jewelry"
          title="New Arrivals"
          href="/shop"
        />
        <div className="product-grid">
          {newReleaseProducts.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
 