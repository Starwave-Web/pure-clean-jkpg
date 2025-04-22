import React from "react";
import SectionHeader from "../ui/section-header";
import { Button } from "../ui/button";
import Image from "next/image";

import AboutUsOne from "@/assets/images/about_us_one.png";
import AboutUsTwo from "@/assets/images/about_us_two.png";
import AboutUsThree from "@/assets/images/about_us_three.png";
import AboutUsFour from "@/assets/images/about_us_four.png";

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex justify-between items-center gap-[100px] mt-[6.25rem] mb-[3.125rem]">
        <div className="flex flex-col items-start gap-7">
          <SectionHeader
            subtitle="About Us"
            title="Your Trusted Cleaning Partner in Jönköping"
            alignment="start"
          />
          <p className="text-[1rem]/[1.5rem] font-normal text-black">
            Based in Jönköping, we are committed to delivering top-notch
            cleaning services tailored to your needs.
          </p>
          <p className="text-[1rem]/[1.5rem] font-normal text-black">
            Our goal is to provide exceptional quality at a great price,
            ensuring your space is always spotless and welcoming.
          </p>
          <Button variant="primary">Our Services</Button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            <Image
              className="w-auto h-auto rounded-md"
              src={AboutUsOne}
              alt="about_us_one"
            />
            <Image
              className="w-auto h-auto rounded-md"
              src={AboutUsTwo}
              alt="about_us_two"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              className="w-auto h-auto rounded-md"
              src={AboutUsThree}
              alt="about_us_three"
            />
            <Image
              className="w-auto h-auto rounded-md"
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
