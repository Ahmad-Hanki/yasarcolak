import Container from "@/components/ui/Container";
import HomeFlex2Image from "./HomeFlex2Image";
import { useTranslations } from "next-intl";
const HomeFlex2 = () => {
  const t = useTranslations("homeFlex2");

  return (
    <div className="py-20">
      <Container>
        <div className="gap-20 md:gap-7 flex flex-col lg:flex-row-reverse ">
          <HomeFlex2Image />

          <div className="flex flex-col flex-1 gap-14 h-full">
            <h1 className="text-5xl font-bold font-mono">{t("header")}</h1>
            <div className="space-y-4">
              <p className="font-light leading-10">{t("description")}</p>
              <p className="font-light ">{t("extraDescription")}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeFlex2;
