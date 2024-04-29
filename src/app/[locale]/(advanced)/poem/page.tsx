import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import PoemClient from "./_components/PoemClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="POEM"
        pathTr="POEM"
        titleEn="POEM"
        titleTr="POEM"
      />
      <div className="py-20">
        <Container>
          <PoemClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
