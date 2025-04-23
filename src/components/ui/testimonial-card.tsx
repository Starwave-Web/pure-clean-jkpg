import Image, { type StaticImageData } from "next/image";
import { StarIcon } from "../icons/landing";

const TestimonialCard = ({
  image,
  refimage,
  name,
  role,
  description,
}: {
  image: StaticImageData;
  refimage: StaticImageData;
  name: string;
  role: string;
  description: string;
}) => {
  return (
    <div className="relative rounded-md border border-light-gray p-7 bg-white shadow-md h-full">
      <div className="w-18 border border-light-gray rounded-full flex items-center justify-center absolute -top-12 mx-auto left-0 right-0 bg-white">
        <Image src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-2 mt-8 items-center">
        <div>
          <h3 className="text-center text-[1.25rem]/[1.4375rem] font-semibold text-primary-blue">
            {name}
          </h3>
          <p className="text-center text-[0.875rem]/[1.25rem]">{role}</p>
        </div>
        <Image
          className="rounded-md w-[200px]"
          src={refimage}
          alt={`${name}_reference`}
        />
        <div>
          <p className="text-center text-[0.875rem]/[1.25rem]">{description}</p>
          <div className="flex items-center justify-center gap-2 my-4">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
