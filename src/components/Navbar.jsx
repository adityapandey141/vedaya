import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  MapPin,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Info Bar */}
      <div className="bg-dark-navy text-white py-2.5 hidden lg:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a
              href="mailto:info@vedayarenewables.com"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Mail size={14} className="text-primary" />
              <span>info@vedayarenewables.com</span>
            </a>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-primary" />
              <span>India</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 mr-2">Follow Us:</span>
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook size={14} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter size={14} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram size={14} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-300 z-50 ${isScrolled ? "fixed top-0 bg-white shadow-lg" : "absolute bg-white"}`}
      >
        <div className="container-custom flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Vedaya Renewables"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium hover:text-primary transition-colors relative group py-2 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-dark-navy"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="hidden lg:block btn-primary">
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark-navy"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium hover:text-primary transition-colors py-2 border-b border-gray-100 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-dark-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Contact Us
            </Link>
            <div className="flex items-center gap-4 py-4 justify-center">
              <a
                href="#"
                className="text-dark-navy hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-dark-navy hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-dark-navy hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-dark-navy hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
