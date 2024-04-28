import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EndoskopikMideKucultmeiClient from "./_components/EndoskopikMideKucultmeiClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="ENDOSCOPIC SLEEVE GASTROPLASTY"
        pathTr="ENDOSKOPİK MİDE KÜÇÜLTME"
        titleEn="Endoscopic Sleeve Gastroplasty"
        titleTr="Endoskopik Mide Küçültme"
      />
      <div className="py-20">
        <Container>
          <EndoskopikMideKucultmeiClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
