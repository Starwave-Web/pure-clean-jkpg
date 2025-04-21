import { SatisfactionIcon, ExperienceIcon, RecurringIcon, HoursIcon } from "../icons/landing"
import StatCard from "../ui/stat-card"


const Stats = () => {
  return (
    <section className='w-full'>
      <div className='container mx-auto bg-primary-blue rounded-md flex justify-between items-center p-14 gap-1 my-[6.25rems]'>
        <StatCard icon={<SatisfactionIcon/>} title="98%" subtitle="Customer Satisfaction"/>
        <div className="h-[45px] w-px bg-white"/>
        <StatCard icon={<ExperienceIcon/>} title="5+ Years" subtitle="of Experience"/>
        <div className="h-[45px] w-px bg-white"/>
        <StatCard icon={<RecurringIcon/>} title="80%" subtitle="Recurring Clients"/>
        <div className="h-[45px] w-px bg-white"/>
        <StatCard icon={<HoursIcon/>} title="4 Hours" subtitle="Response Time"/>
      </div>
    </section>
  )
}

export default Stats