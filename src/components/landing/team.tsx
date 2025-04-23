"use client";

import { Button } from "../ui/button";
import SectionHeader from "../ui/section-header";

import Tekla from "@/assets/images/tekla.png";
import Endre from "@/assets/images/endre.png";
import EmployeeCard from "../ui/employee-card";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { scrollToSection } from "@/src/lib/utils";
import { SECTIONS } from "@/src/lib/const";

const Team = () => {
  const t = useTranslations("team");

  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col md:flex-row gap-0 md:gap-5 items-center my-[6.25rem] px-4">
        <div className="flex flex-col gap-5 my-[6.25rem] items-start md:w-1/2">
          <SectionHeader
            subtitle={t("subtitle")}
            title={t("title")}
            alignment="start"
          />
          <p>{t("description")}</p>
          <div className="flex gap-2">
            <Link href="/booking">
              <Button variant="primary">{t("buttonText")}</Button>
            </Link>
            <Button
              className="bg-white text-primary-blue border-2 border-primary-blue hover:text-white active:text-white"
              onClick={() => scrollToSection(SECTIONS.CONTACTUS)}
              variant="primary"
            >
              {t("buttonText2")}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <EmployeeCard
            image={Tekla}
            name="Tekla Tamon"
            role="Professional Cleaner"
            social={{ whatsapp: "+46793043007", instagram: "tamontekla" }}
          />
          <EmployeeCard
            image={Endre}
            name="Endre Udvardi"
            role="Professional Cleaner"
            social={{ whatsapp: "+46793419242", instagram: "udvardiendre" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
