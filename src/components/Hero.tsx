import { useState, useEffect } from "react";
import greenhouseImage from "../assets/hero-greenhouse.jpg";
import workerImage from "../assets/worker-strawberries.jpg";
import fruitsImage from "../assets/hero-fresh-produce.jpg";
import heroOverlay from "@/assets/5.png";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const Hero = () => {
  const images = [greenhouseImage, workerImage, fruitsImage];
  const [current, setCurrent] = useState(0);

  const handleGetStarted = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrent((idx) => (idx + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isPlaying, images.length]);

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background images for transition */}
      {images.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            opacity: current === index ? 1 : 0,
          }}
        />
      ))}
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Overlay hero graphic and buttons */}
      <div className="md:ml-10 absolute inset-0 flex items-center justify-start pl-6 md:pl-12 z-10">
        <div className="relative pointer-events-none">
          <img src={heroOverlay} alt="" aria-hidden="true" className="w-[260px] md:w-[360px] lg:w-[420px] h-auto object-contain" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-auto hidden md:flex justify-center items-center gap-3 z-20 md:ml-4">
            <Button onClick={handleGetStarted} className="bg-green-600 hover:bg-green-700 text-white rounded-md h-11 px-8 font-semibold">
              Get Started
            </Button>
            <Button onClick={() => setIsPlaying((v) => !v)} variant="secondary" className="bg-white/90 hover:bg-white text-green-600 rounded-full h-11 w-11 p-0 flex items-center justify-center shadow">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Vertical Dots Navigation */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex">
        {/* Vertical Dots Navigation */}
        <div className="flex flex-col items-center gap-4">
          {images.map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} className="p-1 focus:outline-none group">
              <div
                className={`transition-all duration-300 ${
                  current === index
                    ? "w-3 h-3 border-2 border-white rounded-full"
                    : "w-2 h-2 bg-white rounded-full group-hover:scale-125"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;