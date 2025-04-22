"use client";

import Link from "next/link";
import { FooterLogo } from "../icons/common";
import {
  AddressIcon,
  InstagramIcon,
  LetterIcon,
  PhoneIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "../icons/landing";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "@/lib/utils";
import { SECTIONS } from "@/lib/const";

const Footer = () => {
  const router = useRouter();
    const pathname = usePathname();
  
    const scrollToSectionWeb = (section: string) => {
      if (pathname !== "/") {
        router.push(`/#${section}`);
      }
      scrollToSection(section);
    };
    
  return (
    <section className="w-full bg-[#1E2746] px-4">
      <div className="container mx-auto pt-[180px] flex flex-col md:flex-row items-start gap-6 justify-between ">
        <div className="flex flex-col gap-5">
          <div onClick={() => scrollToSectionWeb(SECTIONS.HERO)} className="flex items-center gap-[18px] cursor-pointer">
            <FooterLogo />
            <h1 className="text-[24px]/[28px] font-medium [font-variant:small-caps] text-white">
              PureClean Jönköping
            </h1>
          </div>
          <p className="text-white text-[1.125rem]/[1.5rem] font-normal">
            Efficient and reliable cleaning services tailored to your needs,
            keeping your home and office spotless in Jönköping.
          </p>
          <div className="flex items-center gap-2">
          <Link href="https://www.instagram.com/purecleanjkpg" target="_blank">
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <InstagramIcon className="fill-[#1e2746]" />
            </Button>
            </Link>
            <Link href="https://www.tiktok.com/@purecleanjkpg" target="_blank">
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <TikTokIcon className="fill-[#1e2746]" />
            </Button>
            </Link>
            <Link href="https://wa.me/+46793419242" target="_blank">
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <WhatsAppIcon className="fill-[#1e2746]" />
            </Button>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-[20px]/[23px] text-white font-semibold">
            Services
          </h4>
          <div className="h-px w-3/4 bg-white my-1" />
          <ul className="text-[18px]/[21px] font-normal text-light-gray flex flex-col gap-5 mt-4">
            <li onClick={() => scrollToSectionWeb(SECTIONS.SERVICES)} className=" hover:text-white cursor-pointer">House Cleaning</li>
            <li onClick={() => scrollToSectionWeb(SECTIONS.SERVICES)} className=" hover:text-white cursor-pointer">Office Cleaning</li>
            <li onClick={() => scrollToSectionWeb(SECTIONS.SERVICES)} className=" hover:text-white cursor-pointer">Deep Cleaning</li>
            <li onClick={() => scrollToSectionWeb(SECTIONS.SERVICES)} className=" hover:text-white cursor-pointer">Move-In/Move-Out Cleaning</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[20px]/[23px] text-white font-semibold md:whitespace-nowrap">
            Useful Links
          </h4>
          <div className="h-px w-3/4 bg-white my-1" />
          <ul className="text-[18px]/[21px] font-normal text-light-gray flex flex-col gap-5 mt-4">
            <li onClick={() => scrollToSectionWeb(SECTIONS.HERO)} className=" hover:text-white cursor-pointer">Home</li>
            <li onClick={() => scrollToSectionWeb(SECTIONS.ABOUTUS)} className=" hover:text-white cursor-pointer">About Us</li>
            <li onClick={() => scrollToSectionWeb(SECTIONS.SERVICES)} className=" hover:text-white cursor-pointer">Service</li>
            <li onClick={() => scrollToSectionWeb(SECTIONS.CONTACTUS)} className=" hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.25rem]/[1.4375rem] text-white font-semibold">
            Contact
          </h4>
          <div className="h-px w-3/4 bg-white my-1" />
          <ul className="text-[1.125rem]/[1.3125rem] font-normal text-light-gray flex flex-col gap-5 mt-4">
          <Link href="tel:+46 79-341 92 42"><li className=" hover:text-white flex items-center gap-2">
              <PhoneIcon className="w-7 h-7" />
              +46 79 3419 242
            </li>
            </Link>
            <Link href="mailto:purecleanjpkg@gmail.com">
            <li className="hover:text-white flex items-center gap-2">
              <LetterIcon className="w-5 h-5" />
              purecleanjpkg@gmail.com
            </li>
            </Link>
            <Link href="https://g.co/kgs/P8RA3x5">
            <li className=" hover:text-white flex items-center gap-2">
              <AddressIcon className="w-6 h-6" />
              554 58 Jönköping, Tallörtsbacken 25.
            </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 pt-[3.125rem] pb-[1.5625rem]">
        <div className="h-px w-full bg-white" />
        <p className="text-[1.125rem]/[1.3125rem] font-normal text-white md:whitespace-nowrap">
          Copyright by PureClean Jönköping @ 2025. All rights reserved
        </p>
        <div className="h-px w-full bg-white" />
      </div>
    </section>
  );
};

export default Footer;
