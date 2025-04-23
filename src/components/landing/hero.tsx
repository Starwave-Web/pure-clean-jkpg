import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import SectionHeader from "../ui/section-header";
import { SECTIONS } from "@/src/lib/const";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section id={SECTIONS.HERO} className="w-full scroll-mt-28 relative overflow-hidden">
      <Image
        className="absolute top-[-20%] right-[-60%] md:top-[-50%] md:right-[-30%]"
        height={900}
        width={900}
        src="/assets/images/hero_background.png"
        alt="hero_bg"
      />
      <div className="right-[-20%] top-[-30%] w-[125px] h-[125px] md:w-[350px] md:h-[350px]  rounded-full bg-[#1195FF] blur-[125px] md:blur-[300px] absolute"/>
      <div className="left-[-20%] bottom-[-30%] w-[125px] h-[125px] md:w-[350px] md:h-[350px]  rounded-full bg-[#1195FF] blur-[125px] md:blur-[300px] absolute"/>
      <div className="container mx-auto flex items-end justify-between mt-6 px-4">
        <div className="flex flex-col gap-[8.4375rem]">
          <div className="flex flex-col items-start gap-5">
            <p className="uppercase text-black text-[1.125rem]/[1.3125rem] font-normal">
              {t("subtitle")}
            </p>
            <h1 className="uppercase text-[3rem]/[3.125rem] text-dark-grey font-bold">
              <span className="text-primary-blue">{t("titlePart1")}</span>
              <br />
              {t("titlePart2")}
            </h1>
            <p className="text-[1rem]/[1.5rem] text-black font-normal">
              {t("description")}
            </p>
            <Link href="/booking">
              <Button variant="primary">{t("buttonText")}</Button>
            </Link>
          </div>
          <div className="pb-[2.125rem]">
            <SectionHeader
              subtitle={t("brandsSubtitle")}
              title={t("brandsTitle")}
              alignment="start"
            />
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            width={516}
            height={638}
            src="/assets/images/hero_girl_image.png"
            alt="hero_girl"
          />
          <Image
            className="absolute top-1/5 left-2/6"
            width={61}
            height={91}
            src="/assets/images/hero_stars_left.png"
            alt="hero_stars_left"
          />
          <Image
            className="absolute top-2/6 left-6/7"
            width={78}
            height={123}
            src="/assets/images/hero_stars_right.png"
            alt="hero_stars_right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
