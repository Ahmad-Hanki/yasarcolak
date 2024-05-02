import Container from "@/components/ui/Container";
import AppointmentForm from "@/components/AppointmentForm";
import MotionDiv from "@/components/ui/MotionDiv";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FormImage from "@/assets/FormImage.jpeg";

const AppointmentPage = () => {
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
  return (
    <div className="bg-primary/20 py-20">
      <Container>
        <div>
          <div className="flex flex-col gap-5 lg:flex-row h-full">
            <AppointmentForm form={form} />

            <MotionDiv
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 min-w-[400px] min-h-[70vh] px-3 relative overflow-hidden aspect-[0.9/1] "
            >
              <Image
                src={FormImage}
                alt="formIamge"
                fill
                className="object-contain object-center"
              />
            </MotionDiv>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppointmentPage;
