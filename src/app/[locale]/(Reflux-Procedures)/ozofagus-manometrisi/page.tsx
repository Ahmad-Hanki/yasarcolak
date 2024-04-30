import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EsophagealManometryClient from "./_components/EsophagealManometryClient ";

const page = () => {
  return (
    <div>
      <SecHero
        titleEn=" Esophageal Manometry        "
        pathEn="ESOPHAGEAL MANOMETRY        "
        pathTr=" ÖZOFAGUS MANOMETRİSİ        "
        titleTr=" Özofagus Manometrisi        "
      />
      <div className="py-20">
        <Container>
          <EsophagealManometryClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
