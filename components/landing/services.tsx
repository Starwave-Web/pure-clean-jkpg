"use client"
import { SECTIONS } from "@/lib/const";
import {
  DeepCleanIcon,
  HouseCleanIcon,
  MoveCleanIcon,
  OfficeCleanIcon,
} from "../icons/landing";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SectionHeader from "../ui/section-header";
import ServiceCard from "../ui/service-card";
import Autoplay from "embla-carousel-autoplay"

const Services = () => {
  return (
    <section id={SECTIONS.SERVICES} className="w-full scroll-mt-28">
      <div className="container mx-auto flex flex-col gap-[3.125rem] items-center mt-[6.25rem] mb-[3.125rem] px-4">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Cleaning Solutions"
          alignment="center"
        />
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="my-12"
        >
          <CarouselContent className="pt-[50px] max-w-[370px] md:max-w-none h-full my-2 mx-2">
            <CarouselItem className="md:basis-1/3 lg:basis-1/4 ">
              <ServiceCard
                icon={<HouseCleanIcon />}
                title="House Cleaning"
                description="Keep your home spotless with tailored cleaning routines that fit your lifestyle and schedule."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <ServiceCard
                icon={<OfficeCleanIcon />}
                title="Office Cleaning"
                description="Maintain a pristine work environment with efficient, reliable cleaning for offices and commercial spaces."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <ServiceCard
                icon={<DeepCleanIcon />}
                title="Deep Cleaning"
                description="Thorough top-to-bottom cleaning to refresh your space, including hard-to-reach areas and detailed care."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <ServiceCard
                icon={<MoveCleanIcon />}
                title="Move-In/Move-Out Cleaning"
                description="Leave your old place spotless or your new one move-in ready with our detailed cleaning service."
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
