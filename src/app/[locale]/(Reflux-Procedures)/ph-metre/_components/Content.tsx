import { PhMetreContentType } from "../../../../../../types";

const Content = ({ content }: { content: PhMetreContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-2">
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
          <p>{content.h1d3}</p>
          <p>{content.h1d4}</p>
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
          <p>{content.h3d2}</p>
        </div>
        <ul className="space-y-3">
          <li>
            1- <span className="font-bold">{content.lih1}</span> {content.lid1}
          </li>
          <li>
            2- <span className="font-bold">{content.lih2}</span> {content.lid2}
          </li>
          <li>
            3- <span className="font-bold">{content.lih3}</span> {content.lid3}
          </li>
          <li>
            4- <span className="font-bold">{content.lih4}</span> {content.lid4}
          </li>
        </ul>
        <p>{content.d2}</p>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h4}</h1>
        <div className="space-y-2">
          <p>{content.h4d1}</p>
          <p>{content.h4d2}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
