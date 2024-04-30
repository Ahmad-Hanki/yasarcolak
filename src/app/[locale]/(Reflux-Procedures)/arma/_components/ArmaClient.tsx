import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { ArmaContentType, ArmaHeaderType } from "../../../../../../types";

const ArmaClient = () => {
  const translate = useTranslations("armaPage");

  const header: ArmaHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c4: translate("c4"),
    d2: translate("d2"),
  };

  const content: ArmaContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    h2: translate("h2"),
    h2d1: translate("h2d1"),
    h2d2: translate("h2d2"),
    h2d3: translate("h2d3"),
    h2d4: translate("h2d4"),
    h3: translate("h3"),
    liq1: translate("liq1"),
    liqd1: translate("liqd1"),
    liq2: translate("liq2"),
    liqd2: translate("liqd2"),
    liq3: translate("liq3"),
    liqd3: translate("liqd3"),
    liq4: translate("liq4"),
    liqd4: translate("liqd4"),
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

export default ArmaClient;
