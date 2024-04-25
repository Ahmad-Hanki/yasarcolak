import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Endoskopi from "./Endoskopi";
import { Separator } from "@/components/ui/separator";
import Obezite from "./Obezite";
import Hastalikar from "./Hastaliklar";
import Advanced from "./Advanced";
import Links from "./Links";
import EnTr from "./En-Tr";

const PhoneNav = () => {
  const navOne = useTranslations("navOne");

  const t1 = {
    title: navOne("title"),
    link1: navOne("link1"),
    link2: navOne("link2"),
    link3: navOne("link3"),
    link4: navOne("link4"),
  };

  const navTow = useTranslations("navTow");

  const t2 = {
    title: navTow("title"),
    link1: navTow("link1"),
    link2: navTow("link2"),
  };

  const navThree = useTranslations("navThree");

  const t3 = {
    title: navThree("title"),
    link1: {
      title: navThree("link1Title"),
      link1: navThree("link1Link1"),
      link2: navThree("link1Link2"),
      link3: navThree("link1Link3"),
      link4: navThree("link1Link4"),
      link5: navThree("link1Link5"),
    },
    link2: navThree("link2"),
    link3: navThree("link3"),
    link4: navThree("link4"),
    link5: navThree("link5"),
    link6: navThree("link6"),
    link7: navThree("link7"),
    link8: navThree("link8"),
    link9: navThree("link9"),
    link10: navThree("link10"),
  };

  const locale = useLocale();
  return (
    <div className="dropdown dropdown-end text-secondary-foreground bg-secondary z-20 xl:hidden ">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-transparent hover:bg-secondary-foreground/50 border-none shadow-lg"
      >
        <Menu size={25} className="bg-transparent text-secondary-foreground" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow rounded-box w-[80vw] max-w-[80vw] max-h-[50vh]"
      >
        <div className="w-[80vw] max-w-[80vw] max-h-[50vh] overflow-x-hidden overflow-y-auto space-y-2 bg-secondary py-3">
          <li>
            <Endoskopi t1={t1} />
          </li>
          <Separator />
          <li>
            <Obezite t2={t2} />
          </li>
          <Separator />
          {locale == "tr" && (
            <>
              <li>
                <Hastalikar />
              </li>
              <Separator />
            </>
          )}

          <li>
            <Advanced t3={t3} />
          </li>
          <Separator />
          <Links />
          <li>
            <EnTr />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default PhoneNav;
