import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";

const navItems = ["Shop", "Collections", "Our Story", "Contact"];

export function Header() {
  return (
    <header className="site-header">
      <div className="shipping-bar">
        Complimentary insured shipping on all fine jewelry orders
      </div>
      <div className="nav-shell">
        <a className="brand" href="#" aria-label="Itele home">
          ITELE
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button aria-label="Search">
            <Search size={18} strokeWidth={1.8} />
          </button>
          <button aria-label="Account">
            <UserRound size={18} strokeWidth={1.8} />
          </button>
          <button aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.8} />
          </button>
          <button aria-label="Shopping bag">
            <ShoppingBag size={18} strokeWidth={1.8} />
          </button>
          <button className="mobile-menu" aria-label="Open menu">
            <Menu size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}
