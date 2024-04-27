import SideNav from "@/components/SideNav"
import GastroskopiContent from "./GastroskopiContent"
import { useTranslations } from "next-intl"
import { GastroskopiPageType } from "../../../../../types";
const GastroskopiClient = () => {

  const translate = useTranslations('gastroskopiPage');

const gastroskopiPage:GastroskopiPageType = {
    header: translate('header'),
    d1: translate('d1'),
    d2: translate('d2'),
    content: translate('content'),
    c1: translate('c1'),
    c2: translate('c2'),
    c3: translate('c3'),
    c3c1: translate('c3c1'),
    c3c2: translate('c3c2'),
    c4: translate('c4'),
    d4: translate('d4'),
    h1: translate('h1'),
    h1d1: translate('h1d1'),
    h1d2: translate('h1d2'),
    li11: translate('li11'),
    li12: translate('li12'),
    li13: translate('li13'),
    li14: translate('li14'),
    li15: translate('li15'),
    li16: translate('li16'),
    li17: translate('li17'),
    li18: translate('li18'),
    li19: translate('li19'),
    d5: translate('d5'),
    l21: translate('l21'),
    l22: translate('l22'),
    l23: translate('l23'),
    l24: translate('l24'),
    l25: translate('l25'),
    l26: translate('l26'),
    l27: translate('l27'),
    l28: translate('l28'),
    h2: translate('h2'),
    h2d1: translate('h2d1'),
    h2d2: translate('h2d2'),
    h2d3: translate('h2d3'),
    h2d4: translate('h2d4'),
    h3: translate('h3'),
    h3d1: translate('h3d1'),
    h3d2: translate('h3d2'),
    h4: translate('h4'),
    h4d1: translate('h4d1'),
    h4d2: translate('h4d2'),
    h5: translate('h5'),
    h5c1: translate('h5c1'),
    h5d1: translate('h5d1'),
    h5c2: translate('h5c2'),
    h5d21: translate('h5d21'),
    h5d22: translate('h5d22'),
    h5c3: translate('h5c3'),
    h5d3: translate('h5d3'),
    h5c4: translate('h5c4'),
    h5d4: translate('h5d4'),
    h5c5: translate('h5c5'),
    h5d5: translate('h5d5'),
    h5c6: translate('h5c6'),
    h5d6: translate('h5d6'),
    h5c7: translate('h5c7'),
    h5d7: translate('h5d7'),
    h5c8: translate('h5c8'),
    h5d8: translate('h5d8'),
    h5c9: translate('h5c9'),
    h5d9: translate('h5d9'),
    h5c10: translate('h5c10'),
    h5d10: translate('h5d10'),
    h5c11: translate('h5c11'),
    h5d11: translate('h5d11'),
};



  return (
    <div className="flex flex-col lg:flex-row ">
        <div className="flex-1 lg:w-4/6">
            <GastroskopiContent data = {gastroskopiPage}/>
        </div>
        <SideNav />
    </div>
  )
}

export default GastroskopiClient