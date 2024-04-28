import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
  EndoskopikMideKucultmeContentType,
  EndoskopikMideKucultmeFooterType,
  EndoskopikMideKucultmeHeaderType,
} from "../../../../../types";

const EndoskopikMideKucultmeiClient = () => {
  const translate = useTranslations("endoskopik-mide-kucultmePage");

  const header: EndoskopikMideKucultmeHeaderType = {
    header: translate("header"),
    d1: translate("d1"),
    content: translate("content"),
    c1: translate("c1"),
    c2: translate("c2"),
    c3: translate("c3"),
    c4: translate("c4"),
    d2: translate("d2"),
  };

  const content: EndoskopikMideKucultmeContentType = {
    h1: translate("h1"),
    h1d1: translate("h1d1"),
    h1d2: translate("h1d2"),
    h1d3: translate("h1d3"),
    h1d4: translate("h1d4"),
    h2: translate("h2"),
    h2d1: translate("h2d1"),
    lih1: translate("lih1"),
    lid1: translate("lid1"),
    lih2: translate("lih2"),
    lid2: translate("lid2"),
    lih3: translate("lih3"),
    lid3: translate("lid3"),
    lih4: translate("lih4"),
    lid4: translate("lid4"),
    lih5: translate("lih5"),
    lid5: translate("lid5"),
    lih6: translate("lih6"),
    lid6: translate("lid6"),
    lih7: translate("lih7"),
    lid7: translate("lid7"),
    d3: translate("d3"),
  };

  const footer: EndoskopikMideKucultmeFooterType = {
    h3: translate("h3"),
    q1: translate("q1"),
    a1: translate("a1"),
    q2: translate("q2"),
    a2: translate("a2"),
    q3: translate("q3"),
    a3: translate("a3"),
    q4: translate("q4"),
    a4: translate("a4"),
    q5: translate("q5"),
    a5: translate("a5"),
    q6: translate("q6"),
    a6: translate("a6"),
    q7: translate("q7"),
    a7: translate("a7"),
    q8: translate("q8"),
    a8: translate("a8"),
    q9: translate("q9"),
    a9: translate("a9"),
    q10: translate("q10"),
    a101: translate("a101"),
    a102: translate("a102"),
    a103: translate("a103"),
    a104: translate("a104"),
    a105: translate("a105"),
    q11: translate("q11"),
    a11: translate("a11"),
    q12: translate("q12"),
    a12: translate("a12"),
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

export default EndoskopikMideKucultmeiClient;
