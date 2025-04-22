import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SectionHeader from "../ui/section-header";
import TestimonialCard from "../ui/testimonial-card";

import Hakan from "@/assets/images/hakan_testimon.png";
import Fatima from "@/assets/images/fatima_testimon.png";
import Nils from "@/assets/images/nils_testimon.png";

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col items-center gap-[3.125rem] my-[6.25rem]">
        <SectionHeader
          subtitle="Happy Customers"
          title="What our Customers Say"
          alignment="center"
        />
        <Carousel>
          <CarouselContent className="pt-[50px]">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={Hakan}
                name="Håkan Lindström"
                role="Nursing Assistant"
                description="Exceptional cleaning service! Always punctual, thorough, and attentive to details. My office has never looked better."
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={Fatima}
                name="Fatima Khalil"
                role="President of Sales"
                description="Super reliable and professional. They truly care about making your home feel fresh and welcoming. Highly recommend!"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={Nils}
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
