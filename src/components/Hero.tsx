import Image from "next/image";
import hero from "@/assets/Hero.jpg";
import { useTranslations } from "next-intl";
import Link from "next/link";
import MotionDiv from "./ui/MotionDiv";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative w-full h-[40vh]  lg:h-[80vh] xl:h-[100vh] overflow-hidden flex flex-col bg-transparent items-center justify-center -z-0 text-white">
      <Image
        priority
        fill
        alt="hero"
        className="flex brightness-105 dark:brightness-50 object-cover object-top -z-0"
        src={hero}
      />
      <MotionDiv
        initial={{ opacity: 0, left: -50 }}
        animate={{ opacity: 1, left: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute z-20 w-full h-full flex items-center"
      >
        <div className="w-full flex flex-col px-5 lg:px-10 gap-6  max-w-[70%] md:max-w-[50%]">
          <h1 className="font-bold text-3xl  lg:text-5xl bg-primary/25 w-[115%]">
            {t("header")}
          </h1>

          <Link href={"/randevu-al"} className="btn w-44 bg-primary hover:bg-primary/80">
            {t("button")}
          </Link>
        </div>
      </MotionDiv>
    </div>
  );
};

export default Hero;
