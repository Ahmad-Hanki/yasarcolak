import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import EsdClient from "./_components/EsdClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="ESD"
        pathTr="ESD"
        titleEn="Esd"
        titleTr="Esd"
      />
      <div className="py-20">
        <Container>
          <EsdClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
