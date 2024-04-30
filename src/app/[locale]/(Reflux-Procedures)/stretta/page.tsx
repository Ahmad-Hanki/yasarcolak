import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import StarettaClient from "./_components/StrettaClient";

const page = () => {
  return (
    <div>
      <SecHero
        titleEn=" Stretta"
        pathEn="STRETTA"
        pathTr=" STRETTA"
        titleTr=" Stretta"
      />
      <div className="py-20">
        <Container>
          <StarettaClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
