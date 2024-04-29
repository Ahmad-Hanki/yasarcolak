import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  KolonoskopiContentType,
  KolonoskopiFooterType,
  KolonoskopiHeaderType,
} from "../../../../../types";
import Image from "next/image";
import Content from "./Content";
import Footer from "./Footer";
interface HeaderProps {
  header: KolonoskopiHeaderType;
  content: KolonoskopiContentType;
  footer: KolonoskopiFooterType;
}
const Header = ({ header, content, footer }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>
        <iframe
          src="https://www.youtube.com/embed/zWd_rcfvXas"
          className="lg:w-[80%]"
          height={400}
        ></iframe>
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
                <div>
                  <li>-{header.c5}</li>
                  <div className="pl-6">
                    <li>-{header.c5c1}</li>
                    <li>-{header.c5c2}</li>
                  </div>
                </div>
                <li>-{header.c6}</li>
                <li>-{header.c7}</li>
              </ul>
            </CardContent>
          </Card>

          <div>
            <Content content={content} />
          </div>
        </div>
      </div>
      <div>
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default Header;
