import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EndoskopikStentUygulamalariClient from "./_components/EndoskopikStentUygulamalariClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="ENDOSCOPIC STENT APPLICATIONS"
        pathTr="ENDOSKOPİK STENT UYGULAMALARI
        "
        titleEn="Endoscopic Stent Applications"
        titleTr="Endoskopik Stent Uygulamaları
        "
      />
      <div className="py-20">
        <Container>
          <EndoskopikStentUygulamalariClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
