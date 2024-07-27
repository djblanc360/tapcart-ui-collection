"use client"
import React from 'react'
import {
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@tapcart/mobile-components"

interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const resizeImg = (src, width) => {
    let resized = src.match(/[^.]+|./g);
    resized.splice(5, 0, `_${width}x610`);
    return resized.join("");
  };

  return (
    <Carousel setApi={setApi} className="w-full rounded-t-lg overflow-hidden">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="pl-0">
            {/* <AspectRatio ratio={2 / 3}> */}
              <img
                className="w-full h-full object-cover"
                alt={image.altText}
                src={resizeImg(image.src, 400)}
              />
            {/* </AspectRatio> */}
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <div className="absolute bottom-3 w-full flex gap-1 justify-center">
        {Array.from({ length: count }).map((_, index) =>
          index === current - 1 ? (
            <div key={index} className="w-2 h-2 bg-black rounded-full border border-black"></div>
          ) : (
            <div key={index} className="w-2 h-2 rounded-full border border-black"></div>
          )
        )}
      </div> */}
    </Carousel>
  );
}

export default ImageCarousel;