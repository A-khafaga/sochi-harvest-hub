import { useParams, Link } from "react-router-dom";

const humanize = (text: string) =>
  text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Product = () => {
  const { category = "", slug = "" } = useParams();

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
          <span className="font-medium text-gray-800">{humanize(slug)}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">{humanize(slug)}</h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="aspect-[4/3] w-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
            <span>Product image</span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 capitalize">{category} product</h2>
            <p className="text-gray-600 mb-6">
              Detailed information about {humanize(slug)} will go here. We can add specs, seasonal
              availability, packaging, and origin per your data later.
            </p>
            <Link to="/#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;


