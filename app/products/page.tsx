"use client"
import ProductCard from "@components/product/ProductCard";
import useData from '@/hooks/useData';
import React, { useState } from "react";
// import { loadMoreProducts } from '@/utils/loadMoreProducts';
import {
  Grid,
  ProductGrid
} from "@tapcart/mobile-components"

import InfiniteScroll from 'react-infinite-scroller';


const createScroller = (arr, itemsPerScroll) => {
  let index = 0;
  return () => {
    if (index >= arr.length) return []; // no more items
    const result = arr.slice(index, index + itemsPerScroll);
    index += itemsPerScroll;
    return result;
  };
};

const ProductsGrid = () => {
  // const { initialData } = useData();
  const { products } = useData();
  const [visible, setVisible] = useState(products.slice(0, 4));
  const [hasMore, setHasMore] = useState(products.length > 4);
  const [loading, setLoading] = useState(false); // artificial loading state

  const handleLoadMore = () => {
    setLoading(true);
    const moreProducts = products.slice(visible.length, visible.length + 4);
    setTimeout(() => {
      setLoading(false);
      setVisible([...visible, ...moreProducts]);
      
      if (visible.length + moreProducts.length >= products.length) {
        setHasMore(false);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col mt-10">
      {/* <ProductGrid
        loadMoreProducts={loadMoreProducts}
        initialData={initialData}
        queryVariables={{}}
        config={{}}
      /> */}


      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={hasMore}
      >
        <Grid columns={2} className={undefined}>
          {visible.map((product, index) => (
            <ProductCard key={index} product={product}/>
          ))}
        <div
          className={`loader mt-4 transition-all duration-500 ease-in-out
            bg-neutral-300 h-40 text-lg text-center font-bold flex items-center justify-center text-black
            ${ loading ? 'opacity-100' : 'opacity-70'}`}
          
        >
          Loading Products...
        </div>
        <div
          className={`loader mt-4 transition-all duration-500 ease-in-out
            bg-neutral-300 h-40 text-lg text-center font-bold flex items-center justify-center text-black
            ${ loading ? 'opacity-100' : 'opacity-50'}`
          }
        >
          Loading Products...
        </div>
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default ProductsGrid;
