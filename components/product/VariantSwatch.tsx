"use client"
import React, { useState } from 'react'
import { Variant } from '@/types/product'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface VariantSwatchesProps {
  variants: Variant[]
  selectedVariant: Variant
  onVariantChange: (variant: Variant) => void;
}

const VariantSwatches = ({ variants, selectedVariant, onVariantChange }: VariantSwatchesProps) => {

  
  return (
    <div className="flex gap-2">

    <Swiper
      spaceBetween={0}
      slidesPerView={variants.length > 2 ? 2.2 : variants.length}
      breakpoints={{
        640: {
          slidesPerView: variants.length > 2 ? 2.5 : variants.length,
          spaceBetween: variants.length > 1 ? 5: 0,
        },
        768: {
          slidesPerView: variants.length > 3 ? 3.2 : variants.length,
          spaceBetween: variants.length > 3 ? 10 : 5,
        },
        1024: {
          slidesPerView: variants.length > 4 ? 4.3 : variants.length,
          spaceBetween: variants.length > 4.5 ? 20 : 5,
        },
      }}
      className=""
    >

      {variants.map((variant) => (

        <SwiperSlide key={variant.id} className='w-8 h-8'>
        <button
          key={variant.id}
          onClick={() => onVariantChange(variant)}
          className={`h-20 md:h-28 lg:h-36 ${
            selectedVariant.id === variant.id ? 'border-2 border-black' : ''
          }`}
          disabled={!variant.availableForSale}
        >
          <img
            className="w-full h-full object-cover"
            src={variant.image.src}
            alt={variant.image.altText}
          />
        </button>

        </SwiperSlide>
      ))}

  </Swiper>
    </div>
  )
}

export default VariantSwatches