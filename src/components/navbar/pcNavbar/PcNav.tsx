import { cn } from "@/lib/utils";
import Links from "./Links";
import Endoskopi from "./Endoskopi";
import Obezite from "./Obezite";
import { useTranslations } from "next-intl";
import Advanced from "./Advanced";
import Hastaliklar from "./Hastaliklar";
import EnTr from "@/components/navbar/pcNavbar/En-Tr";

const PcNavbar = () => {
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

  return (
    <div className="z-20">
      <div
        role="tablist"
        className={cn(
          "tabs-bordered text-secondary-foreground mx-auto z-20 transition-colors hidden xl:tabs"
        )}
      >
        <Endoskopi t1={t1} />
        <Obezite t2={t2} />
        <Advanced t3={t3} />
        <Hastaliklar />
        <Links />
        <EnTr />
      </div>
    </div>
  );
};

export default PcNavbar;
