import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="shipping-bar">
        Complimentary delivery on select fine jewelry orders
      </div>

      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Itele home">
          ITELE
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/collections">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/">Our Story</Link>
          <Link href="/">Contact</Link>
        </nav>

        <div className="nav-actions" aria-label="Store actions">
          <Link href="/collections">Search</Link>
          <Link href="/collections">Bag</Link>
        </div>
      </div>
    </header>
  );
}
