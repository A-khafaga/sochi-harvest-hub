import { Download } from 'lucide-react';

const FloatingDownloadButton = () => {
  return (
    <a
      href="/sochi-profile.pdf"
      download="SOCHI-Agricultural-Company-Profile.pdf"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Download Company Profile"
      title="Download Company Profile"
    >
      <Download className="h-6 w-6" />
    </a>
  );
};

export default FloatingDownloadButton;