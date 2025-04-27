import { Link } from "@/src/i18n/routing";
import { JSX } from "react";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  return (
    <Link href="/booking">
      <div className="relative group rounded-md border border-light-gray p-7 bg-white h-full shadow-md hover:bg-primary-blue active:bg-blue-500 cursor-pointer">
        <div className="p-6 w-24 border border-light-gray rounded-full flex items-center justify-center absolute -top-12 mx-auto left-0 right-0 bg-white">
          {icon}
        </div>
        <div className="flex flex-col gap-2 mt-8 items-center">
          <h3 className="text-center text-[1.25rem]/[1.4375rem] font-semibold text-primary-blue group-hover:text-white group-active:text-white">
            {title}
          </h3>
          <p className="text-center text-[0.875rem]/[1.25rem] group-hover:text-white group-active:text-white">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
