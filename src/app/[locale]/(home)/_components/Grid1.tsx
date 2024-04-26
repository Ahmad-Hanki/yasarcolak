import grid1 from "@/assets/grid1.webp";
import grid2 from "@/assets/grid1Photo2.webp";
import grid3 from "@/assets/grid1Photo3.webp";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MotionDiv from "../../../../components/ui/MotionDiv";

type Grid1 = {
  t: {
    header: string;
    description: string;
    photo1: string;
    photo2: string;
    photo3: string;
    details: string;
  };
};

const Grid1 = ({ t }: Grid1) => {
  const data = [
    {
      name: t.photo1,
      img: grid1,
      href: "/gastroscopy",
    },
    {
      name: t.photo2,
      img: grid2,
      href: "/gastric-balloon",
    },
    {
      name: t.photo3,
      img: grid3,
      href: "/endoscopic-sleeve-gastroplasty",
    },
  ];
  return (
    <div className="flex flex-col gap-3 text-secondary-foreground">
      <h1 className="font-bold text-3xl sm:text-4xl text-center">{t.header}</h1>
      <p className="shadow-sm text-center">{t.description}</p>

      <div className="py-10 flex flex-wrap gap-5 justify-center">
        {data.map((item, i) => {
          return (
            <Card key={i} className="">
              <CardContent className="grid place-content-center ">
                <MotionDiv
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className=" w-[350px] aspect-[1/1.6] overflow-hidden relative rounded-md p-0"
                >
                  <Image
                    src={item.img}
                    alt="image"
                    className="object-contain object-center"
                    fill
                  />
                </MotionDiv>
              </CardContent>
              <CardFooter className="flex flex-col justify-start gap-3 w-full">
                <h1 className="text-start text-3xl w-full">{item.name}</h1>
                <Link
                  className="w-full text-primary/90 font-serif text-start hover:text-primary hover:brightness-75 transition-colors"
                  href={item.href}
                >
                  {t.details} +
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Grid1;
