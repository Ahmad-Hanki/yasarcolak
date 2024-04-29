import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import { EusHeaderType, EusContentType } from "../../../../../../types";

const EusClient = () => {
  const translate = useTranslations('eusPage');

  const header: EusHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c3c1: translate("c3c1"),
    c3c2: translate("c3c2"),
    c3c3: translate("c3c3"),
    c4: translate("c4"),
    d2: translate("d2"),
    d3: translate("d3"),
    d4: translate("d4"),
  };

  const content: EusContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    li1: translate("li1"),
    li2: translate("li2"),
    li3: translate("li3"),
    li4: translate("li4"),
    li5: translate("li5"),
    li6: translate("li6"),
    li7: translate("li7"),

    h2: translate("h2"),
    h2d1: translate("h2d1"),
    h2d2: translate("h2d2"),
    h2d3: translate("h2d3"),
    h3: translate("h3"),
    h3d1: translate("h3d1"),
    h3d2: translate("h3d2"),
    li8: translate("li8"),
    li9: translate("li9"),
    li10: translate("li10"),
    li11: translate("li11"),
    li12: translate("li12"),
    li13: translate("li13"),

    h4: translate("h4"),
    h4d1: translate("h4d1"),
    h4d2: translate("h4d2"),
    h5: translate("h5"),
    h5d1: translate("h5d1"),
    h6: translate("h6"),
    h6d1: translate("h6d1"),
    h6h1: translate("h6h1"),
    h6h1d1: translate("h6h1d1"),
    h6h2: translate("h6h2"),
    h6h2d2: translate("h6h2d2"),
    d5: translate("d5"),
    q1: translate("q1"),
    a1: translate("a1"),
    q2: translate("q2"),
    a2: translate("a2"),
    q3: translate("q3"),
    a3: translate("a3"),
    q4: translate("q4"),
    a4: translate("a4"),
    d6: translate("d6"),
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

export default EusClient;
