import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ErcpHeaderType, ErcpContentType } from "../../../../../../types";

import Content from "./Content";
import img1 from '../_assets/img.webp';
import Image from "next/image";
interface HeaderProps {
  header:ErcpHeaderType ;
  content:ErcpContentType ;
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
            
               
                <div>
                  <li>-{header.c3}</li>
                  <div className="pl-6">
                    <li>-{header.c3c1}</li>
                    <li>-{header.c3c2}</li>
                    <li>-{header.c3c3}</li>
                    <li>-{header.c3c4}</li>
                    <li>-{header.c3c5}</li>
                  </div>
                </div>
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
