import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
  KapsulEndoskopiContentType,
  KapsulEndoskopiHeaderType
} from "../../../../../types";

const KapsulEndoskopi = () => {
  const translate = useTranslations('kapsul-endoskopi');

  const header:KapsulEndoskopiHeaderType = {
    header: translate('header'),
    d1: translate('d1'),
    content: translate('content'),
    c1: translate('c1'),
    c2: translate('c2'),
    c3: translate('c3'),
    c4: translate('c4'),
    d2: translate('d2'),
    d3: translate('d3'),
    d4: translate('d4'),
  };

  const content:KapsulEndoskopiContentType  = {
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    li1: translate('li1'),
    li2: translate('li2'),
    li3: translate('li3'),
    li4: translate('li4'),
    li5: translate('li5'),
    li6: translate('li6'),
    li7: translate('li7'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    h2d2: translate('h2d2'),
    h2d3: translate('h2d3'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h3d2: translate('h3d2'),
    h3d3: translate('h3d3'),
    h3d4: translate('h3d4'),
    h3d5: translate('h3d5'),
    h3d6: translate('h3d6'),
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 lg:w-4/6">
        <Header header={header} content={content}/>
      </div>
      <SideNav />
    </div>
  );
};

export default KapsulEndoskopi;
