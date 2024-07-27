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

      <Grid columns={2}>
      {Products.map((product, index) => (
        <ProductCard key={index} product={product} className="bg-red-300" />
      ))}
      </Grid>

    </div>
  )
}

export default ProductsGrid