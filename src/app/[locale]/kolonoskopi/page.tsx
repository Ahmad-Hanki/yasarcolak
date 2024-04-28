import SecHero from "@/components/SecHero";
import { useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import KolonoskopiClient from "./_components/KolonoskopiClient";

const page = () => {
  return (
    <div>
      <SecHero
        title={useLocale() == "tr" ? "Kolonoskopi" : "Colonoscopy"}
        path={useLocale() == "tr" ? "KOLONOSKOPİ" : "COLONOSCOPY"}
      />
      <div className="py-20">
        <Container>
          <KolonoskopiClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
