import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
  EndoskopikStentUygulamalariHeaderType,
  EndoskopikStentUygulamalariContentType,
} from "../../../../../../types";

const EndoskopikStentUygulamalariClient = () => {
  const translate = useTranslations("endoskopikStentUygulamalariPage");

  const header: EndoskopikStentUygulamalariHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c4: translate("c4"),
  };

  const content: EndoskopikStentUygulamalariContentType = {
    h1: translate("h1"),
    d2: translate("d2"),
    q1: translate("q1"),
    a1: translate("a1"),
    q2: translate("q2"),
    a2: translate("a2"),
    q3: translate("q3"),
    a3: translate("a3"),
    h2: translate("h2"),
    h2d1: translate("h2d1"),
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

export default EndoskopikStentUygulamalariClient;
