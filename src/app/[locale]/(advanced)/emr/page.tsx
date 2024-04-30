import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EmrClient from "./_components/EmrClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="EMR"
        pathTr="EMR"
        titleEn="Emr"
        titleTr="Emr"
      />
      <div className="py-20">
        <Container>
          <EmrClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
