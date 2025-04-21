import Image, { type StaticImageData } from "next/image";

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
    <div className="rounded-md border border-light-gray bg-white flex flex-col items-center w-full max-w-[17.375rem] max-h-[22.8125rem]">
      <div className="bg-light-gray">
        <Image src={image} alt={name} />
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
