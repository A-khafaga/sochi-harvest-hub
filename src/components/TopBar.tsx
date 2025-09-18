import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-green-800 text-white py-2 text-sm">
      <div className="px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Smouha - Alexandria, Egypt</span>
          </div>
        </div>

        {/* Email Info - Centered */}
        <div className="flex items-center justify-center space-x-2 mb-2 md:mb-0">
          <Mail className="h-4 w-4" />
          <span>info@sochi-agricultural.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61573912655640" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="Facebook">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/sochiagricultural/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/company/sochi-agricultural" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
