import { useState, useEffect } from "react";
import Products from "@data/sample-products";
import { Product } from "@/types/product";

// interface PageData {
//   products: Product[];
//   cursorBlob?: string;
// }

const useData = () => {
// const interfaceProducts: Product[] = Products.slice(0, 8).map((product) => ({
    // const [products, setProducts] = useState<Product[]>([]);

    const products = Products.map((product) => {
        return {
            id: product.id,
            handle: product.handle,
            title: product.title,
            description: product.description,
            productType: product.productType,
            images: product.images,
            options: product.options,
            variants: product.variants.map((variant) => ({
                ...variant,
                compare_at_price: variant.compareAtPrice,
            })),
        };
    });
    // useEffect(() => setProducts(interfaceProducts), []);
    

  return { products };

  /*
  const pageData: PageData = {
    products: interfaceProducts,
    cursorBlob: products.length > 8 ? "8" : undefined,
  };

  const [initialData, setInitialData] = useState<PageData[]>([pageData]);
  console.log("i", initialData[0].products[0]);
  return { initialData };
  */

};

export default useData;
