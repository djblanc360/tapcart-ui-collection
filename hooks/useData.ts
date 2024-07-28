import { useState, useEffect } from "react";
import Products from "@data/sample-products";
import { Product } from "@/types/product";

const useData = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const interfaceProducts = Products.map((product) => {
        return {
            id: product.id,
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


    useEffect(() => setProducts(interfaceProducts), []);

    return { products };
};

export default useData;