import { Facebook, Instagram, Music2 } from "lucide-react";
import Image from "next/image";
import { gallery } from "@/data/products";

const footerGroups = [
  {
    title: "Shop",
    links: ["All Jewelry", "Rings", "Necklaces", "Order Tracking"],
  },
  {
    title: "Policies",
    links: ["Terms of Service", "Privacy Policy", "Shipping Policy", "Returns"],
  },
  {
    title: "Company",
    links: ["Our Story", "Contact Us", "Journal"],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="gallery-strip" aria-label="Itele style gallery">
        {gallery.map((item) => (
          <div className="gallery-image" key={item}>
            <Image src={item} alt="" fill sizes="25vw" />
          </div>
        ))}
      </div>
      <div className="footer-grid">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className="socials">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.7} />
            </a>
            <a href="#" aria-label="TikTok">
              <Music2 size={20} strokeWidth={1.7} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 Itele</span>
        <strong>ITELE</strong>
      </div>
    </footer>
  );
}
