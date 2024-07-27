"use client"
import React, { useState } from 'react'
import { Variant } from '@/types/product'

interface VariantSwatchesProps {
  variants: Variant[]
}

const VariantSwatches = ({ variants } : VariantSwatchesProps) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  
  return (
    <div className="flex gap-2">
      {variants.map((variant) => (
        <button
          key={variant.id}
          onClick={() => setSelectedVariant(variant)}
          className={`w-8 h-8 ${
            selectedVariant.id === variant.id ? 'border-2 border-black' : ''
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={variant.image.src}
            alt={variant.image.altText}
          />
        </button>
      ))}
    </div>
  )
}

export default VariantSwatches