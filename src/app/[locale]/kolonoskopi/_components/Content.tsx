import Image from "next/image";
import { KolonoskopiContentType } from "../../../../../types";
import img from "../_assets/img.webp";

const Content = ({ content }: { content: KolonoskopiContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
        </div>
        <p>{content.h1d3}</p>
        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.lih1}</span> {content.lid1}
          </li>
          <li>
            - <span className="font-bold">{content.lih2}</span> {content.lid2}
          </li>
          <li>
            - <span className="font-bold">{content.lih3}</span> {content.lid3}
          </li>
          <li>
            - <span className="font-bold">{content.lih4}</span> {content.lid4}
          </li>
        </ul>
        <p>{content.h1d4}</p>
        <p>{content.h1d5}</p>

        {/* <ul className="space-y-2">
          <li>- {content.l21}</li>
          <li>- {content.l22}</li>
          <li>- {content.l23}</li>
          <li>- {content.l24}</li>
          <li>- {content.l25}</li>
          <li>- {content.l26}</li>
          <li>- {content.l27}</li>
          <li>- {content.l28}</li>
        </ul> */}
        <div className="relative overflow-hidden aspect-[1/0.7] rounded-md w-full lg:w-[80%] ">
          <Image
            src={img}
            fill
            className="object-center object-cover "
            alt=""
          />
        </div>
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
          <p>{content.h3d2}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h4}</h1>
        <div className="space-y-2">
          <p>{content.h4d1}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h5}</h1>
        <div className="space-y-2">
          <p>{content.h5d1}</p>
          <p>{content.h5d2}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h6}</h1>
        <div className="space-y-2">
          <p>{content.h6d1}</p>
          <p>{content.h6d2}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h7}</h1>
        <div className="space-y-2">
          <p>{content.h7d1}</p>
          <p>{content.h7d2}</p>
          <p>{content.h7d3}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
