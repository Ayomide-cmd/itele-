import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Shop</h3>
          <Link href="/collections">All Jewelry</Link>
          <Link href="/collections">Necklaces</Link>
          <Link href="/collections">Rings</Link>
          <Link href="/collections">Earrings</Link>
        </div>

        <div>
          <h3>Policies</h3>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Shipping Policy</Link>
          <Link href="/">Returns</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/">Contact Us</Link>
          <Link href="/">Journal</Link>
        </div>

        <div>
          <h3>Connect</h3>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Email</Link>
        </div>
      </div>

      <div className="footer-base">
        <span>© 2026 Itele</span>
        <strong>ITELE</strong>
      </div>
    </footer>
  );
}
