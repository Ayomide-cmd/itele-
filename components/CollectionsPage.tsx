import Link from "next/link";
import { Header} from '../components/Header';
import {Footer} from '../components/Footer';

const collections = [
  {
    slug: "necklaces",
    title: "Necklaces",
    description: "Delicate chains and pendants crafted in 18k gold and sterling silver.",
    accent: "#c8b8a2",
  },
  {
    slug: "engagement-rings",
    title: "Engagement Rings",
    description: "Timeless solitaires and bespoke settings for life's defining moment.",
    accent: "#b5c4c1",
  },
  {
    slug: "bracelets",
    title: "Bracelets",
    description: "From understated tennis bracelets to sculptural cuffs.",
    accent: "#c9c0b0",
  },
  {
    slug: "earrings",
    title: "Earrings",
    description: "Studs, drops, and hoops refined for every occasion.",
    accent: "#bfb8c3",
  },
];

export default function CollectionsPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="collections-hero">
        <p className="collections-eyebrow">Ìtẹ̀lé</p>
        <h1 className="collections-heading">Our Collections</h1>
        <p className="collections-subheading">
          Each piece is conceived in Switzerland and brought to life by hand — a
          quiet act of devotion to the art of adornment.
        </p>
      </section>

      <section className="collections-grid-section">
        <div className="collections-grid">
          {collections.map((col) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="collection-card"
            >
              <div
                className="collection-card-image"
                style={{ backgroundColor: col.accent }}
              >
                <span className="collection-card-initial">
                  {col.title.charAt(0)}
                </span>
              </div>
              <div className="collection-card-body">
                <h2 className="collection-card-title">{col.title}</h2>
                <p className="collection-card-desc">{col.description}</p>
                <span className="collection-card-cta">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}