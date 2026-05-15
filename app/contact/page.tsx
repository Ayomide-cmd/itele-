import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Header />

      <section className="contact-page">
        <div className="contact-heading">
          <p>Client Services</p>
          
          <span>
            For private viewings, bespoke commissions, repairs, and styling
            guidance, our client team will be pleased to assist.
          </span>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Email</h2>
            <a href="mailto:clientcare@itele.com">clientcare@itele.com</a>
            <p>We respond within 24 hours, Monday to Friday.</p>
          </div>

          <div className="contact-card">
            <h2>Phone</h2>
            <a href="tel:+2348004835300">+234 800 ITELE 00</a>
            <p>Available during boutique opening hours.</p>
          </div>

          <div className="contact-card">
            <h2>Private Appointments</h2>
            <a href="mailto:appointments@itele.com">
              appointments@itele.com
            </a>
            <p>Book a Lagos or London consultation with a jewelry specialist.</p>
          </div>
        </div>

        <form className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="How may we assist you?"
            />
          </div>

          <button type="submit">Send Enquiry</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
