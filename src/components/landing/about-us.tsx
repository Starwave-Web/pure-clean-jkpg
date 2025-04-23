"use client";
import React from "react";
import SectionHeader from "../ui/section-header";
import { Button } from "../ui/button";
import Image from "next/image";

import AboutUsOne from "@/assets/images/about_us_one.png";
import AboutUsTwo from "@/assets/images/about_us_two.png";
import AboutUsThree from "@/assets/images/about_us_three.png";
import AboutUsFour from "@/assets/images/about_us_four.png";
import { SECTIONS } from "@/src/lib/const";
import { scrollToSection } from "@/src/lib/utils";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutUs");

  return (
    <section id={SECTIONS.ABOUTUS} className="w-full scroll-mt-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-[100px] mt-[6.25rem] mb-[3.125rem] px-4">
        <div className="flex flex-col items-start gap-7">
          <SectionHeader
            subtitle={t("subtitle")}
            title={t("title")}
            alignment="start"
          />
          <p className="text-[1rem]/[1.5rem] font-normal text-black">
            {t("description1")}
          </p>
          <p className="text-[1rem]/[1.5rem] font-normal text-black">
            {t("description2")}
          </p>
          <Button onClick={() => scrollToSection(SECTIONS.SERVICES)} variant="primary">
            {t("buttonText")}
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            <Image
              className="w-auto h-auto rounded-md shadow-md"
              src={AboutUsOne}
              alt="about_us_one"
            />
            <Image
              className="w-auto h-auto rounded-md shadow-md"
              src={AboutUsTwo}
              alt="about_us_two"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              className="w-auto h-auto rounded-md shadow-md"
              src={AboutUsThree}
              alt="about_us_three"
            />
            <Image
              className="w-auto h-auto rounded-md shadow-md"
              src={AboutUsFour}
              alt="about_us_four"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
