import Image from "next/image";
import { EndoskopikMideKucultmeContentType } from "../../../../../types";
import Footer from "./Footer";

const Content = ({ content }: { content: EndoskopikMideKucultmeContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
          <p>{content.h1d3}</p>
          <p>{content.h1d4}</p>
        </div>
        <div className="py-3 space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <p>{content.h2d1}</p>
        <ul className="space-y-3 py-2">
          <li>
            1. <span className="font-bold">{content.lih1}</span> {content.lid1}
          </li>
          <li>
            2. <span className="font-bold">{content.lih2}</span> {content.lid2}
          </li>
          <li>
            3. <span className="font-bold">{content.lih3}</span> {content.lid3}
          </li>
          <li>
            4. <span className="font-bold">{content.lih4}</span> {content.lid4}
          </li>
          <li>
            5. <span className="font-bold">{content.lih5}</span> {content.lid5}
          </li>
          <li>
            6. <span className="font-bold">{content.lih6}</span> {content.lid6}
          </li>
          <li>
            7. <span className="font-bold">{content.lih7}</span> {content.lid7}
          </li>
        </ul>
        </div>
        
        <p>{content.d3}</p>
       
      </div>
    </div>
  );
};

export default Content;
