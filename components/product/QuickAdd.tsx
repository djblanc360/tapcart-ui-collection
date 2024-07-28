"use client"
import React from 'react'
import {
  Button,
} from "@tapcart/mobile-components"
import { Variant } from '@/types/product'

interface QuickAddProps {
    selectedVariant: Variant
    available: boolean
}

const QuickAdd = ({ selectedVariant, available }: QuickAddProps) => {

    const handleQuickAdd = () => {
        alert(`quick add - ${selectedVariant.displayName} : ${selectedVariant.id}`)
    }
    

    return (
        <div>
        <Button
          variant="quickadd"
          size="sm"
          onClick={handleQuickAdd}
          disabled={!available}
        >
          {available ? "+ Quick add" : "Not Available"}
        </Button>
      </div>
    )
}

export default QuickAdd