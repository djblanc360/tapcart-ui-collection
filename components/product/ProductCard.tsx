"use client"
import React, { useState } from 'react'
import {
  Button,
  Text,
  Badge,
  Money,
} from "@tapcart/mobile-components"
import ImageCarousel from "../ImageCarousel"
import VariantSwatches from "./VariantSwatch"
import QuickAdd from './QuickAdd'
import { Product, Variant } from "../../types/product";

interface ProductCardProps {
    product: Product
    className?: string
}

const  ProductCard = ({ product, className }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = React.useState(product.variants[0]);

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    console.log(`selected variant: ${variant.id}`);
  };


  const variantColor = selectedVariant.selectedOptions.find((option) => option.name === "Color")?.value;
  const variantImages = product.images.filter(image => image.altText === variantColor);
  const variantAvailable = selectedVariant.availableForSale;

  return (
    <div className={` ${className} flex flex-col h-full`}>

        <ImageCarousel images={variantImages.length > 0 ? variantImages : product.images} />

      <div className="flex flex-col px-8 flex-grow">

        <VariantSwatches 
          variants={product.variants} 
          selectedVariant={selectedVariant}
          onVariantChange={handleVariantChange}
        />

      <div className="flex w-full justify-between py-4">
        <div>
          <Text className="text-xs mt-[8px]">{product.title}</Text>
          <Text className="text-xs text-gray-500">{variantColor}</Text>
        </div>
        <div className='flex flex-col'>
          <div className="flex flex-col-reverse md:flex-row mt-[4px]">
            {selectedVariant.compare_at_price ? (
              <Text className="text-sm mr-[8px] line-through text-red-500">
                <Money
                  price={Number(selectedVariant.compare_at_price)}
                  currency={"USD"}
                  locale={"en-us"}
                />
              </Text>
            ) : null}

            <Text className="text-sm">
              <Money price={Number(selectedVariant.price)} currency={"USD"} locale={"en-us"} />
            </Text>
          </div>
          {!variantAvailable && (
            <Badge variant="soldout" size="plp-layout" className="">
              Sold Out
            </Badge>
          )}
        </div>
        
      </div>
      </div>

          <div>
            <QuickAdd 
              selectedVariant={selectedVariant}
              available={variantAvailable}
             />
          </div>
      


    </div>
  )
}


export default ProductCard