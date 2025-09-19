import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4">
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
              <a href="/" className="block hover:text-green-200 transition-colors">Home</a>
              <a href="/#about" className="block hover:text-green-200 transition-colors">About Us</a>
              <a href="/#products" className="block hover:text-green-200 transition-colors">Products</a>
              <a href="/#certificates" className="block hover:text-green-200 transition-colors">Certificates</a>
              <a href="/calendar" className="block hover:text-green-200 transition-colors">Calendar</a>
              <a href="/#contact" className="block hover:text-green-200 transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-green-100">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-green-200" />
                <span>Smouha - Alexandria, Egypt</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 shrink-0 text-green-200" />
                <a href="mailto:info@sochi-agricultural.com" className="hover:text-white transition-colors">info@sochi-agricultural.com</a>
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