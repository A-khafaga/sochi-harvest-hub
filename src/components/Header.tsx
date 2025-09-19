import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import TopBar from "./TopBar";

// Product images for mega menu
import orangeImage from "@/assets/oranges.jpg";
import strawberryImage from "@/assets/strawberry.jpg";
import grapesImage from "@/assets/grapes.jpg";
import mandarinImage from "@/assets/mandarines.jpg";
import potatoImage from "@/assets/potato.jpg";
import genericProduceImage from "@/assets/fresh-fruits-mix.jpg"; // Fallback

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "fresh" | "frozen">(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Calendar", href: "/calendar" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const freshProducts = [
    "Orange","Iceberg","Lime","Lemon","Strawberry","Mango","Pomegranates","Guava","Grapes","Mandarin","Sweet Potatoes","Artichokes","Carrots","Garlics","Onions","Eggplant","Capsicum","Potatoes"
  ];
  const frozenProducts = [
    "Strawberry","Mango","Apricots","Figs","Peach","Blueberries","Pomegranates Kernels","Artichokes","Green Beans","Broccoli Florets","Cauliflower Florets","Green Peas","Mixed Veggies","Carrots","Onions","Pepper","Sweet Potatoes","Okra","Spinach","Molokhia"
  ];

  const productImageMap: Record<string, string> = {
    orange: orangeImage,
    strawberry: strawberryImage,
    grapes: grapesImage,
    mandarin: mandarinImage,
    "sweet potatoes": potatoImage,
    potatoes: potatoImage,
    pomegranates: genericProduceImage,
    mango: genericProduceImage,
    "pomegranates kernels": genericProduceImage,
    apricots: genericProduceImage,
    figs: genericProduceImage,
    peach: genericProduceImage,
    blueberries: genericProduceImage,
  };
  
  const getProductImage = (name: string) => productImageMap[name.toLowerCase()] || genericProduceImage;

  const allProducts = useMemo(() => [
    ...freshProducts.map(name => ({ name, type: 'fresh' as const })),
    ...frozenProducts.map(name => ({ name, type: 'frozen' as const })),
  ], []);

  const searchResults = useMemo(() => {
    if (searchTerm.trim().length < 2) return [];
    return allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, allProducts]);

  return (
    <>
      <TopBar />
      <header className="bg-white shadow-sm border-b">
      <div className="px-4 h-20 md:h-[150px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <img src="/0.jpg" alt="SOCHI logo" className="h-16 w-16 md:h-[150px] md:w-[150px]" />
          </a>
        </div>  

        {/* Right: Navigation (desktop) + Mobile button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide">HOME</a>

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
                          <a 
                            key={name} 
                            href={`/products/fresh/${name.toLowerCase().replace(/\s+/g, "-")}`} 
                            className="group relative block rounded-md h-20 flex items-center justify-center p-2 text-center overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${getProductImage(name)})` }}
                          >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                            <span className="relative z-10 text-white font-semibold text-sm leading-tight">
                              {name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-4">Frozen</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {frozenProducts.map((name) => (
                          <a 
                            key={name} 
                            href={`/products/frozen/${name.toLowerCase().replace(/\s+/g, "-")}`} 
                            className="group relative block rounded-md h-20 flex items-center justify-center p-2 text-center overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${getProductImage(name)})` }}
                          >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                            <span className="relative z-10 text-white font-semibold text-sm leading-tight">
                              {name}
                            </span>
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

          {/* Search Input (Desktop) */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block text-gray-700 hover:text-green-600 transition-colors"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="h-5 w-5" />
          </Button>

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
            <button
              onClick={() => {
                setIsOpen(false);
                setIsSearchOpen(true);
              }}
              className="flex items-center w-full text-left text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Search
            </button>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[100] animate-in fade-in-0">
          <div className="container mx-auto max-w-2xl pt-10 md:pt-20">
            <div className="flex items-center justify-end">
              <Button variant="ghost" size="icon" onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }} aria-label="Close search">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="relative mt-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for fruits and vegetables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border-b-2 border-gray-300 bg-transparent py-3 pl-12 pr-4 text-lg focus:outline-none focus:border-green-600"
                autoFocus
              />
            </div>
            <div className="mt-6 max-h-[60vh] overflow-y-auto">
              {searchTerm.length > 1 && searchResults.length > 0 && (
                <ul className="space-y-2 p-2">
                  {searchResults.map(product => (
                    <li key={`${product.type}-${product.name}`}>
                      <a 
                        href={`/products/${product.type}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }}
                      >
                        <span className="font-medium text-gray-800">{product.name}</span>
                        <span className={`ml-3 text-xs uppercase font-semibold rounded-full px-2 py-1 ${product.type === 'fresh' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {product.type}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {searchTerm.length > 1 && searchResults.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No products found for "{searchTerm}".</p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;