import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  KapsulEndoskopiHeaderType,
  KapsulEndoskopiContentType,
} from "../../../../../../types";
import Content from "./Content";
import img1 from "../_assets/img1.webp";
import Image from "next/image";
interface HeaderProps {
  header: KapsulEndoskopiHeaderType;
  content: KapsulEndoskopiContentType;
}
const Header = ({ header, content }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>

        <p>{header.d1}</p>
        <Card className="px-2">
          <CardTitle className="pb-4 pt-3">{header.content}</CardTitle>
          <CardContent>
            <ul className="space-y-3">
              <li>-{header.c1}</li>
              <li>-{header.c2}</li>
              <li>-{header.c3}</li>
              <li>-{header.c4}</li>
            </ul>
          </CardContent>
        </Card>
        <div className="space-y-5">
          <p>{header.d2}</p>
          <p>{header.d3}</p>
          <p>{header.d4}</p>
          <div className="relative overflow-hidden aspect-[1/0.7] rounded-md w-full lg:w-[80%] ">
            <Image
              src={img1}
              fill
              className="object-center object-cover "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 font-light">
            <Content content={content} />
      </div>
    </div>
  );
};

export default Header;
