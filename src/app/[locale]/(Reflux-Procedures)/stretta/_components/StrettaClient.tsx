import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { StrettaContentType, StrettaHeaderType } from "../../../../../../types";

const StarettaClient = () => {
  const translate = useTranslations("strettaPage");

  const header: StrettaHeaderType = {
    header: translate('header'),
    d1: translate('d1'),
    content: translate('content'),
    c1: translate('c1'),
    c2: translate('c2'),
    c3: translate('c3'),
    c4: translate('c4'),
    c5: translate('c5'),
    d2: translate('d2'),
    d3: translate('d3')
  };

  const content: StrettaContentType = {
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    h1d2: translate('h1d2'),
    h1d3: translate('h1d3'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    d4: translate('d4'),
    li1: translate('li1'),
    li2: translate('li2'),
    li3: translate('li3'),
    li4: translate('li4'),
    li5: translate('li5'),
    d5: translate('d5'),
    li6: translate('li6'),
    li7: translate('li7'),
    li8: translate('li8'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h3d2: translate('h3d2'),
    h4: translate('h4'),
    h4d1: translate('h4d1'),
    h4d2: translate('h4d2'),
    h4d3: translate('h4d3'),
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

export default StarettaClient;
