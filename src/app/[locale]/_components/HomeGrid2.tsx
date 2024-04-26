import photo1 from "@/assets/homeGridPhoto1.webp";
import photo2 from "@/assets/homeGridPhoto2.webp";
import photo3 from "@/assets/homeGridPhoto3.webp";
import photo4 from "@/assets/homeGridPhoto4.webp";
import MotionDiv from "@/components/ui/MotionDiv";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const HomeGrid2 = () => {
  const t = useTranslations("homeGrid2");
  const data = [
    {
      title: t("title1"),
      description: t("description1"),
      img: photo1,
      href: "/mide-balonu",
    },
    {
      title: t("title2"),
      description: t("description2"),
      img: photo2,
      href: "/gastroskopi",
    },
    {
      title: t("title3"),
      description: t("description3"),
      img: photo3,
      href: "/ercp",
    },
    {
      title: t("title4"),
      description: t("description4"),
      img: photo4,
      href: "/eus",
    },
  ];
  return (
    <div className="flex flex-col justify-center gap-8">
      <h1 className="text-5xl text-center font-bold brightness-90">
        {t("header")}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
        {data.map((item, i) => {
          return (
            <Card key={i} className="flex flex-col items-center pt-7 ">
              <CardContent>
                <MotionDiv
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className=" w-[300px] aspect-[1/1.6] overflow-hidden relative rounded-md px-3"
                >
                  <Image
                  fill
                    src={item.img}
                    alt="image"
                    className="object-cover object-center"
                  />
                </MotionDiv>
              </CardContent>
              <CardFooter className="flex flex-col justify-start gap-3">
                <h1 className="text-start text-3xl w-full">{item.title}</h1>
                <p className="text-start">{item.description}</p>
                <Link
                  className="w-full text-primary/90 font-serif text-start hover:text-primary hover:brightness-75 transition-colors"
                  href={item.href}
                >
                  {t("details")} +
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row ">
        <h1 className="text-4xl font-serif text-start flex-1">{t("footer")}</h1>
        <div className="flex-1 flex justify-start lg:justify-end ">
          <Link href={"/randevu-al"} className="btn px-9 bg-primary text-white hover:brightness-75 hover:bg-primary">
            {t("appointment")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid2;
