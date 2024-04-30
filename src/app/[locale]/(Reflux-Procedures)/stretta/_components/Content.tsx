import { StrettaContentType } from "../../../../../../types";

const Content = ({ content }: { content: StrettaContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
          <p>{content.h1d3}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>

          <p className="py-4 font-bold">{content.d4}</p>
          <li>{content.li1}</li>
          <li>{content.li2}</li>
          <li>{content.li3}</li>
          <li>{content.li4}</li>
          <p>{content.li5}</p>
          <p className="py-4 font-bold">{content.d5}</p>
          <li>{content.li6}</li>
          <li>{content.li7}</li>
          <li>{content.li8}</li>
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
          <p>{content.h4d2}</p>
          <p>{content.h4d3}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
