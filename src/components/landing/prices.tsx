import { SECTIONS } from "@/src/lib/const";
import { useTranslations } from "next-intl";

const Prices = () => {
  const t = useTranslations("prices");

  return (
    <section id={SECTIONS.PRICES} className="w-full px-4 scroll-mt-28">
      <div className="container mx-auto bg-primary-blue rounded-md text-white p-4 md:p-9 flex flex-col gap-8 shadow-md">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase tracking-wider text-[1.125rem]/[1.3125rem] font-medium">
            {t("title")}
          </h3>
          <p className="text-[1.125rem]/[1.3125rem] font-normal">
            {t("description")}
          </p>
        </div>
        <ul className="flex flex-col gap-5 md:whitespace-nowrap">
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("quote")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>{t("free")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("houseCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>350 SEK/{t("hour")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("officeCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>650 SEK/{t("hour")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("deepCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>450 SEK/{t("hour")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("moveInMoveOutCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>500 SEK/{t("hour")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Prices;
