import { JSX } from "react"


const ServiceCard = ({icon, title, description}:{icon: JSX.Element, title: string, description: string}) => {
  return (
    <div className="relative rounded-md border border-light-gray p-7 bg-white">
        <div className="p-6 w-24 border border-light-gray rounded-full flex items-center justify-center absolute -top-12 mx-auto left-0 right-0 bg-white">
            {icon}
        </div>
        <div className="flex flex-col gap-2 mt-8 items-center">
            <h3 className="text-center text-[1.25rem]/[1.4375rem] font-semibold text-primary-blue">{title}</h3>
            <p className="text-center text-[0.875rem]/[1.25rem]">{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard