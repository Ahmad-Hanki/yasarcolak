import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { EndoscopicFundoplicationContentType,
  EndoscopicFundoplicationHeaderType
 } from "../../../../../../types";

import img from "../_assets/img1.webp";

import Image from "next/image";
import Content from "./Content";
interface HeaderProps {
  header: EndoscopicFundoplicationHeaderType;
  content: EndoscopicFundoplicationContentType;
}
const Header = ({ header, content }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>
        <div className="relative overflow-hidden aspect-[1/0.7] rounded-md w-full lg:w-[80%]">
          <Image
            src={img}
            fill
            className="object-center object-contain "
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 font-light">
        <div>
          <p>{header.d1}</p>
        </div>
        <div className="space-y-4">
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
        </div>

      
        <div>
          <Content content={content} />
        </div>
      </div>
    </div>
  );
};

export default Header;
