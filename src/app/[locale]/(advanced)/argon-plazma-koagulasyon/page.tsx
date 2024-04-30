import SecHero from "@/components/SecHero";
import Container from "@/components/ui/Container";
import ArgonPlazmaKoagulasyonClient from "./_components/ArgonPlazmaKoagulasyonClient";

const page = () => {
  return (
    <div>
      <SecHero
        pathEn="ARGON PLASMA COAGULATION        "
        pathTr="ARGON PLAZMA KOAGÜLASYON        "
        titleEn="Argon Plasma Coagulation        "
        titleTr="Argon Plazma Koagülasyon        "
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
