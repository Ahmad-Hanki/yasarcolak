import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { ErcpHeaderType, ErcpContentType } from "../../../../../../types";

const ErcpClient = () => {
  const translate = useTranslations("ercpPage");

  const header: ErcpHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c3c1: translate("c3c1"),
    c3c2: translate("c3c2"),
    c3c3: translate("c3c3"),
    c3c4: translate("c3c4"),
    c3c5: translate("c3c5"),
  };

  const content: ErcpContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    h1d2: translate("h1d2"),
    h2: translate("h2"),
    h2d1: translate("h2d1"),
    h2d2: translate("h2d2"),
    h3: translate("h3"),
    h3d1: translate("h3d1"),
    h4: translate("h4"),
    h4d1: translate("h4d1"),
    h4d2: translate("h4d2"),
    h5: translate("h5"),
    h5d1: translate("h5d1"),
    h6: translate("h6"),
    h6d1: translate("h6d1"),
    h7: translate("h7"),
    h7d1: translate("h7d1"),
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

export default ErcpClient;
