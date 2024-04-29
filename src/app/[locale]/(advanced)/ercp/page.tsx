import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import ErcpClient from "./_components/ErcpClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="ERCP"
        pathTr="ERCP"
        titleEn="Ercp"
        titleTr="Ercp"
      />
      <div className="py-20">
        <Container>
          <ErcpClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
