"use client"
import { SECTIONS } from "@/src/lib/const";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "../ui/button";

const Prices = () => {
  const t = useTranslations("prices");
  const [rutMultiplier, setRutMultiplier] = useState(1)

  const innitialPrice = process.env.NEXT_PUBLIC_INITIAL_PRICE as unknown as number

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
          <div>
            <Button className="bg-white text-primary-blue hover:bg-white/90 active:bg-light-gray" onClick={() => setRutMultiplier(rutMultiplier === 1 ? 2 : 1)}>{rutMultiplier === 1 ?  t("applyRut") : t("removeRut")}</Button>
          </div>
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
            <p>{innitialPrice / rutMultiplier} SEK/{t("hour")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("officeCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>{Math.ceil(innitialPrice * 1.333)} SEK/{t("hour")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("deepCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>{Math.floor(innitialPrice / rutMultiplier * 1.067)} SEK/{t("hour")}</p>
          </li>
          <li className="flex justify-between items-baseline gap-4 font-semibold text-[1.25rem]/[1.3125rem]">
            <p>{t("moveInMoveOutCleaning")}</p>
            <div className="w-full border border-white border-dashed" />
            <p>{Math.ceil(innitialPrice / rutMultiplier * 1.111)} SEK/{t("hour")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Prices;
