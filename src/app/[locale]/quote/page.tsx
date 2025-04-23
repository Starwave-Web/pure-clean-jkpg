import { Logo } from "@/src/components/icons/common";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

const Quote = () => {
  const t = useTranslations("quote");

  return (
    <main>
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 flex flex-col gap-4 md:gap-20 py-20 md:py-40 h-[100vh]">
          <div className=" text-primary-blue flex flex-col gap-4 md:gap-8">
            <div>
              <Logo />
            </div>
            <h1 className="text-[18px]/[21px] font-medium">
              {t("heading")}
            </h1>
            <p className="text-[21px] md:text-[2rem] w-3/4 text-black font-semibold">
              {t("subheading")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <Link href="/">
              <Button variant="primary">
                {t("button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quote;