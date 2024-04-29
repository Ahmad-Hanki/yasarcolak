import SecHero from "@/components/SecHero";
import GastroskopiClient from "./_components/GastroskopiClient";
import Container from "@/components/ui/Container";

const page = () => {
  return (
    <div>
      <SecHero
        titleEn="Gastroscopy"
        pathEn="GASTROSCOPY"
        pathTr="GASTROSKOPİ"
        titleTr="Gastroskopi"
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
