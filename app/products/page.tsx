import ProductCard from "@components/product/ProductCard"
import Products from "@data/sample-products"
import * as React from "react";

import {
  Grid
} from "@tapcart/mobile-components"

const ProductsGrid = () => {
    console.log(Products.length)
  return (
    <div className="flex flex-col mt-10">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Products.map((product, index) => (
        <ProductCard key={index} product={product} className="bg-red-300" />
      ))}
    </div>

    </div>
  )
}

export default ProductsGrid