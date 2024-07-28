"use client"
import ProductCard from "@components/product/ProductCard";
import useData from '@/hooks/useData';
import React, { useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { Grid } from "@tapcart/mobile-components";

const ProductsGrid = () => {
  const { products } = useData();
  console.log('ttoal products', products.length);
  const [visible, setVisible] = useState(products.slice(0, 4));
  const [hasMore, setHasMore] = useState(products.length > 4);
  const [loading, setLoading] = useState(false); // artificial loading state

  const handleLoadMore = () => {
    const moreProducts = products.slice(visible.length, visible.length + 4);
    setTimeout(() => {
      setVisible([...visible, ...moreProducts]);
      setLoading(false);
      if (visible.length + moreProducts.length >= products.length) {
        setHasMore(false);
      }
      console.log('hasMore', hasMore);
    }, 1500);
  };

  return (
    <div className="flex flex-col mt-10">
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={hasMore}
      >
        <Grid columns={2} className={undefined}>
          {visible.map((product, index) => (
            <ProductCard key={index} product={product} className={loading &&
              index === visible.length - 1 ? 'loading-product' : ''
            } />
          ))}
        <div
          className={`loader mt-4 transition-all duration-500 ease-in-out
            bg-neutral-300 h-40 text-lg text-center font-bold flex items-center justify-center text-black
            ${ loading ? 'opacity-100' : 'opacity-70'}`
          }
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
