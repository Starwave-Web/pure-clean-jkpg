"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SectionHeader from "../ui/section-header";
import TestimonialCard from "../ui/testimonial-card";
import { useTranslations } from "next-intl";


import Hakan from "@/assets/images/hakan_testimon.png";
import Fatima from "@/assets/images/fatima_testimon.png";
import Nils from "@/assets/images/nils_testimonial.jpg";

import ref_one from "@/assets/images/bathroom_one.png";
import ref_two from "@/assets/images/cook_top.png";
import ref_three from "@/assets/images/oven.png";

import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const t = useTranslations("testimonials");

  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col items-center gap-[3.125rem] my-[6.25rem] px-4">
        <SectionHeader
          subtitle={t("subtitle")}
          title={t("title")}
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
            {t.raw("testimonialsInner").map((testimonial:{name: string, role: string, description: string}, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  image={index === 0 ? Hakan : index === 1 ? Fatima : Nils}
                  refimage={index === 0 ? ref_one : index === 1 ? ref_two : ref_three}
                  name={testimonial.name}
                  role={testimonial.role}
                  description={testimonial.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
