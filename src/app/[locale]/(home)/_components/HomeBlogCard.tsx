import MotionDiv from "@/components/ui/MotionDiv";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HomeBlogCardProps {
  data: {
    href: string;
    title: string;
    img: any;
  };
}
const HomeBlogCard = ({ data }: HomeBlogCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="group-hover:filter group-hover:brightness-75">
        <MotionDiv
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.1,
          }}
          className="relative overflow-hidden aspect-square min-w-[300px] "
        >
          <Image
            src={data.img}
            alt=""
            fill
            className="object-cover object-center"
          />
        </MotionDiv>
      </CardContent>
      <CardFooter className="bg-primary/70 min-h-[102px] rounded-2xl  group-hover:bg-secondary ">
        <Link href={data.href} className="flex gap-3 items-center text-white">
          {data.title}
          <ArrowBigRight size={30} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default HomeBlogCard;
