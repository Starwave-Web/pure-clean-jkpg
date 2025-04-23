"use client"
import { SECTIONS } from "@/src/lib/const";
import {
  DeepCleanIcon,
  HouseCleanIcon,
  MoveCleanIcon,
  OfficeCleanIcon,
} from "../icons/landing";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SectionHeader from "../ui/section-header";
import ServiceCard from "../ui/service-card";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  return (
    <section id={SECTIONS.SERVICES} className="w-full scroll-mt-28">
      <div className="container mx-auto flex flex-col gap-[3.125rem] items-center mt-[6.25rem] mb-[3.125rem] px-4">
        <SectionHeader
          subtitle={t("subtitle")}
          title={t("title")}
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
            {t.raw("services").map((service: {title: string, description: string}, index: number) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <ServiceCard
                  icon={
                    index === 0 ? (
                      <HouseCleanIcon />
                    ) : index === 1 ? (
                      <OfficeCleanIcon />
                    ) : index === 2 ? (
                      <DeepCleanIcon />
                    ) : (
                      <MoveCleanIcon />
                    )
                  }
                  title={service.title}
                  description={service.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
