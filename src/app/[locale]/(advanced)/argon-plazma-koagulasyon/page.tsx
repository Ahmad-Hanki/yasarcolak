import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import ArgonPlazmaKoagulasyonClient from "./_components/ArgonPlazmaKoagulasyonClient";

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
          <ArgonPlazmaKoagulasyonClient />
        </Container>
      </div>
    </div>
  );
};

export default page;
