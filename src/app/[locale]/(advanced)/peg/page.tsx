import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import PegClient from "./_components/PegClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="PEG"
        pathTr="PEG"
        titleEn="Peg"
        titleTr="Peg"
      />
      <div className="py-20">
        <Container>
          <PegClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
