export type ProductImage = {
	url: string;
	alt: string;
};

export type Product = {
	id: string;
	name: string;
	slug: string;
	category: string; // e.g., "fruits", "vegetables", "frozen"
	description: string;
	images: ProductImage[]; // First image is the main image
	specs?: Record<string, string>;
};

// Small util to slugify names consistently
const toSlug = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");

// Images
import frozenStrawberryMain from "@/assets/Frozen-strawberry.png";
import strawberryAlt1 from "@/assets/strawberry.jpg";
import strawberryAlt2 from "@/assets/5.jpg";

import broccoliMain from "@/assets/broccoli.jpg";
import broccoliAlt1 from "@/assets/products/broccoli.jpg";
import cauliflowerMain from "@/assets/Cauliflower.png";
import cauliflowerAlt1 from "@/assets/products/Cauliflower.png";

import artichokeMain from "@/assets/Artichoke.jpg";
import artichokeAlt1 from "@/assets/products/Artichokes.jpg";

import greenBeansMain from "@/assets/Beans.jpg";
import beansAlt1 from "@/assets/products/Beans.jpg";

import orangeMain from "@/assets/orange.png";
import orangesAlt1 from "@/assets/products/Orange.jpg";
import orangesAlt2 from "@/assets/fresh-fruits-mix.jpg";
import mixedVegFeatured from "@/assets/mix Vega.jpeg";

// Fresh products images
import freshStrawberry from "@/assets/products/strawberry.jpg";
import freshMango from "@/assets/products/mango.jpg";
import freshPomegranate from "@/assets/products/Pomegranates.jpg";
import freshGuava from "@/assets/products/guava.jpg";
import freshGrapes from "@/assets/products/Grapes.jpg";
import freshMandarin from "@/assets/products/Mandarin.jpg";
import freshLime from "@/assets/products/Lime.jpg";
import freshSweetPotatoes from "@/assets/products/sweet-potatoes.jpg";
import freshCarrots from "@/assets/products/Carrots.jpg";
import freshGarlics from "@/assets/products/Garlics.jpg";
import freshOnions from "@/assets/products/Onions.jpg";
import freshIceberg from "@/assets/products/Iceberg.png";

export const products: Product[] = [
	{
		id: "frozen-strawberry",
		name: "Frozen Strawberry",
		slug: toSlug("Frozen Strawberry"),
		category: "frozen",
		description:
			"Premium IQF strawberries, picked at peak ripeness and flash-frozen to lock in flavor and nutrients.",
		images: [
			{ url: frozenStrawberryMain, alt: "Frozen Strawberry main" },
			{ url: strawberryAlt1, alt: "Fresh strawberries" },
			{ url: strawberryAlt2, alt: "Strawberries in field" },
		],
		specs: {
			Packaging: "10 kg bulk / 2.5 kg bags",
			Origin: "Egypt",
			Season: "Dec - Mar",
			Grades: "Whole, Sliced",
		},
	},
	{
		id: "broccoli",
		name: "Broccoli",
		slug: toSlug("Broccoli"),
		category: "vegetables",
		description:
			"Fresh, firm broccoli heads with vibrant green florets and crisp texture.",
		images: [
			{ url: broccoliMain, alt: "Broccoli main" },
			{ url: broccoliAlt1, alt: "Broccoli close-up" },
		],
		specs: {
			Packaging: "8 kg cartons",
			Origin: "Egypt",
			Season: "Nov - Apr",
			Grades: "Class I",
		},
	},
	{
		id: "green-beans",
		name: "Green Beans",
		slug: toSlug("Green Beans"),
		category: "vegetables",
		description: "Tender, hand-picked green beans with excellent snap and color.",
		images: [
			{ url: greenBeansMain, alt: "Green beans main" },
			{ url: beansAlt1, alt: "Green beans packed" },
		],
		specs: {
			Packaging: "5 kg cartons",
			Origin: "Egypt",
			Season: "Oct - May",
		},
	},
	{
		id: "artichoke",
		name: "Artichoke",
		slug: toSlug("Artichoke"),
		category: "vegetables",
		description: "Premium artichokes with tight leaves and excellent freshness.",
		images: [
			{ url: artichokeMain, alt: "Artichoke main" },
			{ url: artichokeAlt1, alt: "Artichokes harvested" },
		],
		specs: {
			Packaging: "5 kg cartons",
			Origin: "Egypt",
			Season: "Dec - Apr",
		},
	},

	// -------------------- FROZEN (temporary data) --------------------
	{
		id: "frozen-strawberry",
		name: "Strawberries",
		slug: toSlug("Strawberry"),
		category: "frozen",
		description: "Whole, halves, or diced; rich red color and sweet flavor.",
		images: [
			{ url: frozenStrawberryMain, alt: "Frozen strawberry" },
			{ url: strawberryAlt1, alt: "Fresh strawberries (reference)" },
		],
		specs: {
			Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons",
			Shelf_Life: "18–24 months at -18°C",
		},
	},
	{
		id: "frozen-mango",
		name: "Mango",
		slug: toSlug("Mango"),
		category: "frozen",
		description: "Chunks or slices; tropical sweetness, perfect for beverages and desserts.",
		images: [
			{ url: freshMango, alt: "Mango (placeholder)" },
			{ url: orangesAlt2, alt: "Assorted fruits (placeholder)" },
		],
		specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" },
	},
	{ id: "frozen-apricots", name: "Apricot", slug: toSlug("Apricot"), category: "frozen", description: "Halves or slices; tangy-sweet flavor, perfect for baking.", images: [ { url: orangesAlt2, alt: "Apricot placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-peach", name: "Peach", slug: toSlug("Peach"), category: "frozen", description: "Slices or chunks; juicy and naturally sweet.", images: [ { url: orangesAlt2, alt: "Peach placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-pomegranate-kernels", name: "Pomegranate Arils", slug: toSlug("Pomegranate Arils"), category: "frozen", description: "Jewel-like seeds, sweet-tart flavor, ideal for salads and drinks.", images: [ { url: freshPomegranate, alt: "Pomegranate arils (placeholder)" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-guava", name: "Guava", slug: toSlug("Guava"), category: "frozen", description: "Chunks or pulp; fragrant aroma and tropical taste.", images: [ { url: freshGuava, alt: "Guava placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-green-beans", name: "Green Beans", slug: toSlug("Green Beans"), category: "frozen", description: "Whole or cut; crisp texture and fresh taste.", images: [ { url: greenBeansMain, alt: "Green beans placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-broccoli", name: "Broccoli Florets", slug: toSlug("Broccoli Florets"), category: "frozen", description: "Vibrant green, packed with vitamins and antioxidants.", images: [ { url: broccoliMain, alt: "Broccoli placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-cauliflower", name: "Cauliflower Florets", slug: toSlug("Cauliflower Florets"), category: "frozen", description: "Vibrant white, packed with vitamins and antioxidants.", images: [ { url: cauliflowerMain, alt: "Cauliflower placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-green-peas", name: "Green Peas", slug: toSlug("Green Peas"), category: "frozen", description: "Tender and sweet, perfect for soups and side dishes.", images: [ { url: orangesAlt2, alt: "Green peas placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-mixed-vegetables", name: "Mixed Vegetables", slug: toSlug("Mixed Vegetables"), category: "frozen", description: "Carrot, peas, corn, and beans blend.", images: [ { url: mixedVegFeatured, alt: "Mixed vegetables" }, { url: orangesAlt2, alt: "Mixed vegetables placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-okra", name: "Okra", slug: toSlug("Okra"), category: "frozen", description: "Whole or cut; popular in Middle Eastern and African cuisines.", images: [ { url: orangesAlt2, alt: "Okra placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{ id: "frozen-spinach", name: "Spinach", slug: toSlug("Spinach"), category: "frozen", description: "Chopped or whole leaf; nutrient-rich and versatile.", images: [ { url: orangesAlt2, alt: "Spinach placeholder" } ], specs: { Packaging: "400g retail packs, 1kg, 2.5kg, and bulk 10kg cartons", Shelf_Life: "18–24 months at -18°C" } },
	{
		id: "cauliflower",
		name: "Cauliflower",
		slug: toSlug("Cauliflower"),
		category: "vegetables",
		description: "Firm white curds and fresh green leaves, carefully graded.",
		images: [
			{ url: cauliflowerMain, alt: "Cauliflower main" },
			{ url: cauliflowerAlt1, alt: "Cauliflower packed" },
		],
		specs: {
			Packaging: "6 kg cartons",
			Origin: "Egypt",
			Season: "Nov - Mar",
		},
	},
	{
		id: "orange",
		name: "Orange",
		slug: toSlug("Orange"),
		category: "fruits",
		description:
			"Fresh, sweet oranges ideal for table fruit and juicing. Carefully graded for size and sweetness.",
		images: [
			{ url: orangeMain, alt: "Orange main" },
			{ url: orangesAlt1, alt: "Oranges packed in cartons" },
			{ url: orangesAlt2, alt: "Assorted fresh citrus and fruits" },
		],
		specs: {
			Varieties: "Navel, Valencia",
			Brix: "10° - 12°",
			Count: "36/42/48/56/64/72/80/88",
			Packaging: "15 kg telescopic cartons / 8 kg cartons",
			Origin: "Egypt",
			Season: "Dec - May",
		},
	},
	// Fresh - Fruits
	{
		id: "strawberries",
		name: "Strawberries",
		slug: toSlug("Strawberries"),
		category: "fruits",
		description: "Sweet, aromatic, vibrant red berries, rich in vitamin C and antioxidants.",
		images: [
			{ url: freshStrawberry, alt: "Fresh strawberries" },
			{ url: strawberryAlt1, alt: "Strawberries in basket" },
			{ url: strawberryAlt2, alt: "Strawberries in field" },
		],
		specs: {
			Packaging: "Export-standard punnets and cartons (250g–2kg)",
			Shelf_Life: "Short; maintained via cold chain",
			Origin: "Egypt",
			Season: "Nov - Mar",
		},
	},
	{
		id: "mango",
		name: "Mango",
		slug: toSlug("Mango"),
		category: "fruits",
		description: "Juicy, fragrant tropical fruit, ideal for fresh eating or processing into juice and puree.",
		images: [
			{ url: freshMango, alt: "Fresh mangoes" },
			{ url: orangesAlt2, alt: "Assorted fresh fruits" },
		],
		specs: {
			Packaging: "Export-standard cartons and trays",
			Shelf_Life: "Varies by variety; cold chain maintained",
			Origin: "Egypt",
			Season: "Jul - Oct",
		},
	},
	{
		id: "pomegranate",
		name: "Pomegranate",
		slug: toSlug("Pomegranate"),
		category: "fruits",
		description: "Whole fruit or fresh arils, rich in antioxidants, enjoyed fresh or juiced.",
		images: [
			{ url: freshPomegranate, alt: "Fresh pomegranates" },
			{ url: orangesAlt2, alt: "Assorted fruits including pomegranate" },
		],
		specs: {
			Packaging: "Cartons and aril packs",
			Shelf_Life: "Moderate; strict cold chain",
			Origin: "Egypt",
			Season: "Sep - Dec",
		},
	},
	{
		id: "guava",
		name: "Guava",
		slug: toSlug("Guava"),
		category: "fruits",
		description: "Fragrant tropical fruit with creamy white or pink flesh, high in vitamin C.",
		images: [
			{ url: freshGuava, alt: "Fresh guava" },
			{ url: orangesAlt2, alt: "Assorted fruits with guava" },
		],
		specs: {
			Packaging: "Export-standard cartons and trays",
			Shelf_Life: "Short; rapid cold chain",
			Origin: "Egypt",
			Season: "Aug - Feb",
		},
	},
	{
		id: "grapes",
		name: "Grapes",
		slug: toSlug("Grapes"),
		category: "fruits",
		description: "Seedless or seeded, crisp and naturally sweet, eaten fresh or dried.",
		images: [
			{ url: freshGrapes, alt: "Fresh grapes" },
			{ url: orangesAlt2, alt: "Fruit assortment" },
		],
		specs: {
			Packaging: "Punnets and cartons",
			Shelf_Life: "Good with cold chain",
			Origin: "Egypt",
			Season: "May - Aug",
		},
	},
	{
		id: "mandarin",
		name: "Mandarin",
		slug: toSlug("Mandarin"),
		category: "fruits",
		description: "Sweet, easy-to-peel citrus, popular for fresh eating and juice.",
		images: [
			{ url: freshMandarin, alt: "Mandarins" },
			{ url: orangesAlt1, alt: "Citrus packed" },
		],
		specs: {
			Packaging: "Export-standard cartons",
			Shelf_Life: "Good; maintained cold chain",
			Origin: "Egypt",
			Season: "Dec - Mar",
		},
	},
	{
		id: "lime",
		name: "Lime",
		slug: toSlug("Lime"),
		category: "fruits",
		description: "Tart, aromatic citrus used in drinks, cooking, and flavoring.",
		images: [
			{ url: freshLime, alt: "Limes" },
			{ url: orangesAlt1, alt: "Citrus assortment" },
		],
		specs: {
			Packaging: "Cartons and trays",
			Shelf_Life: "Good; cold chain",
			Origin: "Egypt",
			Season: "Year-round",
		},
	},

	// Fresh - Vegetables
	{
		id: "sweet-potatoes",
		name: "Sweet Potatoes",
		slug: toSlug("Sweet Potatoes"),
		category: "vegetables",
		description: "Naturally sweet root vegetable, high in fiber and vitamins.",
		images: [
			{ url: freshSweetPotatoes, alt: "Sweet potatoes" },
		],
		specs: {
			Packaging: "Export-standard cartons",
			Shelf_Life: "Long; cool dry storage",
			Origin: "Egypt",
			Season: "Oct - May",
		},
	},
	{
		id: "carrots",
		name: "Carrots",
		slug: toSlug("Carrots"),
		category: "vegetables",
		description: "Crunchy, versatile vegetable, rich in beta-carotene and vitamin A.",
		images: [
			{ url: freshCarrots, alt: "Carrots" },
		],
		specs: {
			Packaging: "Cartons and bags",
			Shelf_Life: "Good; refrigerated",
			Origin: "Egypt",
			Season: "Year-round",
		},
	},
	{
		id: "garlic",
		name: "Garlic",
		slug: toSlug("Garlic"),
		category: "vegetables",
		description: "Aromatic bulb, used for flavor and health benefits worldwide.",
		images: [
			{ url: freshGarlics, alt: "Garlic bulbs" },
		],
		specs: {
			Packaging: "Cartons and mesh bags",
			Shelf_Life: "Long; dry storage",
			Origin: "Egypt",
			Season: "Mar - Aug",
		},
	},
	{
		id: "onions",
		name: "Onions",
		slug: toSlug("Onions"),
		category: "vegetables",
		description: "Essential cooking ingredient with long storage life.",
		images: [
			{ url: freshOnions, alt: "Onions" },
		],
		specs: {
			Packaging: "Cartons and mesh bags",
			Shelf_Life: "Long; dry storage",
			Origin: "Egypt",
			Season: "Year-round",
		},
	},
	{
		id: "iceberg-lettuce",
		name: "Iceberg Lettuce",
		slug: toSlug("Iceberg Lettuce"),
		category: "vegetables",
		description: "Crisp, mild-flavored leafy vegetable for salads and garnishes.",
		images: [
			{ url: freshIceberg, alt: "Iceberg lettuce" },
		],
		specs: {
			Packaging: "Cartons and trays",
			Shelf_Life: "Short; refrigerated",
			Origin: "Egypt",
			Season: "Nov - Apr",
		},
	},
];

export function getProductBySlug(slug: string): Product | undefined {
	return products.find((p) => p.slug === slug);
}

// Explicit featured list to control the homepage grid contents and order
const featuredSlugs = [
	// Keep Frozen Strawberry first
	"strawberry", // frozen strawberry
	"broccoli",
	"green-beans",
	"artichoke",
	"cauliflower", // replace fresh strawberries with cauliflower
	"mixed-vegetables", // replace mango with mixed vegetables
];

export const featuredProducts: Product[] = featuredSlugs
	.map((slug) => getProductBySlug(slug))
	.filter((p): p is Product => Boolean(p));

export function getProductByCategoryAndSlug(category: string, slug: string): Product | undefined {
	return products.find(
		(p) => p.category.toLowerCase() === category.toLowerCase() && p.slug === slug
	);
}


