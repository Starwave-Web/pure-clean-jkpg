import Image, { type StaticImageData } from "next/image";
import { InstagramIcon, WhatsAppIcon } from "../icons/landing";
import { Link } from "@/src/i18n/routing";

const EmployeeCard = ({
  image,
  name,
  role,
  social,
}: {
  image: StaticImageData;
  name: string;
  role: string;
  social: { whatsapp: string; instagram: string };
}) => {
  return (
    <div className="group rounded-md border border-light-gray bg-white flex flex-col items-center w-full max-w-[17.375rem] max-h-[22.8125rem] shadow-md">
      <div className="bg-light-gray rounded-t relative">
        <div className="hidden group-hover:flex absolute inset-0 bg-primary-blue/40 z-50 rounded-md  justify-center items-center gap-4">
          <Link href={`https://www.instagram.com/${social.instagram}`} target="_blank">
            <InstagramIcon className="w-7 h-7 fill-white" />
          </Link>
          <div className="h-8 w-px bg-white" />
          <Link href={`https://wa.me/${social.whatsapp}`} target="_blank">
            <WhatsAppIcon className="w-8 h-8 fill-white" />
          </Link>
        </div>
        <Image
          className="max-h-[150px] md:max-h-[270px] object-cover rounded-t-md"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-1 items-center p-3">
        <p className="text-black text-[1rem]/[1.4375rem] font-semibold">
          {name}
        </p>
        <p className="text-dark-grey text-[1rem]/[1.1875rem] font-normal">
          {role}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
