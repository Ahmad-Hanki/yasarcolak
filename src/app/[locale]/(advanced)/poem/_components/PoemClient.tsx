import SideNav from "@/components/SideNav";
import { useTranslations } from "next-intl";
import Header from "./Header";
import {
  PoemHeaderType,
  PoemContentType
} from "../../../../../../types";

const PoemClient = () => {
  const translate = useTranslations('poemPage');

  const header:PoemHeaderType = {
    header: translate('header'),
  d1: translate('d1'),
  content: translate('content'),
  c1: translate('c1'),
  c2: translate('c2'),
  c2c1: translate('c2c1'),
  c3: translate('c3'),
  c3c1: translate('c3c1'),
  c4: translate('c4'),
  };

  const content:PoemContentType  = {
    h1: translate('h1'),
  h1d1: translate('h1d1'),
  h2: translate('h2'),
  h2d1: translate('h2d1'),
  h2d2: translate('h2d2'),
  h3: translate('h3'),
  h3d1: translate('h3d1'),
  h4: translate('h4'),
  h4d1: translate('h4d1'),
  h4d2: translate('h4d2'),
  h4d3: translate('h4d3'),
  h4d4: translate('h4d4'),
  h4d5: translate('h4d5'),
  h4d6: translate('h4d6'),
  h5: translate('h5'),
  h5d1: translate('h5d1'),
};


  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 lg:w-4/6">
        <Header header={header} content={content}/>
      </div>
      <SideNav />
    </div>
  );
};

export default PoemClient;
