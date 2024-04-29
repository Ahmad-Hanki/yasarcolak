import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import MideBalonuClient from "./_components/Mide-balonuClient";

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
          <MideBalonuClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
