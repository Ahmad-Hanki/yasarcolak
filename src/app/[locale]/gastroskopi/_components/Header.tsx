import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  GastroskopiContentType,
  GastroskopiFooterType,
  GastroskopiHeaderType,
} from "../../../../../types";
import img from "../_assets/gastroskop-768x512.webp";
import Image from "next/image";
import Content from "./Content";
import Footer from "./Footer";
interface HeaderProps {
  header: GastroskopiHeaderType;
  content: GastroskopiContentType;
  footer: GastroskopiFooterType;
}
const Header = ({ header, content, footer }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>
        <iframe
          src="https://www.youtube.com/embed/-ado5zuF4m8"
          className="lg:w-[80%]"
          height={400}
        ></iframe>
      </div>

      <div className="flex flex-col gap-5 font-light">
        <div>
          <p>{header.d1}</p>
          <p>{header.d2}</p>
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
                  </div>
                </div>
                <li>-{header.c4}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <p>{header.d3}</p>
        </div>
        <div className="relative overflow-hidden aspect-[1/0.7] rounded-md w-full lg:w-[80%]">
          <Image
            src={img}
            fill
            className="object-center object-cover "
            alt=""
          />
        </div>

        <div>
          <Content content={content} />
        </div>
      </div>
      <div>
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default Header;
