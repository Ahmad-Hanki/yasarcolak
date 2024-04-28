import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
 MideBalonuContentType,
 MideBalonuFooterType,
 MideBalonuHeaderType
} from "../../../../../types";

const MideBalonuClient = () => {
  const translate = useTranslations('mide-balonuPage');

  const header:MideBalonuHeaderType = {
    header: translate('header'),
    d1: translate('d1'),
    content: translate('content'),
    c1: translate('c1'),
    c2: translate('c2'),
    c3: translate('c3'),
    c4: translate('c4'),
    c5: translate('c5'),
    c5c1: translate('c5c1'),
    c5c2: translate('c5c2'),
    c5c3: translate('c5c3'),
    c5c4: translate('c5c4'),
    c6: translate('c6'),
    d2: translate('d2'),
    d3: translate('d3'),
  };

  const content:MideBalonuContentType  = {
  h1: translate('h1'),
  h1d1: translate('h1d1'),
  ad: translate('ad'),
  ad1: translate('ad1'),
  ad2: translate('ad2'),
  ad3: translate('ad3'),
  ad4: translate('ad4'),
  ad5: translate('ad5'),
  ad6: translate('ad6'),
  ad7: translate('ad7'),
  di: translate('di'),
  di1: translate('di1'),
  di2: translate('di2'),
  di3: translate('di3'),
  h2: translate('h2'),
  h2d1: translate('h2d1'),
  h3: translate('h3'),
  h3d1: translate('h3d1'),
  hilight: translate('hilight'),
  d4: translate('d4'),
  h4: translate('h4'),
  h5: translate('h5'),
  h5d1: translate('h5d1'),
  h6: translate('h6'),
  h6d1: translate('h6d1'),
  h7: translate('h7'),
  h7d1: translate('h7d1'),
  h8: translate('h8'),
  h8d1: translate('h8d1'),
  };

  const footer: MideBalonuFooterType = {
    h9: translate('h9'),
  q1: translate('q1'),
  a1: translate('a1'),
  q2: translate('q2'),
  a2: translate('a2'),
  q3: translate('q3'),
  a3: translate('a3'),
  q4: translate('q4'),
  a4: translate('a4'),
  q5: translate('q5'),
  a5: translate('a5'),
  q6: translate('q6'),
  a6: translate('a6'),
  q7: translate('q7'),
  a7: translate('a7'),
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 lg:w-4/6">
        <Header header={header} content={content} footer={footer} />
      </div>
      <SideNav />
    </div>
  );
};

export default MideBalonuClient;
