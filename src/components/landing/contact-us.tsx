import { SECTIONS } from "@/src/lib/const";
import { BookingIcon } from "../icons/common";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "../icons/landing";
import { Button } from "../ui/button";
import ContactCard from "../ui/contact-card";
import tekla from "@/assets/images/tekla.png";
import endre from "@/assets/images/endre.png";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("contactUs");

  const users = [
    {
      key: 1,
      image: tekla,
      name: "Tekla Tamon",
      phone: "+46 79-304 30 07",
      email: "tekla.tamon@gmail.com",
      generalEmail: "purecleanjpkg@gmail.com",
    },
    {
      key: 2,
      image: endre,
      name: "Endre Udvardi",
      phone: "+46 79-341 92 42",
      email: "udvardiendre@gmail.com",
      generalEmail: "purecleanjpkg@gmail.com",
    },
  ];

  return (
    <section id={SECTIONS.CONTACTUS} className="w-full px-4 scroll-mt-28">
      <div className="container mx-auto bg-primary-blue p-8 lg:p-20 flex flex-col md:flex-row items-start gap-10 md:gap-4 md:items-center justify-between my-[6.25rem] rounded-md shadow-md">
        <div className="flex flex-col gap-6 items-start">
          <h4 className="text-white text-[2rem]/[2.375rem] font-semibold">
            {t("title")}
          </h4>
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/purecleanjkpg" target="_blank">
              <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
                <InstagramIcon />
              </Button>
            </Link>
            <Link href="https://www.tiktok.com/@purecleanjkpg" target="_blank">
              <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
                <TikTokIcon />
              </Button>
            </Link>
            <Link href="https://wa.me/+46793419242" target="_blank">
              <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
                <WhatsAppIcon />
              </Button>
            </Link>
          </div>
          <p className="text-[18px]/[25px] text-white font-medium">
            {t("description1")}
          </p>
          <p className="text-[18px]/[25px] text-white font-medium">
            {t("description2")}
          </p>
          <Link href="/booking">
            <Button
              className="bg-white text-primary-blue hover:bg-white/90 active:bg-light-gray"
              variant="primary"
            >
              <BookingIcon className="fill-primary-blue" />
              {t("buttonText")}
            </Button>
          </Link>
        </div>
        {users.map(({ key, ...user }) => (
          <ContactCard key={key} {...user} />
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
