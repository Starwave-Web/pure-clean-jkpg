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

const Footer = () => {
  return (
    <section className="w-full bg-[#1E2746]">
      <div className="container mx-auto pt-[180px] flex items-start gap-6 justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-[18px]">
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
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <InstagramIcon className="fill-[#1e2746]" />
            </Button>
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <TikTokIcon className="fill-[#1e2746]" />
            </Button>
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <WhatsAppIcon className="fill-[#1e2746]" />
            </Button>
          </div>
        </div>
        <div>
          <h4 className="text-[20px]/[23px] text-white font-semibold">
            Services
          </h4>
          <div className="h-px w-3/4 bg-white my-1" />
          <ul className="text-[18px]/[21px] font-normal text-light-gray flex flex-col gap-5">
            <li className=" hover:text-white">House Cleaning</li>
            <li className=" hover:text-white">Office Cleaning</li>
            <li className=" hover:text-white">Deep Cleaning</li>
            <li className=" hover:text-white">Move-In/Move-Out Cleaning</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[20px]/[23px] text-white font-semibold md:whitespace-nowrap">
            Useful Links
          </h4>
          <div className="h-px w-3/4 bg-white my-1" />
          <ul className="text-[18px]/[21px] font-normal text-light-gray flex flex-col gap-5">
            <li className=" hover:text-white">Home</li>
            <li className=" hover:text-white">About Us</li>
            <li className=" hover:text-white">Service</li>
            <li className=" hover:text-white">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.25rem]/[1.4375rem] text-white font-semibold">
            Contact
          </h4>
          <div className="h-px w-3/4 bg-white my-1" />
          <ul className="text-[1.125rem]/[1.3125rem] font-normal text-light-gray flex flex-col gap-5">
            <li className=" hover:text-white flex items-center gap-2">
              <PhoneIcon className="w-7 h-7" />
              (+46) 79 3419 242
            </li>
            <li className=" hover:text-white flex items-center gap-2">
              <LetterIcon className="w-5 h-5" />
              purecleanjpkg@gmail.com
            </li>
            <li className=" hover:text-white flex items-center gap-2">
              <AddressIcon className="w-6 h-6" />
              554 58 Jönköping, Tallörtsbacken 25.
            </li>
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
