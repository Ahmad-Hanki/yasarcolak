import SecHero from "@/components/SecHero";
import { useLocale } from "next-intl";
import Container from "@/components/ui/Container";
import KolonoskopiClient from "./_components/KolonoskopiClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="COLONOSCOPY"
        pathTr="KOLONOSKOPİ"
        titleEn="Colonoscopy"
        titleTr="Kolonoskopi"
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
