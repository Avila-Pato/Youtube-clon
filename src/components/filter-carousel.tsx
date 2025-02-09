"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect?: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data,
}: FilterCarouselProps) => {
  console.log("Datos del carrusel:", data);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          <CarouselItem className="pl-3 basis-auto">
            <Badge
              variant={value === null ? "default" : "secondary"}
              className=" rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
            >
              All
            </Badge>
          </CarouselItem>
          {data.map((item) => (
            <CarouselItem key={item.value} className="pl-3 basis-auto">
              <Badge>{item.label}</Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
