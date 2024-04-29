import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  EndoskopikMideKucultmeContentType,
  EndoskopikMideKucultmeFooterType,
  EndoskopikMideKucultmeHeaderType,
} from "../../../../../../types";
import Content from "./Content";
import Footer from "./Footer";
interface HeaderProps {
  header: EndoskopikMideKucultmeHeaderType;
  content: EndoskopikMideKucultmeContentType;
  footer: EndoskopikMideKucultmeFooterType;
}
const Header = ({ header, content, footer }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-primary/80 ">{header.header}</h1>
        <iframe
          src="https://www.youtube.com/embed/2_E5ktSVZW8"
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
              </ul>
            </CardContent>
          </Card>
          <p>{header.d2}</p>
          <div className="pt-3">
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
