"use client"
import * as React from "react"
import {
  Button,
  Text,
  Badge,
  Money,
} from "@tapcart/mobile-components"
import ImageCarousel from "../ImageCarousel"
import VariantSwatches from "./VariantSwatch"

interface ProductCardProps {
    product: any
    className?: string
}

export default function ProductCard(props : ProductCardProps) {
  let variant = props.product.variants[0]
  // console.log('variant', variant)

  return (
    <div className={` ${props.className}`}>

        <ImageCarousel images={props.product.images} />

        <VariantSwatches variants={props.product.variants} />

      <Button
        variant="quickadd"
        size="sm"
      >
        + Quick add
      </Button>

      <Text className="text-xs mt-[8px]">{props.product.title}</Text>

      <div className="flex mt-[4px]">
        {variant.compare_at_price ? (
          <Text className="text-sm mr-[8px] line-through text-red-500">
            <Money
              price={variant.compare_at_price}
              currency={"USD"}
              locale={"en-us"}
            />
          </Text>
        ) : null}

        <Text className="text-sm">
          <Money price={variant.price} currency={"USD"} locale={"en-us"} />
        </Text>

      </div>

    </div>
  )
}
