import { useLocale, useTranslations } from "next-intl";
import Logo from "../navbar/Logo";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <div className="">
      <footer className="footer p-10 bg-primary/80 text-white text-xl">
        <nav className="md:max-w-[350px] md:mx-auto">
          <Logo f={true} />
          <h1 className="mt-4">{t("title")}</h1>
          <div className="mt-4">
            <SocialIcons />
          </div>
        </nav>
        <nav className="space-y-3 md:max-w-[350px] md:mx-auto">
          <h6 className="footer-title">{t("links")}</h6>
          <Link href={"/"} className="link link-hover">
            {t("link1")}
          </Link>
          {/* <Link href={"/Hakkinda"} className="link link-hover">
            {t("link2")}
          </Link> */}
          <Link href={"/randevu-al"} className="link link-hover">
            {t("link3")}
          </Link>
          <Link href={"/iletisim"} className="link link-hover">
            {t("link4")}
          </Link>
          {/* {useLocale() == "tr" && (
            <Link href={"/blog"} className="link link-hover">
              {t("link5")}
            </Link>
          )} */}
        </nav>
        <nav className="space-y-3 md:max-w-[350px] md:mx-auto">
          <h6 className="footer-title">{t('contact')}</h6>
          <Link href={"tel:+905461109112"} className="link link-hover">
            {t("contact1")}
          </Link>
          <Link href={"mailto:info@yasarcolak.com"} className="link link-hover">
            {t("contact2")}
          </Link>
          <p className="">
            {t("contact3")}
          </p>
        </nav>
      </footer>

      <footer className="footer px-10 py-4 border-t bg-primary/80 text-white border-base-200">
        <nav className="mx-auto" >
          <h1 className="text-center text-3xl font-bold font-serif">
            {t('copyRights')}
          </h1>
        </nav>
      </footer>

    </div>
  );
};

export default Footer;
