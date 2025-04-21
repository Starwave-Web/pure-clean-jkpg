import AboutUs from "@/components/landing/about-us";
import Brands from "@/components/landing/brands";
import ContactUs from "@/components/landing/contact-us";
import Hero from "@/components/landing/hero";
import Prices from "@/components/landing/prices";
import Protocol from "@/components/landing/protocol";
import Services from "@/components/landing/services";
import Stats from "@/components/landing/stats";
import Team from "@/components/landing/team";
import Testimonials from "@/components/landing/testimonials";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Brands/>
      <AboutUs/>
      <Services/>
      <Prices/>
      <Team/>
      <Protocol/>
      <Stats/>
      <Testimonials/>
      <ContactUs/>
    </main>
  );
}
