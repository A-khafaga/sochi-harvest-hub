import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useHashLink } from "@/hooks/useHashLink";

const Footer = () => {
  const handleHashLink = useHashLink();
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 bg-green-600 text-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <img src="/6.png" alt="SOCHI logo" className="h-28 mb-4" />
              <p className="text-sm text-green-100 leading-relaxed max-w-xs">
                A trusted manufacturer and exporter of premium fresh and frozen fruits and vegetables from Egypt.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61573912655640" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sochiagricultural/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/sochi-agricultural" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Menu */}
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <nav className="space-y-3">
              <Link to="/" className="block hover:text-green-200 transition-colors">Home</Link>
              <Link to="/#about" onClick={(e) => handleHashLink(e, "/#about")} className="block hover:text-green-200 transition-colors">About Us</Link>
              <Link to="/#products" onClick={(e) => handleHashLink(e, "/#products")} className="block hover:text-green-200 transition-colors">Products</Link>
              <Link to="/#certificates" onClick={(e) => handleHashLink(e, "/#certificates")} className="block hover:text-green-200 transition-colors">Certificates</Link>
              <Link to="/calendar" className="block hover:text-green-200 transition-colors">Calendar</Link>
              <Link to="/#contact" onClick={(e) => handleHashLink(e, "/#contact")} className="block hover:text-green-200 transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-green-100">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-green-200" />
                <span>Cairo Alexandria Agricultural Road, Pharma City 3 Compound, El-Narges Building, Office 104, Alexandria, Egypt</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 shrink-0 text-green-200" />
                <div>
                  <a href="mailto:Export@sochi-agricultural.com" className="block hover:text-white transition-colors">Export@sochi-agricultural.com</a>
                  <a href="mailto:info@sochi-agricultural.com" className="block hover:text-white transition-colors">info@sochi-agricultural.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 shrink-0 text-green-200" />
                <div>
                  <a href="tel:+2034046403" className="block hover:text-white transition-colors">+20 34046403</a>
                  <a href="https://wa.me/201112409921" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">+20 111 240 9921 (WhatsApp)</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500 mt-12 pt-8 text-center text-sm text-green-200">
          <p>&copy; {new Date().getFullYear()} SOCHI Agricultural. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;