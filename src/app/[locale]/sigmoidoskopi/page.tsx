import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import SigmoidoskopiClient from "./_components/sigmoidoskopiClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="SIGMOIDOSCOPY"
        pathTr="SİGMOİDOSKOPİ"
        titleEn="Sigmoidoscopy        "
        titleTr="Sigmoidoskopi        "
      />
      <div className="py-20">
        <Container>
          <SigmoidoskopiClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
