import { CartClient } from "../../components/CartClient";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function CartPage() {
  return (
    <main className="page-shell">
      <Header />
      <CartClient />
      <Footer />
    </main>
  );
}
