import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import SectionHeader from "../ui/section-header";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex items-end justify-between mt-6">
        <div className="flex flex-col gap-[8.4375rem]">
          <div className="flex flex-col items-start gap-5">
            <p className="uppercase text-black text-[1.125rem]/[1.3125rem] font-normal">
              Your Local Cleaning Experts
            </p>
            <h1 className="uppercase text-[3rem]/[3.125rem] text-dark-grey font-bold">
              <span className="text-primary-blue">Spotless Spaces,</span>
              <br />
              Happy Faces
            </h1>
            <p className="text-[1rem]/[1.5rem] text-black font-normal">
              Efficient and reliable cleaning services tailored to your needs,
              keeping your home and office spotless in Jönköping.
            </p>
            <Button variant="primary">
              Book an Appointment
            </Button>
          </div>
          <div className="pb-[2.125rem]">
            <SectionHeader
              subtitle="Quality You Can Trust"
              title="BRANDS WHO WE USE"
              alignment="start"
            />
          </div>
        </div>
        <div className="relative">
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
