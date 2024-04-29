import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
 KolonoskopiContentType,
 KolonoskopiFooterType,
 KolonoskopiHeaderType
} from "../../../../../../types";

const KolonoskopiClient = () => {
  const translate = useTranslations('kolonoskopiPage');

  const header:KolonoskopiHeaderType = {
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
    c6: translate('c6'),
    c7: translate('c7'),
  };

  const content:KolonoskopiContentType  = {
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    h1d2: translate('h1d2'),
    h1d3: translate('h1d3'),
    lih1: translate('lih1'),
    lid1: translate('lid1'),
    lih2: translate('lih2'),
    lid2: translate('lid2'),
    lih3: translate('lih3'),
    lid3: translate('lid3'),
    lih4: translate('lih4'),
    lid4: translate('lid4'),
    h1d4: translate('h1d4'),
    h1d5: translate('h1d5'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    h2d2: translate('h2d2'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h3d2: translate('h3d2'),
    h4: translate('h4'),
    h4d1: translate('h4d1'),
    h5: translate('h5'),
    h5d1: translate('h5d1'),
    h5d2: translate('h5d2'),
    h6: translate('h6'),
    h6d1: translate('h6d1'),
    h6d2: translate('h6d2'),
    h7: translate('h7'),
    h7d1: translate('h7d1'),
    h7d2: translate('h7d2'),
    h7d3: translate('h7d3'),
  };

  const footer: KolonoskopiFooterType = {
    h8: translate('h8'),
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
    q8: translate('q8'),
    a8: translate('a8'),
    q9: translate('q9'),
    a9: translate('a9'),
    q10: translate('q10'),
    a10: translate('a10'),
    q11: translate('q11'),
    a11: translate('a11'),
    q12: translate('q12'),
    a12: translate('a12'),
    q13: translate('q13'),
    a13: translate('a13'),
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

export default KolonoskopiClient;
