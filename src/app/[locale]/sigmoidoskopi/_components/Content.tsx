import Image from "next/image";
import { SigmoidoskopiContentType } from "../../../../../types";
import im2 from "../_assets/img2.webp";

const Content = ({ content }: { content: SigmoidoskopiContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-2">
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
        </div>
        <div className="relative overflow-hidden aspect-[1/0.7] rounded-md w-full lg:w-[80%] ">
          <Image
            src={im2}
            fill
            className="object-center object-cover "
            alt=""
          />
        </div>
        <p>{content.h1d3}</p>
        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.lih1}</span> {content.lid1}
          </li>
          <li>
            - <span className="font-bold">{content.lih2}</span> {content.lid2}
          </li>
        </ul>
        <p>{content.d4}</p>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>
          <p>{content.h2d2}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <div className="space-y-2">
          <p>{content.h3d1}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h4}</h1>
        <div className="space-y-2">
          <p>{content.h4d1}</p>
          <p>{content.h4d2}</p>
          <p>{content.h4d3}</p>
          <ul className="space-y-2">
            <li>- {content.li1}</li>
            <li>- {content.li2}</li>
            <li>- {content.li3}</li>
          </ul>
          <p>{content.d5}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h5}</h1>
        <div className="space-y-2">
          <p>{content.h5d1}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h6}</h1>
        <div className="space-y-2">
          <p>{content.h6d1}</p>
          <p>{content.h6d2}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
