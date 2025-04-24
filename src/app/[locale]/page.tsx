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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionell Städservice i Jönköping | PureClean Jönköping",
  description:
    "PureClean Jönköping erbjuder pålitlig och professionell städning i Jönköping, Sverige. Vi specialiserar oss på hemstädning, kontorsstädning och djupstädning med fokus på kvalitet och kundnöjdhet.",
  keywords: [
    "städning Jönköping",
    "miljövänlig städning",
    "städhjälp hemma",
    "kontorsstädning",
    "lokal städfirma",
    "veckostädning",
    "professionella städare",
    "hemstädning Jönköping",
    "flyttstädning Jönköping",
    "pålitligt städföretag",
    "storstädning Jönköping",
    "företagsstädning Jönköping",
    "lägenhetsstädning Jönköping",
    "städtjänst Jönköping",
    "hemstädningstjänst",
    "bästa städfirma Jönköping",
    "pålitliga städare Jönköping",
    "djuprengöring Jönköping",
    "svenskt städföretag",
    "städföretag Jönköping",
  ],
  openGraph: {
    url: "https://purecleanjkpg.se",
    type: "website",
    title: "Professionell Städservice i Jönköping | PureClean Jönköping",
    description: "PureClean Jönköping erbjuder professionella och pålitliga städtjänster i Jönköping, Sverige. Vi specialiserar oss på hemstädning, kontorsstädning och djupstädning, med fokus på kvalitet och kundnöjdhet.",
    images: [
      {
        url: "https://purecleanjkpg.se/assets/images/og-image.jpg",
        width: 1280,
        height: 852,
        alt: "PureClean Jönköping - Städservice"
      }
    ]
  },
  alternates: {
    canonical: "https://purecleanjkpg.se/sv"
  }
};


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
