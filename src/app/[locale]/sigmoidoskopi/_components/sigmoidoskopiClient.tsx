import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
SigmoidoskopiContentType,
SigmoidoskopiHeaderType
} from "../../../../../types";

const SigmoidoskopiClient = () => {
  const translate = useTranslations('sigmoidoskopiPage');

  const header:SigmoidoskopiHeaderType = {
    header: translate('header'),
    d1: translate('d1'),
    content: translate('content'),
    c1: translate('c1'),
    c2: translate('c2'),
    c3: translate('c3'),
    c3c1: translate('c3c1'),
    c3c2: translate('c3c2'),
    c3c3: translate('c3c3'),
    c4: translate('c4'),
    d2: translate('d2'),
    d3: translate('d3'),
  };

  const content:SigmoidoskopiContentType  = {
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    h1d2: translate('h1d2'),
    h1d3: translate('h1d3'),
    lih1: translate('lih1'),
    lid1: translate('lid1'),
    lih2: translate('lih2'),
    lid2: translate('lid2'),
    d4: translate('d4'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    h2d2: translate('h2d2'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h4: translate('h4'),
    h4d1: translate('h4d1'),
    h4d2: translate('h4d2'),
    h4d3: translate('h4d3'),
    li1: translate('li1'),
    li2: translate('li2'),
    li3: translate('li3'),
    d5: translate('d5'),
    h5: translate('h5'),
    h5d1: translate('h5d1'),
    h6: translate('h6'),
    h6d1: translate('h6d1'),
    h6d2: translate('h6d2')
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

export default SigmoidoskopiClient;
