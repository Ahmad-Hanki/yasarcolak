import { EndoskopikStentUygulamalariContentType } from "../../../../../../types";

const Content = ({
  content,
}: {
  content: EndoskopikStentUygulamalariContentType;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div className="space-y-2">
          <p>{content.d2}</p>
        </div>
        <ul className="space-y-3">
          <li>
            1. <span className="font-bold">{content.q1}</span> {content.a1}
          </li>
          <li>
            2. <span className="font-bold">{content.q2}</span> {content.a2}
          </li>
          <li>
            3. <span className="font-bold">{content.q3}</span> {content.a3}
          </li>
        </ul>
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
    </div>
  );
};

export default Content;
