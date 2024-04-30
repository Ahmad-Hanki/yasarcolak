import { EmrContentType } from "../../../../../../types";

const Content = ({ content }: { content: EmrContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-5">
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
          <p>{content.h1d3}</p>
          <p>{content.h1d4}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
