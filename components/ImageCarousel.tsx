"use client";
import React, { useRef, useState } from "react";
import {
  Badge,
} from "@tapcart/mobile-components"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// for swiper bullet pagination
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./styles.css";


interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {

  const resizeImg = (src, width) => {
    let resized = src.match(/[^.]+|./g);
    resized.splice(5, 0, `_${width}x610`);
    return resized.join("");
  };

  return (
    <div>
      
    <Swiper
      pagination={{ 
        clickable: true,
        dynamicBullets: true
      }}
      modules={[Navigation, Pagination]}
      className="w-full rounded-t-lg overflow-hidden"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <div className="absolute top-0 left-4 z-10">
          <Badge variant="sale" size="carousels" className="text-lg mt-[8px]">{image.altText}</Badge>
          </div>
          <img
            className="w-full h-full object-cover"
            alt={image.altText}
            src={resizeImg(image.src, 400)}
          />
          

        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default ImageCarousel;