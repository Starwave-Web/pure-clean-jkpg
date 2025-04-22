import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "../icons/landing";
import { Button } from "../ui/button";
import ContactCard from "../ui/contact-card";
import tekla from "@/assets/images/fatima_testimon.png"
import endre from "@/assets/images/hakan_testimon.png"

const ContactUs = () => {

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
    <section className="w-full">
      <div className="container mx-auto bg-primary-blue p-20 flex items-center justify-between my-[6.25rem] rounded-md">
        <div className="flex flex-col gap-6">
          <h4 className="text-white text-[32px]/[38px] font-semibold">
            Contact Us
          </h4>
          <div className="flex gap-2">
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <InstagramIcon />
            </Button>
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <TikTokIcon />
            </Button>
            <Button className="bg-white hover:bg-white/90 active:bg-light-gray">
              <WhatsAppIcon />
            </Button>
          </div>
          <p className="text-[18px]/[25px] text-white font-medium">
            Have questions or need a personalized cleaning quote? Reach out to
            us today! We’re here to help you keep your space spotless and
            welcoming.
          </p>
        </div>
        {users.map(({ key, ...user }) => <ContactCard key={key} {...user}/>)}
      </div>
    </section>
  );
};

export default ContactUs;
