import { EndoscopicFundoplicationContentType } from "../../../../../../types";

const Content = ({
  content,
}: {
  content: EndoscopicFundoplicationContentType;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
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
          <p>{content.h3d3}</p>
          <p className="font-bold py-4">{content.q1}</p>
          <p>{content.a1}</p>
          <p className="font-bold py-4">{content.q2}</p>
          <p>{content.q2a1}</p>
        </div>
        <p>{content.d3}</p>
      </div>
    </div>
  );
};

export default Content;
