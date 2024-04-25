import AppointmentForm from "@/components/AppointmentForm"
import { useTranslations } from "next-intl"
import FormImage from '@/assets/FormImage.jpg'
import Image from "next/image";
const AppointmentFlex = () => {
    const t= useTranslations('appointment');
    const form = {
        header: t('header'),
        description:t('description'),
        name:t('name'),
        email:t('email'),
        phone:t('phone'),
        message:t('message'),
        submit:t('submit'),
    }

  return (
    <div className="flex flex-col gap-5 lg:flex-row h-full">
        <AppointmentForm form={form}/>
 
        <div className="flex-1 min-h-[70vh] px-3 relative overflow-hidden aspect-[0.9/1] ">
            <Image src={FormImage} alt="formIamge" fill className="object-contain object-center" />
        </div>
    </div>
  )
}

export default AppointmentFlex