import type { ProductImage } from "@/data/products";

const CATEGORY_DIR: Record<string, string> = {
	fresh: "Fresh",
	frozen: "Frozen",
	pickled: "Pickled",
};

// Eagerly import all images under Image_products for quick lookup
// Vite's import.meta.glob keys are full absolute-like paths starting with /src
const allImages = import.meta.glob<{ default: string }>(
	"/src/assets/Image_products/**/**/*.{png,jpg,jpeg,webp,svg,gif}",
	{ eager: true }
);

function toFolderNameFromSlug(slug: string): string {
	// Keep kebab-case folder naming to match slugs (e.g., "sweet-potatoes")
	return slug.toLowerCase();
}

export function loadProductImagesFromFolder(category: string, slug: string): ProductImage[] {
	const catDir = CATEGORY_DIR[category.toLowerCase()];
	if (!catDir) return [];

	const folder = toFolderNameFromSlug(slug);
	const prefix = `/src/assets/Image_products/${catDir}/${folder}/`;

	const matches = Object.keys(allImages)
		.filter((path) => path.startsWith(prefix))
		.sort();

	return matches.map((path) => ({ url: allImages[path].default, alt: slug.replace(/-/g, " ") }));
}


