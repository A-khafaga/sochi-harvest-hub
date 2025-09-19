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
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <FloatingDownloadButton />
    </div>
  );
};

export default Index;
