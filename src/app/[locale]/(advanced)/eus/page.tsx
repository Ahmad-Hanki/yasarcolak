import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EusClient from "./_components/EusClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="EUS"
        pathTr="EUS"
        titleEn="Eus"
        titleTr="Eus"
      />
      <div className="py-20">
        <Container>
          <EusClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
