import products from '@data/sample-products';
import { Product, Variant } from '@/types/product';

interface PageData {
  products: Product[];
  cursorBlob?: string;
}

const loadMoreProducts = async ({ cursorBlob }: { cursorBlob?: string }): Promise<PageData> => {
  const start = cursorBlob ? parseInt(cursorBlob, 10) : 0;
  const end = start + 8;
  const nextCursorBlob = end < products.length ? end.toString() : undefined;

  const interfaceProducts: Product[] = products.slice(start, end).map((product) => ({
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    productType: product.productType,
    images: product.images,
    variants: product.variants.map((variant) => ({
      id: variant.id,
      title: variant.title,
      price: variant.price,
      compare_at_price: variant.compareAtPrice,
      image: variant.image,
      selectedOptions: variant.selectedOptions,
      availableForSale: variant.availableForSale,
      displayName: variant.displayName,
    })),
  }));

  return {
    products: interfaceProducts,
    cursorBlob: nextCursorBlob,
  };
};

export { loadMoreProducts };
