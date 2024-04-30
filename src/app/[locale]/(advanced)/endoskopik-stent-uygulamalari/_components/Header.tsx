import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  EndoskopikStentUygulamalariContentType,
  EndoskopikStentUygulamalariHeaderType,
} from "../../../../../../types";

import Content from "./Content";
import img1 from "../_assets/img1.webp";
import Image from "next/image";
interface HeaderProps {
  header: EndoskopikStentUygulamalariHeaderType;
  content: EndoskopikStentUygulamalariContentType;
}
const Header = ({ header, content }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>
        <div className="relative overflow-hidden aspect-[1/0.7] rounded-md w-full lg:w-[80%] ">
          <Image
            src={img1}
            fill
            className="object-center object-cover "
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
          <div>
            <Content content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
