import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EndoskopikFundoplikasyonClient from "./_components/EndoskopikFundoplikasyonClient";

const page = () => {
  return (
    <div>
      <SecHero
        titleEn=" Endoscopic Fundoplication"
        pathEn="ENDOSCOPIC FUNDOPLICATION"
        pathTr=" ENDOSKOPİK FUNDOPLİKASYON"
        titleTr=" Endoskopik Fundoplikasyon"
      />
      <div className="py-20">
        <Container>
          <EndoskopikFundoplikasyonClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
