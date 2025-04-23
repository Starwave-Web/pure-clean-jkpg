"use client";

import { useState } from "react";
import { BookingIcon, CloseIcon, HamburgerMenu, Logo } from "../icons/common";
import { Button } from "../ui/button";
import { scrollToSection } from "@/src/lib/utils";
import { SECTIONS } from "@/src/lib/const";
import { Link } from "@/src/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleToggle from "../ui/toggle-locale";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const scrollToSectionWeb = (section: string) => {
    if (pathname !== "/") {
      router.push(`/#${section}`);
    }
    scrollToSection(section);
  };

  const scrollToSectionMobile = (section: string) => {
    if (pathname !== "/") {
      router.push(`/#${section}`);
    }
    setOpen(!open);
    scrollToSection(section);
  };

  return (
    <nav className="w-full sticky top-0 z-[100] bg-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div
          onClick={() => scrollToSectionWeb(SECTIONS.HERO)}
          className="flex items-center justify-between gap-2 md:gap-6 cursor-pointer"
        >
          <Logo />
          <p className="text-black text-[16px]/[20px]  md:text-[1.5rem]/[1.75rem] font-medium [font-variant:small-caps]">
            {t("companyName")}
          </p>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-between gap-8 uppercase text-[0.875rem]/[1rem] text-dark-grey cursor-pointer">
            <li
              onClick={() => scrollToSectionWeb(SECTIONS.ABOUTUS)}
              className="hover:text-black actice:text-black"
            >
              {t("aboutUs")}
            </li>
            <li
              onClick={() => scrollToSectionWeb(SECTIONS.SERVICES)}
              className="hover:text-black actice:text-black"
            >
              {t("services")}
            </li>
            <li
              onClick={() => scrollToSectionWeb(SECTIONS.PRICES)}
              className="hover:text-black actice:text-black"
            >
              {t("prices")}
            </li>
            <li
              onClick={() => scrollToSectionWeb(SECTIONS.CONTACTUS)}
              className="hover:text-black actice:text-black"
            >
              {t("contact")}
            </li>
            <LocaleToggle/>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/booking">
            <Button variant="primary">
              <BookingIcon />
              {t("bookAppointment")}
            </Button>
          </Link>
          <div onClick={() => setOpen(!open)} className="lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
      <div
        data-open={open}
        className="hidden data-[open=true]:flex justify-end w-full h-[120vh] bg-black/25 absolute -top-[60px] z-20"
      >
        <div className="w-1/2 h-[120vh] bg-primary-blue px-[22px] py-[29px] flex flex-col gap-11">
          <div className="self-end mt-14" onClick={() => setOpen(!open)}>
            <CloseIcon />
          </div>
          <div>
            <ul className="flex flex-col gap-5 uppercase text-[0.875rem]/[1rem] text-white cursor-pointer">
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.HERO)}
                className="hover:text-black actice:text-black"
              >
                {t("home")}
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.ABOUTUS)}
                className="hover:text-black actice:text-black"
              >
                {t("aboutUs")}
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.SERVICES)}
                className="hover:text-black actice:text-black"
              >
                {t("services")}
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.PRICES)}
                className="hover:text-black actice:text-black"
              >
                {t("prices")}
              </li>
              <li
                onClick={() => scrollToSectionMobile(SECTIONS.CONTACTUS)}
                className="hover:text-black actice:text-black"
              >
                {t("contact")}
              </li>
              <LocaleToggle/>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
