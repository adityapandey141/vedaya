import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Real Estate Sector",
    "Agriculture Domain",
    "Solar Energy",
    "Wind Energy",
    "Bio-fuel Solutions",
    "Property Management",
  ];

  return (
    <footer className="bg-darker-navy pt-16 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Vedaya Renewables"
                className="h-12 w-auto "
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A multidisciplinary enterprise focused on creating long-term value
              through sustainable development across real estate, agriculture,
              and renewable energy.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-navy flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-navy flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-navy flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-navy flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rubik font-bold text-xl text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-rubik font-bold text-xl text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-rubik font-bold text-xl text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <a
                  href="mailto:info@vedayarenewables.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@vedayarenewables.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-accent flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Vedaya Renewables LLP. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
