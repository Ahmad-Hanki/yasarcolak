import Image from "next/image";
import { KapsulEndoskopiContentType } from "../../../../../../types";
import im2 from "../_assets/img2.webp";

const Content = ({ content }: { content: KapsulEndoskopiContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-2">
          <p>{content.h1d1}</p>
        </div>

        <ul className="space-y-3">
          <li>
            -  {content.li1}
          </li>
          <li>
            -  {content.li2}
          </li>
          <li>
            -  {content.li3}
          </li>
          <li>
            -  {content.li4}
          </li>
          <li>
            -  {content.li5}
          </li>
          <li>
            -  {content.li6}
          </li>
          <li>
            -  {content.li7}
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>
          <p>{content.h2d2}</p>
          <p>{content.h2d3}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <div className="space-y-2">
          <p>{content.h3d1}</p>
          <p>{content.h3d2}</p>
          <p>{content.h3d3}</p>
          <p>{content.h3d4}</p>
          <p>{content.h3d5}</p>
          <p>{content.h3d6}</p>
        </div>
      </div>

      

      

    
    </div>
  );
};

export default Content;
