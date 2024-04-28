import { GastroskopiContentType } from "../../../../../types";

const Content = ({ content }: { content: GastroskopiContentType }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-4">
        <h1 className="font-bold text-3xl">{content.h1}</h1>
        <div>
          <p>{content.h1d1}</p>
          <p>{content.h1d2}</p>
        </div>
        <ul className="space-y-2">
          <li>- {content.li11}</li>
          <li>- {content.li12}</li>
          <li>- {content.li13}</li>
          <li>- {content.li14}</li>
          <li>- {content.li15}</li>
          <li>- {content.li16}</li>
          <li>- {content.li17}</li>
          <li>- {content.li18}</li>
          <li>- {content.li19}</li>
        </ul>
        <p>{content.d5}</p>

        <ul className="space-y-2">
          <li>- {content.l21}</li>
          <li>- {content.l22}</li>
          <li>- {content.l23}</li>
          <li>- {content.l24}</li>
          <li>- {content.l25}</li>
          <li>- {content.l26}</li>
          <li>- {content.l27}</li>
          <li>- {content.l28}</li>
        </ul>
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
          <p>{content.h4d2}</p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/OYjQoVVczXQ"
          className="lg:w-[80%]"
          height={400}
        ></iframe>
      </div>
    </div>
  );
};

export default Content;
