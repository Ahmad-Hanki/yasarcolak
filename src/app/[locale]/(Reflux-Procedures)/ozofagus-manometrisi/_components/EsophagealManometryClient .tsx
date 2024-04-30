import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
  EsophagealManometryContentType,
  EsophagealManometryHeaderType,
} from "../../../../../../types";

const EsophagealManometryClient = () => {
  const translate = useTranslations("EsophagealManometry");

  const header: EsophagealManometryHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c4: translate("c4"),
    c5: translate("c5"),
  };

  const content: EsophagealManometryContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    h1d2: translate("h1d2"),
    lih1: translate("lih1"),
    lid1: translate("lid1"),
    lih2: translate("lih2"),
    lid2: translate("lid2"),
    lih3: translate("lih3"),
    lid3: translate("lid3"),
    d2: translate("d2"),
    h2: translate("h2"),
    h2d1: translate("h2d1"),
    h2d2: translate("h2d2"),
    lih4: translate("lih4"),
    lid4: translate("lid4"),
    lih5: translate("lih5"),
    lid5: translate("lid5"),
    lih6: translate("lih6"),
    lid6: translate("lid6"),
    lih7: translate("lih7"),
    lid7: translate("lid7"),
    lih8: translate("lih8"),
    lid8: translate("lid8"),
    lih9: translate("lih9"),
    lid9: translate("lid9"),
    d3: translate("d3"),
    h3: translate("h3"),
    h3h1: translate("h3h1"),
    h3d1: translate("h3d1"),
    h3h2: translate("h3h2"),
    h3d2: translate("h3d2"),
    h4: translate("h4"),
    h4d1: translate("h4d1"),
    h4d2: translate("h4d2"),
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

export default EsophagealManometryClient;
