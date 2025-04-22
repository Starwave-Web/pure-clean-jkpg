"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SectionHeader from "../ui/section-header";
import TestimonialCard from "../ui/testimonial-card";

import Hakan from "@/assets/images/hakan_testimon.png";
import Fatima from "@/assets/images/fatima_testimon.png";
import Nils from "@/assets/images/nils_testimonial.jpg";

import ref_one from "@/assets/images/bathroom_one.png";
import ref_two from "@/assets/images/cook_top.png";
import ref_three from "@/assets/images/oven.png";


import Autoplay from "embla-carousel-autoplay";



const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col items-center gap-[3.125rem] my-[6.25rem] px-4">
        <SectionHeader
          subtitle="Happy Customers"
          title="What our Customers Say"
          alignment="center"
        />
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
        >
          <CarouselContent className="pt-[50px] max-w-[370px] md:max-w-none my-4">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={Hakan}
                refimage={ref_one}
                name="Håkan Lindström"
                role="Carpenter"
                description="Exceptional cleaning service! Always punctual, thorough, and attentive to details. Our home has never looked better."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={Fatima}
                refimage={ref_two}
                name="Fatima Khalil"
                role="Sales leader"
                description="Super reliable and professional. They truly care about making your home feel fresh and welcoming. Highly recommend!"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={Nils}
                refimage={ref_three}
                name="Nils Sandberg"
                role="Marketing Coordinator"
                description="Great service at an affordable price. Always impressed with the quality and consistency of their work."
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
