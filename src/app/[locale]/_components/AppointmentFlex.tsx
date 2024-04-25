import AppointmentForm from "@/components/AppointmentForm"
import { useTranslations } from "next-intl"
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
    <div className="flex flex-col gap-5 lg:flex-row">
        <AppointmentForm form={form}/>

        <div className="">

        </div>
    </div>
  )
}

export default AppointmentFlex