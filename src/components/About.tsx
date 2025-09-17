import fruitsImage from "@/assets/fresh-fruits-mix.jpg";
import visionImage from "@/assets/VISION.jpg";
import missionImage from "@/assets/MISSION.jpg";
import valuesImage from "@/assets/VALUES.jpg";
import whoBg from "@/assets/14-01.jpg";
import { Leaf, Snowflake, Recycle, Users, Factory, Package, Globe2, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Vision, Mission, Values Section */}
      <section className="bg-green-600 py-20">
        <div className="px-4">
          <div className="grid md:grid-cols-3 gap-16 text-white">
            <div className="text-center pb-12 md:pb-0 border-b-4 md:border-b-0 md:border-r-4 border-white/50 md:pr-8">
              <div className="flex justify-center mb-6">
                <img src={visionImage} alt="Vision" className="w-16 h-16 rounded-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-6">VISION</h3>
              <p className="text-green-100 text-center leading-relaxed max-w-xs mx-auto">
                To become a leading global agricultural exporter, recognized for our commitment to quality, sustainability, and lasting partnerships.
              </p>
            </div>
            
            <div className="text-center py-12 md:py-0 border-b-4 md:border-b-0 md:border-r-4 border-white/50 flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <img src={missionImage} alt="Mission" className="w-16 h-16 rounded-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-6">MISSION</h3>
              <p className="text-green-100 text-center leading-relaxed max-w-xs mx-auto">
                To deliver premium frozen fruits and vegetables from Egypt's fertile lands to global markets, ensuring freshness, safety, and reliability.
              </p>
            </div>
            
            <div className="text-center pt-12 md:pt-0 flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <img src={valuesImage} alt="Values" className="w-16 h-16 rounded-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-6">VALUES</h3>
              <p className="text-green-100 text-center leading-relaxed max-w-xs mx-auto">
                Quality First, Freshness Guaranteed, Sustainability, and Customer Focus guide our every action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Core Values (combined with shared background) */}
      <section id="about" className="py-16 bg-center bg-cover" style={{ backgroundImage: `url(${whoBg})` }}>
        <div className="px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sochi Agricultural Co. is a trusted manufacturer and exporter of premium fresh and frozen fruits and vegetables, proudly based in Alexandria, Egypt. We specialize in delivering farm-fresh produce, carefully harvested and processed to preserve natural taste, color, and nutritional value.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with passion for agriculture and dedication to excellence, Sochi Agricultural Co. combines decades of farming expertise with modern processing technology. Our team works closely with local farmers, ensuring every product meets international standards for taste, texture, and safety.
              </p>
            </div>
            
            <div className="w-full">
              <div className="aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={fruitsImage} 
                  alt="Fresh fruits and vegetables"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values inside same background section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-10">Our Core Values</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">Quality First</h4>
                <p className="text-gray-600 text-sm">Strict quality control from harvest to packaging ensures excellence.</p>
              </div>
              <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                  <Snowflake className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">Freshness Guaranteed</h4>
                <p className="text-gray-600 text-sm">Advanced freezing technology preserves natural goodness.</p>
              </div>
              <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                  <Recycle className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">Sustainability</h4>
                <p className="text-gray-600 text-sm">Supporting local communities through responsible agriculture.</p>
              </div>
              <div className="group rounded-xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-50 p-3 text-green-700">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">Customer Focus</h4>
                <p className="text-gray-600 text-sm">Building trust through consistent supply and tailored solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-16">
        <div className="px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Factory className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">State-of-the-art facilities</h4>
                <p className="text-gray-600 text-sm">Advanced freezing and packing infrastructure ensures consistent, safe quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Wide product range</h4>
                <p className="text-gray-600 text-sm">Fruits and vegetables sourced from Egypt's prime growing regions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">International certifications</h4>
                <p className="text-gray-600 text-sm">Compliance with ISO, Global Gap, SMETA and more.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="mt-1 rounded-full bg-green-50 p-3 text-green-700">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Flexible export solutions</h4>
                <p className="text-gray-600 text-sm">Tailored packaging and logistics for your market needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;