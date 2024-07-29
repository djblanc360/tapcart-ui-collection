"use client"
import React, { useState} from 'react'
import {
  Button,
} from "@tapcart/mobile-components"
import { Variant } from '@/types/product'

interface QuickAddProps {
    selectedVariant: Variant
    available: boolean
}

const QuickAdd = ({ selectedVariant, available }: QuickAddProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleQuickAdd = () => {
    setIsClicked(true);
     alert(`quick add - ${selectedVariant.displayName} : ${selectedVariant.id}`)
     
     setTimeout(() => setIsClicked(false), 200);
  }
    
  return (
  <div>
      <Button
        variant="quickadd"
        size="lg"
        onClick={handleQuickAdd}
        disabled={!available}
        className={`relative group overflow-hidden transition-colors duration-300
          ${available ? 'hover:bg-white hover:border hover:border-slate-900' : 'bg-gray-500 cursor-not-allowed'}
          ${isClicked ? 'bg-white border border-slate-900' : ''}
        `}
      >
        <span className={`relative z-10
          ${isClicked ? 'text-slate-900' : 'text-white'}
          ${available ? 'group-hover:text-slate-900' : ''}
        `}>
          {isClicked ? "Added to Cart" : available ? "+ Quick add" : "Not Available"}
        </span>
      </Button>
  </div>
  )
}

export default QuickAdd