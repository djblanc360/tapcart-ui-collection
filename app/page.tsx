import ProductCard from "./ProductCard"
import Products from "./sample-products"
import * as React from "react";

import {
  Grid
} from "@tapcart/mobile-components"

export default function Page() {

  return (
    <div className="flex flex-col mt-10">

      <Grid columns={2}>
          <ProductCard
              className="w-full"
              product={Products[0]}
          ></ProductCard>
      </Grid>

    </div>
  )
}
