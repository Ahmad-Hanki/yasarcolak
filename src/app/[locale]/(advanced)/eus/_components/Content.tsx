import { EusContentType } from "../../../../../../types";

const Content = ({ content }: { content: EusContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
        </div>
        <ul className="space-y-2">
          <li>- {content.li1}</li>
          <li>- {content.li2}</li>
          <li>- {content.li3}</li>
          <li>- {content.li4}</li>
          <li>- {content.li5}</li>
          <li>- {content.li6}</li>
          <li>- {content.li7}</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <div className="space-y-2">
          <p>{content.h2d1}</p>
          <p>{content.h2d2}</p>
          <p>{content.h2d2}</p>
          <p>{content.h2d3}</p>
        </div>
       
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <div className="space-y-2">
          <p>{content.h3d1}</p>
          <p>{content.h3d2}</p>
        </div>
        <ul className="space-y-2">
          <li>- {content.li8}</li>
          <li>- {content.li9}</li>
          <li>- {content.li10}</li>
          <li>- {content.li11}</li>
          <li>- {content.li12}</li>
          <li>- {content.li13}</li>
        </ul>
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
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h6}</h1>
        <div className="space-y-2">
          <p className="font-bold ">{content.h6d1}</p>
        </div>
        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.h6h1}</span> {content.h6h1d1}
          </li>
          <li>
            - <span className="font-bold">{content.h6h2}</span> {content.h6h2d2}
          </li>
        </ul>
        <div className="space-y-2">
          <p className="font-bold ">{content.d5}</p>
        </div>

        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.q1}</span> {content.a1}
          </li>
          <li>
            - <span className="font-bold">{content.q2}</span> {content.a2}
          </li>
          <li>
            - <span className="font-bold">{content.q3}</span> {content.a3}
          </li>
          <li>
            - <span className="font-bold">{content.q4}</span> {content.a4}
          </li>
        </ul>

        <p>{content.d6}</p>
      </div>
    </div>
  );
};

export default Content;
