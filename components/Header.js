import { useState } from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiChevronDown, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useInquiryCart } from "@/lib/InquiryCartContext";
import GlobalSearch from "@/components/GlobalSearch";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    label: "Markets",
    href: "#",
    children: [
      { label: "Maritime", href: "/markets/maritime" },
      { label: "Naval", href: "/markets/naval" },
      { label: "Industrial", href: "/markets/industrial" },
      { label: "Maritime Training", href: "/markets/training" },
      { label: "Ports & Harbours", href: "/markets/ports" },
    ],
  },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Navigation", href: "/products/navigation" },
      { label: "Communication", href: "/products/communication" },
      { label: "Electrical", href: "/products/electrical" },
      { label: "Automation", href: "/products/automation" },
      { label: "Fleet Compliance", href: "/products/fleet" },
      { label: "Aids to Navigation", href: "/products/aids" },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "Services & Upgrades", href: "/solutions/services" },
      { label: "New Building", href: "/solutions/new-building" },
      { label: "Maritime Training", href: "/solutions/training" },
      { label: "Port Management", href: "/solutions/port-management" },
      { label: "Surveillance", href: "/solutions/surveillance" },
      { label: "Green Ship", href: "/solutions/green-ship" },
    ],
  },
  {
    label: "Media",
    href: "#",
    children: [
      { label: "News", href: "/media/news" },
      { label: "Events", href: "/media/events" },
      { label: "Blogs", href: "/media/blogs" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { totalItems } = useInquiryCart();

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-9">
          <div className="flex items-center gap-5">
            <a
              href="tel:+97144310836"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FiPhone size={12} />
              <span>+971 4 431 0836</span>
            </a>
            <a
              href="mailto:info@kduworld.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <FiMail size={12} />
              <span>info@kduworld.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <GlobalSearch />
            <Link
              href="/inquiry-cart"
              className="relative text-white p-1 hover:text-accent transition-colors"
            >
              <FiShoppingCart size={14} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                <FaFacebookF size={12} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaLinkedinIn size={12} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaYoutube size={12} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaXTwitter size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-primary shadow-lg relative">
        {/* White logo background with slope - wrapper clips the shape without affecting nav */}
        <div className="absolute top-0 left-0 h-full w-[50%] lg:w-[30%] overflow-hidden z-0">
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 50px) 100%, 0 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="KDU"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-white text-[13px] font-medium px-3.5 py-5 flex items-center gap-1 hover:text-accent transition-colors uppercase tracking-wide"
                >
                  {item.label}
                  {item.children && <FiChevronDown size={12} />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-b min-w-[220px] py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

      </nav>

      {/* Mobile Nav Overlay + Menu */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="lg:hidden fixed top-[100px] left-0 right-0 bg-primary-dark border-t border-white/10 max-h-[70vh] overflow-y-auto z-50 shadow-2xl">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    item.children
                      ? setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      : setMobileOpen(false)
                  }
                  className="w-full text-left text-white text-sm font-medium px-6 py-3 flex items-center justify-between hover:bg-primary transition-colors uppercase tracking-wide"
                >
                  {item.children ? (
                    <>
                      {item.label}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="w-full"
                    >
                      {item.label}
                    </Link>
                  )}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="bg-black/20">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-10 py-2.5 text-sm text-gray-300 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
