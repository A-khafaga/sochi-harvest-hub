import React from "react";
import greenhouseImage from "../assets/hero-greenhouse.jpg";
import workerImage from "../assets/worker-strawberries.jpg";
import fruitsImage from "../assets/hero-fresh-produce.jpg";
import heroOverlay from "@/assets/5.png";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const Hero = () => {
  const images = [greenhouseImage, workerImage, fruitsImage];
  const [current, setCurrent] = React.useState(0);

  const handleGetStarted = () => {
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isPlaying, setIsPlaying] = React.useState(false);
  React.useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setCurrent((idx) => (idx + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isPlaying, images.length]);

  const prev = () => setCurrent((idx) => (idx - 1 + images.length) % images.length);
  const next = () => setCurrent((idx) => (idx + 1) % images.length);
  const twoDigit = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="home" className="relative bg-cover bg-center h-[600px] md:h-[700px]" style={{ backgroundImage: `url(${images[current]})` }}>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Overlay hero graphic and buttons */}
      <div className="absolute inset-0 flex items-center justify-start pl-6 md:pl-12 z-10">
        <div className="relative pointer-events-none">
          <img src={heroOverlay} alt="" aria-hidden="true" className="w-[260px] md:w-[360px] lg:w-[420px] h-auto object-contain" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-auto flex justify-center items-center gap-3 z-20">
            <Button onClick={handleGetStarted} className="bg-green-600 hover:bg-green-700 text-white pt-3 px-5 ">
              Get Started
            </Button>
            <Button onClick={() => setIsPlaying((v) => !v)} variant="secondary" className="bg-white/90 hover:bg-white text-gray-800 rounded-full h-11 w-11 p-0 flex items-center justify-center shadow">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Left controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button aria-label="Previous" onClick={prev} className="h-10 w-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow flex items-center justify-center">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button aria-label="Next" onClick={next} className="h-10 w-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow flex items-center justify-center">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Numeric indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20 text-white/80 text-sm">
        <span>{twoDigit(current + 1)}</span>
        <span>{twoDigit(images.length)}</span>
      </div>
    </section>
  );
};

export default Hero;