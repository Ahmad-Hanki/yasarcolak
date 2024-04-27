import { useTranslations } from "next-intl";
import NavCard from "./NavCard";

const SideNav = () => {
  const navOne = useTranslations("navOne");
  const navTow = useTranslations("navTow");
  const navThree = useTranslations("navThree");

  const navItems = [];

  // NavOne
  navItems.push({ title: navOne("title"), href: "#" });
  navItems.push({ title: navOne("link1"), href: "/gastroskopi" });
  navItems.push({ title: navOne("link2"), href: "/kolonoskopi" });
  navItems.push({ title: navOne("link3"), href: "/sigmoidoskopi" });
  navItems.push({ title: navOne("link4"), href: "/kapsul-endoskopi" });

  // NavTwo
  navItems.push({ title: navTow("title"), href: "#" });
  navItems.push({ title: navTow("link1"), href: "/endoskopik-mide-kucultme" });
  navItems.push({ title: navTow("link2"), href: "/mide-balonu" });

  // NavThree
  navItems.push({ title: navThree("title"), href: "#" });
  navItems.push({ title: navThree("link2"), href: "/poem" });
  navItems.push({ title: navThree("link3"), href: "/ercp" });
  navItems.push({ title: navThree("link4"), href: "/eus" });
  navItems.push({ title: navThree("link5"), href: "/emr" });
  navItems.push({ title: navThree("link6"), href: "/esd" });
  navItems.push({ title: navThree("link7"), href: "/eftr" });
  navItems.push({ title: navThree("link8"), href: "/endoskopik-stent-uygulamalari" });
  navItems.push({ title: navThree("link9"), href: "/peg" });
  navItems.push({ title: navThree("link10"), href: "/argon-plazma-koagulasyon" });

  //nav three link 1
  navItems.push({ title: navThree("link1Title"), href: "#" }); // Title for link1
  navItems.push({ title: navThree("link1Link1"), href: "/arma" }); // Child link1
  navItems.push({ title: navThree("link1Link2"), href: "/endoskopik-fundoplikasyon" }); // Child link2
  navItems.push({ title: navThree("link1Link3"), href: "/stretta" }); // Child link3
  navItems.push({ title: navThree("link1Link4"), href: "/ph-metre" }); // Child link4
  navItems.push({ title: navThree("link1Link5"), href: "/ozofagus-manometrisi" }); // Child link5
  console.log(navItems);

  return (
    <div className="lg:w-2/6 bg-secondary/50 dark:bg-secondary/70 w-full">
      <div className="flex flex-col gap-4 w-full p-7">
        {navItems.map((nav, i) => (
          <NavCard key={i} href={nav.href} title={nav.title} />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
