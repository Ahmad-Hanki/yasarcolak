import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import PhMetreClient from "./_components/PhMetreClient";

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
          <PhMetreClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
