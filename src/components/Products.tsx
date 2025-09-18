import potatoImage from "@/assets/potato.jpg";
import strawberryImage from "@/assets/strawberry.jpg";
import grapesImage from "@/assets/grapes.jpg";
import mandarinesImage from "@/assets/mandarines.jpg";
import orangesImage from "@/assets/oranges.jpg";
import worldMapImage from "@/assets/world-map-markets.jpg";
import whitegrapes from "@/assets/5.jpg";

const Products = () => {
  const products = [
    { name: "SWEET POTATO", image: potatoImage },
    { name: "STRAWBERRY", image: strawberryImage },
    { name: "RED GRAPES", image: grapesImage },
    { name: "WHITE GRAPES", image: whitegrapes },
    { name: "MANDARINES", image: mandarinesImage },
    { name: "ORANGES", image: orangesImage },
  ];

  return (
    <section id="products" className="bg-white py-16">
      <div className="px-4">
        {/* Featured Products Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 tracking-wide mb-2"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 md:mb-12 text-sm md:text-base">
            SUCHI Agricultural is dedicated to growing with excellence and
            serving you nature's very best, fresh to your table.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden aspect-[3/4] flex flex-col"
              >
                <div className="h-3/4 flex items-end justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain drop-shadow-md"
                  />
                </div>
                <div className="bg-white p-4 h-1/4 flex items-center justify-center">
                  <p
                    className="text-base md:text-lg font-bold tracking-wide text-[#0c2a52] text-center uppercase"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Market Section */}
        <div className="text-center mb-20">
          <div className="relative mb-10 md:mb-14 flex items-center justify-center py-14 sm:py-16 md:py-24 overflow-visible">
            {/* Background oversized words */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none"
              aria-hidden="true"
            >
              <span
                className="text-[64px] xs:text-[100px] sm:text-[120px] md:text-[160px] font-extrabold text-gray-200 opacity-40 leading-none -translate-y-1"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                OUR
              </span>
              <span
                className="text-[64px] xs:text-[100px] sm:text-[120px] md:text-[160px] font-extrabold text-gray-200 opacity-40 leading-none translate-y-1"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                MARKET
              </span>
            </div>

            {/* Foreground text */}
            <h2
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-green-600"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              OUR MARKET
            </h2>
          </div>

          <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-sm md:text-base">
            At SOCHI Agricultural, we are committed to providing world-class
            agricultural products. As a leading force in producing and exporting
            fresh, high-quality fruits and vegetables, we operate efficiently
            from multiple advanced farms and facilities.
          </p>

          <div className="bg-gray-1 rounded-lg p-8">
            <img
              src={worldMapImage}
              alt="Global market locations"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
