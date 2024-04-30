import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
  EmrContentType,
  EmrFooterType,
  EmrHeaderType,
} from "../../../../../../types";

const EmrClient = () => {
  const translate = useTranslations("endoskopik-mide-kucultmePage");

  const header: EmrHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    d2: translate("d2"),
  };

  const content: EmrContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    h1d2: translate("h1d2"),
    h1d3: translate("h1d3"),
    h1d4: translate("h1d4"),
  };

  const footer: EmrFooterType = {
    q1: translate("q1"),
    a1: translate("a1"),
    q2: translate("q2"),
    a2: translate("a2"),
    q3: translate("q3"),
    a3: translate("a3"),
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

export default EmrClient;
