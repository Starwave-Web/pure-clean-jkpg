import { SatisfactionIcon, ExperienceIcon, RecurringIcon, HoursIcon } from "../icons/landing"
import StatCard from "../ui/stat-card"


const Stats = () => {
  return (
    <section className='w-full px-4'>
      <div className='container mx-auto bg-primary-blue rounded-md flex flex-col md:flex-row justify-between items-start md:items-center p-8 lg:p-14 gap-1 my-[6.25rems] shadow-md'>
        <StatCard icon={<SatisfactionIcon/>} title="98%" subtitle="Customer Satisfaction"/>
        <div className="h-px w-full md:h-[45px] md:w-px bg-white my-6"/>
        <StatCard icon={<ExperienceIcon/>} title="5+ Years" subtitle="of Experience"/>
        <div className="h-px w-full md:h-[45px] md:w-px bg-white my-6"/>
        <StatCard icon={<RecurringIcon/>} title="80%" subtitle="Recurring Clients"/>
        <div className="h-px w-full md:h-[45px] md:w-px bg-white my-6"/>
        <StatCard icon={<HoursIcon/>} title="4 Hours" subtitle="Response Time"/>
      </div>
    </section>
  )
}

export default Stats