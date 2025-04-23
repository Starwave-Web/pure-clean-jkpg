import { SatisfactionIcon, ExperienceIcon, RecurringIcon, HoursIcon } from "../icons/landing";
import StatCard from "../ui/stat-card";
import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("stats");

  return (
    <section className='w-full px-4'>
      <div className='container mx-auto bg-primary-blue rounded-md flex flex-col md:flex-row justify-between items-start md:items-center p-8 lg:p-14 gap-1 my-[6.25rem] shadow-md'>
        <StatCard
          icon={<SatisfactionIcon />}
          title={t("customerSatisfaction.title")}
          subtitle={t("customerSatisfaction.subtitle")}
        />
        <div className="h-px w-full md:h-[45px] md:w-px bg-white my-6" />
        <StatCard
          icon={<ExperienceIcon />}
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />
        <div className="h-px w-full md:h-[45px] md:w-px bg-white my-6" />
        <StatCard
          icon={<RecurringIcon />}
          title={t("recurringClients.title")}
          subtitle={t("recurringClients.subtitle")}
        />
        <div className="h-px w-full md:h-[45px] md:w-px bg-white my-6" />
        <StatCard
          icon={<HoursIcon />}
          title={t("responseTime.title")}
          subtitle={t("responseTime.subtitle")}
        />
      </div>
    </section>
  );
};

export default Stats;
