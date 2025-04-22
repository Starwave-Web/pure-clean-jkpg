import Image, { type StaticImageData } from "next/image"
import Link from "next/link"


const ContactCard = ({image, name, phone, email, generalEmail}: {image: StaticImageData, name: string, phone: string, email: string, generalEmail: string}) => {
  return (
    <div className="flex flex-col items-start gap-3 text-white text-[18px]/[25px] font-medium md:p-4">
        <Image className="w-[70px] h-[70px] object-cover rounded-full" src={image} alt={name}/>
        <p className="text-[2rem]/[2.375rem] font-semibold">{name}</p>
        <Link href={`tel:${phone}`}><p>{phone}</p></Link>
        <Link href={`mailto:${phone}`}><p className="underline">{email}</p></Link>
        <Link href={`mailto:${phone}`}><p className="underline">{generalEmail}</p></Link>
    </div>
  )
}

export default ContactCard