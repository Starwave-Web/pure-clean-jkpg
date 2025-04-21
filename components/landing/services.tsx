import { DeepCleanIcon, HouseCleanIcon, MoveCleanIcon, OfficeCleanIcon } from "../icons/landing"
import SectionHeader from "../ui/section-header"
import ServiceCard from "../ui/service-card"


const Services = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col gap-[3.125rem] items-center mt-[6.25rem] mb-[3.125rem]">
        <SectionHeader subtitle="Our Services" title="Comprehensive Cleaning Solutions" alignment="center"/>
        <div className="flex gap-5 my-12">
          <ServiceCard icon={<HouseCleanIcon/>} title="House Cleaning" description="Keep your home spotless with tailored cleaning routines that fit your lifestyle and schedule."/>
          <ServiceCard icon={<OfficeCleanIcon/>} title="Office Cleaning" description="Maintain a pristine work environment with efficient, reliable cleaning for offices and commercial spaces."/>
          <ServiceCard icon={<DeepCleanIcon/>} title="Deep Cleaning" description="Thorough top-to-bottom cleaning to refresh your space, including hard-to-reach areas and detailed care."/>
          <ServiceCard icon={<MoveCleanIcon/>} title="Move-In/Move-Out Cleaning" description="Leave your old place spotless or your new one move-in ready with our detailed cleaning service."/>
        </div>
      </div>
    </section>
  )
}

export default Services