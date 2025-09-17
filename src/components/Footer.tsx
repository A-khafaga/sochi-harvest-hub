import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-16">
      <div className="px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Logo and Social Media */}
          <div>
            <div className="mb-8">
              <img src="/6.png" alt="SOCHI logo" className="w-30 h-40 mr-11  mb-2" />
              <h3 className="text-2xl font-bold m-2">Sochi</h3>
              <h4 className="text-xl m-2">Agricultural</h4>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white m-2 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white m-2 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white m-2 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Explore Menu */}
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <nav className="space-y-3">
              <a href="#home" className="block hover:text-green-200 transition-colors">About</a>
              <a href="#products" className="block hover:text-green-200 transition-colors">Products</a>
              <a href="#certificates" className="block hover:text-green-200 transition-colors">Certificates</a>
              <a href="#contact" className="block hover:text-green-200 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-green-500 mt-12 pt-8 text-center">
          <p>&copy; 2024 SOCHI Agricultural. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;