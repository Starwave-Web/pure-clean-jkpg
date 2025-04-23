import AboutUs from "@/src/components/landing/about-us";
import Brands from "@/src/components/landing/brands";
import ContactUs from "@/src/components/landing/contact-us";
import Hero from "@/src/components/landing/hero";
import Prices from "@/src/components/landing/prices";
import Protocol from "@/src/components/landing/protocol";
import Services from "@/src/components/landing/services";
import Stats from "@/src/components/landing/stats";
import Team from "@/src/components/landing/team";
import Testimonials from "@/src/components/landing/testimonials";


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
