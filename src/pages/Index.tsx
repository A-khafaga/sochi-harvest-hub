import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingDownloadButton from "@/components/FloatingDownloadButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <About />
        <Products />
        <Certificates />
        <Contact />
        <Footer />
        <FloatingDownloadButton />
      </div>
    </div>
  );
};

export default Index;
