import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { EsdContentType,EsdHeaderType  } from "../../../../../../types";

const EsdClient = () => {
  const translate = useTranslations('esdPage');

  const header: EsdHeaderType = {
    header: translate('header'),
    d1: translate('d1'),
    content: translate('content'),
    c1: translate('c1'),
    c2: translate('c2'),
    c3: translate('c3'),
    c4: translate('c4'),
    c5: translate('c5'),
    d2: translate('d2'),
  };

  const content: EsdContentType = {
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h4: translate('h4'),
    h4d1: translate('h4d1'),
    h4d2: translate('h4d2'),
    h4d3: translate('h4d3'),
    h4d4: translate('h4d4'),
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 lg:w-4/6">
        <Header header={header} content={content} />
      </div>
      <SideNav />
    </div>
  );
};

export default EsdClient;
