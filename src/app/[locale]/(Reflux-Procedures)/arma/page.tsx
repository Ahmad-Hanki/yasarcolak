import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import ArmaClient from "./_components/ArmaClient";

const page = () => {
  return (
    <div>
      <SecHero
        titleEn=" Arma"
        pathEn="ARMA"
        pathTr=" ARMA"
        titleTr=" Arma"
      />
      <div className="py-20">
        <Container>
          <ArmaClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
