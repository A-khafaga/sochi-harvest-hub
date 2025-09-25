import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getProductByCategoryAndSlug } from "@/data/products";
import { loadProductImagesFromFolder } from "@/data/imageLoader";

const humanize = (text: string) =>
  text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Product = () => {
  const { category = "", slug = "" } = useParams();

  const product = useMemo(() => {
    if (category === "fresh") {
      // Fresh maps to both fruits and vegetables
      return (
        getProductByCategoryAndSlug("fruits", slug) ||
        getProductByCategoryAndSlug("vegetables", slug)
      );
    }
    return getProductByCategoryAndSlug(category, slug);
  }, [category, slug]);
  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = useMemo(() => {
    if (!product) return [] as { url: string; alt: string }[];
    const fromFolder = loadProductImagesFromFolder(category, product.slug);
    return fromFolder.length > 0 ? fromFolder : product.images;
  }, [category, product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <section className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/#products`} className="hover:text-green-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="capitalize">{category}</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-800">Not Found</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the product you were looking for.</p>
          <Link to="/#products" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">Back to products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <nav className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/#products`} className="hover:text-green-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{category === "fresh" ? "fresh" : category === "frozen" ? "frozen" : product.category}</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-800">{product.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-800 mb-8" style={{ fontFamily: "Cinzel, serif" }}>{product.name}</h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="aspect-[4/3] w-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
              {gallery[activeIndex] && (
                <img
                  src={gallery[activeIndex]?.url}
                  alt={gallery[activeIndex]?.alt || product.name}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {gallery.map((img, idx) => (
                  <button
                    key={`${product.id}-thumb-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`aspect-square rounded-md border transition-all overflow-hidden ${
                      activeIndex === idx ? "border-green-600 ring-2 ring-green-200" : "border-gray-200 hover:border-gray-300"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 capitalize" style={{ fontFamily: "Cinzel, serif" }}>
              {category === "fresh" ? "fresh" : category === "frozen" ? "frozen" : product.category} product
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {product.specs && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{ fontFamily: "Cinzel, serif" }}>Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="text-gray-700 space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="flex items-start gap-3">
                        <span className="font-semibold text-gray-800 min-w-[120px]">{key.replace(/_/g, ' ')}:</span>
                        <span className="text-gray-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <Link to="/#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
