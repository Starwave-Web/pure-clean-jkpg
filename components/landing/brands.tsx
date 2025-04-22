"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brands = () => {
  return (
    <section className="w-full h-[6.75rem] bg-primary-blue">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="px-4 w-full"
        >
          <CarouselContent className="pt-[50px] pb-10">
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
              <Image
                className="mx-auto"
                width={191.17}
                height={40}
                src="/assets/images/vileda.png"
                alt="vileda_log"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
              <Image
                className="mx-auto"
                width={144}
                height={40}
                src="/assets/images/karcher.png"
                alt="karcher_logo"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
              <Image
                className="mx-auto"
                width={104.36}
                height={40}
                src="/assets/images/domestos.png"
                alt="domestos_logo"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
              <Image
                className="mx-auto"
                width={50}
                height={40}
                src="/assets/images/ajax.png"
                alt="ajax_logo"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
              <Image
                className="mx-auto"
                width={45.65}
                height={40}
                src="/assets/images/cif.png"
                alt="cif_logo"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
