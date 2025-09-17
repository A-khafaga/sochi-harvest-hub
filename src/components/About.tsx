import fruitsImage from "@/assets/fresh-fruits-mix.jpg";
import visionImage from "@/assets/VISION.jpg";
import missionImage from "@/assets/MISSION.jpg";
import valuesImage from "@/assets/VALUES.jpg";
import { Leaf, Snowflake, Recycle, Users, Factory, Package, Globe2, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Vision, Mission, Values Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-white text-center">
            <div className="pb-8 md:pb-0 border-b md:border-b-0 md:border-r border-white/40">
              <img src={visionImage} alt="Vision" className="w-12 h-12 mx-auto mb-4 rounded-full object-cover" />
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <p className="text-green-100">
                To become a leading global name in agricultural exports, recognized for our
                commitment to quality, sustainability, and long-term partnerships with clients.
              </p>
            </div>
            
            <div className="py-8 md:py-0 border-b md:border-b-0 md:border-r border-white/30">
              <img src={missionImage} alt="Mission" className="w-12 h-12 mx-auto mb-4 rounded-full object-cover" />
              <h3 className="text-2xl font-bold mb-4">MISSION</h3>
              <p className="text-green-100">
                To bring the finest quality frozen fruits and vegetables from Egypt’s fertile lands to tables
                around the world, ensuring freshness, safety, and reliability with every shipment.
              </p>
            </div>
            
            <div className="pt-8 md:pt-0">
              <img src={valuesImage} alt="Values" className="w-12 h-12 mx-auto mb-4 rounded-full object-cover" />
              <h3 className="text-2xl font-bold mb-4">VALUES</h3>
              <p className="text-green-100">
                Quality First, Freshness Guaranteed, Sustainability, and Customer Focus guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Story Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Sochi Agricultural Co. is a trusted Manufacturer and exporter of premium Fresh and frozen fruits and
                vegetables, proudly based in Alexandria, Egypt. We specialize in delivering farm-fresh produce, carefully
                harvested and processed to preserve its natural taste, color, and nutritional value.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-600">
                Founded with a passion for agriculture and a dedication to excellence, Sochi Agricultural Co. combines decades
                of farming expertise with modern processing technology. Our team works closely with local farmers, ensuring
                every product meets international standards for taste, texture, and safety.
              </p>
            </div>
            
            <div>
              <img 
                src={fruitsImage} 
                alt="Fresh fruits and vegetables"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Our Core Values</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-800">Quality First</h4>
              <p className="text-gray-600">Every product undergoes strict quality control from harvest to packaging.</p>
            </div>
            <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                <Snowflake className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-800">Freshness Guaranteed</h4>
              <p className="text-gray-600">Rapid freezing technology locks in natural goodness.</p>
            </div>
            <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                <Recycle className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-800">Sustainability</h4>
              <p className="text-gray-600">Supporting local farming communities and responsible agriculture.</p>
            </div>
            <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-800">Customer Focus</h4>
              <p className="text-gray-600">Building trust through consistent supply, competitive pricing, and tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Factory className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">State-of-the-art facilities</h4>
                <p className="text-gray-600">Advanced freezing and packing infrastructure for consistent, safe quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Wide product range</h4>
                <p className="text-gray-600">Fruits and vegetables sourced from Egypt’s prime growing regions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">International certifications</h4>
                <p className="text-gray-600">Compliance with ISO, Global Gap, SMETA and more.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Flexible export solutions</h4>
                <p className="text-gray-600">Tailored packaging and logistics to suit your market needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;