import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { PegHeaderType, PegContentType } from "../../../../../../types";

const PegClient = () => {
  const translate = useTranslations("pegPage");

  const header: PegHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c4: translate("c4"),
  };

  const content: PegContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    h2: translate("h2"),
    h2d2: translate("h2d2"),
    h3: translate("h3"),
    h3d1: translate("h3d1"),
    h3d2: translate("h3d2"),
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

export default PegClient;
