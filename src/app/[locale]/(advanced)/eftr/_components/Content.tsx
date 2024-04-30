import { EftrContentType } from "../../../../../../types";

const Content = ({ content }: { content: EftrContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-2">
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
          <p>{content.h1d3}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>
          <p>{content.h2d2}</p>
        </div>
        <p className="py-4 font-bold" >{content.h2d3}</p>
        <ul className="space-y-2">
          <li>- {content.li1}</li>
          <li>- {content.li2}</li>
          <li>- {content.li3}</li>
        </ul>
        <p>{content.d3}</p>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <div className="space-y-2">
          <p>{content.h3d1}</p>
          <p>{content.h3d2}</p>
          <p>{content.h3d3}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h4}</h1>
        <div className="space-y-2">
          <p>{content.h4d1}</p>
          <p className="py-4 font-bold">{content.h4d2}</p>
          <ul className="space-y-2">
            <li>- {content.li4}</li>
            <li>- {content.li5}</li>
            <li>- {content.li6}</li>
            <li>- {content.li7}</li>
            <li>- {content.li8}</li>
          </ul>
        </div>
        <p>{content.d4}</p>
      </div>
    </div>
  );
};

export default Content;
