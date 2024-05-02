import { ArmaContentType } from "../../../../../../types";

const Content = ({ content }: { content: ArmaContentType }) => {
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
          <p>{content.h2d3}</p>
          <p>{content.h2d4}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.liq1}</span> {content.liqd1}
          </li>
          <li>
            - <span className="font-bold">{content.liq2}</span> {content.liqd2}
          </li>
          <li>
            - <span className="font-bold">{content.liq3}</span> {content.liqd3}
          </li>
          <li>
            - <span className="font-bold">{content.liq4}</span> {content.liqd4}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
