import Image from "next/image";
import { MideBalonuContentType } from "../../../../../types";
import img from "../_assets/img1.webp";
import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Content = ({ content }: { content: MideBalonuContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
        </div>
        <div className="space-y-10 py-4">
          <h1>{content.ad}</h1>
          <div className="space-y-3">
            <li>- {content.ad1}</li>
            <li>- {content.ad2}</li>
            <li>- {content.ad3}</li>
            <li>- {content.ad4}</li>
            <li>- {content.ad5}</li>
            <li>- {content.ad6}</li>
            <li>- {content.ad7}</li>
          </div>
          <h1>{content.di}</h1>
          <div className="space-y-3">
            <li>- {content.di1}</li>
            <li>- {content.di2}</li>
            <li>- {content.di3}</li>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>
        </div>
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
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <div className="space-y-2">
          <p>{content.h3d1}</p>
        </div>
      </div>

      <div>
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>{content.hilight}</AlertDescription>
        </Alert>
      </div>
      <div>{content.d4}</div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h4}</h1>
        <iframe
          src="https://www.youtube.com/embed/aZlyURYCFM8"
          className="lg:w-[80%]"
          height={400}
        ></iframe>
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
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h7}</h1>
        <div className="space-y-2">
          <p>{content.h7d1}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h8}</h1>
        <div className="space-y-2">
          <p>{content.h8d1}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
