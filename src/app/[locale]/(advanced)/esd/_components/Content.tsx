import { EsdContentType } from "../../../../../../types";

const Content = ({ content }: { content: EsdContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-2">
          <p>{content.h1d1}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>
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
          <p className="py-4 font-bold">{content.h4d2}</p>
          <p>{content.h4d3}</p>
          <p>{content.h4d4}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
