import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src="https://kduworld.com/wp-content/uploads/2022/04/KDU-LOGO-White.png"
              alt="KDU"
              className="h-12 w-auto mb-5"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Established in 2005, KDU Group has been successfully delivering
              innovative solutions and products around the world through its
              collaborations with global change makers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FaYoutube size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FaXTwitter size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Markets", "Solutions", "Products", "Disclaimers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-300 text-sm hover:text-accent hover:pl-1 transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                "About",
                "Media",
                "Contact",
                "Enquiry Cart",
                "Partners",
                "Privacy Policy",
                "Careers",
                "Case Studies",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 text-sm hover:text-accent hover:pl-1 transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-accent shrink-0" size={16} />
                <p className="text-gray-300 text-sm leading-relaxed">
                  WH #427, Dubai Maritime City,
                  <br />
                  Dubai, UAE (P.O. Box 90878)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-accent shrink-0" size={16} />
                <a
                  href="tel:+97144310836"
                  className="text-gray-300 text-sm hover:text-accent transition-colors"
                >
                  +971 4 431 0836
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-accent shrink-0" size={16} />
                <a
                  href="mailto:info@kduworld.com"
                  className="text-gray-300 text-sm hover:text-accent transition-colors"
                >
                  info@kduworld.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} KDU. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
