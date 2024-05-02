import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  MideBalonuContentType,
  MideBalonuFooterType,
  MideBalonuHeaderType,
} from "../../../../../../types";
import Image from "next/image";
import Content from "./Content";
import Footer from "./Footer";
interface HeaderProps {
  header: MideBalonuHeaderType;
  content: MideBalonuContentType;
  footer: MideBalonuFooterType;
}
const Header = ({ header, content, footer }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>
       
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
                    <li>-{header.c5c3}</li>
                    <li>-{header.c5c4}</li>
                  </div>
                </div>
                <li>-{header.c6}</li>
              </ul>
            </CardContent>
          </Card>
          <div className="space-y-5">
            {header.d2}
            {header.d3}
          </div>

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
