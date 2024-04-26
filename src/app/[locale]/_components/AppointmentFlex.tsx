import AppointmentForm from "@/components/AppointmentForm";
import { useTranslations } from "next-intl";
import FormImage from "@/assets/FormImage.jpg";
import Image from "next/image";
import MotionDiv from "@/components/ui/MotionDiv";
import Grid1 from "@/app/[locale]/_components/Grid1";
const AppointmentFlex = () => {
  const t = useTranslations("appointment");
  const form = {
    header: t("header"),
    description: t("description"),
    name: t("name"),
    email: t("email"),
    phone: t("phone"),
    message: t("message"),
    submit: t("submit"),
  };

  const grid1tT = useTranslations("grid1");
  const grid1 = {
    header: grid1tT('header'),
    description: grid1tT('description'),
    photo1: grid1tT('photo1'),
    photo2: grid1tT('photo2'),
    photo3: grid1tT('photo3'),
   
    details: grid1tT('details'),
  }

  return (
    <div className="space-y-7">
      <div className="flex flex-col gap-5 lg:flex-row h-full">
        <AppointmentForm form={form} />

        <MotionDiv
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-h-[70vh] px-3 relative overflow-hidden aspect-[0.9/1] "
        >
          <Image
            src={FormImage}
            alt="formIamge"
            fill
            className="object-contain object-center"
          />
        </MotionDiv>
      </div>
      <Grid1 t={grid1} />
    </div>
  );
};

export default AppointmentFlex;
