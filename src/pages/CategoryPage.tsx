import { Link, useParams } from "react-router-dom";
import { products as allProducts } from "@/data/products";

const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const CategoryPage = () => {
	const { category = "" } = useParams();

	const filtered = allProducts.filter((p) => {
		if (category === "fresh") {
			return p.category === "fruits" || p.category === "vegetables";
		}
		if (category === "frozen") {
			return p.category === "frozen";
		}
		if (category === "pickled") {
			return p.category === "pickled";
		}
		return false;
	});

	return (
		<section className="min-h-screen bg-white py-16">
			<div className="container mx-auto px-4">
				<nav className="mb-6 text-sm text-gray-500">
					<Link to="/" className="hover:text-green-600">Home</Link>
					<span className="mx-2">/</span>
					<span className="font-medium text-gray-800">Products</span>
					<span className="mx-2">/</span>
					<span className="capitalize">{category}</span>
				</nav>

				<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{titleCase(category)} Products</h1>
				<p className="text-gray-600 mb-8">Browse our {category} selection.</p>

				{filtered.length === 0 ? (
					<p className="text-gray-600">No products available yet in this category.</p>
				) : (
					<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{filtered.map((product) => (
							<Link
								to={`/products/${product.category}/${product.slug}`}
								key={product.id}
								className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden aspect-[3/4] flex flex-col hover:shadow-md transition-shadow"
							>
								<div className="h-3/4 flex items-end justify-center p-4">
									<img
										src={product.images[0]?.url}
										alt={product.images[0]?.alt || product.name}
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
							</Link>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CategoryPage;


