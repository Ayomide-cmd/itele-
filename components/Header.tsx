import Link from "next/link";
 
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}
 
function BagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
 
export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        
        <Link href="/" className="brand" aria-label="Go to homepage">
  Ìtẹ̀lé
</Link>

 
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/boutique">Our Boutique</Link>
          <Link href="/contact">Contact</Link>
        </nav>
 
        <div className="nav-actions" aria-label="Store actions">
          <Link href="/search" aria-label="Search">
            <SearchIcon />
          </Link>
          <Link href="/bag" aria-label="Shopping bag">
            <BagIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}