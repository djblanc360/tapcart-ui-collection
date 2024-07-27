"use client"
import * as React from "react"
import {
  Button,
  AspectRatio,
  Text,
  Badge,
  Carousel,
  CarouselContent,
  CarouselItem,
  Money,
  type CarouselApi,
} from "@tapcart/mobile-components"

interface ProductCardProps {
    product: any
    className?: string
}

export default function ProductCard(props : ProductCardProps) {
  let variant = props.product.variants[0]
  console.log('variant', variant)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const resizeImg = (src, width) => {
    let resized = src.match(/[^.]+|./g)
    resized.splice(5, 0, `_${width}x610`)
    return resized.join("")
  }

  return (
    <div className={` ${props.className}`}>
      <Carousel
          setApi={setApi}
          className="w-full rounded-t-lg overflow-hidden"
      >
        <CarouselContent>
          {props.product.images.map((image) => (
              <CarouselItem key={image.id} className="pl-0">
                <AspectRatio ratio={2 / 3}>
                  <img
                      className="w-full h-full object-cover"
                      src={resizeImg(image.src, 400)}
                  />
                </AspectRatio>
              </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-3 w-full flex gap-1 justify-center">
          {Array.from({ length: count }).map((_, index) =>
              index === current - 1 ? (
                  <div key={Math.random()} className="w-2 h-2 bg-black rounded-full border border-black"></div>
              ) : (
                  <div key={Math.random()} className="w-2 h-2 rounded-full border border-black"></div>
              )
          )}
        </div>
      </Carousel>

      <Button
        variant="quickadd"
        size="sm"
      >
        + Quick add
      </Button>

      <Text className="text-xs mt-[8px]">{props.product.title}</Text>

      <div className="flex mt-[4px]">
        {variant.compare_at_price ? (
          <Text className="text-sm mr-[8px] line-through text-red-500">
            <Money
              price={variant.compare_at_price}
              currency={"USD"}
              locale={"en-us"}
            />
          </Text>
        ) : null}

        <Text className="text-sm">
          <Money price={variant.price} currency={"USD"} locale={"en-us"} />
        </Text>

      </div>

    </div>
  )
}
