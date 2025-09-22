import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, LucideProps } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { useHashLink } from "@/hooks/useHashLink";
import { useAnimation } from "@/hooks/useAnimation";

// Product images for mega menu
import Snowfall from "./Snowfall"; 
import genericProduceImage from "@/assets/fresh-fruits-mix.jpg"; // Fallback

// Dynamically import all images from the new products folder
const productImages = import.meta.glob<{ default: string }>('/src/assets/products/*.{jpg,jpeg,png,gif,svg}', { eager: true });
type ProductLinkProps = {
  name: string;
  type: 'fresh' | 'frozen' | 'pickled';
  imageUrl: string;
  onClick: () => void;
};

const ProductLink = ({ name, type, imageUrl, onClick }: ProductLinkProps) => (
  <Link
    key={name}
    to={`/products/${type}/${name.toLowerCase().replace(/\s+/g, "-")}`}
    className="group relative block rounded-md h-24 flex items-center justify-center p-2 text-center overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    <span className="relative z-10 text-white font-semibold text-sm leading-tight">
      {name}
    </span>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeTab, setActiveTab] = useState<'fresh' | 'frozen' | 'pickled'>('fresh');

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const animationKey = useAnimation(activeTab);
  const handleHashLink = useHashLink();

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
  const pickledProducts = [
    "Cucumber"
  ];

  const getProductImage = (name: string) => {
    const imageName = name.toLowerCase().replace(/\s+/g, "-");
    // Find a matching image file regardless of its extension (jpg, png, etc.)
    const imagePath = Object.keys(productImages).find(path =>
      path.toLowerCase().includes(`/${imageName}.`)
    );

    // If a specific image is found, use it; otherwise, use the generic fallback.
    return imagePath ? productImages[imagePath].default : genericProduceImage;
  };

  const allProducts = useMemo(() => [
    ...freshProducts.map(name => ({ name, type: 'fresh' as const })),
    ...frozenProducts.map(name => ({ name, type: 'frozen' as const })),
    ...pickledProducts.map(name => ({ name, type: 'pickled' as const })),
  ], []);

  const searchResults = useMemo(() => {
    if (searchTerm.trim().length < 2) return [];
    return allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, allProducts]);

  const handleMenuEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setIsProductMenuOpen(true);
  };

  const handleMenuLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsProductMenuOpen(false);
    }, 200); // 200ms delay before closing
    setMenuTimeout(timeoutId);
  };
  return (
    <>
      <TopBar />
      <header className="bg-white shadow-sm border-b">
      <div className="px-4 h-20 md:h-[150px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/0.jpg" alt="SOCHI logo" className="h-16 w-16 md:h-[150px] md:w-[150px]" />
          </Link>
        </div>  

        {/* Right: Navigation (desktop) + Mobile button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide">HOME</Link>

            {/* Products mega menu with Fresh & Frozen */}
            <div
              className="relative"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <button className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide">Products</button>
              {isProductMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[calc(100vw-2rem)] max-w-4xl bg-white border shadow-lg rounded-lg z-50" >
                  {/* Tabs */}
                  <div className="flex border-b">
                    <button
                      onClick={() => setActiveTab('fresh')}
                      className={`flex-1 p-4 font-semibold text-sm uppercase tracking-wide transition-colors ${activeTab === 'fresh' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      Fresh
                    </button>
                    <button
                      onClick={() => setActiveTab('frozen')}
                      className={`flex-1 p-4 font-semibold text-sm uppercase tracking-wide transition-colors ${activeTab === 'frozen' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      Frozen
                    </button>
                    <button
                      onClick={() => setActiveTab('pickled')}
                      className={`flex-1 p-4 font-semibold text-sm uppercase tracking-wide transition-colors ${activeTab === 'pickled' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      Pickled
                    </button>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="relative p-6 max-h-[60vh] overflow-y-auto">
                    {/* Animation Layer */}
                    {activeTab === 'frozen' && <Snowfall key={animationKey} />}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {(activeTab === 'fresh' ? freshProducts : activeTab === 'frozen' ? frozenProducts : pickledProducts).map((name) => (
                        <ProductLink
                          key={name}
                          name={name}
                          type={activeTab}
                          imageUrl={getProductImage(name)}
                          onClick={() => setIsProductMenuOpen(false)}
                        />
                      ))}
                    </div>

                    {(activeTab === 'fresh' && freshProducts.length === 0) && (
                        <p className="col-span-full text-center text-gray-500 py-8">No fresh products available at the moment.</p>
                    )}
                    {(activeTab === 'frozen' && frozenProducts.length === 0) && (
                        <p className="col-span-full text-center text-gray-500 py-8">No frozen products available at the moment.</p>
                    )}
                    {(activeTab === 'pickled' && pickledProducts.length === 0) && (
                        <p className="col-span-full text-center text-gray-500 py-8">No pickled products available at the moment.</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Remaining links */}
            {navItems.filter((i) => i.name !== "HOME").map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    handleHashLink(e, item.href);
                  }
                }}
              >
                 {item.name}
              </Link>
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
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={(e) => {
                  setIsOpen(false);
                  if (item.href.startsWith('/#')) {
                    handleHashLink(e, item.href);
                  }
                }}
              >
                {item.name}
              </Link>
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
                      <Link 
                        to={`/products/${product.type}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block p-4 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }}
                      >
                        <span className="font-medium text-gray-800">{product.name}</span>
                        <span className={`ml-3 text-xs uppercase font-semibold rounded-full px-2 py-1 ${
                          product.type === 'fresh' ? 'bg-green-100 text-green-800' : 
                          product.type === 'frozen' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {product.type}
                        </span>
                      </Link>
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