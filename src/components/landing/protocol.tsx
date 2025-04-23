import { VerifiedIcon, CheckMarkIcon } from "../icons/landing";
import { useTranslations } from "next-intl";

const Protocol = () => {
  const t = useTranslations("protocol");

  return (
    <section className="w-full px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 rounded-md shadow-md my-[6.25rem]">
        <div className="flex flex-col gap-16 items-center p-6">
          <VerifiedIcon />
          <p className="text-[2rem]/[2.25rem] text-dark-grey font-bold text-center">
            {t("title")}
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 w-full h-full bg-linear-[0deg,white_0%,transparent_25%,transparent_75%,white_100%]" />
          <ul className="text-[1rem]/[1.25rem] md:text-[1.75rem]/[2.375rem] text-primary-blue font-bold uppercase flex flex-col gap-2">
            {t.raw("steps").map((step: string, index: number) => (
              <li key={index} className="flex items-center gap-2.5">
                <CheckMarkIcon className="w-8 h-8" />
                {index + 4}. {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
