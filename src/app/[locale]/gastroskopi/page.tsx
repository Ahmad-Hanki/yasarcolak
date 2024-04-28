import SecHero from "@/components/SecHero";
import { useLocale } from "next-intl";
import GastroskopiClient from "./_components/GastroskopiClient";
import Container from "@/components/ui/Container";

const page = () => {
  return (
    <div>
      <SecHero
        title={useLocale() == "tr" ? "Gastroskopi" : "Gastroscopy"}
        path={useLocale() == "tr" ? "GASTROSKOPİ" : "GASTROSCOPY"}
      />
      <div className="py-20">
        <Container>
          <GastroskopiClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
