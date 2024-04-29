import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import KapsulEndoskopi from "./_components/kapsul-endoskopiClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="CAPSULE ENDOSCOPY"
        pathTr="KAPSÜL ENDOSKOPİ"
        titleEn="Capsule Endoscopy"
        titleTr="Kapsül Endoskopi"
      />
      <div className="py-20">
        <Container>
          <KapsulEndoskopi />
        </Container>
      </div>
    </div>
  );
};

export default page;
