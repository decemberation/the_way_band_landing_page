import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Live", href: "#video" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#booking" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#f5f0e8] border-b border-black/10">
      <div className="container flex items-center justify-between py-3">
        {/* Brand */}
        <a href="#">
          <Image
            src="/logo.svg"
            alt="The Way Band"
            width={120}
            height={48}
            className="h-12 w-auto flex-shrink-0"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 text-sm font-semibold tracking-[0.15em] uppercase text-[#1a1a1a]">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="hover:opacity-60 transition-opacity">
              {label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 text-[#1a1a1a]">
          <a href="https://www.facebook.com/profile.php?id=61586955974680" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-60 transition-opacity">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com/thewayband__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}
