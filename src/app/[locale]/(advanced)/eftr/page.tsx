import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EftrClient from "./_components/EftrClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="EFTR"
        pathTr="EFTR"
        titleEn="Eftr"
        titleTr="Eftr"
      />
      <div className="py-20">
        <Container>
          <EftrClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
