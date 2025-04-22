import { JSX } from "react"

const StatCard = ({icon, title, subtitle}:{icon: JSX.Element, title: string, subtitle: string}) => {
  return (
    <div className="flex items-center gap-3">
        {icon}
        <div className="flex flex-col">
            <p className="text-[2.25rem]/[2.625rem] text-white font-bold">{title}</p>
            <p className="text-[1.125rem]/[1.3125rem] text-white font-semibold">{subtitle}</p>
        </div>
    </div>
  )
}

export default StatCard