import SecHero from "@/components/SecHero";
import { useLocale } from "next-intl";
import GastroskopiClient from "./_components/GastroskopiClient";

const page = () => {
  return (
    <div>
      <SecHero
        title={useLocale() == "tr" ? "Gastroskopi" : "Gastroscopy"}
        path={useLocale() == "tr" ? "GASTROSKOPİ" : "GASTROSCOPY"}
      />
      <div>
        <GastroskopiClient/>
      </div>
    </div>
  );
};

export default page;
