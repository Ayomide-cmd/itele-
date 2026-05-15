import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function BoutiquePage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="boutique-page">
        <div className="boutique-image">
          <Image
            src="https://i.pinimg.com/736x/35/95/f3/3595f3fb304a394961ee472ea37376c0.jpg"
            alt="Itele flagship boutique interior"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="boutique-copy">
          <p className="boutique-eyebrow">Flagship Store</p>

          <div className="boutique-info">
            <div>
              <h2>Location</h2>
              <div className="boutique-location">
                <h3>Lagos</h3>
                <p>
                  12A Akin Adesola Street,
                  <br />
                  Victoria Island, Lagos,
                  <br />
                  Nigeria.
                </p>
              </div>

              <div className="boutique-location">
                <h3>London</h3>
                <p>
                  27 Bond Street,
                  <br />
                  Mayfair, London W1S 2RH,
                  <br />
                  United Kingdom.
                </p>
              </div>
            </div>

            <div>
              <h2>Hours</h2>
              <p>
                Monday - Friday 10:30 am - 6:00 pm
                <br />
                Saturday 11:00 am - 5:00 pm
                <br />
                Closed on Sundays
              </p>
            </div>
          </div>

          <a
            className="boutique-directions"
            href="https://www.google.com/maps/search/?api=1&query=Victoria+Island+Lagos"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
