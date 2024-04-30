import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { PhMetreContentType, PhMetreHeaderType } from "../../../../../../types";

const PhMetreClient = () => {
  const translate = useTranslations("phMetre");

  const header: PhMetreHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c4: translate("c4"),
    c5: translate("c5"),
  };

  const content: PhMetreContentType = {
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    h1d2: translate('h1d2'),
    h1d3: translate('h1d3'),
    h1d4: translate('h1d4'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h3d2: translate('h3d2'),
    lih1: translate('lih1'),
    lid1: translate('lid1'),
    lih2: translate('lih2'),
    lid2: translate('lid2'),
    lih3: translate('lih3'),
    lid3: translate('lid3'),
    lih4: translate('lih4'),
    lid4: translate('lid4'),
    d2: translate('d2'),
    h4: translate('h4'),
    h4d1: translate('h4d1'),
    h4d2: translate('h4d2'),
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

export default PhMetreClient;
