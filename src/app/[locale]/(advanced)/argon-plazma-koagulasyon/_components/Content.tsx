import { ArgonPlazmaKoagulasyonContentType } from "../../../../../../types";

const Content = ({
  content,
}: {
  content: ArgonPlazmaKoagulasyonContentType;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
        </div>

        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.lih1}</span> {content.lid1}
          </li>
          <li>
            - <span className="font-bold">{content.lih2}</span> {content.lid2}
          </li>
          <li>
            - <span className="font-bold">{content.lih3}</span> {content.lid3}
          </li>
          <li>
            - <span className="font-bold">{content.lih4}</span> {content.lid4}
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h2}</h1>
        <ul className="space-y-2">
          <li>- {content.li1}</li>
          <li>- {content.li2}</li>
          <li>- {content.li3}</li>
          <li>- {content.li4}</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h3}</h1>
        <ul className="space-y-2">
          <li>- {content.li5}</li>
          <li>- {content.li6}</li>
          <li>- {content.li7}</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h4}</h1>
        <div className="space-y-2">
          <p>{content.h4d1}</p>
          <p>{content.h4d2}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h5}</h1>
        <div className="space-y-2">
          <p>{content.h5d1}</p>
        </div>
        <ul className="space-y-3">
          <li>
            - <span className="font-bold">{content.lih5}</span> {content.lid5}
          </li>
          <li>
            - <span className="font-bold">{content.lih6}</span> {content.lid6}
          </li>
          <li>
            - <span className="font-bold">{content.lih7}</span> {content.lid7}
          </li>
          <li>
            - <span className="font-bold">{content.lih8}</span> {content.lid8}
          </li>
          <li>
            - <span className="font-bold">{content.lih9}</span> {content.lid9}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
