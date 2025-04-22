import Image, { type StaticImageData } from "next/image"


const ContactCard = ({image, name, phone, email, generalEmail}: {image: StaticImageData, name: string, phone: string, email: string, generalEmail: string}) => {
  return (
    <div className="flex flex-col items-start gap-3 text-white text-[18px]/[25px] font-medium p-4">
        <Image src={image} alt={name}/>
        <p className="text-[2rem]/[2.375rem] font-semibold">{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{generalEmail}</p>
    </div>
  )
}

export default ContactCard