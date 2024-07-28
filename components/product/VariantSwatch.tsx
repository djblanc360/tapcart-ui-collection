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
      spaceBetween={5}
      slidesPerView={1.2}
      breakpoints={{
        640: {
          slidesPerView: variants.length > 2.5 ? 2.5 : variants.length,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: variants.length > 3.2 ? 3.2 : variants.length,
          spaceBetween: variants.length > 3.2 ? 10 : 5,
        },
        1024: {
          slidesPerView: variants.length > 4.5 ? 4.3 : variants.length,
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
          className={` ${
            selectedVariant.id === variant.id ? 'border-2 border-black' : ''
          }`}
          disabled={!variant.availableForSale}
        >
          <img
            className="w-full h-20 object-cover"
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