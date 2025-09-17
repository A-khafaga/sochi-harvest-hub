import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import TopBar from "./TopBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "fresh" | "frozen">(null);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "Certificates", href: "#certificates" },
    { name: "Calendar", href: "#calendar" },
    { name: "Contact Us", href: "#contact" },
  ];

  const freshProducts = [
    "Orange","Iceberg","Lime","Lemon","Strawberry","Mango","Pomegranates","Guava","Grapes","Mandarin","Sweet Potaotes","Artichokes","Carrots","Garlics","Onions","Eggplant","Capsicum","Potatoes"
  ];
  const frozenProducts = [
    "Strawberry","Mango","Apricots","Figs","Peach","Blueberries","Pomegranates Kernels","Artichokes","Green Beans","Broccoli Florets","Cauliflower Florets","Green Peas","Mixed Veggies","Carrots","Onions","Pepper","Sweet Potatoes","Okra","Spinach","Molokhia"
  ];

  return (
    <>
      <TopBar />
      <header className="bg-white shadow-sm border-b">
      <div className="px-4 h-20 md:h-[150px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-2">
            <img src="/0.jpg" alt="SOCHI logo" className="h-16 w-16 md:h-[150px] md:w-[150px]" />
          </a>
        </div>  

        {/* Right: Navigation (desktop) + Mobile button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide">HOME</a>

            {/* Products mega menu with Fresh & Frozen */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("fresh")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide">Products</button>
              {openMenu && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[calc(100vw-2rem)] max-w-[860px] max-h-[70vh] overflow-auto bg-white border shadow-lg rounded-lg p-6 z-50" onMouseEnter={() => setOpenMenu(openMenu)} onMouseLeave={() => setOpenMenu(null)}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-4">Fresh</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {freshProducts.map((name) => (
                          <a key={name} href={`/products/fresh/${name.toLowerCase().replace(/\s+/g, "-")}`} className="group block rounded-md border bg-white hover:bg-green-50 p-3 text-sm text-gray-700 hover:text-green-700 transition">
                            {name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-4">Frozen</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {frozenProducts.map((name) => (
                          <a key={name} href={`/products/frozen/${name.toLowerCase().replace(/\s+/g, "-")}`} className="group block rounded-md border bg-white hover:bg-green-50 p-3 text-sm text-gray-700 hover:text-green-700 transition">
                            {name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining links */}
            {navItems.filter((i) => i.name !== "HOME").map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;