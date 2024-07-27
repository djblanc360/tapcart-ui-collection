"use client"
import ProductCard from "@components/product/ProductCard"
// import Products from "@data/sample-products"
import useData  from "@/hooks/useData";
import * as React from "react";

import {
  Grid
} from "@tapcart/mobile-components"

const ProductsGrid = () => {
    const { products } = useData();
    console.log(products.length)
  return (
    <div className="flex flex-col mt-10">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} className="bg-red-300" />
      ))}
    </div>

    </div>
  )
}

export default ProductsGrid