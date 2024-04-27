import SecHero from "@/components/SecHero";
import { useLocale } from "next-intl";

const page = () => {
  return (
    <div>
      <SecHero
        title={useLocale() == "tr" ? "Gastroskopi" : "Gastroscopy"}
        path={useLocale() == "tr" ? "GASTROSKOPİ" : "GASTROSCOPY"}
      />
    </div>
  );
};

export default page;
