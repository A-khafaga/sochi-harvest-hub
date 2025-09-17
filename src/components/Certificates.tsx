import globalGapImage from "@/assets/cert-globalgap.jpg";
import sedexImage from "@/assets/cert-smeta.jpg";
import smetaImage from "@/assets/cert-sedex.jpg";
import graspImage from "@/assets/cert-grasp.jpg";
import brcImage from "@/assets/cert-brc.jpg";

const Certificates = () => {
  const certificates = [
    { name: "GRASP", image: globalGapImage },
    { name: "SMETA", image: sedexImage },
    { name: "SMETA", image: sedexImage },
    { name: "GLOBALG.A.P.", image: graspImage },
    { name: "BRC", image: brcImage }
  ];

  return (
    <section id="certificates" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-16">TRUST CERTIFICATES</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={cert.image} 
                alt={cert.name}
                className="w-full h-24 object-contain mb-4"
              />
              <h3 className="font-bold text-sm text-gray-800">{cert.name}</h3>
            </div>
          ))}
        </div>

        {/* Explore Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Explore</h2>
          <div className="max-w-2xl mx-auto">
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Explore our agricultural solutions and services</p>
            </div>
          </div>
        </div>

        {/* SOCHI Agricultural Products */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">SOCHI Agricultural Products</h2>
          <div className="max-w-4xl mx-auto">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Discover our wide range of fresh produce and agricultural products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;